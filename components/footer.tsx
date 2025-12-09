import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MelodyMaker Studio"
                width={32}
                height={32}
                className="rounded-lg object-contain"
              />
              <span className="text-lg font-bold gradient-text">MelodyMaker Studio</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Transforming Musical Dreams into Global Sensations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-foreground/60 hover:text-accent transition-colors">
                  Our Artists
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-accent transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground/60 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/60 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all hover:glow-accent"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all hover:glow-accent"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all hover:glow-accent"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all hover:glow-accent"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © {currentYear} MelodyMaker Studio. All rights reserved. Crafted with AI-powered innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
