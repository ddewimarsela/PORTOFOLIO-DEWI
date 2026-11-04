import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolioData'
import { Menu, X } from './icons'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'experience', 'organizations', 'projects', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 180

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      const yOffset = -70
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(targetId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Centered Black Pill Navbar Container */}
      <nav
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#171717] text-white shadow-xl shadow-black/15 border border-neutral-800 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-[#171717]/95 shadow-2xl scale-[0.98]' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF8438] text-white shadow-sm shadow-[#FF8438]/30 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Mobile Navigation Bar Header */}
        <div className="flex md:hidden items-center justify-between gap-3 w-full min-w-[260px] px-2 py-1">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 text-white font-bold text-sm tracking-tight"
          >
            <span className="w-6 h-6 rounded-full bg-[#FF8438] text-white flex items-center justify-center text-xs">
              D
            </span>
            <span>Dewi</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#FF8438]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 z-50 bg-[#171717] rounded-3xl p-4 border border-neutral-800 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF8438] text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
