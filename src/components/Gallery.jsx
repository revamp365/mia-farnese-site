import { responsivePhoto } from "../lib/photos";
import { motion } from "framer-motion";

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

const photos = [
  {
    id: 1,
    title: "7th Grade Win",
    category: "Performance",
    highlight: true,
    image: "/photos/J7GCxTv.png",
    tall: true,
  },
  {
    id: 2,
    title: "First Live Set",
    category: "Performance",
    image: "/photos/GA9ZfgG.jpeg",
    tall: false,
  },
  {
    id: 3,
    title: "Guitar & Vocals",
    category: "Behind the Scenes",
    image: "/photos/NBhROlM.png",
    tall: false,
  },
  {
    id: 4,
    title: "On Stage",
    category: "Performance",
    highlight: true,
    image: "/photos/xqXiC44.png",
    tall: true,
  },
  {
    id: 5,
    title: "Music in the Making",
    category: "The Journey",
    image: "/photos/dWpa2Cp.jpeg",
    tall: false,
  },
  {
    id: 6,
    title: "In the Moment",
    category: "The Journey",
    highlight: true,
    image: "/photos/pwxnZz0.jpeg",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Photo Gallery"
          subtitle="On stage & behind the scenes"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-8 md:mb-14">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7 }}
              className={`group relative overflow-hidden bg-slate-900 border border-white/5 hover:border-fuchsia-500/25 transition-all duration-500 cursor-default ${
                photo.tall ? "row-span-2" : ""
              }`}
            >
              <img
                loading="lazy"
                {...responsivePhoto(
                  photo.image,
                  "(max-width: 767px) 50vw, 33vw",
                )}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Spacer to maintain aspect ratio */}
              <div className={photo.tall ? "aspect-[3/5]" : "aspect-square"} />

              {photo.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-fuchsia-500/50" />
              )}

              {/* Info — always visible on mobile, hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-fuchsia-400 text-[12px] sm:text-[12px] uppercase tracking-[0.15em] font-mono mb-0.5">
                  {photo.category}
                </p>
                <h3 className="font-black italic uppercase tracking-tighter text-white text-sm sm:text-base leading-tight">
                  {photo.title}
                </h3>
              </div>

              {photo.highlight && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[12px] uppercase tracking-widest text-black bg-fuchsia-500 px-1.5 py-0.5 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <p className="text-slate-400 text-[12px] uppercase tracking-widest font-mono mb-1">
              Keep in touch
            </p>
            <h3 className="font-black italic uppercase tracking-tighter text-white text-lg sm:text-xl">
              Follow for live updates
            </h3>
          </div>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@MiaEF10", "_blank")
              }
              className="flex-1 sm:flex-none text-[12px] uppercase tracking-widest font-mono px-5 py-3 bg-red-600/10 border border-red-600/25 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-center"
            >
              YouTube
            </button>
            <button
              onClick={() =>
                window.open("https://www.instagram.com/miaamusic_/", "_blank")
              }
              className="flex-1 sm:flex-none text-[12px] uppercase tracking-widest font-mono px-5 py-3 bg-pink-600/10 border border-pink-600/25 text-pink-400 hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all duration-300 text-center"
            >
              Instagram
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
