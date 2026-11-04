import { organizationsData } from '../data/portfolioData'
import ecCertificateOne from '../assets/EC/EC1.jpg'
import ecCertificateTwo from '../assets/EC/EC2.jpg'

const englishClubMedia = [
  { src: ecCertificateOne, alt: 'English Club cross-culture understanding certificate' },
  { src: ecCertificateTwo, alt: 'English Club news anchor competition certificate' },
]

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FBFBFC]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8438]">
            Community &amp; Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#202020] tracking-tight mt-1 mb-3">
            Organizations <span className="text-[#FF8438]">&amp; Activities</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            My organizational involvement and the transferable skills developed through active participation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {organizationsData.map((item) => (
            <article
              key={`${item.organization}-${item.period}`}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#FF8438]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex px-2.5 py-1 rounded-full bg-[#FFF5EE] border border-[#FFE0D0] text-[#D96524] text-[10px] font-bold uppercase tracking-wider">
                  {item.type}
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  {item.period}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                {item.role}
              </h3>
              <p className="text-sm font-semibold text-[#FF8438] mt-1">
                {item.organization}
              </p>
              <ul className="space-y-2 mt-4">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF8438] flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-50 text-neutral-600 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.organization === 'English Club' && (
                <div className="grid grid-cols-2 gap-2 mt-5">
                  {englishClubMedia.map((media) => (
                    <a
                      key={media.src}
                      href={media.src}
                      target="_blank"
                      rel="noreferrer"
                      className="block overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                      aria-label={`Open ${media.alt}`}
                    >
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}