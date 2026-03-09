import { Section } from '@/components'

export default function NavigationTestPage() {
  return (
    <Section>
      <h1>Navigation Test Page</h1>
      <p>This page demonstrates the navigation system implementation.</p>

      <h2>Features Implemented:</h2>
      <ul style={{ marginLeft: '24px', marginTop: '16px', lineHeight: '1.8' }}>
        <li>Desktop navigation with horizontal menu bar</li>
        <li>Logo placement in navigation header</li>
        <li>Navigation links for all major sections</li>
        <li>Hover states with color transitions to primary green</li>
        <li>Active page indicator with underline</li>
        <li>Mobile navigation with hamburger menu icon</li>
        <li>Slide-in drawer navigation from right</li>
        <li>Accordion functionality for sub-menus (Programs section)</li>
        <li>Close button overlay</li>
        <li>
          Responsive switching: mobile nav on 320-767px, desktop nav on 768px+
        </li>
        <li>Consistent positioning across all pages (sticky header)</li>
      </ul>

      <h2>Navigation Structure:</h2>
      <ul style={{ marginLeft: '24px', marginTop: '16px', lineHeight: '1.8' }}>
        <li>Home</li>
        <li>About Us</li>
        <li>
          Programs (with sub-menu)
          <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
            <li>Health Program</li>
            <li>Innovation & Social Entrepreneurship</li>
            <li>SimHealth Institute</li>
          </ul>
        </li>
        <li>Services</li>
        <li>Projects</li>
        <li>News</li>
        <li>Contact</li>
        <li>Volunteer</li>
      </ul>

      <h2>Testing Instructions:</h2>
      <ol style={{ marginLeft: '24px', marginTop: '16px', lineHeight: '1.8' }}>
        <li>
          On desktop (768px+): Hover over navigation links to see color
          transitions
        </li>
        <li>
          On desktop: Hover over &quot;Programs&quot; to see dropdown menu
        </li>
        <li>On desktop: Notice the active page indicator (green underline)</li>
        <li>On mobile (320-767px): Click hamburger menu to open drawer</li>
        <li>
          On mobile: Click &quot;Programs&quot; accordion to expand sub-menu
        </li>
        <li>On mobile: Click close button or overlay to close drawer</li>
        <li>Resize browser to test responsive switching</li>
      </ol>

      <div
        style={{
          marginTop: '48px',
          padding: '24px',
          backgroundColor: '#e8f5dc',
          borderRadius: '8px',
        }}
      >
        <h3>Requirements Validated:</h3>
        <ul
          style={{ marginLeft: '24px', marginTop: '16px', lineHeight: '1.8' }}
        >
          <li>
            <strong>4.1:</strong> Navigation provides clear access to all major
            sections ✓
          </li>
          <li>
            <strong>4.2:</strong> Hover states provide visual feedback with
            color transitions ✓
          </li>
          <li>
            <strong>4.3:</strong> Active page indicator shows current location ✓
          </li>
          <li>
            <strong>4.4:</strong> Mobile-friendly menu interface implemented ✓
          </li>
          <li>
            <strong>4.5:</strong> Consistent positioning across all pages
            (sticky header) ✓
          </li>
        </ul>
      </div>
    </Section>
  )
}
