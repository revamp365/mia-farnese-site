import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Play, Youtube, Instagram, X } from 'lucide-react'

/** Album: https://imgur.com/a/znOrPok */
const FIRST_PERFORMANCE_VIDEOS = [
  {
    id: '8XzPm5F',
    label: 'Exes and Ohs',
    src: 'https://i.imgur.com/8XzPm5F.mp4',
  },
  {
    id: 'DHpo74X',
    label: 'You Belong With Me',
    src: 'https://i.imgur.com/DHpo74X.mp4',
  },
  {
    id: 'nCVXjsm',
    label: 'Traitor',
    src: 'https://i.imgur.com/nCVXjsm.mp4',
  },
  {
    id: 'gwYnkOu',
    label: 'Wonderwall',
    src: 'https://i.imgur.com/gwYnkOu.mp4',
  },
]

/** Album: https://imgur.com/a/jIhyjf5 */
const SECOND_PERFORMANCE_VIDEOS = [
  {
    id: '6mA7pnR',
    label: 'Sunrise',
    src: 'https://i.imgur.com/6mA7pnR.mp4',
  },
  {
    id: '7k4qDk3',
    label: 'Exes And Ohs',
    src: 'https://i.imgur.com/7k4qDk3.mp4',
  },
]

const GALLERY_CONFIG = {
  first: {
    videos: FIRST_PERFORMANCE_VIDEOS,
    heading: 'first performance',
    badge: 'First Performance',
    blurb: 'Debut day archive — YouTube-style grid. Videos play only after click.',
    albumUrl: 'https://imgur.com/a/znOrPok',
    titleId: 'performance-gallery-first-title',
  },
  second: {
    videos: SECOND_PERFORMANCE_VIDEOS,
    heading: 'second preformance',
    badge: 'Second preformance',
    blurb: 'Second preformance archive — YouTube-style grid. Videos play only after click.',
    albumUrl: 'https://imgur.com/a/jIhyjf5',
    titleId: 'performance-gallery-second-title',
  },
}

function PerformanceVideoModal({ open, onClose, heading, badge, blurb, albumUrl, videos, titleId }) {
  const [playingId, setPlayingId] = useState(null)

  useEffect(() => {
    if (!open) setPlayingId(null)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-7xl max-h-[92vh] overflow-y-auto border border-white/10 bg-slate-900/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-900/95 px-5 py-4 md:px-7">
          <div>
            <h2 id={titleId} className="font-black italic text-white text-lg md:text-xl tracking-tight">
              {heading}
            </h2>
            <p className="text-slate-500 text-xs font-mono mt-1">{blurb}</p>
            <a
              href={albumUrl}
              target="_blank"
              rel="noreferrer"
              className="text-fuchsia-500/90 hover:text-fuchsia-400 text-[10px] font-mono mt-2 inline-block"
            >
              Open album on Imgur ↗
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 border border-white/10 text-slate-400 hover:text-white hover:border-fuchsia-500/50 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 md:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((v) => {
              const isPlaying = playingId === v.id
              return (
                <article
                  key={v.id}
                  className={
                    'group border transition-colors bg-slate-950/70 ' +
                    (isPlaying ? 'border-fuchsia-500/50' : 'border-white/10 hover:border-white/20')
                  }
                >
                  <div className="aspect-video bg-black">
                    {isPlaying ? (
                      <video
                        key={v.id}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={v.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingId(v.id)}
                        className="relative w-full h-full"
                        aria-label={`Play ${v.label}`}
                      >
                        <img
                          src={`https://i.imgur.com/${v.id}.jpg`}
                          alt={v.label}
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 border border-white/20 group-hover:border-fuchsia-400/60 transition-colors">
                            <Play size={20} fill="white" className="text-white ml-0.5" />
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-[10px] font-mono text-fuchsia-400/90 uppercase tracking-[0.18em] mb-1">
                      {badge}
                    </p>
                    <p className="text-sm text-white font-semibold leading-snug">{v.label}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

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
    title: 'talent shows',
    subtitle: '7th grade- first place, 8th grade-second',
    date: '2024',
    type: 'Main Stage',
    img: 'https://i.imgur.com/J7GCxTv.png',
  },
  {
    id: 'TR_02',
    title: 'first performance',
    subtitle: 'Debut Performance',
    date: '2023',
    type: 'Archived',
    img: 'https://i.imgur.com/GA9ZfgG.jpeg',
    videoGalleryKey: 'first',
  },
  {
    id: 'TR_03',
    title: 'second preformance',
    subtitle: 'Guitar + Vocal Showcase',
    date: '2024',
    type: 'Studio Feed',
    img: 'https://i.imgur.com/78dJrjU.png',
    videoGalleryKey: 'second',
  },
]

export default function Music() {
  const [galleryKey, setGalleryKey] = useState(null)
  const galleryProps = galleryKey ? GALLERY_CONFIG[galleryKey] : null

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
              className={
                'group relative h-[340px] sm:h-[420px] md:h-[560px] overflow-hidden bg-slate-900 border border-white/5 ' +
                (item.videoGalleryKey ? 'cursor-pointer' : 'cursor-default')
              }
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

                {item.videoGalleryKey ? (
                  <button
                    type="button"
                    onClick={() => setGalleryKey(item.videoGalleryKey)}
                    className="text-2xl md:text-3xl font-black italic text-left w-full text-white mb-1 leading-none group-hover:text-fuchsia-400 transition-colors duration-300"
                  >
                    {item.title}
                  </button>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-1 leading-none group-hover:text-fuchsia-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                )}
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

      {galleryProps && (
        <PerformanceVideoModal
          open
          onClose={() => setGalleryKey(null)}
          heading={galleryProps.heading}
          badge={galleryProps.badge}
          blurb={galleryProps.blurb}
          albumUrl={galleryProps.albumUrl}
          videos={galleryProps.videos}
          titleId={galleryProps.titleId}
        />
      )}
    </section>
  )
}
