import { Music as MusicIcon, Camera, Star, Play, Award } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export default function Gallery() {
  const photos = [
    {
      id: 1,
      title: "7th Grade Talent Show Winner",
      description: "The moment that changed everything - first place performance",
      category: "Performance",
      highlight: true,
      image: "https://i.imgur.com/J7GCxTv.png"
    },
    {
      id: 2,
      title: "6th Grade Debut Performance",
      description: "Where the musical journey began - her very first stage appearance",
      category: "Performance",
      highlight: false,
      image: "https://i.imgur.com/GA9ZfgG.jpeg"
    },
    {
      id: 3,
      title: "Acoustic Guitar Practice",
      description: "Behind the scenes - learning to accompany her beautiful voice",
      category: "Behind the Scenes",
      highlight: false,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "8th Grade Preparation",
      description: "Getting ready for the next big performance with guitar and vocals",
      category: "Upcoming",
      highlight: true,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Studio Session",
      description: "Recording new material and perfecting her sound",
      category: "Recording",
      highlight: false,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Award Ceremony",
      description: "Celebrating her first place win at the talent show",
      category: "Achievement",
      highlight: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Capturing the magical moments from Mia's musical journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <Card key={photo.id} className={`glass-effect group hover:scale-105 transition-all duration-300 ${photo.highlight ? 'ring-2 ring-primary/50' : ''}`}>
              <CardContent className="p-0">
                <div className="aspect-square bg-cover bg-center rounded-t-lg relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${photo.image}')`,
                      backgroundPosition: 'center center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-black" />
                      </div>
                    </div>
                    {photo.highlight && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-black font-bold">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{photo.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`${photo.highlight ? 'border-primary text-primary' : 'border-white/30 text-white/80'}`}
                    >
                      {photo.category}
                    </Badge>
                  </div>
                  <p className="text-white/80 text-sm">{photo.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-pink-500/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-white/80 mb-6">
                Follow Mia on social media for the latest photos, videos, and behind-the-scenes content!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
                  onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  YouTube Channel
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-3"
                  onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Instagram Feed
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}