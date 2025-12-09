"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Song } from "@/lib/db/firestore-schema";

interface PlayerContextType {
    currentTrack: Song | null;
    playlist: Song[];
    isPlaying: boolean;
    volume: number;
    isMuted: boolean;
    currentTime: number;
    duration: number;
    playTrack: (song: Song) => void;
    togglePlay: () => void;
    setPlaylist: (songs: Song[]) => void;
    playNext: () => void;
    playPrev: () => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    seek: (time: number) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
    const [playlist, setPlaylistState] = useState<Song[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolumeState] = useState(70);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    // Update volume when state changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume / 100;
        }
    }, [volume, isMuted]);

    // Handle Play/Pause
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack]); // Re-run when track changes to ensure auto-play

    const playTrack = (song: Song) => {
        if (currentTrack?.id === song.id) {
            togglePlay();
        } else {
            setCurrentTrack(song);
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const setPlaylist = (songs: Song[]) => {
        setPlaylistState(songs);
    };

    const playNext = () => {
        if (!currentTrack || playlist.length === 0) return;
        const currentIndex = playlist.findIndex((s) => s.id === currentTrack.id);
        if (currentIndex < playlist.length - 1) {
            playTrack(playlist[currentIndex + 1]);
        } else {
            // Loop to start or stop? Let's stop for now, or loop to first.
            // Let's stop.
            setIsPlaying(false);
            setCurrentTime(0);
        }
    };

    const playPrev = () => {
        if (!currentTrack || playlist.length === 0) return;
        // If more than 3 seconds in, restart track
        if (currentTime > 3) {
            seek(0);
            return;
        }
        const currentIndex = playlist.findIndex((s) => s.id === currentTrack.id);
        if (currentIndex > 0) {
            playTrack(playlist[currentIndex - 1]);
        } else {
            seek(0);
        }
    };

    const setVolume = (vol: number) => {
        setVolumeState(vol);
        if (vol > 0 && isMuted) setIsMuted(false);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    // Audio Event Handlers
    const onTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const onLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const onEnded = () => {
        playNext();
    };

    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                playlist,
                isPlaying,
                volume,
                isMuted,
                currentTime,
                duration,
                playTrack,
                togglePlay,
                setPlaylist,
                playNext,
                playPrev,
                setVolume,
                toggleMute,
                seek,
                audioRef,
            }}
        >
            <audio
                ref={audioRef}
                src={currentTrack?.songUrl}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
}
