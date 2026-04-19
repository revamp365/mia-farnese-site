import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Youtube, Instagram, ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden bg-slate-950"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Mobile image */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-top"
          style={{
            backgroundImage: `url('https://i.imgur.com/J7GCxTv.png')`,
            filter: 'grayscale(70%) brightness(0.30)',
          }}
        />
        {/* Desktop image */}
        <div
          className="absolute inset-0 hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.imgur.com/xqXiC44.png')`,
            filter: 'grayscale(65%) brightness(0.28)',
          }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/60 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        {/* Fuchsia bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 65% 50%, rgba(217,70,239,0.07) 0%, transparent 55%)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 w-full max-w-5xl pt-24 pb-16">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-300 font-mono text-[9px] md:text-[10px] tracking-widest uppercase"
          style={{ boxShadow: '0 0 25px rgba(217,70,239,0.08)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse shrink-0" aria-hidden />
          Singer & guitarist · acoustic artist
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3rem] sm:text-[4.5rem] md:text-[7.5rem] lg:text-[11rem] font-serif font-bold italic uppercase leading-[0.88] tracking-tight text-white mb-5 md:mb-8"
        >
          Mia
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(217,70,239,0.85)' }}
          >
            Farnese
          </span>
        </motion.h1>

        {/* Tagline — visible on all screen sizes */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="text-slate-400 font-light text-sm md:text-base lg:text-lg mb-8 max-w-xs md:max-w-sm leading-relaxed"
        >
          Music only makes me stronger. It speaks to the heart in ways words cannot express.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative px-8 py-4 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors overflow-hidden w-full sm:w-auto shadow-lg shadow-fuchsia-950/40"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center justify-center sm:justify-start gap-3 font-bold uppercase tracking-[0.18em] text-[11px] text-white">
              Book a performance <ArrowRight size={13} aria-hidden />
            </span>
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
              className="p-4 rounded-xl bg-white/5 hover:bg-fuchsia-500/15 border border-white/10 hover:border-fuchsia-500/50 transition-all group"
              aria-label="Open YouTube channel"
            >
              <Youtube
                size={17}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </button>
            <button
              type="button"
              onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
              className="p-4 rounded-xl bg-white/5 hover:bg-fuchsia-500/15 border border-white/10 hover:border-fuchsia-500/50 transition-all group"
              aria-label="Open Instagram profile"
            >
              <Instagram
                size={17}
                className="text-white group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative level meters — subtle motion, non-essential */}
      <div
        className="absolute bottom-10 right-8 hidden lg:flex flex-col items-end gap-2"
        aria-hidden
      >
        <p className="text-slate-500 font-mono text-[9px] uppercase tracking-widest">
          Live energy
        </p>
        <div className="flex gap-[3px] h-5 items-end opacity-60">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[2px] rounded-full bg-fuchsia-500/80"
              animate={{ height: [4, 14, 7, 18, 4] }}
              transition={{
                duration: 1.4 + (i % 4) * 0.3,
                repeat: Infinity,
                delay: i * 0.06,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-mono hidden sm:block">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-fuchsia-500/40 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
