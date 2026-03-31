const timeline = [
  {
    role: 'Social Media Manager',
    company: 'Hira Times',
    period: '2025 — Present',
    type: 'Full-time',
    current: true,
    color: 'bg-emerald-400',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    summary: 'Driving content strategy, platform-specific design, and digital growth for a regional news brand.',
  },
  {
    role: 'Graphic Designer',
    company: 'Chopra Musicals',
    period: '2023 — 2024',
    type: 'Full-time',
    current: false,
    color: 'bg-violet-400',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-400/30',
    summary: 'Designed album artwork, promotional graphics, and event collateral — maintaining a cohesive brand identity across print and digital.',
  },
  {
    role: 'Music Producer & Video Editor',
    company: 'IRA Records',
    period: '2019 — 2023',
    type: 'Full-time',
    current: false,
    color: 'bg-blue-400',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    summary: 'Produced and mastered multi-genre audio tracks. Directed and edited music video content with motion graphics and color grading.',
  },
  {
    role: 'Computer Operator',
    company: 'UPPCL',
    period: '2016 — 2019',
    type: 'Government',
    current: false,
    color: 'bg-zinc-400',
    accentColor: 'text-zinc-400',
    borderColor: 'border-zinc-400/20',
    summary: 'Managed data entry, record-keeping, and digital documentation for a large public-sector utility organization.',
  },
]

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent" />

      <div className="space-y-10 pl-12">
        {timeline.map((item) => (
          <div key={item.role + item.company} className="relative group">
            {/* Node dot */}
            <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor] border-2 border-[#0a0a0a] ${item.current ? 'ring-2 ring-offset-1 ring-offset-[#0a0a0a] ring-emerald-400/50' : ''}`} />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h4 className="text-white font-bold text-base tracking-tight">{item.role}</h4>
              <span className={`text-[11px] font-[family-name:var(--font-mono)] ${item.current ? 'text-emerald-400' : 'text-zinc-500'}`}>
                [ {item.period} ]
              </span>
            </div>

            <p className={`text-xs font-[family-name:var(--font-mono)] mb-3 ${item.accentColor}`}>
              {item.company}
              <span className="text-zinc-600 mx-2">|</span>
              <span className="text-zinc-600">{item.type}</span>
              {item.current && (
                <span className="ml-3 text-emerald-400 border border-emerald-400/30 rounded px-1.5 py-0.5 text-[9px] tracking-widest">CURRENT</span>
              )}
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
