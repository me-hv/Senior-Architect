'use client'

import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Sparkles, Briefcase, Code, MousePointer2 } from 'lucide-react'
import { TechStrip } from '@/components/ui/TechStrip'
import data from '@/data.json'


const experience = [
  {
    role: 'Social Media Manager',
    company: 'Hira Times',
    period: '2025 — Present',
    summary: 'Driving content strategy, platform-specific design, and digital growth for a regional news brand.',
    current: true,
  },
  {
    role: 'Graphic Designer',
    company: 'Chopra Musicals',
    period: '2023 — 2024',
    summary: 'Designed album artwork, promotional graphics, and event collateral — maintaining a cohesive brand identity.',
    current: false,
  },
  {
    role: 'Music Producer & Video Editor',
    company: 'IRA Records',
    period: '2019 — 2023',
    summary: 'Produced and mastered tracks. Directed and edited music video content with motion graphics.',
    current: false,
  },
  {
    role: 'Computer Operator',
    company: 'UPPCL',
    period: '2016 — 2019',
    summary: 'Managed data entry, record-keeping, and digital documentation for a public-sector utility.',
    current: false,
  },
]

// ─── Component Helpers ────────────────────────────────────────────────────────

function BentoCard({ children, className, label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md p-10 md:p-14 relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-10 left-10 text-[10px] sm:text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/20 tracking-[0.3em] uppercase pointer-events-none">
        [ {label} ]
      </div>
      <div className="pt-8 h-full">
        {children}
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-[#7c3aed]/5 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-32">
        {/* Row 1: Bio + Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Bio Card (8 Units) */}
          <BentoCard label="WHO I AM" className="lg:col-span-8">
            <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 leading-[1.3] font-[family-name:var(--font-sans)] tracking-tighter">
              I don't just design screens or write code — I <span className="text-white font-bold italic underline decoration-[#7c3aed]/50 underline-offset-8">architect experiences.</span> With 7+ years across the creative and technical pipeline, I build scalable systems where precision meets storytelling.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
               {[
                 ['Location', 'Meerut, India'],
                 ['Status', 'Available for Missions'],
                 ['Years XP', '7+ Years'],
               ].map(([key, val]) => (
                 <div key={key} className="flex gap-3 items-center">
                   <div className="h-1 w-1 rounded-full bg-[#7c3aed]" />
                   <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">{key}</span>
                   <span className="text-xs font-semibold text-white/70">{val}</span>
                 </div>
               ))}
            </div>
          </BentoCard>

          {/* Focus Card (4 Units) */}
          <BentoCard label="FOCUS" className="lg:col-span-4 flex flex-col justify-center">
            <ul className="space-y-10">
              {[
                ['01', 'Spatial UI/UX'],
                ['02', 'Audio/Visual Engineering'],
                ['03', 'Full-Stack Performance'],
              ].map(([num, title]) => (
                <li key={num} className="group/item">
                  <div className="text-4xl font-black font-[family-name:var(--font-mono)] text-[#7c3aed]/40 group-hover/item:text-[#7c3aed] transition-colors duration-500 mb-2">
                    {num}
                  </div>
                  <div className="text-lg font-bold text-white tracking-widest uppercase truncate whitespace-nowrap">
                    {title}
                  </div>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>

        {/* Row 2: Experience (12 Units) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <BentoCard label="EXPERIENCE" className="lg:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experience.map((job) => (
                <div key={job.role} className="relative group/job p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#7c3aed]/30 transition-all">
                  <div className="text-[10px] font-mono text-zinc-500 mb-4 flex justify-between uppercase tracking-widest">
                    <span>{job.period}</span>
                    {job.current && <span className="text-emerald-400">Current</span>}
                  </div>
                  <h4 className="text-white font-bold mb-1">{job.role}</h4>
                  <p className="text-zinc-600 text-xs font-mono uppercase mb-4 tracking-wider">{job.company}</p>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-3">
                    {job.summary}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Row 3: Tech Strip (12 Units) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-12">
            <TechStrip />
          </div>
        </div>
      </main>
    </div>
  )
}

