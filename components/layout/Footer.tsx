'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const [time, setTime] = useState<string>('')

  // Calculate IST (Antigravity Server Time)
  useEffect(() => {
    const formatTime = () => {
      const gmtTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(`${gmtTime} [IST]`)
    }
    
    // Initial format
    formatTime()
    
    // Tick every second
    const interval = setInterval(formatTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Smooth Scroll directly to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/5 overflow-hidden pb-24 md:pb-0">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-20 md:py-24 relative z-10 flex flex-col items-center md:items-stretch w-full max-w-full overflow-hidden md:overflow-visible">
        
        {/* Back to Top */}
        <div className="absolute top-12 right-6 md:right-12 z-20 hidden md:block">
          <button 
            onClick={handleScrollToTop}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24 w-full">
          
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-sans)] tracking-tighter text-white/20 select-none">
              HARRY VERMA
            </h2>
            <div className="flex flex-col gap-2 font-[family-name:var(--font-mono)] text-xs font-semibold tracking-widest text-white/50 uppercase group">
              <span className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                </span>
                [ SYSTEM STATUS: OPERATIONAL ]
              </span>
            </div>
            {/* Mobile-only back to top button to save space and center it beautifully */}
            <div className="md:hidden mt-4">
              <button 
                onClick={handleScrollToTop}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h3 className="font-[family-name:var(--font-mono)] text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-2">
              [ DIRECTORY ]
            </h3>
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-4 font-[family-name:var(--font-sans)] text-sm font-medium text-white/70">
              <Link href="/" className="hover:text-white transition-colors w-fit relative group/link">
                Home
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white/50 transition-all duration-300 ease-out group-hover/link:w-full"></span>
              </Link>
              <Link href="/work" className="hover:text-white transition-colors w-fit relative group/link">
                Selected Missions
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white/50 transition-all duration-300 ease-out group-hover/link:w-full"></span>
              </Link>
              <Link href="/about" className="hover:text-white transition-colors w-fit relative group/link">
                About
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white/50 transition-all duration-300 ease-out group-hover/link:w-full"></span>
              </Link>
              <Link href="/contact" className="hover:text-[var(--color-accent)] text-[#a78bfa] transition-colors w-fit drop-shadow-[0_0_10px_rgba(124,58,237,0.3)] hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] relative group/link">
                Initiate Mission
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#a78bfa]/50 transition-all duration-300 ease-out group-hover/link:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h3 className="font-[family-name:var(--font-mono)] text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-2">
              [ CONNECT ]
            </h3>
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-4 font-[family-name:var(--font-sans)] text-sm font-medium text-white/70">
              {/* Using a custom hover underline effect */}
              {['GitHub', 'LinkedIn', 'X/Twitter', 'Email'].map((social) => (
                <a 
                  key={social}
                  href={social === 'Email' ? 'mailto:contact@harryverma.com' : '#'}
                  target={social !== 'Email' ? '_blank' : undefined}
                  rel={social !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group relative w-fit text-white/70 hover:text-white transition-colors"
                >
                  <span className="relative z-10">{social}</span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white/50 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Meta-Bar */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 font-[family-name:var(--font-mono)] text-[10px] md:text-[11px] font-medium tracking-[0.1em] text-white/40 uppercase">
          
          <div className="flex text-center md:text-left">
            <span>© {new Date().getFullYear()} HARRY VERMA</span>
          </div>

          <div className="flex items-center text-center">
            <span>DESIGNED & ENGINEERED IN ANTIGRAVITY</span>
          </div>

          <div className="flex justify-center md:justify-end min-w-[120px]">
            {time ? (
              <span className="text-white/60 tracking-widest">{time}</span>
            ) : (
              <span className="text-white/20 tracking-widest">--:--:-- [IST]</span>
            )}
          </div>

        </div>

      </div>
    </footer>
  )
}
