import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function CustomCursor() {
  const { dark } = useTheme()
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: pos.x,
          top: pos.y,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: dark ? 'rgba(244,114,182,0.6)' : 'rgba(0,0,0,0.5)',
          boxShadow: dark
            ? '0 0 12px rgba(244,114,182,0.5), 0 0 40px rgba(244,114,182,0.2)'
            : '0 0 8px rgba(0,0,0,0.15), 0 0 24px rgba(0,0,0,0.06)',
          transition: 'width 0.2s, height 0.2s, background-color 0.3s',
        }}
      />
      <style>{`
        body, a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
