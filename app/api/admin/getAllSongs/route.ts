import { NextResponse } from "next/server";

import { testdb } from "@/lib/db/test-db";
import { songs } from "@/lib/db/testSchema";

export async function GET() {
  try {
    const result = await testdb
      .select({
        id: songs.id,

        songName: songs.songName,
        // songDescription: songs.songDescription,
        // duration: songs.duration,
        songImage: songs.songImage,
        // songUrl: songs.songUrl,

        artist: songs.artist,
        // artistBio: songs.artistBio,
        // artistCountry: songs.artistCountry,
        // artistImage: songs.artistImage,

        // albumName: songs.albumName,
        // albumDescription: songs.albumDescription,
        // albumImage: songs.albumImage,

        genre: songs.genre,
        style: songs.style,
        occasion: songs.occasion,
        vocal: songs.vocal,
      })
      .from(songs);

    return NextResponse.json({ data: result, error: null }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        data: null,
        error: `Something went wrong while fetching the songs. ${(error as Error).message}`,
      },
      { status: 500 }
    );
  }
}
