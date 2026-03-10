import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Music from './components/Music'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chat from './components/Chat'
import EmailTest from './components/EmailTest'

const ScanningLine = () => (
  <motion.div
    className="fixed top-0 left-0 w-full h-[1px] bg-fuchsia-500/30 z-50 pointer-events-none"
    animate={{ top: ['0%', '100%', '0%'] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
  />
)

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 700)
          return 100
        }
        return prev + 2
      })
    }, 22)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6"
    >
      <div className="mb-8 text-center">
        <p className="text-fuchsia-500 font-mono text-[11px] tracking-[0.4em] uppercase mb-2">
          Mia Farnese
        </p>
        <p className="text-white/20 font-mono text-[9px] tracking-[0.25em]">
          MF_AUDIO_PROTOCOL_v2.0
        </p>
      </div>

      <div className="relative w-64 h-px bg-slate-800 mb-5">
        <motion.div
          className="absolute h-full bg-fuchsia-500"
          style={{ boxShadow: '0 0 15px rgba(217,70,239,0.9)' }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      <span className="text-white font-mono text-3xl font-bold tabular-nums">{percent}%</span>

      <div className="absolute bottom-10 left-10 opacity-30 hidden md:block">
        <div className="text-fuchsia-400 font-mono text-[9px] space-y-1.5 uppercase tracking-widest">
          <p>{'>'} MIA_FARNESE_PROTOCOL_v2.0</p>
          <p>{'>'} CORE_AUDIO_SYNC: ACTIVE</p>
          <p>{'>'} VOCAL_RESONANCE: OPTIMIZED</p>
          <p>{'>'} GUITAR_STRATA: CALIBRATED</p>
          <p>{'>'} BOOT_SEQUENCE: COMPLETE</p>
        </div>
      </div>

      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(217,70,239,0.07) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showEmailTest, setShowEmailTest] = useState(false)

  const isTestMode =
    window.location.search.includes('test=email') || showEmailTest

  if (isTestMode) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowEmailTest(false)}
              className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 font-mono text-sm transition-colors"
            >
              ← Back to Main Site
            </button>
          </div>
          <EmailTest />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <ScanningLine />}

      <Header />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Chat />

      {import.meta.env.DEV && (
        <button
          onClick={() => setShowEmailTest(true)}
          className="fixed top-4 left-4 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 text-sm font-mono z-50"
        >
          Test Email
        </button>
      )}
    </div>
  )
}
