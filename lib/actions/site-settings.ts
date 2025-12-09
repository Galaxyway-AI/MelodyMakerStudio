"use server";

import { adminDb } from "@/lib/firebase-admin";
import { AnimationSettings } from "@/lib/db/firestore-schema";
import { revalidatePath } from "next/cache";

const SETTINGS_COLLECTION = "site_settings";
const ANIMATION_DOC_ID = "animation";

const DEFAULT_ANIMATION_SETTINGS: AnimationSettings = {
    id: ANIMATION_DOC_ID,
    enabled: true,
    speed: 0.5,
    density: 20,
    glowIntensity: 0.5,
    updatedAt: new Date(),
};

export async function getAnimationSettings(): Promise<AnimationSettings> {
    try {
        const docRef = adminDb.collection(SETTINGS_COLLECTION).doc(ANIMATION_DOC_ID);
        const doc = await docRef.get();

        if (!doc.exists) {
            // Create default settings if not exists
            await docRef.set({
                ...DEFAULT_ANIMATION_SETTINGS,
                updatedAt: new Date(), // Use server timestamp ideally, but Date is fine for now
            });
            return DEFAULT_ANIMATION_SETTINGS;
        }

        const data = doc.data();
        return {
            id: ANIMATION_DOC_ID,
            enabled: data?.enabled ?? true,
            speed: data?.speed ?? 0.5,
            density: data?.density ?? 20,
            glowIntensity: data?.glowIntensity ?? 0.5,
            updatedAt: data?.updatedAt?.toDate() ?? new Date(),
        };
    } catch (error) {
        console.error("Error fetching animation settings:", error);
        return DEFAULT_ANIMATION_SETTINGS;
    }
}

export async function updateAnimationSettings(settings: Partial<AnimationSettings>) {
    try {
        const docRef = adminDb.collection(SETTINGS_COLLECTION).doc(ANIMATION_DOC_ID);
        await docRef.set({
            ...settings,
            updatedAt: new Date(),
        }, { merge: true });

        revalidatePath("/"); // Revalidate home page
        revalidatePath("/admin/settings/appearance"); // Revalidate admin page

        return { success: true };
    } catch (error) {
        console.error("Error updating animation settings:", error);
        return { success: false, error: "Failed to update settings" };
    }
}
