'use client'

import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
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
  style,
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontFamily: 'var(--font-secondary)',
    borderRadius: '999px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: disabled ? 0.6 : 1,
    position: 'relative',
    overflow: 'hidden',
  }

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '10px 24px',
      fontSize: '0.85rem',
      lineHeight: '1.4',
      minHeight: '44px',
    },
    medium: {
      padding: '12px 32px',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      minHeight: '48px',
    },
    large: {
      padding: '16px 40px',
      fontSize: '1.05rem',
      lineHeight: '1.5',
      minHeight: '56px',
    },
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#4a9e22',
      color: '#ffffff',
      boxShadow: '0 2px 12px rgba(74, 158, 34, 0.35)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#1a3d0c',
      border: '2px solid #1a3d0c',
    },
    text: {
      backgroundColor: 'transparent',
      color: '#4a9e22',
      padding: sizeStyles[size].padding,
    },
  }

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    const target = e.currentTarget as HTMLElement
    if (variant === 'primary') {
      target.style.backgroundColor = '#3d8a1b'
      target.style.boxShadow = '0 4px 20px rgba(74, 158, 34, 0.5)'
      target.style.transform = 'translateY(-2px)'
    } else if (variant === 'secondary') {
      target.style.backgroundColor = '#1a3d0c'
      target.style.color = '#ffffff'
      target.style.transform = 'translateY(-2px)'
    } else if (variant === 'text') {
      target.style.color = '#1a3d0c'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'translateY(0)'
    if (variant === 'primary') {
      target.style.backgroundColor = '#4a9e22'
      target.style.boxShadow = '0 2px 12px rgba(74, 158, 34, 0.35)'
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'transparent'
      target.style.color = '#1a3d0c'
    } else if (variant === 'text') {
      target.style.color = '#4a9e22'
    }
  }

  const commonProps = {
    style: combinedStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className,
  }

  if (href && !disabled) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...commonProps}>
      {children}
    </button>
  )
}
