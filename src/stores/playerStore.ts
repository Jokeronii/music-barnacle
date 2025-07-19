import { create } from 'zustand';

type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
};
type playerState = {
  //properties
  playList: Track[];
  currentIndex: number;
  isPlaying: boolean;
  volume: number;

  //methods
  setPlayList: (playList: Track[]) => void;

  play: (index: number) => void;
  pause: () => void;
  resume: () => void;
  next: () => void;
  prev: () => void;
  setVolume: (v: number) => void;
};

export const usePlayerStore = create<playerState>((set, get) => ({
  playList: [],
  currentIndex: 0,
  isPlaying: false,
  volume: 100,

  setPlayList(playList) {},
  play() {},
  pause() {
    set({ isPlaying: false });
  },
  resume() {
    set({ isPlaying: true });
  },
  next() {},

  prev() {},

  setVolume(v): number {
    return v;
  },
}));
