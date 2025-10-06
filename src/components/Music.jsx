import { Play, Youtube, Music as MusicIcon, Headphones } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Music() {
  const performances = [
    {
      title: "7th Grade Talent Show - First Place",
      description: "Mia's winning performance that captured the hearts of the audience",
      year: "2024",
      type: "Live Performance",
      status: "Available Soon"
    },
    {
      title: "6th Grade Talent Show - Debut",
      description: "Mia's very first public performance that started it all",
      year: "2023",
      type: "Live Performance",
      status: "Available Soon"
    },
    {
      title: "Acoustic Guitar & Vocals",
      description: "Showcasing her new guitar skills combined with her beautiful voice",
      year: "2024",
      type: "Music Video",
      status: "Coming Soon"
    }
  ]

  return (
    <section id="music" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Music & Performances</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Mia's musical journey through her performances and recordings
          </p>
        </div>

        {/* YouTube Channel CTA */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Subscribe to Mia's YouTube Channel</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Follow Mia's musical journey and be the first to see new performances, 
                covers, and original music as she continues to grow as an artist.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Youtube className="h-5 w-5 mr-2" />
                Visit YouTube Channel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {performances.map((performance, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">Video Preview</p>
                  </div>
                </div>
                <CardTitle className="text-lg">{performance.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{performance.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{performance.type}</Badge>
                  <span className="text-sm text-muted-foreground">{performance.year}</span>
                </div>
                <div className="mt-4">
                  <Badge variant="secondary" className="w-full justify-center">
                    <MusicIcon className="h-3 w-3 mr-1" />
                    {performance.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Integration */}
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Headphones className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Follow Mia on Instagram</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get behind-the-scenes content, practice sessions, and updates on Mia's musical journey. 
              See her progress as she prepares for upcoming performances.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Headphones className="h-5 w-5 mr-2" />
              Follow @miaamusic_
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
