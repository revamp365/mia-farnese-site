import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Guitar } from 'lucide-react'

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-3"
      >
        <div className="w-8 h-[2px] bg-fuchsia-500 shrink-0" />
        <span className="text-fuchsia-500 font-mono tracking-widest text-[10px] uppercase">
          {subtitle}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  )
}

const milestones = [
  {
    year: '2023',
    title: '6th Grade Debut',
    detail: 'First public performance — the spark that started everything.',
  },
  {
    year: '2024',
    title: '7th Grade — 1st Place',
    detail: 'Won the talent show, moving the audience and earning rave reviews.',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Acoustic Guitar',
    detail: 'Expanded her artistry by picking up guitar alongside vocals.',
  },
  {
    year: '2025',
    title: '8th Grade Chapter',
    detail: 'Preparing for the next stage of her growing musical story.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-16 lg:px-24 bg-slate-950 relative overflow-hidden">
      {/* Fuchsia bloom */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217,70,239,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Video column */}
        <motion.div
          ref={ref}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="relative z-10 aspect-[3/4] md:aspect-[4/5] bg-slate-900 border border-fuchsia-500/15 overflow-hidden">
            <video
              className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://i.imgur.com/hzzt3ip.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="absolute inset-0 border border-fuchsia-500/0 group-hover:border-fuchsia-500/25 transition-all duration-700 m-4" />
          </div>

          <div className="absolute -top-10 -right-10 w-48 h-48 pointer-events-none hidden md:block"
            style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.06) 0%, transparent 70%)' }} />

          <div className="absolute bottom-4 left-4 z-20 font-mono text-[8px] bg-slate-950/85 backdrop-blur-sm px-2.5 py-1.5 border border-fuchsia-500/35 text-fuchsia-400 uppercase tracking-widest">
            IMG_REF: TALENT_CHAMP_2024.LOG
          </div>
        </motion.div>

        {/* Text column */}
        <div className="space-y-6 md:space-y-10">
          <SectionHeader title="The Origin" subtitle="System_Profile" />

          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light italic">
            "At 13, I don't just want to be heard — I want to be felt."
          </p>

          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Mia Farnese has spent her early years refining a sound that is both technically precise
            and emotionally raw. From the first strum in her 6th-grade debut to her 1st place
            victory in the 7th-grade talent show, her journey is marked by a relentless drive for
            acoustic mastery.
          </p>

          <p className="text-slate-500 leading-relaxed text-sm">
            In the past year she expanded her musical horizons by picking up the acoustic guitar,
            adding another dimension to her already impressive vocal talents. As she prepares for
            her 8th grade performance, there's no doubt she'll continue to amaze.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 md:p-7 bg-white/[0.02] border border-white/5 hover:border-fuchsia-500/35 transition-all"
            >
              <div className="text-fuchsia-500 mb-3 md:mb-4">
                <Star size={22} />
              </div>
              <h4 className="font-bold text-white uppercase tracking-tighter text-sm md:text-base mb-1">
                1st Place Win
              </h4>
              <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-mono tracking-widest">
                7th Grade Talent Show
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 md:p-7 bg-white/[0.02] border border-white/5 hover:border-fuchsia-500/35 transition-all"
            >
              <div className="text-fuchsia-500 mb-3 md:mb-4">
                <Guitar size={22} />
              </div>
              <h4 className="font-bold text-white uppercase tracking-tighter text-sm md:text-base mb-1">
                Acoustic Edge
              </h4>
              <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-mono tracking-widest">
                Guitar + Vocal Mastery
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline strip */}
      <div className="max-w-7xl mx-auto mt-14 md:mt-28">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="w-8 h-[2px] bg-fuchsia-500 shrink-0" />
          <span className="text-fuchsia-500 font-mono tracking-widest text-[10px] uppercase">
            Journey_Log
          </span>
        </div>

        {/* Mobile: stacked list with left accent; md+: 4-col grid */}
        <div className="md:hidden space-y-0 border-t border-white/5">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex gap-4 py-5 border-b border-white/5 ${
                m.highlight ? 'border-b-fuchsia-500/20' : ''
              }`}
            >
              <div className={`w-0.5 shrink-0 self-stretch mt-1 ${m.highlight ? 'bg-fuchsia-500' : 'bg-white/10'}`} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${m.highlight ? 'text-fuchsia-500' : 'text-white/30'}`}>
                    {m.year}
                  </span>
                  {m.highlight && (
                    <span className="text-[8px] uppercase tracking-widest text-black bg-fuchsia-500 px-1.5 py-0.5 font-bold">
                      Winner
                    </span>
                  )}
                </div>
                <h4 className="font-black italic uppercase tracking-tighter text-white text-base mb-1">
                  {m.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden md:grid md:grid-cols-4 border-t border-white/5">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pt-8 pr-8 border-b border-r border-white/5 pb-8 group ${
                m.highlight ? 'border-b-fuchsia-500/20' : ''
              }`}
            >
              <span className={`font-mono text-xs tracking-widest uppercase ${m.highlight ? 'text-fuchsia-500' : 'text-white/30'}`}>
                {m.year}
              </span>
              {m.highlight && (
                <span className="ml-3 text-[9px] uppercase tracking-widest text-black bg-fuchsia-500 px-2 py-0.5 font-bold">
                  Winner
                </span>
              )}
              <h4 className="font-black italic uppercase tracking-tighter text-white text-lg mt-3 mb-2 group-hover:text-fuchsia-400 transition-colors">
                {m.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
