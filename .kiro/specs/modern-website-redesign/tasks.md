# Implementation Plan: Modern Website Redesign

## Overview

This implementation plan breaks down the SimHealth Africa website redesign into actionable tasks for building a modern Next.js application. The redesign will preserve all existing content from 12 page sections while implementing a contemporary design system with responsive layouts, accessibility features, and performance optimizations.

The implementation follows a progressive approach: establish the foundation (Next.js setup, design system), build core components, create page sections, implement interactive features, and finalize with testing and optimization.

## Tasks

- [-] 1. Initialize Next.js project and design system foundation
  - [x] 1.1 Set up Next.js project with TypeScript
    - Initialize Next.js 14+ with App Router and TypeScript
    - Configure project structure (app/, components/, lib/, public/, styles/)
    - Set up ESLint and Prettier for code quality
    - _Requirements: 1.1, 1.4_

  - [x] 1.2 Implement design system tokens and CSS variables
    - Create design tokens file with colors, typography, spacing, shadows, and transitions
    - Define CSS custom properties for all design tokens
    - Implement responsive breakpoint system (mobile: 320-767px, tablet: 768-1023px, desktop: 1024-1439px, large: 1440px+)
    - _Requirements: 1.1, 1.2, 3.5, 5.2_

  - [x] 1.3 Set up typography system
    - Configure Montserrat and Roboto fonts using next/font
    - Create typography utility classes for all text styles (display, h1-h4, body, caption)
    - Implement responsive font sizing with mobile and desktop variants
    - Define line heights and font weights
    - _Requirements: 7.1, 7.3, 7.5_

  - [ ]\* 1.4 Write property test for typography system
    - **Property 14: Typography Properties Defined for All Text Types**
    - **Validates: Requirements 7.1**

- [x] 2. Build core UI component library
  - [x] 2.1 Create Button component with variants
    - Implement primary, secondary, and text button variants
    - Add small, medium, and large size options
    - Include hover states with transitions
    - Ensure keyboard accessibility and focus indicators
    - _Requirements: 1.3, 10.1, 9.3, 9.5_

  - [x] 2.2 Create Card component with variants
    - Implement default, featured, and compact card variants
    - Add box-shadow, border-radius, and hover elevation effects
    - Support optional image, title, description, and link props
    - Ensure responsive padding (24px desktop, 16px mobile)
    - _Requirements: 1.3, 12.2_

  - [ ]\* 2.3 Write property test for modern UI styling
    - **Property 1: UI Components Have Modern Styling**
    - **Validates: Requirements 1.3**

  - [x] 2.4 Create Section container component
    - Implement max-width constraint (1200px)
    - Add responsive padding (80px/24px desktop, 48px/16px mobile)
    - Support background color variants (white, gray, green)
    - Include vertical spacing between sections
    - _Requirements: 12.1, 12.3_

  - [ ]\* 2.5 Write property test for section spacing
    - **Property 29: Content Sections Have Spacing**
    - **Validates: Requirements 12.1**

- [x] 3. Implement navigation system
  - [x] 3.1 Create desktop navigation component
    - Build horizontal navigation bar with logo
    - Implement navigation links for all major sections
    - Add hover states with color transitions to primary green
    - Show active page indicator with underline
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

  - [x] 3.2 Create mobile navigation component
    - Implement hamburger menu icon
    - Build slide-in drawer navigation from right
    - Add accordion functionality for sub-menus
    - Include close button overlay
    - _Requirements: 4.4_

  - [x] 3.3 Implement responsive navigation switching
    - Show mobile nav on viewports 320-767px
    - Show desktop nav on viewports 768px+
    - Ensure consistent positioning across all pages
    - _Requirements: 4.4, 4.5_

  - [ ]\* 3.4 Write property test for navigation links
    - **Property 6: Navigation Links to All Major Sections**
    - **Validates: Requirements 4.1**

  - [ ]\* 3.5 Write property test for mobile navigation visibility
    - **Property 8: Mobile Navigation Present on Small Viewports**
    - **Validates: Requirements 4.4**

