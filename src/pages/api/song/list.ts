import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { songsFolder } from "@/lib/song";

const getSongs = async () => {
  const files = await fs.promises.readdir(songsFolder);

  return files.flatMap((file) =>
    file.startsWith(".DS") ? [] : file.replace(".txt", "")
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const songs = await getSongs();
  res.status(200).json(songs);
}
