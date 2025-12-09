"use client"

import { Card } from "@/components/ui/card"
import { Zap, Waves, Users, Globe, Settings, Music } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Music Production",
    description: "Create industry-standard songs from scratch or elevate your existing ideas.",
  },
  {
    icon: Globe,
    title: "Global Music Distribution",
    description: "Release your music on 40+ major platforms including Spotify, TikTok, Apple Music, and YouTube Music.",
  },
  {
    icon: Users,
    title: "Artist Branding & Online Presence",
    description: "Build a strong identity with professional artist websites, TikTok/YouTube profiles, and streaming platforms.",
  },
  {
    icon: Zap,
    title: "Ready-Made Songs for Artists",
    description: "Access professionally produced songs you can revoice and release as your own.",
  },
  {
    icon: Waves,
    title: "Artist Collaborations",
    description: "We connect artists, producers, and vocalists to create powerful music together.",
  },
  {
    icon: Settings,
    title: "Support from concept to release",
    description: "We work with our artists from getting their ideas to paper and to the recording studio till release of their songs.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Choose MelodyMaker Studios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create professional-grade music
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 p-8 group backdrop-blur-sm"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
