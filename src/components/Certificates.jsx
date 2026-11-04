import { certificatesData } from '../data/portfolioData'
import { Award, CheckCircle } from './icons'

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#202020] tracking-tight mb-3">
            Certificates <span className="text-[#FF8438]">&amp; Training</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            A continuous commitment to strengthening software engineering and business analysis expertise.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-[#FF8438]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Square Icon Badge with Code */}
                <div className="w-10 h-10 rounded-xl bg-[#FFF5EE] border border-[#FFE0D0] text-[#FF8438] font-black text-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cert.badgeCode}
                </div>

                {/* Category Label */}
                <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  {cert.category}
                </span>

                {/* Certificate Title */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#FF8438] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Concise Description */}
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Metadata: Hours & Status Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs">
                <span className="text-neutral-400 font-medium text-[11px]">
                  {cert.hours}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                  <CheckCircle size={11} className="text-emerald-600" />
                  <span>{cert.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
