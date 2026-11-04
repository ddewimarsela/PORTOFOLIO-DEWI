import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -70
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-neutral-100 bg-white py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-xs">
            D
          </span>
          <span className="font-bold text-neutral-900 text-xs sm:text-sm">
            {personalInfo.footer.brand}
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500 text-xs">
            {personalInfo.footer.subtitle}
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-neutral-600">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="hover:text-[#FF8438] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-[#FF8438] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hover:text-[#FF8438] transition-colors"
          >
            Projects
          </a>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, 'certificates')}
            className="hover:text-[#FF8438] transition-colors"
          >
            Certificates
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-neutral-400 text-xs text-center md:text-right">
          {personalInfo.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
