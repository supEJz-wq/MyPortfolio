import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { dark } = useTheme()

  return (
    <footer
      className="relative py-10 border-t"
      style={{
        backgroundColor: dark ? '#0F0F12' : '#FFFCFC',
        borderColor: dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8',
      }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs sm:text-sm"
          style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
        >
          © {new Date().getFullYear()} Errol. Crafted with{' '}
          <span className="text-[#F472B6]">❤</span> and{' '}
          <span className="text-[#2DD4BF]">code</span>.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-xs tracking-wide transition-colors duration-300 hover:text-[#F472B6]"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            Back to Top ↑
          </a>
          <span
            className="text-xs font-heading font-bold tracking-tight"
            style={{ color: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
          >
            ERROL
          </span>
        </div>
      </div>
    </footer>
  )
}
