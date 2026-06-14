# Lucky Portfolio 🚀

A premium, modern developer portfolio website built using **React 19**, **Vite**, and **Framer Motion**. Designed with a focus on high-performance rendering, responsive layout, and rich visual aesthetics.

---

## 🎨 Design System & UI/UX Features

- **Rich Aesthetics**: Premium dark-themed user interface utilizing backdrop filters and glassmorphic card overlays.
- **Dynamic Color Palettes**: Engineered using local CSS variables with HSL color values to support easy opacity adjustments and interactive glow highlights.
- **Micro-Animations**: Smooth, responsive transitions and page animations powered by `framer-motion`.
- **Custom Typography**: Sleek font layout utilizing modern Google Fonts (`Outfit` / `Inter`).
- **Responsive Layout**: Designed mobile-first, adapting seamlessly from small screens to high-definition monitors.
- **SEO & Accessibility**: Configured with semantic HTML5 elements, sequential heading layout, and descriptive `aria-label` tags for interactive elements.

---

## 📂 Codebase Overview

```text
├── .agents/               # Antigravity agent configuration and coding standards
├── .code-review-graph/    # Local codebase knowledge graph index
├── src/
│   ├── assets/            # High-performance media assets (WebP images, SVG icons)
│   ├── components/        # Reusable UI layout elements and sections
│   ├── index.css          # Design system root tokens and global styling
│   ├── main.jsx           # Client-side React entry point
│   └── App.jsx            # Core layout wrapper
├── eslint.config.js       # Strict code quality and formatting rules
├── index.html             # Main HTML entry containing SEO meta tags
└── vite.config.js         # Client compilation configuration
```

---

## 💻 Getting Started

### 1. Installation
To install the required project dependencies, run:
```bash
npm install
```

### 2. Development Server
To launch the Vite hot-reloading development server locally:
```bash
npm run dev
```

### 3. Static Code Analysis
To run ESLint and inspect the code for syntax or styling errors:
```bash
npm run lint
```

### 4. Compile Production Build
To build and optimize static assets for production:
```bash
npm run build
```
The resulting build directory will be exported to `/dist`.