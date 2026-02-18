# Over-engineered CV | Enterprise-Grade Monorepo

A high-performance personal portfolio and tech showcase built with a focus on **scalability**, **type-safety**, and **modern engineering patterns**.

## 🏗 Architecture Overview

This project is organized as a **Monorepo** managed by **Turborepo**. It demonstrates the ability to maintain a shared design system and configuration across multiple applications.

- **Apps:**
  - `apps/web` — main portfolio built with **Next.js 16 (App Router)**.
  - `apps/docs` — technical documentation and UI-kit showcase.
- **Packages (shared):**
  - `@repo/ui` — modular design system with **Tailwind CSS**.
  - `@repo/typescript-config` — shared strict TypeScript configs.
  - `@repo/eslint-config` — shared ESLint rules.
  - `@repo/tailwind-config` — shared Tailwind configuration.
  - `@repo/testing-config` — shared Vitest + React Testing Library setup (jsdom, jest-dom).

## 🛠 Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Monorepo:** Turborepo + pnpm workspaces
- **Styling:** Tailwind CSS
- **Testing:** Vitest, jsdom, @testing-library/jest-dom
- **Deployment:** Vercel (with Remote Caching)
- **Language:** TypeScript (strict mode)

## 🚀 Key Engineering Features

- **Component colocation** — logical separation of features in a modular structure.
- **Zero-config build caching** — Turborepo cache for fast CI/CD.
- **Shared infrastructure** — single source of truth for UI, configs, and test setup.
- **Performance first** — tuned for Core Web Vitals and minimal layout shift.

## 🏁 Getting Started

**Requirements:** Node.js ≥18, pnpm 9.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd over-engineered-cv
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   # Start all apps
   pnpm dev

   # Start only the web app
   pnpm web

   # Start only the docs app
   pnpm docs
   ```

## 📜 Scripts (root)

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm web` | Start only `apps/web` |
| `pnpm docs` | Start only `apps/docs` |
| `pnpm build` | Build all apps (and dependent packages) |
| `pnpm build:web` | Build only `apps/web` |
| `pnpm build:docs` | Build only `apps/docs` |
| `pnpm test` | Run tests (Vitest) in all packages that define them |
| `pnpm lint` | Lint all packages |
| `pnpm check-types` | Type-check all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting (no write) |
| `pnpm ci` | Full quality gate: check-types, format:check, lint, test |
| `pnpm clear` | Remove `node_modules`, `.next`, `.turbo`, `dist` |

## ✅ Quality & CI

GitHub Actions runs on push/PR to `main` and executes:

- `pnpm install --frozen-lockfile`
- `pnpm run ci` (type-check, format check, lint, test)

Tests use **Vitest** with a shared config from `@repo/testing-config` (React, jsdom, jest-dom matchers).

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.
