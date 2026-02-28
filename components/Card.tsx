'use client';

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
  variant?: 'default' | 'featured' | 'compact';
  children?: React.ReactNode;
  className?: string;
  animate?: boolean;
  animationDelay?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = '',
  link,
  variant = 'default',
  children,
  className = '',
  animate = true,
  animationDelay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const baseStyles: React.CSSProperties = {
    animationDelay: animate ? `${animationDelay}s` : undefined,
  };

  const titleStyles: React.CSSProperties = {
    fontSize: variant === 'compact' ? '18px' : 'clamp(1.15rem, 1.5vw, 1.3rem)',
    fontWeight: 700,
    fontFamily: 'var(--font-primary)',
    color: 'var(--color-dark-green, #1a3d0c)',
    marginBottom: '8px',
    lineHeight: 1.3,
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: variant === 'compact' ? '14px' : '15px',
    fontFamily: 'var(--font-secondary)',
    color: 'var(--color-ink, #0e1c06)',
    opacity: 0.75,
    lineHeight: 1.6,
  };

  const variantClass = variant === 'default' ? styles.cardDefault :
                       variant === 'featured' ? styles.cardFeatured :
                       styles.cardCompact;

  const animationClass = animate ? (isVisible ? styles.slideUp : styles.hidden) : '';

  const cardContent = (
    <>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={variant === 'compact' ? 150 : 200}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.cardImage}
            loading="lazy"
          />
        </div>
      )}
      <div className={imageUrl ? styles.content : ''}>
        {title && <h3 style={titleStyles}>{title}</h3>}
        {description && <p style={descriptionStyles}>{description}</p>}
        {children}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        ref={elementRef as React.RefObject<HTMLAnchorElement>}
        href={link}
        style={{ ...baseStyles, textDecoration: 'none', cursor: 'pointer' }}
        className={`${styles.card} ${variantClass} ${animationClass} ${className}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      style={baseStyles}
      className={`${styles.card} ${variantClass} ${animationClass} ${className}`}
    >
      {cardContent}
    </div>
  );
};
