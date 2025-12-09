import { getBlogPostBySlug } from "@/lib/db/firestore-queries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-dynamic";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: `${post.title} | MelodyMaker`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    };

    const calculateReadTime = (content: string) => {
        const words = content.trim().split(/\s+/).length;
        const time = Math.ceil(words / 200);
        return `${time} min read`;
    };

    return (
        <main className="pt-24 pb-20 min-h-screen bg-background">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft size={16} /> Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 space-y-6">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                            Blog
                        </span>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate(post.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{calculateReadTime(post.content)}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-xs text-muted-foreground">Author</p>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden aspect-video shadow-2xl border border-border/50">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent prose-img:rounded-xl">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
