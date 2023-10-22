import { ISong, ISongLine, LineType } from "@/types";
import path from "path";
import fs from "fs";
import * as R from "ramda";
import { Chord } from "../chord/chord";

export const songsFolder = path.resolve(process.cwd(), "./src/songs");

export class Song {
  title: string;
  rawContent?: string;
  songData?: ISong;

  constructor(title: string) {
    this.title = title;
  }

  async load() {
    const file = await fs.promises.readFile(
      path.resolve(songsFolder, this.title + ".txt")
    );
    const [title, author, key, tags, _, ...lines] = R.split(
      /\r?\n/,
      file.toString()
    );

    this.songData = {
      title,
      author,
      key,
      tags: tags.split(" "),
      lines: this.parseLines(lines)
    };
  }

  private parseLines(lines: string[]): ISongLine[] {
    const songLines = lines.map((line, index) => {
      if (line === "") {
        return {
          type: LineType.break,
          content: "(...)"
        };
      }

      if (line.startsWith("#")) {
        return {
          type: LineType.Section,
          content: line
        };
      }

      if (this.hasChords(line)) {
        return {
          type: LineType.Chords,
          content: line
        };
      }

      return {
        type: LineType.Lyrics,
        content: line
      };
    });

    return songLines.map((line, index) => {
      if (
        line.type === LineType.break &&
        index > 1 &&
        songLines[index - 1].type === LineType.Chords
      ) {
        return {
          type: LineType.Spacer,
          content: "(...)"
        };
      }

      if (index > 1 && songLines[index - 1].type === LineType.Section) {
        if (line.content !== "") {
          return {
            ...line,
            type: LineType.Chords
          };
        }
      }

      if (index > 1 && songLines[index - 1].type === LineType.Chords) {
        return {
          ...line,
          type: LineType.Lyrics
        };
      }

      return line;
    });
  }

  private hasChords(line: string) {
    const trimmedLine = line.trim();

    return (
      Chord.CHORD_REGEX.test(line) ||
      Chord.CHORD_STARTERS.some((str) => trimmedLine.startsWith(str))
    );
  }
}
