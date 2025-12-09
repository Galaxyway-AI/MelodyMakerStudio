"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createSong } from "@/lib/db/firestore-queries";
import { toast } from "sonner";

export default function AddPersonalisedSongPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        songName: "",
        songDescription: "",
        songImage: "",
        songUrl: "",
        duration: 0,
        albumName: "Personalised Songs",
        albumDescription: "Custom songs created for our clients.",
        albumImage: "",
        artist: "MelodyMaker Studio",
        artistCountry: "Global",
        artistBio: "We create custom songs for you.",
        artistImage: "",
        occasion: "Birthday",
        genre: "Pop",
        style: "Upbeat",
        vocal: "No preference",
        status: "published",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // @ts-ignore - Ignoring type mismatch for now as we are mocking some fields
            await createSong(formData);
            toast.success("Personalised song added successfully!");
            router.push("/admin-dashboard/personalised-songs");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to add song.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Add Personalised Song</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="songName">Song Name</Label>
                    <Input id="songName" name="songName" value={formData.songName} onChange={handleChange} required placeholder="e.g. Happy Birthday Sarah" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="songDescription">Description</Label>
                    <Textarea id="songDescription" name="songDescription" value={formData.songDescription} onChange={handleChange} placeholder="A special song for Sarah's 30th..." />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="songUrl">Audio URL</Label>
                    <Input id="songUrl" name="songUrl" value={formData.songUrl} onChange={handleChange} required placeholder="https://example.com/song.mp3" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="songImage">Cover Image URL</Label>
                    <Input id="songImage" name="songImage" value={formData.songImage} onChange={handleChange} placeholder="https://example.com/cover.jpg" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="occasion">Occasion</Label>
                        <Select onValueChange={(val) => handleSelectChange("occasion", val)} defaultValue={formData.occasion}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Occasion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Birthday">Birthday</SelectItem>
                                <SelectItem value="Wedding">Wedding</SelectItem>
                                <SelectItem value="Anniversary">Anniversary</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="genre">Genre</Label>
                        <Select onValueChange={(val) => handleSelectChange("genre", val)} defaultValue={formData.genre}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Genre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pop">Pop</SelectItem>
                                <SelectItem value="Rock">Rock</SelectItem>
                                <SelectItem value="Hip Hop">Hip Hop</SelectItem>
                                <SelectItem value="Country">Country</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Adding..." : "Add Song"}
                </Button>
            </form>
        </div>
    );
}
