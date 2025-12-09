import { Metadata } from "next"
import { ReadyMadeRequestForm } from "@/components/forms/ready-made-request-form"

export const metadata: Metadata = {
    title: "Request Ready-Made Song | MelodyMaker Studio",
    description: "Request a high-quality ready-made song with full stems and ownership.",
}

export default function RequestReadyMadeSongPage() {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent mb-4">
                        Request Ready-Made Song
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Use this form to let MelodyMaker Studio know which Ready-Made Song(s) you’re interested in, and how you plan to use them. We’ll review your request, confirm availability, and guide you through the next steps to secure the song and stems.
                    </p>
                </div>

                <div className="bg-card/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <ReadyMadeRequestForm />
                </div>
            </div>
        </div>
    )
}
