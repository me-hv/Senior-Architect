'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

export interface Project {
  title: string
  category: 'UI/UX Design' | 'Full-Stack Dev'
  tagline: string
  techStack: string[]
  gradient: string
  problem: string
  solution: string
  achievements: string[]
  github?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Aura Jewelry',
    category: 'UI/UX Design',
    tagline: 'Premium e-commerce with a Quiet Luxury aesthetic',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-rose-900/50 to-amber-900/30',
    problem: 'The client needed a shopping experience that communicated "Quiet Luxury" — a modern, editorial aesthetic that elevated products without relying on flashy animations or aggressive CTAs.',
    solution: 'Architected a high-fidelity product showcase system with editorial grid layouts, smooth hover states, and a minimal checkout flow. Prioritized whitespace and typography hierarchy to let the products breathe and speak for themselves.',
    achievements: [
      'Designed a responsive editorial product grid with smooth hover-parallax effects',
      'Built a minimalist, multi-step checkout with client-side validation and zero loading spinners',
      'Achieved a 95+ Lighthouse performance score by implementing lazy-loading and image optimization',
    ],
  },
  {
    title: 'Hira Times',
    category: 'Full-Stack Dev',
    tagline: 'Digital news platform for a regional media brand',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-900/50 to-cyan-900/30',
    problem: 'Hira Times needed a scalable, fast news delivery platform capable of handling a high throughput of editorial content while remaining clean and readable for daily users.',
    solution: 'Built a full Next.js App Router platform with ISR (Incremental Static Regeneration) for near-instant article rendering. Implemented a content management pipeline and dynamic category routing to handle the full editorial workflow.',
    achievements: [
      'Implemented ISR-based dynamic article routes enabling sub-100ms page loads for cached content',
      'Designed a scalable editorial layout system supporting 10+ article formats',
      'Integrated real-time social sharing and structured metadata for SEO, growing organic traffic',
    ],
  },
  {
    title: 'Drop-It',
    category: 'Full-Stack Dev',
    tagline: 'Instant cross-device file sharing with zero friction',
    techStack: ['React', 'Node.js', 'Supabase', 'TypeScript'],
    gradient: 'from-emerald-900/50 to-teal-900/30',
    problem: 'File sharing between devices required too many steps — login walls, size limits, and slow uploads. Drop-It needed to solve "I just want to hand this file off" in under 3 clicks.',
    solution: 'Built a real-time file transfer system using Supabase Realtime channels and Postgres row-level security. Files are temporarily staged, linked to a unique session code, and auto-deleted after 24 hours — zero accounts required.',
    achievements: [
      'Engineered a session-based file handoff system with zero authentication friction',
      'Used Supabase RLS policies to ensure secure, isolated file access per session',
      'Built a React drop zone UI with upload progress streaming and instant link generation',
    ],
  },
  {
    title: 'Indian Stock Screener',
    category: 'Full-Stack Dev',
    tagline: 'Fintech data screener with custom mathematical filtering',
    techStack: ['JavaScript', 'Chart.js', 'HTML/CSS', 'Math.js'],
    gradient: 'from-violet-900/50 to-purple-900/30',
    problem: 'Retail investors needed to slice through hundreds of Indian equities using complex fundamental criteria without paying for Bloomberg terminals or wading through dense spreadsheets.',
    solution: 'Built a custom AST-driven query engine that parses natural-language-like filter expressions (e.g., "P/E < 15 AND ROE > 20") into fast in-memory dataset operations. Paired with Chart.js canvas renderers to overlay 50-DMA and price charts synchronously.',
    achievements: [
      'Built a custom mathematical query engine capable of parsing and evaluating multi-condition financial expressions',
      'Implemented high-performance canvas chart renderers mapping 50-DMA overlays without blocking the main thread',
      'Designed a filterable data grid supporting sort, pagination, and instant keyword search across 500+ stocks',
    ],
  },
]

const FILTERS = ['ALL', 'UI/UX DESIGN', 'FULL-STACK DEV'] as const
type Filter = typeof FILTERS[number]

const categoryMap: Record<Filter, string | null> = {
  'ALL': null,
  'UI/UX DESIGN': 'UI/UX Design',
  'FULL-STACK DEV': 'Full-Stack Dev',
}

export function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = PROJECTS.filter(p =>
    categoryMap[activeFilter] === null || p.category === categoryMap[activeFilter]
  )

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-14">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`relative px-5 py-2 rounded-full border text-[11px] font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase transition-all duration-300 ${
              activeFilter === f
                ? 'border-white/40 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                : 'border-white/10 bg-transparent text-white/40 hover:border-white/20 hover:text-white/70'
            }`}
          >
            {f}
            {activeFilter === f && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 rounded-full bg-white/5 border border-white/20"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-pointer hover:border-white/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.7)] transition-all duration-500"
            >
              {/* Gradient Preview */}
              <div className={`w-full lg:w-[45%] min-h-[220px] lg:min-h-[320px] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] opacity-40" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Faux Window */}
                <div className="w-4/5 h-4/5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col shadow-2xl transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="h-7 w-full flex items-center gap-2 px-4 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-white/20 font-bold tracking-[0.3em] uppercase text-sm font-[family-name:var(--font-sans)]">{project.title}</span>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-[family-name:var(--font-mono)] tracking-widest uppercase px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white/60">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                <p className="text-zinc-400 font-light mb-6 text-base leading-relaxed">{project.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-white/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-sm text-white/50 font-medium group-hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest font-[family-name:var(--font-mono)] text-xs">
                    View Case Study
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] overflow-y-auto rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hero gradient */}
              <div className={`w-full h-52 bg-gradient-to-br ${selectedProject.gradient} relative overflow-hidden rounded-t-[2.5rem]`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-8 left-10">
                  <span className="text-[10px] font-[family-name:var(--font-mono)] tracking-widest uppercase px-3 py-1 rounded-full bg-black/50 border border-white/10 text-white/70 mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map(t => (
                    <span key={t} className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                {/* The Vision */}
                <div>
                  <h4 className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.3em] text-[#a78bfa] uppercase mb-4">[ The Vision ]</h4>
                  <p className="text-zinc-300 font-light leading-relaxed text-lg">{selectedProject.problem}</p>
                </div>

                {/* The Engineering */}
                <div>
                  <h4 className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.3em] text-[#3b82f6] uppercase mb-4">[ The Engineering ]</h4>
                  <p className="text-zinc-300 font-light leading-relaxed text-lg">{selectedProject.solution}</p>
                </div>

                {/* The Outcome */}
                <div>
                  <h4 className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.3em] text-emerald-400 uppercase mb-4">[ The Outcome ]</h4>
                  <ul className="space-y-4">
                    {selectedProject.achievements.map((a, i) => (
                      <li key={i} className="flex gap-4 text-zinc-300 font-light leading-relaxed">
                        <span className="text-emerald-400 font-[family-name:var(--font-mono)] font-bold shrink-0 mt-0.5">
                          0{i + 1}.
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
