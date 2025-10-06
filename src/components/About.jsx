import { Award, Music, Guitar, Star } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

export default function About() {
  const achievements = [
    {
      year: "2024",
      title: "7th Grade Talent Show",
      description: "First Place Winner",
      icon: Award,
      highlight: true
    },
    {
      year: "2023",
      title: "6th Grade Talent Show",
      description: "First Performance",
      icon: Music,
      highlight: false
    },
    {
      year: "2024",
      title: "Guitar Journey",
      description: "Picked up acoustic guitar",
      icon: Guitar,
      highlight: false
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Mia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A young artist with a passion for music and a voice that captivates audiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Her Musical Journey</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At just 13 years old, Mia Farnese has already made her mark in the world of music. 
                What started as a passion for singing has evolved into a multi-faceted musical journey 
                that continues to inspire those around her.
              </p>
              <p>
                Her first performance at the 6th grade talent show was just the beginning. The spark 
                truly ignited when she took first place at the 7th grade talent show, proving that 
                her voice has the power to move audiences and win hearts.
              </p>
              <p>
                In the past year, Mia has expanded her musical horizons by picking up the acoustic guitar, 
                adding another dimension to her already impressive vocal talents. As she prepares for 
                her 8th grade talent show, there's no doubt she'll continue to amaze with her growing 
                skills and undeniable stage presence.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <p className="text-muted-foreground">Mia Farnese</p>
                <p className="text-sm text-muted-foreground">Performance Photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Musical Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`relative ${achievement.highlight ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    achievement.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{achievement.year}</div>
                  <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                  {achievement.highlight && (
                    <Badge className="mt-3 bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Winner
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
