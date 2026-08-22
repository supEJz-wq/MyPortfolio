import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function CustomCursor() {
  const { dark } = useTheme()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on devices that support hover and fine pointer (laptops/desktops)
    const mediaQuery = window.matchMedia('(pointer: fine) and (hover: hover)')
    setIsPointerFine(mediaQuery.matches)

    const handleMediaChange = (e) => setIsPointerFine(e.matches)
    mediaQuery.addEventListener('change', handleMediaChange)

    if (!mediaQuery.matches) return () => mediaQuery.removeEventListener('change', handleMediaChange)

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onMouseOver = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  if (!isPointerFine) return null

  return (
    <>
      {/* Outer follow ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: pos.x,
          top: pos.y,
          width: isHovered ? 44 : 28,
          height: isHovered ? 44 : 28,
          border: dark ? '1.5px solid rgba(244,114,182,0.6)' : '1.5px solid rgba(244,114,182,0.7)',
          backgroundColor: isHovered
            ? dark
              ? 'rgba(244,114,182,0.15)'
              : 'rgba(244,114,182,0.1)'
            : 'transparent',
          transition: 'width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s, border-color 0.2s',
          boxShadow: isHovered
            ? dark
              ? '0 0 16px rgba(244,114,182,0.4)'
              : '0 0 12px rgba(244,114,182,0.25)'
            : 'none',
        }}
      />
      {/* Inner precise dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: pos.x,
          top: pos.y,
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          backgroundColor: dark ? '#F472B6' : '#E11D48',
          transition: 'width 0.15s, height 0.15s, background-color 0.2s',
        }}
      />
      <style>{`
        @media (pointer: fine) and (hover: hover) {
          body, a, button, [role="button"], input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}

