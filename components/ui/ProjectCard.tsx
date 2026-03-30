import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  className?: string;
  index: number;
}

const weightlessEntrance = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
      mass: 1,
      delay: i * 0.1,
    },
  }),
};

export function ProjectCard({ title, description, tags, link, className, index }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={weightlessEntrance}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:scale-[1.02]",
        "border border-white/10 glass-panel-heavy backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent mix-blend-overlay pointer-events-none" />
      
      {/* Background glow that moves slightly with hover */}
      <div className="absolute -inset-[100%] z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />

      <div className="relative z-10 flex flex-col h-full space-y-4">
        <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white/90 drop-shadow-md">
          {title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-white/50 flex-grow">
          {description}
        </p>

        <div className="pt-4 flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <div className="pt-4 mt-auto border-t border-white/10">
            <a 
              href={link} 
              className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-blue)] font-medium hover:text-white transition-colors group-hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <span className="transform transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
