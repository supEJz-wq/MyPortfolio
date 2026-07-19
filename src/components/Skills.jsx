import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const SKILL_GROUPS = [
  {
    title: 'Core QA & Manual Testing',
    items: [
      'Manual & Exploratory Testing',
      'Test Case Design & Execution',
      'Defect Tracking & Bug Reporting with Jira',
      'API Testing & Validation with Postman',
      'Database & SQL Validation',
    ],
  },
  {
    title: 'Automation Exposure',
    items: [
      'Playwright: Familiar with writing, reading, and maintaining basic automated UI test scripts.',
    ],
  },
  {
    title: 'Technical Foundation',
    items: [
      'Frontend: React, JavaScript, TypeScript, Tailwind CSS',
      'Backend & Database: Node.js, Express, Python, PostgreSQL, Supabase',
      'Workflow: Git, GitHub',
    ],
    note: 'Understanding the full-stack architecture allows me to isolate bugs faster, check browser consoles effectively, and write highly detailed, developer-friendly bug reports.',
  },
]

export default function Skills() {
  const { dark } = useTheme()

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 dark:opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: dark ? '#F472B6' : '#F472B6' }}
          >
            Skills & Tools
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            My Technical Arsenal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            My technical arsenal for ensuring software quality.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 transition-transform duration-300 hover:scale-[1.03]"
            >
              <h3
                className="font-heading text-lg font-semibold mb-4"
                style={{ color: dark ? '#fff' : '#1F2937' }}
              >
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed flex items-start gap-2"
                    style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                  >
                    <span className="text-[#F472B6] mt-1 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {group.note && (
                <p
                  className="text-xs leading-relaxed mt-4 pt-4 border-t"
                  style={{
                    color: dark ? '#A1A1AA' : '#6B7280',
                    borderColor: dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8',
                  }}
                >
                  {group.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
