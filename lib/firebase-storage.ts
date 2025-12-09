"use client";

import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    listAll,
} from "firebase/storage";
import { storage } from "./firebase-client";

export interface StorageFile {
    name: string;
    url: string;
    fullPath: string;
    type?: string;
}

/**
 * List files in a directory
 */
export async function listFiles(path: string): Promise<StorageFile[]> {
    try {
        const storageRef = ref(storage, path);
        const res = await listAll(storageRef);

        const files = await Promise.all(
            res.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                // Simple type detection based on extension
                const extension = itemRef.name.split('.').pop()?.toLowerCase();
                let type = 'file';
                if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')) type = 'image';
                if (['mp3', 'wav', 'ogg', 'm4a'].includes(extension || '')) type = 'audio';

                return {
                    name: itemRef.name,
                    url,
                    fullPath: itemRef.fullPath,
                    type
                };
            })
        );

        return files;
    } catch (error) {
        console.error("Error listing files:", error);
        return [];
    }
}

/**
 * Upload a file to Firebase Storage
 */
export async function uploadFile(
    file: File,
    path: string
): Promise<{ success: boolean; url?: string; error?: string }> {
    try {
        const storageRef = ref(storage, path);

        // Upload file
        const snapshot = await uploadBytes(storageRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return { success: true, url: downloadURL };
    } catch (error) {
        console.error("Error uploading file:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Upload failed",
        };
    }
}

/**
 * Delete a file from Firebase Storage
 */
export async function deleteFile(
    path: string
): Promise<{ success: boolean; error?: string }> {
    try {
        const storageRef = ref(storage, path);
        await deleteObject(storageRef);
        return { success: true };
    } catch (error) {
        console.error("Error deleting file:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Delete failed",
        };
    }
}

/**
 * Delete a file by its download URL
 */
export async function deleteFileByUrl(
    url: string
): Promise<{ success: boolean; error?: string }> {
    try {
        // Extract the path from the Firebase Storage URL
        const path = extractPathFromUrl(url);
        if (!path) {
            return { success: false, error: "Invalid Firebase Storage URL" };
        }
        return await deleteFile(path);
    } catch (error) {
        console.error("Error deleting file by URL:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Delete failed",
        };
    }
}

/**
 * Generate a unique storage path for a file
 */
export function generateStoragePath(
    userId: string,
    fileName: string,
    type: "audio" | "image"
): string {
    const timestamp = Date.now();
    const extension = fileName.split(".").pop();
    const sanitizedName = fileName.replace(/[^a-zA-Z0-9.]/g, "_");
    return `${type}/${userId}/${timestamp}_${sanitizedName}`;
}

/**
 * Extract the storage path from a Firebase Storage download URL
 */
function extractPathFromUrl(url: string): string | null {
    try {
        const match = url.match(/\/o\/(.+?)\?/);
        if (match && match[1]) {
            return decodeURIComponent(match[1]);
        }
        return null;
    } catch {
        return null;
    }
}

/**
 * Upload audio file with progress tracking
 */
export async function uploadAudioFile(
    file: File,
    userId: string
): Promise<{ success: boolean; url?: string; error?: string }> {
    const path = generateStoragePath(userId, file.name, "audio");
    return await uploadFile(file, path);
}

/**
 * Upload image file
 */
export async function uploadImageFile(
    file: File,
    userId: string
): Promise<{ success: boolean; url?: string; error?: string }> {
    const path = generateStoragePath(userId, file.name, "image");
    return await uploadFile(file, path);
}
