"use server";

import { revalidatePath } from "next/cache";

import type { Song } from "@/lib/db/firestore-schema";
import { createSong as createSongInFirestore } from "@/lib/db/firestore-queries";

import { getServerUser } from "@/lib/auth-helpers";

export async function createSong({
  songName,
  songDescription,
  songUrl,
  songImage,

  artist,

  occasion,
  genre,
  vocal,
  status = "draft",
}: Omit<Song, "id" | "createdAt" | "updatedAt">) {
  const user = await getServerUser();
  if (!user || user.email !== "melodymakercontact@gmail.com") {
    return { data: null, error: "Unauthorized: You do not have permission to perform this action." };
  }
  console.log("CREATE SONG STARTED");
  console.log({
    songName,
    songDescription,
    songUrl,
    songImage,

    artist,

    occasion,
    genre,
    vocal,
  });

  try {
    const songRes = await createSongInFirestore({
      songName,
      songDescription,
      songUrl,
      songImage,

      artist,

      occasion,
      genre,
      vocal: vocal as "Male" | "Female" | "No preference",
      status,
    });

    console.log({ songRes });

    console.log("CREATE SONG ENDED");

    revalidatePath("/admin-dashboard");
    revalidatePath("/songs");

    return { data: { songRes }, error: null };
  } catch (error) {
    console.error("Error creating song:", error);
    return {
      data: null,
      error: `Failed to create song: ${(error as Error).message}`
    };
  }
}
