# Codera frontend

Responsive fleet-management landing page built with Next.js, React, TypeScript, and plain CSS.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available commands

- `npm run dev` — start the local development server
- `npm run lint` — run the ESLint quality checks
- `npm run typecheck` — validate TypeScript types
- `npm run build` — create a production build
- `npm start` — serve the production build
- `npm test` — run all repository checks

## Project structure

```text
src/
  app/                  Next.js App Router entry points and global styles
  components/codera/    Landing-page sections, content, and interactions
public/
  assets/codera/        Images, icons, and local fonts used by the page
```

## Configuration

`NEXT_PUBLIC_SITE_URL` is optional during local development. Set it to the deployed origin so Open Graph metadata resolves to the production URL. See `.env.example`.

The demo-request form is presentation-only and does not transmit or store submitted data. Replace the placeholder email and social destinations before production use.

The page shows a dismissible first-visit notice identifying it as an independent, non-commercial Conceptzilla portfolio concept rather than a live service or client-commissioned product.

## Assets

Fonts, photographs, generated imagery, and third-party brand marks are included as project assets. Confirm the applicable usage rights before public or commercial deployment.
