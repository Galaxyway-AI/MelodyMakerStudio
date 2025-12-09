module.exports = [
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
"[project]/.next-internal/server/app/(dashboard)/admin-dashboard/requested-songs/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
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
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(dashboard)/admin-dashboard/requested-songs/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0027fd1f851cd7f4357814568ac07f8d497e7db50c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSongRequests"],
    "002d32f62f0ed5ad8d80288ea53fe90b5265d55432",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContactMessages"],
    "00566643d59a836228ad85f2a426b33aac7e09f480",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAuth"],
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
    "00b2b9e38df60abf5844c7d08f850bf6134bc95b91",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerUser"],
    "00bf40190b58c10a6e2ce11d4513649a53e339c6ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBlogPosts"],
    "00c87d2bfa104906b75e7fc7a8ad3f0f5edb006abf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSongs"],
    "00c9b4db745b2d5c2db35325fd0dc1623af5178fb1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllArtists"],
    "4000e0db2193efc549569f9bbfb130dc6faa82429f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyIdToken"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$admin$2d$dashboard$2f$requested$2d$songs$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/admin-dashboard/requested-songs/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/site-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/firestore-queries.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$admin$2d$dashboard$2f$requested$2d$songs$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$admin$2d$dashboard$2f$requested$2d$songs$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$site$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$firestore$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_9397eb6d._.js.map