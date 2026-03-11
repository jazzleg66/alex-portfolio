"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills",   href: "/skills" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[3px] bg-[var(--cream)] transition-all"
            style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}
          />
          <span
            className="block w-6 h-[3px] bg-[var(--cream)] transition-all"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[3px] bg-[var(--cream)] transition-all"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--black)] border-t-[3px] border-[var(--tan)]">
          <ul className="flex flex-col list-none m-0 p-0">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="border-b-[2px] border-[var(--tan)] border-opacity-30">
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      "block px-6 py-4 text-[0.55rem] transition-colors " +
                      (isActive
                        ? "text-[var(--red)]"
                        : "text-[var(--cream)] hover:text-[var(--red)]")
                    }
                  >
                    {isActive ? "▶ " : ""}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
