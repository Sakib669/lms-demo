# lms-demo

An enterprise-grade, high-performance E-Learning and Life Skills Platform (SkillForge / Hermes Academy) built with **Next.js 16+ (Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **LocalStorage** persistence.

## 🚀 Key Features

- **Next.js 16+ & Turbopack**: High-performance App Router with static prerendering and dynamic SSR routes.
- **Enterprise Design System**: Designed under `/redesign-existing-projects` with Hermes Electric Cobalt (`#0000F2`), Ice Cyan (`#00D2FF`), and Deep Midnight (`#060814`).
- **Complete LocalStorage Persistence**:
  - `sf_cart`: Slide-over shopping cart with promo vouchers (`HERMES50`).
  - `sf_enrolled`: Real-time course enrollments and access permissions.
  - `sf_progress`: Course lesson completion checklist and personal per-module note-taking.
  - `sf_user`: 1-click demo student authentication and profile management.
  - `sf_workshops`: Live cohort seat registrations.
  - `sf_theme` & `sf_lang`: Dark/Light theme toggle and Bengali/English localization.
- **Interactive Modules**:
  - Interactive HTML5 Classroom Video Player with lecture navigation and note-taking.
  - In-browser Sample Chapter Reader Modal for digital publications.
  - Live Workshop Console with countdown telemetry and trailer preview.
  - Checkout Page with multi-gateway selector and celebration confetti.
  - Filterable Curriculums & Journal tracks.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI & Runtime**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🏁 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```