- [x] 4. Create layout components and page structure
  - [x] 4.1 Build root layout with header and footer
    - Create app/layout.tsx with navigation and footer
    - Implement semantic HTML structure (header, nav, main, footer)
    - Add metadata for SEO
    - Configure font loading
    - _Requirements: 9.4_

  - [x] 4.2 Create reusable grid and flex layout components
    - Build responsive grid component with configurable columns
    - Create flex container component for collections
    - Implement auto-responsive behavior (3 columns desktop, 2 tablet, 1 mobile)
    - _Requirements: 12.4_

  - [ ]\* 4.3 Write property test for grid layouts
    - **Property 31: Collections Use Grid or Flex Layouts**
    - **Validates: Requirements 12.4**

- [x] 5. Checkpoint - Verify foundation and core components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement homepage sections
  - [x] 6.1 Create hero section component
    - Build full-width hero banner with background image
    - Add overlay text with heading and call-to-action button
    - Implement responsive text sizing
    - Optimize hero image with next/image
    - _Requirements: 2.1, 6.2, 6.4_

  - [x] 6.2 Create mission statement section
    - Build centered text block with background color
    - Implement visual hierarchy with typography
    - Add appropriate spacing and padding
    - _Requirements: 1.5, 2.1_

  - [x] 6.3 Create programs grid section
    - Build 3-column responsive grid of program cards
    - Include card images, titles, descriptions, and links
    - Implement hover effects on cards
    - _Requirements: 2.1, 12.4_

  - [x] 6.4 Create call-to-action section
    - Build prominent CTA section with button
    - Use contrasting background color
    - Ensure button stands out with size and color
    - _Requirements: 11.2_

  - [x] 6.5 Create news preview section
    - Display latest 3 news articles in card format
    - Include article images, titles, dates, and excerpts
    - Add "Read More" links
    - _Requirements: 2.1, 12.4_

  - [ ]\* 6.6 Write property test for image containers
    - **Property 11: Image Containers Have Defined Dimensions**
    - **Validates: Requirements 6.2**

- [x] 7. Build About Us page
  - [x] 7.1 Create organization overview section
    - Build two-column layout with text and side image
    - Preserve all existing about-us content
    - Implement responsive stacking on mobile
    - _Requirements: 2.1_

  - [x] 7.2 Create team section with member cards
    - Build grid of team member cards with profile images
    - Include names, titles, and bio information
    - Implement 1:1 aspect ratio for profile images (300x300px)
    - _Requirements: 2.1, 6.2_

  - [x] 7.3 Create values section with icon blocks
    - Build grid of value cards with icons and text
    - Use visual markers to enhance comprehension
    - _Requirements: 12.5_

  - [ ]\* 7.4 Write property test for content preservation
    - **Property 2: Content Preservation Across All Sections**
    - **Validates: Requirements 2.1**

- [x] 8. Build program pages (Health, Innovation, SimHealth Institute)
  - [x] 8.1 Create program page template
    - Build reusable template for all program pages
    - Include program header with hero image
    - Add description section with rich text content
    - Preserve all existing program content
    - _Requirements: 2.1, 2.4_

  - [x] 8.2 Create impact metrics section
    - Build stat cards displaying key numbers
    - Implement visual hierarchy for metrics
    - Use cards with appropriate styling
    - _Requirements: 12.2_

  - [x] 8.3 Create related projects section
    - Display related projects in card grid
    - Link to individual project pages
    - _Requirements: 2.1, 12.4_

  - [ ]\* 8.4 Write property test for page sections existence
    - **Property 3: All Page Sections Exist**
    - **Validates: Requirements 2.2**

- [x] 9. Build services and projects pages
  - [x] 9.1 Create consultancy services page
    - Preserve all existing consultancy-services content
    - Build service offerings in card format
    - Include call-to-action for inquiries
    - _Requirements: 2.1, 2.4, 11.2_

  - [x] 9.2 Create projects listing page
    - Display all projects in organized grid layout
    - Include project images, titles, and descriptions
    - Preserve all existing our-projects content
    - _Requirements: 2.1, 12.4_

  - [x] 9.3 Create organization strategy page
    - Preserve all existing organization-strategy content
    - Implement clear visual hierarchy
    - Use sections with visual separation
    - _Requirements: 2.1, 12.1_

