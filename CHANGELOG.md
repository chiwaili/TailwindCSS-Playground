# Changelog

All notable changes to this project will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Added
- Mobile-friendly layout: tabbed Controls / Preview / Code navigation on screens narrower than 768 px (`md` breakpoint)
- Bottom tab bar with icons for each panel; active tab highlighted in indigo
- `h-dvh` on mobile to correctly account for browser chrome on iOS/Android

### Changed
- Desktop layout unchanged — resizable panels still used at `md+`

---

## [0.2.0] — 2026-06-29

### Added
- GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment to GitHub Pages on every push to `main`
- Demo link and screenshot in README
- Screenshot image (`src/tailwind-playground.png`)

### Changed
- Vite `base` set to `/TailwindCSS-Playground/` for correct asset paths under the GitHub Pages subpath
- Various component polish across `CardPreview`, `CodePanel`, and `ControlsPanel`
- README updated with demo link, screenshot, and feature list

---

## [0.1.0] — 2026-06-23

### Added
- Initial release: React 19 + TypeScript + Tailwind CSS v4 card playground
- Three-panel resizable layout — Controls, Preview, Code — powered by `react-resizable-panels`
- Four card templates: Stats, Product, Blog, Profile
- Hover-to-highlight: hovering a control in the left panel outlines the corresponding element in the card
- Randomize button to generate a random combination of Tailwind classes
- Shareable links: current state encoded in the URL via `btoa`/`atob`
- Syntax-highlighted HTML output panel with "Copy HTML" button (`prismjs`)
- Toast notifications via `sonner`
- GitHub Pages deployment config
- Apache-2.0 license
