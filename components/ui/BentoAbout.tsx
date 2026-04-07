'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { TechStrip } from './TechStrip'

export function BentoAbout({ aboutOnly = false }: { aboutOnly?: boolean }) {
  const content = (
    <div className="flex flex-col gap-6 w-full min-w-0 max-w-full">
        
        {/* Row 1: Who I Am + Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full min-w-0 max-w-full">
          {/* Bio Cell */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:col-span-2 rounded-[2rem] p-6 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-center overflow-hidden relative group"
          >
            <div className="relative z-10 space-y-8">
              <h3 className="text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/40 tracking-[0.2em] uppercase">
                [ WHO I AM ]
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-[1.4] font-[family-name:var(--font-sans)] tracking-tight break-words whitespace-normal w-full">
                I am a Senior Full-Stack Engineer and UX Designer. I engineer complete, scalable architectures and <span className="text-white font-bold drop-shadow-md">fluid spatial interfaces</span>, deeply prioritizing <span className="text-white font-bold drop-shadow-md">performance and conversion</span> from day one.
              </p>
            </div>
          </motion.div>

          {/* Focus Cell */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full rounded-[2rem] p-6 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/40 tracking-[0.2em] uppercase mb-10">
                [ FOCUS ]
              </h3>
              <ul className="space-y-6 w-full min-w-0">
                <li className="flex items-center gap-3 md:gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-xs sm:text-sm group/list">
                  <span className="text-[#a78bfa] font-bold transition-colors">01.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SPATIAL UI/UX</span>
                </li>
                <li className="flex items-center gap-3 md:gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-xs sm:text-sm group/list">
                  <span className="text-emerald-400 font-bold transition-colors">02.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SCALABLE BACKENDS</span>
                </li>
                <li className="flex items-center gap-3 md:gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-xs sm:text-sm group/list">
                  <span className="text-blue-400 font-bold transition-colors">03.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SYSTEM ARCHITECTURE</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Full-Width Tech Marquee */}
        <TechStrip />

        {/* Row 3: Learning Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[2rem] p-6 md:p-8 border border-[#7c3aed]/30 bg-[#7c3aed]/10 backdrop-blur-3xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between shadow-2xl group gap-4 w-full min-w-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7c3aed]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          <div className="flex items-center gap-5 relative z-10 w-full">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-[family-name:var(--font-sans)] font-semibold flex items-center gap-4 text-lg md:text-xl">
                  Currently Lab-Testing
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    <motion.div 
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                      animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                  </div>
                </h4>
                <p className="text-sm md:text-base text-white/70 font-medium">Advanced WebGL Shaders & AI Agent Systems</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
  )

  if (aboutOnly) return content

  return (
    <section id="about" className="py-24 relative z-20 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 mt-20 w-full overflow-hidden md:overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sans)] tracking-tight text-white drop-shadow-sm mb-4 leading-tight">
          Architecting <span className="text-[var(--color-accent)]">Value.</span>
        </h2>
        <p className="text-white/50 font-light max-w-xl text-lg">
          I build high-performance systems and intuitive spatial interfaces that convert users into clients.
        </p>
      </motion.div>
      {content}
    </section>
  )
}
