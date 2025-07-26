'use client';

import { Button } from '@/components/ui/button';
import { usePlayerStore } from '@/stores/playerStore';
import { useEffect, useRef } from 'react';
// import TrackList from "@/components/TrackList";

export default function Player() {
  const { isPlaying, play, pause, resume } = usePlayerStore();
  const audioref = useRef<HTMLAudioElement>(null);
  const src = '/SongfortheBeyond.mp3';

  useEffect(() => {
    const audio = audioref.current;

    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  return (
    <div>
      <h1>music player</h1>
      <br />
      <audio ref={audioref} src={src} preload="auto" />
      <br />

      <Button onClick={play}>play</Button>
      <Button onClick={pause}>pause</Button>
      <Button onClick={resume}>resume</Button>
    </div>
  );
}
