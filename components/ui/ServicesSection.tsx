'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, Code, Zap } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design Systems",
      icon: <LayoutDashboard className="w-8 h-8 text-pink-400 drop-shadow-sm" />,
      description: "I construct scalable, consistent, and beautiful design architectures. Delivering premium aesthetic frameworks focused on user psychology.",
      border: "border-pink-500/20"
    },
    {
      title: "Full-Stack Web Apps",
      icon: <Code className="w-8 h-8 text-[#3b82f6] drop-shadow-sm" />,
      description: "Engineering tailored, database-driven applications using Next.js and Supabase. Building robust infrastructures that scale globally.",
      border: "border-blue-500/20"
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="w-8 h-8 text-amber-400 drop-shadow-sm" />,
      description: "Auditing and rewriting legacy code to hit strict Lighthouse targets. Implementing edge-caching, lazy-loading, and bundle splitting.",
      border: "border-amber-500/20"
    }
  ]

  return (
    <section id="services" className="py-24 relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sans)] tracking-tight text-white drop-shadow-sm mb-4">
          How I Help
        </h2>
        <p className="text-white/50 font-light max-w-xl mx-auto text-lg">
          Specialized disciplines engineered to solve complex product problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-3xl p-10 border ${svc.border} bg-[#0a0a0a]/60 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500`}
          >
            <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500">
              {svc.icon}
            </div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-sans)] text-white">
              {svc.title}
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
              {svc.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
