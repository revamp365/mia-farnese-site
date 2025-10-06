import { useState } from 'react'
import { Menu, X, Music, Instagram, Youtube } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Mia Farnese</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
