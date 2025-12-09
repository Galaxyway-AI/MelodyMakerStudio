module.exports = [
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
    "convertContactMessage",
    ()=>convertContactMessage,
    "convertHeroSlide",
    ()=>convertHeroSlide,
    "convertJoinRequest",
    ()=>convertJoinRequest,
    "convertReadyMadeRequest",
    ()=>convertReadyMadeRequest,
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
function convertContactMessage(doc) {
    return {
        ...doc,
        createdAt: timestampToDate(doc.createdAt),
        updatedAt: timestampToDate(doc.updatedAt)
    };
}
function convertReadyMadeRequest(doc) {
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

/* __next_internal_action_entry_do_not_use__ [{"0027fd1f851cd7f4357814568ac07f8d497e7db50c":"getAllSongRequests","002d32f62f0ed5ad8d80288ea53fe90b5265d55432":"getContactMessages","007b856f169e6c63bf952eae88a3aea3ed56c6aea9":"getPublishedBlogPosts","007df8dde2d42257a5a2fa800b8118af41186dfbb7":"getHeroSlides","0088b0995968c4a58bdb2c6155da8a989870e4725e":"getPublishedSongs","00bf40190b58c10a6e2ce11d4513649a53e339c6ab":"getAllBlogPosts","00c87d2bfa104906b75e7fc7a8ad3f0f5edb006abf":"getAllSongs","00c9b4db745b2d5c2db35325fd0dc1623af5178fb1":"getAllArtists","400c9942f0906a16727cd32baea60ff4b0dae3ce2f":"getUserByEmail","400fde34412fd8c78abf889e94b6c3ae5739f01184":"deleteSong","40122cf109fe0a48f8e157e7d46ce57319bb578ccd":"searchSongs","40177028029f1fe2766fba924fc3138a848f5e6d33":"deleteSongRequest","4021bbbdc5729827842437bad74b7edaeba696b0c2":"createArtist","402bc181244bb9471926a2f81fb8d37bdeb05fcbf3":"getUserById","4033631631682a2aed41ea03d6bf408e1ae53deb33":"deleteArtist","40387c2f6a282a4417ad19c34aa09d0561a95183a7":"getSongRequestById","403ce3d8d34f51f9892dc1430b107c8054514ccc10":"getSongById","403f09145c11f1dba1d64b1830bbc07d9956b040ed":"getSongsByGenre","4040f547cac857d6a17bf149748ba0d2be3e524b17":"createJoinRequest","40416ad7ac095f35b314b6f75826f349c4600fa1ae":"deleteHeroSlide","405b4a92ea4e7c41dc47e0704a10755a34407bd3c2":"getArtistBySlug","4065b816f6e7c254ac4e9ab2ae030fbfe1aaa08582":"createSong","406bc5d12c3585dc7ff3fcf716bbf3e011bec64e26":"reorderHeroSlides","40769dc2f49b2de7965c061fb62e35eb9d5912ca57":"createSongRequest","40a4cc942a73765a5ee3b474fae9f256e42a2c8e1c":"getBlogPostBySlug","40aa72ec4d29f08ebe15323db8e57a325153602bdd":"createCollaborationRequest","40b30842dd3a70ca65a25d62156b9280e14b159629":"getArtistById","40cb8abeb7bb8986a59a9563e76438597b3164a860":"createHeroSlide","40d18d3cbe17fa015c92ae753c6f67aba12f1512eb":"getSongsByMultipleFilters","40d391cbdcdeb7809b3a45a13b33e3ecc7ee7bdc01":"createBlogPost","40dfd17714d3718a31e2f761f354974154dbbc7016":"getHeroSlideById","40e7226d140943a139cb848c434bbfb5ab28d4642c":"deleteBlogPost","40ebb7c680be0ac981e3753146f831419f85a95278":"getSongsByArtist","40fd69c8c130bf5669f535764ffbc1da0c2a65ee5a":"getBlogPostById","601610f5f72c2bcca4f2ec1a75530b0962bc35b3ce":"updateArtist","603b236c934fab16aaa181fd27e97af7ee31ed926c":"updateSong","604e057926a096704d75acd10861038ce917f7e182":"createUser","60894b5e9b0d9e07b57cb0d82b90b382575a03a995":"updateHeroSlide","60b435528cbfded2e31565cf4aa8e8335a3c788e1c":"updateSongRequest","60cedb24f89f83469466fef42ac1ca1dbabd3f0bac":"updateBlogPost","60fb06524792d457629ce59aeff27851f7151e030b":"updateUser"},"",""] */ __turbopack_context__.s([
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
    "getContactMessages",
    ()=>getContactMessages,
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
async function getContactMessages() {
    try {
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("contact_messages").orderBy("createdAt", "desc").get();
        return snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertContactMessage"])({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.log("No contact_messages collection found or empty collection:", error);
        return [];
    }
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
    getHeroSlideById,
    getContactMessages
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getContactMessages, "002d32f62f0ed5ad8d80288ea53fe90b5265d55432", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/admin/messages/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/admin/messages/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0027fd1f851cd7f4357814568ac07f8d497e7db50c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSongRequests"],
    "002d32f62f0ed5ad8d80288ea53fe90b5265d55432",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContactMessages"],
    "0063bec02b5df4b152a110d8d61ea59b301417663d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnimationSettings"],
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
    "40f0016898957ca43421db90fea196eeb40582da93",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAnimationSettings"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$messages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(admin)/admin/messages/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$messages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$admin$2f$messages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    }
});
const _cookies = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}),
"[project]/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
        return cookies;
    }
});
const _requestcookies = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)");
const _cookies = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function cookies() {
    const callingExpression = 'cookies';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E843",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E849",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                        value: "E831",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    workStore.invalidDynamicUsageError ??= error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E846",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`cookies`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedCookies(workUnitStore.cookies);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    let underlyingCookies;
                    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
const CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
    if (requestStore.asyncApiPromises) {
        let promise;
        if (underlyingCookies === requestStore.mutableCookies) {
            promise = requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
            promise = requestStore.asyncApiPromises.cookies;
        } else {
            throw Object.defineProperty(new _invarianterror.InvariantError('Received an underlying cookies object that does not match either `cookies` or `mutableCookies`'), "__NEXT_ERROR_CODE", {
                value: "E890",
                enumerable: false,
                configurable: true
            });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise, route);
    }
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise, route);
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function instrumentCookiesPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        size: replaceableWarningDescriptor(promise, 'size', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        getAll: replaceableWarningDescriptor(promise, 'getAll', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        clear: replaceableWarningDescriptor(promise, 'clear', route),
        toString: replaceableWarningDescriptor(promise, 'toString', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`cookies().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...cookies()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=cookies.js.map
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
        return headers;
    }
});
const _headers = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function headers() {
    const callingExpression = 'headers';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E839",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E833",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E838",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'private-cache':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E828",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`headers`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedHeaders(workUnitStore.headers));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedHeaders(workUnitStore.headers);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
const CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
    if (requestStore.asyncApiPromises) {
        const promise = requestStore.asyncApiPromises.headers;
        return instrumentHeadersPromiseWithDevWarnings(promise, route);
    }
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise, route);
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function instrumentHeadersPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        append: replaceableWarningDescriptor(promise, 'append', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        getSetCookie: replaceableWarningDescriptor(promise, 'getSetCookie', route),
        forEach: replaceableWarningDescriptor(promise, 'forEach', route),
        keys: replaceableWarningDescriptor(promise, 'keys', route),
        values: replaceableWarningDescriptor(promise, 'values', route),
        entries: replaceableWarningDescriptor(promise, 'entries', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`headers().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...headers()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=headers.js.map
}),
"[project]/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
        return draftMode;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    const cacheKey = draftModeProvider ?? NullDraftMode;
    const cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
    }
}
const NullDraftMode = {};
const CachedDraftModes = new WeakMap();
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, `\`draftMode().${prop}\``);
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, `\`draftMode().${prop}()\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()', this.enable);
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()', this.disable);
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E845",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E829",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E844",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
                    }
                case 'prerender-client':
                    const exportName = '`draftMode`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    break;
                default:
                    workUnitStore;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}),
"[project]/node_modules/next/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.cookies = __turbopack_context__.r("[project]/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)").cookies;
module.exports.headers = __turbopack_context__.r("[project]/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)").headers;
module.exports.draftMode = __turbopack_context__.r("[project]/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)").draftMode;
}),
];

//# sourceMappingURL=_c1a41f02._.js.map