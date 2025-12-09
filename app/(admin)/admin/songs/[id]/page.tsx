import { getSongById } from "@/lib/db/firestore-queries";
import { AddSongForm } from "@/components/admin/forms/add-song-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditSongPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const song = await getSongById(id);

    if (!song) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Song</h1>
            </div>
            <AddSongForm initialData={JSON.parse(JSON.stringify(song))} />
            {/* <pre>{JSON.stringify(song, null, 2)}</pre> */}
        </div>
    );
}
