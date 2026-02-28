'use client';

import React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavigationProps {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  items: NavItem[];
}

/**
 * Navigation component that handles responsive switching between desktop and mobile navigation.
 * - Shows mobile nav on viewports 320-767px
 * - Shows desktop nav on viewports 768px+
 * - Ensures consistent positioning across all pages
 */
export const Navigation: React.FC<NavigationProps> = ({ logo, items }) => {
  return (
    <>
      {/* Desktop Navigation - visible on 768px+ */}
      <DesktopNav logo={logo} items={items} />
      
      {/* Mobile Navigation - visible on 320-767px */}
      <MobileNav logo={logo} items={items} />
    </>
  );
};
