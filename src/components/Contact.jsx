import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Youtube, Instagram, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const tags = [
  "Live performances",
  "School events",
  "Acoustic sets",
  "Collaborations",
];
const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  inquiry: "Booking",
  eventDate: "",
  location: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `${formData.inquiry}: ${formData.subject}`,
          message: [
            `Inquiry: ${formData.inquiry}`,
            ...(formData.inquiry === "Booking"
              ? [
                  `Event date: ${formData.eventDate || "Not decided"}`,
                  `Location: ${formData.location || "Not decided"}`,
                ]
              : []),
            "",
            formData.message,
          ].join("\n"),
          to_email: "drew@revamp365.net",
        },
        import.meta.env.VITE_EMAILJS_USER_ID,
      );
      setSubmitted(true);
      setFormData(emptyForm);
    } catch (err) {
      setError(
        "Your message could not be sent. Your details are still here—please try again, or reach Mia on Instagram.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      {/* Bloom */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(217,70,239,0.04) 0%, transparent 70%)",
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
            <span className="text-fuchsia-500 font-mono tracking-widest text-[12px] uppercase">
              Bookings & hello
            </span>
            <div className="w-8 h-[2px] bg-fuchsia-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
          >
            Get in Touch
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

            <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8 flex items-center gap-3">
              <MessageSquare size={18} className="text-fuchsia-500 shrink-0" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="py-10 text-center" role="status">
                <div className="w-10 h-10 border border-fuchsia-500/40 flex items-center justify-center mx-auto mb-5">
                  <Send size={16} className="text-fuchsia-400" />
                </div>
                <p className="text-white font-mono text-sm uppercase tracking-widest mb-2">
                  Message sent
                </p>
                <p className="text-slate-400 text-xs font-mono">
                  Thanks for reaching out to Mia’s team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[12px] uppercase tracking-widest text-fuchsia-500/50 hover:text-fuchsia-400 transition-colors font-mono"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="booking-form"
                aria-busy={isSubmitting}
              >
                <label>
                  What brings you here?
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                  >
                    <option>Booking</option>
                    <option>Collaboration</option>
                    <option>General message</option>
                  </select>
                </label>
                <div className="booking-row">
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                {formData.inquiry === "Booking" && (
                  <fieldset>
                    <legend>
                      A few event details <span>(optional)</span>
                    </legend>
                    <div className="booking-row">
                      <label>
                        Event date
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Town or venue
                        <input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Where is the event?"
                        />
                      </label>
                    </div>
                    <p className="booking-hint">
                      Still planning? Leave these blank and tell us what you
                      have in mind.
                    </p>
                  </fieldset>
                )}
                <label>
                  Subject
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={
                      formData.inquiry === "Booking"
                        ? "e.g. Acoustic set for a private event"
                        : "What would you like to talk about?"
                    }
                  />
                </label>
                <label>
                  Your message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder={
                      formData.inquiry === "Booking"
                        ? "Tell us about the event, the audience, and how long you would like Mia to play."
                        : "Leave a note for Mia’s team."
                    }
                  />
                </label>
                {error && (
                  <p className="booking-error" role="alert">
                    {error}{" "}
                    <a
                      href="https://www.instagram.com/miaamusic_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Instagram ↗
                    </a>
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-action w-full"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
                <p className="booking-hint">
                  Your note goes to Mia’s team. A booking is confirmed only
                  after you hear back.
                </p>
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
              <h4 className="text-white/40 font-mono text-[12px] uppercase tracking-[0.2em] mb-4">
                Follow Mia
              </h4>
              <div className="flex gap-6">
                <button
                  onClick={() =>
                    window.open("https://www.youtube.com/@MiaEF10", "_blank")
                  }
                  className="flex items-center gap-2 group/link"
                >
                  <Youtube
                    size={18}
                    className="text-white group-hover/link:text-fuchsia-500 transition-colors"
                  />
                  <span className="text-[12px] font-mono tracking-widest text-white/50 group-hover/link:text-fuchsia-500 transition-colors">
                    YOUTUBE
                  </span>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/miaamusic_/",
                      "_blank",
                    )
                  }
                  className="flex items-center gap-2 group/link"
                >
                  <Instagram
                    size={18}
                    className="text-white group-hover/link:text-fuchsia-500 transition-colors"
                  />
                  <span className="text-[12px] font-mono tracking-widest text-white/50 group-hover/link:text-fuchsia-500 transition-colors">
                    INSTAGRAM
                  </span>
                </button>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 md:mb-4">
                Bring music to your event
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Currently accepting inquiries for live performances, school
                events, and creative collaborations. Please reach out at least 2
                weeks in advance.
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-fuchsia-500/5 border border-fuchsia-500/20 text-fuchsia-500 text-[12px] uppercase font-mono tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="pt-5 border-t border-white/5">
              <p className="text-[12px] font-mono text-slate-400 uppercase tracking-widest">
                Booking inquiries:{" "}
                <span className="text-emerald-500 animate-pulse">Welcome</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
