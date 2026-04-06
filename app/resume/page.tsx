import { Metadata } from 'next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PrintButton } from '@/components/ui/PrintButton';

export const metadata: Metadata = {
  title: 'Resume — Harry Verma',
  description: 'Professional resume of Harry Verma — Creative Media Specialist, UI/UX Designer & Full-Stack Developer based in Meerut, India.',
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const experience = [
  {
    role: 'Social Media Manager',
    company: 'Hira Times, Meerut',
    type: 'Full-time',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Developed and executed a structured content strategy across platforms, combining graphic design, copywriting, and scheduling.',
      'Created platform-specific graphics and short-form video content to boost visibility and audience engagement.',
      'Grew follower base and improved content consistency, establishing Hira Times as a more active digital news brand in the Meerut region.',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Chopra Musicals, Meerut',
    type: 'Full-time',
    period: '2023 — 2024',
    current: false,
    bullets: [
      'Designed promotional graphics, album covers, and event posters using Photoshop, Illustrator, and CorelDRAW.',
      'Maintained visual consistency across print and digital channels to reinforce brand recognition.',
      'Delivered production-ready assets on time, supporting marketing campaigns and the brand\'s public image.',
    ],
  },
  {
    role: 'Music Producer & Video Editor',
    company: 'IRA Records, Meerut',
    type: 'Full-time',
    period: '2019 — 2023',
    current: false,
    bullets: [
      'Produced, mixed, and mastered music tracks using Ableton Live, FL Studio, and Cubase across multiple genres.',
      'Edited music videos using Adobe Premiere Pro and After Effects, incorporating motion graphics and color grading.',
      'Delivered consistent audio-visual output over 4+ years, building a strong portfolio across multiple artists.',
    ],
  },
  {
    role: 'Computer Operator',
    company: 'Uttar Pradesh Power Corporation Limited (UPPCL), Meerut',
    type: 'Government',
    period: '2016 — 2019',
    current: false,
    bullets: [
      'Managed data entry, record keeping, and digital documentation for a large public-sector utility organization.',
      'Operated and maintained office systems using MS Word, Excel, and PowerPoint for accurate processing of official records.',
    ],
  },
];

const skills = {
  Engineering: [
    'Python', 'HTML', 'CSS', 'WordPress', 'Bootstrap',
    'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve',
  ],
  Design: [
    'Brand Identity', 'Social Media Graphics', 'Print Design',
    'Layout Design', 'Typography', 'Motion Graphics',
    'Color Grading', 'Visual Storytelling',
    'Photoshop', 'Illustrator', 'CorelDRAW',
  ],
  Architecture: [
    'SEO', 'Content Strategy', 'Social Media Management',
    'Online Advertising', 'CRM', 'Audience Analytics',
    'Audio Post-Production', 'Mixing & Mastering',
    'Ableton Live', 'FL Studio', 'Cubase',
  ],
};

const competencies = [
  {
    area: 'Audio & Music Production',
    items: 'Music Composition, Mixing & Mastering, Sound Design, Beat Production, Audio Post-Production',
  },
  {
    area: 'Video & Motion',
    items: 'Video Editing, Motion Graphics, Color Grading, Visual Storytelling, Short-form & Long-form Content',
  },
  {
    area: 'Graphic Design',
    items: 'Brand Identity, Social Media Graphics, Print Design, Layout Design, Typography',
  },
  {
    area: 'Digital Marketing & Strategy',
    items: 'SEO, Content Strategy, Social Media Management, Online Advertising, CRM, Audience Analytics',
  },
  {
    area: 'Web & Tech',
    items: 'Python, HTML, CSS, WordPress, Bootstrap',
  },
  {
    area: 'Tools & Software',
    items: 'Ableton Live, FL Studio, Cubase, Adobe Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Illustrator, CorelDRAW',
  },
];

// ─── Badge Component ──────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-zinc-300 text-[11px] font-[family-name:var(--font-mono)] tracking-wide leading-5 print:border-zinc-300 print:bg-transparent print:text-zinc-700">
      {children}
    </span>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8 print:mb-5">
      <span className="text-[10px] font-[family-name:var(--font-mono)] tracking-[0.3em] text-zinc-500 uppercase print:text-zinc-400">
        {children}
      </span>
      <div className="flex-1 h-px bg-zinc-800 print:bg-zinc-300" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-zinc-300 font-[family-name:var(--font-sans)] print:bg-white print:text-black relative overflow-hidden">
      
      {/* Ambient background for Brand Consistency */}
      <div className="fixed top-[-10%] right-[-5%] w-[50%] h-[60%] bg-gradient-to-bl from-[#7c3aed]/5 to-transparent rounded-full blur-[180px] pointer-events-none -z-10 print:hidden" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[40%] h-[50%] bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-full blur-[150px] pointer-events-none -z-10 print:hidden" />

      {/* ── Floating Download Button ── */}
      <PrintButton />

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 md:py-32 print:py-0 print:px-0 print:max-w-none relative z-10">

        {/* ══════════════════════════════ HEADER ══════════════════════════════ */}
        <header className="mb-14 print:mb-10 text-center sm:text-left">

          {/* Name */}
          <h1 className="text-5xl sm:text-[4.5rem] font-black tracking-tight leading-none text-white mb-6 print:text-5xl print:text-black">
            HARRY<br className="sm:hidden" />{' '}VERMA
          </h1>

          {/* Title Pill */}
          <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1.5 mb-8 print:border-zinc-400 print:rounded-none print:px-0 print:py-0 print:inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 print:hidden" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide print:text-sm print:text-zinc-700">
              Creative Media Specialist
            </span>
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 text-sm text-zinc-400 print:text-xs print:text-zinc-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-600 print:hidden" />
              Meerut, Uttar Pradesh
            </span>
            <a href="tel:+918395067050" className="flex items-center gap-1.5 hover:text-white transition-colors print:no-underline print:text-zinc-600">
              <Phone className="w-3.5 h-3.5 text-zinc-600 print:hidden" />
              +91-8395067050
            </a>
            <a href="mailto:me.harryverma@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors print:no-underline print:text-zinc-600">
              <Mail className="w-3.5 h-3.5 text-zinc-600 print:hidden" />
              me.harryverma@gmail.com
            </a>
            <a href="https://github.com/me-hv" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors print:no-underline print:text-zinc-600">
              <FaGithub className="w-3.5 h-3.5 text-zinc-600 print:hidden" />
              github.com/me-hv
            </a>
            <a href="https://linkedin.com/in/harryverma" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors print:no-underline print:text-zinc-600">
              <FaLinkedin className="w-3.5 h-3.5 text-zinc-600 print:hidden" />
              linkedin.com/in/harryverma
            </a>
          </div>
        </header>

        {/* ══════════════════════════ SUMMARY ═══════════════════════════════ */}
        <section className="mb-14 print:mb-10">
          <SectionLabel>Professional Summary</SectionLabel>
          <p className="text-zinc-400 leading-relaxed text-sm print:text-zinc-700 print:text-xs">
            Creative and tech-driven multimedia professional with <span className="text-white font-medium print:text-black">7+ years of experience</span> in music production, video editing, graphic design, and digital marketing. Skilled in transforming ideas into high-impact audio-visual content using modern tools and data-driven strategies. Experienced across the full creative pipeline — from concept to final delivery — with a strong track record of working with local and regional media brands. Known for <span className="text-white font-medium print:text-black">discipline, innovation, and consistent delivery</span> across creative and technical projects.
          </p>
        </section>

        {/* ════════════════════════ WORK EXPERIENCE ═════════════════════════ */}
        <section className="mb-14 print:mb-10">
          <SectionLabel>Work Experience</SectionLabel>

          <div className="space-y-10 print:space-y-7">
            {experience.map((job) => (
              <div key={job.role + job.company} className="group relative pl-5 border-l border-zinc-800 hover:border-zinc-600 transition-colors duration-300 print:pl-4 print:border-zinc-300">

                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <h3 className="text-white font-bold text-base tracking-tight print:text-black print:text-sm">
                    {job.role}
                    {job.current && (
                      <span className="ml-2 text-[10px] font-[family-name:var(--font-mono)] text-emerald-400 border border-emerald-400/30 rounded px-1.5 py-0.5 print:hidden">
                        CURRENT
                      </span>
                    )}
                  </h3>
                  <span className="text-[11px] font-[family-name:var(--font-mono)] text-zinc-500 shrink-0 print:text-zinc-500 print:text-[10px]">
                    [ {job.period} ]
                  </span>
                </div>

                {/* Company + type */}
                <p className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 mb-4 print:mb-2 print:text-zinc-500">
                  {job.company}
                  <span className="mx-2 text-zinc-700 print:text-zinc-400">|</span>
                  <span className="text-zinc-600">{job.type}</span>
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed print:text-xs print:text-zinc-700">
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 shrink-0 print:bg-zinc-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ CORE COMPETENCIES ═════════════════════════ */}
        <section className="mb-14 print:mb-10">
          <SectionLabel>Core Competencies</SectionLabel>

          <div className="space-y-4 print:space-y-2.5">
            {competencies.map((c) => (
              <div key={c.area} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="text-white font-semibold text-sm shrink-0 w-full sm:w-52 print:text-black print:text-xs print:font-bold">
                  {c.area}:
                </span>
                <span className="text-zinc-400 text-sm leading-relaxed print:text-zinc-600 print:text-xs">
                  {c.items}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════ SKILLS ════════════════════════════════ */}
        <section className="mb-14 print:mb-10">
          <SectionLabel>Skills</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 print:gap-4 print:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-[10px] font-[family-name:var(--font-mono)] tracking-[0.25em] text-zinc-500 uppercase mb-3 print:text-zinc-400 print:mb-2">
                  — {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════ EDUCATION ═════════════════════════════ */}
        <section className="mb-14 print:mb-10">
          <SectionLabel>Education</SectionLabel>

          <div className="pl-5 border-l border-zinc-800 print:pl-4 print:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-white font-bold text-sm print:text-black">
                Bachelor of Computer Applications (BCA)
              </h3>
              <span className="text-[11px] font-[family-name:var(--font-mono)] text-zinc-500 print:text-zinc-500 print:text-[10px]">
                [ 2017 — 2020 ]
              </span>
            </div>
            <p className="text-xs font-[family-name:var(--font-mono)] text-zinc-500 print:text-zinc-500">
              Chaudhary Charan Singh University, Meerut
            </p>
          </div>
        </section>

        {/* ═══════════════════════ PERSONAL DETAILS ═════════════════════════ */}
        <section>
          <SectionLabel>Personal Details</SectionLabel>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-400 print:text-xs print:text-zinc-600">
            {[
              ['Nationality', 'Indian'],
              ['Languages', 'Hindi, English'],
              ['Marital Status', 'Single'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-600 uppercase tracking-widest print:text-zinc-400">
                  {label}
                </span>
                <span className="text-zinc-300 font-medium print:text-zinc-700">{value}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
