import { personalInfo, skillCategories } from '../data/portfolioData'

export default function About() {
  const { aboutStory } = personalInfo

  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Little Story & About Me + Info Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Orange Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8438] mb-1">
              {aboutStory.eyebrow}
            </span>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#202020] tracking-tight mb-5">
              {aboutStory.heading}
            </h2>

            {/* Story Paragraph */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed text-justify mb-8">
              {aboutStory.paragraph}
            </p>

            {/* Two Side-by-Side Metadata Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aboutStory.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FBFBFC] border border-neutral-200/80 shadow-xs hover:border-[#FF8438]/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    {card.label}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill & Perangkat Kerja Panel */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              {/* Panel Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF8438]" aria-hidden="true" />
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                  Skills &amp; Tools
                </h3>
              </div>

              {/* Categorized Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                {skillCategories.map((group, groupIdx) => (
                  <div
                    key={group.category}
                    className={group.category === 'INTERPERSONAL SKILLS' ? 'sm:col-span-2' : ''}
                  >
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                      {group.category}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => {
                        // Highlight soft orange border for methodology & key BA skills as in reference
                        const isHighlighted =
                          groupIdx === 2 || skill === 'Figma Prototyping' || skill === 'React.js'

                        return (
                          <span
                            key={skill}
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-default select-none ${
                              isHighlighted
                                ? 'bg-white border border-[#FF8438]/40 text-neutral-800 hover:border-[#FF8438] hover:text-[#FF8438] hover:shadow-xs'
                                : 'bg-white border border-neutral-200 text-neutral-700 hover:border-[#FF8438]/50 hover:text-neutral-900'
                            }`}
                          >
                            {skill}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
