import React from 'react';
import styles from './Grid.module.css';

export interface GridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Responsive Grid component with configurable columns
 * Default behavior: 3 columns desktop, 2 tablet, 1 mobile
 * 
 * @example
 * <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */
export const Grid: React.FC<GridProps> = ({
  children,
  columns = { desktop: 3, tablet: 2, mobile: 1 },
  gap = 'lg',
  className = '',
}) => {
  const gridClass = [
    styles.grid,
    styles[`gap-${gap}`],
    styles[`cols-mobile-${columns.mobile || 1}`],
    styles[`cols-tablet-${columns.tablet || 2}`],
    styles[`cols-desktop-${columns.desktop || 3}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={gridClass}>{children}</div>;
};
