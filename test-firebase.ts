import { config } from 'dotenv';
config({ path: '.env.local' });

(async () => {
    try {
        const { adminAuth, adminDb } = await import("./lib/firebase-admin");
        console.log("Firebase Admin initialized successfully");
        console.log("Auth:", adminAuth ? "OK" : "Missing");
        console.log("DB:", adminDb ? "OK" : "Missing");
    } catch (e) {
        console.error("Firebase Admin Error:", e);
    }
})();
