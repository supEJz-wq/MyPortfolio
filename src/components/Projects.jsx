import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconPhoto,
  IconLayersSubtract,
} from '@tabler/icons-react'
import { useTheme } from '../context/ThemeContext'
import eduVibeImg1 from '../assets/1.jpg'
import eduVibeImg2 from '../assets/2.jpg'
import eduVibeImg3 from '../assets/3.jpg'
import eduVibeImg4 from '../assets/4.jpg'
import eduVibeImg5 from '../assets/5.jpg'
import eduVibeImg6 from '../assets/6.jpg'
import ventImg7 from '../assets/7.jpg'
import ventImg8 from '../assets/8.jpg'
import ventImg9 from '../assets/9.jpg'
import ventImg10 from '../assets/10.jpg'
import playGenImg11 from '../assets/11.jpg'
import playGenImg12 from '../assets/12.jpg'
import playGenImg13 from '../assets/13.jpg'
import playGenImg14 from '../assets/14.jpg'
import playGenImg15 from '../assets/15.jpg'

const EDUVIBE_IMAGES = [eduVibeImg1, eduVibeImg2, eduVibeImg3, eduVibeImg4, eduVibeImg5, eduVibeImg6]
const VENTSPACE_IMAGES = [ventImg7, ventImg8, ventImg9, ventImg10]
const PLAYGEN_IMAGES = [playGenImg11, playGenImg12, playGenImg13, playGenImg14, playGenImg15]

const PROJECTS = [
  {
    id: 'eduvibe',
    title: 'EduVibe',
    category: 'web-apps',
    categoryLabel: 'Learning Management System',
    description:
      'EduVibe is a responsive learning management application that streamlines online education with secure authentication, course organization, and an intuitive user interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
    testing: ['Manual Testing', 'Functional Testing', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'UI Testing'],
    images: EDUVIBE_IMAGES,
  },
  {
    id: 'ventspace',
    title: 'VentSpace',
    category: 'web-apps',
    categoryLabel: 'Mental Health Community',
    description:
      'VentSpace is a safe, anonymous community platform where users share thoughts, express emotions, and connect. Built with modern full-stack technologies and tested for privacy and data integrity.',
    tags: ['React', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    testing: ['Exploratory Testing', 'API Validation', 'SQL Verification', 'Regression Testing', 'E2E Testing'],
    images: VENTSPACE_IMAGES,
  },
  {
    id: 'playgen',
    title: 'PlayGen',
    category: 'qa-tools',
    categoryLabel: 'QA Automation Toolkit',
    description:
      'PlayGen is a specialized QA automation toolkit that generates test scripts, automation frameworks, API requests, SQL queries, CI/CD pipelines, and testing documentation to streamline QA workflows.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub'],
    testing: ['Test Case Generation', 'API Validation', 'UI Testing', 'Workflow Verification'],
    images: PLAYGEN_IMAGES,
  },
]

const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-apps', label: 'Web Applications' },
  { id: 'qa-tools', label: 'QA & Tooling' },
]

