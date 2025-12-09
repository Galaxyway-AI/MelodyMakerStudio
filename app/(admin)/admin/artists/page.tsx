import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { getAllArtists, deleteArtist } from "@/lib/db/firestore-queries";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { revalidatePath } from "next/cache";

export default async function ArtistsPage() {
    const artists = await getAllArtists();

    async function deleteArtistAction(formData: FormData) {
        "use server";
        const artistId = formData.get("artistId") as string;
        if (artistId) {
            await deleteArtist(artistId);
            revalidatePath("/admin/artists");
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Artists</h2>
                    <p className="text-muted-foreground">Manage your artist profiles.</p>
                </div>
                <Link href="/admin/add-artist">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Artist
                    </Button>
                </Link>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                    <CardTitle>All Artists</CardTitle>
                    <CardDescription>A list of all artists in your library.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {artists.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                        No artists found. Add one to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                artists.map((artist) => (
                                    <TableRow key={artist.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-2">
                                                {artist.image && (
                                                    <img src={artist.image} alt={artist.name} className="w-8 h-8 rounded-full object-cover" />
                                                )}
                                                {artist.name}
                                            </div>
                                        </TableCell>
                                        <TableCell>{artist.slug}</TableCell>
                                        <TableCell>{artist.createdAt?.toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" asChild>
                                                    <Link href={`/admin/artists/${artist.id}`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <form action={deleteArtistAction}>
                                                    <input type="hidden" name="artistId" value={artist.id} />
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
