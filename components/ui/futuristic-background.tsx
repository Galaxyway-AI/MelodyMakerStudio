"use client";

import React, { useEffect, useRef } from "react";
import { AnimationSettings } from "@/lib/db/firestore-schema";

interface Props {
    settings: AnimationSettings;
}

export function FuturisticBackground({ settings }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !settings.enabled) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Initialize Canvas Size
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial call

        // --- Animation Objects ---

        // 1. Floating Notes
        const notesChars = ["♪", "♫", "♩", "♬"];
        const notes: { x: number; y: number; char: string; opacity: number; speedY: number; scale: number }[] = [];
        const noteCount = settings.density || 20;

        for (let i = 0; i < noteCount; i++) {
            notes.push(createNote(width, height));
        }

        function createNote(w: number, h: number) {
            return {
                x: Math.random() * w,
                y: Math.random() * h + h, // Start below or spread out
                char: notesChars[Math.floor(Math.random() * notesChars.length)],
                opacity: Math.random() * 0.5 + 0.1,
                speedY: (Math.random() * 0.5 + 0.2) * (settings.speed || 1),
                scale: Math.random() * 1.5 + 0.5,
            };
        }

        // 2. Sound Waves (Sine Waves)
        let time = 0;

        // --- Formatting Colors ---
        // #8A2BE2 is purple-blue violet. RGB: 138, 43, 226
        // Cyan/Electric Blue: RGB: 0, 255, 255
        const primaryColor = `rgba(138, 43, 226, ${settings.glowIntensity})`;
        const accentColor = `rgba(0, 255, 255, ${settings.glowIntensity})`;

        // --- Main Loop ---
        const render = () => {
            if (!ctx || !canvas) return;

            // Clear with slight trail effect for smoothness if desired, or full clear
            ctx.clearRect(0, 0, width, height);

            time += 0.01 * (settings.speed || 1);

            // Draw Sound Waves
            // We'll draw 3 sine waves with different frequencies/offsets
            [0, 1, 2].forEach((i) => {
                ctx.beginPath();
                ctx.lineWidth = 2;
                // Gradient for the wave line
                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                gradient.addColorStop(0, "transparent");
                gradient.addColorStop(0.5, i % 2 === 0 ? primaryColor : accentColor);
                gradient.addColorStop(1, "transparent");
                ctx.strokeStyle = gradient;

                for (let x = 0; x < width; x += 10) {
                    // Sine wave formula: y = Amplitude * sin(Frequency * x + Phase) + Offset
                    const amplitude = 50 + i * 20;
                    const frequency = 0.002 + i * 0.001;
                    const phase = time + i * 2;
                    const y = height / 2 + Math.sin(x * frequency + phase) * amplitude;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            });

            // Draw Floating Notes
            notes.forEach((note) => {
                note.y -= note.speedY; // Move Up

                // Reset if moves off screen top
                if (note.y < -50) {
                    Object.assign(note, createNote(width, height));
                    note.y = height + 50; // Reset to bottom
                }

                ctx.font = `${20 * note.scale}px serif`;
                ctx.fillStyle = `rgba(200, 200, 255, ${note.opacity * (settings.glowIntensity || 1)})`;
                ctx.shadowBlur = 10 * (settings.glowIntensity || 0.5);
                ctx.shadowColor = accentColor;
                ctx.fillText(note.char, note.x, note.y);
                ctx.shadowBlur = 0; // Reset
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [settings]);

    if (!settings.enabled) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1] bg-background"
        />
    );
}