- [x] 10. Build news and blog functionality
  - [x] 10.1 Create news listing page
    - Display all news articles in grid or list layout
    - Include article images, titles, dates, and excerpts
    - Preserve all existing news content
    - Implement pagination or load more functionality
    - _Requirements: 2.1, 12.4_

  - [x] 10.2 Create individual news article template
    - Build article page with full content
    - Include featured image, title, date, and body
    - Implement proper typography hierarchy
    - _Requirements: 1.5, 7.3_

- [x] 11. Build contact and volunteer pages
  - [x] 11.1 Create contact page
    - Preserve all existing contact-us content
    - Build contact form with styled fields
    - Display contact information in cards with icons
    - Include multiple contact methods
    - Implement form validation with error messages
    - _Requirements: 2.1, 2.3, 11.1, 11.3_

  - [x] 11.2 Create volunteer page
    - Preserve all existing volunteer content
    - Make volunteer opportunities easily discoverable
    - Include prominent call-to-action buttons
    - _Requirements: 2.1, 11.4_

  - [ ]\* 11.3 Write property test for call-to-action visibility
    - **Property 11.2: CTA elements stand out through color, size, or positioning**
    - **Validates: Requirements 11.5**

- [x] 12. Build SimHealth Connect page
  - [x] 12.1 Create SimHealth Connect page
    - Preserve all existing simhealth-connect content
    - Implement appropriate layout and visual design
    - Include relevant images and call-to-action elements
    - _Requirements: 2.1_

- [x] 13. Checkpoint - Verify all pages and content
  - Ensure all tests pass, verify all 12 page sections are complete, ask the user if questions arise.

- [x] 14. Implement responsive design and mobile optimization
  - [x] 14.1 Implement responsive layouts across all pages
    - Ensure all pages work on mobile (320-767px)
    - Verify tablet layouts (768-1023px)
    - Test desktop layouts (1024px+)
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 14.2 Optimize touch targets for mobile
    - Ensure all interactive elements are minimum 44x44px on mobile
    - Test buttons, links, and form inputs
    - Adjust spacing for touch-friendly interaction
    - _Requirements: 3.4_

  - [ ]\* 14.3 Write property test for responsive layouts
    - **Property 4: Responsive Layouts Apply Across Viewports**
    - **Validates: Requirements 3.1, 3.2, 3.3**

  - [ ]\* 14.4 Write property test for touch target sizes
    - **Property 5: Touch Targets Meet Minimum Size on Mobile**
    - **Validates: Requirements 3.4**

- [x] 15. Implement accessibility features
  - [x] 15.1 Add alt text to all images
    - Ensure all img and next/image components have descriptive alt text
    - Review and update placeholder alt text
    - _Requirements: 9.1_

  - [x] 15.2 Verify color contrast ratios
    - Test all text/background combinations for WCAG AA compliance
    - Ensure minimum 4.5:1 contrast for normal text
    - Ensure minimum 3:1 contrast for large text
    - _Requirements: 7.2, 9.2_

  - [x] 15.3 Implement keyboard navigation
    - Verify all interactive elements are keyboard accessible
    - Test tab order and focus management
    - Ensure Enter/Space key activation for custom controls
    - _Requirements: 9.3_

  - [x] 15.4 Add focus indicators to all interactive elements
    - Implement visible focus styles with 2px primary green outline
    - Test focus indicators on all buttons, links, and form fields
    - _Requirements: 9.5_

  - [ ]\* 15.5 Write property test for alt text
    - **Property 22: All Images Have Alt Text**
    - **Validates: Requirements 9.1**

  - [ ]\* 15.6 Write property test for color contrast
    - **Property 15: Text Contrast Meets WCAG AA Standards**
    - **Validates: Requirements 7.2, 9.2**

  - [ ]\* 15.7 Write property test for keyboard accessibility
    - **Property 23: Interactive Elements Are Keyboard Accessible**
    - **Validates: Requirements 9.3**

