# Alex Chang Portfolio — Institutional Memory

## Project Overview
Personal portfolio website for Alex Chang. Built with Next.js 14.
Purpose: Showcase vibe coding projects and attract business contacts.

## Owner
- Name: Alex Chang
- Email: s996639@gmail.com
- LinkedIn: https://www.linkedin.com/in/alexwcchang
- GitHub: https://github.com/jazzleg66

## Stack
- Framework: Next.js 14 (App Router), TypeScript
- Styling: Tailwind CSS + custom CSS
- Font: Press Start 2P (Google Fonts)
- Hosting: Vercel — https://alexwcchang.vercel.app

## Design System
- Style: Classic 8-bit pixel art, warm cream aesthetic
- Colors: --cream #FAF3E0 | --black #1A1A1A | --red #C0392B | --green #2C7A2C | --tan #E8D5B7
- Pixel border rule: 3px solid black border + 4px 4px 0px black box-shadow (no blur radius)
- No rounded corners anywhere (rounded-none enforced globally)
- No gradients. No blur shadows. Pure flat pixel aesthetic.
- Spacing: multiples of 4px or 8px only
- Typography scale: h1 2rem | h2 1.5rem | h3 1rem | body 0.75rem | line-height 2

## Folder Structure
- app/                  → Next.js App Router pages
- components/layout/   → Navbar, Footer
- components/ui/       → PixelButton, PixelCard, SectionTitle, PixelBadge
- components/sections/ → HeroSection, AboutSection, etc.
- lib/                 → projects.ts (project data)
- styles/globals.css   → CSS variables and base styles

## Pages
- / (Home/Hero)
- /about
- /projects
- /skills
- /contact

## Contact Method
- Simple mailto: link — no backend, no form submission
- Email: s996639@gmail.com
- LinkedIn: https://www.linkedin.com/in/alexwcchang

## Build Phases & Status
- [x] Phase 1: Project setup, fonts, folder structure, Git, CLAUDE.md
- [x] Phase 2: Core UI components (PixelButton, PixelCard, SectionTitle, PixelBadge)
- [x] Phase 3: Navbar & root layout
- [x] Phase 4: Hero section
- [x] Phase 5: About page
- [x] Phase 6: Projects page
- [x] Phase 7: Skills page
- [x] Phase 8: Contact page
- [x] Phase 9: SEO & polish

## Session Instructions for Claude Code
- Always read this file at the start of every session
- After completing a phase, mark it [x] in the Build Phases section above
- After completing a phase, remind Alex to run: git add . && git commit -m "feat: phase X — [description]"
- Never use rounded corners, gradients, or blur shadows
- Always use Press Start 2P for all text
- Keep all new components in their correct folders per structure above

## Decisions Log
- 2026: Chose static mailto contact (no backend needed)
- 2026: Animations deferred to Phase 2 (post-launch)
- 2026: Placeholder projects at launch, real content added later
