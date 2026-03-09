'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './DesktopNav.module.css'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface DesktopNavProps {
  logo?: {
    src: string
    alt: string
    href?: string
  }
  items: NavItem[]
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ logo, items }) => {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  )
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Separate "Get Involved" / "Volunteer" as the CTA
  const mainItems = items.filter((i) => i.href !== '/volunteer')
  const ctaItem = items.find((i) => i.href === '/volunteer')

  return (
    <nav
      className={`${styles.desktopNav} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        {/* Logo as text */}
        <Link href={logo?.href || '/'} className={styles.logo}>
          <span className={styles.logoText}>SimHealth Africa</span>
          <span className={styles.logoTagline}>
            Africa Society for Improved Health Delivery
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className={styles.navList}>
          {mainItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0
            const active = isActive(item.href)

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
            )
          })}
          {/* CTA Button */}
          {ctaItem && (
            <li className={styles.navItem}>
              <Link href={ctaItem.href} className={styles.ctaButton}>
                {ctaItem.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
