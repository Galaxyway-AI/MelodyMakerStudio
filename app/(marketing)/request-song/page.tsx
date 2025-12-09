"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { createRequestedSong } from "@/actions/createRequestedSong"
import { Mic2, Music, Heart, Sparkles, Loader2 } from "lucide-react"

export default function RequestSongPage() {
    const router = useRouter()
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)

        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            occasion: formData.get("occasion") as string,
            genre: formData.get("genre") as string,
            style: formData.get("style") as string,
            story: formData.get("story") as string,
        }

        const result = await createRequestedSong(rawData)

        setIsSubmitting(false)

        if (result.error) {
            toast({
                title: "Something went wrong",
                description: result.error,
                variant: "destructive",
            })
        } else {
            toast({
                title: "Request Received!",
                description: "We'll be in touch shortly to start your song.",
            })
            // Optional: Redirect to success page or home
            router.push("/services")
        }
    }

    return (
        <main className="pt-24 min-h-screen bg-background pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
                        <Sparkles size={16} /> <span>Personalised Music</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">Request Your Personal Song</h1>
                    <p className="text-lg text-foreground/70">
                        Tell us your story, and we'll turn it into a professional track.
                    </p>
                </div>

                <Card className="bg-card border-border p-8 md:p-10 holographic-card">
                    <form action={handleSubmit} className="space-y-8">

                        {/* Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Music size={20} className="text-accent" /> About You
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                        </div>

                        {/* Song Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Heart size={20} className="text-accent" /> Song Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="occasion">Occasion</Label>
                                    <Input id="occasion" name="occasion" placeholder="e.g. Birthday, Anniversary, Proposal" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="genre">Preferred Genre</Label>
                                    <Input id="genre" name="genre" placeholder="e.g. Pop, Acoustic, Afrobeat, Jazz" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="style">Song Style / Mood</Label>
                                <Input id="style" name="style" placeholder="e.g. Upbeat, Romantic, Slow & Emotional" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="story">Your Story & Key Details</Label>
                                <Textarea
                                    id="story"
                                    name="story"
                                    required
                                    placeholder="Tell us what this song is about. Include specific names, dates, memories, or messages you want included in the lyrics."
                                    className="min-h-[150px]"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white font-bold"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </main>
    )
}
