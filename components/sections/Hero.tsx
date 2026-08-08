'use client';

import { motion } from 'framer-motion';
import { Star, Users, Dumbbell, Award, ChevronRight, Play, MessageCircle } from 'lucide-react';
import { Counter } from '@/components/motion/Counter';
import { WHATSAPP_LINK } from '@/lib/constants';

const stats = [
  { icon: Star, label: 'Google Rating', value: 5, suffix: '.0', decimals: 1 },
  { icon: Users, label: 'Happy Reviews', value: 153, suffix: '+' },
  { icon: Award, label: 'Expert Trainers', value: 12, suffix: '+' },
  { icon: Dumbbell, label: 'Premium Machines', value: 40, suffix: '+' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="MK Muscle gym interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#FF2E2E]/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-[#E50914]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#FF2E2E] text-[#FF2E2E]" />
              ))}
            </div>
            <span className="text-xs font-medium text-white/80 tracking-wide">
              5.0 Rated · 153+ Google Reviews · DHA Phase 2, Karachi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wide text-white"
          >
            Transform Your <br />
            Body. Transform <br />
            <span className="text-gradient-red">Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Karachi's premier fitness destination in DHA Phase 2. Certified personal
            trainers, premium equipment, and programs engineered to build strength,
            burn fat, and forge the best version of you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF2E2E] to-[#E50914] red-glow red-glow-hover transition-all"
            >
              Join Now
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              Book Free Trial
            </a>
            {/* <a
              href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20MK%20Muscle%20Gym"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] transition-all hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a> */}
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-5 hover:border-[#FF2E2E]/40 transition-colors"
              >
                <s.icon className="h-5 w-5 text-[#FF2E2E] mb-3" />
                <div className="font-display text-3xl text-white tracking-wide">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-[#FF2E2E] to-transparent" />
      </motion.div>
    </section>
  );
}
