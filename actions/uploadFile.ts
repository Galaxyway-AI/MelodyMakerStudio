"use server";

import { adminStorage } from "@/lib/firebase-admin";
import { requireAdmin } from "@/lib/auth-helpers";
import { v4 as uuidv4 } from "uuid";

export async function uploadFile(formData: FormData) {
    try {
        await requireAdmin();
    } catch (error) {
        return { error: (error as Error).message };
    }

    const file = formData.get("file") as File;
    const path = formData.get("path") as string;

    if (!file || !path) {
        return { error: "Missing file or path" };
    }

    try {
        console.log(`[uploadFile] Starting upload for path: ${path}, type: ${file.type}, size: ${file.size}`);
        const buffer = Buffer.from(await file.arrayBuffer());
        const bucket = adminStorage.bucket();
        console.log(`[uploadFile] Using bucket: ${bucket.name}`);
        const fileRef = bucket.file(path);
        const token = uuidv4();

        await fileRef.save(buffer, {
            metadata: {
                contentType: file.type,
                metadata: {
                    firebaseStorageDownloadTokens: token,
                },
            },
        });
        console.log(`[uploadFile] File saved to bucket`);

        const bucketName = bucket.name;
        // const encodedPath = encodeURIComponent(path).replace(/%2F/g, "/"); 

        const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(path)}?alt=media&token=${token}`;
        console.log(`[uploadFile] Generated download URL: ${downloadUrl}`);

        return { success: true, url: downloadUrl };
    } catch (error) {
        console.error("Error uploading file via server action:", error);
        return { error: "Upload failed" };
    }
}
