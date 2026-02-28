import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import styles from './Hero.module.css';

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
  backgroundAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundAlt = '',
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className={styles.backgroundImage}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {ctaText && ctaLink && (
            <Button href={ctaLink} size="large" variant="primary">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
