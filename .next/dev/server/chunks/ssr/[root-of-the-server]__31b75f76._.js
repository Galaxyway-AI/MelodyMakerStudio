module.exports = [
"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("firebase-admin/storage");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
    /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */ server: {
        /* -----------------------------------------------------------------------------------------------
     * Node.js Environment
     * -----------------------------------------------------------------------------------------------*/ NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "development",
            "test",
            "production"
        ]).default("development"),
        /* -----------------------------------------------------------------------------------------------
     * Firebase Configuration (Server-side)
     * -----------------------------------------------------------------------------------------------*/ FIREBASE_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
            message: "Firebase Project ID is invalid or missing"
        }),
        FIREBASE_CLIENT_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
            message: "Firebase Client Email is invalid or missing"
        }),
        FIREBASE_PRIVATE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
            message: "Firebase Private Key is invalid or missing"
        }),
        /* -----------------------------------------------------------------------------------------------
     * JioSaavn API URL (https://github.com/mehedihasan2810/jiosaavn-api-ts)
     * -----------------------------------------------------------------------------------------------*/ JIOSAAVN_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url({
            message: "JioSaavn API URL is invalid or missing"
        }).optional(),
        /* -----------------------------------------------------------------------------------------------
     * Upstash Rate Limiting (Redis)
     * -----------------------------------------------------------------------------------------------*/ UPSTASH_REDIS_REST_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
        UPSTASH_REDIS_REST_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        ENABLE_RATE_LIMITING: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "true",
            "false"
        ]).default("false"),
        RATE_LIMITING_REQUESTS_PER_SECOND: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(50),
        /* -----------------------------------------------------------------------------------------------
     * Umami Analytics
     * -----------------------------------------------------------------------------------------------*/ UMAMI_WEBSITE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    },
    /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */ client: {
        NEXT_PUBLIC_FIREBASE_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        NEXT_PUBLIC_FIREBASE_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    },
    /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   * For Next.js >= 13.4.4, you only need to destructure client variables (Only valid for `experimental__runtimeEnv`)
   */ experimental__runtimeEnv: {
        NEXT_PUBLIC_FIREBASE_API_KEY: ("TURBOPACK compile-time value", "AIzaSyAFUPuA0zI-pdHgMEQhkccBXZD3IrrIS8I"),
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ("TURBOPACK compile-time value", "melodymakerstudio-faf4b.firebaseapp.com"),
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: ("TURBOPACK compile-time value", "melodymakerstudio-faf4b"),
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: ("TURBOPACK compile-time value", "melodymakerstudio-faf4b.firebasestorage.app"),
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: ("TURBOPACK compile-time value", "522102341054"),
        NEXT_PUBLIC_FIREBASE_APP_ID: ("TURBOPACK compile-time value", "1:522102341054:web:09950c6bde2b901d028def")
    },
    /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */ emptyStringAsUndefined: true
});
}),
"[project]/lib/firebase-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb,
    "adminStorage",
    ()=>adminStorage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/env.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const apps = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])();
