import { NavItem } from '@/components/Navigation'

/**
 * Navigation structure for simHealth Africa website
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
  },
  {
    label: 'Governance & Strategy',
    href: '/organization-strategy',
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
        label: 'simNovate (Innovation & Social Entrepreneurship)',
        href: '/innovation-and-social-entrepreneurship-program',
      },
      {
        label: 'simHealth Institute',
        href: '/simhealth-institute',
      },
      {
        label: 'simHealth Connect',
        href: '/simhealth-connect',
      },
      {
        label: 'Consultancy Services',
        href: '/consultancy-services',
      },
    ],
  },
  {
    label: 'Our Projects',
    href: '/our-projects',
  },
  {
    label: 'Events/News',
    href: '/news',
  },
  {
    label: 'Conferences & Publications',
    href: '/conferences-publications',
    children: [
      { 
        label: 'Conferences',
        href: '/conferences',
        children: [
          { label: 'AHD Conference', href: '/conferences/ahd-conference' },
          { label: 'MACE Conference', href: '/conferences/mace-conference' },
        ]
      },
      { 
        label: 'Publications',
        href: '/publications',
        children: [
          { label: 'Journal of Applied Health Research', href: '/publications/jahresearch' },
          { label: 'simHealth Connect Newsletter', href: '/publications/simhealth-connect' },
        ]
      },
    ]
  },
  {
    label: 'Partnerships & Collaborations',
    href: '/partnerships',
  },
  {
    label: 'Archive',
    href: '/archive',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
]

/**
 * Logo configuration
 */
export const logoConfig = {
  src: '/images/logo1.png',
  alt: 'simHealth Africa Logo',
  href: '/',
}
