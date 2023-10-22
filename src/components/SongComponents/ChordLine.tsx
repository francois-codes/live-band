import { SongLineProps } from "@/types";
import { FC, Fragment } from "react";
import { ChordLabel } from "./Chord";
import { Chord } from "@/lib/chord/chord";

export const ChordLine: FC<SongLineProps> = ({ content }) => {
  const hasPrefix = content.startsWith("<");
  const chordLine = hasPrefix ? content.replace("<", "") : content;
  const className = hasPrefix ? "-ml-4" : "";

  return (
    <pre className={className}>
      {chordLine.split(/(\s+)/).map((word, id) => {
        const chordLabel = word.replace("|", "");
        const isChord = Chord.isChord(chordLabel);
        const hasBar = word.startsWith("|");

        return (
          <Fragment key={id}>
            {isChord && hasBar && "|"}
            {isChord ? <ChordLabel label={chordLabel} /> : word}
          </Fragment>
        );
      })}
    </pre>
  );
};
