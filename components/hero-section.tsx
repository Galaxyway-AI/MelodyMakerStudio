"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import { HeroSlide } from "@/lib/db/firestore-schema"
import { useEffect, useState } from "react"
import { getHeroSlides } from "@/lib/db/firestore-queries"
// ... imports ...

export default function HeroSection() {
  const [slides, setSlides] = useState<HeroSlide[]>([])

  useEffect(() => {
    const initData = async () => {
      const slidesData = await getHeroSlides()
      setSlides(slidesData)
    }
    initData()
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center relative overflow-hidden pt-32 pb-20">
      {/* Backgound Animation */}


      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">

        {/* Main Heading Area */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse block mb-2">
              MelodyMaker Studio
            </span>
            <span className="text-2xl md:text-5xl block text-white mt-4 font-light">
              Transforming Musical Dreams into Global Sensations
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed hidden">
            Transforming Musical Dreams into Global Sensations
          </p>
        </div>

        {/* Split Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Inspirational */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                World-class music production, global distribution, professional artist branding, and collaborative opportunities for artists ready to rise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At MelodyMaker Studio, we transform musical ideas into global-ready songs. Whether you're an emerging talent or an established artist refining your sound, we provide everything you need to create, produce, collaborate, and reach millions.
              </p>
            </div>

            <div className="space-y-6 border-l-2 border-primary/30 pl-6">
              <h3 className="text-2xl font-bold text-primary uppercase tracking-wide">IT NEVER ENDS</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "Passion never dies, it grows stronger every day."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that creativity has no age limit and dreams don't expire. Whether you're a rising young artist or someone rediscovering a lifelong passion, we encourage you to step forward and chase what sets your soul on fire. We're here to remind you that it's never too late, never too early, and never impossible.
              </p>

              <div className="pt-4">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full flex items-center justify-center gap-2">
                  Start Your Journey <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Carousel */}
          <div className="w-full">
            {slides.length > 0 ? (
              <HeroCarousel slides={slides} />
            ) : (
              // Fallback / Placeholder if no slides
              <div className="w-full aspect-[4/3] bg-primary/20 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
                <p className="text-muted-foreground">Add slides in Admin Panel</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
