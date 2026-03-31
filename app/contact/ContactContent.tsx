'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export function ContactContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, damping: 20, stiffness: 100 }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-32 pb-40 px-6 sm:px-12 md:px-24">
      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-[#7c3aed]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-[#3b82f6]/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] pointer-events-none opacity-20 mix-blend-overlay -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10"
      >
        {/* Left Column: Hero Typography & Pills */}
        <div className="flex flex-col justify-center">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            READY TO <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">BUILD?</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-zinc-400 font-light max-w-md leading-relaxed"
          >
            Initiate a mission and let's architect something legendary. I typically respond within 24 hours.
          </motion.p>

          {/* Social Pills */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
            <a href="mailto:me.harryverma@gmail.com" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">Email Comms</span>
            </a>
            <a href="https://github.com/me-hv" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/harryverma" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <ContactForm />
      </motion.div>
    </div>
  )
}
