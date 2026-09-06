import { responsivePhoto } from "../lib/photos";
import { motion } from "framer-motion";
import {
  Youtube,
  Instagram,
  ArrowUpRight,
  ArrowDown,
  Play,
} from "lucide-react";
export default function Hero() {
  return (
    <section id="home" className="refined-hero">
      <div className="hero-photo">
        <img
          {...responsivePhoto(
            "/photos/NBhROlM.png",
            "(max-width: 767px) 150vw, 80vw",
          )}
          alt="Mia Farnese singing and playing acoustic guitar on stage"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-kicker"
        >
          <span /> Singer & guitarist
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mia
          <br />
          <span>Farnese</span>
        </motion.h1>
        <motion.p
          className="hero-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Music only makes me stronger. It speaks to the heart in ways words
          cannot express.
        </motion.p>
        <div className="hero-buttons">
          <a className="primary-action" href="#music">
            <Play size={16} fill="currentColor" /> Watch performances
          </a>
          <a className="secondary-action" href="#contact">
            Book Mia <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-social">
          <a
            href="https://www.youtube.com/@MiaEF10"
            target="_blank"
            rel="noreferrer"
            aria-label="Mia on YouTube"
          >
            <Youtube size={21} />
          </a>
          <a
            href="https://www.instagram.com/miaamusic_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Mia on Instagram"
          >
            <Instagram size={20} />
          </a>
          <span>Follow the journey</span>
        </div>
      </div>
      <a className="hero-scroll" href="#about">
        Discover Mia <ArrowDown size={15} />
      </a>
    </section>
  );
}
