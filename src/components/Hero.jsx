import { Play, Music, Guitar } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="secondary" className="text-sm">
                <Music className="h-3 w-3 mr-1" />
                Singer
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Guitar className="h-3 w-3 mr-1" />
                Guitarist
              </Badge>
              <Badge variant="outline" className="text-sm">
                Age 13
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mia Farnese
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Rising voice with acoustic soul. From talent show victories to musical dreams, 
              discover the journey of a young artist finding her sound.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="h-5 w-5 mr-2" />
                Listen to Music
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Gallery
              </Button>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Music className="h-16 w-16 text-white" />
                </div>
                <p className="text-muted-foreground">Mia Farnese</p>
                <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
              </div>
            </div>
            
            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -left-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1st</div>
                <div className="text-xs text-muted-foreground">7th Grade</div>
                <div className="text-xs text-muted-foreground">Talent Show</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background border rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6th</div>
                <div className="text-xs text-muted-foreground">Grade</div>
                <div className="text-xs text-muted-foreground">First Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
