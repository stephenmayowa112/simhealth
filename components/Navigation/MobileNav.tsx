'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { colors, transitions } from '@/lib/design-tokens';
import styles from './MobileNav.module.css';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MobileNavProps {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  items: NavItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ logo, items }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const toggleAccordion = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  // Close menu on route change
  React.useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      {/* Mobile Header */}
      <nav className={styles.mobileNav} aria-label="Mobile navigation">
        <div className={styles.header}>
          {/* Logo */}
          {logo && (
            <Link href={logo.href || '/'} className={styles.logo}>
              <Image src={logo.src} alt={logo.alt} width={150} height={50} className={styles.logoImage} priority />
            </Link>
          )}

          {/* Hamburger Menu Button */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Navigation Items */}
        <ul className={styles.navList}>
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = isActive(item.href);
            const isExpanded = expandedItems.has(item.href);

            return (
              <li key={item.href} className={styles.navItem}>
                <div className={styles.navItemHeader}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>

                  {/* Accordion Toggle Button */}
                  {hasChildren && (
                    <button
                      className={styles.accordionToggle}
                      onClick={() => toggleAccordion(item.href)}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                      aria-expanded={isExpanded}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.accordionIcon} ${isExpanded ? styles.expanded : ''}`}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Sub-menu (Accordion) */}
                {hasChildren && isExpanded && (
                  <ul className={styles.subMenu}>
                    {item.children!.map((child) => (
                      <li key={child.href} className={styles.subMenuItem}>
                        <Link
                          href={child.href}
                          className={`${styles.subMenuLink} ${
                            isActive(child.href) ? styles.subMenuActive : ''
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
    </>
  );
};
