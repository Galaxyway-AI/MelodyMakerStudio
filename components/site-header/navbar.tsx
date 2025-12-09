import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { HomeSidebar } from "@/app/(home)/_components/home-sidebar";
import { Button } from "../ui/button";
import { ShimmerButton } from "../ui/shimmer-button";

export async function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/50 backdrop-blur-md border-white/10">
      <div className="max-w-[84rem] mx-auto flex h-16 items-center justify-between space-x-4 px-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Melody Maker Studio logo"
            />

            <span className="hidden text-xl font-bold lg:inline-block text-white">
              MelodyMakerStudio
            </span>
            <span className="font-heading tracking-wide lg:hidden text-white">
              MelodyMaker
            </span>
          </div>
        </Link>

        <nav className="hidden lg:items-center lg:gap-8 lg:flex text-sm font-medium text-neutral-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/artists" className="hover:text-white transition-colors">
            Our Artists
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>

          <Link href="/services/request-song" className="hidden lg:block">
            <ShimmerButton className="ml-2 h-9 w-max shrink-0 px-3 py-2 lg:h-10 lg:px-4">
              Request Song
            </ShimmerButton>
          </Link>
        </nav>

        <HomeSidebar />
      </div>
    </header>
  );
}