const app = apps.length === 0 ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
    credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].FIREBASE_PROJECT_ID,
        clientEmail: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].FIREBASE_CLIENT_EMAIL,
        privateKey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
    }),
    storageBucket: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
}) : apps[0];
const adminAuth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])(app);
const adminDb = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])(app, "mmsdb");
try {
    adminDb.settings({
        ignoreUndefinedProperties: true
    });
} catch (error) {
// Settings already applied
}
const adminStorage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__["getStorage"])(app);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00566643d59a836228ad85f2a426b33aac7e09f480":"requireAuth","0065238a8b319d83a2352a755daedcc6afdf1effd8":"deleteSessionCookie","00b2b9e38df60abf5844c7d08f850bf6134bc95b91":"getServerUser","4000e0db2193efc549569f9bbfb130dc6faa82429f":"verifyIdToken","40c67ba5d73e45c700db02d4b7fbf4038110ac1ced":"createSessionCookie"},"",""] */ __turbopack_context__.s([
    "createSessionCookie",
    ()=>createSessionCookie,
    "deleteSessionCookie",
    ()=>deleteSessionCookie,
    "getServerUser",
    ()=>getServerUser,
    "requireAuth",
    ()=>requireAuth,
    "verifyIdToken",
    ()=>verifyIdToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getServerUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionCookie = cookieStore.get("session")?.value;
    if (!sessionCookie) return null;
    try {
        const decodedClaims = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].verifySessionCookie(sessionCookie, true);
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].getUser(decodedClaims.uid);
    } catch (error) {
        console.error("Error verifying session:", error);
        return null;
    }
}
async function requireAuth() {
    const user = await getServerUser();
    if (!user) {
        throw new Error("Unauthorized - Please sign in");
    }
    return user;
}
async function createSessionCookie(idToken) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    try {
        const sessionCookie = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].createSessionCookie(idToken, {
            expiresIn
        });
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set("session", sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "lax",
            path: "/"
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error creating session cookie:", error);
        return {
            success: false,
            error: "Failed to create session"
        };
    }
}
async function deleteSessionCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("session");
}
async function verifyIdToken(idToken) {
    try {
        const decodedToken = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].verifyIdToken(idToken);
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].getUser(decodedToken.uid);
    } catch (error) {
        console.error("Error verifying ID token:", error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServerUser,
    requireAuth,
    createSessionCookie,
    deleteSessionCookie,
    verifyIdToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServerUser, "00b2b9e38df60abf5844c7d08f850bf6134bc95b91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAuth, "00566643d59a836228ad85f2a426b33aac7e09f480", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSessionCookie, "40c67ba5d73e45c700db02d4b7fbf4038110ac1ced", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSessionCookie, "0065238a8b319d83a2352a755daedcc6afdf1effd8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyIdToken, "4000e0db2193efc549569f9bbfb130dc6faa82429f", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/config/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "MelodyMaker Studio",
    url: "http://localhost:3000",
    description: "Your Music. Your Vision. Amplified to the World. World-class music production, global distribution, and artist branding.",
    author: {
        name: "Franky Wright",
        url: "",
        email: "",
        x: ""
    },
    links: {
        github: "#",
        discord: "#",
        x: "#"
    }
};
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absoluteUrl",
    ()=>absoluteUrl,
    "base64",
    ()=>base64,
    "cn",
    ()=>cn,
    "currentlyInDev",
    ()=>currentlyInDev,
    "formatDuration",
    ()=>formatDuration,
    "isMacOs",
    ()=>isMacOs,
    "rethrow",
    ()=>rethrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site.ts [app-rsc] (ecmascript)");
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function absoluteUrl(path) {
    if (process.env.VERCEL) {
        switch(process.env.NEXT_PUBLIC_VERCEL_ENV){
            case "production":
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url}${path}`;
            case "preview":
                return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}${path}`;
            default:
                // development
                return `http://localhost:${process.env.PORT ?? 3000}${path}`;
        }
    } else if (process.env.NETLIFY) {
        switch(process.env.CONTEXT){
            case "production":
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url}${path}`;
            case "deploy-preview" || "branch-deploy":
                return `https://${process.env.DEPLOY_PRIME_URL}${path}`;
            default:
                // development
                return `http://localhost:${process.env.PORT ?? 3000}${path}`;
        }
    } else {
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url}${path}`;
    }
}
const base64 = {
    encode: (str)=>Buffer.from(str).toString("base64"),
    decode: (str)=>Buffer.from(str, "base64").toString("ascii")
};
function rethrow(message) {
    throw new Error(message);
}
function formatDuration(seconds, format) {
    const date = new Date(seconds * 1000);
    return format === "hh:mm:ss" ? date.toISOString().slice(11, 19) : date.toISOString().slice(14, 19);
}
function currentlyInDev() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].info("This feature is currently in development.", {
        description: "We're working on it and it'll be available soon."
    });
}
function isMacOs() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/db/firestore-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Firestore schema type definitions for MelodyMakerStudio
__turbopack_context__.s([
    "convertArtist",
    ()=>convertArtist,
    "convertBlogPost",
    ()=>convertBlogPost,
    "convertCollaborationRequest",
    ()=>convertCollaborationRequest,
    "convertHeroSlide",
    ()=>convertHeroSlide,
    "convertJoinRequest",
    ()=>convertJoinRequest,
    "convertSong",
    ()=>convertSong,
    "convertSongRequest",
    ()=>convertSongRequest,
    "convertUser",
    ()=>convertUser,
    "timestampToDate",
    ()=>timestampToDate
]);
function timestampToDate(timestamp) {
    if (timestamp?.toDate) {
        return timestamp.toDate();
    }
    return timestamp instanceof Date ? timestamp : new Date(timestamp);
}
function convertUser(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertSong(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertSongRequest(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertArtist(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertBlogPost(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertJoinRequest(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertCollaborationRequest(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertHeroSlide(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
}),
"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0027fd1f851cd7f4357814568ac07f8d497e7db50c":"getAllSongRequests","007b856f169e6c63bf952eae88a3aea3ed56c6aea9":"getPublishedBlogPosts","007df8dde2d42257a5a2fa800b8118af41186dfbb7":"getHeroSlides","0088b0995968c4a58bdb2c6155da8a989870e4725e":"getPublishedSongs","00bf40190b58c10a6e2ce11d4513649a53e339c6ab":"getAllBlogPosts","00c87d2bfa104906b75e7fc7a8ad3f0f5edb006abf":"getAllSongs","00c9b4db745b2d5c2db35325fd0dc1623af5178fb1":"getAllArtists","400c9942f0906a16727cd32baea60ff4b0dae3ce2f":"getUserByEmail","400fde34412fd8c78abf889e94b6c3ae5739f01184":"deleteSong","40122cf109fe0a48f8e157e7d46ce57319bb578ccd":"searchSongs","40177028029f1fe2766fba924fc3138a848f5e6d33":"deleteSongRequest","4021bbbdc5729827842437bad74b7edaeba696b0c2":"createArtist","402bc181244bb9471926a2f81fb8d37bdeb05fcbf3":"getUserById","4033631631682a2aed41ea03d6bf408e1ae53deb33":"deleteArtist","40387c2f6a282a4417ad19c34aa09d0561a95183a7":"getSongRequestById","403ce3d8d34f51f9892dc1430b107c8054514ccc10":"getSongById","403f09145c11f1dba1d64b1830bbc07d9956b040ed":"getSongsByGenre","4040f547cac857d6a17bf149748ba0d2be3e524b17":"createJoinRequest","40416ad7ac095f35b314b6f75826f349c4600fa1ae":"deleteHeroSlide","405b4a92ea4e7c41dc47e0704a10755a34407bd3c2":"getArtistBySlug","4065b816f6e7c254ac4e9ab2ae030fbfe1aaa08582":"createSong","406bc5d12c3585dc7ff3fcf716bbf3e011bec64e26":"reorderHeroSlides","40769dc2f49b2de7965c061fb62e35eb9d5912ca57":"createSongRequest","40a4cc942a73765a5ee3b474fae9f256e42a2c8e1c":"getBlogPostBySlug","40aa72ec4d29f08ebe15323db8e57a325153602bdd":"createCollaborationRequest","40b30842dd3a70ca65a25d62156b9280e14b159629":"getArtistById","40cb8abeb7bb8986a59a9563e76438597b3164a860":"createHeroSlide","40d18d3cbe17fa015c92ae753c6f67aba12f1512eb":"getSongsByMultipleFilters","40d391cbdcdeb7809b3a45a13b33e3ecc7ee7bdc01":"createBlogPost","40dfd17714d3718a31e2f761f354974154dbbc7016":"getHeroSlideById","40e7226d140943a139cb848c434bbfb5ab28d4642c":"deleteBlogPost","40ebb7c680be0ac981e3753146f831419f85a95278":"getSongsByArtist","40fd69c8c130bf5669f535764ffbc1da0c2a65ee5a":"getBlogPostById","601610f5f72c2bcca4f2ec1a75530b0962bc35b3ce":"updateArtist","603b236c934fab16aaa181fd27e97af7ee31ed926c":"updateSong","604e057926a096704d75acd10861038ce917f7e182":"createUser","60894b5e9b0d9e07b57cb0d82b90b382575a03a995":"updateHeroSlide","60b435528cbfded2e31565cf4aa8e8335a3c788e1c":"updateSongRequest","60cedb24f89f83469466fef42ac1ca1dbabd3f0bac":"updateBlogPost","60fb06524792d457629ce59aeff27851f7151e030b":"updateUser"},"",""] */ __turbopack_context__.s([
    "createArtist",
    ()=>createArtist,
    "createBlogPost",
    ()=>createBlogPost,
    "createCollaborationRequest",
    ()=>createCollaborationRequest,
    "createHeroSlide",
    ()=>createHeroSlide,
    "createJoinRequest",
    ()=>createJoinRequest,
    "createSong",
    ()=>createSong,
    "createSongRequest",
    ()=>createSongRequest,
    "createUser",
    ()=>createUser,
    "deleteArtist",
    ()=>deleteArtist,
    "deleteBlogPost",
    ()=>deleteBlogPost,
    "deleteHeroSlide",
    ()=>deleteHeroSlide,
    "deleteSong",
    ()=>deleteSong,
    "deleteSongRequest",
    ()=>deleteSongRequest,
    "getAllArtists",
    ()=>getAllArtists,
    "getAllBlogPosts",
    ()=>getAllBlogPosts,
    "getAllSongRequests",
    ()=>getAllSongRequests,
    "getAllSongs",
    ()=>getAllSongs,
    "getArtistById",
    ()=>getArtistById,
    "getArtistBySlug",
    ()=>getArtistBySlug,
    "getBlogPostById",
    ()=>getBlogPostById,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getHeroSlideById",
    ()=>getHeroSlideById,
    "getHeroSlides",
    ()=>getHeroSlides,
    "getPublishedBlogPosts",
    ()=>getPublishedBlogPosts,
    "getPublishedSongs",
    ()=>getPublishedSongs,
    "getSongById",
    ()=>getSongById,
    "getSongRequestById",
    ()=>getSongRequestById,
    "getSongsByArtist",
    ()=>getSongsByArtist,
    "getSongsByGenre",
    ()=>getSongsByGenre,
    "getSongsByMultipleFilters",
    ()=>getSongsByMultipleFilters,
    "getUserByEmail",
    ()=>getUserByEmail,
    "getUserById",
    ()=>getUserById,
    "reorderHeroSlides",
    ()=>reorderHeroSlides,
    "searchSongs",
    ()=>searchSongs,
    "updateArtist",
    ()=>updateArtist,
    "updateBlogPost",
    ()=>updateBlogPost,
    "updateHeroSlide",
    ()=>updateHeroSlide,
    "updateSong",
    ()=>updateSong,
    "updateSongRequest",
    ()=>updateSongRequest,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getUserById(userId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(userId).get();
    if (!doc.exists) return null;
    return {
        id: doc.id,
        ...doc.data()
    };
}
async function getUserByEmail(email) {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").where("email", "==", email).limit(1).get();
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return {
        id: doc.id,
        ...doc.data()
    };
}
async function createUser(userId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(userId).set(data);
    return {
        id: userId,
        ...data
    };
}
async function updateUser(userId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("users").doc(userId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function getAllSongs() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").orderBy("createdAt", "desc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No songs collection found or empty collection:", error);
        return [];
    }
}
async function getPublishedSongs() {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").where("status", "==", "published").orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
            id: doc.id,
            ...doc.data()
        }));
}
async function getSongById(songId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").doc(songId).get();
    if (!doc.exists) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
        id: doc.id,
        ...doc.data()
    });
}
async function getSongsByGenre(genre) {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").where("genre", "==", genre).where("status", "==", "published").get();
    return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
            id: doc.id,
            ...doc.data()
        }));
}
async function getSongsByArtist(artist) {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").where("artist", "==", artist).where("status", "==", "published").get();
    return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
            id: doc.id,
            ...doc.data()
        }));
}
async function createSong(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function updateSong(songId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").doc(songId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function deleteSong(songId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").doc(songId).delete();
}
async function getAllSongRequests() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songRequests").orderBy("createdAt", "desc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSongRequest"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No songRequests collection found or empty collection:", error);
        return [];
    }
}
async function getSongRequestById(requestId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songRequests").doc(requestId).get();
    if (!doc.exists) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSongRequest"])({
        id: doc.id,
        ...doc.data()
    });
}
async function createSongRequest(data) {
    try {
        const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songRequests").add({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSongRequest"])({
            id: docRef.id,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    } catch (error) {
        console.error("Error creating song request:", error);
        throw new Error(`Failed to create song request: ${error.message}`);
    }
}
async function updateSongRequest(requestId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songRequests").doc(requestId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function deleteSongRequest(requestId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songRequests").doc(requestId).delete();
}
async function searchSongs(searchTerm) {
    // Note: Firestore doesn't support full-text search natively
    // For production, consider using Algolia or similar service
    // This is a simple implementation searching by song name
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").where("status", "==", "published").get();
    const songs = snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
            id: doc.id,
            ...doc.data()
        }));
    return songs.filter((song)=>song.songName.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()));
}
async function getSongsByMultipleFilters(filters) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("songs").where("status", "==", "published");
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
    return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertSong"])({
            id: doc.id,
            ...doc.data()
        }));
}
async function getAllArtists() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").orderBy("name", "asc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertArtist"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No artists collection found or empty collection:", error);
        return [];
    }
}
async function getArtistBySlug(slug) {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").where("slug", "==", slug).limit(1).get();
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertArtist"])({
        id: doc.id,
        ...doc.data()
    });
}
async function createArtist(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertArtist"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function updateArtist(artistId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").doc(artistId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function deleteArtist(artistId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").doc(artistId).delete();
}
async function getArtistById(artistId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("artists").doc(artistId).get();
    if (!doc.exists) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertArtist"])({
        id: doc.id,
        ...doc.data()
    });
}
async function getAllBlogPosts() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").orderBy("createdAt", "desc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBlogPost"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No blogPosts collection found or empty collection:", error);
        return [];
    }
}
async function getPublishedBlogPosts() {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").where("published", "==", true).orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBlogPost"])({
            id: doc.id,
            ...doc.data()
        }));
}
async function getBlogPostBySlug(slug) {
    const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").where("slug", "==", slug).limit(1).get();
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBlogPost"])({
        id: doc.id,
        ...doc.data()
    });
}
async function createBlogPost(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBlogPost"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function updateBlogPost(postId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").doc(postId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function deleteBlogPost(postId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").doc(postId).delete();
}
async function getBlogPostById(postId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("blogPosts").doc(postId).get();
    if (!doc.exists) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBlogPost"])({
        id: doc.id,
        ...doc.data()
    });
}
async function createJoinRequest(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("joinRequests").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertJoinRequest"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function createCollaborationRequest(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("collaborationRequests").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertCollaborationRequest"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function getHeroSlides() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").orderBy("order", "asc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertHeroSlide"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No hero_slides collection found or empty collection:", error);
        return [];
    }
}
async function createHeroSlide(data) {
    const docRef = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").add({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertHeroSlide"])({
        id: docRef.id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
async function updateHeroSlide(slideId, data) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").doc(slideId).update({
        ...data,
        updatedAt: new Date()
    });
}
async function deleteHeroSlide(slideId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").doc(slideId).delete();
}
async function reorderHeroSlides(slides) {
    const batch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].batch();
    slides.forEach((slide)=>{
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").doc(slide.id);
        batch.update(ref, {
            order: slide.order,
            updatedAt: new Date()
        });
    });
    await batch.commit();
}
async function getHeroSlideById(slideId) {
    const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("hero_slides").doc(slideId).get();
    if (!doc.exists) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertHeroSlide"])({
        id: doc.id,
        ...doc.data()
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    getAllSongs,
    getPublishedSongs,
    getSongById,
    getSongsByGenre,
    getSongsByArtist,
    createSong,
    updateSong,
    deleteSong,
    getAllSongRequests,
    getSongRequestById,
    createSongRequest,
    updateSongRequest,
    deleteSongRequest,
    searchSongs,
    getSongsByMultipleFilters,
    getAllArtists,
    getArtistBySlug,
    createArtist,
    updateArtist,
    deleteArtist,
    getArtistById,
    getAllBlogPosts,
    getPublishedBlogPosts,
    getBlogPostBySlug,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getBlogPostById,
    createJoinRequest,
    createCollaborationRequest,
    getHeroSlides,
    createHeroSlide,
    updateHeroSlide,
    deleteHeroSlide,
    reorderHeroSlides,
    getHeroSlideById
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserById, "402bc181244bb9471926a2f81fb8d37bdeb05fcbf3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserByEmail, "400c9942f0906a16727cd32baea60ff4b0dae3ce2f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUser, "604e057926a096704d75acd10861038ce917f7e182", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "60fb06524792d457629ce59aeff27851f7151e030b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllSongs, "00c87d2bfa104906b75e7fc7a8ad3f0f5edb006abf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPublishedSongs, "0088b0995968c4a58bdb2c6155da8a989870e4725e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSongById, "403ce3d8d34f51f9892dc1430b107c8054514ccc10", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSongsByGenre, "403f09145c11f1dba1d64b1830bbc07d9956b040ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSongsByArtist, "40ebb7c680be0ac981e3753146f831419f85a95278", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSong, "4065b816f6e7c254ac4e9ab2ae030fbfe1aaa08582", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSong, "603b236c934fab16aaa181fd27e97af7ee31ed926c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSong, "400fde34412fd8c78abf889e94b6c3ae5739f01184", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllSongRequests, "0027fd1f851cd7f4357814568ac07f8d497e7db50c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSongRequestById, "40387c2f6a282a4417ad19c34aa09d0561a95183a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSongRequest, "40769dc2f49b2de7965c061fb62e35eb9d5912ca57", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSongRequest, "60b435528cbfded2e31565cf4aa8e8335a3c788e1c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSongRequest, "40177028029f1fe2766fba924fc3138a848f5e6d33", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchSongs, "40122cf109fe0a48f8e157e7d46ce57319bb578ccd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSongsByMultipleFilters, "40d18d3cbe17fa015c92ae753c6f67aba12f1512eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllArtists, "00c9b4db745b2d5c2db35325fd0dc1623af5178fb1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getArtistBySlug, "405b4a92ea4e7c41dc47e0704a10755a34407bd3c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createArtist, "4021bbbdc5729827842437bad74b7edaeba696b0c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateArtist, "601610f5f72c2bcca4f2ec1a75530b0962bc35b3ce", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteArtist, "4033631631682a2aed41ea03d6bf408e1ae53deb33", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getArtistById, "40b30842dd3a70ca65a25d62156b9280e14b159629", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllBlogPosts, "00bf40190b58c10a6e2ce11d4513649a53e339c6ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPublishedBlogPosts, "007b856f169e6c63bf952eae88a3aea3ed56c6aea9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogPostBySlug, "40a4cc942a73765a5ee3b474fae9f256e42a2c8e1c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBlogPost, "40d391cbdcdeb7809b3a45a13b33e3ecc7ee7bdc01", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBlogPost, "60cedb24f89f83469466fef42ac1ca1dbabd3f0bac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBlogPost, "40e7226d140943a139cb848c434bbfb5ab28d4642c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogPostById, "40fd69c8c130bf5669f535764ffbc1da0c2a65ee5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createJoinRequest, "4040f547cac857d6a17bf149748ba0d2be3e524b17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCollaborationRequest, "40aa72ec4d29f08ebe15323db8e57a325153602bdd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHeroSlides, "007df8dde2d42257a5a2fa800b8118af41186dfbb7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createHeroSlide, "40cb8abeb7bb8986a59a9563e76438597b3164a860", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHeroSlide, "60894b5e9b0d9e07b57cb0d82b90b382575a03a995", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteHeroSlide, "40416ad7ac095f35b314b6f75826f349c4600fa1ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reorderHeroSlides, "406bc5d12c3585dc7ff3fcf716bbf3e011bec64e26", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHeroSlideById, "40dfd17714d3718a31e2f761f354974154dbbc7016", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ui/table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableCaption.displayName = "TableCaption";
;
}),
"[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40f9cbc61b7ab84db58833ba963c2f9e8974838a0c":"$$RSC_SERVER_ACTION_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>ArtistsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-rsc] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-rsc] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-rsc] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function deleteArtistAction(formData) {
    const artistId = formData.get("artistId");
    if (artistId) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteArtist"])(artistId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/artists");
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40f9cbc61b7ab84db58833ba963c2f9e8974838a0c", null);
async function ArtistsPage() {
    const artists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllArtists"])();
    var deleteArtistAction = $$RSC_SERVER_ACTION_0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight",
                                children: "Artists"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Manage your artist profiles."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/add-artist",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                "Add Artist"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-card/50 backdrop-blur-sm border-primary/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "All Artists"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "A list of all artists in your library."
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Slug"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Created At"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: artists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                            colSpan: 4,
                                            className: "text-center h-24 text-muted-foreground",
                                            children: "No artists found. Add one to get started."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 33
                                    }, this) : artists.map((artist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "font-medium",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            artist.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: artist.image,
                                                                alt: artist.name,
                                                                className: "w-8 h-8 rounded-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 53
                                                            }, this),
                                                            artist.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: artist.slug
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: artist.createdAt?.toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/admin/artists/${artist.id}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                action: deleteArtistAction,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "hidden",
                                                                        name: "artistId",
                                                                        value: artist.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                        lineNumber: 86,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "text-red-500 hover:text-red-600 hover:bg-red-500/10",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, artist.id, true, {
                                            fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/artists/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/admin/artists/page.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/admin/artists/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/admin/artists/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0027fd1f851cd7f4357814568ac07f8d497e7db50c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSongRequests"],
    "0065238a8b319d83a2352a755daedcc6afdf1effd8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSessionCookie"],
    "007b856f169e6c63bf952eae88a3aea3ed56c6aea9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedBlogPosts"],
    "007df8dde2d42257a5a2fa800b8118af41186dfbb7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroSlides"],
    "0088b0995968c4a58bdb2c6155da8a989870e4725e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedSongs"],
    "00bf40190b58c10a6e2ce11d4513649a53e339c6ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBlogPosts"],
    "00c87d2bfa104906b75e7fc7a8ad3f0f5edb006abf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSongs"],
    "00c9b4db745b2d5c2db35325fd0dc1623af5178fb1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllArtists"],
    "400c9942f0906a16727cd32baea60ff4b0dae3ce2f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByEmail"],
    "400fde34412fd8c78abf889e94b6c3ae5739f01184",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSong"],
    "40122cf109fe0a48f8e157e7d46ce57319bb578ccd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchSongs"],
    "40177028029f1fe2766fba924fc3138a848f5e6d33",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSongRequest"],
    "4021bbbdc5729827842437bad74b7edaeba696b0c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createArtist"],
    "402bc181244bb9471926a2f81fb8d37bdeb05fcbf3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"],
    "4033631631682a2aed41ea03d6bf408e1ae53deb33",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteArtist"],
    "40387c2f6a282a4417ad19c34aa09d0561a95183a7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSongRequestById"],
    "403ce3d8d34f51f9892dc1430b107c8054514ccc10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSongById"],
    "403f09145c11f1dba1d64b1830bbc07d9956b040ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSongsByGenre"],
    "4040f547cac857d6a17bf149748ba0d2be3e524b17",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJoinRequest"],
    "40416ad7ac095f35b314b6f75826f349c4600fa1ae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteHeroSlide"],
    "405b4a92ea4e7c41dc47e0704a10755a34407bd3c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArtistBySlug"],
    "4065b816f6e7c254ac4e9ab2ae030fbfe1aaa08582",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSong"],
    "406bc5d12c3585dc7ff3fcf716bbf3e011bec64e26",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reorderHeroSlides"],
    "40769dc2f49b2de7965c061fb62e35eb9d5912ca57",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSongRequest"],
    "40a4cc942a73765a5ee3b474fae9f256e42a2c8e1c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPostBySlug"],
    "40aa72ec4d29f08ebe15323db8e57a325153602bdd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCollaborationRequest"],
    "40b30842dd3a70ca65a25d62156b9280e14b159629",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArtistById"],
    "40c67ba5d73e45c700db02d4b7fbf4038110ac1ced",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSessionCookie"],
    "40cb8abeb7bb8986a59a9563e76438597b3164a860",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHeroSlide"],
    "40d18d3cbe17fa015c92ae753c6f67aba12f1512eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSongsByMultipleFilters"],
    "40d391cbdcdeb7809b3a45a13b33e3ecc7ee7bdc01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBlogPost"],
    "40dfd17714d3718a31e2f761f354974154dbbc7016",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroSlideById"],
    "40e7226d140943a139cb848c434bbfb5ab28d4642c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBlogPost"],
    "40ebb7c680be0ac981e3753146f831419f85a95278",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSongsByArtist"],
    "40f9cbc61b7ab84db58833ba963c2f9e8974838a0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "40fd69c8c130bf5669f535764ffbc1da0c2a65ee5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPostById"],
    "601610f5f72c2bcca4f2ec1a75530b0962bc35b3ce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateArtist"],
    "603b236c934fab16aaa181fd27e97af7ee31ed926c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSong"],
    "604e057926a096704d75acd10861038ce917f7e182",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"],
    "60894b5e9b0d9e07b57cb0d82b90b382575a03a995",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHeroSlide"],
    "60b435528cbfded2e31565cf4aa8e8335a3c788e1c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSongRequest"],
    "60cedb24f89f83469466fef42ac1ca1dbabd3f0bac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBlogPost"],
    "60fb06524792d457629ce59aeff27851f7151e030b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUser"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(admin)/admin/artists/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/artists/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$artists$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__31b75f76._.js.map