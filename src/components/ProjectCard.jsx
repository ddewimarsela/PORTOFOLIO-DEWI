export default function ProjectCard({ project }) {
  const { title, description, techs, gradient, emoji, category } = project

  return (
    <article className="group relative soft-card rounded-2xl overflow-hidden soft-card-hover transition-all duration-400 hover:-translate-y-1.5 flex flex-col">
      {/* Image area */}
      <div className={`relative h-48 ${gradient} overflow-hidden flex-shrink-0`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent z-10" />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Emoji icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="text-6xl filter drop-shadow-lg animate-float group-hover:scale-110 transition-transform duration-500">
            {emoji}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-white/20 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-text-primary text-base mb-2 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 px-2.5 py-1 rounded-full group-hover:bg-indigo-100 group-hover:border-indigo-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
