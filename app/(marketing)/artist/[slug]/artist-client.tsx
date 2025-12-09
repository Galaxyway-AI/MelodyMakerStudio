"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Play,
    Pause,
    Music2,
    Youtube,
    Twitter,
    Instagram,
    SproutIcon as Spotify,
    Mail,
    MessageSquare,
    Zap,
} from "lucide-react";
import { usePlayer } from "@/contexts/player-context";

interface ArtistClientProps {
    artist: Artist;
    songs: Song[];
}

export function ArtistClient({ artist, songs }: ArtistClientProps) {
    const { playTrack, setPlaylist, currentTrack, isPlaying, togglePlay } = usePlayer();

    return (
        <main className="pt-16 min-h-screen bg-background">
            {/* Cover Section */}
            <div className="relative h-96 overflow-hidden group">
                <img
                    src={artist.image || "/placeholder.svg"} // Using image as cover for now
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>

            {/* Artist Info */}
            <section className="bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Artist Card */}
                        <div className="md:col-span-1">
                            <div className="sticky top-20">
                                <Card className="bg-card border-border overflow-hidden holographic-card">
                                    <img
                                        src={artist.image || "/placeholder.svg"}
                                        alt={artist.name}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="p-6 space-y-4">
                                        <h1 className="text-3xl font-bold">{artist.name}</h1>
                                        <div className="flex flex-wrap gap-2">
                                            {artist.genre?.map((g) => (
                                                <span
                                                    key={g}
                                                    className="text-xs bg-primary/30 text-primary px-3 py-1 rounded-full font-semibold"
                                                >
                                                    {g}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="border-t border-border pt-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-foreground/60">Total Streams</span>
                                                <span className="font-bold text-lg gradient-text">
                                                    5.2M
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-foreground/60">Tracks</span>
                                                <span className="font-bold text-lg gradient-text">{songs.length}</span>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="border-t border-border pt-4">
                                            <p className="text-sm font-semibold mb-3">Connect</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {artist.spotify && (
                                                    <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                                                        <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all">
                                                            <Spotify size={18} />
                                                        </button>
                                                    </a>
                                                )}
                                                {artist.youtube && (
                                                    <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
                                                        <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all">
                                                            <Youtube size={18} />
                                                        </button>
                                                    </a>
                                                )}
                                                {artist.instagram && (
                                                    <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                                                        <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all">
                                                            <Instagram size={18} />
                                                        </button>
                                                    </a>
                                                )}
                                                {artist.twitter && (
                                                    <a href={artist.twitter} target="_blank" rel="noopener noreferrer">
                                                        <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all">
                                                            <Twitter size={18} />
                                                        </button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="border-t border-border pt-4 space-y-2">
                                            <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold">
                                                <MessageSquare size={18} /> Collaborate
                                            </Button>
                                            <Button variant="outline" className="w-full border-border hover:bg-muted bg-transparent">
                                                <Mail size={18} /> Book Artist
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            {/* Bio */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">About</h2>
                                <p className="text-lg text-foreground/70 leading-relaxed">{artist.bio}</p>
                            </div>

                            {/* Top Tracks */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Popular Tracks</h2>
                                <div className="space-y-2">
                                    {songs.length === 0 ? (
                                        <p className="text-muted-foreground">No tracks found.</p>
                                    ) : (
                                        songs.map((track, idx) => (
                                            <Card
                                                key={track.id}
                                                className="bg-card border-border p-4 hover:border-accent/50 transition-all group cursor-pointer holographic-card"
                                                onClick={() => {
                                                    setPlaylist(songs);
                                                    playTrack(track);
                                                }}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        {currentTrack?.id === track.id && isPlaying ? (
                                                            <Pause size={20} className="text-white" />
                                                        ) : (
                                                            <Play size={20} className="text-white fill-white" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-semibold truncate">
                                                            {idx + 1}. {track.songName}
                                                        </p>
                                                        <p className="text-sm text-foreground/60">
                                                            50K plays • 3:45
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Music2 size={16} className="text-accent" />
                                                        <span className="text-sm font-semibold">50K</span>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Videos */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Featured Videos</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {artist.videos?.map((videoId) => (
                                        <a
                                            key={videoId}
                                            href={`https://youtube.com/watch?v=${videoId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                        >
                                            <Card className="bg-card border-border overflow-hidden h-48 holographic-card hover:border-accent/50 transition-all relative">
                                                <img
                                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                                    alt="Video thumbnail"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        // Fallback to hqdefault if maxresdefault doesn't exist
                                                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                        <Play size={20} className="fill-white text-white ml-1" />
                                                    </div>
                                                </div>
                                            </Card>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Collaboration CTA */}
                            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-accent/30 p-8 holographic-card">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold flex items-center gap-2">
                                        <Zap size={28} className="text-accent" />
                                        Interested in Collaborating?
                                    </h3>
                                    <p className="text-foreground/70">
                                        Connect with {artist.name} for personalized songs, remixes, or production collaborations. Let's
                                        create something amazing together!
                                    </p>
                                    <div className="flex gap-3 pt-4">
                                        <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold">
                                            <MessageSquare size={18} /> Collaborate Now
                                        </Button>
                                        <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
                                            Request Song
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
