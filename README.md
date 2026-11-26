# Srinivasan N — Portfolio

Personal portfolio for **Srinivasan N**, Backend Engineer (Node.js | AWS).

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Theming:** next-themes (dark default, light toggle)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, theme provider, nav/footer
│   ├── page.tsx         # Homepage composing all sections
│   └── globals.css      # Tailwind layers + design tokens
├── components/          # Hero, About, Skills, Experience, Projects, etc.
└── data/
    └── portfolio.ts     # Single source of truth for all content
```

## Editing Content

All portfolio content (profile, skills, experience, projects, education) lives in
[src/data/portfolio.ts](src/data/portfolio.ts). Edit that file to update the site.

## Resume

Place your resume as `public/Srinivasan_Backend_Resume.pdf` — the Hero section's
"Download Resume" button points to that file.

## Deploy

The simplest path is [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. Import on Vercel. No config needed.
