import { Award, Music as MusicIcon, Guitar, Star } from 'lucide-react'
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
      icon: MusicIcon,
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
    <section id="about" className="py-24 bg-black relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">Biography</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A young artist with a passion for music and a voice that captivates audiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-white">Her Musical Journey</h3>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
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

          {/* Image */}
          <div className="relative">
            <div 
              className="aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: `url('https://i.imgur.com/GA9ZfgG.jpeg')`,
                backgroundPosition: 'center center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute inset-4 border-2 border-white/30 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-16 text-white">Musical Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`relative glass-effect ${achievement.highlight ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    achievement.highlight 
                      ? 'bg-primary text-black' 
                      : 'bg-white/10 text-white'
                  }`}>
                    <achievement.icon className="h-10 w-10" />
                  </div>
                  <div className="text-lg font-semibold text-primary mb-3">{achievement.year}</div>
                  <h4 className="text-xl font-bold mb-3 text-white">{achievement.title}</h4>
                  <p className="text-white/80 mb-4">{achievement.description}</p>
                  {achievement.highlight && (
                    <Badge className="bg-primary text-black font-bold px-4 py-2">
                      <Star className="h-4 w-4 mr-2" />
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
