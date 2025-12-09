"use server";

import { adminStorage } from "@/lib/firebase-admin";
import { getServerUser } from "@/lib/auth-helpers";

export async function deleteFile(url: string) {
  const user = await getServerUser();
  if (!user || user.email !== "melodymakercontact@gmail.com") {
    return { data: null, error: "Unauthorized: You do not have permission to perform this action." };
  }

  console.log("DELETE FILE STARTED");
  try {
    if (!url) return { data: null, error: "url is required" };

    // Extract path from URL
    // URL format: https://firebasestorage.googleapis.com/v0/b/[bucket]/o/[path]?alt=media&token=...
    // We need to decode the path part.

    const matches = url.match(/\/o\/(.+?)\?/);
    if (!matches || !matches[1]) {
      return { data: null, error: "Invalid Firebase Storage URL" };
    }

    const path = decodeURIComponent(matches[1]);
    console.log(`Deleting file at path: ${path}`);

    const bucket = adminStorage.bucket();
    await bucket.file(path).delete();

    console.log("DELETE FILE ENDED");

    return { data: "Successfully deleted file", error: null };
  } catch (e) {
    console.error(e);
    return {
      data: null,
      error: `Something went wrong while deleting file ${(e as Error).message}`,
    };
  }
}
