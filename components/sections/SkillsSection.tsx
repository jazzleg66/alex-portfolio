import { SectionTitle, PixelBadge } from "@/components/ui";

const skillCategories = [
  {
    icon: "🤖",
    label: "AI & LLM TOOLS",
    skills: ["Claude Code", "Claude API", "GPT-4", "Cursor"],
  },
  {
    icon: "💻",
    label: "FRONTEND",
    skills: ["Next.js", "React", "Nuxt 3", "Vue 3", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: "🔧",
    label: "BACKEND",
    skills: ["Flask", "Python", "Node.js"],
  },
  {
    icon: "🗄",
    label: "DATABASE",
    skills: ["Supabase", "SQLite"],
  },
  {
    icon: "🛠",
    label: "DEV TOOLS",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    icon: "📊",
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
        {skillCategories.map(({ icon, label, skills }) => (
          <div key={label}>
            {/* Category header */}
            <h3
              className="text-[var(--black)] mb-4 pb-2 border-b-[3px] border-[var(--black)] inline-block"
              style={{ fontSize: "1.125rem" }}
            >
              {icon} {label}
            </h3>

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