- [x] 16. Implement performance optimizations
  - [x] 16.1 Optimize images with next/image
    - Use next/image for all images with automatic optimization
    - Define responsive image sizes
    - Implement lazy loading for below-fold images
    - Convert images to WebP format where appropriate
    - _Requirements: 6.4, 8.3_

  - [x] 16.2 Implement code splitting and lazy loading
    - Use dynamic imports for heavy components
    - Implement route-based code splitting
    - Lazy load non-critical components
    - _Requirements: 8.2_

  - [x] 16.3 Optimize CSS and JavaScript
    - Minify CSS and JavaScript in production build
    - Remove unused CSS
    - Implement critical CSS inlining
    - _Requirements: 8.2, 8.4_

  - [ ]\* 16.4 Write property test for image optimization
    - **Property 13: Image Assets Are Optimized**
    - **Validates: Requirements 6.4**

  - [ ]\* 16.5 Write property test for lazy loading
    - **Property 20: Below-Fold Images Use Lazy Loading**
    - **Validates: Requirements 8.3**

- [x] 17. Implement animations and interactions
  - [x] 17.1 Add hover states with transitions
    - Implement hover effects on all interactive elements
    - Add smooth color transitions (0.2s) for links
    - Add elevation transitions for cards
    - Add background transitions for buttons
    - _Requirements: 4.2, 10.1_

  - [x] 17.2 Implement smooth scrolling
    - Add smooth scroll behavior for anchor links
    - Implement scroll-to-top functionality
    - _Requirements: 10.2_

  - [x] 17.3 Add micro-interactions and animations
    - Implement fade-in animations for sections
    - Add slide-up animations for cards
    - Use GPU-accelerated properties (transform, opacity)
    - _Requirements: 10.3, 10.4_

  - [x] 17.4 Implement reduced motion support
    - Add prefers-reduced-motion media query
    - Disable or reduce animations when user prefers reduced motion
    - _Requirements: 10.5_

  - [ ]\* 17.5 Write property test for hover transitions
    - **Property 26: Hover States with Transitions**
    - **Validates: Requirements 4.2, 10.1**

  - [ ]\* 17.6 Write property test for GPU-accelerated animations
    - **Property 27: Animations Use GPU-Accelerated Properties**
    - **Validates: Requirements 10.4**

  - [ ]\* 17.7 Write property test for reduced motion
    - **Property 28: Reduced Motion Preferences Respected**
    - **Validates: Requirements 10.5**

- [x] 18. Implement brand identity elements
  - [x] 18.1 Add SimHealth Africa logo to header
    - Place logo in navigation header
    - Ensure logo is visible and properly sized
    - Link logo to homepage
    - _Requirements: 5.1_

  - [x] 18.2 Verify brand color usage throughout site
    - Ensure primary green (#75c037) is used consistently
    - Verify secondary yellow (#ffc42e) usage
    - Check dark green (#48811a) for hover states
    - _Requirements: 5.2, 5.3_

  - [ ]\* 18.3 Write property test for brand colors
    - **Property 10: Brand Colors Defined in Stylesheet**
    - **Validates: Requirements 5.2**

- [x] 19. Final testing and quality assurance
  - [x] 19.1 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge (last 2 versions)
    - Verify layouts and functionality across browsers
    - Fix any browser-specific issues
    - _Requirements: All_

  - [x] 19.2 Performance testing
    - Run Lighthouse audits on all pages
    - Verify page load times under 3 seconds
    - Optimize any performance bottlenecks
    - _Requirements: 8.1_

  - [ ]\* 19.3 Write property test for page load time
    - **Property 18: Page Load Time Under Target**
    - **Validates: Requirements 8.1**

  - [x] 19.3 Accessibility audit
    - Run axe DevTools on all pages
    - Verify WCAG 2.1 Level AA compliance
    - Fix any accessibility issues
    - _Requirements: 9.1-9.5_

  - [ ]\* 19.4 Write property test for semantic HTML
    - **Property 24: Semantic HTML Elements Used**
    - **Validates: Requirements 9.4**

  - [x] 19.4 Visual regression testing
    - Review all pages for visual consistency
    - Verify design system is applied consistently
    - Check responsive layouts at all breakpoints
    - _Requirements: 1.4_

- [x] 20. Final checkpoint and deployment preparation
  - Ensure all tests pass, verify all requirements are met, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- The implementation uses Next.js 14+ with App Router and TypeScript
- All existing content from 12 page sections must be preserved
- Design system tokens should be defined before building components
- Responsive design follows mobile-first approach
- Accessibility is built in from the start, not added later
- Performance optimizations leverage Next.js built-in features (next/image, code splitting)
- Property tests validate universal correctness properties across all inputs
- Unit tests (not listed here) should be added for specific edge cases and integration points
