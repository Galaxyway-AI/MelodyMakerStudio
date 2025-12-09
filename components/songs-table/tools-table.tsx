"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import type { Song } from "@/lib/db/firestore-schema";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "../ui/heading";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ToolsTable = ({ songs }: { songs: Song[] }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Songs (${songs.length})`} description="Manage Songs" />
        <Link
          href="/admin-dashboard/add-song"
          className={buttonVariants({
            variant: "default",
          })}
        >
          <Plus className="mr-2 size-4" /> Add Song
        </Link>
      </div>
      <Separator />
      <DataTable data={songs} columns={columns} />
      {/* <DataTable data={tasks} columns={columns} /> */}
    </>
  );
};

export default ToolsTable;
