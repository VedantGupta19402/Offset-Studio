import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work',           path: '/work' },
  { label: 'The Team',       path: '/team' },
  { label: 'Services',       path: '/services' },
  { label: 'Need a Partner', path: '/partner' },
  { label: 'Contact',        path: '/contact' },
  { label: 'The Lab',        path: '/lab' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on route change
  useEffect(() => { setOpen(false) }, [location])

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      {/* Hamburger Button — fixed top-left */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 left-6 z-[100] text-os-white font-body text-sm tracking-widest uppercase mix-blend-difference"
        aria-label="Toggle menu"
      >
        {open ? '(back) /<' : '☰ menu'}
      </button>

      {/* Logo — fixed top-center */}
      <Link
        to="/"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 font-display text-xl tracking-widest text-os-white"
      >
        OFFSET STUDIO
      </Link>

      {/* Dark overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full w-80 bg-os-mid z-[90] flex flex-col justify-between p-10 border-r border-os-border"
          >
            {/* Top: Logo */}
            <div>
              <p className="font-display text-3xl tracking-widest text-os-accent mb-16">
                OFFSET STUDIO
              </p>

              {/* Nav Links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="font-display text-4xl tracking-wider text-os-white hover:text-os-accent transition-colors duration-200 leading-none"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom: Contact info + socials */}
            <div className="text-os-muted text-sm space-y-4">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-1">Telephone</p>
                <a href="tel:+919876543210" className="text-os-white hover:text-os-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-1">Email</p>
                <a href="mailto:hello@offsetstudio.in" className="text-os-white hover:text-os-accent transition-colors">
                  hello@offsetstudio.in
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                {['LI', 'IG', 'BE', 'X', 'FB'].map(s => (
                  <a key={s} href="#" className="text-xs tracking-widest text-os-muted hover:text-os-accent transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
