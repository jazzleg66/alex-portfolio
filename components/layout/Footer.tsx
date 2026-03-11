export default function Footer() {
  return (
    <footer
      className="w-full bg-[var(--black)] border-t-[3px] border-[var(--black)] mt-auto"
      style={{ fontFamily: "var(--font-press-start), monospace" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--tan)] text-[0.75rem]">
          © 2026 Alex Chang. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/jazzleg66"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cream)] text-[0.75rem] hover:text-[var(--red)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexwcchang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cream)] text-[0.75rem] hover:text-[var(--red)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:s996639@gmail.com"
            className="text-[var(--cream)] text-[0.75rem] hover:text-[var(--red)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
