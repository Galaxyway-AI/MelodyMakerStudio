"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Ready To Transform your Musical Dreams into Global Sensations?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Whether you’re taking your first step or preparing your next big release, MelodyMaker Studio is designed to support your journey every step of the way. Let’s create something unforgettable together.
        </p>

        <div className="flex flex-col items-center gap-12 pt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 rounded-full px-10 py-7 text-xl font-bold">
            <a href="/contact">
              Book a Consultation <ArrowRight size={22} className="ml-2" />
            </a>
          </Button>

          {/* FAQ Helper Link */}
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">Have questions before reaching out?</p>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 gap-2 rounded-full px-8 py-6 text-lg border-0 h-auto">
              <a href="/faq">
                <HelpCircle className="w-5 h-5" />
                Frequently Asked Questions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
