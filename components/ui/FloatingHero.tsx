'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';
import { Zap, FileText } from 'lucide-react';
import Link from 'next/link';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 20, stiffness: 200, mass: 1 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 200, mass: 1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-50 cursor-pointer inline-block"
    >
      {children}
    </motion.div>
  );
};

export function FloatingHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse follower
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-15, 15]), { damping: 30, stiffness: 200 });
  const xContext = useSpring(useTransform(mouseX, [-500, 500], [-25, 25]), { damping: 30, stiffness: 200 });
  const yContext = useSpring(useTransform(mouseY, [-500, 500], [-25, 25]), { damping: 30, stiffness: 200 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const weightlessEntrance = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: 'spring' as const, 
        stiffness: 80, 
        damping: 20, 
        mass: 1 
      } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } }
      }}
      className="max-w-7xl mx-auto relative z-10 w-full min-h-[75vh] flex flex-col justify-center perspective-[1500px]"
      style={{ contain: 'layout' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative">
        {/* Left Side: Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
          <motion.div variants={weightlessEntrance}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-medium mb-10 text-[var(--foreground)]/80 tracking-widest cursor-default uppercase">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new missions
            </div>
          </motion.div>
          
          <motion.div 
            style={{ rotateX, rotateY, x: xContext, y: yContext, transformStyle: 'preserve-3d', willChange: 'transform' }}
            className="relative"
          >
            <motion.h1 
              className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-black tracking-tighter mb-6 font-[family-name:var(--font-sans)] leading-[0.9] relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              style={{ transform: "translateZ(80px)" }}
            >
              HARRY<br/>VERMA
            </motion.h1>
          </motion.div>

          <motion.div 
            variants={weightlessEntrance}
            style={{ x: useTransform(xContext, x => x * -0.5), y: useTransform(yContext, y => y * -0.5), willChange: 'transform, opacity' }}
            className="flex flex-col items-start mt-4"
          >
            <h2 className="text-[11px] md:text-xs font-[family-name:var(--font-mono)] tracking-[0.3em] text-white/40 mb-6 uppercase">
              [ ARCHITECTING DIGITAL REALITIES ]
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 max-w-xl font-light tracking-wide leading-relaxed mb-12">
              Engineering <span className="text-white font-medium">high-ticket products</span>. I bridge the gap between premium spatial UI/UX design and high-performance full-stack development to craft structured sales engines.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="/work">
                <MagneticButton>
                  <button className="px-10 py-5 rounded-full bg-white text-black transition-all duration-500 group flex items-center justify-center gap-3 font-[family-name:var(--font-sans)] text-sm font-bold tracking-widest uppercase relative overflow-hidden">
                    {/* Pulsing Outer Glow */}
                    <motion.div 
                      className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] opacity-50"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                       View Case Studies
                      <motion.span 
                        className="block"
                        variants={{
                          initial: { x: 0 },
                          hover: { 
                            x: [0, 5, 0],
                            transition: { 
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }}
                        initial="initial"
                        whileHover="hover"
                      >
                        →
                      </motion.span>
                    </span>
                  </button>
                </MagneticButton>
              </Link>

              <Link href="/resume">
                <MagneticButton>
                  <button className="px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 group hover:bg-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 font-[family-name:var(--font-sans)] text-sm font-bold tracking-widest uppercase relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                       <FileText className="w-4 h-4" />
                       Resume
                    </span>
                  </button>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Floating Code Component */}
        <div className="lg:col-span-6 hidden lg:flex items-center justify-center relative h-[500px] w-full perspective-[2000px]">
          {/* Ambient Glow */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-[#7c3aed]/20 via-[#3b82f6]/20 to-transparent rounded-full blur-[120px]" />
          
          <motion.div 
            style={{ 
              rotateX: useTransform(rotateX, x => x * -1.5), 
              rotateY: useTransform(rotateY, y => y * -1.5), 
              x: useTransform(xContext, x => x * -1), 
              y: useTransform(yContext, y => y * -1),
              transformStyle: 'preserve-3d', 
              willChange: 'transform' 
            }}
            className="w-[110%] relative z-10 border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            {/* MacOS style window header */}
            <div className="h-10 w-full bg-[#050505]/90 border-b border-white/10 flex items-center px-4 gap-2 backdrop-blur-3xl">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              <div className="mx-auto text-[10px] font-[family-name:var(--font-sans)] text-white/40 tracking-widest font-medium">Architecture.tsx</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 bg-[#020202]/95 backdrop-blur-3xl font-[family-name:var(--font-mono)] text-[13px] sm:text-[14px] leading-[1.7] text-slate-300 w-full overflow-hidden text-left shadow-[inset_0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">1</span>
                <span><span className="text-pink-400">import</span> <span className="text-white">{"{"}</span> <span className="text-sky-300">PhysicsEngine</span> <span className="text-white">{"}"}</span> <span className="text-pink-400">from</span> <span className="text-emerald-300">'@core/spatial'</span><span className="text-white">;</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">2</span>
                <span><span className="text-pink-400">import</span> <span className="text-white">{"{"}</span> <span className="text-sky-300">LiquidGlass</span> <span className="text-white">{"}"}</span> <span className="text-pink-400">from</span> <span className="text-emerald-300">'@ui/materials'</span><span className="text-white">;</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">3</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">4</span>
                <span><span className="text-pink-400">export const</span> <span className="text-amber-300">SystemArchitecture</span> <span className="text-white">=</span> <span className="text-pink-400">() {"=>"}</span> <span className="text-white">{"{"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">5</span>
                <span className="ml-4"><span className="text-pink-400">return</span> <span className="text-white">(</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">6</span>
                <span className="ml-8"><span className="text-sky-400">{"<"}</span><span className="text-blue-300">PhysicsEngine</span> <span className="text-sky-200">gravity</span><span className="text-white">=</span><span className="text-white">{"{"}</span><span className="text-purple-400">0</span><span className="text-white">{"}"}</span><span className="text-sky-400">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">7</span>
                <span className="ml-12"><span className="text-sky-400">{"<"}</span><span className="text-blue-300">LiquidGlass</span> <span className="text-sky-200">refraction</span><span className="text-white">=</span><span className="text-white">{"{"}</span><span className="text-purple-400">1.5</span><span className="text-white">{"}"}</span><span className="text-sky-400">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">8</span>
                <span className="ml-16 text-slate-500">{"/* Value extraction loop */"}</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">9</span>
                <span className="ml-16"><span className="text-sky-400">{"<"}</span><span className="text-blue-300">HighTicketProduct</span> <span className="text-sky-400">{"/>"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">10</span>
                <span className="ml-12"><span className="text-sky-400">{"</"}</span><span className="text-blue-300">LiquidGlass</span><span className="text-sky-400">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">11</span>
                <span className="ml-8"><span className="text-sky-400">{"</"}</span><span className="text-blue-300">PhysicsEngine</span><span className="text-sky-400">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">12</span>
                <span className="ml-4 text-white">);</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">13</span>
                <span className="text-white">{"};"}</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 mr-4 select-none font-bold">14</span>
              </div>
            </div>
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] pointer-events-none opacity-30 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
