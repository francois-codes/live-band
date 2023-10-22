import { ISong } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchSong = async (title: string) => {
  const { data } = await axios.get<ISong>(
    `/api/song/${encodeURIComponent(title)}`
  );
  return data;
};

export const useSong = (title: string) => {
  const [song, setSong] = useState<ISong | undefined>(undefined);

  useEffect(() => {
    fetchSong(title).then((content) => {
      setSong(content);
    });
  }, [title]);

  return song;
};
