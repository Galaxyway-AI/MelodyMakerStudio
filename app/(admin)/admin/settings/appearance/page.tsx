import Breadcrumb from "@/components/breadcrum";
import { AppearanceForm } from "@/components/admin/forms/appearance-form";
import { getAnimationSettings } from "@/lib/actions/site-settings";
import { Separator } from "@/components/ui/separator";

export default async function SettingsAppearancePage() {
    const settings = await getAnimationSettings();

    const breadcrumbItems = [
        { title: "Dashboard", link: "/admin" },
        { title: "Settings", link: "/admin/settings" },
        { title: "Appearance" },
    ];

    return (
        <div className="space-y-6">
            <Breadcrumb items={breadcrumbItems} />
            <div>
                <h3 className="text-lg font-medium">Appearance</h3>
                <p className="text-sm text-muted-foreground">
                    Customize the look and feel of the application.
                </p>
            </div>
            <Separator />
            <AppearanceForm initialSettings={settings} />
        </div>
    );
}
