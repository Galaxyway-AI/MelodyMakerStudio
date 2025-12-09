"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
        { role: "bot", text: "Hello! I'm Melody, your AI assistant. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: "user", text: input }]);
        setInput("");

        // Mock response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "That's interesting! Tell me more about your music goals." },
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-80 md:w-96 bg-black border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="bg-neutral-900 p-4 flex justify-between items-center border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-bold text-white">Melody AI</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/90">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "max-w-[80%] p-3 rounded-2xl text-sm",
                                        msg.role === "user"
                                            ? "bg-primary text-white ml-auto rounded-br-none"
                                            : "bg-neutral-800 text-neutral-200 mr-auto rounded-bl-none"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Type a message..."
                                className="bg-black border-neutral-800 focus-visible:ring-primary"
                            />
                            <Button size="icon" onClick={handleSend} className="bg-primary hover:bg-primary/90">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
                <MessageSquare className="h-6 w-6 text-white" />
            </Button>
        </div>
    );
}
