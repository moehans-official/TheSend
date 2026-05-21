# TheSend

A minimalist blog system designed for focused reading, built with [Astro](https://astro.build).

## Features

- Clean reading-focused design with serif/sans-serif font pairing
- LaTeX math formula support
- Client-side search
- Dark/light mode with system preference detection
- Mobile-responsive with hamburger menu and scroll-hiding header
- SEO: structured data, Open Graph, Twitter Card, sitemap, RSS
- CC BY-NC-SA 4.0 license at article footer

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```text
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── config/       # Site configuration
│   ├── content/      # Blog posts (Markdown)
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
└── astro.config.mjs  # Astro configuration
```

## Writing Posts

Create Markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: 2024-01-01
category: "Category"
tags: ["tag1", "tag2"]
showToc: true
---

Your content here...
```

## License

CC BY-NC-SA 4.0
