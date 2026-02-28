import React from 'react';
import styles from './Flex.module.css';

export interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Flexible Flex container component for collections
 * Provides easy control over flexbox layout properties
 * 
 * @example
 * <Flex direction="row" justify="between" align="center" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 */
export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '',
}) => {
  const flexClass = [
    styles.flex,
    styles[`direction-${direction}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    wrap && styles.wrap,
    styles[`gap-${gap}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={flexClass}>{children}</div>;
};