export default function Projects() {
  const { dark } = useTheme()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true
    return p.category === activeFilter
  })

  const openLightbox = (project, index = 0) => {
    setCurrentProject(project)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    if (!currentProject) return
    setLightboxIndex((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1))
  }, [currentProject])

  const prevImage = useCallback(() => {
    if (!currentProject) return
    setLightboxIndex((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1))
  }, [currentProject])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, nextImage, prevImage, closeLightbox])

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
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
            <IconLayersSubtract size={14} />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5"
            style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
          >
            Projects Built & Validated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#334155' }}
          >
            Showcasing applications developed and rigorously tested across end-to-end user flows, APIs, and edge cases.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-md'
                    : dark
                    ? 'text-[#A1A1AA] hover:text-white bg-white/5 border border-white/10'
                    : 'text-[#475569] hover:text-[#0F172A] bg-white border border-[#F8DCE8] shadow-xs'
                }`}
                style={{
                  background: isActive
                    ? dark
                      ? 'linear-gradient(135deg, #F472B6 0%, #ec4899 100%)'
                      : 'linear-gradient(135deg, #E11D48 0%, #DB2777 100%)'
                    : undefined,
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl overflow-hidden glass-card flex flex-col justify-between border"
                style={{
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(244,114,182,0.25)',
                  backgroundColor: dark ? 'rgba(32,32,36,0.75)' : 'rgba(255,255,255,0.95)',
                }}
              >
                <div>
                  {/* Image Showcase */}
                  <div
                    className="relative h-52 sm:h-56 overflow-hidden cursor-pointer bg-black/10"
                    onClick={() => openLightbox(project, 0)}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay & Photo Count Pill */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <IconPhoto size={14} />
                      <span>{project.images.length} Photos</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-black/50 backdrop-blur-sm">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs font-bold underline underline-offset-2 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        View Gallery →
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      className="font-heading text-xl font-bold mb-2 tracking-tight"
                      style={{ color: dark ? '#FFFFFF' : '#0F172A' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3"
                      style={{ color: dark ? '#A1A1AA' : '#334155' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold px-2.5 py-1 rounded-lg"
                            style={{
                              backgroundColor: dark ? 'rgba(244,114,182,0.1)' : 'rgba(244,114,182,0.12)',
                              color: dark ? '#F472B6' : '#BE123C',
                              border: `1px solid ${dark ? 'rgba(244,114,182,0.2)' : 'rgba(244,114,182,0.25)'}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testing Tags */}
                    <div>
                      <span
                        className="block text-[11px] font-bold uppercase tracking-wider mb-2"
                        style={{ color: dark ? '#2DD4BF' : '#0F766E' }}
                      >
                        Tested For:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.testing.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1"
                            style={{
                              backgroundColor: dark ? 'rgba(45,212,191,0.1)' : 'rgba(13,148,136,0.1)',
                              color: dark ? '#2DD4BF' : '#0F766E',
                              border: `1px solid ${dark ? 'rgba(45,212,191,0.2)' : 'rgba(13,148,136,0.2)'}`,
                            }}
                          >
                            <span>✓</span>
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div
                  className="p-4 sm:p-6 pt-0 mt-2 border-t"
                  style={{
                    borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(244,114,182,0.15)',
                  }}
                >
                  <button
                    onClick={() => openLightbox(project, 0)}
                    className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-2xs"
                    style={{
                      backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                      color: dark ? '#FFFFFF' : '#0F172A',
                      border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(244,114,182,0.3)'}`,
                    }}
                  >
                    <IconPhoto size={16} className="text-[#DB2777] dark:text-[#F472B6]" />
                    <span>Open Screenshots ({project.images.length})</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex flex-col items-center justify-between bg-black/90 p-3 sm:p-6 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Header */}
            <div
              className="w-full max-w-5xl flex items-center justify-between z-20 pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h3 className="text-white text-base sm:text-lg font-bold">
                  {currentProject.title} Screenshots
                </h3>
                <p className="text-white/60 text-xs">
                  {lightboxIndex + 1} of {currentProject.images.length}
                </p>
              </div>

              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <IconX size={24} />
              </button>
            </div>

            {/* Main Image Stage */}
            <div
              className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all active:scale-95 cursor-pointer"
                aria-label="Previous screenshot"
              >
                <IconChevronLeft size={28} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                src={currentProject.images[lightboxIndex]}
                alt={`${currentProject.title} preview ${lightboxIndex + 1}`}
                className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all active:scale-95 cursor-pointer"
                aria-label="Next screenshot"
              >
                <IconChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div
              className="w-full max-w-2xl flex items-center justify-center gap-2 sm:gap-3 py-3 overflow-x-auto z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {currentProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    lightboxIndex === idx
                      ? 'border-[#F472B6] scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Jump to screenshot ${idx + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

