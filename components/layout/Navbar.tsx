'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, Briefcase, User, Mail, FileText, Terminal } from 'lucide-react'

const navItems = [
  { href: '/',        icon: Home,      label: 'Home'    },
  { href: '/about',   icon: User,      label: 'About'   },
  { href: '/work',    icon: Briefcase, label: 'Work'    },
  { href: '/mission', icon: Terminal,  label: 'Mission' },
  { href: '/resume',  icon: FileText,  label: 'Resume'  },
  { href: '/contact', icon: Mail,      label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.2 }}
      className="fixed bottom-8 left-1/2 z-50 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] px-8 h-16 flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur-3xl saturate-150 overflow-visible"
    >
      <nav className="flex items-center gap-10 relative">
        {navItems.map(({ href, icon: Icon, label }) => {
          // active: exact match for /, prefix match for others
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={`relative group flex flex-col items-center outline-none focus:outline-none transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-[var(--foreground)]/50 hover:text-white'
              }`}
            >
              <Icon
                className={`w-[22px] h-[22px] transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''
                }`}
              />

              {/* Tooltip */}
              <span className="text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -top-8 transition-opacity duration-300 whitespace-nowrap bg-white/10 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 pointer-events-none">
                {label}
              </span>

              {/* Active dot indicator */}
              {isActive && (
                <motion.span
                  layoutId="navbar-active-dot"
                  className="absolute -bottom-3 w-1 h-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </motion.header>
  )
}
