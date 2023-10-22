import { SongLineProps } from "@/types";
import { FC } from "react";

export const Spacer: FC<SongLineProps> = ({ content }) => {
  return <div>{content}</div>;
};
