"use server";

import { adminDb } from "@/lib/firebase-admin";
import { Artist } from "@/lib/db/firestore-schema";

export async function createArtist(data: Omit<Artist, "id" | "createdAt" | "updatedAt">) {
    try {
        const docRef = await adminDb.collection("artists").add({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return { success: true, data: { id: docRef.id, ...data } };
    } catch (error) {
        console.error("Error creating artist:", error);
        return { error: "Failed to create artist" };
    }
}
