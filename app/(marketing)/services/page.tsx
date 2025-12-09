"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic2, Globe, Palette, Music, Users, Workflow, Star, Headphones, Radio, ArrowRight, CheckCircle2, Sparkles, Heart } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* 1. Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-b from-background to-background/50 flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            At MelodyMaker Studio, we specialise in turning musical ideas into professional, globally-ready releases.
            From first demo to worldwide distribution, we support artists at every step of their journey.
          </p>
          <p className="mt-4 text-foreground/60">
            We work with <strong>new and established artists</strong>, offering a complete package: music production, global distribution, artist branding, collaborations, and more.
          </p>
        </div>
      </section>

      {/* 2. Core Services Grid (1-3) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Service 1: Production */}
            <Card className="bg-card border-border p-8 space-y-6 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <Mic2 className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Music Production</h3>
                <p className="text-foreground/70 font-medium mb-4">Create industry-standard songs from scratch or elevate your existing ideas.</p>
                <p className="text-sm text-foreground/60 mb-6">Whether you’re starting with a rough voice note or a fully written song, our production team shapes it into a polished track.</p>
                <ul className="space-y-2 text-sm">
                  {["Full Song Production", "Beat & Instrumental Creation", "Song Development", "Mixing & Mastering"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Service 2: Distribution */}
            <Card className="bg-card border-border p-8 space-y-6 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                <Globe className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Global Music Distribution</h3>
                <p className="text-foreground/70 font-medium mb-4">Release your music on 40+ major platforms worldwide.</p>
                <p className="text-sm text-foreground/60 mb-6">We help artists move from “I’ve got a song” to “My music is available everywhere”.</p>
                <ul className="space-y-2 text-sm">
                  {["Spotify, Apple Music, YouTube", "TikTok, Meta (IG & FB)", "Platform Delivery & Setup", "Royalty-Ready Delivery"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Service 3: Branding */}
            <Card className="bg-card border-border p-8 space-y-6 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <Palette className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Artist Branding</h3>
                <p className="text-foreground/70 font-medium mb-4">Build a strong identity with a professional, consistent look.</p>
                <p className="text-sm text-foreground/60 mb-6">We help artists present themselves professionally online so fans and labels take them seriously.</p>
                <ul className="space-y-2 text-sm">
                  {["Artist Profile Setup", "Website & EPK Creation", "Visual Identity & Artwork", "Cohesive Image Strategy"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Secondary Services Grid (4-5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 4: Ready-Made */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-border p-10 flex flex-col md:flex-row gap-8 items-start hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Music className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready-Made Songs</h3>
                <p className="text-lg text-foreground/80 mb-4">Access professionally produced songs you can re-voice and release as your own.</p>
                <p className="text-foreground/60 mb-6">Ideal for artists who want to release more music, more often, without compromising on quality.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {["Professional Production", "Re-Voicing Options", "Custom Tweaks", "Fast Release Path"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Service 5: Collaborations */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-border p-10 flex flex-col md:flex-row gap-8 items-start hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Artist Collaborations</h3>
                <p className="text-lg text-foreground/80 mb-4">We connect artists, producers and vocalists to create powerful music together.</p>
                <p className="text-foreground/60 mb-6">Whether you’re looking for a feature, a writer or a producer, we help you build the right creative team.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {["Artist-Artist Collabs", "Producer Connections", "Songwriter Matches", "Project Coordination"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Support from Concept to Release</h2>
          <p className="text-lg text-foreground/70 mb-16 max-w-3xl mx-auto">
            MelodyMaker Studio is more than a “one-off service”. We partner with artists across the whole journey, believing in long-term relationships, not just single transactions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Idea Stage", d: "Shaping concept & structure" },
              { t: "Production", d: "Recording, mixing & mastering" },
              { t: "Planning", d: "Release dates & strategy" },
              { t: "Launch", d: "Distribution & Promotion" }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.t}</h3>
                <p className="text-sm text-foreground/60">{step.d}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -z-10 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 & 8. Special Services & Extras */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Personalised Songs */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 border border-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary"><Star size={24} /></div>
                <h2 className="text-3xl font-bold">Personalised Songs</h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6">
                Custom-made songs for special moments. While our main focus is on recording artists, we enable everyday people to turn real stories into songs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Birthdays & Anniversaries", "Weddings & Proposals", "Corporate Events", "Tributes & Gifts"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium text-sm">
                    <Heart size={16} className="text-accent" /> {item}
                  </div>
                ))}
              </div>
              <Link href="/request-song">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white rounded-full py-6 text-lg font-bold shadow-lg hover:shadow-cyan-500/25 transition-all animate-pulse hover:animate-none transform hover:-translate-y-1">
                  Request a Personal Song
                </Button>
              </Link>
            </div>

            {/* Additional Services */}
            <div className="space-y-8 py-4">
              <h2 className="text-3xl font-bold">Additional Creative Services</h2>
              <p className="text-foreground/70">
                Depending on your project, we also provide specialised add-ons. Mix and match based on where you are in your career.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Sparkles, t: "Custom Cover Art Direction" },
                  { icon: Headphones, t: "Short Audio Edits (TikTok/Reels)" },
                  { icon: Radio, t: "Release Strategy Consultation" },
                  { icon: Workflow, t: "Lyric Polishing & Structuring" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-colors">
                    <item.icon className="text-muted-foreground" size={20} />
                    <span className="font-semibold">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Who We Work With */}
      <section className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Who We Work With</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              "New Artists",
              "Independent Artists",
              "Established Artists",
              "Brands & Businesses"
            ].map((item, i) => (
              <div key={i} className="px-8 py-4 rounded-full bg-accent/5 border border-accent/20 text-lg font-semibold text-foreground/80">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl font-serif italic text-foreground/60">
            "If you have a musical vision, MelodyMaker Studio is here to help you bring it to life."
          </p>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Work With Us?</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Whether you need a full production, global release, a ready-made song, or support across your whole journey, we make you look and sound professional.
          </p>
          <div className="pt-8">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white px-10 py-8 text-xl h-auto rounded-full font-bold transition-transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                Get Started with MelodyMaker <ArrowRight size={24} />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-foreground/50">
              Tell us about your project, and we’ll recommend the best services for you.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
