import { NextResponse } from "next/server";

// import { eq } from "drizzle-orm";

import { testdb } from "@/lib/db/test-db";
import { songs } from "@/lib/db/testSchema";

export async function GET() {
  //   const result = await testdb.query.songs.findMany({
  //     columns: {
  //       name: true,
  //     },
  //     with: {
  //       album: {
  //         columns: {
  //           name: true, // include only the title column from albums
  //         },
  //         with: {
  //           artist: {
  //             columns: {
  //               name: true, // include only the name column from artists
  //             },
  //           },
  //         },
  //       },
  //       artist: {
  //         columns: {
  //           name: true, // include only the name column from artists
  //         },
  //       },
  //     },
  //   });

  try {
    const result = await testdb
      .select({
        id: songs.id,
        songName: songs.songName,
        artist: songs.artist,
        url: songs.songUrl,
        image: songs.songImage,
        duration: songs.duration,
      })
      .from(songs);

    console.log("rrrrrrrrr ", result);

    return NextResponse.json({ data: result, error: null }, { status: 200 });
  } catch (error) {
    console.log("errorrr  ", error);
    return NextResponse.json(
      {
        data: null,
        error: `Something went wrong while fetching the songs. ${(error as Error).message}`,
      },
      { status: 500 }
    );
  }
}
