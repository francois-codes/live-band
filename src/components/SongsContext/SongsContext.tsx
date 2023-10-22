"use client";
import { useSongsList } from "@/lib/useSongsList";
import { ISong } from "@/types";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from "react";

interface ISongsContext {
  songs?: string[];
  currentSong?: ISong;
  setCurrentSong: (song: ISong) => void;
}

const SongsContext = createContext<ISongsContext>({
  setCurrentSong: () => {
    throw new Error("not implemented");
  }
});

export const SongsProvider: FC<PropsWithChildren> = ({ children }) => {
  const songs = useSongsList();
  const [currentSong, setCurrentSong] = useState<ISong>();

  return (
    <SongsContext.Provider value={{ songs, currentSong, setCurrentSong }}>
      {children}
    </SongsContext.Provider>
  );
};

export const useSongsContext = () => {
  return useContext(SongsContext);
};
