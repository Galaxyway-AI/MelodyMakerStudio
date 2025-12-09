"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { updateAnimationSettings } from "@/lib/actions/site-settings";
import { AnimationSettings } from "@/lib/db/firestore-schema";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const appearanceSchema = z.object({
    enabled: z.boolean(),
    speed: z.number().min(0.1).max(2.0),
    density: z.number().min(1).max(50),
    glowIntensity: z.number().min(0.1).max(1.0),
});

type AppearanceFormValues = z.infer<typeof appearanceSchema>;

interface AppearanceFormProps {
    initialSettings: AnimationSettings;
}

export function AppearanceForm({ initialSettings }: AppearanceFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<AppearanceFormValues>({
        resolver: zodResolver(appearanceSchema),
        defaultValues: {
            enabled: initialSettings.enabled,
            speed: initialSettings.speed,
            density: initialSettings.density,
            glowIntensity: initialSettings.glowIntensity,
        },
    });

    async function onSubmit(data: AppearanceFormValues) {
        setIsSubmitting(true);
        try {
            const result = await updateAnimationSettings(data);
            if (result.success) {
                toast.success("Appearance settings updated successfully");
            } else {
                toast.error("Failed to update settings");
            }
        } catch (error) {
            toast.error("An error occurred while saving settings");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Futuristic Background</CardTitle>
                        <CardDescription>
                            Configure the global animated background.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="enabled"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">Enable Animation</FormLabel>
                                        <FormDescription>
                                            Turn the background animation on or off globally.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="speed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Animation Speed ({field.value})</FormLabel>
                                    <FormDescription>
                                        Controls how fast the sound waves move.
                                    </FormDescription>
                                    <FormControl>
                                        <Slider
                                            min={0.1}
                                            max={2.0}
                                            step={0.1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="density"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Particle Density ({field.value})</FormLabel>
                                    <FormDescription>
                                        Controls the number of floating particles/notes.
                                    </FormDescription>
                                    <FormControl>
                                        <Slider
                                            min={1}
                                            max={50}
                                            step={1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="glowIntensity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Glow Intensity ({field.value})</FormLabel>
                                    <FormDescription>
                                        Controls the brightness of the neon effects.
                                    </FormDescription>
                                    <FormControl>
                                        <Slider
                                            min={0.1}
                                            max={1.0}
                                            step={0.1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </form>
        </Form>
    );
}
