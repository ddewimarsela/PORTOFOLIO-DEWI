const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '⚡',
    color: 'indigo',
    gradient: 'from-indigo-500 to-cyan-500',
    lightBg: 'bg-indigo-50/80',
    border: 'border-indigo-100',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60 hover:bg-indigo-100/70',
    description: 'Building dynamic, responsive, and accessible user interfaces.',
    items: ['React JS', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Component UI'],
  },
  {
    title: 'Backend & Systems',
    icon: '⚙️',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50/80',
    border: 'border-emerald-100',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60 hover:bg-emerald-100/70',
    description: 'Scalable services, REST endpoints, and relational databases.',
    items: ['Golang', 'Node.js', 'RESTful API', 'MySQL Database', 'System Analysis'],
  },
  {
    title: 'UI/UX & Creative',
    icon: '🎨',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
    lightBg: 'bg-pink-50/80',
    border: 'border-pink-100',
    tagColor: 'bg-pink-50 text-pink-700 border-pink-200/60 hover:bg-pink-100/70',
    description: 'Human-centered interfaces, wireframing, and design tokens.',
    items: ['Figma', 'UI Design', 'Wireframing', 'Prototyping', 'Canva'],
  },
  {
    title: 'Engineering Tools',
    icon: '🛠️',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50/80',
    border: 'border-amber-100',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200/60 hover:bg-amber-100/70',
    description: 'Version control, API testing, and hardware prototyping.',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'ESP32 / IoT'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              SKILLS &amp; <span className="gradient-text-vibrant">TECH STACK</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            A balanced foundation spanning modern frontend frameworks, backend microservices, system modeling, and user interface craftsmanship.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group"
            >
              <div>
                {/* Header with Icon Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.gradient} text-white flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 ${category.tagColor}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Proficiency Focus</span>
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
