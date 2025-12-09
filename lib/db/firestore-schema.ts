// Firestore schema type definitions for MelodyMakerStudio

export type VocalType = "Male" | "Female" | "No preference";
export type StatusType = "draft" | "published";

// User document in 'users' collection
export interface User {
    id: string; // Document ID (same as Firebase Auth UID)
    email: string;
    password?: string; // Optional: only if using email/password auth
    createdAt: Date;
    updatedAt: Date;
}

// Song document in 'songs' collection
export interface Song {
    id: string;
    songName: string;
    songDescription?: string;
    songImage?: string;
    songUrl?: string;

    artist: string; // Artist Name

    occasion: string;
    genre: string;
    vocal: VocalType;

    status: StatusType;

    createdAt: Date;
    updatedAt: Date;
}

// Song request document in 'songRequests' collection
export interface SongRequest {
    id: string;
    name: string;
    email: string;
    genre?: string;
    occasion?: string;
    style?: string;
    vocal?: string;
    story?: string;
    mustIncludes?: string[];
    referralSource?: string;
    extraAddons?: string;
    expressService?: string;
    videos?: string[]; // YouTube video IDs

    createdAt: Date;
    updatedAt: Date;
}

// Blog Post document in 'blogPosts' collection
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string; // Markdown or HTML
    excerpt?: string;
    image?: string;
    audioUrl?: string; // Optional audio attachment

    author: string;
    published: boolean;

    createdAt: Date;
    updatedAt: Date;
}



// Artist document in 'artists' collection
export interface Artist {
    id: string;
    name: string;
    slug: string;
    bio?: string;
    image?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
    spotify?: string;
    color?: string;

    createdAt: Date;
    updatedAt: Date;
}

// Convert Firestore Timestamp to Date
export function timestampToDate(timestamp: any): Date {
    if (timestamp?.toDate) {
        return timestamp.toDate();
    }
    return timestamp instanceof Date ? timestamp : new Date(timestamp);
}

// Convert data from Firestore
export function convertUser(doc: any): User {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

export function convertSong(doc: any): Song {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

export function convertSongRequest(doc: any): SongRequest {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

export function convertArtist(doc: any): Artist {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

export function convertBlogPost(doc: any): BlogPost {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

// Join Request document in 'joinRequests' collection
export interface JoinRequest {
    id: string;
    name: string;
    email: string;
    phone: string;
    demoUrl?: string;
    message?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Collaboration Request document in 'collaborationRequests' collection
export interface CollaborationRequest {
    id: string;
    name: string;
    email: string;
    role: string; // Producer, Artist, Songwriter
    message?: string;
    createdAt: Date;
    updatedAt: Date;
}

export function convertJoinRequest(doc: any): JoinRequest {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

export function convertCollaborationRequest(doc: any): CollaborationRequest {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

// Hero Slide document in 'hero_slides' collection
export interface HeroSlide {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
    platforms?: string[]; // e.g. ["Spotify", "TikTok"]
    order: number;
    createdAt: Date;
    updatedAt: Date;
}


export function convertHeroSlide(doc: any): HeroSlide {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

// Animation Settings document in 'site_settings' collection (ID: 'animation')
export interface AnimationSettings {
    id: string;
    enabled: boolean;
    speed: number; // 0.1 to 2.0
    density: number; // 1 to 50
    glowIntensity: number; // 0.1 to 1.0
    updatedAt: Date;
}


export function convertAnimationSettings(doc: any): AnimationSettings {
    return {
        ...doc,
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

// Contact messages for the 'contact_messages' collection
export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: "new" | "read" | "replied" | "archived";
    createdAt: Date;
    updatedAt: Date;
}

export function convertContactMessage(doc: any): ContactMessage {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}

// Ready-Made Song Request
export interface ReadyMadeRequest {
    id: string;
    fullName: string;
    artistName?: string;
    email: string;
    phoneNumber?: string;
    country: string;
    userRole: string; // Artist, Investor, Label, Producer, Other
    songLink: string;
    usageType: string[]; // Multi-select: Single, EP, Sync, etc.
    usageTypeOther?: string;
    budgetRange: string;
    timeline: string;
    details?: string;
    agreedToTerms: boolean; // Ownership understanding
    consentedToContact?: boolean;
    status: "new" | "reviewed" | "contacted" | "archived";
    createdAt: Date;
    updatedAt: Date;
}

export function convertReadyMadeRequest(doc: any): ReadyMadeRequest {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt),
    };
}
