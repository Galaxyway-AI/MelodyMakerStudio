"use server";

import { createSong, createArtist, createBlogPost } from "@/lib/db/firestore-queries";
import { revalidatePath } from "next/cache";

export async function seedDatabase() {
    try {
        // Seed Artists
        const artists = [
            {
                name: "Franky Wright",
                slug: "Franky_Wright",
                bio: "Electronic music pioneer blending futuristic sounds with emotional depth. Known for innovative production techniques and boundary-pushing collaborations.",
                image: "/placeholder.svg?key=hq3k7",
                genre: ["Electronic", "House", "Techno"],
                videos: ["1", "2", "3"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-purple-600 to-cyan-400",
            },
            {
                name: "Beverly Hills",
                slug: "Beverly_Hills",
                bio: "Hip-hop virtuoso crafting lyrical masterpieces with soulful beats. Multi-Grammy winner bringing authenticity and innovation to modern rap.",
                image: "/placeholder.svg?key=nka3w",
                genre: ["Hip-Hop", "Rap", "Soul"],
                videos: ["4", "5", "6"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-amber-600 to-orange-500",
            },
            {
                name: "MC Da-Hills",
                slug: "MC_Da_Hills",
                bio: "Urban music legend with a unique blend of storytelling and production. Creating tracks that resonate with millions globally.",
                image: "/placeholder.svg?key=irulr",
                genre: ["Urban", "Rap", "R&B"],
                videos: ["7", "8", "9"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-red-600 to-blue-600",
            },
            {
                name: "Obi Golden",
                slug: "Obi_Golden",
                bio: "Afrobeats sensation revolutionizing global music. Grammy-nominated artist bringing African rhythms to the world stage.",
                image: "/placeholder.svg?key=qu3fe",
                genre: ["Afrobeats", "Pop", "Dance"],
                videos: ["10", "11", "12"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-yellow-600 to-green-500",
            },
            {
                name: "Queen - Idia",
                slug: "Queen_Idia",
                bio: "Visionary pop artist pushing creative boundaries. Known for experimental production and genre-bending collaborations.",
                image: "/placeholder.svg?key=0p1hu",
                genre: ["Pop", "Experimental", "Synth-Pop"],
                videos: ["13", "14", "15"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-pink-600 to-purple-500",
            },
            {
                name: "Jojo The Creator",
                slug: "Jojo_The_Creator",
                bio: "Producer and artist extraordinaire creating cinematic soundscapes. Specializing in film scores and immersive audio experiences.",
                image: "/artist-jojo-the-creator-film-score-composer.jpg",
                genre: ["Cinematic", "Electronic", "Ambient"],
                videos: ["16", "17", "18"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-blue-600 to-teal-500",
            },
            {
                name: "Franklin Ugwu",
                slug: "Franklin_Ugwu",
                bio: "Contemporary music producer blending traditional and modern sounds. Creating authentic productions that celebrate cultural diversity.",
                image: "/artist-franklin-ugwu-world-music-producer.jpg",
                genre: ["World Music", "Pop", "Fusion"],
                videos: ["19", "20", "21"],
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                spotify: "https://spotify.com",
                youtube: "https://youtube.com",
                color: "from-orange-600 to-blue-500",
            },
        ];

        for (const artist of artists) {
            await createArtist(artist);
        }

        // Seed Songs
        const songs = [
            {
                songName: "Corporate Dreams",
                songDescription: "A custom corporate jingle blending electronic innovation with professional branding.",
                songImage: "/placeholder.svg?key=song1",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                artist: "Franky Wright",
                occasion: "Corporate",
                genre: "Electronic",
                vocal: "No preference" as const,
                status: "published" as const,
            },
            {
                songName: "Wedding Bliss",
                songDescription: "A beautiful soulful composition created specially for a wedding celebration.",
                songImage: "/placeholder.svg?key=song2",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                artist: "Beverly Hills",
                occasion: "Wedding",
                genre: "Soul",
                vocal: "Female" as const,
                status: "published" as const,
            },
            {
                songName: "Brand Anthem",
                songDescription: "An energetic afrobeats brand anthem that captures innovation and movement.",
                songImage: "/placeholder.svg?key=song3",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                artist: "Obi Golden",
                occasion: "Brand",
                genre: "Afrobeats",
                vocal: "Male" as const,
                status: "published" as const,
            },
            {
                songName: "Cinematic Moments",
                songDescription: "An epic cinematic composition perfect for film trailers and promotional videos.",
                songImage: "/placeholder.svg?key=song4",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                artist: "Jojo The Creator",
                occasion: "Film",
                genre: "Cinematic",
                vocal: "No preference" as const,
                status: "published" as const,
            },
            {
                songName: "Wellness Journey",
                songDescription: "A soothing ambient track designed for meditation and wellness experiences.",
                songImage: "/placeholder.svg?key=song5",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
                artist: "Franklin Ugwu",
                occasion: "Wellness",
                genre: "Ambient",
                vocal: "No preference" as const,
                status: "published" as const,
            },
            {
                songName: "Urban Vibes",
                songDescription: "A personalized hip-hop track celebrating individual urban culture and style.",
                songImage: "/placeholder.svg?key=song6",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                artist: "MC Da-Hills",
                occasion: "Personal",
                genre: "Hip-Hop",
                vocal: "Male" as const,
                status: "published" as const,
            },
            {
                songName: "Pop Revolution",
                songDescription: "A chart-ready pop single with experimental production and modern appeal.",
                songImage: "/placeholder.svg?key=song7",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
                artist: "Queen - Idia",
                occasion: "Single",
                genre: "Pop",
                vocal: "Female" as const,
                status: "published" as const,
            },
            {
                songName: "Success Story",
                songDescription: "An inspirational hip-hop track celebrating entrepreneurship and personal growth.",
                songImage: "/placeholder.svg?key=song8",
                songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
                artist: "Beverly Hills",
                occasion: "Podcast",
                genre: "Hip-Hop",
                vocal: "Male" as const,
                status: "published" as const,
            },
        ];

        for (const song of songs) {
            await createSong(song);
        }

        // Seed Blog Posts
        const posts = [
            {
                title: "The Future of AI Music",
                slug: "future-of-ai-music",
                content: "AI is revolutionizing the music industry...",
                excerpt: "How artificial intelligence is changing the way we create and consume music.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                author: "Admin",
                published: true,
            },
            {
                title: "Top 10 Wedding Songs of 2024",
                slug: "top-wedding-songs-2024",
                content: "Here are the most requested songs for weddings this year...",
                excerpt: "Curated list of romantic hits for your special day.",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
                author: "Admin",
                published: false,
            },
        ];

        for (const post of posts) {
            await createBlogPost(post);
        }

        revalidatePath("/admin");
        return { success: true, message: "Database seeded successfully!" };
    } catch (error) {
        console.error("Seeding error:", error);
        return { success: false, error: "Failed to seed database." };
    }
}
