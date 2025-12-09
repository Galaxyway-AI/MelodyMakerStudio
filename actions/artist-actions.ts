"use server";

import { createArtist, updateArtist, deleteArtist } from "@/lib/db/firestore-queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createArtistAction(formData: FormData) {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const image = formData.get("image") as string;
    const youtube = formData.get("youtube") as string;
    const instagram = formData.get("instagram") as string;
    const twitter = formData.get("twitter") as string;
    const spotify = formData.get("spotify") as string;
    const color = formData.get("color") as string;

    // Simple slug generation
    const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    await createArtist({
        name,
        slug,
        bio,
        image,
        youtube,
        instagram,
        twitter,
        spotify,
        color,
    });

    revalidatePath("/admin-dashboard/artists");
    revalidatePath("/artists");
    redirect("/admin-dashboard/artists");
}

export async function updateArtistAction(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const image = formData.get("image") as string;
    const youtube = formData.get("youtube") as string;
    const instagram = formData.get("instagram") as string;
    const twitter = formData.get("twitter") as string;
    const spotify = formData.get("spotify") as string;
    const color = formData.get("color") as string;

    const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    await updateArtist(id, {
        name,
        slug,
        bio,
        image,
        youtube,
        instagram,
        twitter,
        spotify,
        color,
    });

    revalidatePath("/admin-dashboard/artists");
    revalidatePath("/artists");
    redirect("/admin-dashboard/artists");
}

export async function deleteArtistAction(id: string) {
    await deleteArtist(id);
    revalidatePath("/admin-dashboard/artists");
    revalidatePath("/artists");
}
