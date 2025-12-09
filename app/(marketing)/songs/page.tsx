import { getAllSongs } from "@/lib/db/firestore-queries";
import { SongsClient } from "./songs-client";

export const dynamic = "force-dynamic";

export default async function SongsPage() {
  const songs = await getAllSongs();
  return <SongsClient songs={songs} />;
}
