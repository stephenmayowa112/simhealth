'use client'

import React from 'react'
import { Section } from './Section'
import { Grid } from './Grid'
import { Card } from './Card'
import styles from './ProgramsGrid.module.css'

export interface Program {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  link: string
}

export interface ProgramsGridProps {
  title?: string
  subtitle?: string
  programs: Program[]
  backgroundColor?: 'white' | 'gray' | 'green'
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({
  title,
  subtitle,
  programs,
  backgroundColor = 'white',
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Section backgroundColor={backgroundColor}>
      <div
        ref={sectionRef}
        className={`${styles.programsGrid} ${isVisible ? styles.visible : ''}`}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={styles.cardWrapper}
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <Card
                title={program.title}
                description={program.description}
                imageUrl={program.imageUrl}
                imageAlt={program.imageAlt}
                link={program.link}
                variant="default"
              />
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  )
}
