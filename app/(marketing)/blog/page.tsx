import { getPublishedBlogPosts } from "@/lib/db/firestore-queries";
import BlogClient from "./blog-client";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return <BlogClient posts={posts} />;
}
