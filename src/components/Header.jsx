import { useState } from 'react'
import { Menu, X, Music as MusicIcon, Instagram, Youtube } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">MF</span>
            </div>
            <span className="text-2xl font-bold text-white">Mia Farnese</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Homepage
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-3 rounded-none"
            >
              Buy Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Music
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://www.youtube.com/@MiaEF10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/miaamusic_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
