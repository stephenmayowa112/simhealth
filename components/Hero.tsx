'use client';

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
  const [isVisible, setIsVisible] = React.useState(false);
  const heroRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Split title into words for staggered reveal
  const titleWords = title.split(' ');

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background image */}
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

      {/* Dark gradient overlay */}
      <div className={styles.gradientOverlay} />

      {/* Decorative floating shapes */}
      <div className={styles.shapes} aria-hidden="true">
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
      </div>

      {/* Particle dots */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.overlay}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Eyebrow label */}
          <span className={styles.eyebrow}>Transforming Health Across Africa</span>

          {/* Title with word reveal */}
          <h1 className={styles.title}>
            {titleWords.map((word, i) => (
              <span
                key={i}
                className={styles.titleWord}
                style={{ animationDelay: `${0.4 + i * 0.12}s` }}
              >
                {word === 'Africa' ? <em>{word}</em> : word}
                {i < titleWords.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {ctaText && ctaLink && (
            <div className={styles.ctaWrapper}>
              <Button href={ctaLink} size="large" variant="primary">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
};
