'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Briefcase, User, Mail } from 'lucide-react'

export function Navbar() {
  return (
    <motion.header
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.2 }}
      className="fixed bottom-8 left-1/2 z-50 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] px-8 h-16 flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur-3xl saturate-150 overflow-visible"
    >
      <nav className="flex items-center gap-10 text-[var(--foreground)]/60 relative">
        <Link href="/" className="hover:text-white transition-colors relative group flex flex-col items-center outline-none focus:outline-none">
          <Home className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -top-8 transition-opacity duration-300 whitespace-nowrap bg-white/10 px-2 py-1 rounded-md backdrop-blur-md border border-white/10">Home</span>
        </Link>
        <Link href="/#about" className="hover:text-white transition-colors relative group flex flex-col items-center outline-none focus:outline-none">
          <User className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -top-8 transition-opacity duration-300 whitespace-nowrap bg-white/10 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 pointer-events-none">About</span>
        </Link>
        <Link href="/#work" className="hover:text-white transition-colors relative group flex flex-col items-center outline-none focus:outline-none">
          <Briefcase className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -top-8 transition-opacity duration-300 whitespace-nowrap bg-white/10 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 pointer-events-none">Work</span>
        </Link>
        <Link href="/contact" className="text-white hover:text-[var(--color-accent-blue)] transition-colors relative group flex flex-col items-center outline-none focus:outline-none">
          <Mail className="w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -top-8 transition-opacity duration-300 whitespace-nowrap bg-white/10 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 pointer-events-none">Contact</span>
        </Link>
      </nav>
    </motion.header>
  )
}
