export default function Statement() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-slate-200/80 relative overflow-hidden" aria-label="Personal Statement">
      <div className="max-w-4xl mx-auto relative">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-gradient-to-r from-indigo-500/10 via-purple-500/15 to-pink-500/10 blur-3xl pointer-events-none -z-10" />

        <div className="p-8 sm:p-14 rounded-3xl bg-white/80 border border-slate-200/90 shadow-xl backdrop-blur-md relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
            Core Philosophy
          </div>

          <div className="relative">
            <span className="absolute -top-10 -left-6 text-7xl font-serif text-indigo-200/60 select-none pointer-events-none">
              “
            </span>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-[1.35] tracking-tight relative z-10">
              Good design isn't only about how a website looks. It's about{' '}
              <span className="gradient-text-vibrant">making complex systems easier to understand</span> and delightful to use.
            </blockquote>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-500/20">
              D
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Dewi Marsela Putri
              </p>
              <p className="text-xs text-slate-500">
                Web Developer &amp; System Analyst
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
