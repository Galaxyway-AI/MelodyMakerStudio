"use server";

import { adminDb } from "@/lib/firebase-admin";
import { BlogPost } from "@/lib/db/firestore-schema";

export async function createBlogPost(data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">) {
    try {
        const docRef = await adminDb.collection("blogPosts").add({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return { success: true, data: { id: docRef.id, ...data } };
    } catch (error) {
        console.error("Error creating blog post:", error);
        return { error: "Failed to create blog post" };
    }
}
