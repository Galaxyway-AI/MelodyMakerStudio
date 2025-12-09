"use client"

import { useState } from "react"
import { HelpCircle, Users, Music2, Copyright, DollarSign, Clock, Radio, PlayCircle, Plus } from "lucide-react"

const faqData = [
    {
        question: "What is MelodyMaker Studio?",
        answer: "MelodyMaker Studio is a full-service music production and artist development company. We turn song ideas into professional, release-ready tracks and help artists get their music heard globally.",
        icon: HelpCircle
    },
    {
        question: "Who is MelodyMaker Studio for?",
        answer: "We work with independent artists, bands, creators, and labels at any stage—whether you’re just starting out, rebranding your sound, or ready to level up your music and reach.",
        icon: Users
    },
    {
        question: "What services do you offer?",
        answer: "We provide full song production (beat-making, arrangement, mixing, mastering), ready-made songs for artists to revoice, artist collaborations, and digital music distribution. Personalised songs can also be offered as a small add-on service.",
        icon: Music2
    },
    {
        question: "Do I own the song if I work with MelodyMaker Studio?",
        answer: "Ownership depends on the type of project. For songs you write, you typically own the songwriting rights while we may share production/master rights. For ready-made songs, usage and ownership are clearly defined in a written agreement before we start.",
        icon: Copyright
    },
    {
        question: "How much does it cost to work with you?",
        answer: "Costs depend on what you need—full production, mixing/mastering only, or a ready-made song. Once you tell us your goals and budget, we’ll recommend a package and give you a clear, upfront quote.",
        icon: DollarSign
    },
    {
        question: "How long does it take to finish a song?",
        answer: "A single can take anywhere from a few days to a few weeks, depending on the project’s complexity and feedback time. We’ll agree an estimated timeline with you at the start so you know what to expect.",
        icon: Clock
    },
    {
        question: "Can you distribute my music to streaming platforms?",
        answer: "Yes. We can help you release your music on major streaming platforms (like Spotify and Apple Music) and support you with metadata, release strategy, and basic promotion guidance.",
        icon: Radio
    },
    {
        question: "How do I start a project with MelodyMaker Studio?",
        answer: "Simply contact us through the website form, email, or social media. Share a short description of your idea, your style, and your budget, and we’ll reply with recommended options and next steps.",
        icon: PlayCircle
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleToggle(index)
        }
    }

    return (
        <section className="py-24 pb-48 relative bg-[#0a0514]">
            {/* Background Glows (Using overflow-visible on parent requires careful z-index or fixed background) 
                Since we need popups to escape, we'll keep overflow visible but manage background elements carefully.
            */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Question Card */}
                            <div
                                className={`
                                    bg-white/5 border border-white/10 rounded-xl p-6 h-full min-h-[140px]
                                    hover:border-primary/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] 
                                    transition-all duration-300 cursor-pointer flex flex-col justify-start gap-4 text-left
                                    outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                                    ${openIndex === index ? 'border-primary/50 bg-white/10' : ''}
                                `}
                                onClick={() => handleToggle(index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-start justify-between w-full">
                                    <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <Plus className={`w-5 h-5 text-gray-500 md:hidden transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-45 text-white' : ''}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                                    {item.question}
                                </h3>
                            </div>

                            {/* Desktop Pop-Up (Hover) */}
                            <div className="hidden md:block absolute top-[calc(100%+12px)] left-0 w-full z-50 
                                            opacity-0 scale-95 invisible -translate-y-2 pointer-events-none
                                            group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:translate-y-0
                                            transition-all duration-300 ease-out origin-top">
                                <div className="bg-[#130b2b]/95 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl shadow-black/80 ring-1 ring-white/5">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Accordion (Click) */}
                            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-white/5 border border-white/5 p-5 rounded-lg">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
