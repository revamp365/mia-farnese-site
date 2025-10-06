import { Camera, Award, Music, Users } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

export default function Gallery() {
  const galleryItems = [
    {
      title: "7th Grade Talent Show Victory",
      description: "Mia accepting her first place award",
      category: "Awards",
      icon: Award,
      placeholder: "Award Ceremony"
    },
    {
      title: "6th Grade Debut Performance",
      description: "Mia's very first stage appearance",
      category: "Performances",
      icon: Music,
      placeholder: "Stage Performance"
    },
    {
      title: "Practice Sessions",
      description: "Behind-the-scenes guitar and vocal practice",
      category: "Behind the Scenes",
      icon: Camera,
      placeholder: "Practice Photo"
    },
    {
      title: "School Events",
      description: "Mia performing at various school functions",
      category: "Live Shows",
      icon: Users,
      placeholder: "Live Performance"
    },
    {
      title: "Music Studio Time",
      description: "Recording and creating music",
      category: "Studio",
      icon: Music,
      placeholder: "Studio Session"
    },
    {
      title: "Future Performances",
      description: "Upcoming 8th grade talent show preparation",
      category: "Coming Soon",
      icon: Award,
      placeholder: "Coming Soon"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through Mia's musical performances and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.placeholder}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">More Photos Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're constantly updating the gallery with new photos from Mia's performances, 
                practice sessions, and musical journey. Check back regularly for updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Music className="h-4 w-4 mr-2" />
                  Performance Photos
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Achievement Moments
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Camera className="h-4 w-4 mr-2" />
                  Behind the Scenes
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
