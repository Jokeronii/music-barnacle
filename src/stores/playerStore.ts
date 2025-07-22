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
  play(index) {
    console.log('play', index);
    set({ isPlaying: true, currentIndex: index });
  },
  pause() {
    console.log('pause');
    set({ isPlaying: false });
  },
  resume() {
    set({ isPlaying: true });
  },

  //playlist = [track1,track2,track3]
  //track1 currentIndex= [0]
  //then nextIndex = currentIndex + 1
  next() {
    const { currentIndex, playList } = get();
    const nextIndex = (currentIndex + 1) % playList.length;
    set({ currentIndex: nextIndex, isPlaying: true });
  },

  prev() {
    const { currentIndex, playList } = get();
    const prevIndex = (currentIndex - 1 + playList.length) % playList.length;
    set({ currentIndex: prevIndex, isPlaying: true });
  },

  setVolume(v) {
    set({ volume: v });
  },
}));
