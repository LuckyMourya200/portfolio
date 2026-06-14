# Frontend & Styling Guidelines for Lucky Portfolio

These rules enforce visual excellence, clean code, and SEO optimization for the frontend codebase of the Lucky Portfolio website.

---

## 🎨 Visual Excellence & Styling Standards

1. **Rich Aesthetics**:
   - The user must be wowed at first glance. Use sleek, premium, and state-of-the-art designs.
   - Use high-quality dark mode and glassmorphism (translucent panels, backdrop-filter blur).
   - Use a dynamic, responsive layout that scales beautifully from small mobile screens to large desktop monitors.

2. **Colors**:
   - Avoid generic web-safe primary colors (e.g., pure `#ff0000`, `#0000ff`).
   - Use customized HSL variables defined in the CSS root. E.g., `--primary-hsl: 250 85% 65%;` to allow easy opacity scaling (e.g., `hsla(var(--primary-hsl), 0.15)`).
   - Maintain a unified dark aesthetic with rich contrasts (e.g., deep charcoal, slate, and glowing accent highlights).

3. **Typography**:
   - Do not use default system/browser fonts (e.g., Times New Roman).
   - Prefer premium modern typography. Use fonts like `Outfit`, `Inter`, or `Clash Display` imported via Google Fonts.

4. **Animations**:
   - Incorporate micro-animations for user interactions (hover effects, scroll animations, loading transitions).
   - Utilize `framer-motion` for React-based transitions. Keep transition curves smooth and snappy (e.g., `type: "spring", stiffness: 300, damping: 30`).
   - Ensure interactive elements (buttons, links, cards) have active states and hover transformations (scale, translate, box-shadow glow).

5. **Assets & Media**:
   - Never use placeholder boxes or dummy image assets.
   - Use high-performance WebP formats for photos and vector SVG for icons.
   - Compress all media to optimize page load speeds.

---

## ⚛️ React 19 & Component Architecture

1. **Functional Components**:
   - Always use standard functional components.
   - Keep components modular and reusable. Place generic UI elements in `src/components/common` (e.g., Button, Card, SectionHeader).

2. **State Management & Hooks**:
   - Use standard React hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`) correctly.
   - Avoid unnecessary re-renders. Memoize expensive operations where applicable.
   - Use standard Intersection Observer library (`react-intersection-observer`) for lazy loading or trigger-on-scroll animations.

3. **Routing & Structure**:
   - Ensure clean file structure under `src/`.
   - Organize assets, pages, and components clearly.

---

## 🔍 SEO & Accessibility Best Practices

1. **Semantic HTML**:
   - Use appropriate HTML5 tags: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`.
   - Use a single, descriptive `<h1>` tag per page representing the main heading.
   - Maintain a sequential heading structure (`<h1>` -> `<h2>` -> `<h3>`).

2. **Metadata**:
   - Ensure descriptive Title tags and Meta descriptions are present in `index.html`.
   - Configure open graph (OG) tags for social media sharing preview (image, description, URL).

3. **Interactive Elements**:
   - Ensure all interactive elements have unique, descriptive IDs to facilitate automated browser testing and screen-reader accessibility.
   - Provide proper `aria-label` tags for icon-only buttons (e.g., social links).
