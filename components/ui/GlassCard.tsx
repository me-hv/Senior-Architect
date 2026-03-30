'use client'

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, MouseEvent } from 'react'
import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlassCard({ children, className, glowColor = 'rgba(255,255,255,0.06)' }: GlassCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 })
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 })

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = clientX - left
    const y = clientY - top
    mouseX.set(x)
    mouseY.set(y)
    
    // Tilt effect (very subtle, spatial feel)
    const rX = ((y / height) - 0.5) * -5
    const rY = ((x / width) - 0.5) * 5
    rotateX.set(rX)
    rotateY.set(rY)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className={cn(
          "relative rounded-2xl glass-panel group overflow-hidden transition-all duration-300 w-full h-full",
          className
        )}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${glowColor},
                transparent 40%
              )
            `,
          }}
        />
        {/* Inner shadow/highlight for depth */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/5 opacity-50 block" style={{ transform: "translateZ(1px)" }} />
        
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10 p-6 h-full flex flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
