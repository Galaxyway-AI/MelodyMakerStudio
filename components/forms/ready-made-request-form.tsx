"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { submitReadyMadeRequest } from "@/lib/actions/ready-made-songs"

const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    artistName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().optional(),
    country: z.string().min(2, "Please select your country"),
    userRole: z.enum(["Artist", "Investor", "Label", "Producer", "Other"]),
    songLink: z.string().url("Please enter a valid URL from Voice The Song"),
    usageType: z.array(z.string()).min(1, "Select at least one usage type"),
    usageTypeOther: z.string().optional(),
    budgetRange: z.string().min(1, "Please select a budget range"),
    timeline: z.string().min(1, "Please select a timeline"),
    details: z.string().optional(),
    agreedToTerms: z.literal(true, {
        errorMap: () => ({ message: "You must agree to the terms" }),
    }),
    consentedToContact: z.boolean().default(false).optional(),
})

export function ReadyMadeRequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            artistName: "",
            email: "",
            phoneNumber: "",
            country: "",
            userRole: "Artist",
            songLink: "",
            usageType: [],
            usageTypeOther: "",
            budgetRange: "",
            timeline: "",
            details: "",
            agreedToTerms: undefined, // undefined to force selection
            consentedToContact: false,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const result = await submitReadyMadeRequest(values)
            if (result.success) {
                setIsSuccess(true)
                toast.success("Request submitted successfully!")
            } else {
                toast.error(result.error || "Something went wrong")
            }
        } catch (error) {
            toast.error("Failed to submit request")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 animate-in fade-in-50">
                <div className="rounded-full bg-green-500/20 p-4">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank you for your request! 🎵</h3>
                <p className="text-gray-300 max-w-md">
                    Our team at MelodyMaker Studio will review your details and contact you shortly to confirm availability, pricing, and next steps.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSuccess(false)
                        form.reset()
                    }}
                    className="mt-4"
                >
                    Submit Another Request
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="artistName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Artist / Stage Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Optional" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone / WhatsApp</FormLabel>
                                <FormControl>
                                    <Input placeholder="+1 234 567 8900" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country / Location <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. United Kingdom" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="userRole"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Who Are You? <span className="text-red-500">*</span></FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background/50">
                                            <SelectValue placeholder="Select your role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Artist">Artist / Singer</SelectItem>
                                        <SelectItem value="Investor">Investor</SelectItem>
                                        <SelectItem value="Label">Label / Management</SelectItem>
                                        <SelectItem value="Producer">Producer / DJ</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="songLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link to Song(s) from Voice The Song <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="https://voicethesong.com/songs/..." {...field} className="bg-background/50" />
                            </FormControl>
                            <FormDescription>
                                Browse the catalogue at <a href="https://voicethesong.com/songs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">voicethesong.com/songs</a> and paste the URL here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="usageType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-4 block">Type of Use / Project <span className="text-red-500">*</span> (Select all that apply)</FormLabel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { id: "single", label: "Single release" },
                                    { id: "ep_album", label: "EP / Album" },
                                    { id: "sync", label: "Sync / Film / TV / Ad" },
                                    { id: "social", label: "Content / Social Media" },
                                    { id: "investment", label: "Investment / Catalogue purchase" },
                                    { id: "other", label: "Other" },
                                ].map((item) => (
                                    <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(item.label)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...field.value, item.label])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== item.label
                                                            )
                                                        )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {form.watch("usageType")?.includes("Other") && (
                    <FormField
                        control={form.control}
                        name="usageTypeOther"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Other Usage Details</FormLabel>
                                <FormControl>
                                    <Input placeholder="Please specify..." {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="budgetRange"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Budget Range <span className="text-red-500">*</span></FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background/50">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Under £500">Under £500</SelectItem>
                                        <SelectItem value="£500 – £1,500">£500 – £1,500</SelectItem>
                                        <SelectItem value="£1,500 – £3,000">£1,500 – £3,000</SelectItem>
                                        <SelectItem value="£3,000+">£3,000+</SelectItem>
                                        <SelectItem value="Not sure yet">Not sure yet – please advise</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Timeline <span className="text-red-500">*</span></FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background/50">
                                            <SelectValue placeholder="When do you need this?" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="ASAP">ASAP (within 1–2 weeks)</SelectItem>
                                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                                        <SelectItem value="In 1–3 months">In 1–3 months</SelectItem>
                                        <SelectItem value="Flexible">Flexible / No fixed date</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us more about your goals, preferred style, or any custom changes you’d like (re-voicing, remix, extra production, etc.)."
                                    className="resize-none min-h-[120px] bg-background/50"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="space-y-4 pt-4 border-t border-white/10">
                    <FormField
                        control={form.control}
                        name="agreedToTerms"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-primary/5 border border-primary/20">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm font-normal text-gray-300">
                                        I understand that Ready-Made Songs are sold with full song stems and that ownership, licensing, and transfer terms will be clearly outlined by MelodyMaker Studio before any purchase is completed. <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="consentedToContact"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm font-normal text-gray-300">
                                        I agree to be contacted by MelodyMaker Studio regarding my Ready-Made Song request and related services.
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting Request...
                        </>
                    ) : (
                        "Submit Request"
                    )}
                </Button>
            </form>
        </Form>
    )
}
