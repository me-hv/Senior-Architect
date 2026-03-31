'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent } from 'react'
import { FloatingHero } from '@/components/ui/FloatingHero'
import { ServicesSection } from '@/components/ui/ServicesSection'
import { BentoAbout } from '@/components/ui/BentoAbout'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

// ── Featured projects teaser data ──────────────────────────────────────────────
const featuredProjects = [
  {
    title: 'Aura Jewelry',
    category: 'UI/UX Design',
    tagline: 'Premium e-commerce with a Quiet Luxury aesthetic',
    gradient: 'from-rose-900/50 to-amber-900/30',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Hira Times',
    category: 'Full-Stack Dev',
    tagline: 'Digital news platform for a regional media brand',
    gradient: 'from-blue-900/50 to-cyan-900/30',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  return (
    <div
      className="relative isolate overflow-hidden bg-[var(--background)] min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Noise Overlay (Optimized with static noise instead of SVG filter) */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("https://res.cloudinary.com/dqr6u9re0/image/upload/v1642878932/grain_no7dzk.png")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Spatial Light (Optimized for GPU) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.05), transparent 40%)`
          ),
          willChange: 'background',
          transform: 'translateZ(0)'
        }}
      />

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-image-[linear-gradient(to_bottom,transparent,black_10%,transparent_90%)]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, transparent 90%)' }} />

      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 blur-[150px] opacity-10 bg-[#7c3aed] w-[800px] h-[800px] rounded-full pointer-events-none" />

      <main className="w-full flex flex-col justify-start relative pt-12">

        {/* ── Hero ── */}
        <section id="home" className="w-full min-h-screen flex items-center px-6 lg:px-8">
          <FloatingHero />
        </section>

        {/* ── About Teaser ── */}
        <BentoAbout />

        {/* "Learn More" link to /about */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-4 mb-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-[family-name:var(--font-mono)] tracking-widest uppercase text-xs group"
          >
            Full Profile & Timeline
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Featured Work Teaser ── */}
        <section className="py-24 relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Selected <span className="text-white">Missions.</span>
              </h2>
              <p className="text-white/50 font-light max-w-xl text-lg">
                A preview of the highest-impact work. The full case studies live in the gallery.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-[family-name:var(--font-mono)] tracking-widest uppercase text-xs group"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Gradient Preview */}
                <div className={`w-full h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 font-black text-5xl tracking-tighter">{project.title}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-[family-name:var(--font-mono)] tracking-widest uppercase px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white/60">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 font-light mb-6 text-sm leading-relaxed">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(t => (
                      <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="/work" className="text-xs text-white/40 hover:text-white font-[family-name:var(--font-mono)] tracking-widest uppercase flex items-center gap-2 group/link transition-colors">
                    See Full Case Study
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-[family-name:var(--font-mono)] tracking-widest uppercase text-xs group">
              View All Missions
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── Services ── */}
        <ServicesSection />

        {/* ── Contact CTA ── */}
        <section id="contact" className="py-32 relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] p-12 md:p-24 border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay pointer-events-none" />
            <h2 className="text-[2.5rem] md:text-6xl lg:text-[5rem] font-black tracking-tighter text-white mb-6 relative z-10 leading-[1.1]">
              Ready to <span className="opacity-40">Build?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-16 relative z-10">
              Stop settling for restrictive templates. Invest in a bespoke, high-performance platform engineered to dominate.
            </p>
            <Link
              href="/contact"
              className="px-12 py-5 rounded-full bg-white text-black text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:bg-white/90 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.4)] relative z-10 flex items-center gap-3"
            >
              Start a Project
              <span className="text-xl leading-none">→</span>
            </Link>
          </motion.div>
        </section>

      </main>
    </div>
  )
}
