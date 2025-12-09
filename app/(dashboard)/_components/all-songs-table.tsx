"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { Song } from "@/lib/db/testSchema";

import ToolsTable from "@/components/songs-table/tools-table";

const AllSongsTable = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["allSongs"],
    queryFn: () => axios.get("/api/admin/getAllSongs").then((res) => res.data),
  });

  if (error) {
    console.log(error);
    return <div>Something went wrong! Try again by refreshing the page.</div>;
  }

  if (isPending) return <div>Loading...</div>;

  return (
    <ToolsTable
      songs={
        // tools.data.map((tool) => ({ ...tool, suggestions: [] })) as Tool[]
        data.data as Song[]
      }
    />
  );
};

export default AllSongsTable;
