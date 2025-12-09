"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
// import { useToast } from "@/components/ui/use-toast";

import { Edit, MoreHorizontal, Trash, UserCheck } from "lucide-react";
import { toast } from "sonner";

import type { Song } from "@/lib/db/firestore-schema";

import { deleteSong } from "@/actions/deleteSong";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "../alert-modal";

interface CellActionProps {
  data: Song;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const router = useRouter();
  // const { toast } = useToast();

  const onDeleteConfirm = async () => {
    try {
      setIsLoading(true);
      const res = await deleteSong({
        id: data.id,
        songUrl: data.songUrl ? data.songUrl : undefined,
        songImage: data.songImage ? data.songImage : undefined,
        artistImage: data.artistImage ? data.artistImage : undefined,
        albumImage: data.albumImage ? data.albumImage : undefined,
      });
      console.log({ res });

      if (res.error) {
        setIsLoading(false);
        setIsDeleteModalOpen(false);
        toast.error(
          `Something went wrong while deleting the song! ${res.error}`
        );
        return;
      }
      setIsLoading(false);
      setIsDeleteModalOpen(false);
      toast.success("Successfully deleted the song");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsDeleteModalOpen(false);
      toast.error(
        `Something went wrong while deleting the song! ${(error as Error).message}`
      );
    }
  };

  // console.log(data);

  return (
    <>
      <AlertModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={onDeleteConfirm}
        loading={isLoading}
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
