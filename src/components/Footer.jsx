import { Music as MusicIcon, Youtube, Instagram, Mail, Heart } from 'lucide-react'
import { Button } from './ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">MF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mia Farnese</h3>
                <p className="text-white/60 text-sm">Rising Singer & Guitarist</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              A 13-year-old musical prodigy whose voice and guitar skills are captivating audiences everywhere. 
              From talent show winner to rising star, Mia's journey is just beginning.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
              >
                <Youtube className="h-4 w-4 mr-2" />
                YouTube
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-black"
                onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('music')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Music
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('gallery')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-white/80 text-sm">mia@mia-farnese.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MusicIcon className="h-4 w-4 text-primary" />
                <span className="text-white/80 text-sm">Available for bookings</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-white/80 text-sm">Made with passion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} Mia Farnese. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Website designed with love for a rising musical star
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}