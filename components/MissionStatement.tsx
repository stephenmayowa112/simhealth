'use client'

import React from 'react'
import { Section } from './Section'
import styles from './MissionStatement.module.css'

export interface MissionStatementProps {
  title?: string
  content: string
  backgroundColor?: 'white' | 'gray' | 'green'
}

export const MissionStatement: React.FC<MissionStatementProps> = ({
  title,
  content,
  backgroundColor = 'green',
}) => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Section backgroundColor={backgroundColor}>
      <div
        ref={sectionRef}
        className={`${styles.missionStatement} ${isVisible ? styles.visible : ''}`}
      >
        {/* Decorative quote mark */}
        <div className={styles.quoteIcon} aria-hidden="true">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 28C14 22.477 18.477 18 24 18V14C16.268 14 10 20.268 10 28V38H20V28H14Z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M34 28C34 22.477 38.477 18 44 18V14C36.268 14 30 20.268 30 28V38H40V28H34Z"
              fill="currentColor"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Left accent border */}
        <div className={styles.accentBorder} aria-hidden="true" />

        {title && <h2 className={styles.title}>{title}</h2>}
        <p className={styles.content}>{content}</p>
      </div>
    </Section>
  )
}
