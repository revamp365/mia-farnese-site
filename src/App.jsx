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

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 4
      })
    }, 16)
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
        <p className="text-white/35 font-mono text-[9px] tracking-[0.25em]">
          Singer & guitarist
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

      <div className="absolute bottom-10 left-10 opacity-40 hidden md:block max-w-[14rem]">
        <p className="text-slate-400 text-xs leading-relaxed">
          Welcome — scroll to explore performances, photos, and how to book Mia.
        </p>
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-fuchsia-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />
      <main id="main-content">
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
