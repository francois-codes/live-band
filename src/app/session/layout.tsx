import { Menu } from "@/components/Menu/Menu";
import { SongsProvider } from "@/components/SongsContext/SongsContext";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />

      <main className="flex min-h-screen flex-col items-start justify-between mt-16 p-16">
        <SongsProvider>{children}</SongsProvider>
      </main>
    </>
  );
}
