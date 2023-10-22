import axios from "axios";
import { useEffect, useState } from "react";

const loadSongs = async (cb: (songs: string[]) => void) => {
  const { data } = await axios.get("/api/song/list");

  cb(data);
};

export const useSongsList = () => {
  const [songs, setSongs] = useState<string[]>([]);

  useEffect(() => {
    loadSongs(setSongs);
  }, []);

  return songs;
};
