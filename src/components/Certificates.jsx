import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconCertificate,
  IconAward,
  IconExternalLink,
  IconDownload,
  IconEye,
  IconX,
  IconFileCertificate,
  IconSchool,
} from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'

const CERTIFICATES = [
  {
    id: 'js-essentials-1',
    title: 'JavaScript Essentials 1 (JSE 1)',
    issuer: 'Cisco Networking Academy & OpenEDG JS Institute',
    category: 'Development & Scripting',
    date: 'July 2026',
    accentColor: '#F59E0B',
    pdfUrl: '/certificates/JavaScriptEssentials1Update20260718-8-imewtk.pdf',
    credlyUrl: 'https://www.credly.com/badges/2e3b9f63-c8cb-4b83-9657-cff5164eabf1/public_url',
    description:
      'Mastery of core JavaScript architecture, ES6+ syntax, functions, object-oriented concepts, algorithm design, and client-side execution models.',
    skills: ['JavaScript ES6+', 'DOM & Event Flow', 'OOP & Scopes', 'Error Handling', 'Algorithm Design'],
  },
  {
    id: 'python-essentials-1',
    title: 'Python Essentials 1 (PE 1)',
    issuer: 'Cisco Networking Academy & Python Institute',
    category: 'Development & Scripting',
    date: 'July 2026',
    accentColor: '#3B82F6',
    pdfUrl: '/certificates/PythonEssentials1Update20260718-8-ugpnj2.pdf',
    credlyUrl: 'https://www.credly.com/badges/cfb963f8-2a04-4450-9bec-00bbfc86bd4a/public_url',
    description:
      'Foundational programming logic, algorithmic problem-solving, structured data collections (lists, tuples, dicts), modular libraries, and test scripting in Python.',
    skills: ['Python 3', 'Control Logic & Loops', 'Collections & Tuples', 'Modular Architecture', 'Script Automation'],
  },
  {
    id: 'data-analytics-essentials',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Data & Validation',
    date: 'July 2026',
    accentColor: '#0D9488',
    pdfUrl: '/certificates/DataAnalyticsEssentialsUpdate20260718-8-uqj889.pdf',
    credlyUrl: 'https://www.credly.com/badges/d272a0c0-591a-4ada-afd4-1e41caa5848f/public_url',
    description:
      'End-to-end data lifecycle analysis, SQL database queries, data sanitation, integrity validation, and analytical reporting for data-driven decisions.',
    skills: ['SQL Queries', 'Data Validation', 'Data Cleaning', 'Data Lifecycle', 'Verification & Reporting'],
  },
  {
    id: 'html-essentials',
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Web & QA Foundations',
    date: 'August 2026',
    accentColor: '#E11D48',
    pdfUrl: '/certificates/HTMLEssentialsv120260813-20-co8idm.pdf',
    credlyUrl: 'https://www.credly.com/badges/52ab66dd-c63c-4cfd-8089-6a533ce03000/public_url',
    description:
      'Semantic HTML5 document hierarchies, form input validation, accessibility standards (a11y), DOM tree structure, and responsive web foundations.',
    skills: ['Semantic HTML5', 'Form Validation', 'DOM Tree Structure', 'Web Accessibility (a11y)', 'Web Standards'],
  },
  {
    id: 'english-for-it',
    title: 'English for IT: Needs & Responsibilities',
    issuer: 'Cisco Networking Academy',
    category: 'Professional & Agile',
    date: 'August 2026',
    accentColor: '#8B5CF6',
    pdfUrl: '/certificates/EnglishforITNeedsandResponsibilitiesv120260813-21-zqzce7.pdf',
    credlyUrl: 'https://www.credly.com/badges/25934979-72d8-49a7-a97c-b56a4c010e35/public_url',
    description:
      'Professional communication in technical environments, structured bug documentation, stakeholder alignment, user story evaluation, and cross-functional agile collaboration.',
    skills: ['Bug Lifecycle Documentation', 'Agile Communication', 'Requirement Analysis', 'Cross-Functional QA', 'Technical Writing'],
  },
]

const CATEGORIES = ['All', 'Development & Scripting', 'Data & Validation', 'Web & QA Foundations', 'Professional & Agile']

