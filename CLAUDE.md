# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pressure washing business website (myciecisnieniem.pl) with a Next.js 16 blog at `/blog` and embedded Sanity CMS Studio at `/studio`. The original static HTML site (Webflow export) is served from `public/` via Next.js rewrites.

## Commands

```bash
npm run dev          # Dev server with Turbopack (port 3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
```

## Architecture

**Hybrid static + dynamic site:**
- `/` → rewrites to `public/home.html` (original Webflow HTML, no React overhead)
- `/blog` → Next.js App Router (server components, Sanity data)
- `/blog/[slug]` → Individual posts with JSON-LD, FAQ, before/after gallery
- `/studio` → Embedded Sanity Studio (client component)
- `/sitemap.xml`, `/robots.txt`, `/llms.txt` → Dynamic Next.js route handlers

**Data flow:** Sanity CMS → GROQ queries (`src/sanity/lib/queries.ts`) → Server Components → Pre-rendered HTML

**Key config:** Rewrites in `next.config.ts` bridge static HTML and Next.js. The `public/` directory contains the entire original site (HTML, CSS, JS, images, fonts).

## Tech Stack

- **Next.js 16** (App Router, Turbopack, React 19, async params/searchParams)
- **Sanity v3** with next-sanity (GROQ queries, Portable Text, image CDN)
- **Tailwind CSS v4** (CSS-based config via `@theme` in `globals.css`, NOT `tailwind.config.js`)
- **TypeScript** (strict mode, path alias `@/*` → `./src/*`)

## Sanity Schemas

Three document types in `src/sanity/schemas/`:
- **post** — title, slug, mainImage, excerpt, body (Portable Text), categories, author, `beforeAfter[]` (inline image pairs), `faq[]` (inline Q&A)
- **category** — title, slug, description
- **author** — name, image

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
```

## Patterns to Follow

- All blog pages are **React Server Components** (async). Only `BeforeAfter.tsx` and Studio use `'use client'`.
- Tailwind v4: colors defined as CSS custom properties in `src/app/globals.css` `@theme` block, not in a JS config file.
- GROQ queries use `defineQuery()` from next-sanity in `src/sanity/lib/queries.ts`.
- JSON-LD structured data injected via `src/components/JsonLd.tsx` (server-generated schema.org data only).
- Blog post pages use `generateStaticParams()` and `generateMetadata()` for SSG + SEO.
- Next.js 16 breaking change: `params` and `searchParams` are Promises — must be awaited.

## Theme Colors

| Token | Hex | Usage |
|-------|-----|-------|
| bg | #0f0f10 | Page background |
| bg-gray | #27262a | Card/section background |
| primary | #169fb5 | Teal accent, links, CTAs |
| secondary | #f0a989 | Peach accent |

## Language

All user-facing text is in **Polish**. Sanity content is also in Polish.
