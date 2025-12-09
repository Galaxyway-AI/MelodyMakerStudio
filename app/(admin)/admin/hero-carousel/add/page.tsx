import HeroSlideForm from "@/components/admin/forms/hero-slide-form";

export default function AddHeroSlidePage() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Add New Slide</h1>
                <p className="text-muted-foreground">
                    Create a new spotlight card for the hero carousel.
                </p>
            </div>
            <HeroSlideForm />
        </div>
    );
}
