import { Mail, Download, Check, WhatsApp, LinkedIn } from './icons'
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              <a
                href={`mailto:${ctaContact.email}?subject=Collaboration Opportunity Discussion - Dewi Portfolio`}
                onClick={handleCopyEmail}
                className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-neutral-700 bg-[#232323] px-4 py-3 text-left text-white transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                {copied ? <Check size={20} className="text-neutral-300" /> : <Mail size={20} className="text-neutral-300" />}
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Email
                  </span>
                  <span className="block text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {copied ? 'Copied' : 'Get in touch'}
                  </span>
                </span>
              </a>

              <a
                href={ctaContact.resumeFile}
                download="CV-DEWI MARSELA PUTRI.pdf"
                className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-neutral-700 bg-[#232323] px-4 py-3 text-left text-white transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                <Download size={20} className="text-neutral-300" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Resume
                  </span>
                  <span className="block text-sm font-semibold">
                    Download CV
                  </span>
                </span>
              </a>

              <a
                href={`https://wa.me/${ctaContact.phone.replace(/^0/, '62')}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-neutral-700 bg-[#232323] px-4 py-3 text-left transition-all duration-200 hover:border-[#25D366]/60 hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                <WhatsApp size={22} className="text-[#25D366] flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    WhatsApp
                  </span>
                  <span className="block text-sm font-semibold text-neutral-200 group-hover:text-[#25D366] transition-colors">
                    {ctaContact.phone}
                  </span>
                </span>
              </a>
              <a
                href={ctaContact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-14 items-center gap-3 rounded-2xl border border-neutral-700 bg-[#232323] px-4 py-3 text-left transition-all duration-200 hover:border-[#0A66C2]/60 hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                <LinkedIn size={22} className="text-[#0A66C2] flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    LinkedIn
                  </span>
                  <span className="block text-sm font-semibold text-neutral-200 group-hover:text-[#0A66C2] transition-colors">
                    View my profile
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
