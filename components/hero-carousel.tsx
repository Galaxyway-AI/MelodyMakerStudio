"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroSlide } from "@/lib/db/firestore-schema";

// Platform Icons Mapping (You can expand this)
const PlatformIcons: Record<string, React.ReactNode> = {
    Spotify: <span className="text-[#1DB954] font-bold text-xs">Spotify</span>,
    TikTok: <span className="text-[#00f2ea] font-bold text-xs">TikTok</span>,
    "Apple Music": <span className="text-[#FA243C] font-bold text-xs">Apple</span>,
    "YouTube Music": <span className="text-[#FF0000] font-bold text-xs">YT Music</span>,
    "Amazon Music": <span className="text-[#00A8E1] font-bold text-xs">Amazon</span>,
    SoundCloud: <span className="text-[#FF5500] font-bold text-xs">SoundCloud</span>,
};

interface HeroCarouselProps {
    slides: HeroSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        if (!isPaused && slides.length > 1) {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
            }, 6000); // 6 seconds
        }
        return () => {
            resetTimeout();
        };
    }, [currentIndex, isPaused, slides.length]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!slides || slides.length === 0) {
        return null; // Or a placeholder if preferred
    }

    return (
        <div
            className="relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            <div className="relative w-full h-full bg-card/95 border border-white/10 backdrop-blur-sm">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={cn(
                            "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex flex-col",
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                    >
                        {/* Label */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md">
                                {slide.label}
                            </span>
                        </div>

                        {/* Content Split */}
                        <div className="flex flex-col h-full">
                            {/* Image Section (Top 65% for more image visibility) 
                                User asked for: Picture taking up more space.
                            */}
                            <div className="relative h-[65%] w-full overflow-hidden">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 p-4 flex flex-col justify-between bg-gradient-to-b from-background/50 to-background">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {slide.description}
                                    </p>

                                    {/* Platforms */}
                                    {slide.platforms && slide.platforms.length > 0 && (
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {slide.platforms.map((platform) => (
                                                <div key={platform} className="flex items-center justify-center bg-white/5 rounded-md px-2 py-1 border border-white/5">
                                                    {PlatformIcons[platform] || <span className="text-xs">{platform}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* CTA */}
                                {slide.ctaText && (
                                    <div className="pt-4 flex justify-end">
                                        {slide.ctaLink ? (
                                            <Link href={slide.ctaLink} target="_blank">
                                                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-4">
                                                    {slide.ctaText}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-4">
                                                {slide.ctaText}
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            {slides.length > 1 && (
                <>
                    {/* Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/80 transition-all opacity-0 group-hover:opacity-100 z-30"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/80 transition-all opacity-0 group-hover:opacity-100 z-30"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    index === currentIndex
                                        ? "bg-primary w-6"
                                        : "bg-white/30 hover:bg-white/50"
                                )}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
