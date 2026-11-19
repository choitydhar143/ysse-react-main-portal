# YSSE Main Portal — Week 7 React Assignment

A responsive multi-page portal built with React, Vite and React Router DOM. It demonstrates the Week 7 requirements: shared layouts, reusable components, dynamic program routes, data-driven notices and programs, form validation, conditional rendering and responsive CSS.

> **Content note:** Programmes and notices in this project are clearly labelled illustrative sample content. They are not represented as real YSSE programmes, official announcements, impact figures or organisational claims. Replace them with verified, approved YSSE material before any public organisational use.

## Pages and routes

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Notices | `/notices` |
| Programs | `/programs` |
| Learning Catalog | `/learning-catalog` |
| Program details | `/programs/:id` |
| Contact | `/contact` |
| Not found | `*` |

## Features

- `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Outlet` and `useParams`
- Shared navigation and footer through `MainLayout`
- Reusable `Button`, `PageHeader`, `NoticeCard` and `ProgramCard`
- Six sample notices and six sample programs in separate data files
- Dynamic `.map()` rendering with stable keys
- Program details selected by URL ID, with invalid-ID handling
- Notice search and program category filtering
- Controlled contact form with required-field, email and message-length validation
- Conditional empty, error and success states
- Responsive mobile navigation and layouts
- GitHub Pages deep-link fallback while retaining `BrowserRouter`

## Requirements

- Node.js 18+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/`). The Vite configuration uses `/` during development, so the root local URL works.

## Check the production build

```bash
npm run build
npm run preview
```

## Publish to GitHub Pages

This project is configured for a repository named `ysse-main-portal`.

1. Create a **public** GitHub repository named `ysse-main-portal`.
2. Push the project source to the `main` branch.
3. Run `npm install` and then:

   ```bash
   npm run deploy
   ```

4. In GitHub, open **Settings → Pages**. Select **Deploy from a branch**, choose `gh-pages` and `/(root)`, then save if it is not already selected.

Expected live URL:

```text
https://YOUR-GITHUB-USERNAME.github.io/ysse-main-portal/
```

If you use a different repository name, update the production `base` in `vite.config.js` and the `repoBase` value in `public/404.html`.

## Technologies

React 18, Vite, React Router DOM 6, JavaScript (JSX), regular CSS and GitHub Pages.

## Form limitation

The contact form is frontend-only. It validates the entered values and displays a local success message. It does not send, save or store messages because the assignment does not require a backend.


## Official logo
The navigation bar and footer use the YSSE logo image shown on the organisation’s certificate verification website. The image is loaded from its hosted image URL, so an internet connection is required for the logo to appear. Source: https://verify.ysseglobal.org/ (logo image: https://i.ibb.co/N2GZ2Cvk/logo-png-01.png).
