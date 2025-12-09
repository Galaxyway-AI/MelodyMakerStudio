import { FileAudio, UserRound, UserRoundCheck } from "lucide-react";

import type { Song, SongRequest } from "@/lib/db/testSchema";
import type { NavItem } from "@/types/nav-item";

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: string;
  created_at: string;
}

export const dummySongs: Song[] = [
  // {
  //   id: 1,
  //   title: "Happy birthday",
  //   duration: 3,
  //   genre: "Pop",
  //   album: "Birthday album",
  //   artists: ["Frank", "John"],
  //   url: "https url",
  //   lyrics: "lyrics",
  //   release_date: new Date().toISOString(),
  //   cover_image_url: "https:",
  //   created_at: new Date().toISOString(),
  // },
  {
    id: "1",
    songName: "song name",
    songDescription: "song desc",
    duration: "3.22",
    songImage: "https",
    songUrl: "",

    artist: "Frankywright",
    artistBio: "artist bio",
    artistCountry: "UK",
    artistImage: "",

    albumName: "album name",
    albumDescription: "album desc",
    albumImage: "",

    genre: "Pop",
    style: "Sad",
    occasion: "Birthday",
    vocal: "Male",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "draft",
  },
  // {
  //   id: 2,
  //   email: "linustorvalds@gmail.com",
  //   fullName: "Linus Torvalds",
  //   role: "ROLE_USER",
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: 3,
  //   email: "ryandahl@gmail.com",
  //   fullName: "Ryan Dahl",
  //   role: "ROLE_ADMIN",
  //   created_at: new Date().toISOString(),
  // },
];
export const dummyRequestedSongs: SongRequest[] = [
  // {
  //   id: 1,
  //   title: "Happy birthday",
  //   duration: 3,
  //   genre: "Pop",
  //   album: "Birthday album",
  //   artists: ["Frank", "John"],
  //   url: "https url",
  //   lyrics: "lyrics",
  //   release_date: new Date().toISOString(),
  //   cover_image_url: "https:",
  //   created_at: new Date().toISOString(),
  // },
  {
    id: "1",
    name: "John",
    email: "john@gmail.com",
    story: "my story hello sdfds asdfdsf asdfdsf asdfsd asdfsdaf",
    mustIncludes: ["Include1", "include2"],
    referralSource: "TikTok",

    extraAddons: "Stream on Multiple Platforms ($50 Extra)",
    expressService: "Ready in 24 Hours ( Extra $30)",

    genre: "Pop",
    style: "Sad",
    occasion: "Birthday",
    vocal: "Male",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // {
  //   id: 2,
  //   email: "linustorvalds@gmail.com",
  //   fullName: "Linus Torvalds",
  //   role: "ROLE_USER",
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   id: 3,
  //   email: "ryandahl@gmail.com",
  //   fullName: "Ryan Dahl",
  //   role: "ROLE_ADMIN",
  //   created_at: new Date().toISOString(),
  // },
];

export const userFilterLabels = [
  {
    value: "ADMIN",
    label: "ADMIN",
    icon: UserRoundCheck,
  },
  {
    value: "USER",
    label: "USER",
    icon: UserRound,
  },
];

export const navItems: NavItem[] = [
  {
    title: "All Songs",
    href: "/admin-dashboard",
    icon: FileAudio,
    // label: 'Dashboard'
  },
  {
    title: "Requested Songs",
    href: "/admin-dashboard/requested-songs",
    icon: FileAudio,
    // label: 'Dashboard'
  },
  {
    title: "Change Password",
    href: "/admin-dashboard/change-password",
    icon: UserRound,
    // label: 'Settings'
  },
];
