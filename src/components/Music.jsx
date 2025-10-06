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
    <section id="music" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">Music & Performances</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience Mia's musical journey through her performances and recordings
          </p>
        </div>

        {/* YouTube Channel CTA */}
        <div className="mb-20">
          <Card className="glass-effect border-red-500/30 bg-gradient-to-r from-red-900/20 to-red-800/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Subscribe to Mia's YouTube Channel</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                Follow Mia's musical journey and be the first to see new performances, 
                covers, and original music as she continues to grow as an artist.
              </p>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg rounded-none"
                onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
              >
                <Youtube className="h-6 w-6 mr-3" />
                Visit YouTube Channel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {performances.map((performance, index) => (
            <Card key={index} className="group glass-effect hover:scale-105 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-t-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-black" />
                    </div>
                    <p className="text-sm text-white/80">Video Preview</p>
                  </div>
                </div>
                <CardTitle className="text-xl text-white px-6">{performance.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-white/80 mb-6">{performance.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-white/30 text-white">{performance.type}</Badge>
                  <span className="text-sm text-white/60">{performance.year}</span>
                </div>
                <div>
                  <Badge className="w-full justify-center bg-primary text-black font-bold">
                    <MusicIcon className="h-4 w-4 mr-2" />
                    {performance.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Integration */}
        <Card className="glass-effect border-pink-500/30 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Headphones className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">Follow Mia on Instagram</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get behind-the-scenes content, practice sessions, and updates on Mia's musical journey. 
              See her progress as she prepares for upcoming performances.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-12 py-4 text-lg rounded-none"
              onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
            >
              <Headphones className="h-6 w-6 mr-3" />
              Follow @miaamusic_
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
