'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <Link href="/" className="fixed top-8 left-8 z-[60] group outline-none print:hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/20 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-xl font-bold font-mono tracking-tighter text-white">
          <span className="text-emerald-400">&gt;</span>
          <span className="animate-pulse">_</span>
          <span className="ml-2 group-hover:ml-3 transition-all duration-500">HV</span>
        </span>
      </motion.div>
    </Link>
  )
}
