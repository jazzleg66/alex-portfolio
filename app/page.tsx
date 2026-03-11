import { PixelButton, PixelCard, SectionTitle, PixelBadge } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-8">
      <SectionTitle>UI Component Preview</SectionTitle>

      {/* Buttons */}
      <section className="flex flex-wrap gap-4">
        <PixelButton>Black Button</PixelButton>
        <PixelButton variant="red">Red Button</PixelButton>
        <PixelButton variant="green">Green Button</PixelButton>
        <PixelButton href="mailto:s996639@gmail.com" variant="black">Email Me</PixelButton>
      </section>

      {/* Badges */}
      <section className="flex flex-wrap gap-3">
        <PixelBadge>Tan Badge</PixelBadge>
        <PixelBadge variant="black">Black Badge</PixelBadge>
        <PixelBadge variant="red">Red Badge</PixelBadge>
        <PixelBadge variant="green">Green Badge</PixelBadge>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-6 max-w-xl">
        <PixelCard>
          <h3 className="text-[1rem] mb-4">Project Card</h3>
          <p className="text-[0.75rem] leading-loose mb-4">
            A sample project description goes here.
          </p>
          <div className="flex gap-2 mb-4">
            <PixelBadge>Next.js</PixelBadge>
            <PixelBadge variant="green">TypeScript</PixelBadge>
          </div>
          <PixelButton variant="black">View Project</PixelButton>
        </PixelCard>
      </section>
    </main>
  );
}
