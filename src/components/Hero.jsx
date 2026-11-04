import { ArrowUpRight, Sparkles, Quote } from './icons'
import fotoDewi from '../assets/foto dewi.png'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const yOffset = -70
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-0 px-4 sm:px-6 overflow-hidden bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top: Badge + Headline centered */}
        <div className="flex flex-col items-center text-center mb-0">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border-2 border-[#FF8438]/30 bg-white text-neutral-800 text-base font-bold shadow-lg shadow-orange-100 mb-4 animate-fade-in" style={{boxShadow:'0 0 0 6px rgba(255,132,56,0.08), 0 4px 24px rgba(255,132,56,0.12)'}}>
            <span>{personalInfo.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#202020] tracking-tight leading-[1.15] max-w-3xl">
            <span>{personalInfo.titlePrefix} </span>
            <span className="text-[#FF8438]">{personalInfo.titleHighlight}</span>
            <span>,</span>
            <span className="block mt-1 sm:mt-2">Web Developer &amp;</span>
            <span className="block text-neutral-800">System Analyst</span>
          </h1>
        </div>

        {/* 3-Column Layout: Quote | Photo | Freshgraduate — all aligned to bottom */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end -mt-8 sm:-mt-14 md:-mt-20 lg:-mt-24">

          {/* Left: Quote annotation */}
          <div className="hidden md:flex flex-col items-start text-left max-w-[200px] space-y-2 z-10 pb-24">
            <Quote className="w-7 h-7 text-neutral-400 rotate-180 mb-1" />
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {personalInfo.introQuote}
            </p>
          </div>

          {/* Center: Portrait rising from section bottom */}
          <div className="relative flex flex-col items-center justify-end z-10 md:col-start-2">
            <div className="relative w-[360px] sm:w-[480px] md:w-[580px] lg:w-[660px] mx-auto">

              {/* Ambient orange glow behind photo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[55%] rounded-full bg-[#FF8438]/20 blur-3xl z-0 animate-pulse" />

              {/* Decorative floating dots */}
              <div className="absolute top-[15%] -left-3 w-3 h-3 rounded-full bg-[#FF8438] opacity-70 animate-bounce" style={{animationDelay:'0s', animationDuration:'2.4s'}} />
              <div className="absolute top-[30%] -right-4 w-2 h-2 rounded-full bg-[#FF8438] opacity-50 animate-bounce" style={{animationDelay:'0.4s', animationDuration:'2s'}} />
              <div className="absolute top-[8%] right-4 w-2.5 h-2.5 rounded-full bg-orange-300 opacity-60 animate-bounce" style={{animationDelay:'0.8s', animationDuration:'2.8s'}} />
              <div className="absolute top-[45%] -left-5 w-2 h-2 rounded-full bg-orange-400 opacity-40 animate-bounce" style={{animationDelay:'1.2s', animationDuration:'3s'}} />

              {/* Pulsing ring accent */}
              <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[85%] h-[42%] rounded-full border-2 border-[#FF8438]/20 animate-ping" style={{animationDuration:'3s'}} />

              <img
                src={fotoDewi}
                alt={personalInfo.fullName}
                className="relative z-10 w-full h-auto object-contain select-none pointer-events-none block"
                loading="eager"
              />

              {/* CTA Buttons — overlaid on the orange arch area at bottom of photo */}
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 whitespace-nowrap">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, 'projects')}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF8438] hover:bg-[#e87228] text-white text-sm font-semibold shadow-md shadow-orange-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Portofolio</span>
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/95 hover:bg-white text-neutral-800 text-sm font-semibold border border-neutral-300/80 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>

          {/* Right: Freshgraduate annotation */}
          <div className="hidden md:flex flex-col items-end text-right max-w-[200px] space-y-1 z-10 pb-24">
            <span className="text-2xl font-bold text-neutral-900 tracking-tight">
              {personalInfo.freshgraduateLabel}
            </span>
            <span className="text-base font-semibold text-[#FF8438]">
              {personalInfo.freshgraduateMajor}
            </span>
            <svg
              className="w-20 h-4 text-[#FF8438] mt-1"
              viewBox="0 0 80 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 12C20 4 55 14 78 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Mobile: annotations below photo */}
        <div className="flex md:hidden flex-col items-center gap-4 mt-6 w-full max-w-sm mx-auto px-4 pb-10">
          <div className="text-center">
            <span className="block text-xl font-bold text-neutral-900">
              {personalInfo.freshgraduateLabel}
            </span>
            <span className="block text-base font-semibold text-[#FF8438]">
              {personalInfo.freshgraduateMajor}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 text-sm text-center leading-relaxed">
            &quot;{personalInfo.introQuote}&quot;
          </div>
        </div>
      </div>
    </section>
  )
}
