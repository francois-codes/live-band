import { SongLineProps } from "@/types";
import { FC } from "react";

export const Lyrics: FC<SongLineProps> = ({ content }) => {
  return <pre className="py-2">{content}</pre>;
};
