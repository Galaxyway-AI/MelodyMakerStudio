"use client";

import { Button } from "@/components/ui/button";
import { seedDatabase } from "@/actions/seedData";
import { toast } from "sonner";
import { useState } from "react";
import { Database, Loader2 } from "lucide-react";

export function SeedButton() {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSeed() {
        try {
            setIsLoading(true);
            const result = await seedDatabase();
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button onClick={handleSeed} disabled={isLoading} variant="outline">
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Seeding...
                </>
            ) : (
                <>
                    <Database className="mr-2 h-4 w-4" />
                    Seed Database
                </>
            )}
        </Button>
    );
}
