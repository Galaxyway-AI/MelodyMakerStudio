(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hero-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Platform Icons Mapping (You can expand this)
const PlatformIcons = {
    Spotify: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#1DB954] font-bold text-xs",
        children: "Spotify"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 13,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    TikTok: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#00f2ea] font-bold text-xs",
        children: "TikTok"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 14,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    "Apple Music": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#FA243C] font-bold text-xs",
        children: "Apple"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 15,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "YouTube Music": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#FF0000] font-bold text-xs",
        children: "YT Music"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 16,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    "Amazon Music": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#00A8E1] font-bold text-xs",
        children: "Amazon"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 17,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    SoundCloud: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[#FF5500] font-bold text-xs",
        children: "SoundCloud"
    }, void 0, false, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 18,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0))
};
function HeroCarousel({ slides }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resetTimeout = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            resetTimeout();
            if (!isPaused && slides.length > 1) {
                timeoutRef.current = setTimeout({
                    "HeroCarousel.useEffect": ()=>{
                        setCurrentIndex({
                            "HeroCarousel.useEffect": (prevIndex)=>prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                        }["HeroCarousel.useEffect"]);
                    }
                }["HeroCarousel.useEffect"], 6000); // 6 seconds
            }
            return ({
                "HeroCarousel.useEffect": ()=>{
                    resetTimeout();
                }
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        currentIndex,
        isPaused,
        slides.length
    ]);
    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    if (!slides || slides.length === 0) {
        return null; // Or a placeholder if preferred
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group",
        onMouseEnter: ()=>setIsPaused(true),
        onMouseLeave: ()=>setIsPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full bg-card/95 border border-white/10 backdrop-blur-sm",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex flex-col", index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md",
                                    children: slide.label
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-carousel.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero-carousel.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[65%] w-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: slide.image,
                                                alt: slide.title,
                                                fill: true,
                                                className: "object-cover transition-transform duration-700 hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-carousel.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-carousel.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-carousel.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 p-4 flex flex-col justify-between bg-gradient-to-b from-background/50 to-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-white leading-tight",
                                                        children: slide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-carousel.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground line-clamp-3",
                                                        children: slide.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-carousel.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 37
                                                    }, this),
                                                    slide.platforms && slide.platforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-3 pt-2",
                                                        children: slide.platforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center bg-white/5 rounded-md px-2 py-1 border border-white/5",
                                                                children: PlatformIcons[platform] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: platform
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero-carousel.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 81
                                                                }, this)
                                                            }, platform, false, {
                                                                fileName: "[project]/components/hero-carousel.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-carousel.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero-carousel.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, this),
                                            slide.ctaText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 flex justify-end",
                                                children: slide.ctaLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: slide.ctaLink,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        className: "bg-primary hover:bg-primary/90 text-white rounded-full px-4",
                                                        children: slide.ctaText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-carousel.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-carousel.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "bg-primary hover:bg-primary/90 text-white rounded-full px-4",
                                                    children: slide.ctaText
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-carousel.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-carousel.tsx",
                                                lineNumber: 128,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-carousel.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-carousel.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/components/hero-carousel.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/hero-carousel.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevious,
                        className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/80 transition-all opacity-0 group-hover:opacity-100 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/hero-carousel.tsx",
                            lineNumber: 156,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-carousel.tsx",
                        lineNumber: 152,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/80 transition-all opacity-0 group-hover:opacity-100 z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/hero-carousel.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero-carousel.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",
                        children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(index),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full transition-all duration-300", index === currentIndex ? "bg-primary w-6" : "bg-white/30 hover:bg-white/50")
                            }, index, false, {
                                fileName: "[project]/components/hero-carousel.tsx",
                                lineNumber: 168,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/hero-carousel.tsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-carousel.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(HeroCarousel, "nxxJwEAXTe/boMAU9tmKr/W8njU=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/db/data:675ad1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007df8dde2d42257a5a2fa800b8118af41186dfbb7":"getHeroSlides"},"lib/db/firestore-queries.ts",""] */ __turbopack_context__.s([
    "getHeroSlides",
    ()=>getHeroSlides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getHeroSlides = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("007df8dde2d42257a5a2fa800b8118af41186dfbb7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getHeroSlides"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLXF1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBhZG1pbkRiIH0gZnJvbSBcIkAvbGliL2ZpcmViYXNlLWFkbWluXCI7XHJcbmltcG9ydCB7XHJcbiAgICB0eXBlIFVzZXIsXHJcbiAgICB0eXBlIFNvbmcsXHJcbiAgICB0eXBlIFNvbmdSZXF1ZXN0LFxyXG4gICAgdHlwZSBBcnRpc3QsXHJcbiAgICB0eXBlIEJsb2dQb3N0LFxyXG4gICAgY29udmVydFVzZXIsXHJcbiAgICBjb252ZXJ0U29uZyxcclxuICAgIGNvbnZlcnRTb25nUmVxdWVzdCxcclxuICAgIGNvbnZlcnRBcnRpc3QsXHJcbiAgICBjb252ZXJ0QmxvZ1Bvc3QsXHJcbiAgICB0eXBlIEpvaW5SZXF1ZXN0LFxyXG4gICAgdHlwZSBDb2xsYWJvcmF0aW9uUmVxdWVzdCxcclxuICAgIGNvbnZlcnRKb2luUmVxdWVzdCxcclxuICAgIGNvbnZlcnRDb2xsYWJvcmF0aW9uUmVxdWVzdCxcclxuICAgIHR5cGUgSGVyb1NsaWRlLFxyXG4gICAgY29udmVydEhlcm9TbGlkZSxcclxufSBmcm9tIFwiLi9maXJlc3RvcmUtc2NoZW1hXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XHJcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKS5nZXQoKTtcclxuICAgIGlmICghZG9jLmV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4geyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0gYXMgVXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiZW1haWxcIiwgXCI9PVwiLCBlbWFpbClcclxuICAgICAgICAubGltaXQoMSlcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgaWYgKHNuYXBzaG90LmVtcHR5KSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGRvYyA9IHNuYXBzaG90LmRvY3NbMF07XHJcbiAgICByZXR1cm4geyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0gYXMgVXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoXHJcbiAgICB1c2VySWQ6IHN0cmluZyxcclxuICAgIGRhdGE6IE9taXQ8VXNlciwgXCJpZFwiPlxyXG4pOiBQcm9taXNlPFVzZXI+IHtcclxuICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyh1c2VySWQpLnNldChkYXRhKTtcclxuICAgIHJldHVybiB7IGlkOiB1c2VySWQsIC4uLmRhdGEgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIoXHJcbiAgICB1c2VySWQ6IHN0cmluZyxcclxuICAgIGRhdGE6IFBhcnRpYWw8T21pdDxVc2VyLCBcImlkXCI+PlxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgLmRvYyh1c2VySWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7IC4uLmRhdGEsIHVwZGF0ZWRBdDogbmV3IERhdGUoKSB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU29uZyBvcGVyYXRpb25zXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsU29uZ3MoKTogUHJvbWlzZTxTb25nW10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwic29uZ3NcIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICByZXR1cm4gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gY29udmVydFNvbmcoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBzb25ncyBjb2xsZWN0aW9uIGZvdW5kIG9yIGVtcHR5IGNvbGxlY3Rpb246XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdWJsaXNoZWRTb25ncygpOiBQcm9taXNlPFNvbmdbXT4ge1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJzb25nc1wiKVxyXG4gICAgICAgIC53aGVyZShcInN0YXR1c1wiLCBcIj09XCIsIFwicHVibGlzaGVkXCIpXHJcbiAgICAgICAgLm9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXHJcbiAgICAgICAgLmdldCgpO1xyXG4gICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGNvbnZlcnRTb25nKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTb25nQnlJZChzb25nSWQ6IHN0cmluZyk6IFByb21pc2U8U29uZyB8IG51bGw+IHtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInNvbmdzXCIpLmRvYyhzb25nSWQpLmdldCgpO1xyXG4gICAgaWYgKCFkb2MuZXhpc3RzKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBjb252ZXJ0U29uZyh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTb25nc0J5R2VucmUoZ2VucmU6IHN0cmluZyk6IFByb21pc2U8U29uZ1tdPiB7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcInNvbmdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiZ2VucmVcIiwgXCI9PVwiLCBnZW5yZSlcclxuICAgICAgICAud2hlcmUoXCJzdGF0dXNcIiwgXCI9PVwiLCBcInB1Ymxpc2hlZFwiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBjb252ZXJ0U29uZyh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U29uZ3NCeUFydGlzdChhcnRpc3Q6IHN0cmluZyk6IFByb21pc2U8U29uZ1tdPiB7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcInNvbmdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwiYXJ0aXN0XCIsIFwiPT1cIiwgYXJ0aXN0KVxyXG4gICAgICAgIC53aGVyZShcInN0YXR1c1wiLCBcIj09XCIsIFwicHVibGlzaGVkXCIpXHJcbiAgICAgICAgLmdldCgpO1xyXG4gICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGNvbnZlcnRTb25nKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTb25nKGRhdGE6IE9taXQ8U29uZywgXCJpZFwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCI+KTogUHJvbWlzZTxTb25nPiB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJzb25nc1wiKS5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRTb25nKHsgaWQ6IGRvY1JlZi5pZCwgLi4uZGF0YSwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTb25nKFxyXG4gICAgc29uZ0lkOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBQYXJ0aWFsPE9taXQ8U29uZywgXCJpZFwiPj5cclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJzb25nc1wiKVxyXG4gICAgICAgIC5kb2Moc29uZ0lkKVxyXG4gICAgICAgIC51cGRhdGUoeyAuLi5kYXRhLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTb25nKHNvbmdJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJzb25nc1wiKS5kb2Moc29uZ0lkKS5kZWxldGUoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU29uZyBSZXF1ZXN0IG9wZXJhdGlvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxTb25nUmVxdWVzdHMoKTogUHJvbWlzZTxTb25nUmVxdWVzdFtdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgYWRtaW5EYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcInNvbmdSZXF1ZXN0c1wiKVxyXG4gICAgICAgICAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PlxyXG4gICAgICAgICAgICBjb252ZXJ0U29uZ1JlcXVlc3QoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBzb25nUmVxdWVzdHMgY29sbGVjdGlvbiBmb3VuZCBvciBlbXB0eSBjb2xsZWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U29uZ1JlcXVlc3RCeUlkKFxyXG4gICAgcmVxdWVzdElkOiBzdHJpbmdcclxuKTogUHJvbWlzZTxTb25nUmVxdWVzdCB8IG51bGw+IHtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInNvbmdSZXF1ZXN0c1wiKS5kb2MocmVxdWVzdElkKS5nZXQoKTtcclxuICAgIGlmICghZG9jLmV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gY29udmVydFNvbmdSZXF1ZXN0KHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNvbmdSZXF1ZXN0KFxyXG4gICAgZGF0YTogT21pdDxTb25nUmVxdWVzdCwgXCJpZFwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCI+XHJcbik6IFByb21pc2U8U29uZ1JlcXVlc3Q+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwic29uZ1JlcXVlc3RzXCIpLmFkZCh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb252ZXJ0U29uZ1JlcXVlc3QoeyBpZDogZG9jUmVmLmlkLCAuLi5kYXRhLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIHVwZGF0ZWRBdDogbmV3IERhdGUoKSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHNvbmcgcmVxdWVzdDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBzb25nIHJlcXVlc3Q6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU29uZ1JlcXVlc3QoXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcclxuICAgIGRhdGE6IFBhcnRpYWw8T21pdDxTb25nUmVxdWVzdCwgXCJpZFwiPj5cclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJzb25nUmVxdWVzdHNcIilcclxuICAgICAgICAuZG9jKHJlcXVlc3RJZClcclxuICAgICAgICAudXBkYXRlKHsgLi4uZGF0YSwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU29uZ1JlcXVlc3QocmVxdWVzdElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInNvbmdSZXF1ZXN0c1wiKS5kb2MocmVxdWVzdElkKS5kZWxldGUoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VhcmNoIGFuZCBmaWx0ZXIgb3BlcmF0aW9uc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFNvbmdzKHNlYXJjaFRlcm06IHN0cmluZyk6IFByb21pc2U8U29uZ1tdPiB7XHJcbiAgICAvLyBOb3RlOiBGaXJlc3RvcmUgZG9lc24ndCBzdXBwb3J0IGZ1bGwtdGV4dCBzZWFyY2ggbmF0aXZlbHlcclxuICAgIC8vIEZvciBwcm9kdWN0aW9uLCBjb25zaWRlciB1c2luZyBBbGdvbGlhIG9yIHNpbWlsYXIgc2VydmljZVxyXG4gICAgLy8gVGhpcyBpcyBhIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBzZWFyY2hpbmcgYnkgc29uZyBuYW1lXHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcInNvbmdzXCIpXHJcbiAgICAgICAgLndoZXJlKFwic3RhdHVzXCIsIFwiPT1cIiwgXCJwdWJsaXNoZWRcIilcclxuICAgICAgICAuZ2V0KCk7XHJcblxyXG4gICAgY29uc3Qgc29uZ3MgPSBzbmFwc2hvdC5kb2NzLm1hcChcclxuICAgICAgICAoZG9jKSA9PiBjb252ZXJ0U29uZyh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNvbmdzLmZpbHRlcihcclxuICAgICAgICAoc29uZykgPT5cclxuICAgICAgICAgICAgc29uZy5zb25nTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgc29uZy5hcnRpc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U29uZ3NCeU11bHRpcGxlRmlsdGVycyhmaWx0ZXJzOiB7XHJcbiAgICBnZW5yZT86IHN0cmluZztcclxuICAgIG9jY2FzaW9uPzogc3RyaW5nO1xyXG4gICAgdm9jYWw/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPFNvbmdbXT4ge1xyXG4gICAgbGV0IHF1ZXJ5ID0gYWRtaW5EYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwic29uZ3NcIilcclxuICAgICAgICAud2hlcmUoXCJzdGF0dXNcIiwgXCI9PVwiLCBcInB1Ymxpc2hlZFwiKSBhcyBhbnk7XHJcblxyXG4gICAgaWYgKGZpbHRlcnMuZ2VucmUpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LndoZXJlKFwiZ2VucmVcIiwgXCI9PVwiLCBmaWx0ZXJzLmdlbnJlKTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXJzLm9jY2FzaW9uKSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeS53aGVyZShcIm9jY2FzaW9uXCIsIFwiPT1cIiwgZmlsdGVycy5vY2Nhc2lvbik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVycy52b2NhbCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkud2hlcmUoXCJ2b2NhbFwiLCBcIj09XCIsIGZpbHRlcnMudm9jYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcXVlcnkuZ2V0KCk7XHJcbiAgICByZXR1cm4gc25hcHNob3QuZG9jcy5tYXAoKGRvYzogYW55KSA9PiBjb252ZXJ0U29uZyh7XHJcbiAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgfSkpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBcnRpc3Qgb3BlcmF0aW9uc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFydGlzdHMoKTogUHJvbWlzZTxBcnRpc3RbXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwibmFtZVwiLCBcImFzY1wiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGNvbnZlcnRBcnRpc3QoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhcnRpc3RzIGNvbGxlY3Rpb24gZm91bmQgb3IgZW1wdHkgY29sbGVjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGlzdEJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBQcm9taXNlPEFydGlzdCB8IG51bGw+IHtcclxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgYWRtaW5EYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKVxyXG4gICAgICAgIC53aGVyZShcInNsdWdcIiwgXCI9PVwiLCBzbHVnKVxyXG4gICAgICAgIC5saW1pdCgxKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICBpZiAoc25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgIHJldHVybiBjb252ZXJ0QXJ0aXN0KHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFydGlzdChkYXRhOiBPbWl0PEFydGlzdCwgXCJpZFwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCI+KTogUHJvbWlzZTxBcnRpc3Q+IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImFydGlzdHNcIikuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb252ZXJ0QXJ0aXN0KHsgaWQ6IGRvY1JlZi5pZCwgLi4uZGF0YSwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBcnRpc3QoXHJcbiAgICBhcnRpc3RJZDogc3RyaW5nLFxyXG4gICAgZGF0YTogUGFydGlhbDxPbWl0PEFydGlzdCwgXCJpZFwiPj5cclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpXHJcbiAgICAgICAgLmRvYyhhcnRpc3RJZClcclxuICAgICAgICAudXBkYXRlKHsgLi4uZGF0YSwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aXN0KGFydGlzdElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImFydGlzdHNcIikuZG9jKGFydGlzdElkKS5kZWxldGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydGlzdEJ5SWQoYXJ0aXN0SWQ6IHN0cmluZyk6IFByb21pc2U8QXJ0aXN0IHwgbnVsbD4ge1xyXG4gICAgY29uc3QgZG9jID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKS5kb2MoYXJ0aXN0SWQpLmdldCgpO1xyXG4gICAgaWYgKCFkb2MuZXhpc3RzKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBjb252ZXJ0QXJ0aXN0KHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQmxvZyBQb3N0IG9wZXJhdGlvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFtdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgYWRtaW5EYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImJsb2dQb3N0c1wiKVxyXG4gICAgICAgICAgICAub3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBjb252ZXJ0QmxvZ1Bvc3QoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBibG9nUG9zdHMgY29sbGVjdGlvbiBmb3VuZCBvciBlbXB0eSBjb2xsZWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVibGlzaGVkQmxvZ1Bvc3RzKCk6IFByb21pc2U8QmxvZ1Bvc3RbXT4ge1xyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJibG9nUG9zdHNcIilcclxuICAgICAgICAud2hlcmUoXCJwdWJsaXNoZWRcIiwgXCI9PVwiLCB0cnVlKVxyXG4gICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBjb252ZXJ0QmxvZ1Bvc3QoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dQb3N0QnlTbHVnKHNsdWc6IHN0cmluZyk6IFByb21pc2U8QmxvZ1Bvc3QgfCBudWxsPiB7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcImJsb2dQb3N0c1wiKVxyXG4gICAgICAgIC53aGVyZShcInNsdWdcIiwgXCI9PVwiLCBzbHVnKVxyXG4gICAgICAgIC5saW1pdCgxKVxyXG4gICAgICAgIC5nZXQoKTtcclxuXHJcbiAgICBpZiAoc25hcHNob3QuZW1wdHkpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgIHJldHVybiBjb252ZXJ0QmxvZ1Bvc3QoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmxvZ1Bvc3QoZGF0YTogT21pdDxCbG9nUG9zdCwgXCJpZFwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCI+KTogUHJvbWlzZTxCbG9nUG9zdD4ge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwiYmxvZ1Bvc3RzXCIpLmFkZCh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29udmVydEJsb2dQb3N0KHsgaWQ6IGRvY1JlZi5pZCwgLi4uZGF0YSwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCbG9nUG9zdChcclxuICAgIHBvc3RJZDogc3RyaW5nLFxyXG4gICAgZGF0YTogUGFydGlhbDxPbWl0PEJsb2dQb3N0LCBcImlkXCI+PlxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGFkbWluRGJcclxuICAgICAgICAuY29sbGVjdGlvbihcImJsb2dQb3N0c1wiKVxyXG4gICAgICAgIC5kb2MocG9zdElkKVxyXG4gICAgICAgIC51cGRhdGUoeyAuLi5kYXRhLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCbG9nUG9zdChwb3N0SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwiYmxvZ1Bvc3RzXCIpLmRvYyhwb3N0SWQpLmRlbGV0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3RCeUlkKHBvc3RJZDogc3RyaW5nKTogUHJvbWlzZTxCbG9nUG9zdCB8IG51bGw+IHtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImJsb2dQb3N0c1wiKS5kb2MocG9zdElkKS5nZXQoKTtcclxuICAgIGlmICghZG9jLmV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gY29udmVydEJsb2dQb3N0KHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VydmljZSBSZXF1ZXN0IG9wZXJhdGlvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKb2luUmVxdWVzdChcclxuICAgIGRhdGE6IE9taXQ8Sm9pblJlcXVlc3QsIFwiaWRcIiB8IFwiY3JlYXRlZEF0XCIgfCBcInVwZGF0ZWRBdFwiPlxyXG4pOiBQcm9taXNlPEpvaW5SZXF1ZXN0PiB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJqb2luUmVxdWVzdHNcIikuYWRkKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb252ZXJ0Sm9pblJlcXVlc3QoeyBpZDogZG9jUmVmLmlkLCAuLi5kYXRhLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIHVwZGF0ZWRBdDogbmV3IERhdGUoKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbGxhYm9yYXRpb25SZXF1ZXN0KFxyXG4gICAgZGF0YTogT21pdDxDb2xsYWJvcmF0aW9uUmVxdWVzdCwgXCJpZFwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCI+XHJcbik6IFByb21pc2U8Q29sbGFib3JhdGlvblJlcXVlc3Q+IHtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImNvbGxhYm9yYXRpb25SZXF1ZXN0c1wiKS5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRDb2xsYWJvcmF0aW9uUmVxdWVzdCh7IGlkOiBkb2NSZWYuaWQsIC4uLmRhdGEsIGNyZWF0ZWRBdDogbmV3IERhdGUoKSwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBIZXJvIFNsaWRlIG9wZXJhdGlvbnNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIZXJvU2xpZGVzKCk6IFByb21pc2U8SGVyb1NsaWRlW10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBhZG1pbkRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiaGVyb19zbGlkZXNcIilcclxuICAgICAgICAgICAgLm9yZGVyQnkoXCJvcmRlclwiLCBcImFzY1wiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGNvbnZlcnRIZXJvU2xpZGUoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBoZXJvX3NsaWRlcyBjb2xsZWN0aW9uIGZvdW5kIG9yIGVtcHR5IGNvbGxlY3Rpb246XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIZXJvU2xpZGUoZGF0YTogT21pdDxIZXJvU2xpZGUsIFwiaWRcIiB8IFwiY3JlYXRlZEF0XCIgfCBcInVwZGF0ZWRBdFwiPik6IFByb21pc2U8SGVyb1NsaWRlPiB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJoZXJvX3NsaWRlc1wiKS5hZGQoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRIZXJvU2xpZGUoeyBpZDogZG9jUmVmLmlkLCAuLi5kYXRhLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIHVwZGF0ZWRBdDogbmV3IERhdGUoKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhlcm9TbGlkZShcclxuICAgIHNsaWRlSWQ6IHN0cmluZyxcclxuICAgIGRhdGE6IFBhcnRpYWw8T21pdDxIZXJvU2xpZGUsIFwiaWRcIj4+XHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgYWRtaW5EYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiaGVyb19zbGlkZXNcIilcclxuICAgICAgICAuZG9jKHNsaWRlSWQpXHJcbiAgICAgICAgLnVwZGF0ZSh7IC4uLmRhdGEsIHVwZGF0ZWRBdDogbmV3IERhdGUoKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUhlcm9TbGlkZShzbGlkZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImhlcm9fc2xpZGVzXCIpLmRvYyhzbGlkZUlkKS5kZWxldGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlb3JkZXJIZXJvU2xpZGVzKHNsaWRlczogeyBpZDogc3RyaW5nOyBvcmRlcjogbnVtYmVyIH1bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYmF0Y2ggPSBhZG1pbkRiLmJhdGNoKCk7XHJcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJoZXJvX3NsaWRlc1wiKS5kb2Moc2xpZGUuaWQpO1xyXG4gICAgICAgIGJhdGNoLnVwZGF0ZShyZWYsIHsgb3JkZXI6IHNsaWRlLm9yZGVyLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGVyb1NsaWRlQnlJZChzbGlkZUlkOiBzdHJpbmcpOiBQcm9taXNlPEhlcm9TbGlkZSB8IG51bGw+IHtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcImhlcm9fc2xpZGVzXCIpLmRvYyhzbGlkZUlkKS5nZXQoKTtcclxuICAgIGlmICghZG9jLmV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gY29udmVydEhlcm9TbGlkZSh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhY3QgTWVzc2FnZSBvcGVyYXRpb25zXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyB0eXBlIENvbnRhY3RNZXNzYWdlLCBjb252ZXJ0Q29udGFjdE1lc3NhZ2UgfSBmcm9tIFwiLi9maXJlc3RvcmUtc2NoZW1hXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGFjdE1lc3NhZ2VzKCk6IFByb21pc2U8Q29udGFjdE1lc3NhZ2VbXT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGFkbWluRGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJjb250YWN0X21lc3NhZ2VzXCIpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGNvbnZlcnRDb250YWN0TWVzc2FnZSh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNvbnRhY3RfbWVzc2FnZXMgY29sbGVjdGlvbiBmb3VuZCBvciBlbXB0eSBjb2xsZWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1NBeVlzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$data$3a$675ad1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/db/data:675ad1 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HeroSection() {
    _s();
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const initData = {
                "HeroSection.useEffect.initData": async ()=>{
                    const slidesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$data$3a$675ad1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHeroSlides"])();
                    setSlides(slidesData);
                }
            }["HeroSection.useEffect.initData"];
            initData();
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen flex flex-col items-center relative overflow-hidden pt-32 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-4xl mx-auto space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse block mb-2",
                                        children: "MelodyMaker Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl md:text-5xl block text-white mt-4 font-light",
                                        children: "Transforming Musical Dreams into Global Sensations"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed hidden",
                                children: "Transforming Musical Dreams into Global Sensations"
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-foreground font-medium leading-relaxed",
                                                children: "World-class music production, global distribution, professional artist branding, and collaborative opportunities for artists ready to rise."
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed",
                                                children: "At MelodyMaker Studio, we transform musical ideas into global-ready songs. Whether you're an emerging talent or an established artist refining your sound, we provide everything you need to create, produce, collaborate, and reach millions."
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 border-l-2 border-primary/30 pl-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-primary uppercase tracking-wide",
                                                children: "IT NEVER ENDS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed italic",
                                                children: '"Passion never dies, it grows stronger every day."'
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed",
                                                children: "We believe that creativity has no age limit and dreams don't expire. Whether you're a rising young artist or someone rediscovering a lifelong passion, we encourage you to step forward and chase what sets your soul on fire. We're here to remind you that it's never too late, never too early, and never impossible."
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full flex items-center justify-center gap-2",
                                                    children: [
                                                        "Start Your Journey ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: slides.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    slides: slides
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this) : // Fallback / Placeholder if no slides
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full aspect-[4/3] bg-primary/20 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Add slides in Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-section.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "KVoJDyX2IiQ2FdwKb/ySwq7FjXI=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/features-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
"use client";
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        title: "Music Production",
        description: "Create industry-standard songs from scratch or elevate your existing ideas."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Global Music Distribution",
        description: "Release your music on 40+ major platforms including Spotify, TikTok, Apple Music, and YouTube Music."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Artist Branding & Online Presence",
        description: "Build a strong identity with professional artist websites, TikTok/YouTube profiles, and streaming platforms."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Ready-Made Songs for Artists",
        description: "Access professionally produced songs you can revoice and release as your own."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        title: "Artist Collaborations",
        description: "We connect artists, producers, and vocalists to create powerful music together."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        title: "Support from concept to release",
        description: "We work with our artists from getting their ideas to paper and to the recording studio till release of their songs."
    }
];
function FeaturesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl lg:text-5xl font-bold",
                            children: "Why Choose MelodyMaker Studios"
                        }, void 0, false, {
                            fileName: "[project]/components/features-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Everything you need to create professional-grade music"
                        }, void 0, false, {
                            fileName: "[project]/components/features-section.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features-section.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: features.map((feature, index)=>{
                        const Icon = feature.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 p-8 group backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "text-primary",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/components/features-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/features-section.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/features-section.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/features-section.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/features-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features-section.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/features-section.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/features-section.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/features-section.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features-section.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copyright$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copyright$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copyright.js [app-client] (ecmascript) <export default as Copyright>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const faqData = [
    {
        question: "What is MelodyMaker Studio?",
        answer: "MelodyMaker Studio is a full-service music production and artist development company. We turn song ideas into professional, release-ready tracks and help artists get their music heard globally.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"]
    },
    {
        question: "Who is MelodyMaker Studio for?",
        answer: "We work with independent artists, bands, creators, and labels at any stage—whether you’re just starting out, rebranding your sound, or ready to level up your music and reach.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        question: "What services do you offer?",
        answer: "We provide full song production (beat-making, arrangement, mixing, mastering), ready-made songs for artists to revoice, artist collaborations, and digital music distribution. Personalised songs can also be offered as a small add-on service.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"]
    },
    {
        question: "Do I own the song if I work with MelodyMaker Studio?",
        answer: "Ownership depends on the type of project. For songs you write, you typically own the songwriting rights while we may share production/master rights. For ready-made songs, usage and ownership are clearly defined in a written agreement before we start.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copyright$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copyright$3e$__["Copyright"]
    },
    {
        question: "How much does it cost to work with you?",
        answer: "Costs depend on what you need—full production, mixing/mastering only, or a ready-made song. Once you tell us your goals and budget, we’ll recommend a package and give you a clear, upfront quote.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        question: "How long does it take to finish a song?",
        answer: "A single can take anywhere from a few days to a few weeks, depending on the project’s complexity and feedback time. We’ll agree an estimated timeline with you at the start so you know what to expect.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        question: "Can you distribute my music to streaming platforms?",
        answer: "Yes. We can help you release your music on major streaming platforms (like Spotify and Apple Music) and support you with metadata, release strategy, and basic promotion guidance.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"]
    },
    {
        question: "How do I start a project with MelodyMaker Studio?",
        answer: "Simply contact us through the website form, email, or social media. Share a short description of your idea, your style, and your budget, and we’ll reply with recommended options and next steps.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"]
    }
];
function FAQSection() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggle = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    const handleKeyDown = (e, index)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 pb-48 relative bg-[#0a0514]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px]"
                    }, void 0, false, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[128px]"
                    }, void 0, false, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-400 max-w-2xl mx-auto",
                                children: "Everything you need to know about working with us."
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                                    bg-white/5 border border-white/10 rounded-xl p-6 h-full min-h-[140px]
                                    hover:border-primary/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                                    transition-all duration-300 cursor-pointer flex flex-col justify-start gap-4 text-left
                                    outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                                    ${openIndex === index ? 'border-primary/50 bg-white/10' : ''}
                                `,
                                        onClick: ()=>handleToggle(index),
                                        onKeyDown: (e)=>handleKeyDown(e, index),
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-expanded": openIndex === index,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/faq-section.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/faq-section.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: `w-5 h-5 text-gray-500 md:hidden transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-45 text-white' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/faq-section.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white group-hover:text-primary transition-colors",
                                                children: item.question
                                            }, void 0, false, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block absolute top-[calc(100%+12px)] left-0 w-full z-50    opacity-0 scale-95 invisible -translate-y-2 pointer-events-none   group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:translate-y-0   transition-all duration-300 ease-out origin-top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#130b2b]/95 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl shadow-black/80 ring-1 ring-white/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm leading-relaxed",
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/faq-section.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `md:hidden overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/5 border border-white/5 p-5 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm leading-relaxed",
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 130,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/faq-section.tsx",
                                            lineNumber: 129,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/faq-section.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(FAQSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
"use client";
;
;
;
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/cta-section.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl lg:text-6xl font-bold tracking-tight",
                        children: "Ready To Transform your Musical Dreams into Global Sensations?"
                    }, void 0, false, {
                        fileName: "[project]/components/cta-section.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",
                        children: "Whether you’re taking your first step or preparing your next big release, MelodyMaker Studio is designed to support your journey every step of the way. Let’s create something unforgettable together."
                    }, void 0, false, {
                        fileName: "[project]/components/cta-section.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-12 pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                className: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 rounded-full px-10 py-7 text-xl font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    children: [
                                        "Book a Consultation ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 22,
                                            className: "ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 23,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cta-section.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Have questions before reaching out?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-section.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 gap-2 rounded-full px-8 py-6 text-lg border-0 h-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/faq",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cta-section.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this),
                                                "Frequently Asked Questions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-section.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cta-section.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cta-section.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cta-section.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cta-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(marketing)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cta-section.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(marketing)/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(marketing)/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(marketing)/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(marketing)/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(marketing)/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_da6a0e68._.js.map