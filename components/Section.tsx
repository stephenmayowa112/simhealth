'use client';

import React from 'react';
import { colors } from '@/lib/design-tokens';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import styles from './Section.module.css';

export interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: 'white' | 'gray' | 'green';
  maxWidth?: string;
  className?: string;
  id?: string;
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = 'white',
  maxWidth = '1200px',
  className = '',
  id,
  animate = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const backgroundColors: Record<string, string> = {
    white: colors.neutral.white,
    gray: colors.neutral.gray100,
    green: colors.brand.paleGreen,
  };

  const sectionStyles: React.CSSProperties = {
    backgroundColor: backgroundColors[backgroundColor],
  };

  const containerStyles: React.CSSProperties = {
    maxWidth,
  };

  const animationClass = animate ? (isVisible ? styles.fadeIn : styles.hidden) : '';

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      style={sectionStyles} 
      className={`${styles.section} ${animationClass} ${className}`} 
      id={id}
    >
      <div style={containerStyles} className={styles.container}>
        {children}
      </div>
    </section>
  );
};
