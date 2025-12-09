"use server";

import { adminDb } from "@/lib/firebase-admin";
import {
    type User,
    type Song,
    type SongRequest,
    type Artist,
    type BlogPost,
    convertUser,
    convertSong,
    convertSongRequest,
    convertArtist,
    convertBlogPost,
    type JoinRequest,
    type CollaborationRequest,
    convertJoinRequest,
    convertCollaborationRequest,
    type HeroSlide,
    convertHeroSlide,
} from "./firestore-schema";

export async function getUserById(userId: string): Promise<User | null> {
    const doc = await adminDb.collection("users").doc(userId).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as User;
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const snapshot = await adminDb
        .collection("users")
        .where("email", "==", email)
        .limit(1)
        .get();

    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as User;
}

export async function createUser(
    userId: string,
    data: Omit<User, "id">
): Promise<User> {
    await adminDb.collection("users").doc(userId).set(data);
    return { id: userId, ...data };
}

export async function updateUser(
    userId: string,
    data: Partial<Omit<User, "id">>
): Promise<void> {
    await adminDb
        .collection("users")
        .doc(userId)
        .update({ ...data, updatedAt: new Date() });
}

// ============================================
// Song operations
// ============================================

export async function getAllSongs(): Promise<Song[]> {
    try {
        const snapshot = await adminDb
            .collection("songs")
            .orderBy("createdAt", "desc")
            .get();
        return snapshot.docs.map((doc) => convertSong({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log("No songs collection found or empty collection:", error);
        return [];
    }
}

export async function getPublishedSongs(): Promise<Song[]> {
    const snapshot = await adminDb
        .collection("songs")
        .where("status", "==", "published")
        .orderBy("createdAt", "desc")
        .get();
    return snapshot.docs.map((doc) => convertSong({ id: doc.id, ...doc.data() }));
}

export async function getSongById(songId: string): Promise<Song | null> {
    const doc = await adminDb.collection("songs").doc(songId).get();
    if (!doc.exists) return null;
    return convertSong({ id: doc.id, ...doc.data() });
}

export async function getSongsByGenre(genre: string): Promise<Song[]> {
    const snapshot = await adminDb
        .collection("songs")
        .where("genre", "==", genre)
        .where("status", "==", "published")
        .get();
    return snapshot.docs.map((doc) => convertSong({ id: doc.id, ...doc.data() }));
}

export async function getSongsByArtist(artist: string): Promise<Song[]> {
    const snapshot = await adminDb
        .collection("songs")
        .where("artist", "==", artist)
        .where("status", "==", "published")
        .get();
    return snapshot.docs.map((doc) => convertSong({ id: doc.id, ...doc.data() }));
}

export async function createSong(data: Omit<Song, "id" | "createdAt" | "updatedAt">): Promise<Song> {
    const docRef = await adminDb.collection("songs").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertSong({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

export async function updateSong(
    songId: string,
    data: Partial<Omit<Song, "id">>
): Promise<void> {
    await adminDb
        .collection("songs")
        .doc(songId)
        .update({ ...data, updatedAt: new Date() });
}

export async function deleteSong(songId: string): Promise<void> {
    await adminDb.collection("songs").doc(songId).delete();
}

// ============================================
// Song Request operations
// ============================================

export async function getAllSongRequests(): Promise<SongRequest[]> {
    try {
        const snapshot = await adminDb
            .collection("songRequests")
            .orderBy("createdAt", "desc")
            .get();
        return snapshot.docs.map((doc) =>
            convertSongRequest({ id: doc.id, ...doc.data() })
        );
    } catch (error) {
        console.log("No songRequests collection found or empty collection:", error);
        return [];
    }
}

export async function getSongRequestById(
    requestId: string
): Promise<SongRequest | null> {
    const doc = await adminDb.collection("songRequests").doc(requestId).get();
    if (!doc.exists) return null;
    return convertSongRequest({ id: doc.id, ...doc.data() });
}

export async function createSongRequest(
    data: Omit<SongRequest, "id" | "createdAt" | "updatedAt">
): Promise<SongRequest> {
    try {
        const docRef = await adminDb.collection("songRequests").add({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return convertSongRequest({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
    } catch (error) {
        console.error("Error creating song request:", error);
        throw new Error(`Failed to create song request: ${(error as Error).message}`);
    }
}

export async function updateSongRequest(
    requestId: string,
    data: Partial<Omit<SongRequest, "id">>
): Promise<void> {
    await adminDb
        .collection("songRequests")
        .doc(requestId)
        .update({ ...data, updatedAt: new Date() });
}

export async function deleteSongRequest(requestId: string): Promise<void> {
    await adminDb.collection("songRequests").doc(requestId).delete();
}

// ============================================
// Search and filter operations
// ============================================

export async function searchSongs(searchTerm: string): Promise<Song[]> {
    // Note: Firestore doesn't support full-text search natively
    // For production, consider using Algolia or similar service
    // This is a simple implementation searching by song name
    const snapshot = await adminDb
        .collection("songs")
        .where("status", "==", "published")
        .get();

    const songs = snapshot.docs.map(
        (doc) => convertSong({ id: doc.id, ...doc.data() })
    );

    return songs.filter(
        (song) =>
            song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

export async function getSongsByMultipleFilters(filters: {
    genre?: string;
    occasion?: string;
    vocal?: string;
}): Promise<Song[]> {
    let query = adminDb
        .collection("songs")
        .where("status", "==", "published") as any;

    if (filters.genre) {
        query = query.where("genre", "==", filters.genre);
    }
    if (filters.occasion) {
        query = query.where("occasion", "==", filters.occasion);
    }
    if (filters.vocal) {
        query = query.where("vocal", "==", filters.vocal);
    }

    const snapshot = await query.get();
    return snapshot.docs.map((doc: any) => convertSong({
        id: doc.id,
        ...doc.data(),
    }));
}

// ============================================
// Artist operations
// ============================================

export async function getAllArtists(): Promise<Artist[]> {
    try {
        const snapshot = await adminDb
            .collection("artists")
            .orderBy("name", "asc")
            .get();
        return snapshot.docs.map((doc) => convertArtist({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log("No artists collection found or empty collection:", error);
        return [];
    }
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
    const snapshot = await adminDb
        .collection("artists")
        .where("slug", "==", slug)
        .limit(1)
        .get();

    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return convertArtist({ id: doc.id, ...doc.data() });
}

export async function createArtist(data: Omit<Artist, "id" | "createdAt" | "updatedAt">): Promise<Artist> {
    const docRef = await adminDb.collection("artists").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertArtist({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

export async function updateArtist(
    artistId: string,
    data: Partial<Omit<Artist, "id">>
): Promise<void> {
    await adminDb
        .collection("artists")
        .doc(artistId)
        .update({ ...data, updatedAt: new Date() });
}

export async function deleteArtist(artistId: string): Promise<void> {
    await adminDb.collection("artists").doc(artistId).delete();
}

export async function getArtistById(artistId: string): Promise<Artist | null> {
    const doc = await adminDb.collection("artists").doc(artistId).get();
    if (!doc.exists) return null;
    return convertArtist({ id: doc.id, ...doc.data() });
}

// ============================================
// Blog Post operations
// ============================================

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const snapshot = await adminDb
            .collection("blogPosts")
            .orderBy("createdAt", "desc")
            .get();
        return snapshot.docs.map((doc) => convertBlogPost({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log("No blogPosts collection found or empty collection:", error);
        return [];
    }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
    const snapshot = await adminDb
        .collection("blogPosts")
        .where("published", "==", true)
        .orderBy("createdAt", "desc")
        .get();
    return snapshot.docs.map((doc) => convertBlogPost({ id: doc.id, ...doc.data() }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const snapshot = await adminDb
        .collection("blogPosts")
        .where("slug", "==", slug)
        .limit(1)
        .get();

    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return convertBlogPost({ id: doc.id, ...doc.data() });
}

export async function createBlogPost(data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<BlogPost> {
    const docRef = await adminDb.collection("blogPosts").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertBlogPost({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

export async function updateBlogPost(
    postId: string,
    data: Partial<Omit<BlogPost, "id">>
): Promise<void> {
    await adminDb
        .collection("blogPosts")
        .doc(postId)
        .update({ ...data, updatedAt: new Date() });
}

export async function deleteBlogPost(postId: string): Promise<void> {
    await adminDb.collection("blogPosts").doc(postId).delete();
}

export async function getBlogPostById(postId: string): Promise<BlogPost | null> {
    const doc = await adminDb.collection("blogPosts").doc(postId).get();
    if (!doc.exists) return null;
    return convertBlogPost({ id: doc.id, ...doc.data() });
}

// ============================================
// Service Request operations
// ============================================

export async function createJoinRequest(
    data: Omit<JoinRequest, "id" | "createdAt" | "updatedAt">
): Promise<JoinRequest> {
    const docRef = await adminDb.collection("joinRequests").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertJoinRequest({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

export async function createCollaborationRequest(
    data: Omit<CollaborationRequest, "id" | "createdAt" | "updatedAt">
): Promise<CollaborationRequest> {
    const docRef = await adminDb.collection("collaborationRequests").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertCollaborationRequest({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

// ============================================
// Hero Slide operations
// ============================================

export async function getHeroSlides(): Promise<HeroSlide[]> {
    try {
        const snapshot = await adminDb
            .collection("hero_slides")
            .orderBy("order", "asc")
            .get();
        return snapshot.docs.map((doc) => convertHeroSlide({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log("No hero_slides collection found or empty collection:", error);
        return [];
    }
}

export async function createHeroSlide(data: Omit<HeroSlide, "id" | "createdAt" | "updatedAt">): Promise<HeroSlide> {
    const docRef = await adminDb.collection("hero_slides").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return convertHeroSlide({ id: docRef.id, ...data, createdAt: new Date(), updatedAt: new Date() });
}

export async function updateHeroSlide(
    slideId: string,
    data: Partial<Omit<HeroSlide, "id">>
): Promise<void> {
    await adminDb
        .collection("hero_slides")
        .doc(slideId)
        .update({ ...data, updatedAt: new Date() });
}

export async function deleteHeroSlide(slideId: string): Promise<void> {
    await adminDb.collection("hero_slides").doc(slideId).delete();
}

export async function reorderHeroSlides(slides: { id: string; order: number }[]): Promise<void> {
    const batch = adminDb.batch();
    slides.forEach((slide) => {
        const ref = adminDb.collection("hero_slides").doc(slide.id);
        batch.update(ref, { order: slide.order, updatedAt: new Date() });
    });
    await batch.commit();
}

export async function getHeroSlideById(slideId: string): Promise<HeroSlide | null> {
    const doc = await adminDb.collection("hero_slides").doc(slideId).get();
    if (!doc.exists) return null;
    return convertHeroSlide({ id: doc.id, ...doc.data() });
}

// ============================================
// Contact Message operations
// ============================================

import { type ContactMessage, convertContactMessage } from "./firestore-schema";

export async function getContactMessages(): Promise<ContactMessage[]> {
    try {
        const snapshot = await adminDb
            .collection("contact_messages")
            .orderBy("createdAt", "desc")
            .get();
        return snapshot.docs.map((doc) => convertContactMessage({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log("No contact_messages collection found or empty collection:", error);
        return [];
    }
}
