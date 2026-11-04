import { useState, useRef } from 'react'
import { projectsData } from '../data/portfolioData'
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ExternalLink, Layers, CheckCircle2 } from './icons'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const touchStartX = useRef(null)

  // Carousel navigation
  const visibleCards =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
  const maxIndex = Math.max(0, projectsData.length - visibleCards)
  const pageCount = maxIndex + 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    touchStartX.current = null
  }

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 bg-white">
      {/* Full-width dark container with rounded corners and subtle abstract orange glows */}
      <div className="max-w-6xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#171717] text-white p-6 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-neutral-800">
        {/* Subtle decorative background: diagonal lines & warm orange glowing accents */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(45deg,#262626_25%,transparent_25%,transparent_75%,#262626_75%,#262626),linear-gradient(45deg,#262626_25%,transparent_25%,transparent_75%,#262626_75%,#262626)] bg-[size:40px_40px] bg-[position:0_0,20px_20px]"
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#FF8438]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF8438]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="relative z-10 max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            My <span className="text-[#FF8438]">Projects</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            A selection of web development and digital systems projects, designed with clean architecture, efficient workflows, and user-centered experiences.
          </p>
        </div>

        {/* Carousel Controls (Desktop arrows at top-right) */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <span className="text-xs text-neutral-400">
            Showing {currentIndex + 1} of {projectsData.length} projects
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-neutral-800/80 hover:bg-[#FF8438] text-neutral-300 hover:text-white border border-neutral-700 transition-all duration-200 focus:outline-none"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-neutral-800/80 hover:bg-[#FF8438] text-neutral-300 hover:text-white border border-neutral-700 transition-all duration-200 focus:outline-none"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Project Cards Carousel Viewport */}
        <div
          className="relative z-10 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-5 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (window.innerWidth >= 1024 ? 33.333 : window.innerWidth >= 640 ? 50 : 100)}%)`,
            }}
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Card Container */}
                <div className="h-full rounded-2xl bg-[#222222] border border-neutral-800 hover:border-neutral-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Top: Project Title */}
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF8438] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Center: Device Mockup Preview Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center p-2 mb-5">
                    {project.previewImage ? (
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-600 text-xs">
                        Mockup preview
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Bottom: Tags & Action Button */}
                  <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-800/80">
                    <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Circular Action Button with Arrow */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                      className="w-10 h-10 rounded-full bg-[#181818] border border-neutral-700 flex items-center justify-center text-neutral-200 group-hover:bg-[#FF8438] group-hover:border-[#FF8438] group-hover:text-white transition-all duration-200 flex-shrink-0"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Indicators */}
        <div className="relative z-10 flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? 'w-7 h-2 bg-[#FF8438]'
                  : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Open project page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1c1c1c] text-white border border-neutral-700 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
              aria-label="Close project details modal"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8438]">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Main Screenshot */}
              {selectedProject.previewImage && (
                <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                  <img
                    src={selectedProject.previewImage}
                    alt={selectedProject.title}
                    className="w-full max-h-72 object-cover object-top"
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Project Description
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Deliverables / Key Features */}
              {selectedProject.deliverables && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Scope &amp; Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={15} className="text-[#FF8438] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-200 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-400">
                  {selectedProject.demoNote}
                </span>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FF8438] hover:bg-[#e87228] text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <span>Discuss a Similar Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
