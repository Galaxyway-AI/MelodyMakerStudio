"use client";

import Image from "next/image";
import { LogOut, Monitor, Moon, Sun, SunMoon } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import type { User } from "firebase/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type UserDropdownProps = {
  user?: User;
};

export function UserDropdown({ user }: UserDropdownProps) {
  const { signOut } = useAuth();
  const { setTheme } = useTheme();

  async function signOutHandler() {
    try {
      await signOut();
      toast.success("You have been signed out.");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <Avatar className="border shadow-sm">
          <AvatarImage
            src={user?.image ?? undefined}
            alt={user?.name ?? "Guest User"}
          />
          <AvatarFallback asChild>
            <Image
              src="/images/placeholder/user.jpg"
              alt={user?.name ?? "Guest User"}
              fill
              className="dark:invert"
            />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        className="max-w-[300px] *:cursor-pointer"
      >
        <DropdownMenuLabel className="flex flex-col">
          <span title={user?.name ?? undefined} className="truncate">
            {user ?
              user.name ?
                user.name
                : "~"
              : "Guest User"}
          </span>
          <span
            title={user?.email ?? undefined}
            className="truncate text-sm font-normal text-muted-foreground"
          >
            {user?.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* TODO */}
        {/* <DropdownMenuItem disabled={user === undefined} asChild>
          <Link href="/me">
            <User2 size={16} className="mr-2" />
            My Profile
          </Link>
        </DropdownMenuItem> */}

        {/* TODO */}
        {/* <DropdownMenuItem asChild>
          <Link href="/settings">
            <Cog size={16} className="mr-2" />
            Settings
          </Link>
        </DropdownMenuItem> */}

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <SunMoon size={16} className="mr-2" />
            Theme
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              >
                <Sun size={16} className="mr-2" />
                Light
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              >
                <Moon size={16} className="mr-2" />
                Dark
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="cursor-pointer"
              >
                <Monitor size={16} className="mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {user && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOutHandler}>
              <LogOut size={16} className="mr-2" />
              Log Out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
