import { Metadata } from 'next'
import { GlassCard } from '@/components/ui/GlassCard'
import { Layers, Terminal, ArrowRight } from 'lucide-react'
import data from '../../data.json'

export const metadata: Metadata = {
  title: 'Mission Dashboard — Harry Verma',
  description: 'A transparent look into the fusion of Spatial UI design methodology and Full-Stack implementation.',
}

export default function MissionDashboard() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
          Mission <span className="text-[#7c3aed]">Dashboard</span>
        </h1>
        <p className="text-[var(--foreground)]/60 max-w-2xl text-lg font-light mb-2">
          A transparent look into the fusion of Spatial UI design methodology and Full-Stack implementation.
        </p>
        <p className="text-[var(--foreground)]/40 max-w-2xl text-md font-light italic border-l-2 border-[#7c3aed]/50 pl-4 mt-4 text-sm">
          Admin Bio // {data.bio}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Design Process */}
        <div>
          <GlassCard glowColor="rgba(124, 58, 237, 0.15)" className="h-[700px]">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
              <Layers className="text-[#7c3aed]" />
              <h2 className="text-2xl font-semibold font-[family-name:var(--font-heading)]">Design Protocol</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
                  Liquid Glass Aesthetics
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Defining the visual language. Heavy use of backdrop filters, inset shadows to simulate physical depth, and high-frequency radial glows for tactile feedback.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
                  Spatial Interaction
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  3D perspective transforms mapping to cursor coordinates. Translates standard hover states into "antigravity" floating objects.
                </p>
              </div>
              
              <div className="w-full aspect-video rounded-xl bg-black/40 border border-[#7c3aed]/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                <span className="text-white/30 font-[family-name:var(--font-heading)] tracking-[0.3em] text-sm uppercase z-10 font-semibold drop-shadow-md">Figma Prototype Sync</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Live Code */}
        <div>
          <GlassCard glowColor="rgba(59, 130, 246, 0.15)" className="h-[700px] flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
              <Terminal className="text-[#3b82f6]" />
              <h2 className="text-2xl font-semibold font-[family-name:var(--font-heading)]">Live Implementation</h2>
            </div>
            
            <div className="flex-1 rounded-xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden font-mono text-sm leading-relaxed shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex flex-col">
               <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 shrink-0 bg-[#111]">
                 <div className="h-3 w-3 rounded-full bg-red-500/80" />
                 <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                 <div className="h-3 w-3 rounded-full bg-green-500/80" />
                 <span className="ml-4 text-[10px] text-white/30 uppercase tracking-widest">GlassCard.tsx</span>
               </div>
               
               <div className="flex-1 p-6 overflow-auto">
                 <pre className="text-white/70">
<code className="text-[#3b82f6]">const</code> rotateX = <code className="text-[#a78bfa]">useSpring</code>(<code className="text-[#a78bfa]">useMotionValue</code>(0), {'{'} damping: 30 {'}'})<br/>
<code className="text-[#3b82f6]">const</code> rotateY = <code className="text-[#a78bfa]">useSpring</code>(<code className="text-[#a78bfa]">useMotionValue</code>(0), {'{'} damping: 30 {'}'})<br/>
<br/>
<code className="text-[#3b82f6]">function</code> <code className="text-yellow-200">handleMouseMove</code>({'{'} currentTarget, clientX, clientY {'}'}) {'{'}<br/>
{'  '}<code className="text-[#3b82f6]">const</code> {'{'} left, top, width, height {'}'} = currentTarget.<code className="text-yellow-200">getBoundingClientRect</code>()<br/>
{'  '}<code className="text-[#3b82f6]">const</code> x = clientX - left<br/>
{'  '}<code className="text-[#3b82f6]">const</code> y = clientY - top<br/>
<br/>
{'  '}<span className="text-white/30">{'// Antigravity Tilt Matrix'}</span><br/>
{'  '}<code className="text-[#3b82f6]">const</code> rX = ((y / height) - 0.5) * -5<br/>
{'  '}<code className="text-[#3b82f6]">const</code> rY = ((x / width) - 0.5) * 5<br/>
<br/>
{'  '}rotateX.<code className="text-yellow-200">set</code>(rX)<br/>
{'  '}rotateY.<code className="text-yellow-200">set</code>(rY)<br/>
{'}'}
                 </pre>
               </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between shrink-0">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Status // Connected</span>
              <button className="text-xs font-semibold px-4 py-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors flex items-center gap-2">
                Deploy Node <ArrowRight className="w-3 h-3 text-[#3b82f6]" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Portfolio / Architected Solutions */}
      <div className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] flex items-center gap-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">Architected</span> Solutions
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, idx) => (
            <div key={idx}>
              <GlassCard glowColor={idx % 2 === 0 ? "rgba(124, 58, 237, 0.15)" : "rgba(59, 130, 246, 0.15)"} className="h-full flex flex-col p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white/90">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 text-xs flex-wrap justify-end max-w-[50%]">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60 font-mono tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 flex-1 text-sm font-light text-white/60 leading-relaxed">
                  <div>
                    <h4 className="text-[#7c3aed] font-semibold mb-2 uppercase tracking-wider text-[10px]">UX Problem Solved</h4>
                    <p>{project.uxProblemSolved}</p>
                  </div>

                  <div>
                    <h4 className="text-[#3b82f6] font-semibold mb-2 uppercase tracking-wider text-[10px]">Core Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.coreFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                  <button className="text-xs font-semibold px-4 py-2 hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all flex items-center gap-2 text-white/50 hover:text-white">
                    View Deployment <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

