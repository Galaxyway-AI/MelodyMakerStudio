import React from "react";

import Breadcrumb from "@/components/breadcrum";
import { ChangePasswordForm } from "@/components/admin/forms/change-password-form";

export const metadata = {
    title: "Change Password",
    description: "Change your admin password",
};

const Page = () => {
    const breadcrumbItems = [
        { title: "Dashboard", link: "/admin" },
        { title: "Change Password" },
    ];

    return (
        <div className="flex-1 space-y-4 p-4">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-md space-y-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Change Password</h2>
                    <p className="text-muted-foreground">
                        Update your admin account password
                    </p>
                </div>
                <ChangePasswordForm />
            </div>
        </div>
    );
};

export default Page;
