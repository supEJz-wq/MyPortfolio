import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconCopy,
  IconCheck,
  IconMessageHeart,
} from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const CONTACT_LINKS = [
  {
    icon: IconMail,
    label: 'Email Address',
    value: 'erroljaydepaz@gmail.com',
    href: 'mailto:erroljaydepaz@gmail.com',
    copyable: true,
  },
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/errol-jay-de-paz-0a889a413',
    href: 'https://linkedin.com/in/errol-jay-de-paz-0a889a413',
    external: true,
  },
  {
    icon: IconBrandGithub,
    label: 'GitHub Portfolio',
    value: 'github.com/supEJz-wq',
    href: 'https://github.com/supEJz-wq',
    external: true,
  },
]

export default function Contact() {
  const { dark } = useTheme()
  const [copied, setCopied] = useState(false)

  const handleCopy = (e, text) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28">
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full pointer-events-none opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, rgba(45,212,191,0.15) 50%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
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
            <IconMessageHeart size={14} />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
            style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
          >
            Let's Ensure{' '}
            <span className="bg-gradient-to-r from-[#DB2777] via-[#F43F5E] to-[#0D9488] dark:from-[#F472B6] dark:to-[#2DD4BF] bg-clip-text text-transparent">
              Quality Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: dark ? '#A1A1AA' : '#334155' }}
          >
            Whether you have a QA opportunity, want to discuss software testing best practices, or need a detail-oriented tester on your team, I'd love to connect!
          </motion.p>

          {/* Contact Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-card p-6 sm:p-8 md:p-10 max-w-xl mx-auto text-left border shadow-lg"
            style={{
              borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
              backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.95)',
            }}
          >
            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <div
                    key={link.label}
                    className="relative group p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-3 shadow-2xs"
                    style={{
                      backgroundColor: dark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                      borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.2)',
                    }}
                  >
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
                        style={{
                          backgroundColor: dark ? 'rgba(244,114,182,0.15)' : 'rgba(244,114,182,0.12)',
                          color: dark ? '#F472B6' : '#DB2777',
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[11px] font-bold uppercase tracking-wider mb-0.5"
                          style={{ color: dark ? '#A1A1AA' : '#64748B' }}
                        >
                          {link.label}
                        </p>
                        <p
                          className="text-xs sm:text-sm font-bold truncate transition-colors group-hover:text-[#DB2777] dark:group-hover:text-[#F472B6]"
                          style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
                        >
                          {link.value}
                        </p>
                      </div>
                    </a>

                    {link.copyable ? (
                      <button
                        onClick={(e) => handleCopy(e, link.value)}
                        className="p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                        style={{
                          backgroundColor: copied
                            ? dark
                              ? 'rgba(45,212,191,0.2)'
                              : '#CCFBF1'
                            : dark
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(244,114,182,0.1)',
                          color: copied ? '#0F766E' : dark ? '#A1A1AA' : '#BE123C',
                          border: `1px solid ${copied ? '#0D9488' : dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.25)'}`,
                        }}
                        aria-label="Copy email address"
                      >
                        {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-xs transition-transform group-hover:translate-x-1 shrink-0 font-bold"
                        style={{ color: dark ? '#F472B6' : '#DB2777' }}
                        aria-label={`Open ${link.label}`}
                      >
                        →
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Resume Action */}
            <div
              className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3 items-center justify-between"
              style={{
                borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.15)',
              }}
            >
              <div className="text-left">
                <p className="text-xs font-bold" style={{ color: dark ? '#FFFFFF' : '#0F172A' }}>
                  Looking for my full resume?
                </p>
                <p className="text-[11px] font-medium" style={{ color: dark ? '#A1A1AA' : '#64748B' }}>
                  Includes complete work history and QA details
                </p>
              </div>

              <a
                href="/MyResume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-white transition-all duration-300 shadow-md hover:shadow-hover active:scale-95"
                style={{
                  background: dark
                    ? 'linear-gradient(135deg, #F472B6 0%, #ec4899 100%)'
                    : 'linear-gradient(135deg, #E11D48 0%, #DB2777 100%)',
                }}
              >
                <IconDownload size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

