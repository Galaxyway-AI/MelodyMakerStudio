import { getHeroSlides } from "@/lib/db/firestore-queries";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { deleteHeroSlideAction } from "@/actions/hero-carousel";

export const dynamic = "force-dynamic";

export default async function HeroCarouselPage() {
    const slides = await getHeroSlides();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Hero Carousel</h1>
                    <p className="text-muted-foreground">
                        Manage the slides displayed on the homepage hero section.
                    </p>
                </div>
                <Link href="/admin/hero-carousel/add">
                    <Button className="gap-2">
                        <Plus size={16} /> Add Slide
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Label & Title</TableHead>
                            <TableHead>Order</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {slides.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No slides found. Create one to get started.
                                </TableCell>
                            </TableRow>
                        ) : (
                            slides.map((slide) => (
                                <TableRow key={slide.id}>
                                    <TableCell>
                                        <GripVertical className="text-muted-foreground cursor-move" size={20} />
                                    </TableCell>
                                    <TableCell>
                                        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted">
                                            {slide.image && (
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                                {slide.label}
                                            </span>
                                            <span className="font-semibold">{slide.title}</span>
                                            <span className="text-sm text-muted-foreground truncate max-w-[300px]">
                                                {slide.description}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{slide.order}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/hero-carousel/${slide.id}`}>
                                                <Button variant="ghost" size="icon">
                                                    <Pencil size={16} />
                                                </Button>
                                            </Link>
                                            <form action={async () => {
                                                "use server";
                                                await deleteHeroSlideAction(slide.id);
                                            }}>
                                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                    <Trash2 size={16} />
                                                </Button>
                                            </form>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
