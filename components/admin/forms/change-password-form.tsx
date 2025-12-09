"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
} from "firebase/auth";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Current password is required"),
        newPassword: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(100, "Password must be less than 100 characters"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

type FormData = z.infer<typeof changePasswordSchema>;

const defaultValues: FormData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
};

export function ChangePasswordForm() {
    const [isCurrentPassVisible, setIsCurrentPassVisible] = React.useState(false);
    const [isNewPassVisible, setIsNewPassVisible] = React.useState(false);
    const [isConfirmPassVisible, setIsConfirmPassVisible] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const router = useRouter();
    const { user } = useAuth();

    const form = useForm<FormData>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues,
    });

    async function onSubmit(formData: FormData) {
        if (!user) {
            toast.error("No user logged in");
            return;
        }

        setIsSubmitting(true);

        try {
            // Re-authenticate user with current password
            const credential = EmailAuthProvider.credential(
                user.email!,
                formData.currentPassword
            );
            await reauthenticateWithCredential(user, credential);

            // Update password
            await updatePassword(user, formData.newPassword);

            setIsSubmitting(false);
            toast.success("Password changed successfully!");
            form.reset();
        } catch (error) {
            setIsSubmitting(false);
            const err = error as Error;
            console.error(err.message);

            if (err.message.includes("wrong-password") || err.message.includes("invalid-credential")) {
                toast.error("Current password is incorrect");
            } else {
                toast.error(`Failed to change password: ${err.message}`);
            }
        }
    }

    return (
        <TooltipProvider>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        name="currentPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={isCurrentPassVisible ? "text" : "password"}
                                            disabled={isSubmitting}
                                            placeholder="••••••••••"
                                            className="pr-8"
                                            {...field}
                                        />
                                        <Tooltip delayDuration={150}>
                                            <TooltipTrigger
                                                aria-label={
                                                    isCurrentPassVisible ? "Hide Password" : "Show Password"
                                                }
                                                tabIndex={-1}
                                                type="button"
                                                disabled={!field.value}
                                                onClick={() => setIsCurrentPassVisible(!isCurrentPassVisible)}
                                                className="absolute inset-y-0 right-2 my-auto text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                {isCurrentPassVisible ?
                                                    <EyeOff className="size-5" />
                                                    : <Eye className="size-5" />}
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p className="text-xs">
                                                    {isCurrentPassVisible ? "Hide Password" : "Show Password"}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="newPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={isNewPassVisible ? "text" : "password"}
                                            disabled={isSubmitting}
                                            placeholder="••••••••••"
                                            className="pr-8"
                                            {...field}
                                        />
                                        <Tooltip delayDuration={150}>
                                            <TooltipTrigger
                                                aria-label={
                                                    isNewPassVisible ? "Hide Password" : "Show Password"
                                                }
                                                tabIndex={-1}
                                                type="button"
                                                disabled={!field.value}
                                                onClick={() => setIsNewPassVisible(!isNewPassVisible)}
                                                className="absolute inset-y-0 right-2 my-auto text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                {isNewPassVisible ?
                                                    <EyeOff className="size-5" />
                                                    : <Eye className="size-5" />}
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p className="text-xs">
                                                    {isNewPassVisible ? "Hide Password" : "Show Password"}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm New Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={isConfirmPassVisible ? "text" : "password"}
                                            disabled={isSubmitting}
                                            placeholder="••••••••••"
                                            className="pr-8"
                                            {...field}
                                        />
                                        <Tooltip delayDuration={150}>
                                            <TooltipTrigger
                                                aria-label={
                                                    isConfirmPassVisible ? "Hide Password" : "Show Password"
                                                }
                                                tabIndex={-1}
                                                type="button"
                                                disabled={!field.value}
                                                onClick={() => setIsConfirmPassVisible(!isConfirmPassVisible)}
                                                className="absolute inset-y-0 right-2 my-auto text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                {isConfirmPassVisible ?
                                                    <EyeOff className="size-5" />
                                                    : <Eye className="size-5" />}
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p className="text-xs">
                                                    {isConfirmPassVisible ? "Hide Password" : "Show Password"}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full font-semibold"
                    >
                        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
                        Change Password
                    </Button>
                </form>
            </Form>
        </TooltipProvider>
    );
}
