import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
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
        <Footer />
      </body>
    </html>
  )
}
