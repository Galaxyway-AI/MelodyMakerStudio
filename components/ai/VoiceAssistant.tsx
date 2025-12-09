"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function VoiceAssistant() {
    const [isListening, setIsListening] = useState(false);

    const toggleListening = () => {
        setIsListening(!isListening);
        if (!isListening) {
            // Mock listening start
            console.log("Listening...");
        } else {
            // Mock listening stop
            console.log("Stopped listening");
        }
    };

    return (
        <div className="fixed bottom-24 right-4 z-50">
            <Button
                onClick={toggleListening}
                size="lg"
                className={`rounded-full h-14 w-14 shadow-lg transition-all duration-300 ${isListening
                        ? "bg-red-500 hover:bg-red-600 animate-pulse"
                        : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
            >
                {isListening ? <MicOff className="h-6 w-6 text-white" /> : <Mic className="h-6 w-6 text-white" />}
            </Button>
            {isListening && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-16 top-2 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/10 whitespace-nowrap"
                >
                    <span className="text-sm text-white">Listening...</span>
                </motion.div>
            )}
        </div>
    );
}
