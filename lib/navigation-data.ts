import { NavItem } from '@/components/Navigation'

/**
 * Navigation structure for SimHealth Africa website
 * Includes all major page sections with sub-menus where applicable
 */
export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Who We Are', href: '/about-us#who-we-are' },
      { label: 'Our Team', href: '/team' },
    ]
  },
  {
    label: 'Our Programs',
    href: '/programs',
    children: [
      {
        label: 'Health Program',
        href: '/health-program',
      },
      {
        label: 'Innovation & Social Entrepreneurship',
        href: '/innovation-and-social-entrepreneurship-program',
      },
      {
        label: 'SimHealth Institute',
        href: '/simhealth-institute',
      },
      {
        label: 'SimHealth Connect',
        href: '/simhealth-connect',
      },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Our Projects',
    href: '/our-projects',
  },
  {
    label: 'Conference & Publications',
    href: '/conference-publications',
    children: [
      { label: 'Conferences', href: '/conferences' },
      { label: 'Publications', href: '/publications' },
    ]
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
    children: [
      { label: 'Get in Touch', href: '/contact-us#form' },
      { label: 'Location', href: '/contact-us#location' },
    ]
  },
]

/**
 * Logo configuration
 */
export const logoConfig = {
  src: '/images/logo1.png',
  alt: 'SimHealth Africa Logo',
  href: '/',
}
