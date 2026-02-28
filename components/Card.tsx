'use client';

import React from 'react';
import Image from 'next/image';
import { colors, shadows, borderRadius, spacing, transitions } from '@/lib/design-tokens';
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
  const [isHovered, setIsHovered] = React.useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const baseStyles: React.CSSProperties = {
    boxShadow: isHovered ? shadows.md : shadows.sm,
    transition: `box-shadow ${transitions.normal}, transform ${transitions.normal}`,
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    animationDelay: animate ? `${animationDelay}s` : undefined,
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: variant === 'compact' ? '150px' : '200px',
    objectFit: 'cover',
    display: 'block',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: variant === 'compact' ? '18px' : '20px',
    fontWeight: 600,
    color: colors.neutral.gray900,
    marginBottom: spacing.sm,
    lineHeight: variant === 'compact' ? '26px' : '28px',
  };

  const descriptionStyles: React.CSSProperties = {
    fontSize: variant === 'compact' ? '14px' : '16px',
    color: colors.neutral.gray700,
    lineHeight: variant === 'compact' ? '20px' : '24px',
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardContent}
    </div>
  );
};
