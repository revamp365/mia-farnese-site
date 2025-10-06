import { Play, Music as MusicIcon, Guitar } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg smoke-effect pt-20 overflow-hidden">
      {/* Background Image - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.imgur.com/J7GCxTv.png')`,
          backgroundPosition: 'center center'
        }}
      >
        {/* Desktop Background - Hidden on mobile */}
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.imgur.com/xqXiC44.png')`,
            backgroundPosition: 'center center'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <p className="text-primary text-lg font-medium mb-4">Meet the artist: </p>
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Mia Farnese
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Music only makes me stronger. Music speaks to the heart in ways words cannot express.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-bold px-12 py-4 text-lg rounded-none"
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
              >
                <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe @MiaEF10
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black font-bold px-12 py-4 text-lg rounded-none"
                onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
              >
                <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @miaamusic_
              </Button>
            </div>
          </div>
          
          {/* Video Slideshow */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Video slideshow */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://i.imgur.com/hzzt3ip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Achievement Badges */}
              <div className="absolute -top-6 -left-6 glass-effect rounded-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1st</div>
                  <div className="text-xs text-white/80">7th Grade</div>
                  <div className="text-xs text-white/80">Talent Show</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6th</div>
                  <div className="text-xs text-white/80">Grade</div>
                  <div className="text-xs text-white/80">First Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
