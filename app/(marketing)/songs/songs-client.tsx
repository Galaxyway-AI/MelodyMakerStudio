"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Heart, Share2, Search, Filter, Sparkles, Music2 } from "lucide-react";
import { usePlayer } from "@/contexts/player-context";
import { Song } from "@/lib/db/firestore-schema";

interface SongsClientProps {
    songs: Song[];
}

export function SongsClient({ songs }: SongsClientProps) {
    const { playTrack, setPlaylist, currentTrack, isPlaying, togglePlay } = usePlayer();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [sortBy, setSortBy] = useState("recent");

    const genres = ["all", ...new Set(songs.map((s) => s.genre))];

    let filtered = songs.filter((song) => {
        const matchesSearch =
            song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === "all" || song.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });

    if (sortBy === "popular") {
        // Mock sort by plays since we don't have it in DB yet
        filtered = [...filtered];
    } else if (sortBy === "liked") {
        // Mock sort by likes
        filtered = [...filtered];
    } else {
        // Recent (default)
        filtered = [...filtered].sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return (
        <main className="pt-16 min-h-screen bg-background">
            {/* Hero Section */}
            <section className="min-h-[50vh] bg-gradient-to-b from-background to-background/50 flex items-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/30 flex items-center gap-2 w-fit">
                            <Sparkles size={16} /> Personalized Creations
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Personalized <span className="gradient-text">Songs Showcase</span>
                    </h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                        Discover custom-made songs created by MelodyMaker Studio's world-class artists. Each piece is a unique
                        collaboration bringing visions to life.
                    </p>
                    <Link href="/services">
                        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground px-8 py-6 text-lg h-auto font-semibold">
                            Request Your Own Song
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-3.5 text-foreground/50" size={20} />
                            <input
                                type="text"
                                placeholder="Search by title or artist..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                            />
                        </div>

                        {/* Filter and Sort Controls */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex items-center gap-2">
                                <Filter size={18} className="text-foreground/50" />
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    className="px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent cursor-pointer"
                                >
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre} className="bg-card">
                                            {genre.charAt(0).toUpperCase() + genre.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent cursor-pointer"
                            >
                                <option value="recent" className="bg-card">
                                    Most Recent
                                </option>
                                <option value="popular" className="bg-card">
                                    Most Played
                                </option>
                                <option value="liked" className="bg-card">
                                    Most Liked
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Songs Grid */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <Music2 size={48} className="mx-auto text-foreground/30 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">No songs found</h3>
                            <p className="text-foreground/60">Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filtered.map((song) => (
                                <Card
                                    key={song.id}
                                    className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 group holographic-card h-full flex flex-col"
                                >
                                    {/* Cover Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={song.songImage || "/placeholder.svg"}
                                            alt={song.songName}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    setPlaylist(filtered);
                                                    playTrack(song);
                                                }}
                                                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg flex items-center justify-center transition-all"
                                            >
                                                {currentTrack?.id === song.id && isPlaying ? (
                                                    <Pause size={24} className="fill-white text-white" />
                                                ) : (
                                                    <Play size={24} className="fill-white text-white ml-1" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Song Info */}
                                    <div className="p-6 space-y-3 flex-grow flex flex-col">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-balance line-clamp-2">{song.songName}</h3>
                                            <p className="text-sm text-accent font-semibold">{song.artist}</p>
                                            {/* Using occasion as client name/context for now */}
                                            <p className="text-xs text-foreground/60">for {song.occasion}</p>
                                        </div>

                                        <div className="pt-2 space-y-2">
                                            <div className="flex items-center justify-between text-xs text-foreground/60">
                                                <span className="bg-primary/20 text-primary px-2 py-1 rounded">{song.genre}</span>
                                                {/* Mock duration */}
                                                <span>3:45</span>
                                            </div>
                                        </div>

                                        {/* Stats and Actions */}
                                        <div className="border-t border-border pt-3 mt-auto space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Music2 size={14} className="text-accent" />
                                                        <span className="text-foreground/70">5.2K</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Heart size={14} className="text-accent" />
                                                        <span className="text-foreground/70">340</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <button className="flex-1 px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded transition-colors text-sm font-semibold flex items-center justify-center gap-1">
                                                    <Heart size={14} /> Like
                                                </button>
                                                <button className="flex-1 px-3 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded transition-colors text-sm font-semibold flex items-center justify-center gap-1">
                                                    <Share2 size={14} /> Share
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold">Want Your Own Personalized Song?</h2>
                    <p className="text-lg text-foreground/70">
                        Collaborate with world-class artists to create a custom track that's uniquely yours. Request your song
                        today!
                    </p>
                    <Link href="/services">
                        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground px-8 py-6 text-lg h-auto font-semibold">
                            Request Personalized Song
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
