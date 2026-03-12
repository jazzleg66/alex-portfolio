export type ProjectStatus = "LIVE" | "IN PROGRESS" | "ARCHIVED";

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  url: string;
};

export const projects: Project[] = [
  {
    id: "roboverse",
    name: "BOWL HEAL",
    description:
      "A mindfulness and sleep aid application built for iOS, designed around the meditative qualities of Tibetan singing bowls. The app allows users to browse and play a curated library of singing bowl recordings — each tuned to different frequencies associated with relaxation, stress relief, and sleep induction.",
    techStack: ["Nuxt 3", "Supabase", "Flask"],
    status: "IN PROGRESS",
    url: "#",
  },
  {
    id: "ai-startup-agent",
    name: "AI STARTUP AGENT",
    description:
      "8-agent AI pipeline that researches markets, validates ideas, and generates full startup concepts autonomously.",
    techStack: ["Claude API", "Python"],
    status: "IN PROGRESS",
    url: "#",
  },
  {
    id: "robot-home",
    name: "ROBOT HOME",
    description:
      "Chinese robotics news aggregation site. Scrapes and surfaces the latest AI & robotics news for Chinese readers.",
    techStack: ["Flask", "React", "SQLite"],
    status: "ARCHIVED",
    url: "#",
  },
  {
    id: "portfolio",
    name: "PORTFOLIO SITE",
    description:
      "This website. Built with Next.js 14 and a classic 8-bit pixel art design system.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "LIVE",
    url: "https://github.com/jazzleg66/alex-portfolio",
  },
];
