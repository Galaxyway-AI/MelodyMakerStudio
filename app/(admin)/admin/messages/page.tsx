import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContactMessages } from "@/lib/db/firestore-queries";
import { ContactMessage } from "@/lib/db/firestore-schema";
import { Mail, Phone, Calendar, User, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
    const messages = await getContactMessages();

    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
            </div>

            <div className="grid gap-4">
                {messages.length === 0 ? (
                    <Card>
                        <CardContent className="p-8 text-center text-muted-foreground">
                            No messages found.
                        </CardContent>
                    </Card>
                ) : (
                    messages.map((msg) => (
                        <Card key={msg.id} className="overflow-hidden">
                            <CardHeader className="bg-muted/50 pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <CardTitle className="text-base font-semibold flex items-center gap-2">
                                            {msg.status === "new" && (
                                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            )}
                                            {msg.subject}
                                        </CardTitle>
                                        <div className="text-sm text-muted-foreground flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <User size={14} /> {msg.name}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Mail size={14} /> {msg.email}
                                            </span>
                                            {msg.phone && (
                                                <span className="flex items-center gap-1">
                                                    <Phone size={14} /> {msg.phone}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar size={14} />
                                        {msg.createdAt.toLocaleDateString()} {msg.createdAt.toLocaleTimeString()}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex gap-4">
                                    <MessageCircle className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
