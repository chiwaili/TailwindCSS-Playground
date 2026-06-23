# Tailwind Card Playground

An interactive playground for learning Tailwind CSS utility classes. Select named options from a controls panel, see the card update live, and inspect the generated class names in real time.

![screenshot placeholder](./assets/screenshot.png)

## Features

- **Live preview** — card updates instantly as you change controls
- **Code panel** — shows the exact Tailwind classes applied to each element
- **Multiple card templates** — Stats, Product, Blog, and Profile
- **Randomize** — generates a random combination of classes to explore
- **Shareable links** — encodes the current state in the URL so you can share a specific configuration

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Vite 6
- `react-resizable-panels` for the layout
- `lucide-react` for icons
- `sonner` for toast notifications

## Getting Started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Customizing the Design System

Design tokens are defined as Tailwind v4 CSS variables in [src/styles/theme.css](src/styles/theme.css). Edit the `@theme` block there to propagate changes across the app. Custom design-system classes use the `.ds-*` prefix.

## Project Structure

```
src/
  components/
    CardPreview.tsx   # The live card component
    ControlsPanel.tsx # Left-hand controls
    CodePanel.tsx     # Generated class display
  data/
    options.ts        # All available Tailwind class options
  styles/
    theme.css         # Design tokens (@theme block)
    fonts.css
    globals.css
  types.ts            # CardState type and default states
  App.tsx
```

## License

Apache-2.0
