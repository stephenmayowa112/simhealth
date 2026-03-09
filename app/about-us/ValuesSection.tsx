import React from 'react'
import { Section } from '@/components/Section'
import styles from './about-us.module.css'

// Values data
const values = [
  {
    title: 'Excellence',
    description:
      'We strive for the highest standards in all our programs and services.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: 'Innovation',
    description:
      'We embrace creative solutions and evidence-based approaches to health challenges.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: 'Collaboration',
    description:
      'We work together with partners and communities to achieve shared health goals.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: 'Integrity',
    description:
      'We maintain the highest ethical standards and transparency in all our operations.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: 'Impact',
    description:
      'We focus on measurable outcomes that improve health and wellbeing in communities.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="currentColor"/>
    </svg>`,
  },
  {
    title: 'Sustainability',
    description:
      'We build programs that create lasting change and long-term health improvements.',
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" fill="currentColor"/>
    </svg>`,
  },
]

export default function ValuesSection() {
  return (
    <Section backgroundColor="white">
      <h2 className={styles.sectionHeading}>Our Values</h2>
      <div className={styles.valuesGrid}>
        {values.map((value, index) => (
          <div key={index} className={styles.valueCard}>
            <div className={styles.valueIconWrapper}>
              <div dangerouslySetInnerHTML={{ __html: value.icon }} />
            </div>
            <h4 className={styles.valueTitle}>{value.title}</h4>
            <p className={styles.valueDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
