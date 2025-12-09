"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, X, Image as ImageIcon, CheckCircle2, Instagram, Twitter, Music2, Youtube } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { updateArtist } from "@/actions/updateArtist";
import { createArtist } from "@/actions/createArtist";
import { Artist } from "@/lib/db/firestore-schema";
import { useAuth } from "@/contexts/auth-context";
import { uploadFile } from "@/actions/uploadFile";

const artistGenres = ["Pop", "R&B", "Hip Hop", "Rock", "Country", "Jazz", "Electronic", "Classical", "Other"];

// --- Schema ---
const formSchema = z.object({
    name: z.string().min(1, { message: "Artist name is required" }),
    bio: z.string().min(10, { message: "Bio must be at least 10 characters" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    image: z.custom<File>((v) => v instanceof File, { message: "Profile image is required" }).optional(),

    // Social Links (Optional)
    instagram: z.string().optional(),
    twitter: z.string().optional(),
    spotify: z.string().optional(),
    youtube: z.string().optional(),

    // Content
    genre: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
});

interface AddArtistFormProps {
    initialData?: Omit<Artist, "createdAt" | "updatedAt"> & {
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };
}

export function AddArtistForm({ initialData }: AddArtistFormProps) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [videoInput, setVideoInput] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name || "",
            bio: initialData?.bio || "",
            slug: initialData?.slug || "",
            instagram: initialData?.instagram || "",
            twitter: initialData?.twitter || "",
            spotify: initialData?.spotify || "",
            youtube: initialData?.youtube || "",
            genre: initialData?.genre || [],
            videos: initialData?.videos || [],
        },
    });

    // Auto-generate slug from name
    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (initialData) return; // Don't auto-change slug when editing
        const name = e.target.value;
        form.setValue("name", name);
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
        form.setValue("slug", slug);
    }

    // --- File Upload Helper ---
    async function uploadFileToStorage(file: File) {
        const formData = new FormData();
        formData.append("file", file);
        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const path = `artists/${user!.uid}/${timestamp}_${sanitizedName}`;
        formData.append("path", path);
        return await uploadFile(formData);
    }

    // --- Video Helper ---
    const extractYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const addVideo = () => {
        const videoId = extractYoutubeId(videoInput);
        if (videoId) {
            const currentVideos = form.getValues("videos") || [];
            if (!currentVideos.includes(videoId)) {
                form.setValue("videos", [...currentVideos, videoId]);
                setVideoInput("");
                toast.success("Video added!");
            } else {
                toast.error("Video already added");
            }
        } else {
            toast.error("Invalid YouTube URL");
        }
    };

    const removeVideo = (videoId: string) => {
        const currentVideos = form.getValues("videos") || [];
        form.setValue("videos", currentVideos.filter(v => v !== videoId));
    };

    // --- Submit Handler ---
    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user) {
            toast.error("You must be logged in.");
            return;
        }

        // Manual validation for create mode
        if (!initialData && !values.image) {
            form.setError("image", { message: "Profile image is required" });
            return;
        }

        try {
            setIsLoading(true);
            let imageUrl = initialData?.image || "";

            if (values.image instanceof File) {
                const imageRes = await uploadFileToStorage(values.image);
                if (imageRes.error || !imageRes.url) throw new Error(imageRes.error || "Image upload failed");
                imageUrl = imageRes.url;
            }

            const artistData = {
                name: values.name,
                slug: values.slug,
                bio: values.bio,
                image: imageUrl,
                genre: values.genre,
                videos: values.videos,
                instagram: values.instagram || "",
                twitter: values.twitter || "",
                spotify: values.spotify || "",
                youtube: values.youtube || "",
            };

            // 2. Create or Update Artist Record
            if (initialData) {
                const result = await updateArtist(initialData.id, artistData);
                if (result.error) throw new Error(result.error);
                toast.success("Artist updated successfully!");
            } else {
                const result = await createArtist({
                    ...artistData,
                    instagram: values.instagram || "",
                    twitter: values.twitter || "",
                    spotify: values.spotify || "",
                    youtube: values.youtube || "",
                });
                if (result.error) throw new Error(result.error);
                toast.success("Artist added successfully!");
                form.reset();
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

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Left Column: Image Upload */}
                    <div className="md:col-span-1 space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                            <CardHeader>
                                <CardTitle>Profile Image</CardTitle>
                                <CardDescription>Upload artist photo.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex flex-col items-center justify-center w-full">
                                                    {!imagePreview ? (
                                                        <label className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed rounded-full cursor-pointer hover:bg-accent/50 transition-colors border-muted-foreground/25">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <ImageIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                                                                <p className="text-xs text-muted-foreground">Click to upload</p>
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
                                                        <div className="relative w-full aspect-square rounded-full overflow-hidden border border-border group">
                                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <Button
                                                                    variant="destructive"
                                                                    size="icon"
                                                                    className="rounded-full"
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
                                            <FormMessage className="text-center mt-2" />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:col-span-2 space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>{initialData ? "Edit Artist" : "Artist Details"}</CardTitle>
                                <CardDescription>Basic information and bio.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Artist Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. The Weeknd" {...field} onChange={(e) => {
                                                        field.onChange(e);
                                                        handleNameChange(e);
                                                    }} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="slug"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Slug (URL)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. the-weeknd" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="bio"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Biography</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Artist biography..." className="h-32 resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Genres</CardTitle>
                                <CardDescription>Select all that apply.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="genre"
                                    render={() => (
                                        <FormItem>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {artistGenres.map((item) => (
                                                    <FormField
                                                        key={item}
                                                        control={form.control}
                                                        name="genre"
                                                        render={({ field }) => {
                                                            return (
                                                                <FormItem
                                                                    key={item}
                                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                                >
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(item)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...(field.value || []), item])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                            (value) => value !== item
                                                                                        )
                                                                                    )
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        {item}
                                                                    </FormLabel>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Social Links</CardTitle>
                                <CardDescription>Connect with fans.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="instagram"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Profile URL" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="twitter"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2"><Twitter className="h-4 w-4" /> Twitter / X</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Profile URL" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="spotify"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2"><Music2 className="h-4 w-4" /> Spotify</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Artist URL" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="youtube"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2"><Youtube className="h-4 w-4" /> YouTube</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Channel URL" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Featured Videos</CardTitle>
                                <CardDescription>Add YouTube videos to the artist page.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Paste YouTube URL"
                                        value={videoInput}
                                        onChange={(e) => setVideoInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                addVideo();
                                            }
                                        }}
                                    />
                                    <Button type="button" onClick={addVideo} variant="secondary">Add</Button>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="videos"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="grid gap-2">
                                                {field.value?.map((videoId) => (
                                                    <div key={videoId} className="flex items-center gap-2 bg-muted/50 p-2 rounded-md group">
                                                        <div className="w-24 aspect-video bg-black rounded overflow-hidden flex-shrink-0">
                                                            <img
                                                                src={`https://img.youtube.com/vi/${videoId}/default.jpg`}
                                                                alt="Video thumbnail"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm truncate font-medium">https://youtu.be/{videoId}</p>
                                                        </div>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-muted-foreground hover:text-destructive"
                                                            onClick={() => removeVideo(videoId)}
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                                {(!field.value || field.value.length === 0) && (
                                                    <p className="text-sm text-muted-foreground text-center py-4">No videos added yet.</p>
                                                )}
                                            </div>
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
                                {initialData ? "Update Artist" : "Add Artist"}
                            </>
                        )}
                    </Button>
                </div>

            </form>
        </Form>
    );
}
