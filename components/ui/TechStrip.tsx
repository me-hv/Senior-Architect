'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiReact, 
  SiNextdotjs, SiNodedotjs, SiSupabase, SiPostgresql, SiDocker, 
  SiFigma, SiTailwindcss 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const TECH_STACK = [
  { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-[#F7DF1E]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6]' },
  { name: 'Python', icon: SiPython, color: 'hover:text-[#3776AB]' },
  { name: 'C++', icon: SiCplusplus, color: 'hover:text-[#00599C]' },
  { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933]' },
  { name: 'Supabase', icon: SiSupabase, color: 'hover:text-[#3ECF8E]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1]' },
  { name: 'Docker', icon: SiDocker, color: 'hover:text-[#2496ED]' },
  { name: 'AWS', icon: FaAws, color: 'hover:text-[#FF9900]' },
  { name: 'Figma', icon: SiFigma, color: 'hover:text-[#F24E1E]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
]

export function TechStrip() {
  const [duration, setDuration] = useState(40)

  useEffect(() => {
    const checkMobile = () => {
      setDuration(window.innerWidth < 768 ? 60 : 40)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full min-w-0 max-w-full rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md flex flex-col overflow-hidden"
    >
      <div className="pt-6 px-6 md:pt-10 md:px-10 text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/20 tracking-[0.3em] uppercase pointer-events-none z-10 w-full">
        [ THE STRIP ]
      </div>
      
      <div className="py-10 md:py-16 relative flex items-center w-full min-w-0 flex-1 overflow-hidden">
        <div 
          className="flex w-full min-w-0 max-w-full overflow-hidden"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div 
            className="flex items-center gap-12 md:gap-20 min-w-max px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div 
                key={`${tech.name}-${i}`} 
                className={`group/icon flex items-center gap-3 md:gap-4 text-white/40 transition-all duration-300 transform group-hover/icon:scale-110 group-hover/icon:text-white ${tech.color}`}
              >
                <tech.icon className="w-7 h-7 md:w-10 md:h-10" />
                <span className="text-lg md:text-xl font-bold font-[family-name:var(--font-mono)] tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Ambient status footer */}
      <div className="px-6 pb-6 md:px-10 md:pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <motion.div 
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest break-words whitespace-normal">Lab Status // Testing Advanced AI Agents</span>
        </div>
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest hidden md:block">Architected by Harry Verma — 2026</span>
      </div>
    </motion.div>
  )
}
