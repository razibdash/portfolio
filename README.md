# Razib Dash Premium Developer Portfolio

A recruiter-ready, multi-page developer portfolio built with Next.js App Router, TypeScript, TailwindCSS, Framer Motion, and MDX rendering.

## Features

- Multi-page App Router structure
- Dynamic project and blog detail routes
- Dark/light mode with localStorage persistence
- Framer Motion page transitions and stagger animations
- Project filtering by AI, Web, and Full Stack
- Certificate preview modal/lightbox
- MDX blog rendering with `next-mdx-remote/rsc`
- Contact form with client and API validation
- Scroll progress indicator
- Back-to-top button
- Custom cursor with hover labels and magnetic buttons
- Optimized local images with `next/image`
- Loading states and custom 404 page
- SEO metadata and OpenGraph defaults

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Customize

Update these files for your real portfolio content:

- `data/projects.ts`
- `content/blog/*.mdx`
- `data/certificates.ts`
- `data/skills.ts`
- `public/resume/razib-dash-resume.pdf`

The included resume PDF is a placeholder. Replace it with the final resume file using the same filename.
