import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Youtube, Instagram, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/30 transition-colors duration-300'

const tags = ['Live showcase', 'School events', 'Acoustic set', 'Collaboration']

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'drew@revamp365.net',
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Email error:', err)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-32 px-6 md:px-16 lg:px-24 bg-slate-950 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      {/* Bloom */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217,70,239,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-3"
          >
            <div className="w-8 h-[2px] bg-fuchsia-500" />
            <span className="text-fuchsia-500 font-mono tracking-widest text-[10px] uppercase">
              Booking & inquiries
            </span>
            <div className="w-8 h-[2px] bg-fuchsia-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white italic uppercase tracking-tighter"
          >
            Get in touch
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-7 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] relative shadow-xl shadow-black/20"
          >
            <h3 className="text-lg md:text-xl font-serif font-bold italic uppercase tracking-tighter text-white mb-6 md:mb-8 flex items-center gap-3">
              <MessageSquare size={18} className="text-fuchsia-500 shrink-0" aria-hidden />
              Send a message
            </h3>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 flex items-center justify-center mx-auto mb-5">
                  <Send size={18} className="text-fuchsia-400" />
                </div>
                <p className="text-white font-medium text-base mb-2">
                  Message sent
                </p>
                <p className="text-slate-500 text-sm">
                  Thanks — we’ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-fuchsia-400/90 hover:text-fuchsia-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs text-slate-400">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs text-slate-400">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs text-slate-400">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={inputClass}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event or question..."
                    rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-6 py-4 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-fuchsia-950/30"
                >
                  <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-3 font-bold uppercase tracking-[0.12em] text-[11px] text-white">
                    <Send size={13} aria-hidden />
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8 md:gap-0 md:space-y-10"
          >
            {/* Social links */}
            <div>
              <h4 className="text-white/50 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                Social
              </h4>
              <div className="flex gap-6">
                <button
                  onClick={() => window.open('https://www.youtube.com/@MiaEF10', '_blank')}
                  className="flex items-center gap-2 group/link"
                >
                  <Youtube size={18} className="text-white group-hover/link:text-fuchsia-500 transition-colors" />
                  <span className="text-[10px] font-mono tracking-widest text-white/50 group-hover/link:text-fuchsia-500 transition-colors">
                    YOUTUBE
                  </span>
                </button>
                <button
                  onClick={() => window.open('https://www.instagram.com/miaamusic_/', '_blank')}
                  className="flex items-center gap-2 group/link"
                >
                  <Instagram size={18} className="text-white group-hover/link:text-fuchsia-500 transition-colors" />
                  <span className="text-[10px] font-mono tracking-widest text-white/50 group-hover/link:text-fuchsia-500 transition-colors">
                    INSTAGRAM
                  </span>
                </button>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">
                Availability
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Currently accepting inquiries for live performances, school events, and creative
                collaborations. Please reach out at least 2 weeks in advance.
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-fuchsia-500/8 border border-fuchsia-500/25 text-fuchsia-300/95 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="pt-5 border-t border-white/8">
              <p className="text-sm text-slate-500">
                Inquiries are typically answered within a few business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
