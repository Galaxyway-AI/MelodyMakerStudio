import { AddBlogForm } from "@/components/admin/forms/add-blog-form";

export default function AddBlogPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Write New Blog Post</h3>
                <p className="text-sm text-muted-foreground">
                    Share news and updates with your audience.
                </p>
            </div>
            <AddBlogForm />
        </div>
    );
}
