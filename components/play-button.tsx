"use client";

import React from "react";

import {
  useCurrentSongIndex,
  useIsPlayerInit,
  useSongsQueue,
} from "@/hooks/use-store";

type PlayButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  songId: string;
};

export function PlayButton(props: PlayButtonProps) {
  const { songId, children, ...restProps } = props;

  const [, setIsPlayerInit] = useIsPlayerInit();
  const [, setCurrentIndex] = useCurrentSongIndex();

  const [songsQueue] = useSongsQueue();

  async function playHandler() {
    const songIndex = songsQueue.findIndex((song) => song.id === songId);

    setCurrentIndex(songIndex);
    setIsPlayerInit(true);
  }

  return (
    <button aria-label="Play" onClick={playHandler} {...restProps}>
      {children}
    </button>
  );
}
