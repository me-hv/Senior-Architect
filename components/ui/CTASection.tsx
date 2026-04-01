'use client'

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  MouseEvent as ReactMouseEvent,
} from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import Link from 'next/link'

// ─── Noise SVG as data-URI (no external request) ────────────────────────────
const NOISE_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"

// ─── Availability Badge ──────────────────────────────────────────────────────
function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-8 self-center"
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span
        className="text-[10px] tracking-[0.22em] uppercase text-emerald-300 font-medium"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        STATUS: 1 SLOT REMAINING FOR APRIL
      </span>
    </motion.div>
  )
}

// ─── Magnetic Button ─────────────────────────────────────────────────────────
function MagneticButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [arrowState, setArrowState] = useState<'idle' | 'loading' | 'velocity'>(
    'idle'
  )

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 80) {
        // Magnetic snap strength scales with proximity
        const strength = (80 - dist) / 80
        x.set(dx * strength * 0.45)
        y.set(dy * strength * 0.45)
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

  const handleEnter = () => {
    setIsHovered(true)
    setArrowState('loading')
    setTimeout(() => setArrowState('velocity'), 600)
  }

  const handleLeave = () => {
    setIsHovered(false)
    setArrowState('idle')
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={buttonRef as React.Ref<HTMLAnchorElement>}
      href="/contact"
      style={{ x: springX, y: springY }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className="relative z-20 inline-flex items-center gap-3 cursor-pointer select-none"
      aria-label="Initialize Mission – Start a project"
    >
      {/* Glow halo */}
      <motion.span
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full blur-2xl bg-white/30 pointer-events-none"
      />

      {/* Button body */}
      <motion.span
        animate={{
          paddingLeft: isHovered ? '52px' : '44px',
          paddingRight: isHovered ? '52px' : '44px',
          scale: isHovered ? 1.06 : 1,
          boxShadow: isHovered
            ? '0 0 60px rgba(255,255,255,0.35), 0 0 120px rgba(124,58,237,0.2)'
            : '0 0 40px rgba(255,255,255,0.2)',
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="relative flex items-center gap-3 py-5 rounded-full bg-white text-black font-black text-sm tracking-[0.18em] uppercase overflow-hidden"
      >
        {/* Inner shimmer sweep */}
        <motion.span
          animate={isHovered ? { x: ['−120%', '220%'] } : { x: '-120%' }}
          transition={
            isHovered
              ? { duration: 0.6, ease: 'easeInOut' }
              : { duration: 0 }
          }
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
        />

        <span className="relative z-10">INITIALIZE MISSION</span>

        {/* Arrow state machine */}
        <span className="relative z-10 w-5 h-5 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {arrowState === 'idle' && (
              <motion.span
                key="idle"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute text-lg leading-none"
              >
                →
              </motion.span>
            )}
            {arrowState === 'loading' && (
              <motion.span
                key="loading"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.25 }}
                className="absolute text-lg leading-none"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                  className="inline-block"
                >
                  ◌
                </motion.span>
              </motion.span>
            )}
            {arrowState === 'velocity' && (
              <motion.span
                key="velocity"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute text-lg leading-none"
              >
                ↗
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.span>
    </motion.a>
  )
}

// ─── Main CTA Section ────────────────────────────────────────────────────────
export function CTASection() {
  const cardRef = useRef<HTMLDivElement>(null)

  // Spotlight tracking
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const springSpotX = useSpring(spotX, { stiffness: 120, damping: 28 })
  const springSpotY = useSpring(spotY, { stiffness: 120, damping: 28 })

  // 3D Tilt
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 200, damping: 30 })
  const springTiltY = useSpring(tiltY, { stiffness: 200, damping: 30 })

  // Refractive border angle
  const borderAngle = useMotionValue(135)
  const springBorderAngle = useSpring(borderAngle, { stiffness: 80, damping: 20 })

  const rotateX = useTransform(springTiltY, [-1, 1], ['6deg', '-6deg'])
  const rotateY = useTransform(springTiltX, [-1, 1], ['-6deg', '6deg'])

  const spotBackground = useTransform(
    [springSpotX, springSpotY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(109, 40, 217, 0.18) 0%, rgba(59, 130, 246, 0.07) 40%, transparent 70%)`
  )

  const refractiveBorder = useTransform(
    springBorderAngle,
    (angle) =>
      `linear-gradient(${angle}deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.20) 30%, rgba(124,58,237,0.30) 50%, rgba(59,130,246,0.18) 70%, rgba(255,255,255,0.04) 100%)`
  )

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()

      // Spotlight (percentage inside card)
      const px = ((e.clientX - rect.left) / rect.width) * 100
      const py = ((e.clientY - rect.top) / rect.height) * 100
      spotX.set(px)
      spotY.set(py)

      // Tilt (normalized -1 to 1)
      const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      tiltX.set(nx)
      tiltY.set(ny)

      // Refractive border: rotate based on mouse angle
      const angle = Math.atan2(ny, nx) * (180 / Math.PI) + 135
      borderAngle.set(angle)
    },
    [spotX, spotY, tiltX, tiltY, borderAngle]
  )

  const handleMouseLeave = useCallback(() => {
    spotX.set(50)
    spotY.set(50)
    tiltX.set(0)
    tiltY.set(0)
    borderAngle.set(135)
  }, [spotX, spotY, tiltX, tiltY, borderAngle])

  return (
    <section
      id="contact"
      className="py-32 relative z-20 max-w-7xl mx-auto px-6 lg:px-8 mt-12 mb-32"
    >
      {/* Outer perspective wrapper for 3D */}
      <div style={{ perspective: '1200px' }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative rounded-[3rem] overflow-hidden group"
        >
          {/* ── Refractive 1px border ───────────────────────────────────────── */}
          {/* Outer glow ring */}
          <motion.div
            style={{ background: refractiveBorder }}
            className="absolute inset-0 rounded-[3rem] pointer-events-none z-30"
            // 1px border via padding + inner mask
            aria-hidden
          />
          {/* 1px border mask */}
          <div className="absolute inset-[1px] rounded-[calc(3rem-1px)] bg-[#050505]/70 pointer-events-none z-30 mix-blend-normal" />

          {/* ── Card Glass Background ────────────────────────────────────────── */}
          <div className="absolute inset-[1px] rounded-[calc(3rem-1px)] overflow-hidden pointer-events-none z-0">
            {/* Deep glass base */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.03] backdrop-blur-3xl" />

            {/* Spatial Spotlight */}
            <motion.div
              style={{ background: spotBackground }}
              className="absolute inset-0 transition-none"
              aria-hidden
            />

            {/* Noise/Grain Texture — 3% opacity */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: NOISE_DATA_URI,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px',
                mixBlendMode: 'overlay',
              }}
              aria-hidden
            />

            {/* Subtle inner vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
          </div>

          {/* ── Corner accent lights ─────────────────────────────────────────── */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

          {/* ── Content ─────────────────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col items-center text-center p-12 md:p-24">

            {/* Availability Badge */}
            <AvailabilityBadge />

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-[2.5rem] md:text-6xl lg:text-[5rem] font-black tracking-tighter text-white mb-6 leading-[1.05]"
            >
              Ready to{' '}
              <span
                className="inline-block relative"
                aria-label="Build"
              >
                {/* Metallic/liquid-silver text gradient */}
                <span
                  className="bg-clip-text text-transparent select-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #e8e8e8 0%, #ffffff 20%, #a8a8c0 35%, #c8c8e0 50%, #ffffff 65%, #8080a0 80%, #d0d0f0 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'silverShift 4s ease-in-out infinite alternate',
                  }}
                >
                  Build
                </span>
                {/* Subtle underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-400 to-violet-500 origin-left"
                />
              </span>
              ?
            </motion.h2>

            {/* Sub-text in Geist Mono */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/55 max-w-xl mb-16 leading-relaxed"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Stop settling for restrictive templates.
              <br />
              Invest in a bespoke, high-performance platform
              <br />
              engineered to dominate.
            </motion.p>

            {/* Magnetic CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <MagneticButton />
            </motion.div>

            {/* Secondary micro-text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-[10px] tracking-[0.2em] uppercase text-white/20"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              No lock-in · Full source ownership · NDA available
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes silverShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
