"use client";

import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, Play, Pause, Sparkles } from "lucide-react";
import { Artist, Song } from "@/lib/db/firestore-schema";
import { usePlayer } from "@/contexts/player-context";
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ArtistsClientProps {
    artists: Artist[];
    songs: Song[];
}

export function ArtistsClient({ artists, songs }: ArtistsClientProps) {
    const { playTrack, setPlaylist, currentTrack, isPlaying, togglePlay } = usePlayer();
    const [selectedGenre, setSelectedGenre] = useState("all");

    const allGenres = new Set<string>();
    artists.forEach((artist) => {
        artist.genre?.forEach((g) => allGenres.add(g));
    });
    const genres = ["all", ...Array.from(allGenres).sort()];

    const filteredArtists =
        selectedGenre === "all"
            ? artists
            : artists.filter((a) => a.genre?.includes(selectedGenre));

    const playArtistTrack = (artist: Artist) => {
        // Find songs by this artist
        const artistSongs = songs.filter(s => s.artist === artist.name);

        if (artistSongs.length > 0) {
            // Sort by newest first (optional, but good UX)
            // artistSongs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

            setPlaylist(artistSongs);
            playTrack(artistSongs[0]);
        } else {
            toast.error(`No tracks found for ${artist.name}`);
        }
    };

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-background to-background/50 flex items-center relative overflow-hidden pt-8 pb-4">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30 flex items-center gap-2 w-fit">
                            <Sparkles size={14} /> Featured Artists
                        </span>
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        Meet Our <span className="gradient-text">Visionary Artists</span>
                    </h1>
                    <p className="text-base text-foreground/70 max-w-2xl mx-auto">
                        Discover the incredible talent transforming modern music.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-4 border-b border-border sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="w-full max-w-xs">
                            <Select
                                value={selectedGenre}
                                onValueChange={setSelectedGenre}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Filter by Genre" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Genres</SelectItem>
                                    {Array.from(allGenres).sort().map((genre) => (
                                        <SelectItem key={genre} value={genre}>
                                            {genre}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artists Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredArtists.map((artist) => (
                            <Link key={artist.id} href={`/artist/${artist.slug}`}>
                                <Card className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 group cursor-pointer h-full holographic-card">
                                    {/* Artist Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={artist.image || "/placeholder.svg"}
                                            alt={artist.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent navigation
                                                    playArtistTrack(artist);
                                                }}
                                                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center transition-all"
                                            >
                                                {currentTrack?.artist === artist.name && isPlaying ? (
                                                    <Pause size={24} className="fill-white text-white" />
                                                ) : (
                                                    <Play size={24} className="fill-white text-white ml-1" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Artist Info */}
                                    <div className="p-6 space-y-3">
                                        <h3 className="text-lg font-bold text-balance">{artist.name}</h3>
                                        <div className="space-y-2">
                                            <div className="flex flex-wrap gap-2">
                                                {artist.genre?.map((g) => (
                                                    <span key={g} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                                        {g}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="pt-4 border-t border-border space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Music2 size={16} className="text-accent" />
                                                    <span className="text-sm font-semibold">
                                                        {/* Show actual track count if available, else mock */}
                                                        {songs.filter(s => s.artist === artist.name).length} tracks
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-foreground/50">Tracks available</p>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold">Ready to Collaborate?</h2>
                    <p className="text-lg text-foreground/70">
                        Connect with world-class artists, request personalized songs, or join our creative community.
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground px-8 py-6 text-lg h-auto font-semibold">
                        Explore Collaborations
                    </Button>
                </div>
            </section>
        </main>
    );
}
