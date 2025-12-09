// import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

type SliderCardSkeletonProps = {
  aspect?: "square" | "video";
  rounded?: boolean;
  hideSubtitle?: boolean;
};

export function SliderCardSkeleton(_props: SliderCardSkeletonProps) {
  // const { aspect, rounded, hideSubtitle } = props;

  return (
    <div
      className="rounded-md border h-fit p-2 space-y-2"

      // className={cn(
      //   "w-32 rounded-md sm:w-36 sm:border md:w-48 lg:w-56",
      //   aspect === "video" && "w-44 border-none sm:w-48 md:w-64 lg:w-72"
      // )}
    >
      {/* <div className="h-48 p-2"> */}
      <Skeleton className="h-36 lg:h-44" />

      {/* <div className=""> */}
      <Skeleton className="h-5 w-full" />

      <Skeleton className="h-3 w-full" />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
