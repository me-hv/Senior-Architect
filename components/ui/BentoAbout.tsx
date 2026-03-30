import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiReact, 
  SiNextdotjs, SiNodedotjs, SiSupabase, SiPostgresql, SiDocker, 
  SiFigma, SiTailwindcss 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const TECH_STACK = [
  { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-[#F7DF1E] hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.8)]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6] hover:drop-shadow-[0_0_15px_rgba(49,120,198,0.8)]' },
  { name: 'Python', icon: SiPython, color: 'hover:text-[#3776AB] hover:drop-shadow-[0_0_15px_rgba(55,118,171,0.8)]' },
  { name: 'C++', icon: SiCplusplus, color: 'hover:text-[#00599C] hover:drop-shadow-[0_0_15px_rgba(0,89,156,0.8)]' },
  { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB] hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.8)]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933] hover:drop-shadow-[0_0_15px_rgba(51,153,51,0.8)]' },
  { name: 'Supabase', icon: SiSupabase, color: 'hover:text-[#3ECF8E] hover:drop-shadow-[0_0_15px_rgba(62,207,142,0.8)]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1] hover:drop-shadow-[0_0_15px_rgba(65,105,225,0.8)]' },
  { name: 'Docker', icon: SiDocker, color: 'hover:text-[#2496ED] hover:drop-shadow-[0_0_15px_rgba(36,150,237,0.8)]' },
  { name: 'AWS', icon: FaAws, color: 'hover:text-[#FF9900] hover:drop-shadow-[0_0_15px_rgba(255,153,0,0.8)]' },
  { name: 'Figma', icon: SiFigma, color: 'hover:text-[#F24E1E] hover:drop-shadow-[0_0_15px_rgba(242,78,30,0.8)]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]' },
]

export function BentoAbout() {
  return (
    <section id="about" className="py-24 relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sans)] tracking-tight text-white drop-shadow-sm mb-4">
          Architecting <span className="text-[var(--color-accent)]">Value.</span>
        </h2>
        <p className="text-white/50 font-light max-w-xl text-lg">
          I build high-performance systems and intuitive spatial interfaces that convert users into clients.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        
        {/* Row 1: Who I Am + Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bio Cell */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2rem] p-10 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-center overflow-hidden relative group"
          >
            <div className="relative z-10 space-y-8">
              <h3 className="text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/40 tracking-[0.2em] uppercase">
                [ WHO I AM ]
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-[1.4] font-[family-name:var(--font-sans)] tracking-tight">
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
            className="rounded-[2rem] p-10 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/40 tracking-[0.2em] uppercase mb-10">
                [ FOCUS ]
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-sm group/list">
                  <span className="text-[#a78bfa] font-bold transition-colors">01.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SPATIAL UI/UX</span>
                </li>
                <li className="flex items-center gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-sm group/list">
                  <span className="text-emerald-400 font-bold transition-colors">02.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SCALABLE BACKENDS</span>
                </li>
                <li className="flex items-center gap-4 text-white/70 font-medium font-[family-name:var(--font-mono)] text-sm group/list">
                  <span className="text-blue-400 font-bold transition-colors">03.</span>
                  <span className="tracking-widest uppercase group-hover/list:text-white transition-colors">SYSTEM ARCHITECTURE</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Full-Width Tech Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[2rem] pt-10 md:pt-12 pb-16 px-0 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden flex flex-col w-full group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50 z-10 pointer-events-none w-full" />
          <h3 className="px-10 text-[11px] font-semibold font-[family-name:var(--font-mono)] text-white/40 tracking-[0.2em] uppercase mb-10 relative z-20">
            [ THE STRIP ]
          </h3>
          
          <div 
            className="flex relative z-0 w-full"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <motion.div 
              className="flex items-center gap-12 md:gap-20 min-w-max pr-12 md:pr-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <div 
                  key={`${tech.name}-${i}`} 
                  className={`group/icon flex flex-col justify-center items-center text-white/30 transition-all duration-300 cursor-default relative h-20 w-16 ${tech.color}`}
                >
                  <tech.icon className="w-10 h-10 transition-transform duration-300 transform group-hover/icon:scale-110 group-hover/icon:-translate-y-2" />
                  <span className="text-[11px] font-bold font-[family-name:var(--font-mono)] opacity-0 translate-y-2 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 text-white/90 absolute -bottom-6 whitespace-nowrap transition-all duration-300 pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Row 3: Learning Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[2rem] p-6 md:p-8 border border-[#7c3aed]/30 bg-[#7c3aed]/10 backdrop-blur-3xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between shadow-2xl group cursor-default gap-4"
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
    </section>
  )
}
