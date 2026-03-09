'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      if (!visible) setVisible(true)
    }

    const onMouseEnterInteractive = () => setHovering(true)
    const onMouseLeaveInteractive = () => setHovering(false)

    const onMouseLeaveWindow = () => setVisible(false)
    const onMouseEnterWindow = () => setVisible(true)

    // Ring follows with lag via RAF
    const animateRing = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }

      raf.current = requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onMouseEnterWindow)

    // Observe interactive elements
    const interactiveSelectors =
      'a, button, [role="button"], input, textarea, select, label[for]'
    const addListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }

    addListeners()

    // Re-apply on DOM changes
    const observer = new MutationObserver(() => {
      addListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    raf.current = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener(
        'mouseleave',
        onMouseLeaveWindow
      )
      document.documentElement.removeEventListener(
        'mouseenter',
        onMouseEnterWindow
      )
      cancelAnimationFrame(raf.current)
      observer.disconnect()
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [visible])

  if (isTouchDevice) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${visible ? styles.visible : ''} ${hovering ? styles.hovering : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${visible ? styles.visible : ''} ${hovering ? styles.hovering : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
