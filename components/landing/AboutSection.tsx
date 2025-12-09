import React from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
    return (
        <section className="py-20 bg-black relative w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Transforming Musical Dreams into Global Sensations
                        </h2>
                        <p className="text-neutral-400 text-lg mb-6">
                            At MelodyMaker Studio, we specialize in turning musical ideas into global sensations. Whether you’re an artist aiming for the stars or a music lover seeking that perfect personalized song, we’ve got you covered.
                        </p>
                        <p className="text-neutral-400 text-lg mb-6">
                            We offer world-class music production and distribution services that spread your music across the globe. From professional music production and worldwide distribution on over 40 streaming platforms, to crafting custom tunes for birthdays, weddings, and corporate events, we’re all about making your moments sing.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 p-4">
                        {/* Placeholder for an image or 3D element */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                            <span className="text-neutral-600 font-mono">About Visual Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
