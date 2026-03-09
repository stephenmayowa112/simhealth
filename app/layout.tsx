import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { CustomCursor } from '@/components/CustomCursor'
import { navigationItems, logoConfig } from '@/lib/navigation-data'

// Configure Plus Jakarta Sans (headings - sleek, modern, tech-forward)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-primary',
  display: 'swap',
})

// Configure Inter (body - highly legible, clean sans-serif)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
  display: 'swap',
})

// Configure Space Mono (accent - eyebrow labels, stats, tags)
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://simhealthafrica.org'),
  title: {
    default: 'SimHealth Africa - Africa Society for Improved Health Delivery',
    template: '%s | SimHealth Africa',
  },
  description:
    'SimHealth Africa is dedicated to improving health delivery across Africa through innovative programs, training, and partnerships.',
  keywords: [
    'SimHealth Africa',
    'health delivery',
    'Africa health',
    'medical training',
    'health programs',
    'healthcare innovation',
  ],
  authors: [{ name: 'SimHealth Africa' }],
  creator: 'SimHealth Africa',
  publisher: 'SimHealth Africa',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/logo1.png', type: 'image/png' },
      { url: '/images/logo1.png', sizes: 'any' },
    ],
    apple: [{ url: '/images/logo1.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simhealthafrica.org',
    siteName: 'SimHealth Africa',
    title: 'SimHealth Africa - Africa Society for Improved Health Delivery',
    description:
      'Improving health delivery across Africa through innovative programs, training, and partnerships.',
    images: [
      {
        url: '/images/logo1.png',
        width: 1200,
        height: 630,
        alt: 'SimHealth Africa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimHealth Africa',
    description: 'Africa Society for Improved Health Delivery',
    images: ['/images/logo1.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a3d0c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${spaceMono.variable}`}
      >
        {/* Progressive enhancement: switch to 'js' class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.replace('no-js','js')`,
          }}
        />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <CustomCursor />
        <header>
          <Navigation logo={logoConfig} items={navigationItems} />
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          {/* Wavy SVG divider */}
          <div className="footer-wave">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                fill="#0e1c06"
              />
            </svg>
          </div>
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Column 1: Brand & Info */}
            <div className="footer-section footer-brand" style={{ flex: '1 1 300px' }}>
              <img
                src="/images/logo1.png"
                alt="SimHealth Africa Logo"
                className="footer-logo-image"
                style={{ maxWidth: '200px', height: 'auto', marginBottom: '1.5rem' }}
              />
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#555' }}>
                At simHealth Africa, we serve as an independent research, documentation,
                dissemination, policy and advocacy center to support a wide range of programs in
                healthcare delivery. We are able to put together and deploy a strong, versatile,
                multi-disciplinary team who are able to successfully carry out project tasks.
              </p>
              <p style={{ fontWeight: 600, color: '#333' }}>
                info@simhealthafrica.org
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-section" style={{ flex: '1 1 200px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li><a href="/" style={{ color: '#555', textDecoration: 'none' }}>Home</a></li>
                  <li><a href="/about-us" style={{ color: '#555', textDecoration: 'none' }}>About Us</a></li>
                  <li><a href="/programs" style={{ color: '#555', textDecoration: 'none' }}>Our Programs</a></li>
                  <li><a href="/our-projects" style={{ color: '#555', textDecoration: 'none' }}>Our Projects</a></li>
                  <li><a href="/contact-us" style={{ color: '#555', textDecoration: 'none' }}>Contact Us</a></li>
                </ul>
              </nav>
            </div>

            {/* Column 3: Map */}
            <div className="footer-section" style={{ flex: '1 1 300px' }}>
              <iframe
                src="https://maps.google.com/maps?q=simHealth+Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px', maxWidth: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SimHealth Africa Location"
              ></iframe>
            </div>
          </div>
          <div className="footer-bottom" style={{ backgroundColor: '#2b5f16', padding: '1rem', textAlign: 'center', color: 'white', borderTop: 'none', marginTop: 0 }}>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>
              Africa Society for Improved Health Delivery, simHealth Africa® (Formally “Center for Health Research and Disease Prevention”) © 2021 All Rights Reserved. | Proudly Designed with ❤️ by Vital Web Digital Limited
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
