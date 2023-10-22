import { Chord } from "@/lib/chord/chord";
import { FC } from "react";

interface ChordProps {
  label: string;
}

export const ChordLabel: FC<ChordProps> = ({ label }) => {
  const chord = new Chord(label);

  return <span className="bg-gray-200 dark:bg-gray-600">{chord.label}</span>;
};
