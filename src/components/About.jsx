import { motion } from 'framer-motion'
import { IconChecklist, IconCode, IconDatabase, IconTargetArrow } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const CARDS = [
  {
    icon: IconChecklist,
    title: 'Precision QA & Edge Cases',
    description:
      'Meticulous manual, exploratory, and functional testing. I craft thorough test plans, track defects with clear reproduction steps in Jira, and relentlessly probe edge cases before users do.',
    highlight: 'Manual & Exploratory QA',
  },
  {
    icon: IconCode,
    title: 'Developer Insight & Root-Cause Analysis',
    description:
      'With hands-on experience building React and Node.js applications, I understand software internals, read network logs and browser consoles, and help developers isolate bugs faster.',
    highlight: 'Architecture & Code-Aware',
  },
  {
    icon: IconDatabase,
    title: 'API & Data Layer Validation',
    description:
      'Testing doesn’t stop at the UI. I validate REST endpoints, check status codes and payloads via Postman, and run SQL queries to ensure data integrity across the stack.',
    highlight: 'Postman & SQL Validation',
  },
]

const STATS = [
  { label: 'Testing Approach', value: 'Manual, Functional & API' },
  { label: 'Defect Tracking', value: 'Jira & Structured Reports' },
  { label: 'Dev Mindset', value: 'React, Node, SQL & Git' },
]

export default function About() {
  const { dark } = useTheme()

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none opacity-20 dark:opacity-5 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: dark ? 'rgba(244,114,182,0.1)' : 'rgba(244,114,182,0.15)',
              color: dark ? '#F472B6' : '#BE123C',
              border: `1px solid ${dark ? 'rgba(244,114,182,0.2)' : 'rgba(244,114,182,0.3)'}`,
            }}
          >
            <IconTargetArrow size={14} />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
            style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
          >
            Bridging Quality Assurance & Software Engineering
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#334155' }}
          >
            As a Junior QA Tester with a software development foundation, I don’t just verify that features work — I investigate how they might break under real-world conditions. My goal is to prevent issues early, communicate seamlessly with engineering teams, and ensure a rock-solid user experience.
          </motion.p>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-12"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 sm:p-5 rounded-2xl border flex flex-col justify-center shadow-xs"
              style={{
                borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.25)',
                backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.92)',
              }}
            >
              <span className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: dark ? '#F472B6' : '#BE123C' }}>
                {stat.label}
              </span>
              <span
                className="font-heading text-base sm:text-lg font-bold"
                style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="glass-card p-6 sm:p-8 group flex flex-col justify-between"
              style={{
                borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.95)',
              }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: dark ? 'rgba(244,114,182,0.15)' : 'rgba(244,114,182,0.15)',
                    color: dark ? '#F472B6' : '#DB2777',
                  }}
                >
                  <card.icon size={24} />
                </div>
                <h3
                  className="font-heading text-lg sm:text-xl font-bold mb-3 tracking-tight"
                  style={{ color: dark ? '#fff' : '#0F172A' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: dark ? '#A1A1AA' : '#334155' }}
                >
                  {card.description}
                </p>
              </div>

              <div
                className="pt-4 border-t flex items-center gap-2 text-xs font-bold"
                style={{
                  borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.18)',
                  color: dark ? '#2DD4BF' : '#0D9488',
                }}
              >
                <span>✓</span>
                <span>{card.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

