'use client';

import React from 'react';
import { colors, transitions, borderRadius, spacing } from '@/lib/design-tokens';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: borderRadius.sm,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: `background-color ${transitions.fast}, color ${transitions.fast}, border-color ${transitions.fast}`,
    fontFamily: 'inherit',
    opacity: disabled ? 0.6 : 1,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: `${spacing.sm} ${spacing.lg}`,
      fontSize: '14px',
      lineHeight: '20px',
      minHeight: '44px', // Minimum touch target for mobile
    },
    medium: {
      padding: `12px ${spacing.xl}`,
      fontSize: '16px',
      lineHeight: '24px',
      minHeight: '48px', // Comfortable touch target
    },
    large: {
      padding: `${spacing.md} 40px`,
      fontSize: '18px',
      lineHeight: '28px',
      minHeight: '56px', // Large touch target
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.brand.darkGreen, // Using dark green for better contrast (4.6:1)
      color: colors.neutral.white,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.brand.darkGreen, // Using dark green for consistency
      border: `2px solid ${colors.brand.darkGreen}`,
    },
    text: {
      backgroundColor: 'transparent',
      color: colors.brand.darkGreen, // Using dark green for better contrast
      padding: sizeStyles[size].padding,
    },
  };

  const hoverStyles: Record<string, string> = {
    primary: colors.brand.primaryGreen, // Hover to primary green
    secondary: colors.brand.darkGreen, // Hover to dark green
    text: '#3a6614', // Darker green for text hover (even better contrast)
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const target = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      target.style.backgroundColor = hoverStyles.primary;
    } else if (variant === 'secondary') {
      target.style.backgroundColor = hoverStyles.secondary;
      target.style.color = colors.neutral.white;
      target.style.borderColor = hoverStyles.secondary;
    } else if (variant === 'text') {
      target.style.color = hoverStyles.text;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const target = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      target.style.backgroundColor = colors.brand.darkGreen;
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'transparent';
      target.style.color = colors.brand.darkGreen;
      target.style.borderColor = colors.brand.darkGreen;
    } else if (variant === 'text') {
      target.style.color = colors.brand.darkGreen;
    }
  };

  const commonProps = {
    style: combinedStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className,
  };

  if (href && !disabled) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      {children}
    </button>
  );
};
