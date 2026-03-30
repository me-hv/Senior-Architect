'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent } from 'react'
import { FloatingHero } from '@/components/ui/FloatingHero'
import { BentoAbout } from '@/components/ui/BentoAbout'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { ServicesSection } from '@/components/ui/ServicesSection'
import Link from 'next/link'
import { Terminal } from 'lucide-react'

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
      {/* Top Left Logo (replaces original top navbar) */}
      <div className="absolute top-8 left-8 z-50 mix-blend-exclusion">
        <a href="#home" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
          <span className="text-white text-lg font-bold">HV</span>
        </a>
      </div>

      {/* Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Spatial Light */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.05), transparent 40%)`
          )
        }}
      />
      
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-image-[linear-gradient(to_bottom,transparent,black_10%,transparent_90%)]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, transparent 90%)'}} />
      
      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 blur-[150px] opacity-10 bg-[#7c3aed] w-[800px] h-[800px] rounded-full pointer-events-none" />

      <main className="w-full flex flex-col justify-start relative pt-12">
        
        {/* Hero Section */}
        <section id="home" className="w-full min-h-screen flex items-center px-6 lg:px-8">
           <FloatingHero />
        </section>

        <BentoAbout />

        {/* Work Section */}
        <section id="work" className="py-24 relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sans)] tracking-tight text-white drop-shadow-sm mb-4">
              Selected <span className="text-white">Missions.</span>
            </h2>
            <p className="text-white/50 font-light max-w-xl text-lg">
              Case studies detailing the extraction of value from complex UX problems, scaling into high-conversion products.
            </p>
          </div>

          <CaseStudyCard 
            index={0}
            title="Liquid Glass OS"
            gradientMockup="from-[#7c3aed]/40 to-[#3b82f6]/40"
            tags={["Next.js 15", "WebGL", "Framer Motion", "Tailwind"]}
            designProblem="The client required a web experience that shattered typical flat interfaces, demanding a 3D, physics-based environment that remained accessible and performed perfectly."
            devSolution="Architected a custom 3D windowing layer utilizing optimized Framer Motion springs, achieving 60FPS physics simulations while seamlessly integrating with standard React-like state and API flows."
          />

          <CaseStudyCard 
            index={1}
            title="Market Watch Engine"
            gradientMockup="from-emerald-600/30 to-teal-500/30"
            tags={["React", "Chart.js", "Supabase", "Math.js"]}
            designProblem="Translating overwhelmingly dense financial market data sheets into an intuitive, visually filterable canvas that retail investors could query instantly."
            devSolution="Built a custom AST-driven filtering engine for ultra-fast dataset slicing, integrating high-performance canvas renderers to map 50-DMA overlays synchronously without tying up the main thread."
          />
        </section>

        <ServicesSection />

        {/* Contact Section */}
        <section id="contact" className="py-32 relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] p-12 md:p-24 border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz4KPC9zdmc+')] mix-blend-overlay pointer-events-none opacity-50" />
            
            <h2 className="text-[2.5rem] md:text-6xl lg:text-[5rem] font-black font-[family-name:var(--font-sans)] tracking-tighter text-white mb-6 relative z-10 drop-shadow-2xl leading-[1.1]">
              Ready to <span className="opacity-40">Build?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-16 relative z-10">
              Stop settling for restrictive templates. Invest in a bespoke, high-performance structured platform engineered to dominate.
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
