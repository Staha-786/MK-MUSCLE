'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Plot No. 18-C, 05 Sunset Ln, Phase 02 Extension, DHA, Karachi' },
  { icon: Phone, label: 'Phone', value: '+92 3351225538' },
  { icon: Mail, label: 'Email', value: 'info@mkmuscle.pk' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 6AM–11PM · Fri: 8AM–12PM, 4PM–11PM' },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-[#FF2E2E]/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Start Your <span className="text-gradient-red">Transformation.</span></>}
          description="Book your free trial, ask a question, or just say hello. We respond within hours."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Left: info + map */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="glass-card rounded-2xl p-5">
                    <c.icon className="h-5 w-5 text-[#FF2E2E] mb-3" />
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{c.label}</div>
                    <div className="text-sm text-white/80">{c.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="right">
              <a
                href="https://wa.me/923351225538?text=Hi%2C%20I%20am%20interested%20in%20MK%20Muscle%20Gym"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] transition-all hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)]"
              >
                <FaWhatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={0.3} direction="right">
              <div className="rounded-2xl overflow-hidden gradient-border h-72">
                <iframe
                  title="MK Muscle location"
                  src="https://www.google.com/maps?q=Plot+No.+18-C,+05+Sunset+Ln,+Phase+02+Extension,+DHA,+Karachi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2E2E]/50 focus:ring-2 focus:ring-[#FF2E2E]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2E2E]/50 focus:ring-2 focus:ring-[#FF2E2E]/20 transition-all"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2E2E]/50 focus:ring-2 focus:ring-[#FF2E2E]/20 transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2E2E]/50 focus:ring-2 focus:ring-[#FF2E2E]/20 transition-all resize-none"
                  placeholder="I'd like to book a free trial..."
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF2E2E] to-[#E50914] red-glow-hover transition-all"
              >
                {submitted ? 'Message Sent!' : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-center text-sm text-[#FF2E2E]">
                  Thanks! We'll be in touch within a few hours.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
