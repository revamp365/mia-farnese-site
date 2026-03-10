import { motion } from 'framer-motion'
import { Cpu, Play, Youtube, Instagram } from 'lucide-react'

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10 md:mb-16">
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

const performances = [
  {
    id: 'TR_01',
    title: 'Talent Finale',
    subtitle: '7th Grade — 1st Place',
    date: '2024',
    type: 'Main Stage',
    img: 'https://i.imgur.com/J7GCxTv.png',
  },
  {
    id: 'TR_02',
    title: '6th Grade Alpha',
    subtitle: 'Debut Performance',
    date: '2023',
    type: 'Archived',
    img: 'https://i.imgur.com/GA9ZfgG.jpeg',
  },
  {
    id: 'TR_03',
    title: 'Acoustic Session',
    subtitle: 'Guitar + Vocal Showcase',
    date: '2024',
    type: 'Studio Feed',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Music() {
  return (
    <section
      id="music"
      className="py-16 md:py-32 px-6 md:px-16 lg:px-24 bg-slate-950 border-y border-white/5 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/[0.025] hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader title="Performance Feed" subtitle="Live_Transmissions" />

        {/* Card grid — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-20">
          {performances.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-[340px] sm:h-[420px] md:h-[560px] overflow-hidden bg-slate-900 border border-white/5 cursor-default"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-9 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-400 text-[9px] font-mono">
                    {item.id}
                  </span>
                  <span className="text-white/35 font-mono text-[9px] uppercase tracking-tight">
                    Verified_Entry
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-1 leading-none group-hover:text-fuchsia-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-4">{item.subtitle}</p>

                <div className="flex justify-between items-center">
                  <p className="text-slate-600 text-[9px] uppercase tracking-widest font-mono">
                    {item.type} // {item.date}
                  </p>
                  <div className="p-2 md:p-2.5 bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={12} fill="white" className="text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-end gap-1">
                <Cpu size={13} className="text-fuchsia-500" />
                <div className="w-px h-8 bg-fuchsia-500/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-6 md:p-8 border border-white/5 hover:border-fuchsia-500/25 transition-all bg-white/[0.01] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at 20% 50%, rgba(239,68,68,0.04) 0%, transparent 60%)' }}
            />
            <div className="relative flex items-start gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-red-600/10 border border-red-600/20 shrink-0 mt-0.5">
                <Youtube size={17} className="text-red-500" />
              </div>
              <div>
                <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.2em] mb-1">
                  Channel_Stream
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-lg md:text-xl mb-2">
                  YouTube
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 md:mb-5">
                  Follow Mia's musical journey. Be the first to see new performances, covers, and
                  original music as she continues to grow.
                </p>
                <button
                  onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-red-400 hover:text-red-300 transition-colors group/btn"
                >
                  @MiaEF10
                  <span className="w-5 h-px bg-red-500 group-hover/btn:w-10 transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-6 md:p-8 border border-white/5 hover:border-fuchsia-500/25 transition-all bg-white/[0.01] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at 20% 50%, rgba(236,72,153,0.04) 0%, transparent 60%)' }}
            />
            <div className="relative flex items-start gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-pink-600/10 border border-pink-600/20 shrink-0 mt-0.5">
                <Instagram size={17} className="text-pink-400" />
              </div>
              <div>
                <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.2em] mb-1">
                  Social_Feed
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-lg md:text-xl mb-2">
                  Instagram
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 md:mb-5">
                  Behind-the-scenes content, practice sessions, and updates on Mia's journey as
                  she prepares for upcoming performances.
                </p>
                <button
                  onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-pink-400 hover:text-pink-300 transition-colors group/btn"
                >
                  @miaamusic_
                  <span className="w-5 h-px bg-pink-500 group-hover/btn:w-10 transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
