"use server";

import { revalidatePath } from "next/cache";
import { Song } from "@/lib/db/firestore-schema";
import { updateSong as updateSongInFirestore } from "@/lib/db/firestore-queries";
import { getServerUser } from "@/lib/auth-helpers";

export async function editSong(
  songId: string,
  data: Partial<Omit<Song, "id" | "createdAt" | "updatedAt">>
) {
  const user = await getServerUser();
  if (!user || user.email !== "melodymakercontact@gmail.com") {
    return { error: "Unauthorized: You do not have permission to perform this action." };
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
