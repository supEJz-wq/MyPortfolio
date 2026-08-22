import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconSun, IconMoon, IconX, IconMenu2 } from '@tabler/icons-react'
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
  const [activeSection, setActiveSection] = useState('home')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const topOffset = 70
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-[rgba(15,15,18,0.85)] shadow-lg border-b border-[rgba(255,255,255,0.06)]'
            : 'bg-[rgba(255,255,255,0.92)] shadow-sm border-b border-[rgba(244,114,182,0.2)]'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <nav
        aria-label="Main Navigation"
        className="section-container flex items-center justify-between h-16 sm:h-20"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="group flex items-center gap-2 font-heading text-xl sm:text-2xl font-bold tracking-tight focus-visible:ring-2"
          aria-label="Errol - Home"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#DB2777] to-[#0D9488] dark:from-[#F472B6] dark:to-[#2DD4BF] flex items-center justify-center text-white text-sm font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
            E
          </span>
          <span className="bg-gradient-to-r from-[#DB2777] to-[#0D9488] dark:from-[#F472B6] dark:to-[#2DD4BF] bg-clip-text text-transparent font-extrabold">
            ERROL
          </span>
        </a>

        {/* Desktop Links (Laptop & Tablet Landscape: md+) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-3">
          <ul
            className="flex items-center gap-1 lg:gap-2 p-1.5 rounded-full border glass-card shadow-xs"
            style={{
              backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.92)',
              borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all duration-300 inline-block ${
                      isActive
                        ? 'text-white'
                        : dark
                        ? 'text-[#A1A1AA] hover:text-white'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full shadow-sm -z-10"
                        style={{
                          background: dark
                            ? 'linear-gradient(135deg, #F472B6 0%, #ec4899 100%)'
                            : 'linear-gradient(135deg, #E11D48 0%, #DB2777 100%)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop Theme Switcher */}
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-105 cursor-pointer ml-2 shadow-xs"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
              borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.3)',
              color: dark ? '#F472B6' : '#BE123C',
            }}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light Mode' : 'Dark Mode'}
          >
            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
        </div>

        {/* Mobile & Tablet Portrait Menu Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border active:scale-95"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFF5F8',
              borderColor: dark ? 'rgba(255,255,255,0.1)' : '#F8DCE8',
              color: dark ? '#F472B6' : '#E11D48',
            }}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
            className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 active:scale-95"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#FFF5F8',
              borderColor: dark ? 'rgba(255,255,255,0.1)' : '#F8DCE8',
              color: dark ? '#fff' : '#1F2937',
            }}
          >
            {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden relative z-50 border-b overflow-hidden shadow-2xl"
              style={{
                backgroundColor: dark ? 'rgba(15,15,18,0.98)' : 'rgba(255,252,252,0.98)',
                backdropFilter: 'blur(24px)',
                borderColor: dark ? 'rgba(255,255,255,0.08)' : '#f8dce8',
              }}
            >
              <ul className="section-container py-5 flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '')
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#F472B6] to-[#ec4899] text-white font-semibold'
                            : dark
                            ? 'text-[#A1A1AA] hover:bg-white/5 hover:text-white'
                            : 'text-[#6B7280] hover:bg-[#FFF5F8] hover:text-[#1F2937]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="text-white text-xs">●</span>}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

