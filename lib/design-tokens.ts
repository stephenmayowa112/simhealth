/**
 * Design System Tokens
 * 
 * This file provides type-safe access to design tokens defined in globals.css.
 * Use these constants when you need to access design values in JavaScript/TypeScript.
 */

export const colors = {
  brand: {
    primaryGreen: '#75c037',
    secondaryYellow: '#ffc42e',
    darkGreen: '#48811a',
    lightGreen: '#a8d97f',
    paleGreen: '#e8f5dc',
    amber: '#ffb800',
    paleYellow: '#fff8e6',
  },
  neutral: {
    gray900: '#1a1a1a',
    gray700: '#4a4a4a',
    gray500: '#808080',
    gray300: '#d1d1d1',
    gray100: '#f5f5f5',
    white: '#ffffff',
  },
  semantic: {
    success: '#75c037',
    warning: '#ffc42e',
    error: '#dc3545',
    info: '#17a2b8',
  },
} as const;

export const typography = {
  fontFamily: {
    primary: "var(--font-primary)",
    secondary: "var(--font-secondary)",
  },
  fontSize: {
    desktop: {
      display: '48px',
      h1: '40px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      bodyLarge: '18px',
      body: '16px',
      bodySmall: '14px',
      caption: '12px',
    },
    mobile: {
      display: '36px',
      h1: '32px',
      h2: '28px',
      h3: '22px',
      h4: '18px',
    },
  },
  lineHeight: {
    desktop: {
      display: '56px',
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '28px',
      bodyLarge: '28px',
      body: '24px',
      bodySmall: '20px',
      caption: '16px',
    },
    mobile: {
      display: '44px',
      h1: '40px',
      h2: '36px',
      h3: '30px',
      h4: '26px',
    },
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
} as const;

export const shadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
  md: '0 4px 16px rgba(0, 0, 0, 0.12)',
  lg: '0 8px 24px rgba(0, 0, 0, 0.16)',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
} as const;

export const transitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

export const breakpoints = {
  mobile: {
    min: 320,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
    max: 1439,
  },
  large: {
    min: 1440,
  },
} as const;

/**
 * Media query helpers for responsive design
 */
export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile.min}px) and (max-width: ${breakpoints.mobile.max}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop.min}px) and (max-width: ${breakpoints.desktop.max}px)`,
  large: `@media (min-width: ${breakpoints.large.min}px)`,
  tabletUp: `@media (min-width: ${breakpoints.tablet.min}px)`,
  desktopUp: `@media (min-width: ${breakpoints.desktop.min}px)`,
  mobileOnly: `@media (max-width: ${breakpoints.mobile.max}px)`,
} as const;

/**
 * Type definitions for design tokens
 */
export type ColorBrand = keyof typeof colors.brand;
export type ColorNeutral = keyof typeof colors.neutral;
export type ColorSemantic = keyof typeof colors.semantic;
export type Spacing = keyof typeof spacing;
export type Shadow = keyof typeof shadows;
export type BorderRadius = keyof typeof borderRadius;
export type Transition = keyof typeof transitions;
export type Breakpoint = keyof typeof breakpoints;
