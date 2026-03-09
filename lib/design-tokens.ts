/**
 * Design System Tokens - Cinematic Redesign
 */

export const colors = {
  brand: {
    primaryGreen: '#4a9e22',
    secondaryYellow: '#f5c842',
    darkGreen: '#1a3d0c',
    lightGreen: '#6db544',
    paleGreen: '#e2f0d5',
    amber: '#f09d1a',
    paleYellow: '#fef7e0',
    warmGold: '#f5c842',
    cream: '#faf7ef',
    ink: '#0e1c06',
  },
  neutral: {
    gray900: '#1a1a1a',
    gray700: '#4a4a4a',
    gray500: '#808080',
    gray300: '#d1d1d1',
    gray100: '#f5f5f5',
    white: '#faf7ef',
  },
  semantic: {
    success: '#4a9e22',
    warning: '#f5c842',
    error: '#dc3545',
    info: '#17a2b8',
  },
} as const

export const typography = {
  fontFamily: {
    primary: 'var(--font-primary)',
    secondary: 'var(--font-secondary)',
    accent: 'var(--font-accent)',
  },
  fontSize: {
    desktop: {
      display: 'clamp(2.5rem, 5vw, 4rem)',
      h1: 'clamp(2rem, 4vw, 3.25rem)',
      h2: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      h3: 'clamp(1.375rem, 2.5vw, 1.75rem)',
      h4: 'clamp(1.125rem, 2vw, 1.375rem)',
      bodyLarge: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
      body: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
      bodySmall: 'clamp(0.8125rem, 1vw, 0.9375rem)',
      caption: 'clamp(0.6875rem, 0.9vw, 0.8125rem)',
    },
    mobile: {
      display: 'clamp(2.5rem, 5vw, 4rem)',
      h1: 'clamp(2rem, 4vw, 3.25rem)',
      h2: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      h3: 'clamp(1.375rem, 2.5vw, 1.75rem)',
      h4: 'clamp(1.125rem, 2vw, 1.375rem)',
    },
  },
  lineHeight: {
    desktop: {
      display: '1.15',
      h1: '1.2',
      h2: '1.25',
      h3: '1.3',
      h4: '1.35',
      bodyLarge: '1.6',
      body: '1.65',
      bodySmall: '1.5',
      caption: '1.4',
    },
    mobile: {
      display: '1.15',
      h1: '1.2',
      h2: '1.25',
      h3: '1.3',
      h4: '1.35',
    },
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
} as const

export const shadows = {
  sm: '0 2px 8px rgba(14, 28, 6, 0.06)',
  md: '0 4px 24px rgba(14, 28, 6, 0.10)',
  lg: '0 8px 32px rgba(14, 28, 6, 0.14)',
  glowGreen: '0 2px 12px rgba(74, 158, 34, 0.35)',
} as const

export const borderRadius = {
  sm: '4px',
  md: '12px',
  lg: '20px',
  pill: '999px',
} as const

export const transitions = {
  fast: '0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  normal: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  slow: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
} as const

export const breakpoints = {
  mobile: { min: 320, max: 767 },
  tablet: { min: 768, max: 1023 },
  desktop: { min: 1024, max: 1439 },
  large: { min: 1440 },
} as const

export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile.min}px) and (max-width: ${breakpoints.mobile.max}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop.min}px) and (max-width: ${breakpoints.desktop.max}px)`,
  large: `@media (min-width: ${breakpoints.large.min}px)`,
  tabletUp: `@media (min-width: ${breakpoints.tablet.min}px)`,
  desktopUp: `@media (min-width: ${breakpoints.desktop.min}px)`,
  mobileOnly: `@media (max-width: ${breakpoints.mobile.max}px)`,
} as const

export type ColorBrand = keyof typeof colors.brand
export type ColorNeutral = keyof typeof colors.neutral
export type ColorSemantic = keyof typeof colors.semantic
export type Spacing = keyof typeof spacing
export type Shadow = keyof typeof shadows
export type BorderRadius = keyof typeof borderRadius
export type Transition = keyof typeof transitions
export type Breakpoint = keyof typeof breakpoints
