"use client";

import Image from "next/image";

import type { ColumnDef } from "@tanstack/react-table";
import type { Song } from "@/lib/db/firestore-schema";

import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/format-date";
import { CellAction } from "./cell-action";
// import { formatDate } from "@/lib/format-date";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<Song>[] = [
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
    accessorKey: "songImage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SONG IMAGE" />
    ),
    cell: ({ row }) => {
      return (
        <Image
          src={row.getValue("songImage")}
          alt="song cover image"
          width={40}
          height={40}
        />
      );
    },
  },
  {
    accessorKey: "songName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SONG NAME" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("songName")}</p>;
    },
  },

  // {
  //   accessorKey: "songDescription",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="SONG DESC" />
  //   ),
  //   cell: ({ row }) => {
  //     return <p>{row.getValue("songDescription")}</p>;
  //   },
  // },

  {
    accessorKey: "artist",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ARTIST" />
    ),
    cell: ({ row }) => {
      return <p>{row.getValue("artist")}</p>;
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
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CREATED AT" />
    ),
    cell: ({ row }) => {
      return <p className="w-fit">{formatDate(row.getValue("createdAt"))}</p>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UPDATED AT" />
    ),
    cell: ({ row }) => {
      // console.log({updatedAt: row.getValue("updatedAt")})
      return <p className="w-fit">{formatDate(row.getValue("updatedAt"))}</p>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ACTIONS" />
    ),
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
