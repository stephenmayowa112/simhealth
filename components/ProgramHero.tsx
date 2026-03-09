'use client'

import React from 'react'
import Image from 'next/image'
import styles from './ProgramHero.module.css'

export interface ProgramHeroProps {
  title: string
  imageUrl?: string
  imageAlt?: string
}

export const ProgramHero: React.FC<ProgramHeroProps> = ({
  title,
  imageUrl,
  imageAlt = '',
}) => {
  return (
    <div className={styles.hero}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={styles.image}
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.overlay} />
        </div>
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
