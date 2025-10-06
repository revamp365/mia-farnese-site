import { Music, Youtube, Instagram, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Mia Farnese</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A rising young artist with a passion for music, bringing acoustic soul 
              and heartfelt performances to audiences everywhere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@MiaEF10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/miaamusic_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@mia-farnese.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#music" className="text-muted-foreground hover:text-primary transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>contact@mia-farnese.com</p>
              <p>United States</p>
              <p className="text-sm">
                Available for school events,<br />
                talent shows, and more
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Mia Farnese. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for music lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
