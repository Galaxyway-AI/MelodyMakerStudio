import { getArtistById } from "@/lib/db/firestore-queries";
import { AddArtistForm } from "@/components/admin/forms/add-artist-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditArtistPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const artist = await getArtistById(id);

    if (!artist) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Artist</h1>
            </div>
            <AddArtistForm initialData={JSON.parse(JSON.stringify(artist))} />
        </div>
    );
}