export default function Certificates() {
  const { dark } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCert, setSelectedCert] = useState(null)

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCert])

  const filteredCerts =
    activeCategory === 'All'
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === activeCategory)

  return (
    <section id="certificates" className="relative py-16 sm:py-20 md:py-28">
      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none opacity-20 dark:opacity-5 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full pointer-events-none opacity-20 dark:opacity-5 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            style={{
              backgroundColor: dark ? 'rgba(244,114,182,0.12)' : 'rgba(219,39,119,0.12)',
              color: dark ? '#F472B6' : '#BE123C',
              border: `1px solid ${dark ? 'rgba(244,114,182,0.25)' : 'rgba(219,39,119,0.25)'}`,
            }}
          >
            <IconCertificate size={14} />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
            style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
          >
            Certificates & Accreditations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#334155' }}
          >
            Industry-recognized certifications and professional credentials validating technical proficiency across modern programming, data validation, web architecture, and QA engineering.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-white shadow-md'
                    : dark
                    ? 'text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-white/5'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-black/5 border border-pink-100'
                }`}
                style={{
                  background: isSelected
                    ? dark
                      ? 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)'
                      : 'linear-gradient(135deg, #DB2777 0%, #0D9488 100%)'
                    : dark
                    ? 'rgba(255,255,255,0.03)'
                    : '#FFFFFF',
                }}
              >
                {cat}
                {cat === 'All' && ` (${CERTIFICATES.length})`}
              </button>
            )
          })}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              style={{
                borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                backgroundColor: dark ? 'rgba(32,32,36,0.85)' : 'rgba(255,255,255,0.95)',
              }}
            >
              {/* Subtle top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${cert.accentColor}, #F472B6)`,
                }}
              />

              <div>
                {/* Header Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {cert.credlyUrl ? (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 group/badge"
                      style={{
                        backgroundColor: `${cert.accentColor}18`,
                        color: dark ? cert.accentColor : '#0F172A',
                        border: `1px solid ${cert.accentColor}40`,
                      }}
                      title="Verify Badge on Credly"
                    >
                      <IconAward size={13} style={{ color: cert.accentColor }} />
                      <span className="underline-offset-2 group-hover/badge:underline">Credly Verified</span>
                      <IconExternalLink size={10} className="opacity-70 group-hover/badge:opacity-100" />
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${cert.accentColor}18`,
                        color: dark ? cert.accentColor : '#0F172A',
                        border: `1px solid ${cert.accentColor}35`,
                      }}
                    >
                      <IconAward size={13} style={{ color: cert.accentColor }} />
                      <span>Verified</span>
                    </span>
                  )}
                  <span
                    className="text-xs font-medium"
                    style={{ color: dark ? '#71717A' : '#64748B' }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3
                  className="font-heading text-lg sm:text-xl font-bold mb-2 tracking-tight line-clamp-2 group-hover:text-[#F472B6] transition-colors"
                  style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 mb-3.5">
                  <IconSchool
                    size={15}
                    className="shrink-0"
                    style={{ color: cert.accentColor }}
                  />
                  <p
                    className="text-xs font-semibold"
                    style={{ color: dark ? '#D4D4D8' : '#334155' }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3"
                  style={{ color: dark ? '#A1A1AA' : '#475569' }}
                >
                  {cert.description}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: dark ? 'rgba(255,255,255,0.04)' : 'rgba(244,114,182,0.08)',
                        color: dark ? '#E4E4E7' : '#1E293B',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.15)'}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="pt-4 border-t flex items-center justify-between gap-2"
                style={{
                  borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.15)',
                }}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  style={{
                    backgroundColor: dark ? 'rgba(244,114,182,0.12)' : '#FCE7F3',
                    color: dark ? '#F472B6' : '#BE123C',
                    border: `1px solid ${dark ? 'rgba(244,114,182,0.25)' : 'rgba(244,114,182,0.4)'}`,
                  }}
                  aria-label={`View Certificate for ${cert.title}`}
                >
                  <IconEye size={15} />
                  <span>Preview</span>
                </button>

                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 border"
                    style={{
                      backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#FFF',
                      borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(244,114,182,0.3)',
                      color: dark ? '#2DD4BF' : '#0D9488',
                    }}
                    title="Verify Badge on Credly"
                    aria-label={`Verify ${cert.title} badge on Credly`}
                  >
                    <IconAward size={15} />
                    <span>Credly</span>
                  </a>
                )}

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 border"
                  style={{
                    backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                    borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                    color: dark ? '#A1A1AA' : '#475569',
                  }}
                  title="Open PDF in new tab"
                  aria-label={`Open ${cert.title} in new tab`}
                >
                  <IconExternalLink size={16} />
                </a>

                <a
                  href={cert.pdfUrl}
                  download
                  className="p-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 border"
                  style={{
                    backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                    borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                    color: dark ? '#A1A1AA' : '#475569',
                  }}
                  title="Download Certificate PDF"
                  aria-label={`Download ${cert.title}`}
                >
                  <IconDownload size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive PDF Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-4xl h-[85vh] max-h-[820px] rounded-2xl flex flex-col overflow-hidden shadow-2xl border"
              style={{
                backgroundColor: dark ? '#141418' : '#FFFFFF',
                borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(244,114,182,0.3)',
              }}
            >
              {/* Modal Header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b shrink-0"
                style={{
                  backgroundColor: dark ? 'rgba(24,24,28,0.95)' : 'rgba(255,245,248,0.95)',
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.2)',
                }}
              >
                <div className="flex items-center gap-3 pr-2 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${selectedCert.accentColor}20`,
                      color: selectedCert.accentColor,
                    }}
                  >
                    <IconFileCertificate size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="font-heading text-sm sm:text-base font-bold truncate"
                      style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
                    >
                      {selectedCert.title}
                    </h4>
                    <p
                      className="text-xs truncate font-medium"
                      style={{ color: dark ? '#A1A1AA' : '#64748B' }}
                    >
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                {/* Modal Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  {selectedCert.credlyUrl && (
                    <a
                      href={selectedCert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: dark ? 'rgba(45,212,191,0.15)' : 'rgba(13,148,136,0.12)',
                        borderColor: dark ? 'rgba(45,212,191,0.3)' : 'rgba(13,148,136,0.3)',
                        color: dark ? '#2DD4BF' : '#0F766E',
                      }}
                    >
                      <IconAward size={14} />
                      <span className="hidden sm:inline">Verify Credly</span>
                    </a>
                  )}

                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                      borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.3)',
                      color: dark ? '#E4E4E7' : '#334155',
                    }}
                  >
                    <IconExternalLink size={14} />
                    <span>Open Tab</span>
                  </a>

                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xs text-white"
                    style={{
                      background: 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)',
                    }}
                  >
                    <IconDownload size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 border cursor-pointer ml-1"
                    style={{
                      backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                      borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                      color: dark ? '#FFFFFF' : '#0F172A',
                    }}
                    aria-label="Close Preview"
                  >
                    <IconX size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body - PDF Iframe Viewer */}
              <div className="flex-1 w-full h-full bg-[#1e1e22] relative overflow-hidden">
                <iframe
                  src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
