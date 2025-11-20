# Frontend Guideline Document

Welcome to the frontend guideline for **lsp_maganag**. This document lays out the architecture, design principles, styling, and best practices we’ll follow when building any user interface for managing Language Server Protocol (LSP) servers and configurations. It’s written in everyday language so everyone can get on board quickly.

## 1. Frontend Architecture

### Overview
We’ll build a Single Page Application (SPA) using:
- **React** (with Hooks) as our UI library
- **TypeScript** for type safety and clearer code
- **Vite** as our build tool (fast start, quick rebuilds)

### How It Supports Our Goals
- **Scalability**: Components and pages live in feature folders, so growing teams can own separate areas without stepping on each other.
- **Maintainability**: TypeScript catches mistakes early. We organize code into clear modules: `components/`, `features/`, `services/`, and `utils/`.
- **Performance**: Vite’s native ES module support plus code splitting ensures we only load what we need, when we need it.

## 2. Design Principles

1. **Usability**: Every screen should be simple to navigate—no hidden controls.
2. **Accessibility**: Follow WCAG 2.1 AA standards. Use semantic HTML, proper `aria-` attributes, and maintain a color contrast ratio of at least 4.5:1.
3. **Responsiveness**: Mobile-first design; layouts adapt smoothly from 320px up to full desktop width.
4. **Consistency**: UI patterns and feedback (like loading spinners, error messages) behave the same way everywhere.

### Applying These Principles
- Use clear labels on buttons and inputs.
- Provide focus states for keyboard users.
- Ensure forms validate and show helpful error messages.
- Build layouts using a flexible grid or utility classes (see Styling section).

## 3. Styling and Theming

### Styling Approach
- **Tailwind CSS** as our core styling framework. It gives us utility-first classes and keeps CSS files small.
- **PostCSS** for extending Tailwind if needed (e.g., custom plugins).

### Theming
- We’ll use CSS variables for theming: one for light mode, one for dark mode.
- A simple toggle in our top-level layout switches the `data-theme` attribute on `<html>`.

### Visual Style
- Overall feel: **Modern flat design** with occasional **glassmorphism** touches (frosted panels behind modals or sidebars).
- Shadows: subtle (`shadow-sm`) for depth without distraction.
- Border radius: `0.375rem` (6px) on cards, `0.5rem` (8px) on buttons.

### Color Palette
- **Primary**: #4F46E5 (Indigo 600)
- **Secondary**: #10B981 (Emerald 500)
- **Accent**: #F59E0B (Yellow 500)
- **Neutral Light**: #F3F4F6 (Gray 100)
- **Neutral Dark**: #111827 (Gray 900)
- **Error**: #EF4444 (Red 500)
- **Success**: #22C55E (Green 500)

### Typography
- **Font Family**: `Inter`, sans-serif
- **Headings**: use `font-semibold` and scale from `text-xl` to `text-3xl`.
- **Body**: `text-base` with `leading-relaxed` for readability.

## 4. Component Structure

### Folder Layout
```
src/
  components/       # Reusable building blocks (buttons, inputs, modals)
    atoms/
    molecules/
    organisms/
  features/         # Feature-specific pages and their inner components
    serverManager/
    configEditor/
  layouts/          # Page layouts (header, sidebar, footer)
  services/         # API calls, WebSocket or LSP client wrappers
  utils/            # Shared utilities and helpers
  App.tsx           # Root setup (router, theme provider)
```

### Why Component-Based?
- **Reusability**: Write once, use everywhere (eg. a `Toggle` component).
- **Isolation**: Each piece manages its own state and styles, so bugs stay local.
- **Testability**: Smaller units are easier to cover with tests.

## 5. State Management

- **Local State**: Handled by React’s `useState` or `useReducer` inside components.
- **Global State**: We’ll use **Zustand**—a lightweight store that’s easy to set up. It gives us:
  - Simple API (`useStore` hooks)
  - No boilerplate
  - Supports middleware (for logging or persistence)

### Sharing State
- Store LSP server status, current config, and UI preferences in global state.
- For transient UI state (like open/closed modals), prefer local state in the parent component.

## 6. Routing and Navigation

- **React Router v6** will handle navigation.
- Define routes in `App.tsx` under `<BrowserRouter>`:
  - `/` → Dashboard
  - `/servers` → Server list & management
  - `/servers/:id` → Server details & logs
  - `/settings` → Global app settings

### User Flow
- A sidebar lets users jump between Dashboard, Servers, and Settings.
- Breadcrumbs appear on deeper routes (eg. Server → Configuration).

## 7. Performance Optimization

1. **Code Splitting**: Use React’s `lazy()` and `Suspense` for feature routes—servers page only loads when user navigates there.
2. **Asset Optimization**: Compress images, serve SVG icons via an icon component.
3. **Cache API Responses**: Keep LSP metadata in memory or local storage to avoid repeated network calls.
4. **Memoization**: Use `React.memo` and `useMemo` for expensive calculations or stable props.

## 8. Testing and Quality Assurance

### Testing Levels
- **Unit Tests**: Test components and utility functions with **Jest** and **React Testing Library**.
- **Integration Tests**: Combine components and mock API calls to ensure they work together.
- **End-to-End (E2E)**: Use **Cypress** to simulate user flows: starting a server, editing configs, viewing diagnostics.

### Tooling
- **ESLint** with a shared config (including TypeScript rules)
- **Prettier** for code formatting
- **Husky** + **lint-staged**: Run linting and tests on each commit

## 9. Conclusion and Frontend Summary

We’ve laid out how to build a modern, maintainable frontend for **lsp_maganag**. By using React, TypeScript, Tailwind CSS, and a clear component structure, we ensure the app will:
- Scale effortlessly as features grow
- Stay consistent in look and feel through theming and design rules
- Remain fast and responsive with code splitting and caching
- Keep a high bar for quality via automated tests and linting

Following these guidelines will help any developer—new or experienced—quickly contribute to a smooth, user-friendly interface for managing Language Server Protocol servers. Let’s get coding!