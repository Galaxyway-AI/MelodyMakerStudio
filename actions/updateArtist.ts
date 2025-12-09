"use server";

import { revalidatePath } from "next/cache";
import { Artist } from "@/lib/db/firestore-schema";
import { updateArtist as updateArtistInFirestore } from "@/lib/db/firestore-queries";
import { getServerUser } from "@/lib/auth-helpers";

export async function updateArtist(
    artistId: string,
    data: Partial<Omit<Artist, "id" | "createdAt" | "updatedAt">>
) {
    const user = await getServerUser();
    if (!user || user.email !== "melodymakercontact@gmail.com") {
        return { error: "Unauthorized: You do not have permission to perform this action." };
    }

    try {
        await updateArtistInFirestore(artistId, data);
        revalidatePath("/admin/artists");
        revalidatePath(`/admin/artists/${artistId}`);
        if (data.slug) {
            revalidatePath(`/artist/${data.slug}`);
        }
        return { success: true };
    } catch (error) {
        console.error("Error updating artist:", error);
        return { error: `Failed to update artist: ${(error as Error).message}` };
    }
}
