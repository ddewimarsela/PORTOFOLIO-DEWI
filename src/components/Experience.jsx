import { experienceData } from '../data/portfolioData'
import cazhPhotoOne from '../assets/Cazh/5941-20260908164038-Magang Cazh _page-0002.jpg'
import cazhPhotoTwo from '../assets/Cazh/5941-20260908164038-Magang Cazh _page-0005.jpg'
import cazhPhotoThree from '../assets/Cazh/5941-20260908164038-Magang Cazh _page-0006.jpg'
import kklPhotoOne from '../assets/kkl/kkl1.png'
import kklPhotoTwo from '../assets/kkl/kkl2.png'
import kklPhotoThree from '../assets/kkl/kkl3.png'
import kklPhotoFour from '../assets/kkl/kkl4.jpeg'
import iotPhotoOne from '../assets/IOT/WhatsApp Image 2026-11-02 at 16.08.35.jpeg'
import iotPhotoTwo from '../assets/IOT/WhatsApp Image 2026-11-02 at 15.58.02.jpeg'
import dprdPhotoOne from '../assets/DPRD/dprd1.jpeg'
import dprdPhotoTwo from '../assets/DPRD/dprd2.jpeg'
import siPhotoOne from '../assets/SI/SI1.jpeg'
import siPhotoTwo from '../assets/SI/SI2.jpeg'
import siPhotoThree from '../assets/SI/SI3.jpeg'
import urnaPhotoOne from '../assets/urna/urna 1.jpeg'
import urnaPhotoTwo from '../assets/urna/urna2.jpeg'

const cazhMedia = [
  { src: cazhPhotoOne, alt: 'CAZH internship team photo', fit: 'object-cover' },
  { src: cazhPhotoTwo, alt: 'CAZH internship school activity photo', fit: 'object-cover' },
  { src: cazhPhotoThree, alt: 'CAZH internship group photo', fit: 'object-cover' },
]

const kklMedia = [
  { src: kklPhotoOne, alt: 'Field practice school website homepage', fit: 'object-cover' },
  { src: kklPhotoTwo, alt: 'Field practice school website gallery', fit: 'object-cover' },
  { src: kklPhotoThree, alt: 'Field practice curriculum data spreadsheet', fit: 'object-cover' },
  { src: kklPhotoFour, alt: 'Field practice team photo', fit: 'object-cover' },
]

const iotMedia = [
  { src: iotPhotoOne, alt: 'IoT Codex team documentation photo', fit: 'object-cover' },
  { src: iotPhotoTwo, alt: 'Guard Belt IoT project documentation poster', fit: 'object-contain bg-slate-50' },
]

const dprdMedia = [
  { src: dprdPhotoOne, alt: 'DPRD Kabupaten Kebumen internship documentation', fit: 'object-cover' },
  { src: dprdPhotoTwo, alt: 'DPRD Kabupaten Kebumen activity documentation', fit: 'object-cover' },
]

const siMedia = [
  { src: siPhotoOne, alt: 'Ruang Raya Indonesia project documentation', fit: 'object-cover' },
  { src: siPhotoTwo, alt: 'Ruang Raya Indonesia project activity documentation', fit: 'object-cover' },
  { src: siPhotoThree, alt: 'Ruang Raya Indonesia project presentation documentation', fit: 'object-cover' },
]

const urnaMedia = [
  { src: urnaPhotoOne, alt: 'Urnatech Studio design documentation', fit: 'object-cover' },
  { src: urnaPhotoTwo, alt: 'Urnatech Studio project documentation', fit: 'object-cover' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Milestones &amp; Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            EDUCATION &amp; <span className="gradient-text-vibrant">EXPERIENCE</span>
          </h2>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative group p-5 sm:p-6 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Experience marker */}
              <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#FF8438] shadow-md shadow-orange-500/20 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60 font-mono">
                      {exp.type}
                    </span>
                    <span className="text-xs font-bold font-mono text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 mt-1">
                    {exp.organization}
                  </p>

                  <ul className="space-y-2 mt-3 max-w-3xl">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF8438] flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Competency Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.organization === 'CAZH Teknologi Inovasi' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {cazhMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {exp.organization === 'SMK BOPKRI 2 Yogyakarta' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {kklMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {exp.organization === 'Universitas Putra Bangsa - Capstone Project Codex IoT' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {iotMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {exp.organization === 'DPRD Kabupaten Kebumen' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {dprdMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {exp.organization === 'PT Ruang Raya Indonesia' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {siMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {exp.organization === 'Urnatech Studio' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {urnaMedia.map((media) => (
                        <a
                          key={media.src}
                          href={media.src}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/3] hover:border-[#FF8438] transition-colors"
                          aria-label={`Open ${media.alt}`}
                        >
                          <img
                            src={media.src}
                            alt={media.alt}
                            className={`w-full h-full ${media.fit} hover:scale-105 transition-transform duration-300`}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
