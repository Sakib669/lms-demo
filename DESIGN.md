# Design System: SkillForge LMS (Hermes Enterprise Edition)

## 1. Executive Aesthetic & Atmosphere
An elite, architectural modern executive learning platform that channels Linear, Stripe, and Apple Developer. Designed using the `/redesign-existing-projects` framework:
- Zero AI-slop color gradients (no oversaturated orange, no generic purple-blue blobs).
- Harmonized page tone with consistent canvas backgrounds (`#FAFAFD` in light mode, `#060814` in dark mode).
- Executive monochrome obsidian and crisp white surfaces anchored by Hermes Electric Cobalt (`#0000F2`) and luminous ice cyan (`#00D2FF`).
- Architectural grid patterns (`enterprise-grid`) and subtle radial spotlights (`radial-gradient(ellipse at top, rgba(0,0,242,0.06), transparent 70%)`).

## 2. Palette & Semantic Roles
- **Canvas Light**: `#FAFAFD` / `#F8FAFC`
- **Canvas Dark (Deep Midnight)**: `#060814` (Hermes Canvas)
- **Surfaces & Cards**: Pure `#FFFFFF` (light) / `#0B0F19` (dark) with 1px border `border-slate-200/80` / `border-slate-800`
- **Primary Accent**: Electric Cobalt Blue (`#0000F2`, RGB `0, 0, 242`)
- **Secondary Glow / Highlight**: Electric Cyan (`#00D2FF` / `#38BDF8`)
- **Executive Actions**: Deep slate-950 (`#020617`) with crisp white text in light mode; pure white with slate-950 text in dark mode
- **Success / Verification**: Emerald (`#10B981`)
- **Accreditation / Ratings**: Warm Amber / Champagne (`#F59E0B`)

## 3. Typography & Hierarchy
- **Primary Sans**: `Plus Jakarta Sans` with relaxed leading (`1.6`), `text-wrap: balance` on display headers and `text-wrap: pretty` on paragraphs.
- **Display Tracking**: Negative tracking `-tracking-[0.03em]` on display headers.
- **Tabular Figures**: `tabular-nums font-mono` for all currencies (`৳`), learner counts, ratings, and durations.
- **Sentence Case**: Natural executive sentence case over screaming all-caps.

## 4. Component Patterns
- **Baseline Alignment**: Buttons pinned to card bottoms (`mt-auto` with flex-col) so CTAs form clean horizontal lines across card rows.
- **Glassmorphism**: True glass surfaces with `backdrop-blur-xl`, 1px borders, and tinted shadows (`posh-glass`).
- **Telemetry Widgets**: Sleek floating stat cards with frosted glass backing, tabular figures, and micro-avatars.
- **Executive Master Collection**: Deep matte obsidian cards with brushed border highlights and 3D stacked book angles.
- **Live Cohort Studio Console**: Unified dark sapphire broadcast container with live indicator and cobalt play ring.

## 5. Motion & Physics
- Spring-based physics (`stiffness: 260, damping: 24`).
- Interactive hover lifts (`hover:-translate-y-1 hover:shadow-posh-hover transition-all duration-300`).
- Subtle image zoom on card hover (`group-hover:scale-105 transition-transform duration-500 ease-out`).
- Micro-interactions: `active:scale-[0.98]` tactile press states.
