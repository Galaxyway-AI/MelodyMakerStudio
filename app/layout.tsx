import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MusicPlayer from "@/components/music-player"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MelodyMaker Studio - AI-Powered Music Production",
  description:
    "Experience ultra-modern music production with AI features, artist collaboration, and futuristic sound design. Elevate your music with MelodyMaker Studio.",
  generator: "v0.app",

}

import { AuthProvider } from "@/contexts/auth-context"
import { PlayerProvider } from "@/contexts/player-context"
import { Toaster } from "@/components/ui/sonner"
import { getAnimationSettings } from "@/lib/actions/site-settings"
import { FuturisticBackground } from "@/components/ui/futuristic-background"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const animationSettings = await getAnimationSettings();

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-transparent text-foreground`}>
        <AuthProvider>
          <PlayerProvider>
            <FuturisticBackground settings={animationSettings} />
            {children}
            <Toaster />
          </PlayerProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
