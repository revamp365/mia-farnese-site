import { responsivePhoto } from "../lib/photos";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Youtube, Instagram, X } from "lucide-react";

/** Album: https://imgur.com/a/znOrPok */
const FIRST_PERFORMANCE_VIDEOS = [
  {
    id: "8XzPm5F",
    label: "Exes and Ohs",
    src: "/performances/8XzPm5F.mp4",
  },
  {
    id: "DHpo74X",
    label: "You Belong With Me",
    src: "/performances/DHpo74X.mp4",
  },
  {
    id: "nCVXjsm",
    label: "Traitor",
    src: "/performances/nCVXjsm.mp4",
  },
  {
    id: "gwYnkOu",
    label: "Wonderwall",
    src: "/performances/gwYnkOu.mp4",
  },
];

/** Album: https://imgur.com/a/jIhyjf5 */
const SECOND_PERFORMANCE_VIDEOS = [
  {
    id: "6mA7pnR",
    label: "Sunrise",
    src: "/performances/6mA7pnR.mp4",
  },
  {
    id: "7k4qDk3",
    label: "Exes and Ohs",
    src: "/performances/7k4qDk3.mp4",
  },
];

/** Talent show performances on YouTube */
const TALENT_SHOWS_VIDEOS = [
  {
    id: "qxWpDhDfm_Q",
    label: "6th grade talent show",
    youtubeId: "qxWpDhDfm_Q",
  },
  {
    id: "Q4PBY5wNnQo",
    label: "7th grade talent show",
    youtubeId: "Q4PBY5wNnQo",
  },
  {
    id: "GkskvZSHw8o",
    label: "8th grade talent show",
    youtubeId: "GkskvZSHw8o",
  },
];

const GALLERY_CONFIG = {
  talentShows: {
    videos: TALENT_SHOWS_VIDEOS,
    heading: "Talent Shows",
    badge: "Talent shows",
    blurb: "Choose a performance from the talent show archive.",
    footerLink: {
      href: "https://www.youtube.com/@MiaEF10",
      label: "YouTube channel @MiaEF10 ↗",
    },
    titleId: "performance-gallery-talent-title",
  },
  first: {
    videos: FIRST_PERFORMANCE_VIDEOS,
    heading: "First Performance",
    badge: "First Performance",
    blurb: "Watch the songs from Mia’s debut live set.",
    footerLink: {
      href: "https://imgur.com/a/znOrPok",
      label: "Open album on Imgur ↗",
    },
    titleId: "performance-gallery-first-title",
  },
  second: {
    videos: SECOND_PERFORMANCE_VIDEOS,
    heading: "Second Performance",
    badge: "Second performance",
    blurb: "More live guitar and vocals. Choose a song to watch.",
    footerLink: {
      href: "https://imgur.com/a/jIhyjf5",
      label: "Open album on Imgur ↗",
    },
    titleId: "performance-gallery-second-title",
  },
};

function galleryThumbSrc(v) {
  if (v.youtubeId) return `/performances/${v.youtubeId}.jpg`;
  return `/performances/${v.id}.jpg`;
}

