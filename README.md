# gayaldassanayake.com

Personal website monorepo — tech blog, finance blog (English & Sinhala), projects showcase, and resume.

## Repo structure

```
apps/
  main/       # Main site: tech blog, projects, resume (Next.js)
  finance/    # Finance blog in English and Sinhala (Next.js)
packages/
  ui/             # Shared React component library
  design-tokens/  # Shared design tokens (colors, typography, spacing)
  content-utils/  # Shared utilities for MDX content processing
```

## Running locally

Install dependencies from the repo root:

```bash
pnpm install
```

Start an individual app:

```bash
# Main site
cd apps/main && pnpm dev

# Finance blog
cd apps/finance && pnpm dev
```

Or run all apps in parallel from the root:

```bash
pnpm dev
```

## Adding content

- **New blog post** — add an MDX file under `apps/main/content/blog/` (or `apps/finance/content/` for finance posts).
- **New project** — add an entry to `apps/main/content/projects/`.
- **Update resume** — edit `apps/main/content/resume.mdx`.

## Tech stack

- **Framework**: Next.js (App Router)
- **Monorepo**: Turborepo + pnpm workspaces
- **Styling**: Tailwind CSS + shared design tokens
- **Content**: MDX
- **Language**: TypeScript
