import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { navigationItems, logoConfig } from '@/lib/navigation-data'

// Configure Montserrat font (primary - for headings)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Configure Roboto font (secondary - for body text)
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://simhealthafrica.org'),
  title: {
    default: 'SimHealth Africa - Africa Society for Improved Health Delivery',
    template: '%s | SimHealth Africa',
  },
  description: 'SimHealth Africa is dedicated to improving health delivery across Africa through innovative programs, training, and partnerships.',
  keywords: ['SimHealth Africa', 'health delivery', 'Africa health', 'medical training', 'health programs', 'healthcare innovation'],
  authors: [{ name: 'SimHealth Africa' }],
  creator: 'SimHealth Africa',
  publisher: 'SimHealth Africa',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simhealthafrica.org',
    siteName: 'SimHealth Africa',
    title: 'SimHealth Africa - Africa Society for Improved Health Delivery',
    description: 'Improving health delivery across Africa through innovative programs, training, and partnerships.',
    images: [
      {
        url: '/logo.svg',
        width: 200,
        height: 60,
        alt: 'SimHealth Africa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimHealth Africa',
    description: 'Africa Society for Improved Health Delivery',
    images: ['/logo.svg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#75c037',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <header>
          <Navigation logo={logoConfig} items={navigationItems} />
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SimHealth Africa</h3>
              <p>Africa Society for Improved Health Delivery</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/programs">Programs</a></li>
                  <li><a href="/our-projects">Projects</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Get in touch with us</p>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SimHealth Africa. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
