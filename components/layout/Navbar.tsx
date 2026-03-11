"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills",   href: "/skills" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="w-full bg-[var(--black)] border-b-[3px] border-[var(--black)]"
      style={{ fontFamily: "var(--font-press-start), monospace" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--cream)] text-[0.75rem] hover:text-[var(--red)] transition-colors"
        >
          ALEX.DEV
        </Link>

        {/* Nav links */}
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    "text-[0.55rem] transition-colors " +
                    (isActive
                      ? "text-[var(--red)] underline underline-offset-4"
                      : "text-[var(--cream)] hover:text-[var(--red)]")
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
