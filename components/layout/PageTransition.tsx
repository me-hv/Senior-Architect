'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full overflow-hidden"
      style={{ willChange: 'transform, opacity, filter', transform: 'translateZ(0)' }}
    >
      {children}
    </motion.div>
  )
}
