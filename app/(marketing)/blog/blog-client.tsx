"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Search, Sparkles, TrendingUp } from "lucide-react"
import { BlogPost } from "@/lib/db/firestore-schema"
import Link from "next/link"

interface BlogClientProps {
    posts: BlogPost[]
}

export default function BlogClient({ posts }: BlogClientProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = posts.filter((post) => {
        const searchMatch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase())
        return searchMatch
    })

    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    }

    const calculateReadTime = (content: string) => {
        const words = content.trim().split(/\s+/).length;
        const time = Math.ceil(words / 200);
        return `${time} min`;
    }

    const featuredPost = posts.length > 0 ? posts[0] : null;
    const gridPosts = searchQuery ? filteredPosts : filteredPosts.slice(1); // Hide featured from grid if no search

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="min-h-[60vh] bg-gradient-to-b from-background to-background/50 flex items-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/30 flex items-center gap-2 w-fit">
                            <Sparkles size={16} /> Industry Insights
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        Blog & <span className="gradient-text">News</span>
                    </h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Insights, tips, stories, and AI-powered trends from the world of music production. Stay updated with
                        industry innovation.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && searchQuery === "" && (
                <section className="py-20 border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-accent/30 overflow-hidden holographic-card">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={20} className="text-accent" />
                                        <span className="text-sm font-semibold text-accent uppercase tracking-wide">Featured Story</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold">{featuredPost.title}</h2>
                                    <p className="text-lg text-foreground/70">{featuredPost.excerpt}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                                        <div className="flex items-center gap-2">
                                            <User size={16} />
                                            <span>{featuredPost.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{formatDate(featuredPost.createdAt)}</span>
                                        </div>
                                        <span className="text-accent font-semibold ml-auto">
                                            {calculateReadTime(featuredPost.content)}
                                        </span>
                                    </div>
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground px-8 py-6 h-auto font-semibold">
                                            Read Full Story
                                        </Button>
                                    </Link>
                                </div>
                                <img
                                    src={featuredPost.image || "/placeholder.svg"}
                                    alt="Featured"
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                            </div>
                        </Card>
                    </div>
                </section>
            )}

            {/* Search & Filter */}
            <section className="py-12 border-b border-border sticky top-16 z-40 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-foreground/60">No posts found matching your search.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                                    <Card
                                        className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 group cursor-pointer flex flex-col holographic-card h-full"
                                    >
                                        {/* Featured Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.image || "/placeholder.svg"}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all">
                                                    Read Article
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-4 flex flex-col flex-grow">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors text-balance line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-foreground/70 line-clamp-2">{post.excerpt}</p>
                                            </div>

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap gap-4 text-sm text-foreground/60 pt-4 border-t border-border mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <User size={16} />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    <span>{formatDate(post.createdAt)}</span>
                                                </div>
                                                <span className="ml-auto text-accent font-medium">{calculateReadTime(post.content)}</span>
                                            </div>

                                            {/* Read More Link */}
                                            <div className="pt-4">
                                                <span className="flex items-center gap-2 text-primary hover:text-accent transition-colors group">
                                                    Read More
                                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold">Stay Updated with MelodyMaker</h2>
                    <p className="text-lg text-foreground/70">
                        Subscribe to our newsletter and never miss the latest AI music production tips, artist features, and
                        industry innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                        />
                        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground px-6 h-auto font-semibold">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
