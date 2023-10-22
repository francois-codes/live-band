import { SongLineProps } from "@/types";
import { FC } from "react";

export const Section: FC<SongLineProps> = ({ content }) => {
  return (
    <h3 className="pb-2">
      <strong>{content}</strong>
    </h3>
  );
};
