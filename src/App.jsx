import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
// import Music from './components/Music'
// import Gallery from './components/Gallery'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Music />
        <Gallery />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
