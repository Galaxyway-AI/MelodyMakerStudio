import React from "react";

import type { SongRequest } from "@/lib/db/firestore-schema";

import Breadcrumb from "@/components/breadcrum";
import ToolsTable from "@/components/requested-songs-table/tools-table";
import { getAllSongRequests } from "@/lib/db/firestore-queries";

const Page = async () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "#" },
    { title: "Requested Songs" },
  ];

  const result = await getAllSongRequests();

  // Serialize data to avoid "Only plain objects" error
  const formattedResult = JSON.parse(JSON.stringify(result));

  // console.log({ result });

  return (
    <div className="flex-1 space-y-4  p-4">
      <Breadcrumb items={breadcrumbItems} />
      <ToolsTable songs={formattedResult as SongRequest[]} />
    </div>
  );
};

export default Page;
