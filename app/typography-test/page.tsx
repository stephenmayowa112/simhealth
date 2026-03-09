/**
 * Typography Test Page
 * This page demonstrates all typography styles defined in the design system
 */

export default function TypographyTestPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Typography System Test</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Headings</h2>
        <div className="text-display">
          Display Text - Montserrat Bold 48px/56px (36px/44px mobile)
        </div>
        <h1>Heading 1 - Montserrat Bold 40px/48px (32px/40px mobile)</h1>
        <h2>Heading 2 - Montserrat Semibold 32px/40px (28px/36px mobile)</h2>
        <h3>Heading 3 - Montserrat Semibold 24px/32px (22px/30px mobile)</h3>
        <h4>Heading 4 - Montserrat Semibold 20px/28px (18px/26px mobile)</h4>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Body Text</h2>
        <p className="text-body-large">
          Body Large - Roboto Regular 18px/28px. This is larger body text used
          for emphasis or introductory paragraphs.
        </p>
        <p className="text-body">
          Body - Roboto Regular 16px/24px. This is the standard body text used
          throughout the website for most content.
        </p>
        <p className="text-body-small">
          Body Small - Roboto Regular 14px/20px. This is smaller body text used
          for secondary information.
        </p>
        <p className="text-caption">
          Caption - Roboto Regular 12px/16px. This is caption text used for
          image captions and fine print.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Font Weights</h2>
        <p style={{ fontWeight: 400 }}>Regular (400) - Standard text weight</p>
        <p style={{ fontWeight: 500 }}>
          Medium (500) - Slightly emphasized text
        </p>
        <p style={{ fontWeight: 600 }}>Semibold (600) - Used for subheadings</p>
        <p style={{ fontWeight: 700 }}>Bold (700) - Used for strong emphasis</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Responsive Typography</h2>
        <p className="text-body">
          Resize your browser window to see how typography scales between mobile
          and desktop breakpoints. Display, H1, H2, H3, and H4 have different
          sizes on mobile (320-767px) vs desktop (768px+).
        </p>
      </section>
    </div>
  )
}
