"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Trash2, Upload, File as FileIcon, Music, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { listFiles, uploadFile, deleteFileByUrl, type StorageFile } from "@/lib/firebase-storage";
import { useAuth } from "@/contexts/auth-context";

export function FileManager() {
    const { user } = useAuth();
    const [files, setFiles] = useState<StorageFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        // Listing files from 'library' folder
        const files = await listFiles("library");
        setFiles(files);
        setLoading(false);
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0 || !user) return;

        setUploading(true);
        const file = e.target.files[0];
        const path = `library/${Date.now()}_${file.name}`;

        const result = await uploadFile(file, path);

        if (result.success) {
            toast.success("File uploaded successfully");
            fetchFiles();
        } else {
            toast.error("Upload failed: " + result.error);
        }
        setUploading(false);

        // Reset input
        e.target.value = "";
    };

    const handleDelete = async (url: string) => {
        if (!confirm("Are you sure you want to delete this file?")) return;

        const result = await deleteFileByUrl(url);
        if (result.success) {
            toast.success("File deleted successfully");
            setFiles(files.filter((f) => f.url !== url));
        } else {
            toast.error("Delete failed: " + result.error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Media Library</h2>
                <div className="flex items-center gap-2">
                    <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    <label htmlFor="file-upload">
                        <Button variant="default" className="cursor-pointer" asChild disabled={uploading}>
                            <span>
                                {uploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                                Upload File
                            </span>
                        </Button>
                    </label>
                </div>
            </div>

            {loading ? (
                <div className="flex h-40 items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            ) : files.length === 0 ? (
                <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed text-muted-foreground">
                    <FileIcon className="mb-2 h-10 w-10 opacity-20" />
                    <p>No files found in library</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {files.map((file) => (
                        <Card key={file.fullPath} className="overflow-hidden">
                            <div className="relative aspect-square bg-muted">
                                {file.type === "image" ? (
                                    <Image
                                        src={file.url}
                                        alt={file.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : file.type === "audio" ? (
                                    <div className="flex h-full items-center justify-center">
                                        <Music className="h-12 w-12 text-muted-foreground" />
                                    </div>
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <FileIcon className="h-12 w-12 text-muted-foreground" />
                                    </div>
                                )}
                            </div>
                            <CardContent className="p-2">
                                <p className="truncate text-xs font-medium" title={file.name}>
                                    {file.name}
                                </p>
                            </CardContent>
                            <CardFooter className="p-2 pt-0">
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    className="h-8 w-full"
                                    onClick={() => handleDelete(file.url)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
