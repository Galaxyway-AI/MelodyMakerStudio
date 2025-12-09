"use server";

import { adminDb } from "@/lib/firebase-admin";
import { ContactMessage } from "@/lib/db/firestore-schema";

// NOTE: Using a shared key/schema approach - in production ensure validation is strict.
export async function submitContactMessage(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}) {
    try {
        const contactRef = adminDb.collection("contact_messages").doc();
        const now = new Date();

        const newMessage: ContactMessage = {
            id: contactRef.id,
            name: data.name,
            email: data.email,
            phone: data.phone || "",
            subject: data.subject,
            message: data.message,
            status: "new",
            createdAt: now,
            updatedAt: now,
        };

        await contactRef.set(newMessage);

        return { success: true, id: contactRef.id };
    } catch (error) {
        console.error("Error submitting contact message:", error);
        return { success: false, error: "Failed to send message. Please try again." };
    }
}
