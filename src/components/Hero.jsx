import { motion, AnimatePresence } from 'framer-motion'
import { IconBrandGithub, IconDownload } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import darkmodeVideo from '../assets/darkmode.mp4'
import lightmodeVideo from '../assets/lightmode.mp4'
import picture1 from '../assets/picture1.png'
import picture2 from '../assets/picture 2.png'

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
            {/* Blush / Cyan aura circle behind photo */}
            <div
              className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full blur-2xl opacity-60 dark:opacity-40 transition-colors duration-500 pointer-events-none"
              style={{
                background: dark
                  ? 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, rgba(45,212,191,0.15) 50%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(248,220,232,0.4) 50%, transparent 70%)',
              }}
            />

            {/* Portrait Image Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden p-2.5 sm:p-3 glass-card shadow-2xl backdrop-blur-xl border transition-all duration-500"
              style={{
                backgroundColor: dark ? 'rgba(24, 24, 27, 0.7)' : 'rgba(255, 252, 252, 0.8)',
                borderColor: dark ? 'rgba(244, 114, 182, 0.25)' : '#F8DCE8',
                boxShadow: dark
                  ? '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(244,114,182,0.15)'
                  : '0 20px 40px rgba(244,114,182,0.12), 0 0 20px rgba(248,220,232,0.4)',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={dark ? 'dark-img' : 'light-img'}
                    src={dark ? picture1 : picture2}
                    alt="Errol Profile"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Glass Badge overlay on image */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur-md border flex items-center justify-between transition-colors duration-300"
                  style={{
                    backgroundColor: dark ? 'rgba(24, 24, 27, 0.75)' : 'rgba(255, 255, 255, 0.85)',
                    borderColor: dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(244, 114, 182, 0.3)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: dark ? '#F472B6' : '#E11D48' }}
                    >
                      {dark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>
                  <span
                    className="text-xs font-medium opacity-80"
                    style={{ color: dark ? '#A1A1AA' : '#4B5563' }}
                  >
                    Junior QA Tester
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

