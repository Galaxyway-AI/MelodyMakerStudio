import { NextResponse } from "next/server";
import { createSongRequest } from "@/lib/db/firestore-queries";

type RequestedSong = {
  name: string;
  email: string;
  genre: string;
  occasion: string;
  style: string;
  vocal: string;
  story: string;
  must_include?: string[];
  referral_source?: string;
  extra_addons?: string;
  express_service?: string;
};

export async function POST(req: Request) {
  try {
    console.log("SONG REQUEST START");

    const {
      name,
      email,
      genre,
      occasion,
      style,
      vocal,
      story,
      must_include,
      referral_source,
      extra_addons,
      express_service,
    } = (await req.json()) as RequestedSong;

    console.log({
      name,
      email,
      genre,
      occasion,
      style,
      vocal,
      story,
      must_include,
      referral_source,
      extra_addons,
      express_service,
    });

    // Save to Firestore
    const result = await createSongRequest({
      name,
      email,
      genre,
      occasion,
      style,
      vocal,
      story,
      mustIncludes: must_include,
      referralSource: referral_source,
      extraAddons: extra_addons || "",
      expressService: express_service || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("SONG REQUEST END - Saved to Firestore:", result.id);

    return NextResponse.json({ data: result, error: null }, { status: 200 });
  } catch (error) {
    console.error("Error creating song request:", error);
    return NextResponse.json(
      { data: null, error: `Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
