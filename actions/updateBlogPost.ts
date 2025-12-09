"use server";

import { revalidatePath } from "next/cache";
import { BlogPost } from "@/lib/db/firestore-schema";
import { updateBlogPost as updateBlogPostInFirestore } from "@/lib/db/firestore-queries";
import { getServerUser } from "@/lib/auth-helpers";

export async function updateBlogPost(
    postId: string,
    data: Partial<Omit<BlogPost, "id" | "createdAt" | "updatedAt">>
) {
    const user = await getServerUser();
    if (!user || user.email !== "melodymakercontact@gmail.com") {
        return { error: "Unauthorized: You do not have permission to perform this action." };
    }

    try {
        await updateBlogPostInFirestore(postId, data);
        revalidatePath("/admin/blog");
        revalidatePath(`/admin/blog/${postId}`);
        return { success: true };
    } catch (error) {
        console.error("Error updating blog post:", error);
        return { error: `Failed to update blog post: ${(error as Error).message}` };
    }
}
