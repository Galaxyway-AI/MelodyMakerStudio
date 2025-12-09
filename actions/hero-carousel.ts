"use server";

import {
    createHeroSlide,
    deleteHeroSlide,
    updateHeroSlide,
    reorderHeroSlides,
} from "@/lib/db/firestore-queries";
import { revalidatePath } from "next/cache";
import { HeroSlide } from "@/lib/db/firestore-schema";

export async function createHeroSlideAction(data: Omit<HeroSlide, "id" | "createdAt" | "updatedAt">) {
    try {
        await createHeroSlide(data);
        revalidatePath("/admin/hero-carousel");
        revalidatePath("/"); // Update homepage
        return { success: true };
    } catch (error) {
        console.error("Error creating hero slide:", error);
        return { success: false, error: "Failed to create hero slide" };
    }
}

export async function updateHeroSlideAction(id: string, data: Partial<Omit<HeroSlide, "id">>) {
    try {
        await updateHeroSlide(id, data);
        revalidatePath("/admin/hero-carousel");
        revalidatePath("/"); // Update homepage
        return { success: true };
    } catch (error) {
        console.error("Error updating hero slide:", error);
        return { success: false, error: "Failed to update hero slide" };
    }
}

export async function deleteHeroSlideAction(id: string) {
    try {
        await deleteHeroSlide(id);
        revalidatePath("/admin/hero-carousel");
        revalidatePath("/"); // Update homepage
        return { success: true };
    } catch (error) {
        console.error("Error deleting hero slide:", error);
        return { success: false, error: "Failed to delete hero slide" };
    }
}

export async function reorderHeroSlidesAction(slides: { id: string; order: number }[]) {
    try {
        await reorderHeroSlides(slides);
        revalidatePath("/admin/hero-carousel");
        revalidatePath("/"); // Update homepage
        return { success: true };
    } catch (error) {
        console.error("Error reordering hero slides:", error);
        return { success: false, error: "Failed to reorder hero slides" };
    }
}
