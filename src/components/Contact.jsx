import { Mail, Download, Check } from './icons'
import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const { ctaContact } = personalInfo
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ctaContact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
    // Also trigger mailto
    window.location.href = `mailto:${ctaContact.email}?subject=Collaboration Opportunity Discussion - Dewi Portfolio`
  }

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Dark Rounded CTA Panel with subtle orange ambient glow */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#181818] border border-neutral-800 p-8 sm:p-14 md:p-16 text-center text-white overflow-hidden shadow-2xl">
          {/* Subtle warm orange ambient light center glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF8438]/12 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              {ctaContact.heading}
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              {ctaContact.paragraph}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={`mailto:${ctaContact.email}?subject=Collaboration Opportunity Discussion - Dewi Portfolio`}
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF8438] hover:bg-[#e87228] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {copied ? <Check size={16} /> : <Mail size={16} />}
                <span>{copied ? 'Email copied & opening mail...' : ctaContact.emailButtonText}</span>
              </a>

              <a
                href={ctaContact.resumeFile}
                download="CV-DEWI MARSELA PUTRI.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#232323] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold border border-neutral-700/80 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={16} />
                <span>{ctaContact.resumeButtonText}</span>
              </a>
            </div>

            {/* Configured Contact Note */}
            <p className="text-[11px] text-neutral-500 mt-6">
              <span className="text-neutral-400 font-medium">{ctaContact.email}</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4 text-xs text-neutral-400">
              <a
                href={`tel:${ctaContact.phone}`}
                className="hover:text-[#FF8438] transition-colors"
              >
                {ctaContact.phone}
              </a>
              <a
                href={ctaContact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF8438] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
