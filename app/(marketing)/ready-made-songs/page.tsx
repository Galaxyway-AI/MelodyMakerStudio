import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Music2, Sliders, DollarSign, Clock, Zap, Headphones, User, Briefcase, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Ready-Made Songs | MelodyMaker Studio",
    description: "Fast-track your next hit with fully produced, professionally mixed songs – complete with full stems and 100% ownership.",
}

export default function ReadyMadeSongsPage() {
    return (
        <div className="min-h-screen bg-transparent">
            {/* (A) Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
                    {/* Abstract background element - optional */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Ready-Made Songs <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">High-Quality Music, Ready to Make Yours</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Fast-track your next hit with fully produced, professionally mixed songs – complete with full stems and 100% ownership.
                    </p>

                    <div className="bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 mb-10 max-w-3xl mx-auto">
                        <p className="text-base text-gray-300">
                            MelodyMaker Studio is excited to announce an exclusive collaboration with <strong>Voice The Song</strong> (<a href="https://www.voicethesong.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.voicethesong.com</a>) and top music producers to bring you a unique opportunity: ready-made, high-quality songs. These tracks are fully produced, carefully crafted with hit potential, and made available for purchase along with their full song stems (instrumental and vocal files), giving you complete creative flexibility.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-white text-black hover:bg-gray-200">
                            <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer">
                                Browse Ready-Made Song Catalogues <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                        <Button asChild size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-primary/10 hover:bg-primary/20 border border-primary/50 text-white">
                            <Link href="/ready-made-songs/request">
                                Request Ready-Made Song
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* (B) Section 1 – What Are Ready-Made Songs? */}
            <section className="py-20 border-t border-white/5 bg-background/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="order-2 lg:order-1"> {/* This is the left side on desktop */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Ready-Made Songs?</h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    Creating a song from scratch takes a lot of time, energy, and money. If you’ve ever released an album or even a single, you know the process: writing, booking studio sessions, arranging, recording, editing, mixing, and mastering. This usually means multiple sessions, a lot of back-and-forth, and significant cost before the song is even ready to release. With Ready-Made Songs, most of that heavy lifting has already been done for you.
                                </p>
                                <ul className="space-y-3 text-lg text-gray-300 mb-6">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" /> Re-voice songs with your own vocals</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" /> Remix and adapt them to your style and genre</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" /> Save time on production—songs are already polished and hit-ready</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" /> Perfect for artists looking for their next single, EP, or album track</li>
                                </ul>
                                <p className="text-lg text-gray-300">
                                    These songs are being made available for purchase along with their full song stems (instrumental and vocal files), giving you complete creative flexibility.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2"> {/* This is the right side on desktop */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Are Ready-Made Songs?</h2>
                            <div className="space-y-4 text-gray-300 text-lg">
                                <p>
                                    Ready-Made Songs are fully written, composed, and professionally produced tracks that you can buy and make your own. Instead of starting from a blank page, you get a complete, polished song plus its <strong>full song stems</strong> (vocals and instrumentals), ready to be re-voiced, remixed, and released.
                                </p>
                                <p>
                                    At MelodyMaker Studio, we’re opening the door to high-quality, carefully produced songs by top producers and artists, sold complete with song stems:
                                </p>
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Artists can re-voice, remix, and release songs as their own</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Investors can acquire valuable music assets with hit potential</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Producers & DJs can collaborate, remix, and innovate with ease</li>
                                </ul>
                                <p className="font-semibold text-white mt-4">
                                    Stems = the creative freedom you’ve been waiting for. 🎶 <br />
                                    Once you purchase, you have <strong>100% full ownership</strong> of the song and stems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer">
                                Browse Ready-Made Song Catalogues
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <Link href="/ready-made-songs/request">
                                Request Ready-Made Song
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* (C) Section 2 – Why Ready-Made vs Scratch? */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Ready-Made Songs Instead of Starting From Scratch?</h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Creating a song from scratch takes a lot of time, energy, and money. If you’ve ever released an album or even a single, you know the process: writing, booking studio sessions, arranging, recording, editing, mixing, and mastering.
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                            This usually means <strong>multiple sessions</strong>, a lot of back-and-forth, and significant cost before the song is even ready to release. With Ready-Made Songs, most of that heavy lifting has already been done for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        {/* Traditional */}
                        <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Clock className="text-red-400" /> Traditional Route
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Multiple writing sessions</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Multiple studio bookings</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Higher production costs</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Longer time to release</li>
                            </ul>
                        </div>

                        {/* Ready Made */}
                        <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 bg-green-500/10 rounded-bl-xl text-green-400 font-bold text-sm">RECOMMENDED</div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Zap className="text-green-400" /> Ready-Made Songs Route
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Song already written and fully produced</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Just one main studio session needed</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Much lower overall cost</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Faster release timeline</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10">
                        <p className="text-lg text-white">
                            When you buy a Ready-Made Song (with stems), you cut out the time-consuming composition and expensive production stages. You simply record your vocals, make any creative tweaks you want, and you’re ready to go.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer">
                                Browse Ready-Made Song Catalogues
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <Link href="/ready-made-songs/request">
                                Request Ready-Made Song
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* (D) Section 3 – Stems */}
            <section className="py-20 border-y border-white/5 bg-background/30 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What Are Song Stems and Why Are They So Valuable?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg">
                                <strong>Song stems</strong> are grouped, mixed audio files that break down a complete song into a few manageable stereo files (for example: vocals, drums, instruments, FX). When played together, they sound like the finished track — but the real power lies in what you can do with them:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-2 rounded-lg"><Sliders className="h-5 w-5 text-primary" /></div>
                                    <div>
                                        <strong className="text-white">Remixing:</strong>
                                        <p className="text-gray-400 text-sm">DJs and producers can isolate specific elements (vocals, instruments, beats) to create new versions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-2 rounded-lg"><Mic2 className="h-5 w-5 text-primary" /></div>
                                    <div>
                                        <strong className="text-white">Re-Voicing:</strong>
                                        <p className="text-gray-400 text-sm">Artists can replace the lead vocals with their own, making the track uniquely theirs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/20 p-2 rounded-lg"><User className="h-5 w-5 text-primary" /></div>
                                    <div>
                                        <strong className="text-white">Collaboration & Customization:</strong>
                                        <p className="text-gray-400 text-sm">Stems make it easy to collaborate with producers, mix engineers, or remixers to shape your own sound.</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="text-gray-300 mt-4 italic border-l-4 border-primary pl-4">
                                A song stem is essentially a grouped audio file (for example: all drums, all instruments, or all vocals) that lets you <strong>remix, re-edit, or rebrand the track</strong> while keeping full professional quality.
                            </p>
                        </div>

                        <div className="bg-card/40 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">How Stems Are Created</h3>
                            <div className="space-y-6 relative">
                                {/* Process Line */}
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-transparent" />

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-black border-2 border-background">1</div>
                                    <h4 className="text-white font-medium">Individual Grouping</h4>
                                    <p className="text-sm text-gray-400">Individual tracks groups (e.g. vocals, drums).</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-black border-2 border-background">2</div>
                                    <h4 className="text-white font-medium">Professional Mixing</h4>
                                    <p className="text-sm text-gray-400">EQ, compression, and effects are applied.</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-black border-2 border-background">3</div>
                                    <h4 className="text-white font-medium">Export</h4>
                                    <p className="text-sm text-gray-400">Each group is exported as high-quality audio.</p>
                                </div>
                            </div>
                            <p className="text-center text-white font-medium mt-8">
                                These grouped files are your <strong>stems</strong> — ready to be re-used, re-imagined, and reshaped.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* (E) Section 4 – Audience */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Who Is This For – and Why It’s a Big Opportunity</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Artists */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                            <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Mic2 className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Artists</h3>
                            <p className="text-purple-300 text-sm font-semibold mb-4">Your Next Single, Ready to Go</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" /> Re-voice songs with your own vocals</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" /> Remix and adapt them to your style</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" /> Save time on production—songs are polished</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" /> Perfect for your next single or EP</li>
                            </ul>
                        </div>

                        {/* Investors */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors">
                            <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                                <DollarSign className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Investors</h3>
                            <p className="text-green-300 text-sm font-semibold mb-4">Invest in Ready-Made Music Assets</p>
                            <div className="text-gray-300 text-sm space-y-3">
                                <p>We’re offering professionally produced, ready-made songs bundled with full stems.</p>
                                <p className="font-semibold text-white">Why this matters:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Own IP with real revenue potential</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Adaptable across multiple artists/markets</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> High-quality productions for sync/ads</li>
                                </ul>
                            </div>
                        </div>

                        {/* Producers */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                                <Headphones className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Producers & DJs</h3>
                            <p className="text-blue-300 text-sm font-semibold mb-4">Create, Remix, and Collaborate Faster</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Access mixed stems for remixes</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Collaborate easily with artists</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" /> Foundation for club edits & radio mixes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left sm:text-center">
                            <div className="flex items-center gap-2 sm:justify-center"><CheckCircle2 className="h-5 w-5 text-accent" /> Access ready-made songs with strong commercial potential</div>
                            <div className="flex items-center gap-2 sm:justify-center"><CheckCircle2 className="h-5 w-5 text-accent" /> Save time and cost on songwriting & production</div>
                            <div className="flex items-center gap-2 sm:justify-center"><CheckCircle2 className="h-5 w-5 text-accent" /> Freedom to adapt, re-voice, remix, or rebrand</div>
                            <div className="flex items-center gap-2 sm:justify-center"><CheckCircle2 className="h-5 w-5 text-accent" /> Immediate ownership and control</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer">
                                Browse Ready-Made Song Catalogues
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                            <Link href="/ready-made-songs/request">
                                Request Ready-Made Song
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* (F) Final CTA */}
            <section className="py-24 bg-gradient-to-b from-transparent to-primary/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Catalogue or Request a Song?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Whether you’re an artist looking for your next big single, an investor seeking music assets, or a producer ready to remix and innovate, our Ready-Made Songs give you a powerful head start.
                        <br /><br />
                        Browse the catalogue on Voice The Song, then send us your request and we’ll help you secure the right song and stems for your vision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button asChild size="lg" className="h-16 px-10 text-xl w-full sm:w-auto bg-white text-black hover:bg-gray-200 shadow-xl shadow-white/10">
                            <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer">
                                Browse Ready-Made Song Catalogues
                            </a>
                        </Button>
                        <Button asChild size="lg" className="h-16 px-10 text-xl w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                            <Link href="/ready-made-songs/request">
                                Request Ready-Made Song
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
