'use client';

import { Dumbbell, Instagram, Facebook, Linkedin, MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '@/lib/constants';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[#FF2E2E]/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF2E2E] to-[#E50914] flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-2xl tracking-wider text-white">MK MUSCLE</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Karachi's premier fitness destination. Where transformation isn't a promise it's a proven outcome.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaWhatsapp, href: WHATSAPP_LINK, label: 'WhatsApp' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-10 w-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF2E2E]/40 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-[#FF2E2E] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">Working Hours</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex justify-between"><span>Mon – Thu</span><span className="text-white/70">6AM – 11PM</span></li>
              <li className="flex justify-between"><span>Fri</span><span className="text-white/70">8AM–12PM, 4–11PM</span></li>
              <li className="flex justify-between"><span>Sat</span><span className="text-white/70">6AM – 11PM</span></li>
              <li className="flex justify-between"><span>Sun</span><span className="text-white/30">Closed</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#FF2E2E] mt-0.5 shrink-0" />
                Plot No. 18-C, 05 Sunset Ln, Phase 02 Extension, DHA, Karachi
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#FF2E2E] shrink-0" />
                +92 335 1225538
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#FF2E2E] shrink-0" />
                info@mkmuscle.pk
              </li>
            </ul>
            {/* <a
              href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20MK%20Muscle%20Gym"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] transition-all hover:shadow-[0_0_30px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a> */}
          </div>
        </div>

        {/* Find Us — map */}
        {/* <div className="mt-16">
          <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-5 text-center sm:text-left">Find Us</h4>
          <div className="rounded-2xl overflow-hidden gradient-border h-64 w-full">
            <iframe
              title="MK Muscle gym location"
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
        </div> */}

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MK Muscle. All rights reserved. Crafted by ST.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-gray/50 hover:text-white transition-colors"
          >
            Back to top
            <span className="h-8 w-8 rounded-full glass border border-white/20 flex items-center justify-center">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
