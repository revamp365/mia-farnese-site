import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Youtube, Instagram, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const inputClass =
  'w-full px-4 py-3 bg-transparent border border-white/8 text-slate-100 placeholder:text-slate-600 text-sm font-mono focus:outline-none focus:border-fuchsia-500/50 transition-colors duration-300'

const tags = ['Live_Showcase', 'Studio_Guest', 'Acoustic_Set', 'Artist_Collab']

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
              Secure_Line
            </span>
            <div className="w-8 h-[2px] bg-fuchsia-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
          >
            Establish Contact
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-7 md:p-10 border border-white/8 bg-white/[0.01] relative"
          >
            <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-white/15 uppercase tracking-widest">
              MF_COMMS_v1
            </div>

            <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8 flex items-center gap-3">
              <MessageSquare size={18} className="text-fuchsia-500 shrink-0" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-10 h-10 border border-fuchsia-500/40 flex items-center justify-center mx-auto mb-5">
                  <Send size={16} className="text-fuchsia-400" />
                </div>
                <p className="text-white font-mono text-sm uppercase tracking-widest mb-2">
                  Transmission Received
                </p>
                <p className="text-slate-500 text-xs font-mono">
                  We will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] uppercase tracking-widest text-fuchsia-500/50 hover:text-fuchsia-400 transition-colors font-mono"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="// your_name"
                    className={inputClass}
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="// email_address"
                    className={inputClass}
                    required
                  />
                </div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="// subject_line"
                  className={inputClass}
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="// your_message..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-6 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-3 font-bold uppercase tracking-[0.15em] text-[11px] text-white">
                    <Send size={13} />
                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
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
              <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                Signal_Grid
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
                Availability_Matrix
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Currently accepting inquiries for live performances, school events, and creative
                collaborations. Please reach out at least 2 weeks in advance.
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-fuchsia-500/5 border border-fuchsia-500/20 text-fuchsia-500 text-[9px] uppercase font-mono tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="pt-5 border-t border-white/5">
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                Current Status:{' '}
                <span className="text-emerald-500 animate-pulse">Online & Ready</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
