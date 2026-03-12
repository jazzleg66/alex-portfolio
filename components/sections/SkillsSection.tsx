import { SectionTitle, PixelBadge } from "@/components/ui";
import {
  IconAI,
  IconFrontend,
  IconBackend,
  IconDatabase,
  IconDevTools,
  IconBusiness,
} from "@/components/ui/PixelIcons";
import type { ComponentType } from "react";

type IconProps = { size?: number; className?: string };

const skillCategories: {
  Icon: ComponentType<IconProps>;
  label: string;
  skills: string[];
}[] = [
  {
    Icon: IconAI,
    label: "AI & LLM TOOLS",
    skills: ["Claude Code", "Claude API", "GPT-4", "Cursor"],
  },
  {
    Icon: IconFrontend,
    label: "FRONTEND",
    skills: ["Next.js", "React", "Nuxt 3", "Vue 3", "Tailwind CSS", "TypeScript"],
  },
  {
    Icon: IconBackend,
    label: "BACKEND",
    skills: ["Flask", "Python", "Node.js"],
  },
  {
    Icon: IconDatabase,
    label: "DATABASE",
    skills: ["Supabase", "SQLite"],
  },
  {
    Icon: IconDevTools,
    label: "DEV TOOLS",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    Icon: IconBusiness,
    label: "BUSINESS",
    skills: ["MBA", "Financial Modeling", "Real Estate Analysis"],
  },
];

export default function SkillsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle>SKILLS</SectionTitle>

      <p
        className="text-[var(--black)] mb-12"
        style={{ fontSize: "1rem", lineHeight: "1.8" }}
      >
        Here&apos;s my current tech stack — built through building.
      </p>

      <div className="flex flex-col gap-10">
        {skillCategories.map(({ Icon, label, skills }) => (
          <div key={label}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-[3px] border-[var(--black)] inline-flex">
              <Icon size={32} />
              <h3
                className="text-[var(--black)]"
                style={{ fontSize: "1.125rem" }}
              >
                {label}
              </h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((skill) => (
                <PixelBadge key={skill} variant="tan">
                  {skill}
                </PixelBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
