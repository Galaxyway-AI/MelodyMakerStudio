"use server";

import { revalidatePath } from "next/cache";
import { Song } from "@/lib/db/firestore-schema";
import { updateSong as updateSongInFirestore } from "@/lib/db/firestore-queries";
import { requireAdmin } from "@/lib/auth-helpers";

export async function editSong(
  songId: string,
  data: Partial<Omit<Song, "id" | "createdAt" | "updatedAt">>
) {
  try {
    await requireAdmin();
  } catch (error) {
    return { error: (error as Error).message };
  }

  try {
    await updateSongInFirestore(songId, data);
    revalidatePath("/admin/songs");
    revalidatePath(`/admin/songs/${songId}`);
    return { success: true };
  } catch (error) {
    console.error("Error updating song:", error);
    return { error: `Failed to update song: ${(error as Error).message}` };
  }
}
