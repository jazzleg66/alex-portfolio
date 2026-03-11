import { SectionTitle, PixelCard } from "@/components/ui";

const playerInfo = [
  { label: "LOCATION", value: "TAIWAN 🇹🇼" },
  { label: "EDUCATION", value: "MBA, CEIBS" },
  { label: "BACKGROUND", value: "HOSPITALITY → REAL ESTATE → AI" },
  { label: "STATUS", value: "BUILDING" },
];

const quests = [
  "Building AI-powered web products",
  "Learning full-stack dev via Claude Code",
  "Exploring entrepreneurship opportunities",
];

export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle>ABOUT ME</SectionTitle>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Left: Player Info */}
        <div className="md:w-80 flex-shrink-0">
          <PixelCard className="bg-[var(--tan)]">
            <h3
              className="text-[var(--black)] mb-6 pb-3 border-b-[3px] border-[var(--black)]"
              style={{ fontSize: "0.75rem" }}
            >
              ▶ PLAYER INFO
            </h3>
            <ul className="flex flex-col gap-5">
              {playerInfo.map(({ label, value }) => (
                <li key={label} style={{ fontSize: "0.5rem", lineHeight: "2" }}>
                  <span className="text-[var(--red)]">▶ {label}</span>
                  <br />
                  <span className="text-[var(--black)] pl-3">{value}</span>
                </li>
              ))}
            </ul>
          </PixelCard>
        </div>

        {/* Right: Bio + Quests */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Bio */}
          <PixelCard>
            <h3
              className="text-[var(--black)] mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              MY STORY
            </h3>
            <p
              className="text-[var(--black)]"
              style={{ fontSize: "0.6rem", lineHeight: "2.8" }}
            >
              I started my career in hospitality and real estate investment —
              industries built on relationships, timing, and execution. Then I
              discovered vibe coding.
            </p>
            <p
              className="text-[var(--black)] mt-4"
              style={{ fontSize: "0.6rem", lineHeight: "2.8" }}
            >
              Now I use Claude Code and modern AI tools to build web products
              from scratch — no CS degree required. I turn ideas into shipped
              products fast, combining my business background with AI-assisted
              development.
            </p>
            <p
              className="text-[var(--black)] mt-4"
              style={{ fontSize: "0.6rem", lineHeight: "2.8" }}
            >
              Based in Taiwan. Interested in AI, investing, and entrepreneurship.
              Always building.
            </p>
          </PixelCard>

          {/* Current Quests */}
          <PixelCard className="bg-[var(--tan)]">
            <h3
              className="text-[var(--black)] mb-6 pb-3 border-b-[3px] border-[var(--black)]"
              style={{ fontSize: "0.75rem" }}
            >
              ⚔ CURRENT QUESTS
            </h3>
            <ul className="flex flex-col gap-4">
              {quests.map((quest) => (
                <li
                  key={quest}
                  className="flex items-start gap-3"
                  style={{ fontSize: "0.55rem", lineHeight: "2" }}
                >
                  <span className="text-[var(--green)] flex-shrink-0">⚔</span>
                  <span className="text-[var(--black)]">{quest}</span>
                </li>
              ))}
            </ul>
          </PixelCard>

        </div>
      </div>
    </section>
  );
}
