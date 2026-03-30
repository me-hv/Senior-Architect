import { motion } from 'framer-motion'

interface CaseStudyCardProps {
  title: string;
  tags: string[];
  designProblem: string;
  devSolution: string;
  gradientMockup: string;
  index: number;
}

export function CaseStudyCard({ title, tags, designProblem, devSolution, gradientMockup, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="group relative flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] p-4 transition-transform duration-500 hover:scale-[1.01] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent mix-blend-overlay pointer-events-none" />
      
      {/* Visual / Screenshot Side */}
      <div className={`w-full lg:w-1/2 h-72 lg:h-auto rounded-[2rem] bg-gradient-to-br ${gradientMockup} flex items-center justify-center overflow-hidden relative isolate p-8 md:p-12`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
          <div className="h-6 w-full bg-black/40 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400/80" />
            <div className="w-2 h-2 rounded-full bg-amber-400/80" />
            <div className="w-2 h-2 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 bg-gradient-to-br from-black/60 to-black/20 p-4 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 Mix-blend-overlay" />
            <span className="text-white/30 font-bold tracking-[0.3em] uppercase text-xl font-[family-name:var(--font-sans)] drop-shadow-sm">{title} Mockup</span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sans)] text-white drop-shadow-md mb-6">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-[11px] font-[family-name:var(--font-mono)] tracking-widest text-[#a78bfa] uppercase mb-3 drop-shadow-sm">[ Design Problem ]</h4>
            <p className="text-[15px] font-light leading-relaxed text-white/70">
              {designProblem}
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-[family-name:var(--font-mono)] tracking-widest text-[#3b82f6] uppercase mb-3 drop-shadow-sm">[ Dev Solution ]</h4>
            <p className="text-[15px] font-light leading-relaxed text-white/70">
              {devSolution}
            </p>
          </div>
        </div>

        <div className="pt-10 mt-6 border-t border-white/10 flex">
           <button className="text-sm text-white font-medium hover:text-[#7c3aed] transition-colors flex items-center gap-2 group/btn uppercase tracking-widest font-semibold">
             View Protocol
             <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
           </button>
        </div>
      </div>
    </motion.div>
  )
}
