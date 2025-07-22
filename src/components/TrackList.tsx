import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { tracks } from '@/server/tracks';

export default function TrackList() {
  const data = tracks;

  return (
    <div>
      <Table>
        <TableCaption>A list of your Tracks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead className="text-right">Src</TableHead>
            <TableHead className="text-right">Cover</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((track) => (
            <TableRow>
              <TableCell>{track.id}</TableCell>
              <TableCell>{track.title}</TableCell>
              <TableCell>{track.artist}</TableCell>
              <TableCell className="text-right">{track.src}</TableCell>
              <TableCell className="text-right">{track.cover}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* {JSON.stringify(data)} */}
    </div>
  );
}
