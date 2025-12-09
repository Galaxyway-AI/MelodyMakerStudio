"use server";

import { revalidatePath } from "next/cache";

import { adminDb, adminStorage } from "@/lib/firebase-admin";
import { requireAdmin } from "@/lib/auth-helpers";

export async function deleteSong({
  id,
  songUrl,
  songImage,
  artistImage,
  albumImage,
}: {
  id: string;
  songUrl?: string;
  songImage?: string;
  artistImage?: string;
  albumImage?: string;
}) {
  try {
    await requireAdmin();
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }

  console.log("DELETE SONG STARTED");
  try {
    console.log({
      id,
      songUrl,
      songImage,
      artistImage,
      albumImage,
    });

    // Delete files from Firebase Storage
    const filesToDelete = [songUrl, songImage, artistImage, albumImage];

    await Promise.all(
      filesToDelete.map(async (url) => {
        if (url) {
          try {
            // Extract path from URL
            const matches = url.match(/\/o\/(.+?)\?/);
            if (matches && matches[1]) {
              const path = decodeURIComponent(matches[1]);
              console.log(`Deleting file at path: ${path}`);
              const bucket = adminStorage.bucket();
              await bucket.file(path).delete();
            }
          } catch (fileError) {
            console.error(`Error deleting file ${url}:`, fileError);
            // Continue deleting other files and the song entry even if a file deletion fails
          }
        }
      })
    );

    // Delete song from Firestore
    await adminDb.collection("songs").doc(id).delete();

    revalidatePath("/admin-dashboard");
    revalidatePath("/songs");

    console.log("DELETE SONG ENDED");
    return {
      data: "Successfully deleted the song",
      error: null,
    };
  } catch (e) {
    console.error(e);
    return {
      data: null,
      error: `Something went wrong while deleting the song ${(e as Error).message}`,
    };
  }
}
