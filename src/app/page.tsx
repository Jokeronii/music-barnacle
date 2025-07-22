import PlayerButton from '@/components/PlayerButton';
import TrackList from '@/components/TrackList';

export default function Home() {
  return (
    <div>
      <h1>music player home</h1>
      <TrackList />
      <PlayerButton />
    </div>
  );
}
