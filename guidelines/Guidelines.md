# Tailwind Card Playground Guidelines

## Design System Customization

You can customize the design tokens directly via Tailwind v4 CSS variables.
1. Open `/src/styles/theme.css`
2. Modify variables inside the `@theme` block
3. Save to see updates propagated across the app

## Naming Convention

When modifying components based on design system specific tokens rather than standard tailwind, use `.ds-*` class names where applicable.
