"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Upload, X, Music, Image as ImageIcon, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { editSong } from "@/actions/editSong";
import { createSong } from "@/actions/createSong";
import { Song } from "@/lib/db/firestore-schema";
import { useAuth } from "@/contexts/auth-context";
import { uploadFile } from "@/actions/uploadFile";

const songGenres = ["Pop", "R&B", "Hip Hop", "Rock", "Country", "Jazz", "Electronic", "Classical", "Other"];
const occasions = ["Birthday", "Anniversary", "Wedding", "Romance", "Travel", "Relaxation", "Party", "Other"];
const songVocals = ["Male", "Female", "No preference"];

// --- Schema ---
const formSchema = z.object({
    song_title: z.string().min(1, { message: "Song title is required" }),
    artist: z.string().min(1, { message: "Artist name is required" }),
    songDescription: z.string().optional(),

    // Files are optional when editing if they already exist
    song_audio: z.custom<File>((v) => v instanceof File, { message: "Audio file is required" }).optional(),
    song_cover_image: z.custom<File>((v) => v instanceof File, { message: "Cover image is required" }).optional(),

    genre: z.string().min(1, { message: "Genre is required" }),
    vocal: z.string().min(1, { message: "Vocal type is required" }),
    occasion: z.string().min(1, { message: "Occasion is required" }),
    status: z.enum(["draft", "published"]).default("draft"),
}).refine((data) => {
    // If we are in "create" mode (no initialData passed to component), files are required.
    // But we can't easily check props here. 
    // Instead, we'll handle this validation logic in the component or make the schema looser and check in onSubmit.
    return true;
});

interface AddSongFormProps {
    initialData?: Omit<Song, "createdAt" | "updatedAt"> & {
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };
}

