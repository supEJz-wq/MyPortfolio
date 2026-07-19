import { motion } from 'framer-motion'
import { IconChecklist, IconCode, IconBulb } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const CARDS = [
  {
    icon: IconChecklist,
    title: 'Quality',
    description:
      'Meticulous manual and API testing with a keen eye for edge cases. I ensure every release meets high standards through structured test plans, clear reproduction steps, and detailed bug reports.',
  },
  {
    icon: IconCode,
    title: 'Technical Foundation',
    description:
      'Strong foundation in modern web technologies (React, Node.js, TypeScript/JavaScript). I leverage this development background to understand application architecture, read logs to isolate root causes faster, and bridge the communication gap between QA and engineering teams.',
  },
  {
    icon: IconBulb,
    title: 'Problem Solving',
    description:
      'Analytical approach to debugging and root-cause analysis. I combine the rigor of structured testing with technical insight to uncover complex defects and deliver robust, user-friendly software.',
  },
]

export default function About() {
  const { dark } = useTheme()

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: dark ? '#F472B6' : '#F472B6' }}
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            Bridging Quality & Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            As a Junior QA Tester, I bring a detail-oriented perspective to every project. I don't just build features — I think about how they break, how users experience them, and how to make them bulletproof. By combining rigorous manual testing, API validation, and SQL checks with my background in frontend development, I can uncover complex edge cases that others miss and ensure a seamless, high-quality user experience.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: dark ? 'rgba(244,114,182,0.1)' : '#FCE7F3',
                  color: '#F472B6',
                }}
              >
                <card.icon size={24} />
              </div>
              <h3
                className="font-heading text-xl font-semibold mb-3"
                style={{ color: dark ? '#fff' : '#1F2937' }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
