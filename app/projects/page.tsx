import ProjectsSection from "@/components/sections/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Alex Chang — AI agents, web apps, and vibe-coded products.",
  openGraph: {
    title: "Projects | Alex Chang",
    description: "Projects built by Alex Chang — AI agents, web apps, and vibe-coded products.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
