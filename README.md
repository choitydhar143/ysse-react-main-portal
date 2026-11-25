# YSSE Main Portal — Week 8 (React + Tailwind CSS)

A responsive multi-page student portal upgraded from the Week 7 React + Vite project. Tailwind CSS v4 is the primary styling system. React Router, existing data-driven pages, search/filter interactions, dynamic programme details, the Learning Catalog and frontend contact validation are retained.

> **Content and brand note:** The six programme cards, notice entries and homepage events are illustrative sample content, not verified official YSSE offerings or announcements. No organisational statistics are invented. The existing hosted YSSE logo asset from the Week 7 project is retained in the navbar and footer. Verify logo usage and replace the hosted asset with an approved official SVG/PNG if supplied by YSSE.

## Pages and routes

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Notices | `/notices` |
| Programs | `/programs` |
| Program details | `/programs/:id` |
| Contact | `/contact` |
| Learning Catalog (Week 7 extra feature) | `/learning-catalog` |
| Not found | `*` |

## Main features

- Responsive navigation with mobile menu and active route states
- Shared responsive footer and reusable Button, ProgramCard and NoticeCard components
- Home page: hero, About preview, programme cards, notices, sample upcoming events and CTA
- About page: introduction, mission, vision, What We Do, impact placeholder and Get Involved
- Notices page: six sample notices, search, category filtering and empty state
- Programs page: six photographic sample programme cards and category filter
- Dynamic program details, back navigation and invalid-ID handling
- Contact form: full name, email, subject, message, validation errors and success feedback
- Week 7 Learning Catalog preserved with search, topic/duration/level filters, sorting, saved/enrolled lists and light/dark mode
- Responsive layouts using Tailwind breakpoints, Flexbox, Grid, spacing, typography and interactive states

## Tech stack

React 18, Vite, React Router DOM 6, Tailwind CSS v4, JavaScript (JSX). No Bootstrap or Material UI.

## Requirements

- Node.js 18 or later
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The Vite production base is configured for this repository: `ysse-react-main-portal`.

1. Push the complete source to the `main` branch of `https://github.com/choitydhar143/ysse-react-main-portal`.
2. Install dependencies and run `npm run deploy`.
3. In GitHub, open **Settings → Pages** and select the `gh-pages` branch and `/(root)` folder if not already selected.
4. Expected URL: `https://choitydhar143.github.io/ysse-react-main-portal/`.

## Screenshots for submission

Capture each required page at desktop width and mobile width (e.g. 390–400 px): Home, About, Notices, Programs, one valid Program Details page, Contact, plus the Learning Catalog as an additional feature. Also capture Contact form validation feedback and the mobile navigation open state. Use browser DevTools device emulation or resize the browser.

## Contact form limitation

The form is frontend-only as required. It validates values and displays a local success message; it does not send, save or store messages.

## Git hygiene

`node_modules/`, `dist/` and environment files are excluded by `.gitignore`. Do not commit `node_modules`.
