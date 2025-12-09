import React from "react";

import type { Song } from "@/lib/db/firestore-schema";

import Breadcrumb from "@/components/breadcrum";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getSongById } from "@/lib/db/firestore-queries";
import { EditSongForm } from "@/components/admin/forms/edit-song-form";

export const metadata = {
  title: "Edit Song - Dashboard",
  description: "Edit Song - Dashboard",
};

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Edit Song" },
];

const Page = async ({ params }: { params: { songId: string } }) => {
  console.log(params);
  const song = await getSongById(params.songId);

  if (!song) {
    return <div>Song not found</div>;
  }

  console.log(song);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 mb-20 pt-6 md:p-8">
        <Breadcrumb items={breadcrumbItems} />
        <EditSongForm song={song} />
      </div>
      <ScrollBar />
    </ScrollArea>
  );
};

export default Page;
