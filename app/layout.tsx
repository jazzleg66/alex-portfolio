import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Chang — Portfolio",
    template: "%s | Alex Chang",
  },
  description:
    "Personal portfolio of Alex Chang — MBA, vibe coder, and AI builder. Showcasing AI-powered products built with Claude Code.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexwcchang.vercel.app",
    siteName: "Alex Chang Portfolio",
    title: "Alex Chang — Portfolio",
    description:
      "MBA. Vibe Coder. AI Builder. Showcasing AI-powered products built with Claude Code.",
  },
  twitter: {
    card: "summary",
    title: "Alex Chang — Portfolio",
    description:
      "MBA. Vibe Coder. AI Builder. Showcasing AI-powered products built with Claude Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
