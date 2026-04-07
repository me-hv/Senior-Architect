'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'

// ─── Noise SVG as data-URI ──────────────────────────────────────────────────
const NOISE_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"

// ─── Availability Badge ──────────────────────────────────────────────────────
function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 backdrop-blur-sm self-center md:self-start"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
      </span>
      <span className="text-[10px] tracking-[0.25em] uppercase text-[#10b981] font-black drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
        STATUS: 1 SLOT REMAINING
      </span>
    </motion.div>
  )
}

// ─── Magnetic Button ─────────────────────────────────────────────────────────
function MagneticButton() {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 450, damping: 25 })
  const springY = useSpring(y, { stiffness: 450, damping: 25 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 100) {
        const strength = (100 - dist) / 100
        x.set(dx * strength * 0.4)
        y.set(dy * strength * 0.4)
      } else {
        x.set(0)
        y.set(0)
      }
    },
    [x, y]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <motion.div
      ref={buttonRef}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.96 }}
      className="relative z-20 group w-full lg:w-auto"
    >
      <div className={`absolute inset-0 bg-white rounded-full transition-all duration-500 blur-2xl ${isHovered ? 'opacity-30' : 'opacity-10'}`} />
      <Link href="/contact" className="w-full lg:w-auto block">
        <button
          className="relative w-full lg:w-auto px-10 py-5 rounded-full bg-white !text-black font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 overflow-hidden"
        >
          <motion.div
            animate={isHovered ? { x: ['−120%', '220%'] } : { x: '-120%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
          />
          INITIALIZE MISSION
        </button>
      </Link>
    </motion.div>
  )
}

// ─── Main CTA Section ────────────────────────────────────────────────────────
export function CTASection() {
  return (
    <section id="contact" className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-12 md:mt-24 mb-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-white/20 bg-zinc-900/40 backdrop-blur-3xl shadow-2xl flex flex-col"
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: NOISE_DATA_URI, backgroundSize: '150px' }}
        />

        <div className="relative z-10 w-full px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          
          {/* Left Column (Span 7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl min-[400px]:text-5xl md:text-6xl font-black tracking-tighter !text-white leading-[1.05]"
            >
              Ready to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 inline-block py-2">
                Build?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-md mx-auto lg:mx-0 text-lg !text-zinc-300 font-medium leading-relaxed"
            >
              Stop settling for restrictive templates. Invest in a bespoke, high-performance platform engineered to dominate.
            </motion.p>
          </div>

          {/* Right Column (Span 5) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center lg:items-end gap-10 w-full lg:w-auto">
              <AvailabilityBadge />
              <MagneticButton />
            </div>
          </div>

        </div>

        {/* Separator & Footer Metadata */}
        <div className="relative z-10 border-t border-white/10 py-8 px-6 md:px-16 flex justify-center lg:justify-start overflow-hidden">
          <span 
            className="text-[9px] tracking-[0.2em] sm:tracking-[0.4em] uppercase text-zinc-400 font-bold mix-blend-lighten text-center leading-relaxed block"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            NO LOCK-IN • FULL SOURCE OWNERSHIP • ENCRYPTED PIPELINE
          </span>
        </div>

      </motion.div>

      {/* Decorative ambient glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none -z-10" />
    </section>
  )
}
