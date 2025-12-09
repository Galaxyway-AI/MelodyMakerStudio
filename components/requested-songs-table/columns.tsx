"use client";

import Image from "next/image";

import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { type SongRequest } from "@/lib/db/firestore-schema";
import { formatDate } from "@/lib/format-date";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { CellAction } from "./cell-action";
// import { formatDate } from "@/lib/format-date";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<SongRequest>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="NAME" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("name")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("name")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EMAIL" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("email")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("email")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },

  {
    accessorKey: "story",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="STORY" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("story")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("story")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },

  {
    accessorKey: "mustIncludes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MUST INCLUDES" />
    ),
    cell: ({ row }) => {
      const mustIncludes = row.getValue("mustIncludes") as string[] | undefined;
      const displayText = mustIncludes && mustIncludes.length > 0 ? mustIncludes.join(", ") : "N/A";

      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {displayText}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {displayText}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },

  {
    accessorKey: "extraAddons",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EXTRA ADDONS" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("extraAddons")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("extraAddons")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },
  {
    accessorKey: "expressService",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EXPRESS SERVICE" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("expressService")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("expressService")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },

  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GENRE" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("genre")}</p>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "style",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="STYLE" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("style")}</p>;
    },
  },

  {
    accessorKey: "vocal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="VOCAL" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("vocal")}</p>;
    },
  },

  {
    accessorKey: "occasion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="OCCASION" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("occasion")}</p>;
    },
  },

  {
    accessorKey: "referralSource",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="REFERRAL SOURCE" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <HoverCard>
            <HoverCardTrigger>
              <p className="max-w-[150px] truncate font-medium">
                {row.getValue("referralSource")}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <ScrollArea className="w-64 p-4">
                {row.getValue("referralSource")}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CREATED AT" />
    ),
    cell: ({ row }) => {
      // return <p className="w-fit">{row.getValue("createdAt")}</p>;
      return <p className="w-fit">{formatDate(row.getValue("createdAt"))}</p>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  // {
  //   accessorKey: "updateAt",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="UPDATED AT" />
  //   ),
  //   cell: ({ row }) => {
  //     // return <p className="w-fit">{formatDate(row.getValue("updateAt"))}</p>;
  //     return <p className="w-fit">{row.getValue("updateAt")}</p>;
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },

  // {
  //   id: "actions",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ACTIONS" />
  //   ),
  //   cell: ({ row }) => <CellAction data={row.original} />,
  // },
];
