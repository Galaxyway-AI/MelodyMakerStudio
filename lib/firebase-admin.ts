import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { env } from "./env";

const apps = getApps();

const app =
    apps.length === 0
        ? initializeApp({
            credential: cert({
                projectId: env.FIREBASE_PROJECT_ID,
                clientEmail: env.FIREBASE_CLIENT_EMAIL,
                privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            }),
            storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        })
        : apps[0];

export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app, "mmsdb");
try {
    adminDb.settings({ ignoreUndefinedProperties: true });
} catch (error) {
    // Settings already applied
}
export const adminStorage = getStorage(app);
