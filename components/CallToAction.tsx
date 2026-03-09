'use client'

import React from 'react'
import { Section } from './Section'
import { Button } from './Button'
import styles from './CallToAction.module.css'

export interface CallToActionProps {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  backgroundColor?: 'white' | 'gray' | 'green'
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = 'green',
}) => {
  const ctaRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ctaRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Section backgroundColor={backgroundColor}>
      <div
        ref={ctaRef}
        className={`${styles.cta} ${isVisible ? styles.visible : ''}`}
      >
        {/* Decorative blob background */}
        <div className={styles.blobContainer} aria-hidden="true">
          <div className={styles.blob1} />
          <div className={styles.blob2} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          <div className={styles.buttonWrapper}>
            <Button href={buttonLink} size="large" variant="primary">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
