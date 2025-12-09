"use server";

import { revalidatePath } from "next/cache";

import { createSongRequest } from "@/lib/db/firestore-queries";

type RequestedSong = {
  name: string;
  email: string;
  genre?: string;
  occasion?: string;
  style?: string;
  vocal?: string;
  story?: string;
  mustIncludes?: string[];
  extraAddons?: string;
  expressService?: string;
  referralSource?: string;
};

export async function createRequestedSong({
  name,
  email,
  genre,
  occasion,
  style,
  vocal,
  story,
  mustIncludes,
  extraAddons,
  expressService,
  referralSource,
}: RequestedSong) {
  console.log("SONG REQUEST START");
  try {
    const result = await createSongRequest({
      name,
      email,
      genre,
      occasion,
      style,
      vocal,
      story,
      mustIncludes,
      extraAddons,
      expressService,
      referralSource,
    });

    console.log("SONG REQUEST END - Saved to Firestore:", result.id);
    revalidatePath("/admin/requested-songs");

    return { data: { resId: result.id }, error: null };
  } catch (error) {
    console.log({ error });
    return { data: null, error: (error as Error).message };
  }
}
