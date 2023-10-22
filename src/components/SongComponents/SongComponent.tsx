import { FC, useState } from "react";
import { SongWrapper } from "./SongWrapper";
import { SongLine } from "./SongLine";
import { useSong } from "@/lib/song/useSong";
import { useAutoScroller, useKeyboardShortcut } from "@/lib";
import { KEYS } from "@/lib/consts";
import { ToggleDarkMode } from "../Settings/ToggleDarkMode";

import { Card, CardContent } from "@/components/ui/card";

const animate = (key: string) => {
  const el = document.getElementById("key-stroke");
  if (!el) return;

  el.classList.add("animate-fade-in-out");
  el.innerHTML = `key pressed: ${key}`;

  setTimeout(() => {
    el.classList.remove("animate-fade-in-out");
  }, 2 * 1000);
};

export const SongComponent: FC<{ songTitle: string }> = ({ songTitle }) => {
  const song = useSong(songTitle);

  const [scrolling, setScrolling] = useState(false);

  const scroller = useAutoScroller();

  useKeyboardShortcut(
    {
      key: [KEYS.u, KEYS.Space],
      handler: () => {
        animate('"U" <br />start/stop scrolling');
        const action = scrolling
          ? scroller.stopScrolling
          : scroller.startScrolling;
        action();

        setScrolling(!scrolling);
      }
    },
    [scrolling]
  );

  useKeyboardShortcut({
    key: KEYS.add,
    handler: () => {
      animate('"+" <br /> increase scrolling speed');
      scroller.increaseScrollSpeed();
    }
  });

  useKeyboardShortcut({
    key: KEYS.subtract,
    handler: () => {
      animate('"-" <br /> decrease scrolling speed');
      scroller.decreaseScrollSpeed();
    }
  });

  useKeyboardShortcut({
    key: KEYS.t,
    handler: () => {
      animate('"T" <br />back to top and stop scrolling');
      scroller.stopScrolling();
      setScrolling(false);

      window.scrollTo({ left: 0, top: 0 });
    }
  });

  if (!song) return null;

  return (
    <>
      <div className="max-w-5xl w-full items-start flex-col justify-between font-mono text-sm lg:flex pb-8">
        <h1 className="text-3xl">{song.title}</h1>
        <h2 className="text-xl text-muted-foreground">{song.author}</h2>
      </div>
      <Card className="w-240 fixed top-24 right-8 pt-6">
        <CardContent className="grid gap-4">
          <ToggleDarkMode />
          <div>Scrolling Speed: {scrolling ? scroller.scrollSpeed : 0} </div>
        </CardContent>
      </Card>

      <Card
        id="key-stroke"
        className="fixed bottom-16 right-16 w-60 min-w-60 py-6 text-center opacity-0"
      >
        <CardContent className="grid gap-4"></CardContent>
      </Card>

      <SongWrapper songTitle={song.title}>
        {song.lines.map((line, id) => (
          <SongLine key={id} {...line} />
        ))}
      </SongWrapper>
    </>
  );
};
