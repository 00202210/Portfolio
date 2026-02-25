# 00202210 Portfolio

Multi-page, static-exported Next.js portfolio for a Roblox Luau scripter targeting studios and recruiters.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Static export (`output: "export"`) compatible with GitHub Pages and Cloudflare Pages

## Routes

- `/`
- `/projects`
- `/projects/immortal-cultivation`
- `/projects/unlimited`
- `/projects/cutesignal`
- `/projects/chattowebhook`
- `/projects/weatherservice`
- `/about`
- `/contact`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Lint

```bash
npm run lint
```

This project uses ESLint flat config (`eslint.config.mjs`) for Next.js 16.

## Build Static Export

```bash
npm run build
```

This generates a static site in `out/`.

For a custom domain deployment such as `https://00202210.dev`, keep `NEXT_PUBLIC_BASE_PATH` empty.

## Content Editing

Single source of truth:

- `src/content/siteData.ts`

Edit here to change:

- profile information
- skills
- systems/architecture messaging
- projects and project links
- Discord handle/contact CTA
- canonical site URL for metadata (`siteData.site.url`)

Set `siteData.site.url` to your base domain (for example `https://username.github.io`).

## Project Visuals

Project images are stored in:

- `public/images/projects/immortal-cultivation.png`
- `public/images/projects/unlimited.png`
- `public/images/projects/cutesignal.png`
- `public/images/projects/chattowebhook.png`
- `public/images/projects/weatherservice.png`

You can replace them with PNG/JPG/WebP while keeping the same filenames (or update paths in `src/content/siteData.ts`).

## GitHub Pages Deployment

### Base Path Setup

This project uses `NEXT_PUBLIC_BASE_PATH` to compute both `basePath` and `assetPrefix` in `next.config.ts`.
Metadata and static asset URLs are also base-path-aware via `src/lib/basePath.ts`.

- Project page URL (`https://username.github.io/repo-name`):
  - set `NEXT_PUBLIC_BASE_PATH=repo-name`
- User/org page URL (`https://username.github.io`):
  - set `NEXT_PUBLIC_BASE_PATH` to empty

### Manual Deploy Steps

1. Build export with correct base path:

```bash
NEXT_PUBLIC_BASE_PATH=repo-name npm run build
```

2. (Optional) Preview the exported site locally:

```bash
npx serve out
```

3. Publish the generated `out/` folder to GitHub Pages.

### GitHub Actions (included)

Workflow file:

- `.github/workflows/deploy.yml`

It builds `out/` and deploys to GitHub Pages on pushes to `main`.

If you deploy to a user/org page instead of a project page, edit this line in the workflow and set it to an empty value:

```yaml
NEXT_PUBLIC_BASE_PATH: ${{ github.event.repository.name }}
```

### Important Metadata Note

Set `siteData.site.url` in `src/content/siteData.ts` to your actual site origin:

- `https://username.github.io` for user/org pages
- `https://username.github.io` plus `NEXT_PUBLIC_BASE_PATH=repo-name` for project pages

## Cloudflare Pages + Custom Domain

1. Build the static export with no base path:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

2. Deploy the `out/` directory to Cloudflare Pages.

3. In Cloudflare, attach your custom domain (`00202210.dev`) to the Pages project.

4. Keep `siteData.site.url` set to:

```txt
https://00202210.dev
```

## Accessibility and Performance Notes

- Semantic landmarks (`header`, `main`, `footer`)
- Keyboard-visible focus states
- Skip-to-content link
- `prefers-reduced-motion` respected
- Static images and no heavy animation libraries
