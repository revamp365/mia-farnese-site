import { Play, Music as MusicIcon, Guitar } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg smoke-effect pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.imgur.com/xqXiC44.png')`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <p className="text-primary text-lg font-medium mb-4">Hello! I am a singer</p>
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
                onClick={() => {
                  const element = document.getElementById('music')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <Play className="h-6 w-6 mr-3" />
                Listen to Music
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black font-bold px-12 py-4 text-lg rounded-none"
                onClick={() => {
                  const element = document.getElementById('gallery')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                View Gallery
              </Button>
            </div>
          </div>
          
          {/* Artist Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div 
                className="aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
                  backgroundPosition: 'center center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Frame */}
              <div className="absolute inset-4 border-2 border-white/30 rounded-2xl"></div>
              
              {/* Achievement Badges */}
              <div className="absolute -top-6 -left-6 glass-effect rounded-xl p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1st</div>
                  <div className="text-xs text-white/80">7th Grade</div>
                  <div className="text-xs text-white/80">Talent Show</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4">
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
      
      {/* Navigation Arrows */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <button 
          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
          onClick={() => {
            const element = document.getElementById('about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <button 
          className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
          onClick={() => {
            const element = document.getElementById('about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
      </div>
    </section>
  )
}
