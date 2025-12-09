"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Upload, X } from "lucide-react";
import { uploadFile } from "@/actions/uploadFile";
import { createHeroSlideAction, updateHeroSlideAction } from "@/actions/hero-carousel";
import { HeroSlide } from "@/lib/db/firestore-schema";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

interface HeroSlideFormProps {
    initialData?: HeroSlide;
}

const PLATFORMS = [
    "Spotify",
    "TikTok",
    "Apple Music",
    "YouTube Music",
    "Amazon Music",
    "SoundCloud",
];

export default function HeroSlideForm({ initialData }: HeroSlideFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>(initialData?.image || "");
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(initialData?.platforms || []);

    const [formData, setFormData] = useState({
        label: initialData?.label || "",
        title: initialData?.title || "",
        description: initialData?.description || "",
        ctaText: initialData?.ctaText || "",
        ctaLink: initialData?.ctaLink || "",
        order: initialData?.order || 0,
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePlatformToggle = (platform: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform)
                ? prev.filter((p) => p !== platform)
                : [...prev, platform]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let imageUrl = initialData?.image || "";

            if (imageFile) {
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("path", `hero-carousel/${Date.now()}-${imageFile.name}`);

                const uploadResult = await uploadFile(formData);
                if (uploadResult.error) {
                    throw new Error(uploadResult.error);
                }
                if (uploadResult.url) {
                    imageUrl = uploadResult.url;
                }
            }

            const slideData = {
                ...formData,
                image: imageUrl,
                platforms: selectedPlatforms,
            };

            if (initialData) {
                await updateHeroSlideAction(initialData.id, slideData);
            } else {
                await createHeroSlideAction(slideData);
            }

            router.push("/admin/hero-carousel");
            router.refresh();
        } catch (error) {
            console.error("Error saving slide:", error);
            alert(`Failed to save slide: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>{initialData ? "Edit Slide" : "Create New Slide"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Image Upload */}
                    <div className="space-y-2">
                        <Label>Slide Image</Label>
                        <div className="flex items-center gap-4">
                            <div className="relative w-40 h-40 border-2 border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden bg-muted/50">
                                {imagePreview ? (
                                    <Image
                                        src={imagePreview}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                )}
                            </div>
                            <div className="space-y-2">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="max-w-xs"
                                />
                                <p className="text-xs text-muted-foreground">
                                    Recommended size: 800x800px. JPG, PNG or WebP.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="label">Label (Top Tag)</Label>
                            <Input
                                id="label"
                                placeholder="e.g. Artist Spotlight"
                                value={formData.label}
                                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g. Artist Name or Song Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Short description (2-3 lines)"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                            rows={3}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Platforms</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {PLATFORMS.map((platform) => (
                                <div key={platform} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={platform}
                                        checked={selectedPlatforms.includes(platform)}
                                        onCheckedChange={() => handlePlatformToggle(platform)}
                                    />
                                    <label
                                        htmlFor={platform}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {platform}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="ctaText">CTA Button Text (Optional)</Label>
                            <Input
                                id="ctaText"
                                placeholder="e.g. Listen Now"
                                value={formData.ctaText}
                                onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ctaLink">CTA Link URL (Optional)</Label>
                            <Input
                                id="ctaLink"
                                placeholder="e.g. https://spotify.com/..."
                                value={formData.ctaLink}
                                onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="order">Order Priority</Label>
                        <Input
                            id="order"
                            type="number"
                            value={formData.order}
                            onChange={(e) => {
                                const val = parseInt(e.target.value);
                                setFormData({ ...formData, order: isNaN(val) ? 0 : val });
                            }}
                        />
                        <p className="text-xs text-muted-foreground">
                            Lower numbers appear first.
                        </p>
                    </div>

                    <div className="flex justify-end gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {initialData ? "Update Slide" : "Create Slide"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}
