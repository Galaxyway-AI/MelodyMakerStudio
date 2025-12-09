import { getAllArtists, getAllSongs } from "@/lib/db/firestore-queries";
import { ArtistsClient } from "./artists-client";

export const dynamic = "force-dynamic";

export default async function ArtistsPage() {
  const [artists, songs] = await Promise.all([getAllArtists(), getAllSongs()]);
  return <ArtistsClient artists={artists} songs={songs} />;
}
