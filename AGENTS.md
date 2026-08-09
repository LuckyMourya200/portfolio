# Portfolio Project Architecture & Memory

This document serves as the persistent architectural knowledge base and code-review reference for human developers and AI coding agents working on Lucky Mourya's Portfolio repository.

---

## 1. Project Overview

- **Owner**: Lucky Mourya (Full Stack & React Native Developer)
- **App Type**: Single-Page Application (SPA) Portfolio Website
- **Tech Stack**:
  - **Framework**: React 19 + Vite 8
  - **Analytics**: `@vercel/analytics`
  - **Styling**: Vanilla CSS with CSS custom keyframe animations and media query responsiveness
  - **Formatters / Linters**: ESLint 9 (Flat Config), Prettier 3
  - **Icons & Media**: Inline SVG vectors and WebP images

---

## 2. Architecture

The application follows a **Modular Section-Based Architecture**:

- `src/App.jsx` acts as the single page root container, composing modular sections stacked vertically with thin divider lines (`SectionDivider`).
- Each major area of the website is organized into its own feature folder inside `src/sections/` (Hero, About, Experience, Projects, Contact).
- Shared, atomic controls (like buttons, social icon bars, and navigation links) live in `src/components/common/`.
- Site-wide layout structures live in `src/components/layout/`.
- Media assets are organized logically under `src/assets/images/` and `src/assets/projects/`.

---

## 3. Directory Structure

```
portfolio/
├── .agents/                    # Agent skills, rules, and configuration
├── public/                     # Public static files (manifest, sitemap, robots, favicons)
├── scripts/
│   └── find-unused-styles.js   # Custom Node.js script for checking unused CSS classes
├── src/
│   ├── assets/
│   │   ├── images/             # Profile & general imagery (profile.webp)
│   │   └── projects/           # Project screenshots (adarth.webp, backend.webp, oaysis.webp)
│   ├── components/
│   │   ├── common/             # Reusable UI widgets & standalone controls
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScheduleButton.jsx
│   │   │   ├── SocialMediaIcons.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   └── whatsapp.css
│   │   └── layout/             # Layout wrappers & site footer
│   │       └── Footer.jsx
│   ├── sections/               # Modular page sections
│   │   ├── about/
│   │   │   ├── AboutMeComponent.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   └── aboutme.css
│   │   ├── contact/
│   │   │   └── ContactUsSection.jsx
│   │   ├── experience/
│   │   │   ├── Experience.jsx
│   │   │   └── experience.css
│   │   ├── hero/
│   │   │   ├── Header.jsx
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── projects/
│   │       ├── FootersectionScreeen.jsx
│   │       ├── ProjectsSection.jsx
│   │       └── footersection.css
│   ├── App.jsx                 # Main entry component assembling page sections
│   └── main.jsx                # DOM root initialization
├── eslint.config.js
├── package.json
└── vite.config.js
```

---

## 4. File Responsibilities

### Core & Entry

- **[`src/main.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/main.jsx)**
  - _Responsibility_: Renders `<App />` into the DOM root using React `StrictMode`.
- **[`src/App.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/App.jsx)**
  - _Responsibility_: Assembles page sections in vertical order (`Home`, `AboutMeComponent`, `Experience`, `FootersectionScreeen`, floating `WhatsAppButton`, and Vercel `Analytics`).
  - _Dependencies_: `src/sections/hero/Home.jsx`, `src/sections/about/AboutMeComponent.jsx`, `src/sections/experience/Experience.jsx`, `src/sections/projects/FootersectionScreeen.jsx`, `src/components/common/WhatsAppButton.jsx`.

### Common Components (`src/components/common/`)

- **[`src/components/common/Navbar.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/components/common/Navbar.jsx)**
  - _Responsibility_: Renders top navigation menu items and smooth-scroll triggers + Resume download button.
- **[`src/components/common/SocialMediaIcons.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/components/common/SocialMediaIcons.jsx)**
  - _Responsibility_: Renders social link icons (LinkedIn, Upwork, GitHub, Twitter, Instagram). Supports custom prefix IDs for analytics tracking.
- **[`src/components/common/ScheduleButton.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/components/common/ScheduleButton.jsx)**
  - _Responsibility_: CTA button redirecting to Calendly meeting schedule URL.
- **[`src/components/common/WhatsAppButton.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/components/common/WhatsAppButton.jsx)**
  - _Responsibility_: Floating WhatsApp CTA button pinned to bottom-right of viewport.

### Layout (`src/components/layout/`)

