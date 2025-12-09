"use server";

import { createJoinRequest, createSongRequest, createCollaborationRequest } from "@/lib/db/firestore-queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitJoinRequestAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const demoUrl = formData.get("demoUrl") as string;
    const message = formData.get("message") as string;

    await createJoinRequest({
        name,
        email,
        phone,
        demoUrl,
        message,
    });

    // In a real app, we might redirect to a thank you page
    // For now, we'll just revalidate and maybe redirect to home or show a success state on client
    // Since these are public pages, we might want to return a success flag instead of redirecting if we want to show a toast
    // But for simplicity, let's redirect to home with a query param? Or just back to the page.
    // Let's redirect to the same page for now, client can handle "success" param if needed, or we just rely on the form reset.
    // Actually, redirecting to a "thank you" or back to home is safer.
    redirect("/?success=true");
}

export async function submitSongRequestAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const genre = formData.get("genre") as string;
    const occasion = formData.get("occasion") as string;
    const style = formData.get("style") as string;
    const vocal = formData.get("vocal") as string;
    const story = formData.get("story") as string;
    const mustIncludes = formData.get("mustIncludes") as string; // Comma separated?
    const referralSource = formData.get("referralSource") as string;
    const extraAddons = formData.get("extraAddons") as string;
    const expressService = formData.get("expressService") as string;

    await createSongRequest({
        name,
        email,
        genre,
        occasion,
        style,
        vocal,
        story,
        mustIncludes: mustIncludes ? mustIncludes.split(",").map(s => s.trim()) : [],
        referralSource,
        extraAddons,
        expressService,
    });

    redirect("/?success=true");
}

export async function submitCollaborationRequestAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;

    await createCollaborationRequest({
        name,
        email,
        role,
        message,
    });

    redirect("/?success=true");
}
