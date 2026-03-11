import { PixelButton, PixelCard, SectionTitle } from "@/components/ui";

export default function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle>CONTACT</SectionTitle>

      <div className="flex justify-center">
        <PixelCard className="w-full max-w-xl flex flex-col items-center gap-8 py-12 text-center">

          {/* Envelope icon */}
          <div
            className="text-[3rem] border-[3px] border-[var(--black)] bg-[var(--tan)] w-24 h-24 flex items-center justify-center"
            style={{ boxShadow: "4px 4px 0px var(--black)" }}
          >
            ✉
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h2
              className="text-[var(--black)]"
              style={{ fontSize: "1.75rem", lineHeight: "1.6" }}
            >
              LET&apos;S BUILD SOMETHING
            </h2>
            <p
              className="text-[var(--black)]"
              style={{ fontSize: "1rem", lineHeight: "1.8" }}
            >
              Open to freelance projects, consulting,
              <br />
              and interesting collaborations.
            </p>
          </div>

          {/* Email button */}
          <PixelButton
            href="mailto:s996639@gmail.com"
            variant="black"
            className="text-[1rem] px-6 py-3"
          >
            ✉ EMAIL ME
          </PixelButton>

          {/* Divider */}
          <div className="w-full border-t-[3px] border-[var(--tan)]" />

          {/* Secondary links */}
          <div className="flex flex-col items-center gap-4">
            <p
              className="text-[var(--black)]"
              style={{ fontSize: "0.875rem", lineHeight: "1.8" }}
            >
              Or find me on:
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/alexwcchang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--black)] hover:text-[var(--red)] transition-colors underline underline-offset-4"
                style={{ fontSize: "1rem" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jazzleg66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--black)] hover:text-[var(--red)] transition-colors underline underline-offset-4"
                style={{ fontSize: "1rem" }}
              >
                GitHub
              </a>
            </div>
          </div>

        </PixelCard>
      </div>
    </section>
  );
}