export function AddSongForm({ initialData }: AddSongFormProps) {
    const { user } = useAuth();
    // const user = { uid: "test-uid", email: "admin@test.com" }; // Mock user
    const [isLoading, setIsLoading] = useState(false);
    const [audioPreview, setAudioPreview] = useState<string | null>(initialData?.songUrl ? initialData.songUrl.split('/').pop() || "Existing Audio" : null);
    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.songImage || null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            song_title: initialData?.songName || "",
            artist: initialData?.artist || "",
            songDescription: initialData?.songDescription || "",
            genre: initialData?.genre || "",
            vocal: initialData?.vocal || "",
            occasion: initialData?.occasion || "",
            status: initialData?.status || "draft",
        },
    });

    // --- File Upload Helper ---
    async function uploadFileToStorage(file: File, type: "image" | "audio") {
        const formData = new FormData();
        formData.append("file", file);
        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const path = `${type}/${user!.uid}/${timestamp}_${sanitizedName}`;
        formData.append("path", path);
        return await uploadFile(formData);
    }

    // --- Submit Handler ---
    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user) {
            toast.error("You must be logged in.");
            return;
        }

        // Manual validation for create mode
        if (!initialData) {
            if (!values.song_cover_image) {
                form.setError("song_cover_image", { message: "Cover image is required" });
                return;
            }
            if (!values.song_audio) {
                form.setError("song_audio", { message: "Audio file is required" });
                return;
            }
        }

        try {
            setIsLoading(true);
            const urls: Record<string, string> = {
                image: initialData?.songImage || "",
                audio: initialData?.songUrl || ""
            };

            // 1. Upload Image if changed
            if (values.song_cover_image instanceof File) {
                const imageRes = await uploadFileToStorage(values.song_cover_image, "image");
                if (imageRes.error || !imageRes.url) throw new Error(imageRes.error || "Image upload failed");
                urls.image = imageRes.url;
            }

            // 2. Upload Audio if changed
            if (values.song_audio instanceof File) {
                const audioRes = await uploadFileToStorage(values.song_audio, "audio");
                if (audioRes.error || !audioRes.url) throw new Error(audioRes.error || "Audio upload failed");
                urls.audio = audioRes.url;
            }

            // 3. Create or Update Song Record
            if (initialData) {
                const result = await editSong(initialData.id, {
                    songName: values.song_title,
                    artist: values.artist,
                    songDescription: values.songDescription || undefined,
                    songUrl: urls.audio,
                    songImage: urls.image,
                    genre: values.genre,
                    occasion: values.occasion,
                    vocal: values.vocal as "Male" | "Female" | "No preference",
                    status: values.status,
                });
                if (result.error) throw new Error(result.error);
                toast.success("Song updated successfully!");
            } else {
                const result = await createSong({
                    songName: values.song_title,
                    artist: values.artist,
                    songDescription: values.songDescription || undefined,
                    songUrl: urls.audio,
                    songImage: urls.image,
                    genre: values.genre,
                    occasion: values.occasion,
                    vocal: values.vocal as "Male" | "Female" | "No preference",
                    status: values.status,
                });
                if (result.error) throw new Error(result.error);
                toast.success("Song added successfully!");
                form.reset();
                setAudioPreview(null);
                setImagePreview(null);
            }

        } catch (error) {
            console.error(error);
            toast.error(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    if (!mounted) return null;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Left Column: Basic Info & Details */}
                    <div className="space-y-8">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>{initialData ? "Edit Song" : "Basic Information"}</CardTitle>
                                <CardDescription>Enter the core details of the song.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="song_title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Song Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Summer Vibes" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="artist"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Artist</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. The Weeknd" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="songDescription"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Short description..." className="resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Categorization</CardTitle>
                                <CardDescription>Help users find this song.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="genre"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Genre</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Genre" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {songGenres.map((g) => (
                                                        <SelectItem key={g} value={g}>{g}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="occasion"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Occasion</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Occasion" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {occasions.map((o) => (
                                                        <SelectItem key={o} value={o}>{o}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="vocal"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>Vocal Type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Vocal Type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {songVocals.map((v) => (
                                                        <SelectItem key={v} value={v}>{v}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>Status</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="draft">Draft</SelectItem>
                                                    <SelectItem value="published">Published</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Media Uploads */}
                    <div className="space-y-8">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                            <CardHeader>
                                <CardTitle>Media Assets</CardTitle>
                                <CardDescription>Upload the audio and cover art.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">

                                {/* Cover Image Upload */}
                                <FormField
                                    control={form.control}
                                    name="song_cover_image"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormLabel>Cover Image</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    {!imagePreview ? (
                                                        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent/50 transition-colors border-muted-foreground/25">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <ImageIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                                                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> cover art</p>
                                                                <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 10MB)</p>
                                                            </div>
                                                            <Input
                                                                {...fieldProps}
                                                                type="file"
                                                                accept="image/*"
                                                                className="hidden"
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        onChange(file);
                                                                        setImagePreview(URL.createObjectURL(file));
                                                                    }
                                                                }}
                                                            />
                                                        </label>
                                                    ) : (
                                                        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border group">
                                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <Button
                                                                    variant="destructive"
                                                                    size="icon"
                                                                    type="button"
                                                                    onClick={() => {
                                                                        onChange(undefined);
                                                                        setImagePreview(null);
                                                                    }}
                                                                >
                                                                    <X className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Audio Upload */}
                                <FormField
                                    control={form.control}
                                    name="song_audio"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormLabel>Audio File</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    {!audioPreview ? (
                                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent/50 transition-colors border-muted-foreground/25">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <Music className="w-10 h-10 mb-3 text-muted-foreground" />
                                                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> audio</p>
                                                                <p className="text-xs text-muted-foreground">MP3, WAV</p>
                                                            </div>
                                                            <Input
                                                                {...fieldProps}
                                                                type="file"
                                                                accept="audio/*"
                                                                className="hidden"
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        onChange(file);
                                                                        setAudioPreview(file.name);
                                                                    }
                                                                }}
                                                            />
                                                        </label>
                                                    ) : (
                                                        <div className="flex items-center justify-between w-full p-4 border rounded-lg bg-accent/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-primary/10 rounded-full">
                                                                    <Music className="h-5 w-5 text-primary" />
                                                                </div>
                                                                <span className="text-sm font-medium truncate max-w-[200px]">{audioPreview}</span>
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                type="button"
                                                                onClick={() => {
                                                                    onChange(undefined);
                                                                    setAudioPreview(null);
                                                                }}
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-4">
                    <Button variant="outline" type="button" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" disabled={isLoading} className="min-w-[150px]">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {initialData ? "Updating..." : "Adding..."}
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                {initialData ? "Update Song" : "Add Song"}
                            </>
                        )}
                    </Button>
                </div>

            </form>
        </Form>
    );
}