- **[`src/components/layout/Footer.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/components/layout/Footer.jsx)**
  - _Responsibility_: Page footer showing brand overview, navigation links, social icons, and copyright details.

### Hero Section (`src/sections/hero/`)

- **[`src/sections/hero/Home.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/hero/Home.jsx)**
  - _Responsibility_: Top wrapper component combining `Navbar` and `Header`.
- **[`src/sections/hero/Header.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/hero/Header.jsx)**
  - _Responsibility_: Main hero banner presenting name, title, description, profile photo, social icons, and email CTA.
- **[`src/sections/hero/Home.css`](file:///Users/luckymourya/Desktop/portfolio/src/sections/hero/Home.css)**
  - _Responsibility_: Layout, typography, responsive media queries, and button styles for Hero and Navigation.

### About Section (`src/sections/about/`)

- **[`src/sections/about/AboutMeComponent.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/about/AboutMeComponent.jsx)**
  - _Responsibility_: Container section wrapper providing padding and width constraints for `AboutSection`.
- **[`src/sections/about/AboutSection.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/about/AboutSection.jsx)**
  - _Responsibility_: Renders bio text column alongside a 2x2 grid of service cards with intersection observer reveal animations.
- **[`src/sections/about/aboutme.css`](file:///Users/luckymourya/Desktop/portfolio/src/sections/about/aboutme.css)**
  - _Responsibility_: Grid styles, card hover effects, card reveal animations, and responsive rules for About section.

### Experience Section (`src/sections/experience/`)

- **[`src/sections/experience/Experience.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/experience/Experience.jsx)**
  - _Responsibility_: Interactive timeline presenting work history (Slayd Tech, Acumensa Technologies, Lazy Trunk). Uses `IntersectionObserver` to trigger timeline item animations.
