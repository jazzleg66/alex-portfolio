import AboutSection from "@/components/sections/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Alex Chang — MBA, vibe coder, and AI builder based in Taiwan.",
  openGraph: {
    title: "About | Alex Chang",
    description: "About Alex Chang — MBA, vibe coder, and AI builder based in Taiwan.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
