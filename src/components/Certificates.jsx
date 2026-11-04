import { certificatesData } from '../data/portfolioData'

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28 px-4 sm:px-6 bg-white [content-visibility:auto] [contain-intrinsic-size:900px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#202020] tracking-tight mb-3">
            <span className="text-[#FF8438]">Certificates</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            A continuous commitment to strengthening software engineering and business analysis expertise.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-[#FF8438]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-5 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-48 w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Category Label */}
                <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  {cert.category}
                </span>

                {/* Certificate Title */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#FF8438] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
