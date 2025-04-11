'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function Cursor() {
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring animations for smooth movement
  const springConfig = { damping: 20, stiffness: 500 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  
  // Safe size transformation with fallbacks
  const baseSize = 15
  const hoverSize = 30
  const size = useSpring(isHovering ? hoverSize : baseSize, {
    stiffness: 500,
    damping: 15
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const moveCursor = (e) => {
      const currentSize = isHovering ? hoverSize : baseSize
      cursorX.set(e.clientX - currentSize/2)
      cursorY.set(e.clientY - currentSize/2)
      size.set(isHovering ? hoverSize : baseSize)
    }
    
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    
    const hoverables = Array.from(document.querySelectorAll(
      'a, button, input, textarea, [data-hoverable]'
    )).filter(Boolean)

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', moveCursor)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      hoverables.forEach(el => {
        el?.removeEventListener('mouseenter', handleMouseEnter)
        el?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, size, isHovering])


  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-blue-500"
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        mixBlendMode: theme === 'dark' ? "screen" : "multiply",
        backgroundColor: isHovering ? 'var(--cursor-color)' : 'var(--cursor-hover)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
}