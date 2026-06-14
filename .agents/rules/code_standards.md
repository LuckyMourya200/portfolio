# Code Quality & Programming Standards

This document establishes the code quality, formatting, naming conventions, and organization guidelines for development on the Lucky Portfolio project.

---

## 📂 File & Directory Organization

1. **Component Structure**:
   - Every component should reside in its own folder or file within `src/components/` depending on size.
   - Separate style sheets (if scoped) or keep all global variables and layout utilities inside `src/index.css`.
   - Helper functions, hooks, and context providers must be placed in `src/utils/`, `src/hooks/`, or `src/context/` respectively.

2. **Asset Organization**:
   - Store all static files (SVGs, WebP images) in `src/assets/` organized by type (e.g., `src/assets/projects/`, `src/assets/icons/`).
   - Import assets using relative paths or configure path aliases in Vite if necessary.

---

## 🏷️ Naming Conventions

1. **Components**:
   - Use PascalCase for component files and component function declarations (e.g., `ProjectCard.jsx`, `function ProjectCard()`).
2. **Hooks**:
   - Always prefix custom hooks with `use` and write in camelCase (e.g., `useScrollDirection.js`).

3. **Variables & Constants**:
   - Use camelCase for variables, objects, and function declarations (e.g., `const isScrolled = false;`).
   - Use UPPERCASE_SNAKE_CASE for global configuration constants or static configuration values.

4. **CSS Classes**:
   - Use kebab-case for CSS class names (e.g., `.card-container`, `.nav-link-active`).
   - Prefer semantic and descriptive names over utility-style names (e.g., `.portfolio-header` instead of `.h-16-flex`).

---

## ⚡ React 19 Best Practices

1. **Ref & DOM Access**:
   - In React 19, `ref` can be passed directly as a prop without requiring `forwardRef`. Follow this modern standard when building components.
2. **Performance Optimization**:
   - Use `useMemo` for expensive computed arrays or lists (e.g., filtering project tags).
   - Use `useCallback` for event handlers passed down to deeply nested child components to prevent unnecessary re-renders.

3. **No Unused Code**:
   - Clean up imports, variables, and console logs before finalizing any file.
   - Always address and resolve linting errors from ESLint (`eslint.config.js`) immediately.
