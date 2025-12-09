import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";

export function ArtistsSection() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center z-10">
                Our Featured Artists
            </h2>
            <InfiniteMovingCards
                items={artists}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const artists = [
    {
        quote: "Frankywright",
        name: "Frankywright",
        title: "Artist",
    },
    {
        quote: "Beverly Hills",
        name: "Beverly Hills",
        title: "Artist",
    },
    {
        quote: "MC Da-Hills",
        name: "MC Da-Hills",
        title: "Artist",
    },
    {
        quote: "Obi Golden",
        name: "Obi Golden",
        title: "Artist",
    },
    {
        quote: "Queen - Idia",
        name: "Queen - Idia",
        title: "Artist",
    },
    {
        quote: "Jojo The Creator",
        name: "Jojo The Creator",
        title: "Artist",
    },
    {
        quote: "Franklin Ugwu",
        name: "Franklin Ugwu",
        title: "Artist",
    },
];
