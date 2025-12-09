import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center">
                    <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        MelodyMaker Studio
                    </span>
                    <br />
                    <span className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Transforming Musical Dreams into Global Sensations
                    </span>
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Your Music. Your Vision. Amplified to the World.
                    World-class music production, global distribution, and artist branding.
                </p>
                <div className="mt-8 flex justify-center gap-4 items-center">
                    <Link href="/services/join">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <span>Get Started</span>
                        </HoverBorderGradient>
                    </Link>
                    <Link href="/services">
                        <Button size="lg" variant="outline" className="text-white border-neutral-700 hover:bg-neutral-800 h-12 rounded-full px-8">
                            Explore Services
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
