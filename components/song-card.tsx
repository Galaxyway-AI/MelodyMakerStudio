import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { ImageWithFallback } from "./image-with-fallback";
import { PlayButton } from "./play-button";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export type SongCardProps = {
  songId: string;
  name: string;
  url: string;
  image: string;
  artist: string;
  className?: string;
  aspect?: "square" | "video";
  isCurrentSeason?: boolean;
};

export function SongCard(props: SongCardProps) {
  const {
    songId,
    image,
    name,
    artist,
    aspect = "square",
    isCurrentSeason,
    className,
  } = props;

  return (
    <Card
      title={name}
      className={cn(
        "group cursor-pointer border-none bg-transparent transition-shadow duration-200 hover:bg-accent hover:shadow-md  sm:border-solid",
        // "group w-32 cursor-pointer border-none bg-transparent transition-shadow duration-200 hover:bg-accent hover:shadow-md sm:w-36 sm:border-solid md:w-48 lg:w-56",
        aspect === "video" && "w-44 !border-none sm:w-48 md:w-64 lg:w-72",
        isCurrentSeason &&
          "ring-2 ring-ring ring-offset-2 ring-offset-background",
        className
      )}
    >
      <CardContent className="size-full p-2">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-md",
            aspect === "square" ? "aspect-square" : "aspect-video"
          )}
        >
          {/* <Wrapper href={getHref(url, type)} className="absolute inset-0 z-10">
            <span className="sr-only">View {name}</span>
          </Wrapper> */}
          {/* <Link href={getHref(url, type)} className="absolute inset-0 z-10">
            <span className="sr-only">View {name}</span>
          </Link> */}

          <ImageWithFallback
            src={image}
            fallback={`/images/placeholder/song.jpg`}
            width={200}
            height={200}
            alt={name}
            className={cn(
              "size-full object-cover transition-transform duration-300 group-hover:scale-110"
            )}
          />

          <Skeleton className="absolute inset-0 -z-10 size-full hover:scale-110" />

          {/* {!hidePlayButton && ( */}
          <div className="absolute inset-0 flex from-transparent to-black group-hover:bg-gradient-to-b lg:hidden lg:group-hover:flex">
            <PlayButton
              songId={songId}
              className="group/play z-20 m-auto aspect-square w-12 rounded-full bg-muted/75 duration-200 hover:w-16 active:w-14"
            >
              <Play
                strokeWidth={10}
                className="m-auto h-full w-6 p-0.5 duration-200 group-hover/play:w-8"
              />
            </PlayButton>
          </div>
          {/* )} */}
        </div>

        <div className="mt-1 flex w-full flex-col items-center justify-between">
          <h4 className="w-full font-semibold lg:text-lg mx-auto flex max-w-fit items-center">
            {/* <Link
              href={getHref(url, type)}
              className="mx-auto flex max-w-fit items-center"
            > */}
            {/* {explicit && (
                <Badge className="mr-1 rounded px-1 py-0 font-bold duration-0">
                  E
                </Badge>
              )} */}
            <span className="truncate"> {name} </span>
            {/* </Link> */}
          </h4>

          <span className="w-full truncate text-center text-xs capitalize text-secondary-foreground">
            {artist}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
