'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, Code, Zap } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design Systems",
      icon: <LayoutDashboard className="w-8 h-8 text-white" />,
      description: "I construct scalable, consistent, and beautiful design architectures. Delivering premium aesthetic frameworks focused on user psychology.",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
      iconColor: "text-pink-400"
    },
    {
      title: "Full-Stack Web Apps",
      icon: <Code className="w-8 h-8 text-white" />,
      description: "Engineering tailored, database-driven applications using Next.js and Supabase. Building robust infrastructures that scale globally.",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      iconColor: "text-blue-400"
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="w-8 h-8 text-white" />,
      description: "Auditing and rewriting legacy code to hit strict Lighthouse targets. Implementing edge-caching, lazy-loading, and bundle splitting.",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.5)]",
      iconColor: "text-yellow-400"
    }
  ]

  return (
    <section id="services" className="py-24 relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter !text-white mb-4">
          How I Help
        </h2>
        <p className="!text-zinc-300 font-medium max-w-xl mx-auto text-lg leading-relaxed">
          Specialized disciplines engineered to solve complex product problems with surgical precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[2.5rem] p-10 border border-white/20 bg-[#111111] flex flex-col gap-6 group hover:-translate-y-2 transition-all duration-500"
          >
            {/* Glass Circle Icon Container */}
            <div className={`w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 transition-all duration-500 group-hover:scale-110 ${svc.glow} backdrop-blur-md`}>
              <div className={`${svc.iconColor}`}>
                {svc.icon}
              </div>
            </div>
            
            <h3 className="text-3xl font-black !text-white tracking-tight">
              {svc.title}
            </h3>
            
            <p className="!text-zinc-300 text-lg font-medium leading-relaxed">
              {svc.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
