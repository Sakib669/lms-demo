# Design System: SkillForge LMS (Hermes Modern Edition)

## 1. Visual Theme & Atmosphere
A high-converting, crystalline modern education platform that balances clean editorial clarity with tactile digital warmth. High spatial legibility with crisp card borders, luminous amber/coral CTA accents (`#FF5B00`), balanced deep slate navy headers (`#0B192C`), and warm porcelain background layers (`#F8FAFC`). Designed to mirror the exact hierarchical pacing of premium South Asian / global ed-tech leaders while elevating typography, card geometry, and micro-interactions.

## 2. Color Palette & Roles
- **Canvas Light** (`#F8FAFC`) — Primary page canvas with subtle mesh warm lighting
- **Pure Surface** (`#FFFFFF`) — Card bodies, dropdowns, inputs, and floating elements
- **Midnight Deep** (`#0B192C` / `#0E1B2E`) — Live workshop ribbons, footer container, dark card accents
- **Primary Accent: Solar Ember** (`#FF5B00` / `#FA5A00`) — Primary CTA buttons, price highlights, live alerts
- **Secondary Cobalt** (`#0000F2` / `#2563EB`) — Interactive links, verified badges, category highlights
- **Emerald Growth** (`#10B981`) — Course count badge, success pills, discount indicators
- **Charcoal Ink** (`#0F172A`) — Primary display and body typography
- **Muted Slate** (`#64748B`) — Secondary descriptions, ratings count, metadata
- **Subtle Line** (`#E2E8F0`) — 1px hairline dividers and card boundaries

## 3. Typography Rules
- **Display & Headings:** Plus Jakarta Sans & Outfit (Clean, track-tight, high-legibility geometric sans)
- **Body:** Plus Jakarta Sans / Inter-alternative with relaxed leading (`1.6`), max 65ch per paragraph
- **Numbers & Metrics:** High-contrast tabular monospace figures for ratings, prices, and stats
- **Banned:** Generic system serifs, narrow cramped 6-line headers

## 4. Component Stylings
- **Buttons:** Tactile -1px active translate, pill and rounded-xl silhouettes, bold contrast text
- **Course & E-Book Cards:** Subtle hover elevation (`group-hover:-translate-y-1`), 3D shadow depth for book spines, clean price hierarchy
- **Floating Stat Pills:** Frosted glass backing (`backdrop-blur-md`), vibrant rounded icon container, bold metric
- **Live Workshop Ribbon:** Deep midnight navy gradient with glowing live pulse dot and interactive video card
- **Mega Bundle Box:** Warm gradient card (`amber-50/50`) with illustrated bundle stack and checkmark feature list

## 5. Layout Principles
- **Hero Grid:** Split asymmetrical layout with left-aligned high-impact typography and right-aligned hero portrait flanked by dynamic stat pills
- **Category Nav:** Horizontal pill carousel with custom thematic icons
- **Course & Book Grids:** 5-column responsive cards with horizontal scroll resilience on mobile
- **Bento & Feature Blocks:** Zero empty voids using structured grid math

## 6. Motion & Interaction
- Smooth spring physics for cards and buttons
- Video preview modals with instant backdrop blur
- Tabular filtering with animated presence
- Real-time LocalStorage synchronization for cart, wishlists, notes, and course progress

## 7. Anti-Patterns (Banned)
- No emojis in code or system labels
- No cheap meta-labels ("SECTION 01", "QUESTION 05")
- No pure black (`#000000`)
- No neon purple glows
- No fake unstyled broken image links
