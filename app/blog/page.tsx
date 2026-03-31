import { Metadata } from 'next'
import { GlassCard } from '@/components/ui/GlassCard'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Harry Verma',
  description: 'Observations, tutorials, and deep dives into front-end experimental engineering and design systems.',
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="h-16 w-16 mx-auto rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-6 border border-[#3b82f6]/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <BookOpen className="text-[#3b82f6] w-8 h-8" />
        </div>
        <h1 className="text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
          System <span className="text-[#3b82f6]">Logs</span>
        </h1>
        <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg font-light">
          Observations, tutorials, and deep dives into front-end experimental engineering and design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i}>
             <GlassCard glowColor="rgba(59, 130, 246, 0.15)" className="cursor-pointer group">
                <div className="w-full h-48 rounded-lg bg-[#0a0a0a] border border-white/5 mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent mix-blend-overlay" />
                   <div className="w-full h-full bg-grid opacity-50 transform scale-150 group-hover:scale-100 transition-transform duration-700 ease-out" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-semibold px-2 py-1 bg-[#3b82f6]/10 rounded border border-[#3b82f6]/20 text-[#3b82f6] uppercase tracking-wider">Engineering</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">Oct 28, 2026</span>
                </div>
                <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3 group-hover:text-[#3b82f6] transition-colors">
                  Architecting Spatial UIs in Next.js 15
                </h2>
                <p className="text-sm text-white/50 leading-relaxed font-light line-clamp-2">
                  A comprehensive guide on leveraging Framer Motion and Lenis scroll to create highly performant, accessible 3D interfaces.
                </p>
             </GlassCard>
          </div>
        ))}
      </div>
    </div>
  )
}

