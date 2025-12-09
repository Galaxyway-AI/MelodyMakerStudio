import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MusicPlayer from "@/components/music-player"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
            <MusicPlayer />
        </>
    )
}
