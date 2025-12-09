import { AddArtistForm } from "@/components/admin/forms/add-artist-form";

export default function AddArtistPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Add New Artist</h3>
                <p className="text-sm text-muted-foreground">
                    Create a new artist profile in the database.
                </p>
            </div>
            <AddArtistForm />
        </div>
    );
}
