import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { getAllBlogPosts, deleteBlogPost } from "@/lib/db/firestore-queries";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { revalidatePath } from "next/cache";

export default async function BlogPage() {
    const posts = await getAllBlogPosts();

    async function deletePostAction(formData: FormData) {
        "use server";
        const postId = formData.get("postId") as string;
        if (postId) {
            await deleteBlogPost(postId);
            revalidatePath("/admin/blog");
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
                    <p className="text-muted-foreground">Manage your blog content.</p>
                </div>
                <Link href="/admin/add-blog">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Post
                    </Button>
                </Link>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                    <CardTitle>All Posts</CardTitle>
                    <CardDescription>A list of all blog posts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                        No posts found. Add one to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                posts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-2">
                                                {post.image && (
                                                    <img src={post.image} alt={post.title} className="w-8 h-8 rounded object-cover" />
                                                )}
                                                {post.title}
                                            </div>
                                        </TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell>
                                            <Badge variant={post.published ? "default" : "secondary"}>
                                                {post.published ? "Published" : "Draft"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{post.createdAt?.toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" asChild>
                                                    <Link href={`/admin/blog/${post.id}`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <form action={deletePostAction}>
                                                    <input type="hidden" name="postId" value={post.id} />
                                                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-500/10">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </form>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
