# About Us Page

This page implements the About Us section for SimHealth Africa, preserving all existing content from the original site while applying the modern design system.

## Sections Implemented

### 1. Organization Overview Section
- **Layout**: Two-column layout (text + side image)
- **Content**: Organization description and Board of Trustees information
- **CTA**: Button linking to Organization Strategy page
- **Responsive**: Stacks vertically on mobile devices (< 768px)
- **Requirements**: 2.1

### 2. Vision and Mission Section
- **Layout**: Two-column grid with icon cards
- **Content**: 
  - Vision: "To achieve good health and build human resource capacity..."
  - Mission: "simHealth Africa is a knowledge-based organization..."
- **Design**: Cards with icons, shadows, and hover effects
- **Requirements**: 2.1

### 3. Governance Section
- **Layout**: Centered text block with icon
- **Content**: Legal status and governance structure (CAC/IT/NO 36867)
- **Requirements**: 2.1

### 4. Team Section
- **Layout**: Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- **Content**: Team member cards with profile images, names, titles, and bios
- **Images**: 300x300px (1:1 aspect ratio) profile photos
- **Design**: Cards with hover effects (elevation + transform)
- **Requirements**: 2.1, 6.2

### 5. Values Section
- **Layout**: Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- **Content**: Six core values with icons and descriptions
  - Excellence
  - Innovation
  - Collaboration
  - Integrity
  - Impact
  - Sustainability
- **Design**: Icon blocks with visual markers
- **Requirements**: 12.5

## Responsive Behavior

### Mobile (< 768px)
- Single column layout for all sections
- Overview section: Content first, image second
- Reduced padding and font sizes
- Full-width cards

### Tablet (768px - 1023px)
- Two-column layout for overview section
- Two-column grids for vision/mission, team, and values
- Increased spacing between elements

### Desktop (1024px+)
- Three-column grids for team and values sections
- Larger typography
- Maximum content width: 1200px

## Content Preservation

All content from the original about-us page has been preserved:
- Organization description
- Vision statement
- Mission statement
- Governance and legal status information
- Board of Trustees reference
- Management team reference

## Images Required

Replace placeholder files with actual images:
- `/public/images/about-overview.jpg` (600x400px)
- `/public/images/team/member-1.jpg` (300x300px)
- `/public/images/team/member-2.jpg` (300x300px)
- `/public/images/team/member-3.jpg` (300x300px)

## Design System Usage

- **Colors**: Primary green, gray neutrals, pale green backgrounds
- **Typography**: Montserrat for headings, responsive sizing
- **Spacing**: 8px grid system (16px, 24px, 32px, 48px, 64px)
- **Shadows**: Card shadows (sm: 0 2px 8px, md: 0 4px 16px)
- **Transitions**: 0.3s ease for hover effects
- **Border Radius**: 8px for cards and images

## Accessibility

- Semantic HTML structure (main, section, h1-h4)
- Alt text for all images
- Proper heading hierarchy
- Keyboard accessible buttons and links
- Focus indicators on interactive elements

## Future Enhancements

- Add actual team member data from database/CMS
- Implement dynamic values section
- Add animations on scroll
- Include team member detail pages
- Add social media links for team members
