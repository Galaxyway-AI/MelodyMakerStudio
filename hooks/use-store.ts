import { atom, createStore, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { CurrentSong } from "@/types/current-song";

const store = createStore();

const songsQueueAtom = atomWithStorage<CurrentSong[]>("songsQueue", []);
export function useSongsQueue() {
  return useAtom(songsQueueAtom, { store });
}

const isDashboardSidebarMinimizedAtom = atomWithStorage("is_minimized", false);

export const useIsDashboardSidebarMinimized = () => {
  return useAtom(isDashboardSidebarMinimizedAtom, { store });
};

const currentSongIndexAtom = atomWithStorage("current_song_index", 0);

export function useCurrentSongIndex() {
  return useAtom(currentSongIndexAtom, { store });
}

const playerCurrentTimeAtom = atom(0);

export function usePlayerCurrentTime() {
  return useAtom(playerCurrentTimeAtom, { store });
}

const isPlayingAtom = atom(false);

export function useIsPlayerInit() {
  return useAtom(isPlayingAtom, { store });
}

const isTyping = atom(false);

export function useIsTyping() {
  return useAtom(isTyping, { store });
}
