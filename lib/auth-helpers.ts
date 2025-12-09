"use server";

import { cookies } from "next/headers";
import { adminAuth } from "./firebase-admin";

/**
 * Get the current user from Firebase session cookie
 * Server-side only
 */
export async function getServerUser() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;
    if (!sessionCookie) return null;

    try {
        const decodedClaims = await adminAuth.verifySessionCookie(
            sessionCookie,
            true
        );
        return await adminAuth.getUser(decodedClaims.uid);
    } catch (error) {
        console.error("Error verifying session:", error);
        return null;
    }
}

/**
 * Require authentication - throws error if not authenticated
 * Use this in server actions that require authentication
 */
export async function requireAuth() {
    const user = await getServerUser();
    if (!user) {
        throw new Error("Unauthorized - Please sign in");
    }
    return user;
}

/**
 * Require admin authentication - throws error if not authenticated or not admin
 */
export async function requireAdmin() {
    const user = await getServerUser();
    if (!user || user.email !== "melodymakercontact@gmail.com") {
        throw new Error("Unauthorized - Admin access required");
    }
    return user;
}

/**
 * Create session cookie from Firebase ID token
 * Call this from a server action after successful login
 */
export async function createSessionCookie(idToken: string) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    try {
        const sessionCookie = await adminAuth.createSessionCookie(idToken, {
            expiresIn,
        });

        const cookieStore = await cookies();
        cookieStore.set("session", sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        return { success: true };
    } catch (error) {
        console.error("Error creating session cookie:", error);
        return { success: false, error: "Failed to create session" };
    }
}

/**
 * Delete session cookie
 * Call this on sign out
 */
export async function deleteSessionCookie() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}

/**
 * Verify ID token and return user
 */
export async function verifyIdToken(idToken: string) {
    try {
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        return await adminAuth.getUser(decodedToken.uid);
    } catch (error) {
        console.error("Error verifying ID token:", error);
        return null;
    }
}
