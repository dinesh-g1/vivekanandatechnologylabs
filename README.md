<p align="center">
  <a href="https://vivekanandatechnologylabs.com"><img src="https://img.shields.io/badge/vivekanandatechnologylabs.com-%23F0C0A0?style=flat-square" alt="Website"></a>
  <a href="#"><img src="https://img.shields.io/badge/Next.js-16-%23000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/React-19-%2361DAFB?style=flat-square&logo=react&logoColor=white" alt="React"></a>
  <a href="#"><img src="https://img.shields.io/badge/MUI-7-%23007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI"></a>
  <a href="#"><img src="https://img.shields.io/badge/Prisma-7-%232D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma"></a>
  <a href="#"><img src="https://img.shields.io/badge/PostgreSQL-16-%234169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL"></a>
</p>

# Vivekananda Technology Labs

**Bharat's Technological Renaissance.** A foundation website for a family of purpose-driven technology ventures, built with Next.js and MUI.

## Overview

The digital home of Vivekananda Technology Labs — a foundation bringing together purpose-driven ventures under one roof. The site presents the foundation's story, its family of businesses, the industries it serves, and its dharma-rooted core values.

## Features

- **Business directory** — browsable, SEO-friendly pages for each venture (list → detail, per-slug routes)
- **Industries** — the sectors the foundation operates in, with per-industry pages
- **About & founders** — the story, milestones, and founder profiles
- **Contact & newsletter** — contact form and newsletter signup backed by real API routes, persisted to PostgreSQL via Prisma
- **SEO** — `next-seo` metadata, auto-generated sitemap (`next-sitemap`) and `robots.ts`
- **Theme** — MUI `ThemeRegistry` with Emotion, fully typed UI components

## Tech Stack

| Layer | Stack |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| UI | MUI 7 + Emotion + Tailwind CSS 4 |
| Data | Prisma 7 → PostgreSQL 16 |
| Deploy | Docker Compose (app + db, health-checked) |

## Getting Started

```bash
npm install
cp .env.example .env   # set DATABASE_URL and NEXT_PUBLIC_SITE_URL
npx prisma migrate dev
npm run dev            # http://localhost:3000
```

Production:

```bash
docker compose up --build -d
```

## Data Model

`ContactSubmission` (contact form) · `Subscriber` (newsletter) · `BusinessPage` (venture pages, extensible) — see `prisma/schema.prisma`.
