import SkillsSection from "@/components/sections/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tech stack and skills of Alex Chang — AI tools, frontend, backend, and business.",
  openGraph: {
    title: "Skills | Alex Chang",
    description: "Tech stack and skills of Alex Chang — AI tools, frontend, backend, and business.",
    type: "website",
  },
};

export default function SkillsPage() {
  return <SkillsSection />;
}
