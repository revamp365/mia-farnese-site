import { motion } from 'framer-motion'

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

const photos = [
  {
    id: 1,
    title: '7th Grade Win',
    category: 'Performance',
    highlight: true,
    image: 'https://i.imgur.com/J7GCxTv.png',
    tall: true,
  },
  {
    id: 2,
    title: '6th Grade Debut',
    category: 'Performance',
    image: 'https://i.imgur.com/GA9ZfgG.jpeg',
    tall: false,
  },
  {
    id: 3,
    title: 'Acoustic Practice',
    category: 'Behind the Scenes',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    tall: false,
  },
  {
    id: 4,
    title: '8th Grade Prep',
    category: 'Upcoming',
    highlight: true,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tall: true,
  },
  {
    id: 5,
    title: 'Studio Session',
    category: 'Recording',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    tall: false,
  },
  {
    id: 6,
    title: 'Award Ceremony',
    category: 'Achievement',
    highlight: true,
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800&q=80',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-32 px-6 md:px-16 lg:px-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Media Archive" subtitle="Visual_Feed" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-8 md:mb-14">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7 }}
              className={`group relative overflow-hidden bg-slate-900 border border-white/5 hover:border-fuchsia-500/25 transition-all duration-500 cursor-default ${
                photo.tall ? 'row-span-2' : ''
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Spacer to maintain aspect ratio */}
              <div className={photo.tall ? 'aspect-[3/5]' : 'aspect-square'} />

              {photo.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-fuchsia-500/50" />
              )}

              {/* Info — always visible on mobile, hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-fuchsia-400 text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-mono mb-0.5">
                  {photo.category}
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-sm sm:text-base leading-tight">
                  {photo.title}
                </h3>
              </div>

              {photo.highlight && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[8px] uppercase tracking-widest text-black bg-fuchsia-500 px-1.5 py-0.5 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/5 p-5 sm:p-6 md:p-8"
        >
          <div>
            <p className="text-slate-600 text-[10px] uppercase tracking-widest font-mono mb-1">
              More_Content
            </p>
            <h3 className="font-black italic uppercase tracking-tighter text-white text-lg sm:text-xl">
              Follow for live updates
            </h3>
          </div>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
              className="flex-1 sm:flex-none text-[10px] uppercase tracking-widest font-mono px-5 py-3 bg-red-600/10 border border-red-600/25 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-center"
            >
              YouTube
            </button>
            <button
              onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
              className="flex-1 sm:flex-none text-[10px] uppercase tracking-widest font-mono px-5 py-3 bg-pink-600/10 border border-pink-600/25 text-pink-400 hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all duration-300 text-center"
            >
              Instagram
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
