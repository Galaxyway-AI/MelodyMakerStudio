import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2, PlayCircle } from "lucide-react";
import Link from "next/link";
import { getAllSongs, deleteSong } from "@/lib/db/firestore-queries";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { revalidatePath } from "next/cache";

export default async function SongsPage() {
    const songs = await getAllSongs();

    async function deleteSongAction(formData: FormData) {
        "use server";
        const songId = formData.get("songId") as string;
        if (songId) {
            await deleteSong(songId);
            revalidatePath("/admin/songs");
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Songs</h2>
                    <p className="text-muted-foreground">Manage your music library.</p>
                </div>
                <Link href="/admin/add-song">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Song
                    </Button>
                </Link>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                    <CardTitle>All Songs</CardTitle>
                    <CardDescription>A list of all songs in your library.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                        No songs found. Add one to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                songs.map((song) => (
                                    <TableRow key={song.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-2">
                                                {song.songImage && (
                                                    <img src={song.songImage} alt={song.songName} className="w-8 h-8 rounded object-cover" />
                                                )}
                                                {song.songName}
                                            </div>
                                        </TableCell>
                                        <TableCell>{song.artist}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{song.genre}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={song.status === "published" ? "default" : "secondary"}>
                                                {song.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" asChild>
                                                    <Link href={`/admin/songs/${song.id}`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <form action={deleteSongAction}>
                                                    <input type="hidden" name="songId" value={song.id} />
                                                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-500/10">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </form>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
