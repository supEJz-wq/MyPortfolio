import { motion } from 'framer-motion'
import { IconBrandGithub, IconDownload } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import darkmodeVideo from '../assets/darkmode.mp4'
import lightmodeVideo from '../assets/lightmode.mp4'

const CODE_SNIPPET = `import { Quality, Dev } from 'passion'

function Developer() {
  const [craft, setCraft] = useState('excellence')

  useEffect(() => {
    buildWith(sakura.elegance)
    testEvery(edge.case)
  }, [ambition])

  return <Portfolio premium />
}`

export default function Hero() {
  const { dark } = useTheme()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          key={dark ? 'dark' : 'light'}
        >
          <source src={dark ? darkmodeVideo : lightmodeVideo} type="video/mp4" />
        </video>
        {/* Large blush circle */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Smaller blush circle */}
        <div
          className="absolute -top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-20 dark:opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.1) 0%, transparent 70%)',
          }}
        />
        {/* Cherry blossom branch - left side */}
        <svg
          className="absolute top-32 left-0 w-40 h-64 opacity-30 dark:opacity-10"
          viewBox="0 0 160 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 C30 180 50 160 60 140 C70 120 65 100 80 80 C95 60 90 40 100 20"
            stroke="#F472B6"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="45" cy="165" r="3" fill="#F472B6" opacity="0.6" />
          <circle cx="55" cy="150" r="4" fill="#F472B6" opacity="0.5" />
          <circle cx="72" cy="125" r="3.5" fill="#F472B6" opacity="0.4" />
          <circle cx="85" cy="95" r="2.5" fill="#F472B6" opacity="0.5" />
          <circle cx="95" cy="60" r="3" fill="#F472B6" opacity="0.3" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <div className="max-w-xl">
            <motion.p
              {...fadeUp(0)}
              className="inline-block text-sm font-medium tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full glass-card"
              style={{ color: dark ? '#F472B6' : '#F472B6' }}
            >
              Junior QA Tester
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#F472B6] to-[#2DD4BF] bg-clip-text text-transparent">
                Errol
              </span>
            </motion.h1>

            <motion.h2
              {...fadeUp(0.2)}
              className="font-heading text-2xl sm:text-3xl font-medium leading-snug mb-6"
              style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
            >
              <span className="block">Junior QA Tester</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
            >
              Junior QA Tester dedicated to ensuring software quality in modern web applications through manual testing, API/SQL validation, and leveraging frontend development insights to catch critical defects.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: dark ? '#F472B6' : '#F472B6',
                  color: '#fff',
                }}
              >
                <span className="relative z-10">View Projects</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <span
                  className="absolute inset-0 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #F472B6, #2DD4BF)',
                    opacity: 0,
                  }}
                />
              </a>

              <a
                href="/MyResume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 glass-card hover:shadow-hover"
                style={{
                  color: dark ? '#fff' : '#1F2937',
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : '#F8DCE8',
                }}
              >
                <IconDownload size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            {/* Blush circle behind window */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)',
              }}
            />

            {/* Code Window */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundColor: dark ? '#18181B' : '#FFFCFC',
                border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F8DCE8',
              }}
            >
              {/* Window Header */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{
                  backgroundColor: dark ? '#202024' : '#FFF5F8',
                  borderColor: dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8',
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span
                  className="text-xs font-medium ml-2 opacity-60"
                  style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                >
                  portfolio.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre
                  className="text-xs sm:text-sm leading-relaxed font-mono"
                  style={{ color: dark ? '#E4E4E7' : '#374151' }}
                >
                  <code>
                    {CODE_SNIPPET.split('\n').map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        {line.split(/(\{|\}|\(|\)|'[^']*'|=>)/g).map((part, j) => {
                          if (part === 'import' || part === 'function' || part === 'const' || part === 'useState' || part === 'useEffect' || part === 'return')
                            return <span key={j} className="text-[#C084FC]">{part}</span>
                          if (part === '{' || part === '}' || part === '(' || part === ')' || part === '=>')
                            return <span key={j} className="text-[#F472B6]">{part}</span>
                          if (part.startsWith("'") && part.endsWith("'"))
                            return <span key={j} className="text-[#2DD4BF]">{part}</span>
                          return <span key={j}>{part}</span>
                        })}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
