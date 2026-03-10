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
        >
          MF<span className="text-fuchsia-500">.</span>
        </motion.button>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:flex gap-10 text-[10px] font-mono tracking-widest uppercase"
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

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-fuchsia-500/50 transition-all active:scale-95"
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </motion.button>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 p-10"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-6 p-3 border border-white/10 hover:border-fuchsia-500/50 transition-all"
            >
              <X size={16} />
            </button>

            {navLinks.map((link, idx) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white hover:text-fuchsia-500 transition-colors"
                whileHover={{ x: 12 }}
              >
                {link.label}
              </motion.button>
            ))}

            <div className="flex gap-8 mt-10">
              <button
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                className="text-white/50 hover:text-fuchsia-500 transition-colors"
              >
                <Youtube size={22} />
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                className="text-white/50 hover:text-fuchsia-500 transition-colors"
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
