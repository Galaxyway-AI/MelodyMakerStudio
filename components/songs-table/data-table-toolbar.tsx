"use client";

import { type Table } from "@tanstack/react-table";

import type { Song } from "@/lib/db/testSchema";

import { Input } from "@/components/ui/input";
// import { DataTableViewOptions } from "./components/data-table-view-options"

// import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: Song[];
}

export function DataTableToolbar<TData>({
  table,
  // data,
}: DataTableToolbarProps<TData>) {
  // const isFiltered = table.getState().columnFilters.length > 0;

  // const roleFilterOptions = Array.from(
  //   new Set(data.map((d) => d.role.toLocaleLowerCase()))
  // ).map((v) => ({
  //   label: v.toLocaleUpperCase(),
  //   value: v.toLocaleUpperCase(),
  // }));

  // console.log(roleFilterOptions);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        {/* <Input
          placeholder="Search email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        /> */}
        <Input
          placeholder="Search song name..."
          value={
            (table.getColumn("songName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("songName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn("role") && (
          <DataTableFacetedFilter
            column={table.getColumn("role")}
            title="Role"
            options={roleFilterOptions}
          />
        )} */}

        {/* {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 size-4" />
          </Button>
        )} */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
