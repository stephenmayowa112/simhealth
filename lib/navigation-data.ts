import { NavItem } from '@/components/Navigation';

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
  },
  {
    label: 'Programs',
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
    label: 'Services',
    href: '/consultancy-services',
  },
  {
    label: 'Projects',
    href: '/our-projects',
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
  {
    label: 'Volunteer',
    href: '/volunteer',
  },
];

/**
 * Logo configuration
 */
export const logoConfig = {
  src: '/logo.svg',
  alt: 'SimHealth Africa - Africa Society for Improved Health Delivery',
  href: '/',
};
