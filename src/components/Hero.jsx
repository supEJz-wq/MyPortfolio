import { motion, AnimatePresence } from 'framer-motion'
import { IconDownload, IconArrowRight, IconChecklist, IconCode } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import darkmodeVideo from '../assets/darkmode.mp4'
import lightmodeVideo from '../assets/lightmode.mp4'
import picture1 from '../assets/picture1.png'
import picture2 from '../assets/picture 2.png'

export default function Hero() {
  const { dark } = useTheme()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-40"
          key={dark ? 'dark-video' : 'light-video'}
        >
          <source src={dark ? darkmodeVideo : lightmodeVideo} type="video/mp4" />
        </video>

        {/* Ambient Glows */}
        <div
          className="absolute top-1/3 -right-20 w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] lg:h-[650px] rounded-full opacity-40 dark:opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, rgba(45,212,191,0.15) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-10 left-1/10 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] rounded-full opacity-30 dark:opacity-10 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Subtle decorative branch SVG */}
        <svg
          className="hidden sm:block absolute top-28 left-2 w-32 md:w-44 h-64 opacity-25 dark:opacity-10 pointer-events-none"
          viewBox="0 0 160 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 C30 180 50 160 60 140 C70 120 65 100 80 80 C95 60 90 40 100 20"
            stroke="#F472B6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="45" cy="165" r="3" fill="#F472B6" opacity="0.6" />
          <circle cx="55" cy="150" r="4" fill="#F472B6" opacity="0.5" />
          <circle cx="72" cy="125" r="3.5" fill="#F472B6" opacity="0.4" />
          <circle cx="85" cy="95" r="2.5" fill="#F472B6" opacity="0.5" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Left Column: Intro & Headline (lg: col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Role Pill */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card mb-4 sm:mb-6 border text-xs sm:text-sm font-medium tracking-wide shadow-xs"
              style={{
                borderColor: dark ? 'rgba(244,114,182,0.3)' : 'rgba(244,114,182,0.35)',
                backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.92)',
              }}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] dark:bg-[#2DD4BF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488] dark:bg-[#2DD4BF]" />
              </span>
              <span className="font-bold tracking-tight" style={{ color: dark ? '#F472B6' : '#BE123C' }}>
                Junior QA Tester
              </span>
              <span className="opacity-40">•</span>
              <span className="font-medium" style={{ color: dark ? '#A1A1AA' : '#475569' }}>Open to Work</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-5"
              style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#DB2777] via-[#F43F5E] to-[#0D9488] dark:from-[#F472B6] dark:via-[#FB7185] dark:to-[#2DD4BF] bg-clip-text text-transparent">
                Errol
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              {...fadeUp(0.2)}
              className="font-heading text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-5"
              style={{ color: dark ? '#E4E4E7' : '#1E293B' }}
            >
              Ensuring <span className="text-[#DB2777] dark:text-[#F472B6]">Software Quality</span> through Rigorous Testing & Dev Insight
            </motion.h2>

            {/* Descriptive Body */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal"
              style={{ color: dark ? '#A1A1AA' : '#334155' }}
            >
              Detail-oriented QA Tester dedicated to manual and exploratory testing, API & SQL validation, and defect lifecycle management. Leveraging a solid foundation in modern web development to bridge testing with engineering teams.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-300 shadow-md hover:shadow-hover active:scale-95 w-full sm:w-auto cursor-pointer"
                style={{
                  background: dark 
                    ? 'linear-gradient(135deg, #F472B6 0%, #ec4899 100%)'
                    : 'linear-gradient(135deg, #E11D48 0%, #DB2777 100%)',
                }}
              >
                <span>View Projects</span>
                <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/MyResume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 glass-card hover:shadow-md active:scale-95 w-full sm:w-auto"
                style={{
                  color: dark ? '#FFFFFF' : '#0F172A',
                  borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(244,114,182,0.3)',
                  backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.95)',
                }}
              >
                <IconDownload size={18} className="text-[#DB2777] dark:text-[#F472B6]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-4 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors hover:text-[#DB2777] dark:hover:text-[#F472B6] w-full sm:w-auto text-center"
                style={{ color: dark ? '#A1A1AA' : '#475569' }}
              >
                Get in Touch →
              </a>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive Portrait Card (lg: col-span-5) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0"
          >
            {/* Glowing Backdrop Aura */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl opacity-70 dark:opacity-30 pointer-events-none transition-all duration-500"
              style={{
                background: dark
                  ? 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(45,212,191,0.2) 60%, transparent 80%)'
                  : 'radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(13,148,136,0.18) 50%, transparent 80%)',
              }}
            />

            {/* Profile Frame */}
            <div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl p-2.5 sm:p-3 glass-card shadow-xl backdrop-blur-xl border transition-all duration-300"
              style={{
                backgroundColor: dark ? 'rgba(24, 24, 27, 0.75)' : 'rgba(255, 255, 255, 0.95)',
                borderColor: dark ? 'rgba(244, 114, 182, 0.25)' : 'rgba(244, 114, 182, 0.35)',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={dark ? 'dark-hero-img' : 'light-hero-img'}
                    src={dark ? picture1 : picture2}
                    alt="Errol - Junior QA Tester"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-[340px] sm:h-[400px] md:h-[440px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Floating QA Tag 1 */}
                <div
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md border shadow-md flex items-center gap-1.5"
                  style={{
                    backgroundColor: dark ? 'rgba(15,15,18,0.85)' : 'rgba(255,255,255,0.95)',
                    borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.3)',
                    color: dark ? '#fff' : '#0F172A',
                  }}
                >
                  <IconChecklist size={14} className="text-[#DB2777] dark:text-[#F472B6]" />
                  <span>Manual & API QA</span>
                </div>

                {/* Floating QA Tag 2 */}
                <div
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md border shadow-md flex items-center gap-1.5"
                  style={{
                    backgroundColor: dark ? 'rgba(15,15,18,0.85)' : 'rgba(255,255,255,0.95)',
                    borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.3)',
                    color: dark ? '#fff' : '#0F172A',
                  }}
                >
                  <IconCode size={14} className="text-[#0D9488] dark:text-[#2DD4BF]" />
                  <span>Web Dev Insight</span>
                </div>

                {/* Glass Badge overlay at bottom */}
                <div
                  className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md border flex items-center justify-between shadow-sm"
                  style={{
                    backgroundColor: dark ? 'rgba(24, 24, 27, 0.85)' : 'rgba(255, 255, 255, 0.95)',
                    borderColor: dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(244, 114, 182, 0.35)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] dark:bg-[#2DD4BF] animate-pulse" />
                    <span
                      className="text-xs font-bold tracking-wide uppercase"
                      style={{ color: dark ? '#F472B6' : '#BE123C' }}
                    >
                      {dark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: dark ? '#A1A1AA' : '#475569' }}
                  >
                    Junior QA Tester
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