- **[`src/sections/experience/experience.css`](file:///Users/luckymourya/Desktop/portfolio/src/sections/experience/experience.css)**
  - _Responsibility_: Timeline marker graphics, vertical line styling, and item entry transition rules.

### Projects & Contact Section (`src/sections/projects/` & `src/sections/contact/`)

- **[`src/sections/projects/ProjectsSection.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/projects/ProjectsSection.jsx)**
  - _Responsibility_: Portfolio project showcase with category filtering (All, Mobile Apps, Backend), metrics cards, project images, bullet points, and live links. Tracks project view events via Vercel Analytics.
- **[`src/sections/projects/FootersectionScreeen.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/projects/FootersectionScreeen.jsx)**
  - _Responsibility_: Bottom page section container composing `ProjectsSection`, `ContactUsSection`, and `Footer`.
- **[`src/sections/projects/footersection.css`](file:///Users/luckymourya/Desktop/portfolio/src/sections/projects/footersection.css)**
  - _Responsibility_: Card grid styles, category filter button styles, contact section layout, and footer styling.
- **[`src/sections/contact/ContactUsSection.jsx`](file:///Users/luckymourya/Desktop/portfolio/src/sections/contact/ContactUsSection.jsx)**
  - _Responsibility_: Contact section header inviting collaboration, embedding `ScheduleButton`.

---

## 5. Component Relationships

```
App
├── Home (sections/hero/Home)
│   ├── Navbar (components/common/Navbar)
│   └── Header (sections/hero/Header)
│       └── SocialMediaIcons (components/common/SocialMediaIcons)
├── AboutMeComponent (sections/about/AboutMeComponent)
│   └── AboutSection (sections/about/AboutSection)
├── Experience (sections/experience/Experience)
├── FootersectionScreeen (sections/projects/FootersectionScreeen)
│   ├── ProjectsSection (sections/projects/ProjectsSection)
│   ├── ContactUsSection (sections/contact/ContactUsSection)
│   │   └── ScheduleButton (components/common/ScheduleButton)
│   └── Footer (components/layout/Footer)
│       └── SocialMediaIcons (components/common/SocialMediaIcons)
└── WhatsAppButton (components/common/WhatsAppButton)
```

---

## 6. Asset Organization

All static media assets live in `src/assets/`:

- **`src/assets/images/`**: General site images (e.g., `profile.webp`).
- **`src/assets/projects/`**: Project thumbnails and screenshots (`adarth.webp`, `backend.webp`, `oaysis.webp`).
- **`public/`**: Favicons, `manifest.json`, `robots.txt`, `sitemap.xml`, and open-graph metadata (`profile-og.webp`).

---

## 7. Styling Architecture

- Written in **Vanilla CSS** with scoped BEM-like class naming conventions (`about-heading-new`, `service-card-new`, `exp-timeline`, `projects-grid`).
- Responsive breakpoints are maintained per section:
  - Mobile: `max-width: 480px`
  - Tablet: `max-width: 768px` / `481px - 768px`
  - Desktop: `min-width: 769px` / `max-width: 1440px`

---

## 8. Data & Configuration

- **Data Models**: Inline constant arrays (`experiences`, `projects`, `services`, `categories`) defined in section components.
- **Formattings**: Standardized JS module syntax (`type: "module"` in `package.json`).

---

## 9. Refactor History

- **2026-08-10 Refactor**:
  - Reorganized unstructured top-level component folders (`header/`, `aboutme/`, `experience/`, `project/`, `whatsapp/`) into clean `src/components/common/`, `src/components/layout/`, and `src/sections/` folders.
  - Consolidated project images under `src/assets/projects/` and profile imagery under `src/assets/images/`.
  - Added custom `npm run styles:check` script (`scripts/find-unused-styles.js`) to audit unused CSS rules across the project.
  - Fully populated `AGENTS.md` with persistent architectural knowledge.

---

## 10. Code Review Rules

1. **Pure Structural Consistency**: Never alter business logic, UI design, spacing, colors, fonts, or component APIs during an architectural/reorganization task.
2. **Style Checks**: Always run `npm run styles:check` before finalizing CSS edits to prevent unused class leakage.
3. **ESLint Cleanliness**: Maintain zero ESLint errors or warnings (`npm run lint`).
4. **No Barrel Abstraction Bloat**: Do not add unnecessary `index.js` re-export files unless requested.
5. **Keep AGENTS.md Updated**: Update this file whenever new sections, components, or major folder structures are introduced or modified.

---

## 11. Instructions for Future AI Agents

- Read `AGENTS.md` before making architectural or structural edits.
- When creating new sections, place them in `src/sections/<section-name>/` along with their corresponding CSS file.
- When adding reusable UI buttons, modals, or controls, place them in `src/components/common/`.
- Ensure all relative import paths to assets and section stylesheets are updated correctly after file movements.
- Validate changes by running `npm run styles:check`, `npm run lint`, and `npm run build`.

---

## 12. Forensic Design Audit Summary (2026-08-10)

A comprehensive design audit evaluated the portfolio against Apple Design principles (`apple-design` skill):

- **Core Verdict**: The codebase relies on ad-hoc CSS magic numbers, 7 distinct shades of orange, 8 body text grays, 6 border radii, broken mobile navigation (hidden menu without drawer), un-imported `Inter` font in Experience section causing system fallbacks, fragile `.offset { margin-left: 30%; }` text layout hacks in Hero, raw emojis in project cards, and un-coordinated container widths (`1440px`, `1412px`, `1200px`, `932px`, `860px`).
- **Apple-Design Score**: Overall **3/10**. Key gaps include lack of spring physics, zero translucent materials/`backdrop-filter`, missing `@media (prefers-reduced-motion)` support, and lack of optical typography tracking.
- **Action Plan**: Future redesign must establish a unified token system (`:root`), unified typography stack, responsive translucent top navigation with mobile sheet, cohesive dark/light material depth, spring-based micro-interactions, and professional engineering showcase cards without raw emojis.

---

## 13. Redesign Implementation Roadmap (2026-08-10)

The finalized design direction transforms the portfolio into a premium, Apple-inspired experience that positions the owner as a Principal/Senior Engineer. It mandates a shift from noisy "vibe coding" to extreme restraint, optical alignment, typography-driven hierarchy, and physical motion.

**Key Technical & Design Constraints:**
1. **Tokens Over Magic Numbers**: ALL styling must use a new `:root` CSS variable system (`tokens.css`) defining exact color, spacing (8px grid), and radius semantics.
2. **Typography**: Adopt `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif`. Use negative tracking (`-0.03em`) on display headers and precise line heights.
3. **Motion**: Implement instant pointer-down scale (`transform: scale(0.97)`). Use interruptible cubic-bezier transitions (`0.4s cubic-bezier(0.16, 1, 0.3, 1)`) mimicking critically damped springs. Provide global `@media (prefers-reduced-motion: reduce)` support.
4. **Layout**: Consolidate sections into a unified `SectionWrapper` with a consistent `1200px` max-width. Fix the broken mobile navigation by implementing a translucent sticky top bar with a fluid mobile drawer.
5. **Projects Presentation**: Remove raw emojis from text. Use editorial layouts with unified 4:3 image aspect ratios on subtle `--bg-surface` cards. Move Projects higher in the page hierarchy (below Hero).
6. **No Breakage**: Vercel `@vercel/analytics` `onClick` handlers and all specific `id` attributes must remain perfectly intact.

**Implementation Phases:**
- **Phase 1 (Foundation)**: Create `styles/tokens.css` and `styles/global.css`.
- **Phase 2 (Layout)**: Build new sticky `Navbar.jsx` with mobile sheet and `SectionWrapper.jsx`.
- **Phase 3 (Hero & Typography)**: Refactor Hero to remove fragile `margin-left: 30%` hack.
- **Phase 4 (Projects)**: Redesign project cards into premium technical case studies.
- **Phase 5 (Experience & About)**: Clean up timelines and competency grids.
## 14. Final Architecture (2026-08-10 Redesign)

The application now utilizes a global `SectionWrapper` constraint for consistent maximum width (`1200px`) and centered alignment.
The root layout in `App.jsx` cleanly composes:
- `Navbar` (Sticky, translucent, with mobile drawer)
- `Home` (Hero section)
- `ProjectsSection` (Elevated in priority, editorial grid)
- `Experience`
- `AboutSection`
- `ContactUsSection`
- `Footer`

## 15. Design System

- **Typography**: A unified native font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) is defined in `styles/global.css`. Negative tracking (`-0.03em`) is used on display headers.
- **Colors**: Defined in `styles/tokens.css` as semantic variables (`--bg-primary`, `--bg-surface`, `--text-primary`, `--text-secondary`, `--border-subtle`, `--accent-primary`).
- **Spacing**: An 8px linear grid is mapped to variables (`--space-2` through `--space-24`).
- **Radius**: Apple-style continuous corners (squircles) approximated via `--radius-sm`, `--radius-md`, `--radius-lg`.
- **Shadows**: Soft, multi-layered diffusion shadows (`--shadow-card`, `--shadow-float`) replace harsh drop shadows.
- **Motion**: Critically damped spring physics are used for all transitions (`--transition-spring: 0.4s cubic-bezier(0.16, 1, 0.3, 1)`).

## 16. Component Responsibilities

- **`SectionWrapper.jsx`**: The foundational layout primitive ensuring every section has identical padding and maximum width constraints.
- **`Navbar.jsx`**: Manages window scroll state for visual changes (glassmorphism background) and local state for the mobile drawer. Contains smooth-scroll logic to `#ids`.

## 17. Section Responsibilities

- **Projects (`ProjectsSection.jsx`)**: Showcases technical case studies. Uses a 4:3 aspect ratio grid and bulleted technical accomplishments instead of generic emoji descriptions.
- **Experience (`Experience.jsx`)**: Uses `IntersectionObserver` to trigger sequential fade-in animations on timeline nodes.

## 18. Important Design Decisions

- **No Magic Numbers**: ALL hardcoded pixels in CSS must be replaced with a `var(--space-*)` or `var(--radius-*)` token.
- **Backdrop Filters**: Overlays and sticky navigation bars rely on `backdrop-filter: blur(20px)` and semi-transparent backgrounds to simulate glass/material depth.
- **No Emojis**: Emojis were stripped from project and capability descriptions to maintain an editorial, senior-level tone.
- **Accessibility**: A global `:focus-visible` outline is enforced, and `@media (prefers-reduced-motion: reduce)` globally disables all CSS animations and transitions for users who request it.

## 19. Motion Principles

- **Pointer Feedback**: Interactive elements (buttons, project cards, social icons) use `:active { transform: scale(0.97); }` to simulate physical hardware resistance when tapped.
- **Interruptibility**: Animations strictly use `transition` instead of CSS `@keyframes` where possible so that user interaction can interrupt them seamlessly (e.g., hovering off a card midway through its hover animation).

## 20. Responsive Rules

- **Mobile First**: The base CSS targets mobile layouts.
- **Breakpoints**: 
  - `<= 480px`: Single column layouts.
  - `<= 768px`: Tablet refinements (tighter padding).
  - `<= 1024px`: Breakpoints for 2-column to 1-column grid shifts.
- **Fluid Drawer**: The mobile menu uses a side-sheet that slides in rather than abruptly displaying a stacked list.

## 21. Completed Redesign

The 6-phase Redesign Implementation Roadmap was fully executed:
1. `tokens.css` and `global.css` were created and imported into `main.jsx`.
2. Layouts were wrapped in `SectionWrapper` and `Navbar` was modernized.
3. The Hero section `.offset` hacks were removed.
4. Projects were redesigned into 4:3 cards and shifted up in the hierarchy.
5. Experience timelines were simplified and About cards updated.
6. Reduced motion and focus states were validated.
The build runs perfectly and the design achieves a premium, Apple-inspired aesthetic.
