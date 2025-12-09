import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Join the Movement
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Ready to elevate your music career? At MelodyMaker Studio, the journey never ends… it only gets better.
                </p>
                <div className="mt-8 flex justify-center relative z-10">
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
