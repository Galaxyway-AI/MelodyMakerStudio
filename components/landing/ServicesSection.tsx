import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function ServicesSection() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                Our Services
            </h2>
            <HoverEffect items={services} />
        </div>
    );
}

export const services = [
    {
        title: "Music Production",
        description:
            "Create industry-standard songs from scratch or elevate your existing ideas with our world-class production team.",
        link: "/services",
    },
    {
        title: "Global Distribution",
        description:
            "Release your music on 40+ major platforms including Spotify, TikTok, Apple Music, and YouTube Music.",
        link: "/services",
    },
    {
        title: "Artist Branding",
        description:
            "Build a strong identity with professional artist websites, TikTok/YouTube profiles, and streaming platforms.",
        link: "/services",
    },
    {
        title: "Personalised Songs",
        description:
            "Custom tunes for birthdays, weddings, and corporate events. We make your moments sing.",
        link: "/services/personalised-songs",
    },
    {
        title: "Artist Collaborations",
        description:
            "We connect artists, producers, and vocalists to create powerful music together.",
        link: "/services/collaborate",
    },
    {
        title: "Join Our Label",
        description:
            "Ready to elevate your music career? Get started today and let's make your next hit.",
        link: "/services/join",
    },
];
