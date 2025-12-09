import { getBlogPostById } from "@/lib/db/firestore-queries";
import { AddBlogForm } from "@/components/admin/forms/add-blog-form";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getBlogPostById(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
            </div>
            <AddBlogForm initialData={JSON.parse(JSON.stringify(post))} />
        </div>
    );
}
