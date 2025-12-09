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
"[project]/lib/db/firestore-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Firestore schema type definitions for MelodyMakerStudio
__turbopack_context__.s([
    "convertAnimationSettings",
    ()=>convertAnimationSettings,
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
function convertAnimationSettings(doc) {
    return {
        ...doc,
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
"[project]/.next-internal/server/app/(marketing)/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(marketing)/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0065238a8b319d83a2352a755daedcc6afdf1effd8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSessionCookie"],
    "007df8dde2d42257a5a2fa800b8118af41186dfbb7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroSlides"],
    "40c67ba5d73e45c700db02d4b7fbf4038110ac1ced",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSessionCookie"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$marketing$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(marketing)/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$marketing$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$marketing$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d61a08f1._.js.map