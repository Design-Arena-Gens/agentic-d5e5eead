import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata = {
  title: "Gunahon Ka Devta – Cinematic Reel Script",
  description:
    "A 60-second cinematic reel script reimagining the love and sacrifice of Chander and Sudha in Allahabad.",
  openGraph: {
    title: "Gunahon Ka Devta – Cinematic Reel Script",
    description:
      "Experience a cinematic, slow-paced retelling of Chander and Sudha's journey through a crafted reel storyboard.",
    url: "https://agentic-d5e5eead.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunahon Ka Devta – Cinematic Reel Script",
    description:
      "A 60-second cinematic reel storyboard for YouTube Shorts / Instagram Reels."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
