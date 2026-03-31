import { Metadata } from 'next'
import { WorkGallery } from '@/components/ui/WorkGallery'

export const metadata: Metadata = {
  title: 'Work — Harry Verma',
  description: 'Case studies and selected missions by Harry Verma — UI/UX Design and Full-Stack Development projects.',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed top-[-20%] right-[-10%] w-[60%] h-[70%] bg-gradient-to-bl from-[#7c3aed]/8 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-gradient-to-tr from-[#3b82f6]/8 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-32">

        {/* Page Header */}
        <div className="mb-20">
          <p className="text-[11px] font-[family-name:var(--font-mono)] tracking-[0.3em] text-white/30 uppercase mb-6">
            [ Selected Missions ]
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-white mb-8">
            THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/30">WORK.</span>
          </h1>
          <p className="text-white/50 font-light max-w-xl text-lg leading-relaxed">
            Case studies detailing the extraction of value from complex product problems, scaled into high-conversion systems.
          </p>
        </div>

        {/* Gallery */}
        <WorkGallery />

      </main>
    </div>
  )
}
