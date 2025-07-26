'use client';

import PlayerButton from '@/components/PlayerButton';
import TrackList from '@/components/TrackList';

export default function Home() {
  const mySong = '/SongfortheBeyond.mp3';
  const audioElement = new Audio(mySong);

  const play = () => {
    audioElement.play();
  };
  const pause = () => {
    audioElement.pause();
  };

  return (
    <div>
      <h1>music player home</h1>
      <p>test music player</p>
      {audioElement.src}
      <br />
      <br />
      <button onClick={play}>Play Song</button>
      <button onClick={pause}>Pause Song</button>
      <TrackList />
      <PlayerButton />
    </div>
  );
}
