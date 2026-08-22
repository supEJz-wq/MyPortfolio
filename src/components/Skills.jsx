import { motion } from 'framer-motion'
import { IconChecklist, IconCode, IconApi, IconCpu } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const SKILL_CATEGORIES = [
  {
    title: 'Core QA & Manual Testing',
    icon: IconChecklist,
    badge: 'Primary Focus',
    badgeColor: '#F472B6',
    description: 'Structured methodologies to identify defects, verify acceptance criteria, and protect user experience.',
    skills: [
      'Manual & Exploratory Testing',
      'Test Case Design & Execution',
      'Defect Tracking & Bug Life Cycle (Jira)',
      'Regression & Smoke Testing',
      'Sanity & Acceptance Testing',
      'Boundary & Edge Case Analysis',
    ],
  },
  {
    title: 'API, Automation & Data Testing',
    icon: IconApi,
    badge: 'Validation & Tools',
    badgeColor: '#2DD4BF',
    description: 'Testing beyond the UI layer to validate payloads, endpoint reliability, database integrity, and automated checks.',
    skills: [
      'Postman API Testing & Validation',
      'Playwright UI Automation (Basics & Script Maintenance)',
      'SQL & PostgreSQL Database Queries',
      'Supabase Backend Testing',
      'Chrome DevTools & Network Inspection',
      'HTTP Status & Payload Verification',
    ],
  },
  {
    title: 'Web Tech & Engineering Foundation',
    icon: IconCode,
    badge: 'Developer Mindset',
    badgeColor: '#60A5FA',
    description: 'Deep understanding of frontend and backend architecture to diagnose root causes and communicate seamlessly.',
    skills: [
      'React.js & Modern JavaScript (ES6+)',
      'TypeScript Fundamentals',
      'Tailwind CSS & Responsive Design',
      'Node.js & Express.js Basics',
      'Git Version Control & GitHub Workflows',
      'RESTful Architecture Principles',
    ],
  },
]

export default function Skills() {
  const { dark } = useTheme()

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-28">
      {/* Background glow */}
      <div
        className="absolute top-1/3 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none opacity-20 dark:opacity-5 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)',
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
              backgroundColor: dark ? 'rgba(45,212,191,0.1)' : 'rgba(13,148,136,0.12)',
              color: dark ? '#2DD4BF' : '#0F766E',
              border: `1px solid ${dark ? 'rgba(45,212,191,0.2)' : 'rgba(13,148,136,0.25)'}`,
            }}
          >
            <IconCpu size={14} />
            <span>Technical Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
            style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
          >
            Skills, Tools & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#334155' }}
          >
            A multi-disciplinary skill set combining QA rigor, API/database verification, and modern web application development.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between"
                style={{
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                  backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.95)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.12)',
                        color: dark ? category.badgeColor : category.title.includes('Core QA') ? '#BE123C' : category.title.includes('API') ? '#0F766E' : '#1D4ED8',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: dark ? 'rgba(255,255,255,0.05)' : 'rgba(244,114,182,0.08)',
                        color: dark ? category.badgeColor : category.title.includes('Core QA') ? '#BE123C' : category.title.includes('API') ? '#0F766E' : '#1D4ED8',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.2)'}`,
                      }}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <h3
                    className="font-heading text-lg sm:text-xl font-bold mb-2 tracking-tight"
                    style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
                  >
                    {category.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-6"
                    style={{ color: dark ? '#A1A1AA' : '#334155' }}
                  >
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl transition-colors duration-200"
                        style={{
                          backgroundColor: dark ? 'rgba(255,255,255,0.02)' : 'rgba(244,114,182,0.05)',
                          border: `1px solid ${dark ? 'rgba(255,255,255,0.03)' : 'rgba(244,114,182,0.12)'}`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] dark:bg-[#F472B6] shrink-0" />
                        <span
                          className="text-xs sm:text-sm font-semibold"
                          style={{ color: dark ? '#E4E4E7' : '#1E293B' }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

