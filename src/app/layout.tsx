import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Band 🤘 🎸 🎤 🎹 🥁",
  description: "LiveBand.fr - Live karaoke app",
  metadataBase: new URL("https://www.liveband.fr/"),
  openGraph: {
    title: "Live Band 🤘 🎸 🎤 🎹 🥁",
    description: "LiveBand.fr - Live karaoke app",
    type: "website",
    url: "https://www.liveband.fr/",
    images: [
      {
        url: "/live-band-logo.png"
      }
    ]
  },
  icons: [
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    },
    {
      url: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon"
    },
    {
      url: "apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    {
      url: "/safari-pinned-tab.svg",
      sizes: "any",
      type: "mask-icon"
    }
  ],
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between">
          <div className="bg-slate-100 dark:bg-slate-900">{children}</div>
          <div className="py-4 grid text-center w-full">
            <footer>
              <p>&copy; 2023 - Happi Karaoké</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
