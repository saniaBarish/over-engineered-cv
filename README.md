# Over-engineered CV | Enterprise-Grade Monorepo

A high-performance personal portfolio and tech showcase built with a focus on **scalability**, **type-safety**, and **modern engineering patterns**.

## 🏗 Architecture Overview

This project is organized as a **Monorepo** managed by **Turborepo**. It demonstrates the ability to maintain a shared design system and configuration across multiple applications.

- **Apps:**
  - `apps/web`: The main portfolio built with **Next.js 15 (App Router)**.
  - `apps/docs`: Technical documentation and UI-kit showcase.
- **Packages (Shared):**
  - `@repo/ui`: A modular design system built with **Tailwind CSS**.
  - `@repo/typescript-config`: Shared strict TS configurations.
  - `@repo/eslint-config`: Standardized linting rules for code quality.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Monorepo Tooling:** Turborepo + pnpm Workspaces
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (with Remote Caching)
- **Language:** TypeScript (Strict Mode)

## 🚀 Key Engineering Features

- **Component Colocation:** Logical separation of features using a modular approach.
- **Zero-Config Build Caching:** Leveraging Turborepo's remote cache for near-instant CI/CD.
- **Shared Infrastructure:** Single source of truth for UI components and configurations.
- **Performance First:** Optimized for Core Web Vitals with zero layout shift.

## 🏁 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
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
pnpm run web

# Start only the docs app
pnpm run docs
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.
