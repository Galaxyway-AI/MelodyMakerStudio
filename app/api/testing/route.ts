// import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

// import { testdb } from "@/lib/db/test-db";
// import { songRequests } from "@/lib/db/testSchema";

// import { hash } from "bcryptjs";
// import type { SQL} from "drizzle-orm";
// import { and, eq, sql } from "drizzle-orm";
// import type { AnyPgColumn } from "drizzle-orm/pg-core";

// import { testdb } from "@/lib/db/test-db";

export const GET = async () => {
  // const artistsRes = await testdb.select({}).from(artists);
  // console.log(artistsRes);

  // const result = await testdb
  //   .select({
  //     name: artists.name,
  //     bio: artists.bio,
  //     country: artists.country,
  //     url: mediaTable.image_url,
  //     type: mediaTable.type,
  //   })
  //   .from(artists)
  //   .leftJoin(mediaTable, eq(artists.id, mediaTable.artist_id));

  // console.log({ result });

  // const hashe.select().from(artists)("12345678", 10);

  // await testdb
  // .insert(users)
  // .values({ username: randomUUID(), email: "test@gmail.com", password: hashedPassword });

  // Custom lower function
  // function lower(column: AnyPgColumn): SQL {
  //   return sql`lower(${column})`;
  // }

  // const existingArtist = await testdb
  //   .select()
  //   .from(artists)
  //   .where(
  //     and(
  //       eq(lower(artists.name), "Mehedi artistt".toLocaleLowerCase()),
  //       eq(lower(artists.country), "bangladesh".toLocaleLowerCase())
  //     )
  //   ).then(res => res[0]);

  // console.log(existingArtist);

  // const result = await testdb.query.songs.findMany({
  //   with: {
  //     album: {
  //       with: {
  //         artist: true,
  //       },
  //     },
  //     artist: true,
  //   },
  // });
  // const result = await testdb.query.albums.findMany({
  //   with: {
  //     songs: {
  //       with: {
  //         artist: true,
  //       },
  //     },
  //     artist: true,
  //   },
  // });

  // const result = await testdb.query.albums.findMany({
  //   columns: {
  //     name: true,
  //   },
  //   with: {
  //     songs: {
  //       with: {
  //         artist: true,
  //       },
  //     },
  //     // artist: true,
  //   },
  // });

  // const result = await testdb.query.songs.findMany({
  //   columns: {
  //     name: true, // include only the title column from songs
  //   },
  //   with: {
  //     album: {
  //       columns: {
  //         name: true, // include only the title column from albums
  //       },
  //       with: {
  //         artist: {
  //           columns: {
  //             name: true, // include only the name column from artists
  //           },
  //         },
  //       },
  //     },
  //     artist: {
  //       columns: {
  //         name: true, // include only the name column from artists
  //       },
  //     },
  //   },
  // });

  // console.log(result);

  try {
    // console.log("SONG REQUEST START");
    // const res = await testdb
    //   .insert(songRequests)
    //   .values({
    //     name: "name ",
    //     email: "test@gmail.com",
    //     genre: "Popp",
    //     occasion: "birthday",
    //     style: "sad",
    //     vocal: "Male",
    //     story: "test story",
    //     mustIncludes: ["include test"],
    //     referralSource: "social media",
    //   })
    //   .returning({ id: songRequests.id })
    //   .then((res) => res[0]);

    // console.log(res);

    console.log("SONG REQUEST END");

    return NextResponse.json({ data: "testing", error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: null, error: `Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
};
