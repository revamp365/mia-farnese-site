import { Youtube, Instagram } from 'lucide-react'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Bio', id: 'about' },
  { label: 'Music', id: 'music' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="py-14 md:py-24 px-6 md:px-16 lg:px-24 relative bg-slate-950 overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-10 md:mb-20">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-serif font-bold italic tracking-tighter text-white mb-3 md:mb-4">
              MF<span className="text-fuchsia-500">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              A rising singer and guitarist whose voice captivates audiences. The journey is just
              beginning.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:border-fuchsia-500/50 hover:text-fuchsia-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/25 font-mono text-[9px] uppercase tracking-[0.3em] mb-4 md:mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-500 hover:text-fuchsia-400 font-mono uppercase tracking-widest text-[10px] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/25 font-mono text-[9px] uppercase tracking-[0.3em] mb-4 md:mb-5">
              Contact
            </h4>
            <div className="space-y-2.5 md:space-y-3">
              <p className="text-slate-500 text-[11px] font-mono">Available for bookings nationwide</p>
              <p className="text-slate-500 text-[11px] font-mono">Weekends & school breaks</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-fuchsia-500/60 hover:text-fuchsia-400 text-[11px] font-mono transition-colors"
              >
                Use the contact form →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <div className="text-2xl md:text-3xl font-serif font-bold italic tracking-tighter text-white/80">
            MF<span className="text-fuchsia-500">.</span>
          </div>
          <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-slate-600 text-center">
            &copy; {currentYear} Mia Farnese · All rights reserved
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
            Made with music
          </p>
        </div>
      </div>

      {/* Massive backdrop text */}
      <div className="absolute bottom-[-8%] right-[-3%] text-[28vw] md:text-[22vw] font-black italic text-white/[0.018] pointer-events-none select-none tracking-tighter leading-none uppercase">
        MIA
      </div>
    </footer>
  )
}
