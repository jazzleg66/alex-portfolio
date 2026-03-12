import { PixelButton, PixelBadge, PixelAvatar } from "@/components/ui";

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
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              I&apos;M ALEX CHANG
            </h1>

            {/* Subtitle */}
            <p
              className="text-[var(--red)]"
              style={{ fontSize: "1.125rem", lineHeight: "2" }}
            >
              MBA. EX-HOTELIE. AI BUILDER.
            </p>

            {/* Bio */}
            <p
              className="text-[var(--black)] border-l-[3px] border-[var(--tan)] pl-4"
              style={{ fontSize: "1rem", lineHeight: "2" }}
            >
              From hospitality &amp; real estate to building AI-powered
              products with code. I leverage AI to turn ideas into
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

          {/* Right: Pixel art avatar */}
          <div className="flex-shrink-0 bg-white" style={{ boxShadow: "4px 4px 0px var(--black)" }}>
            <PixelAvatar size={220} />
          </div>

        </div>
      </div>
    </section>
  );
}
