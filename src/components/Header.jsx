import { useState, useEffect } from 'react'
import { Menu, X, Youtube, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Bio', id: 'about' },
  { label: 'Music', id: 'music' },
  { label: 'Media', id: 'gallery' },
  { label: 'Booking', id: 'contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 px-6 py-5 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => scrollToSection('home')}
          className="text-2xl font-black tracking-tighter italic text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Mia Farnese — home"
        >
          MF<span className="text-fuchsia-500">.</span>
        </motion.button>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:flex gap-10 text-[10px] font-mono tracking-widest uppercase"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white/60 hover:text-fuchsia-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-fuchsia-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-4"
        >
          <div className="hidden md:flex items-center gap-0.5 text-white/30" aria-hidden>
            <a
              href="https://www.youtube.com/@MiaEF10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-red-400 hover:bg-white/5 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/miaamusic_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-fuchsia-400 hover:bg-white/5 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-fuchsia-500/50 transition-all active:scale-95"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </motion.div>
      </header>

      {/* Fullscreen overlay menu — mobile only */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 p-10 md:hidden"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-6 p-3 rounded-lg border border-white/10 hover:border-fuchsia-500/50 transition-all"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>

            {navLinks.map((link, idx) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-fuchsia-500 transition-colors"
                whileHover={{ x: 12 }}
              >
                {link.label}
              </motion.button>
            ))}

            <div className="flex gap-8 mt-10">
              <button
                type="button"
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                className="text-white/50 hover:text-fuchsia-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </button>
              <button
                type="button"
                onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                className="text-white/50 hover:text-fuchsia-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
