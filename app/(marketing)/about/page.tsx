"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Zap, Sparkles, TrendingUp, Heart, Mic2, Globe, Palette, Music, Users, Workflow, Headphones, Radio, Star, Smile, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* 1. Who We Are (Hero) */}
      <section className="min-h-[60vh] bg-gradient-to-b from-background to-background/50 flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">Who We Are</span>
          </h1>
          <div className="max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              MelodyMaker Studio is a modern music production and global distribution company dedicated to turning musical ideas into reality.
              We work with both new and established artists, helping them create industry-standard songs and build a powerful online presence.
            </p>
            <p className="font-light">
              From the first idea hummed into a phone to a polished track streaming on Spotify, TikTok, Apple Music, YouTube Music, Amazon Music and 40+ other platforms, MelodyMaker Studio is with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="bg-card border-border p-8 space-y-4 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <Zap className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-foreground/70">
                To help artists turn their passion into professionally released music that reaches listeners all over the world.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2 pt-2">
                <li>• Support creatives at every stage</li>
                <li>• Make production accessible</li>
                <li>• Give every artist a chance to be heard</li>
              </ul>
            </Card>

            {/* Vision */}
            <Card className="bg-card border-border p-8 space-y-4 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-foreground/70">
                We envision a world where every artist has the tools to share their music globally, and independent artists can build sustainable careers.
              </p>
            </Card>

            {/* Values */}
            <Card className="bg-card border-border p-8 space-y-4 hover:border-accent/50 transition-all holographic-card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <Heart className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Our Values</h3>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p><strong className="text-foreground">Passion:</strong> We live and breathe music.</p>
                <p><strong className="text-foreground">Creativity:</strong> Bold ideas, unique sounds.</p>
                <p><strong className="text-foreground">Excellence:</strong> Details matter to us.</p>
                <p><strong className="text-foreground">Support:</strong> We guide you from concept to release.</p>
                <p><strong className="text-foreground">Integrity:</strong> Transparent and respectful.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. It Never Ends (Philosophy) */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">It Never Ends</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic leading-tight mb-8">
            &quot;Dreams and passion never die. They only grow <span className="text-primary">stronger</span> every day.&quot;
          </h3>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
            <p>
              We actively encourage people of all ages to try, start again, or restart their musical journey.
              Whether you’re 16 or 60, if you still feel that pull towards music, we’re here to help you turn that passion into something real.
            </p>
            <p>
              Artists who thought it was &quot;too late&quot; to dust off old songs and bring them to life? Newcomers with no experience?
              We’ll walk through the process with you.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Music Production",
                icon: Mic2,
                points: ["Create industry-standard songs", "Beat creation & vocal production", "Professional mixing & mastering", "Guidance on structure & hooks"]
              },
              {
                title: "Global Music Distribution",
                icon: Globe,
                points: ["Release to 40+ major platforms", "Spotify, Apple Music, TikTok & more", "Proper metadata setup", "Global reach & expansion"]
              },
              {
                title: "Artist Branding",
                icon: Palette,
                points: ["Strong identity creation", "Spotify & YouTube profile setup", "Social media optimization", "Professional online presence"]
              },
              {
                title: "Ready-Made Songs",
                icon: Music,
                points: ["Catalogue of pro songs", "Revoice with your vocals", "Release under your name", "Fast & industry approved"]
              },
              {
                title: "Artist Collaborations",
                icon: Users,
                points: ["Connect with producers", "Vocalists & Songwriters", "Cross-creative partnerships", "Create unique tracks"]
              },
              {
                title: "Support Concept to Release",
                icon: Workflow,
                points: ["From idea to recording", "Production & Distribution", "Promotion support", "Guided process"]
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border p-8 hover:border-accent/50 transition-all holographic-card group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Personalised Songs & Who We Work With */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Personalised Songs</h2>
              <p className="text-lg text-foreground/80">
                Alongside our work with artists, MelodyMaker Studio also creates personalised songs for anyone who wants music made just for them.
              </p>
              <div className="space-y-4">
                {[
                  "Birthdays, weddings, anniversaries",
                  "Corporate events and brand jingles",
                  "Heartfelt tributes and special surprises",
                  "Your story turned into a pro song"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50">
                    <div className="p-2 rounded-full bg-primary/10 text-primary"><Star size={16} /></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/request-song">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white rounded-full py-6 text-lg font-bold shadow-lg hover:shadow-cyan-500/25 transition-all animate-pulse hover:animate-none transform hover:-translate-y-1">
                  Request a Personal Song
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Ready-Made Songs for Artists</h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="font-semibold text-foreground">High-Quality Music, Ready to Make Yours.</p>
                <p>
                  Professionally produced, ready-made songs bundled with full song stems (instrumental and vocal files), giving you complete creative flexibility.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Re-voice songs with your own vocals",
                  "Remix and adapt them to your style and genre",
                  "Save time on production—songs are already polished and hit-ready",
                  "Perfect for artists looking for their next single, EP, or album track"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50">
                    <div className="p-2 rounded-full bg-green-500/10 text-green-500"><CheckCircle2 size={16} /></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/ready-made-songs">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full py-6 text-lg font-bold shadow-lg hover:shadow-emerald-500/25 transition-all animate-pulse hover:animate-none transform hover:-translate-y-1">
                  Browse Ready-Made Songs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "We Listen", desc: "To your goals, sound & story" },
              { title: "We Guide", desc: "Explaining every step simply" },
              { title: "We Build", desc: "Long-term relationships" },
              { title: "We Care", desc: "About your streams & growth" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-muted/10 absolute -top-8 left-0 w-full text-center select-none z-0">
                  0{idx + 1}
                </div>
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us (Stats Repurposed) */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose MelodyMaker Studio</h2>
              <ul className="space-y-4">
                {[
                  "Over a decade of practical music production experience",
                  "Global reach on 40+ streaming platforms",
                  "Support for both artists and music lovers",
                  "Flexible services: from scratch to release",
                  "A genuine belief in your potential"
                ].map((reason, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-background/50 border-accent/20 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">10+</p>
                  <p className="text-sm opacity-70">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">40+</p>
                  <p className="text-sm opacity-70">Global Platforms</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">1000+</p>
                  <p className="text-sm opacity-70">Projects Done</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">100%</p>
                  <p className="text-sm opacity-70">Dedication</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* 9. CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to bring your music to life?</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Whether you’re an artist with a vision, or someone who wants a song for a special moment, MelodyMaker Studio is here to help.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white px-10 py-8 text-xl h-auto rounded-full font-bold transition-transform hover:-translate-y-1">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
