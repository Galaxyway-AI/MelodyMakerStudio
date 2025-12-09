"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Music2,
    Mic2,
    FileText,
    Settings,
    LogOut,
    ChevronLeft,
    Menu,
    MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";

const navItems = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Songs",
        href: "/admin/songs",
        icon: Music2,
    },
    {
        title: "Requested Songs",
        href: "/admin/requested-songs",
        icon: Music2,
    },
    {
        title: "Ready-Made Requests",
        href: "/admin/ready-made-requests",
        icon: LayoutDashboard,
    },
    {
        title: "Artists",
        href: "/admin/artists",
        icon: Mic2,
    },
    {
        title: "Blog Posts",
        href: "/admin/blog",
        icon: FileText,
    },
    {
        title: "Hero Carousel",
        href: "/admin/hero-carousel",
        icon: LayoutDashboard,
    },
    {
        title: "Messages",
        href: "/admin/messages",
        icon: MessageSquare,
    },
    {
        title: "Files",
        href: "/admin/files",
        icon: FileText,
    },
    {
        title: "Change Password",
        href: "/admin/change-password",
        icon: Settings,
    },
    {
        title: "Appearance",
        href: "/admin/settings/appearance",
        icon: Settings,
    },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const { signOut } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Mobile Menu Trigger */}
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50 md:hidden"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <Menu className="h-6 w-6" />
            </Button>

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-background/80 backdrop-blur-xl transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-20" : "w-64",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                {/* Header / Logo */}
                <div className="flex h-16 items-center justify-between px-4 border-b border-border/50">
                    {!isCollapsed && (
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent truncate">
                            Melody Maker
                        </span>
                    )}
                    {isCollapsed && (
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mx-auto">
                            M
                        </span>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <ChevronLeft
                            className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")}
                        />
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2 p-4 overflow-y-auto py-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground group relative",
                                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                    isCollapsed && "justify-center px-2"
                                )}
                            >
                                <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
                                {!isCollapsed && <span>{item.title}</span>}

                                {/* Tooltip for collapsed state */}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 hidden rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block z-50 whitespace-nowrap">
                                        {item.title}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer / Logout */}
                <div className="p-4 border-t border-border/50">
                    <Button
                        variant="ghost"
                        className={cn(
                            "w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10",
                            isCollapsed && "justify-center px-0"
                        )}
                        onClick={() => signOut()}
                    >
                        <LogOut className="h-5 w-5 mr-2" />
                        {!isCollapsed && "Sign Out"}
                    </Button>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
