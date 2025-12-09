import { AdminHeader } from "@/components/admin/header";
import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <AdminSidebar />
            <div className="flex min-h-screen flex-col md:pl-64 transition-all duration-300 ease-in-out">
                <AdminHeader />
                <main className="flex-1 p-6 md:p-8 pt-6 space-y-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
