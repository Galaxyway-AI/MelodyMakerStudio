import { AddSongForm } from "@/components/admin/forms/add-song-form";

export default function AddSongPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Add New Song</h3>
                <p className="text-sm text-muted-foreground">
                    Upload a new track to the Melody Maker library.
                </p>
            </div>
            <AddSongForm />
        </div>
    );
}
