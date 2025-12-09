"use server";

import { createBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/db/firestore-queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlogPostAction(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const image = formData.get("image") as string;
    const author = formData.get("author") as string;
    const published = formData.get("published") === "on";

    const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    await createBlogPost({
        title,
        slug,
        content,
        excerpt,
        image,
        author,
        published,
    });

    revalidatePath("/admin-dashboard/blog");
    revalidatePath("/blog");
    redirect("/admin-dashboard/blog");
}

export async function updateBlogPostAction(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const image = formData.get("image") as string;
    const author = formData.get("author") as string;
    const published = formData.get("published") === "on";

    const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    await updateBlogPost(id, {
        title,
        slug,
        content,
        excerpt,
        image,
        author,
        published,
    });

    revalidatePath("/admin-dashboard/blog");
    revalidatePath("/blog");
    redirect("/admin-dashboard/blog");
}

export async function deleteBlogPostAction(id: string) {
    await deleteBlogPost(id);
    revalidatePath("/admin-dashboard/blog");
    revalidatePath("/blog");
}
