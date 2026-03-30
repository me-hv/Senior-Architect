'use client'

import { useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2, ArrowRight, Mail } from 'lucide-react'
import { submitMission } from '@/app/actions/submit-mission'
import Link from 'next/link'

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

export default function ContactPage() {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleAction = async (formData: FormData) => {
    setErrorMsg('')
    startTransition(async () => {
      const res = await submitMission(formData)
      if (res.error) {
        setErrorMsg(res.error)
      } else {
        setIsSuccess(true)
      }
    })
  }

  // Antigravity Stagger Variants
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
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden pt-32 pb-40 px-6 sm:px-12 md:px-24">
      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-[#7c3aed]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-[#3b82f6]/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] pointer-events-none opacity-20 mix-blend-overlay -z-10" />

      {/* Return Home Logo */}
      <Link href="/" className="absolute top-8 left-6 sm:left-12 flex items-center gap-3 group z-50">
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full font-black text-lg tracking-tighter group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          HV
        </div>
        <span className="text-white/60 text-[10px] font-medium tracking-widest uppercase group-hover:text-white transition-colors hidden sm:block">Return Home</span>
      </Link>

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
            <a href="mailto:hq@company.com" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">Email Comms</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
              <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-wide">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: High-Def Form Engine */}
        <motion.div variants={itemVariants} className="relative w-full shadow-2xl">
          <div className="w-full bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
            
            {/* Top right decoration */}
            <div className="absolute top-8 right-8 text-[10px] font-[family-name:var(--font-mono)] text-zinc-600 tracking-widest hidden sm:block">
              SYSTEM IS ONLINE
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-28 h-28 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(16,185,129,0.15)]"
                >
                  <CheckCircle className="w-14 h-14 text-emerald-400" />
                </motion.div>
                <h3 className="text-4xl font-bold font-[family-name:var(--font-sans)] text-white mb-4">Protocol Accepted</h3>
                <p className="text-zinc-400 font-light text-xl max-w-sm mx-auto">Your mission brief has been locked into the system. Expect a transmission back.</p>
                
                <Link 
                  href="/"
                  className="mt-12 px-10 py-5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-lg inline-flex items-center gap-3"
                >
                  Return to Base
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <form action={handleAction} className="space-y-8 relative z-10 group/form">
                
                {/* 01. IDENTIFIER */}
                <div className="space-y-3 group/input">
                  <label htmlFor="name" className="text-[12px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-[0.2em] transition-colors group-focus-within/input:text-white">
                    01. IDENTIFIER
                  </label>
                  <input 
                    id="name"
                    name="name" 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-light text-base"
                  />
                </div>

                {/* 02. COMMS LINK */}
                <div className="space-y-3 group/input">
                  <label htmlFor="email" className="text-[12px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-[0.2em] transition-colors group-focus-within/input:text-white">
                    02. COMMS LINK
                  </label>
                  <input 
                    id="email"
                    name="email" 
                    type="email" 
                    required
                    placeholder="hq@company.com"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-light text-base"
                  />
                </div>

                {/* 03. MISSION TYPE */}
                <div className="space-y-3 group/input">
                  <label htmlFor="project_type" className="text-[12px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-[0.2em] transition-colors group-focus-within/input:text-white">
                    03. MISSION TYPE
                  </label>
                  <div className="relative">
                    <select 
                      id="project_type"
                      name="project_type" 
                      required
                      defaultValue=""
                      className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-light appearance-none disabled:text-zinc-600 invalid:text-zinc-600 text-base"
                    >
                      <option value="" disabled hidden>Select objective...</option>
                      <option value="UI/UX Design" className="bg-[#0a0a0a] text-white">UI/UX Design Pipeline</option>
                      <option value="Full-Stack Dev" className="bg-[#0a0a0a] text-white">Full-Stack Architecture</option>
                      <option value="Both" className="bg-[#0a0a0a] text-white">End-to-End Build (Both)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-zinc-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 04. MISSION BRIEF */}
                <div className="space-y-3 group/input flex-1">
                  <label htmlFor="description" className="text-[12px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-[0.2em] transition-colors group-focus-within/input:text-white">
                    04. MISSION BRIEF
                  </label>
                  <textarea 
                    id="description"
                    name="description" 
                    required
                    rows={5}
                    placeholder="Outline your product vision, required tech stack, and core problem to solve..."
                    className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none font-light text-base"
                  />
                </div>

                {errorMsg && (
                  <div className="text-red-400 text-sm font-medium p-4 bg-red-400/10 rounded-xl border border-red-400/20 text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full py-6 rounded-2xl bg-white text-black text-sm md:text-base font-black tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
                        <span className="text-zinc-500">Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Deploy Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
