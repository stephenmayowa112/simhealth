'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { colors, transitions, spacing } from '@/lib/design-tokens';
import styles from './DesktopNav.module.css';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface DesktopNavProps {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  items: NavItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ logo, items }) => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.desktopNav} aria-label="Main navigation">
      <div className={styles.container}>
        {/* Logo */}
        {logo && (
          <Link href={logo.href || '/'} className={styles.logo}>
            <Image src={logo.src} alt={logo.alt} width={150} height={50} className={styles.logoImage} priority />
          </Link>
        )}

        {/* Navigation Links */}
        <ul className={styles.navList}>
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = isActive(item.href);

            return (
              <li
                key={item.href}
                className={styles.navItem}
                onMouseEnter={() => hasChildren && setActiveDropdown(item.href)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.active : ''}`}
                >
                  {item.label}
                </Link>

                {/* Dropdown for sub-menu */}
                {hasChildren && activeDropdown === item.href && (
                  <ul className={styles.dropdown}>
                    {item.children!.map((child) => (
                      <li key={child.href} className={styles.dropdownItem}>
                        <Link
                          href={child.href}
                          className={`${styles.dropdownLink} ${
                            isActive(child.href) ? styles.dropdownActive : ''
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
