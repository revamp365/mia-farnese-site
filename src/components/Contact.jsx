import { useState } from 'react'
import { Mail, Phone, MapPin, Calendar, Music as MusicIcon, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email notification using EmailJS SDK
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'drew@revamp365.net'
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )

      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to book Mia for your event or have questions about her music? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-effect border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event or question..."
                    rows={6}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 text-white placeholder:text-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 disabled:opacity-50"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Booking */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="text-white font-medium">mia@mia-farnese.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Phone</p>
                    <p className="text-white font-medium">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Location</p>
                    <p className="text-white font-medium">Available for events nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-pink-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-primary" />
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MusicIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Performance Types</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• School talent shows and competitions</li>
                        <li>• Community events and festivals</li>
                        <li>• Private parties and celebrations</li>
                        <li>• Fundraising events and galas</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Availability</h4>
                      <p className="text-white/80 text-sm">
                        Mia is available for bookings on weekends and during school breaks. 
                        Please contact us at least 2 weeks in advance for event planning.
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-black font-bold"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    const form = element?.querySelector('form')
                    form?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
