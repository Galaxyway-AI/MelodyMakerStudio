"use client";

import React from "react";
import {
  Loader2,
  Pause,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { useEventListener } from "@/hooks/use-event-listner";
import {
  useCurrentSongIndex,
  useIsPlayerInit,
  useIsTyping,
  useSongsQueue,
} from "@/hooks/use-store";
import { cn, formatDuration } from "@/lib/utils";
import { Icons } from "./icons";
import { ImageWithFallback } from "./image-with-fallback";
import { Skeleton } from "./ui/skeleton";
import { Slider, SliderRange, SliderThumb, SliderTrack } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Player() {
  // stores

  const [songsQueue] = useSongsQueue();

  // console.log({ songsQueue });

  const [currentIndex, setCurrentIndex] = useCurrentSongIndex();
  const [isPlayerInit, setIsPlayerInit] = useIsPlayerInit();
  const [isTyping] = useIsTyping();
  // refs
  const frameRef = React.useRef<number>();
  // states
  const [isShuffle] = React.useState(false);
  const [loopPlaylist] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  // third party hooks
  const {
    load,
    playing,
    togglePlayPause,
    getPosition,
    isLoading,
    duration,
    looping,
    muted,
    volume,
    setVolume,
    seek,
    isReady,
  } = useGlobalAudioPlayer();

  React.useEffect(() => {
    if (isPlayerInit && songsQueue.length !== 0) {
      console.log("hellooooooo");
      const currentSong = songsQueue[currentIndex];
      console.log({ currentIndex });
      console.log({ currentSong });

      const audioSrc = songsQueue[currentIndex].url;
      // const audioFormat = audioSrc.split(".com/")[1].split("-")[1];
      // console.log({ audioFormat });

      load(audioSrc, {
        html5: true,
        // onload: play,
        autoplay: true,
        initialMute: false,
        onend: onEndHandler,
        // format: audioFormat,
      });
    }
  }, [currentIndex, isPlayerInit, songsQueue]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  function skipToNext() {
    if (!isPlayerInit) setIsPlayerInit(true);

    let index = currentIndex;

    if (currentIndex < songsQueue.length - 1) {
      index = currentIndex + 1;
    }

    setCurrentIndex(index);
  }

  function skipToPrev() {
    if (!isPlayerInit) setIsPlayerInit(true);

    let index = currentIndex;

    if (currentIndex > 0) {
      index = currentIndex - 1;
    }

    setCurrentIndex(index);
  }

  function playPauseHandler() {
    if (isPlayerInit) {
      togglePlayPause();
    } else {
      setIsPlayerInit(true);
    }
  }

  function onEndHandler() {
    let index = currentIndex;

    if (isShuffle) {
      index = Math.floor(Math.random() * songsQueue.length);
    } else {
      if (currentIndex < songsQueue.length - 1) {
        if (!looping) index = currentIndex + 1;
      } else {
        if (loopPlaylist) {
          index = 0;
        }
      }
    }
    setCurrentIndex(index);
  }

  /* -----------------------------------------------------------------------------------------------
   * Keyboard shortcuts (Keybinds)
   * -----------------------------------------------------------------------------------------------*/

  useEventListener("keydown", (e) => {
    if (e.key === " ") {
      if (!isTyping) {
        e.preventDefault();
        playPauseHandler();
      }
    } else if (e.key === "n" || (e.shiftKey && e.key === "ArrowRight")) {
      skipToNext();
    } else if (e.key === "p" || (e.shiftKey && e.key === "ArrowLeft")) {
      skipToPrev();
    } else if (e.shiftKey && e.key === "ArrowUp") {
      setVolume(volume + 0.05);
    } else if (e.shiftKey && e.key === "ArrowDown") {
      setVolume(volume - 0.05);
    }
  });

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 h-20 bg-background animate-in slide-in-from-bottom-full [animation-duration:500ms]",
        !(isReady || songsQueue.length) && "hidden lg:block"
      )}
    >
      <Slider
        value={[pos]}
        max={duration}
        onValueChange={([values]) => {
          seek(values);
          setPos(values);
        }}
      >
        <SliderTrack className="h-1 cursor-pointer">
          <SliderRange />
        </SliderTrack>

        <SliderThumb className="hidden size-4 cursor-pointer lg:block" />
      </Slider>

      <div
        className={cn(
          "flex items-center px-4 pt-3 lg:px-8",
          songsQueue.length === 0 && "text-muted-foreground"
        )}
      >
        <div className="flex w-full gap-4 lg:w-1/3">
          {songsQueue.length && songsQueue[currentIndex]?.image ?
            <>
              <div className="relative aspect-square h-12 shrink-0 overflow-hidden rounded-md shadow">
                <ImageWithFallback
                  src={songsQueue[currentIndex].image}
                  alt={songsQueue[currentIndex].songName}
                  fill
                  fallback="/images/placeholder/song.jpg"
                />

                <Skeleton className="absolute inset-0 -z-10" />
              </div>

              <div className="flex flex-col justify-center">
                <p className="group line-clamp-1 font-heading text-sm text-primary drop-shadow">
                  {songsQueue[currentIndex].songName}
                </p>

                <p className="line-clamp-1 text-xs text-muted-foreground">
                  {songsQueue[currentIndex].artist}
                </p>
              </div>
            </>
            : <div className="flex items-center space-x-4">
              <Skeleton className="size-12 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-44 lg:w-64" />
                <Skeleton className="h-3 w-52 2xl:w-[500px]" />
              </div>
            </div>
          }
        </div>

        <div className="flex justify-end lg:w-1/3 lg:justify-evenly">
          {/* <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                aria-label={looping ? "Looping" : "Loop"}
                onClick={loopHandler}
                className={cn(
                  "hidden lg:block",
                  !looping && !loopPlaylist && "text-muted-foreground"
                )}
              >
                {looping ? (
                  <Repeat1 strokeWidth={2} className="size-7" />
                ) : (
                  <Repeat strokeWidth={2} className="size-7" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {looping
                ? "Playing current song on repeat"
                : loopPlaylist
                  ? "Looping playlist"
                  : "Loop"}
            </TooltipContent>
          </Tooltip> */}

          <Tooltip delayDuration={0}>
            <TooltipTrigger disabled={currentIndex < 1} asChild>
              <button
                aria-label="Previous"
                onClick={skipToPrev}
                className="hidden lg:block disabled:text-muted-foreground disabled:cursor-not-allowed"
                disabled={currentIndex < 1}
              >
                <Icons.SkipBack className="size-10" />
              </button>
            </TooltipTrigger>
            <TooltipContent
              className={cn({
                "text-muted-foreground": currentIndex < 1,
              })}
            >
              Previous
            </TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                aria-label={playing ? "Pause" : "Play"}
                onClick={playPauseHandler}
              >
                {isLoading ?
                  <Loader2 className="animate-spin" />
                  : playing ?
                    <Pause className="size-10" />
                    : <Icons.Play className="size-10" />}
              </button>
            </TooltipTrigger>
            <TooltipContent>{playing ? "Pause" : "Play"}</TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger
              disabled={songsQueue.length - 1 === currentIndex}
              asChild
            >
              <button
                aria-label="Next"
                onClick={skipToNext}
                className={cn(
                  `hidden lg:block disabled:text-muted-foreground disabled:cursor-not-allowed`
                )}
                disabled={songsQueue.length - 1 === currentIndex}
              >
                <Icons.SkipForward className="size-10" />
              </button>
            </TooltipTrigger>
            <TooltipContent
              className={cn({
                "text-muted-foreground": songsQueue.length - 1 === currentIndex,
              })}
            >
              Next
            </TooltipContent>
          </Tooltip>

          {/* <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                aria-label={isShuffle ? "Shuffling" : "Shuffle"}
                onClick={() => setIsShuffle(!isShuffle)}
                className={cn(
                  "hidden lg:block",
                  !isShuffle && "text-muted-foreground"
                )}
              >
                <Shuffle strokeWidth={2.35} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {isShuffle ? "Shuffling" : "Shuffle"}
            </TooltipContent>
          </Tooltip> */}
        </div>

        <div className="hidden w-1/3 items-center justify-end gap-4 lg:flex">
          <p className="shrink-0 text-sm text-muted-foreground">
            {formatDuration(pos, pos > 3600 ? "hh:mm:ss" : "mm:ss")}
            {" / "}
            {formatDuration(duration, duration > 3600 ? "hh:mm:ss" : "mm:ss")}
          </p>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              aria-label={muted ? "Unmute" : "Mute"}
              // disabled={!isReady || muted}
              disabled={true}
              // onClick={() => mute(!muted)}
              className="disabled:text-muted-foreground"
            >
              {/* {muted ? ( */}
              {volume === 0 ?
                <VolumeX />
                : volume < 0.33 ?
                  <Volume />
                  : volume < 0.66 ?
                    <Volume1 />
                    : <Volume2 strokeWidth={2} />}
            </button>

            <Slider
              aria-label="Volume"
              // disabled={!isReady || muted}
              disabled={!isReady}
              value={[volume * 100]}
              defaultValue={[75]}
              onValueChange={([volume]) => {
                setVolume(volume / 100);
              }}
              className="w-44"
            >
              <SliderTrack className="h-1 cursor-pointer">
                <SliderRange
                  className={cn((!isReady || muted) && "bg-accent")}
                />
              </SliderTrack>

              <SliderThumb
                aria-label="Volume slider"
                className={cn(
                  "size-4 cursor-pointer",
                  (!isReady || muted) && "bg-accent"
                )}
              />
            </Slider>

            <span className="w-8 text-sm font-medium">
              {(volume * 100).toFixed()}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
