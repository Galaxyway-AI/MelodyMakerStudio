import Breadcrumb from "@/components/breadcrum";
import { ReadyMadeRequestsClient } from "@/components/admin/ready-made-requests-client";
import { getReadyMadeRequests } from "@/lib/actions/ready-made-songs";

export const metadata = {
    title: "Ready-Made Requests | Admin Dashboard",
    description: "Manage incoming ready-made song requests",
};

export const dynamic = "force-dynamic";

export default async function ReadyMadeRequestsPage() {
    const { data: requests, success } = await getReadyMadeRequests();

    const breadcrumbItems = [
        { title: "Dashboard", link: "/admin" },
        { title: "Ready-Made Requests", link: "/admin/ready-made-requests" },
    ];

    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Ready-Made Requests
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Manage and track requests for ready-made songs and stems.
                    </p>
                </div>
            </div>

            {success && requests ? (
                <ReadyMadeRequestsClient initialRequests={requests} />
            ) : (
                <div className="p-8 text-center text-red-400 bg-red-500/10 rounded-xl border border-red-500/20">
                    Failed to load requests. Please try refreshing the page.
                </div>
            )}
        </div>
    );
}
