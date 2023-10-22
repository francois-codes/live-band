import { Song } from "@/lib/song";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title: encodedTitle } = req.query;
  const title = decodeURIComponent(encodedTitle as string);

  const song = new Song(title);
  await song.load();
  res.status(200).json(song.songData);
}
