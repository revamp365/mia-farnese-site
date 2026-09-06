import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Music from "./components/Music";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import EmailTest from "./components/EmailTest";

export default function App() {
  if (new URLSearchParams(window.location.search).get("test") === "email") {
    return (
      <div className="min-h-screen bg-slate-950 py-10">
        <a href="/" className="block text-center text-fuchsia-400 mb-8">
          ← Back to main site
        </a>
        <EmailTest />
      </div>
    );
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Music />
          <About />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <Chat />
      </div>
    </MotionConfig>
  );
}
