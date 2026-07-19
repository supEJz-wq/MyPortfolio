import { motion } from 'framer-motion'
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconDownload } from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const CONTACT_LINKS = [
  {
    icon: IconMail,
    label: 'Email',
    value: 'erroljaydepaz@gmail.com',
    href: 'mailto:erroljaydepaz@gmail.com',
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub',
    value: 'github.com/supEJz-wq',
    href: 'https://github.com/supEJz-wq',
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/errol-jay-de-paz-0a889a413',
    href: 'https://linkedin.com/in/errol-jay-de-paz-0a889a413',
  },
]

export default function Contact() {
  const { dark } = useTheme()

  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 dark:opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: dark ? '#F472B6' : '#F472B6' }}
          >
            Get in Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Let's Ensure{' '}
            <span className="bg-gradient-to-r from-[#F472B6] to-[#2DD4BF] bg-clip-text text-transparent">
              Quality Together
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed mb-12 max-w-lg mx-auto"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            Whether you have a QA opportunity, need a detail-oriented tester for your team, or just want to connect about software quality, I'd love to hear from you.
          </motion.p>

          {/* Contact Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 sm:p-10 max-w-lg mx-auto text-left"
          >
            <div className="space-y-5">
              {CONTACT_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    backgroundColor: dark ? 'rgba(255,255,255,0.03)' : '#FFF5F8',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: dark ? 'rgba(244,114,182,0.15)' : '#FCE7F3',
                      color: '#F472B6',
                    }}
                  >
                    <link.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: dark ? '#fff' : '#1F2937' }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <span
                    className="text-xs transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: '#F472B6' }}
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8' }}>
              <a
                href="/MyResume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: dark ? '#F472B6' : '#F472B6',
                  color: '#fff',
                }}
              >
                <IconDownload size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
