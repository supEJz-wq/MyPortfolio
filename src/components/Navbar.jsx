import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? dark
            ? 'bg-[rgba(15,15,18,0.7)] shadow-lg border-b border-[rgba(255,255,255,0.06)]'
            : 'bg-[rgba(255,252,252,0.7)] shadow-soft border-b border-[#f8dce8]'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="font-heading text-xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#F472B6] to-[#2DD4BF] bg-clip-text text-transparent">
            ERROL
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="group">
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#F472B6]"
                style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F472B6] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggle}
              className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer"
              style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFF5F8',
                borderColor: dark ? 'rgba(255,255,255,0.08)' : '#F8DCE8',
              }}
              aria-label="Toggle theme"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFF5F8',
              borderColor: dark ? 'rgba(255,255,255,0.08)' : '#F8DCE8',
            }}
            aria-label="Toggle theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] rounded-full transition-colors"
              style={{ backgroundColor: dark ? '#fff' : '#1F2937' }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] rounded-full transition-colors"
              style={{ backgroundColor: dark ? '#fff' : '#1F2937' }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] rounded-full transition-colors"
              style={{ backgroundColor: dark ? '#fff' : '#1F2937' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: dark ? 'rgba(15,15,18,0.95)' : 'rgba(255,252,252,0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #f8dce8',
            }}
          >
            <ul className="section-container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block py-2 text-lg font-medium transition-colors duration-300 hover:text-[#F472B6]"
                    style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
