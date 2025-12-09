"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
// import { useToast } from "@/components/ui/use-toast";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type SongRequest } from "@/lib/db/testSchema";
import { AlertModal } from "../alert-modal";

interface CellActionProps {
  data: SongRequest;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const router = useRouter();
  // const { toast } = useToast();

  const onDeleteConfirm = async () => {};

  console.log(data);

  return (
    <>
      <AlertModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={onDeleteConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          {/* <DropdownMenuItem className="cursor-pointer">
            <UserCheck className="mr-2 size-4" /> Approve User
          </DropdownMenuItem> */}

          <DropdownMenuItem className="cursor-pointer p-0">
            <Link
              href={`/admin-dashboard//edit-song/${data.id}`}
              className="flex w-full items-center gap-2 px-2 py-1.5"
            >
              <Edit className="size-4" /> Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <Trash className="mr-2 size-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
