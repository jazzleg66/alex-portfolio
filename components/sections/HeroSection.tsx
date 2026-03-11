import { PixelButton, PixelBadge } from "@/components/ui";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16">
      <div
        className="w-full max-w-5xl border-[3px] border-[var(--black)] p-8 md:p-12"
        style={{ boxShadow: "6px 6px 0px var(--black)" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Welcome badge */}
            <div>
              <PixelBadge variant="green">WELCOME!</PixelBadge>
            </div>

            {/* H1 */}
            <h1
              className="text-[var(--black)] leading-tight"
              style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
            >
              I&apos;M ALEX CHANG
            </h1>

            {/* Subtitle */}
            <p
              className="text-[var(--red)]"
              style={{ fontSize: "0.75rem", lineHeight: "2" }}
            >
              MBA. VIBE CODER. AI BUILDER.
            </p>

            {/* Bio */}
            <p
              className="text-[var(--black)] border-l-[3px] border-[var(--tan)] pl-4"
              style={{ fontSize: "0.6rem", lineHeight: "2.5" }}
            >
              From hospitality &amp; real estate to building AI-powered
              products with code. I use Claude Code to turn ideas into
              shipped products — fast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <PixelButton href="/projects" variant="black">
                VIEW PROJECTS
              </PixelButton>
              <PixelButton href="/contact" variant="red">
                CONTACT ME
              </PixelButton>
            </div>
          </div>

          {/* Right: Avatar placeholder */}
          <div className="flex-shrink-0">
            <div
              className="w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center border-[3px] border-dashed border-[var(--black)] bg-[var(--tan)]"
              style={{ fontSize: "0.5rem", lineHeight: "2.5" }}
            >
              <span className="text-[2rem]">👾</span>
              <span className="text-[var(--black)] mt-2">AVATAR</span>
              <span className="text-[var(--black)] opacity-50 mt-1">200×200</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
