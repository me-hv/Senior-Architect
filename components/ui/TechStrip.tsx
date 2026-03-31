'use client'

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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/20 tracking-[0.3em] uppercase pointer-events-none z-10">
        [ THE STRIP ]
      </div>
      
      <div className="py-24 relative overflow-hidden flex items-center">
        <div 
          className="flex w-full"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div 
            className="flex items-center gap-20 min-w-max px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div 
                key={`${tech.name}-${i}`} 
                className={`group/icon flex items-center gap-4 text-white/40 transition-all duration-300 transform group-hover/icon:scale-110 group-hover/icon:text-white ${tech.color}`}
              >
                <tech.icon className="w-10 h-10" />
                <span className="text-xl font-bold font-[family-name:var(--font-mono)] tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Ambient status footer */}
      <div className="absolute bottom-6 left-10 right-10 flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-4">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <motion.div 
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest ">Lab Status // Testing Advanced AI Agents</span>
        </div>
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest hidden md:block">Architected by Harry Verma — 2026</span>
      </div>
    </motion.div>
  )
}