function PerformanceVideoModal({ onClose, heading, videos, titleId }) {
  const [playingId, setPlayingId] = useState(videos[0].id);
  const [failed, setFailed] = useState(false);
  const dialogRef = useRef(null);
  const selected = videos.find((video) => video.id === playingId);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="performance-dialog"
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="player-heading">
        <div>
          <p className="player-label">Live performances</p>
          <h2 id={titleId}>{heading}</h2>
        </div>
        <button
          className="player-close"
          aria-label="Close player"
          onClick={onClose}
        >
          <X size={22} />
        </button>
      </div>
      <div className="player-layout">
        <div className="main-player">
          {selected.youtubeId ? (
            <iframe
              key={selected.id}
              title={selected.label}
              src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?rel=0`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              key={selected.id}
              src={selected.src}
              poster={galleryThumbSrc(selected)}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={selected.label}
              onError={() => setFailed(true)}
            />
          )}
          <div className="now-playing">
            <span>Now playing</span>
            <h3>{selected.label}</h3>
            <a
              href={
                selected.youtubeId
                  ? `https://www.youtube.com/watch?v=${selected.youtubeId}`
                  : selected.src
              }
              target="_blank"
              rel="noreferrer"
            >
              Open video ↗
            </a>
          </div>
          {failed && (
            <p className="playback-error" role="alert">
              This video couldn’t load. Try the “Open video” link above.
            </p>
          )}
        </div>
        <div className="song-list" aria-label="Choose a performance">
          <p className="player-label">{videos.length} performances</p>
          {videos.map((video, index) => (
            <button
              key={video.id}
              aria-label={`Play ${video.label}`}
              aria-pressed={video.id === playingId}
              className={video.id === playingId ? "active-song" : ""}
              onClick={() => {
                setPlayingId(video.id);
                setFailed(false);
              }}
            >
              <img src={galleryThumbSrc(video)} alt="" loading="lazy" />
              <span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {video.label}
              </span>
              <Play size={16} />
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
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
        <span className="text-fuchsia-500 font-mono tracking-widest text-[12px] uppercase">
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
  );
}

const performances = [
  {
    id: "TR_01",
    title: "Talent Shows",
    subtitle: "6th–8th grade performances, including a first-place win.",
    date: "2024",
    type: "Main Stage",
    img: "/photos/J7GCxTv.png",
    videoGalleryKey: "talentShows",
  },
  {
    id: "TR_02",
    title: "First Performance",
    subtitle: "Debut Performance",
    date: "2023",
    type: "Archived",
    img: "/photos/GA9ZfgG.jpeg",
    videoGalleryKey: "first",
  },
  {
    id: "TR_03",
    title: "Second Performance",
    subtitle: "Guitar + Vocal Showcase",
    date: "2024",
    type: "Studio Feed",
    img: "/photos/78dJrjU.png",
    videoGalleryKey: "second",
  },
];

export default function Music() {
  const [galleryKey, setGalleryKey] = useState(null);
  const galleryProps = galleryKey ? GALLERY_CONFIG[galleryKey] : null;

  return (
    <section
      id="music"
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-slate-950 border-y border-white/5 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/[0.025] hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader title="Live Performances" subtitle="Hear Mia play" />
        <button
          className="featured-performance"
          onClick={() => setGalleryKey("second")}
          aria-label="Watch featured performance: Sunrise"
        >
          <div className="featured-image">
            <img
              src="/performances/6mA7pnR.jpg"
              alt="Mia performing Sunrise with her acoustic guitar"
              loading="lazy"
            />
            <span className="featured-play">
              <Play fill="currentColor" size={24} />
            </span>
          </div>
          <div className="featured-copy">
            <span className="player-label">Featured performance</span>
            <h3>Sunrise</h3>
            <p>
              Live guitar. Live vocals.
              <br />A closer listen to Mia’s acoustic sound.
            </p>
            <span className="featured-link">Watch the performance ↗</span>
          </div>
        </button>

        {/* Card grid — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-20">
          {performances.map((item, idx) => (
            <motion.div
              key={String(idx + 1).padStart(2, "0")}
              role={item.videoGalleryKey ? "button" : undefined}
              tabIndex={item.videoGalleryKey ? 0 : undefined}
              aria-label={
                item.videoGalleryKey
                  ? `Open ${item.title} video gallery`
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={
                "group relative h-[390px] sm:h-[430px] md:h-[480px] overflow-hidden bg-slate-900 border border-white/5 " +
                (item.videoGalleryKey ? "cursor-pointer" : "cursor-default")
              }
              onClick={
                item.videoGalleryKey
                  ? () => setGalleryKey(item.videoGalleryKey)
                  : undefined
              }
              onKeyDown={
                item.videoGalleryKey
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setGalleryKey(item.videoGalleryKey);
                      }
                    }
                  : undefined
              }
            >
              <img
                {...responsivePhoto(item.img, "(max-width: 767px) 100vw, 33vw")}
                loading="lazy"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-9 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-400 text-[12px] font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/35 font-mono text-[12px] uppercase tracking-tight">
                    Watch collection
                  </span>
                </div>

                {item.videoGalleryKey ? (
                  <h3 className="text-2xl md:text-3xl font-black italic text-left w-full text-white mb-1 leading-none group-hover:text-fuchsia-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-1 leading-none group-hover:text-fuchsia-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                )}
                <p className="text-slate-400 text-xs md:text-sm mb-3 md:mb-4">
                  {item.subtitle}
                </p>

                <div className="flex justify-between items-center">
                  <p className="text-slate-400 text-[12px] uppercase tracking-widest font-mono">
                    {GALLERY_CONFIG[item.videoGalleryKey].videos.length}{" "}
                    performances
                  </p>
                  <div className="p-3 md:p-3 bg-fuchsia-500 opacity-100 transition-opacity duration-300">
                    <Play size={12} fill="white" className="text-white" />
                  </div>
                </div>
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
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(239,68,68,0.04) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex items-start gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-red-600/10 border border-red-600/20 shrink-0 mt-0.5">
                <Youtube size={17} className="text-red-500" />
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[12px] uppercase tracking-[0.2em] mb-1">
                  More performances
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-lg md:text-xl mb-2">
                  YouTube
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 md:mb-5">
                  Follow Mia's musical journey. Be the first to see new
                  performances, covers, and original music as she continues to
                  grow.
                </p>
                <button
                  onClick={() =>
                    window.open("https://www.youtube.com/@MiaEF10", "_blank")
                  }
                  className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-mono text-red-400 hover:text-red-300 transition-colors group/btn"
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
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.04) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex items-start gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-pink-600/10 border border-pink-600/20 shrink-0 mt-0.5">
                <Instagram size={17} className="text-pink-400" />
              </div>
              <div>
                <p className="text-slate-400 font-mono text-[12px] uppercase tracking-[0.2em] mb-1">
                  Behind the scenes
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-lg md:text-xl mb-2">
                  Instagram
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 md:mb-5">
                  Behind-the-scenes content, practice sessions, and updates on
                  Mia's journey as she prepares for upcoming performances.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/miaamusic_/",
                      "_blank",
                    )
                  }
                  className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-mono text-pink-400 hover:text-pink-300 transition-colors group/btn"
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
          footerLink={galleryProps.footerLink}
          videos={galleryProps.videos}
          titleId={galleryProps.titleId}
        />
      )}
    </section>
  );
}
