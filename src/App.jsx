import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Music from './components/Music'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chat from './components/Chat'
import EmailTest from './components/EmailTest'

export default function App() {
  const [showEmailTest, setShowEmailTest] = useState(false)

  // Check if we're in test mode (you can change this condition)
  const isTestMode = window.location.search.includes('test=email') || showEmailTest

  if (isTestMode) {
    return (
      <div className="min-h-screen bg-black">
        <div className="py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowEmailTest(false)}
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-lg font-semibold"
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
    <div className="min-h-screen bg-black">
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
      
      {/* Test Mode Toggle - Only show in development */}
      {import.meta.env.DEV && (
        <button
          onClick={() => setShowEmailTest(true)}
          className="fixed top-4 left-4 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-lg text-sm font-semibold z-50"
        >
          Test Email System
        </button>
      )}
    </div>
  )
}
