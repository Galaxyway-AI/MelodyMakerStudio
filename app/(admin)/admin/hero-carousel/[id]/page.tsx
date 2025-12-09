import HeroSlideForm from "@/components/admin/forms/hero-slide-form";
import { getHeroSlideById } from "@/lib/db/firestore-queries";
import { notFound } from "next/navigation";

interface EditHeroSlidePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditHeroSlidePage({ params }: EditHeroSlidePageProps) {
    const { id } = await params;
    const slide = await getHeroSlideById(id);

    if (!slide) {
        notFound();
    }

    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Edit Slide</h1>
                <p className="text-muted-foreground">
                    Update the content of this spotlight card.
                </p>
            </div>
            <HeroSlideForm initialData={slide} />
        </div>
    );
}
