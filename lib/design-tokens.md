# Design System Tokens

This document explains how to use the design system tokens in the SimHealth Africa website redesign.

## Overview

Design tokens are defined in two places:

1. **CSS Custom Properties** (`app/globals.css`) - For use in CSS/SCSS files
2. **TypeScript Constants** (`lib/design-tokens.ts`) - For use in React components and JavaScript

## Using CSS Custom Properties

All design tokens are available as CSS custom properties (CSS variables) prefixed with `--`.

### Colors

```css
.my-component {
  /* Brand colors */
  background-color: var(--color-primary-green);
  border-color: var(--color-secondary-yellow);
  
  /* Neutral colors */
  color: var(--color-gray-900);
  background: var(--color-gray-100);
  
  /* Semantic colors */
  border: 1px solid var(--color-success);
}
```

### Typography

```css
.heading {
  font-family: var(--font-primary); /* Montserrat */
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-bold);
}

.body-text {
  font-family: var(--font-secondary); /* Roboto */
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}
```

### Spacing

```css
.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  gap: var(--spacing-md);
}
```

### Shadows, Radius, and Transitions

```css
.card {
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

## Using TypeScript Constants

Import design tokens in your React components:

```typescript
import { colors, spacing, typography, shadows } from '@/lib/design-tokens';

// Use in inline styles
const MyComponent = () => (
  <div style={{
    backgroundColor: colors.brand.primaryGreen,
    padding: spacing.lg,
    boxShadow: shadows.md,
  }}>
    Content
  </div>
);
```

### Media Queries

```typescript
import { mediaQueries, breakpoints } from '@/lib/design-tokens';

// Use in styled-components or CSS-in-JS
const StyledDiv = styled.div`
  padding: 16px;
  
  ${mediaQueries.tabletUp} {
    padding: 24px;
  }
  
  ${mediaQueries.desktopUp} {
    padding: 32px;
  }
`;
```

## Responsive Breakpoints

The design system uses the following breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Responsive Typography

Typography automatically scales on mobile devices through CSS custom properties:

```css
/* Desktop: h1 is 40px */
/* Mobile (≤767px): h1 is 32px */
h1 {
  font-size: var(--font-size-h1); /* Automatically responsive */
}
```

### Responsive Utility Classes

Use these classes to show/hide content at different breakpoints:

```html
<!-- Only visible on mobile -->
<div class="mobile-only">Mobile menu</div>

<!-- Visible on tablet and up -->
<div class="tablet-up">Desktop menu</div>

<!-- Visible on desktop and up -->
<div class="desktop-up">Large screen content</div>
```

## Typography Utility Classes

Pre-defined typography classes are available:

```html
<h1 class="text-display">Display Text</h1>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<p class="text-body-large">Large body text</p>
<p class="text-body">Regular body text</p>
<p class="text-body-small">Small body text</p>
<p class="text-caption">Caption text</p>
```

## Color Palette

### Brand Colors
- Primary Green: `#75c037` - Main brand color, CTAs, links
- Secondary Yellow: `#ffc42e` - Accents, highlights
- Dark Green: `#48811a` - Hover states, emphasis
- Light Green: `#a8d97f` - Backgrounds, tints
- Pale Green: `#e8f5dc` - Light backgrounds
- Amber: `#ffb800` - Alternative accent
- Pale Yellow: `#fff8e6` - Light backgrounds

### Neutral Colors
- Gray 900: `#1a1a1a` - Primary text
- Gray 700: `#4a4a4a` - Secondary text
- Gray 500: `#808080` - Tertiary text, disabled
- Gray 300: `#d1d1d1` - Borders, dividers
- Gray 100: `#f5f5f5` - Backgrounds
- White: `#ffffff` - Backgrounds, text on dark

### Semantic Colors
- Success: `#75c037` - Success messages, confirmations
- Warning: `#ffc42e` - Warnings, alerts
- Error: `#dc3545` - Errors, destructive actions
- Info: `#17a2b8` - Information, tips

## Spacing System

Based on an 8px grid:

- `xs`: 4px - Tight spacing
- `sm`: 8px - Small spacing
- `md`: 16px - Medium spacing (default)
- `lg`: 24px - Large spacing
- `xl`: 32px - Extra large spacing
- `2xl`: 48px - Section spacing
- `3xl`: 64px - Large section spacing
- `4xl`: 96px - Hero spacing

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Use CSS custom properties** in stylesheets for better performance
3. **Use TypeScript constants** when you need to compute values in JavaScript
4. **Follow the spacing system** for consistent layouts
5. **Use semantic colors** for their intended purpose
6. **Test responsive behavior** at all breakpoints
7. **Maintain accessibility** by ensuring sufficient color contrast

## Examples

### Button Component

```css
.button-primary {
  background-color: var(--color-primary-green);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-semibold);
  transition: background-color var(--transition-fast);
}

.button-primary:hover {
  background-color: var(--color-dark-green);
}

.button-primary:focus {
  outline: 2px solid var(--color-primary-green);
  outline-offset: 2px;
}
```

### Card Component

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  transition: box-shadow var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

@media (max-width: 767px) {
  .card {
    padding: var(--spacing-md);
  }
}
```

### Section Container

```css
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-4xl) var(--spacing-lg);
}

@media (max-width: 767px) {
  .section {
    padding: var(--spacing-3xl) var(--spacing-md);
  }
}
```
