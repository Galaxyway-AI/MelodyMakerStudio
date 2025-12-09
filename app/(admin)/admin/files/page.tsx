import { FileManager } from "./_components/file-manager";

export const metadata = {
    title: "Media Library | Admin Dashboard",
    description: "Manage your files",
};

export default function FilesPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <FileManager />
        </div>
    );
}
