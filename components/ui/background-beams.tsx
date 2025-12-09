"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,17,0)_0%,rgba(17,17,17,1)_100%)] z-0" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
                <div className="absolute top-[50%] left-[50%] w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen animate-pulse delay-75" />
                <div className="absolute bottom-[20%] right-[20%] w-[800px] h-[800px] bg-pink-500/10 blur-[90px] rounded-full mix-blend-screen animate-pulse delay-150" />
            </div>
        </div>
    );
};
