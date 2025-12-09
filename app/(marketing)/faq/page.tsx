"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HelpCircle, Users, Music2, Copyright, DollarSign, Clock, Radio, PlayCircle, Plus, Search, Sparkles, Globe, Shield, CreditCard, PenTool, Mic2 } from "lucide-react"

const faqData = [
    {
        question: "What is MelodyMaker Studio?",
        answer: "MelodyMaker Studio is a full-service music production, artist promotion, and collaboration company. We help artists turn song ideas into professional, release-ready tracks and distribute them to global digital platforms.",
        icon: HelpCircle
    },
    {
        question: "Who is MelodyMaker Studio for?",
        answer: "We work with independent artists, bands, labels, and creators at all levels—whether you’re just starting out, rebranding, or already established and looking to take your sound and reach to the next level.",
        icon: Users
    },
    {
        question: "What services do you offer?",
        answer: "We offer full song production (beat-making, arrangement, recording support, mixing, and mastering), ready-made songs for artists to revoice or collaborate on, artist–artist and artist–producer collaborations, music distribution to major streaming platforms, and marketing support. Personalised songs for special occasions are also available as an add-on.",
        icon: Music2
    },
    {
        question: "What are “ready-made songs” and how do they work?",
        answer: "Ready-made songs are fully written and produced tracks created by our professional team. You can buy the rights to revoice the song with your vocals or collaborate with us to adapt lyrics, key, or arrangement. Once agreed, you’ll receive the necessary files and rights outlined in a written agreement.",
        icon: Sparkles
    },
    {
        question: "Do I own the song if I record with MelodyMaker Studio?",
        answer: "Ownership depends on the package and agreement. For songs you write, you typically own the songwriting rights, and we may share production/master rights. For ready-made songs, ownership and usage rights are clearly defined in the contract (e.g., exclusive vs non-exclusive). All rights are explained and agreed in writing before we start.",
        icon: Copyright
    },
    {
        question: "Can MelodyMaker Studio help distribute my music to streaming platforms?",
        answer: "Yes. We can help you distribute your music to major platforms (like Spotify, Apple Music, etc.) through our distribution partners, and guide you on release strategy, metadata, and basic promotion.",
        icon: Radio
    },
    {
        question: "How much does it cost to work with MelodyMaker Studio?",
        answer: "Prices vary depending on what you need—full production, mixing/mastering only, ready-made songs, or collaboration projects. Once you tell us your project goals and budget, we’ll recommend suitable packages and give you a clear quote before any work begins.",
        icon: DollarSign
    },
    {
        question: "How long does it take to complete a song?",
        answer: "For a standard single, typical turnaround can range from a few days to a few weeks, depending on complexity, feedback speed, and whether we're starting from scratch. We’ll agree on an estimated timeline at the start.",
        icon: Clock
    },
    {
        question: "Do you work with artists remotely (online)?",
        answer: "Yes. Most stages of our production process—songwriting, beat creation, vocal guidance, mixing, and mastering—can be done remotely. You can send us your vocal recordings, and we’ll guide you through everything online.",
        icon: Globe
    },
    {
        question: "Can MelodyMaker Studio help me find other artists to collaborate with?",
        answer: "Absolutely. We can connect you with singers, rappers, songwriters, and producers within our network, and help organise collaboration projects, split sheets, and agreements.",
        icon: Users
    },
    {
        question: "What genres do you specialise in?",
        answer: "We work across multiple genres including Pop, Afrobeats, Gospel, R&B, Hip-Hop, Dance/EDM, and more. If you’re unsure whether your style fits, just send us a demo and we’ll let you know how we can help.",
        icon: Music2
    },
    {
        question: "What do I need to get started on a project?",
        answer: "At minimum, we need a short description of your idea (or reference songs), any lyrics/melodies/demos you have, and your budget range/timeline. Once we have this, we can suggest the best next steps.",
        icon: PenTool
    },
    {
        question: "How do payments and deposits work?",
        answer: "Projects usually require an upfront deposit before work begins, with the balance due on completion or before final files are released. Full payment terms are shared in your proposal and agreement.",
        icon: CreditCard
    },
    {
        question: "How does MelodyMaker Studio protect my ideas and songs?",
        answer: "We treat all projects as confidential. Your demos, lyrics, and recordings are not shared outside the production process. Our Terms & Conditions and Privacy Policy explain how we protect your data and IP.",
        icon: Shield
    },
    {
        question: "Will MelodyMaker Studio claim royalties from my music?",
        answer: "It depends on the agreement. For some production deals, we may share master/publishing royalties. For ready-made songs, we may keep a portion. Any splits are always discussed and agreed formally before release.",
        icon: DollarSign
    },
    {
        question: "Can you help with branding, cover art, and promo assets?",
        answer: "Yes. We can help create single/album cover art, basic promo visuals, social media assets, and short video ideas for TikTok/Reels. We can also coordinate with your existing designer.",
        icon: PenTool
    },
    {
        question: "Do you offer refunds if I change my mind?",
        answer: "Because music production is a time-based service, refunds are limited. However, we offer revision rounds to ensure you’re happy. Our refund/revision policy is clearly set out in our Terms & Conditions.",
        icon: Shield
    },
    {
        question: "How many revisions do I get on my song?",
        answer: "Each package comes with a set number of revision rounds (e.g., 2–3 rounds). Additional revisions can be requested at an extra cost, which we'll clarify before starting.",
        icon: PenTool
    },
    {
        question: "Can I bring my own producer or engineer into the process?",
        answer: "Yes. We’re happy to collaborate with your existing team, whether that means working alongside your producer, co-writing, or taking on specific parts like mixing or mastering only.",
        icon: Mic2
    },
    {
        question: "How do I contact MelodyMaker Studio to start a project?",
        answer: "You can reach us through the contact form on the website, by email, or via our social media channels. Share a brief description of your project, and we’ll get back to you with next steps.",
        icon: PlayCircle
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [searchQuery, setSearchQuery] = useState("")

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const filteredFAQ = faqData.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#0a0514] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 mb-8"
                    >
                        Everything you need to know about creating with MelodyMaker Studio.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                        />
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {filteredFAQ.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <button
                                onClick={() => handleToggle(index)}
                                className={`w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 ${openIndex === index ? 'bg-white/10 ring-1 ring-purple-500/50' : ''}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 shrink-0 transition-colors ${openIndex === index ? 'from-purple-500 to-blue-500' : ''}`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-white pr-8">{item.question}</h3>
                                            <Plus className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-white' : ''}`} />
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-300 leading-relaxed text-base border-t border-white/10 pt-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}

                    {filteredFAQ.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p>No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
