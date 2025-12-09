import { getArtistBySlug, getSongsByArtist } from "@/lib/db/firestore-queries";
import { ArtistClient } from "./artist-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);

  if (!artist) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Artist Not Found</h1>
          <p className="text-foreground/60">The artist you're looking for doesn't exist.</p>
          <Link href="/artists">
            <Button className="bg-primary">Back to Artists</Button>
          </Link>
        </div>
      </main>
    );
  }

  const songs = await getSongsByArtist(artist.name);

  return <ArtistClient artist={artist} songs={songs} />;
}
