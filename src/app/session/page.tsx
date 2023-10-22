"use client";
import { SongComponent } from "@/components/SongComponents/SongComponent";

export default function Page() {
  const songTitle = "ABBA - Gimme Gimme Gimme";

  return <SongComponent songTitle={songTitle} />;
}
