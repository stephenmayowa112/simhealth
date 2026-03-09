'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
    <motion.div
      className={styles.navWrapper}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav
        className={`${styles.desktopNav} ${scrolled ? styles.scrolled : ''}`}
        aria-label="Main navigation"
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link href={logo?.href || '/'} className={styles.logo}>
            {logo?.src ? (
              <Image
                src={logo.src}
                alt={logo.alt || 'SimHealth Africa'}
                width={160}
                height={50}
                className={styles.logoImage}
                priority
              />
            ) : (
              <span className={styles.logoText}>SimHealth Africa</span>
            )}
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
                    {hasChildren && <ChevronDown size={14} className={styles.dropdownIcon} />}
                  </Link>

                  <AnimatePresence>
                    {hasChildren && activeDropdown === item.href && (
                      <motion.ul
                        className={styles.dropdown}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {item.children!.map((child) => (
                          <li key={child.href} className={styles.dropdownItem}>
                            <Link
                              href={child.href}
                              className={`${styles.dropdownLink} ${isActive(child.href) ? styles.dropdownActive : ''}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}

            {/* CTA Button */}
            {ctaItem && (
              <li className={styles.navItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={ctaItem.href} className={styles.ctaButton}>
                    {ctaItem.label}
                  </Link>
                </motion.div>
              </li>
            )}
          </ul>
        </div>
      </motion.nav>
    </motion.div>
  )
}
