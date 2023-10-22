"use client";
import { getSessions } from "@/lib/data/sessions";
import { useDarkTheme } from "@/lib/useDarkTheme";
import { useEffect } from "react";

export default function Home() {
  useDarkTheme();

  useEffect(() => {
    getSessions().then((sessions) => {
      console.log({ sessions });
    });
  }, []);
  return <div>hello</div>;
}
