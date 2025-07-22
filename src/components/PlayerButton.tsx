'use client';

import { Button } from './ui/button';
import { usePlayerStore } from '@/stores/playerStore';
export default function PlayerButton() {
  const play = usePlayerStore((state) => state.play);
  const pause = usePlayerStore((state) => state.pause);
  const resume = usePlayerStore((state) => state.resume);
  const next = usePlayerStore((state) => state.next);
  const prev = usePlayerStore((state) => state.prev);

  return (
    <>
      <div className="flex justify-evenly">
        <Button onClick={() => play}>play</Button>
        <Button onClick={() => pause}>pause</Button>
        <Button onAbort={() => resume}>resume</Button>
        <Button onClick={() => next}>next</Button>
        <Button onClick={() => prev}>prev</Button>
      </div>
    </>
  );
}
