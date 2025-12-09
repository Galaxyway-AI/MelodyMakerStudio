"use server";

import { adminDb } from "@/lib/firebase-admin";
import { ReadyMadeRequest, convertReadyMadeRequest } from "@/lib/db/firestore-schema";

export async function submitReadyMadeRequest(data: Omit<ReadyMadeRequest, "id" | "createdAt" | "updatedAt" | "status">) {
    try {
        const docRef = adminDb.collection("ready_made_requests").doc();
        const now = new Date();

        const newRequest: ReadyMadeRequest = {
            id: docRef.id,
            ...data,
            status: "new",
            createdAt: now,
            updatedAt: now,
        };

        await docRef.set(newRequest);

        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error submitting ready-made request:", error);
        return { success: false, error: "Failed to submit request. Please try again." };
    }
}

export async function getReadyMadeRequests() {
    try {
        const snapshot = await adminDb
            .collection("ready_made_requests")
            .orderBy("createdAt", "desc")
            .get();

        const requests = snapshot.docs.map((doc) => convertReadyMadeRequest(doc.data()));
        return { success: true, data: requests };
    } catch (error) {
        console.error("Error fetching ready-made requests:", error);
        return { success: false, error: "Failed to fetch requests" };
    }
}

export async function updateReadyMadeRequestStatus(id: string, status: ReadyMadeRequest["status"]) {
    try {
        await adminDb.collection("ready_made_requests").doc(id).update({
            status,
            updatedAt: new Date(),
        });
        return { success: true };
    } catch (error) {
        console.error("Error updating ready-made request status:", error);
        return { success: false, error: "Failed to update status" };
    }
}
