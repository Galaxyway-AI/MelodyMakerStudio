import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SeedButton } from "./_components/seed-button";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account and application settings.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Data Management</CardTitle>
                    <CardDescription>Manage your database content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label className="text-base font-medium">Seed Database</label>
                            <p className="text-sm text-muted-foreground">
                                Populate the database with sample songs, artists, and blog posts.
                            </p>
                        </div>
                        <SeedButton />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure general application settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">More settings coming soon...</p>
                </CardContent>
            </Card>
        </div>
    );
}
