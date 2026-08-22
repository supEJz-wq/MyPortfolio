import { IconArrowUp } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { dark } = useTheme()

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative py-8 sm:py-10 border-t transition-colors duration-300"
      style={{
        backgroundColor: dark ? '#0B0B0E' : '#FFFCFC',
        borderColor: dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8',
      }}
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#F472B6] to-[#2DD4BF] flex items-center justify-center text-white text-xs font-bold shadow-xs">
            E
          </span>
          <p
            className="text-xs sm:text-sm font-medium"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            © {new Date().getFullYear()} Errol. Crafted with passion & QA rigor.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#home"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 hover:text-[#F472B6] active:scale-95"
            style={{ color: dark ? '#E4E4E7' : '#374151' }}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <IconArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

