import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBrandGithub, IconExternalLink, IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
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
    title: 'EduVibe',
    description:
      'EduVibe is a responsive learning management application that streamlines online education with secure authentication, course organization, and an intuitive user interface. Built with modern web technologies to deliver a fast and reliable user experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
    testing: ['Manual Testing', 'Functional Testing', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'End-to-End (E2E) Testing', 'User Interface (UI) Testing'],
    images: EDUVIBE_IMAGES,
  },
  {
    title: 'VentSpace',
    description:
      'VentSpace is a safe and supportive platform where users can anonymously share thoughts, express emotions, and connect with a caring community. Designed to promote mental well-being through a clean, secure, and user-friendly experience.',
    tags: ['React', 'Tailwind', 'Supabase'],
    testing: ['Manual Testing', 'Functional Testing', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'End-to-End (E2E) Testing', 'User Interface (UI) Testing'],
    images: VENTSPACE_IMAGES,
  },
  {
    title: 'PlayGen',
    description:
      'PlayGen is a QA automation toolkit that generates test scripts, automation frameworks, API requests, SQL queries, CI/CD pipelines, and testing documentation to streamline software testing.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub'],
    testing: ['Manual Testing', 'Functional Testing', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'End-to-End (E2E) Testing', 'User Interface (UI) Testing'],
    images: PLAYGEN_IMAGES,
  },

]

export default function Projects() {
  const { dark } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState([])

  const openLightbox = (images, index) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: dark ? '#F472B6' : '#F472B6' }}
          >
            Featured Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6"
          >
            Projects I've Built & Tested
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
          >
            A showcase of my work where I wore both hats: developing modern web applications and rigorously testing them to ensure a flawless user experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: dark ? '#202024' : '#FFFCFC',
                borderColor: hoveredIndex === index
                  ? '#F472B6'
                  : (dark ? 'rgba(255,255,255,0.06)' : '#F8DCE8'),
                borderWidth: '1px',
                borderStyle: 'solid',
                boxShadow: dark
                  ? (hoveredIndex === index ? '0 20px 48px rgba(244,114,182,0.12)' : '0 4px 24px rgba(0,0,0,0.2)')
                  : (hoveredIndex === index ? '0 20px 48px rgba(244,114,182,0.12)' : '0 4px 24px rgba(0,0,0,0.04)'),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {project.images ? (
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(project.images, 0)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Click to view all {project.images.length} photos
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: dark ? project.darkGradient : project.gradient }}
                >
                  <span className="text-5xl sm:text-6xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                    style={{
                      background: 'rgba(244,114,182,0.1)',
                      backdropFilter: 'blur(2px)',
                    }}
                  />
                </div>
              )}

              <div className="p-6">
                <h3
                  className="font-heading text-xl font-semibold mb-2 tracking-tight"
                  style={{ color: dark ? '#fff' : '#1F2937' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: dark ? 'rgba(244,114,182,0.1)' : '#FCE7F3',
                        color: '#F472B6',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="text-xs font-semibold mr-1"
                    style={{ color: dark ? '#A1A1AA' : '#6B7280' }}
                  >
                    Testing:
                  </span>
                  {project.testing.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: dark ? 'rgba(96,165,250,0.12)' : '#DBEAFE',
                        color: '#3B82F6',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#F3F4F6',
                        color: dark ? '#E4E4E7' : '#374151',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandGithub size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: '#F472B6',
                        color: '#fff',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <IconX size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
              }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <IconChevronLeft size={36} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxImages[lightboxIndex]}
              alt={`Screenshot ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
              }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <IconChevronRight size={36} />
            </button>

            <div className="absolute bottom-4 text-white/60 text-sm">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
