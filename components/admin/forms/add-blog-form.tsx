"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, X, Image as ImageIcon, CheckCircle2 } from "lucide-react";

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
import { createBlogPost } from "@/actions/createBlogPost";
import { updateBlogPost } from "@/actions/updateBlogPost";
import { uploadFile } from "@/actions/uploadFile";
import { useAuth } from "@/contexts/auth-context";
import { BlogPost } from "@/lib/db/firestore-schema";

// --- Schema ---
const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    content: z.string().min(20, { message: "Content must be at least 20 characters" }),
    excerpt: z.string().optional(),
    image: z.custom<File>((v) => v instanceof File, { message: "Cover image is required" }).optional(),
    published: z.boolean().default(false),
});

interface AddBlogFormProps {
    initialData?: Omit<BlogPost, "createdAt" | "updatedAt"> & {
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };
}

export function AddBlogForm({ initialData }: AddBlogFormProps) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: initialData?.title || "",
            slug: initialData?.slug || "",
            content: initialData?.content || "",
            excerpt: initialData?.excerpt || "",
            published: initialData?.published || false,
        },
    });

    // Auto-generate slug from title
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (initialData) return; // Don't auto-change slug when editing
        const title = e.target.value;
        form.setValue("title", title);
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
        form.setValue("slug", slug);
    }

    // --- File Upload Helper ---
    async function uploadFileViaServer(file: File) {
        const formData = new FormData();
        formData.append("file", file);
        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const path = `blog/${user!.uid}/${timestamp}_${sanitizedName}`;
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
        if (!initialData && !values.image) {
            form.setError("image", { message: "Cover image is required" });
            return;
        }

        try {
            setIsLoading(true);
            let imageUrl = initialData?.image || "";

            // 1. Upload Image
            if (values.image instanceof File) {
                const imageRes = await uploadFileViaServer(values.image);
                if (imageRes.error || !imageRes.url) throw new Error(imageRes.error || "Image upload failed");
                imageUrl = imageRes.url;
            }

            // 2. Create or Update Blog Post Record
            if (initialData) {
                const result = await updateBlogPost(initialData.id, {
                    title: values.title,
                    slug: values.slug,
                    content: values.content,
                    excerpt: values.excerpt,
                    image: imageUrl,
                    published: values.published,
                });
                if (result.error) throw new Error(result.error);
                toast.success("Blog post updated successfully!");
            } else {
                const result = await createBlogPost({
                    title: values.title,
                    slug: values.slug,
                    content: values.content,
                    excerpt: values.excerpt,
                    image: imageUrl,
                    author: user.email || "Admin",
                    published: values.published,
                });
                if (result.error) throw new Error(result.error);
                toast.success("Blog post created successfully!");
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
                    {/* Left Column: Image Upload & Settings */}
                    <div className="md:col-span-1 space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Cover Image</CardTitle>
                                <CardDescription>Upload blog cover.</CardDescription>
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
                                                        <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent/50 transition-colors border-muted-foreground/25">
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
                                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border group">
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
                                            <FormMessage className="text-center mt-2" />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>Publishing</CardTitle>
                                <CardDescription>Post visibility.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="published"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">Publish</FormLabel>
                                                <FormDescription>
                                                    Make this post visible to the public.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <input
                                                    type="checkbox"
                                                    checked={field.value}
                                                    onChange={field.onChange}
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                            <CardHeader>
                                <CardTitle>{initialData ? "Edit Blog Post" : "Post Content"}</CardTitle>
                                <CardDescription>Write your blog post.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Post title..." {...field} onChange={(e) => {
                                                        field.onChange(e);
                                                        handleTitleChange(e);
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
                                                    <Input placeholder="post-url-slug" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="excerpt"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Excerpt (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Short summary..." className="h-20 resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Content (Markdown)</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Write your post here..." className="min-h-[300px] font-mono" {...field} />
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
                                {initialData ? "Updating..." : "Publishing..."}
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                {initialData ? "Update Post" : "Create Post"}
                            </>
                        )}
                    </Button>
                </div>

            </form>
        </Form>
    );
}
