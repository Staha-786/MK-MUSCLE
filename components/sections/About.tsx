'use client';

import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Counter } from '@/components/motion/Counter';

const stats = [
  { value: 500, suffix: '+', label: 'Members Transformed' },
  { value: 8, suffix: ' yrs', label: 'Serving Karachi' },
  { value: 100, suffix: '%', label: 'Goal Focused' },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FF2E2E]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden gradient-border">
                <img
                  src="/images/pexels-1552252.jpg"
                  alt="MK Muscle training floor"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 red-glow"
              >
                <div className="font-display text-4xl text-gradient-red tracking-wide">
                  <Counter to={5} decimals={1} suffix='.0' />
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Google Rating</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#FF2E2E]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF2E2E]">
                  About MK Muscle
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wide text-white leading-[0.95]">
                More Than A Gym. <br />
                <span className="text-gradient-red">A Transformation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Founded in the heart of DHA Phase 2, Karachi, MK Muscle was built on a
                single belief — that everyone deserves a space where they feel strong,
                supported, and unstoppable. What started as a neighborhood gym has grown
                into Karachi's most trusted fitness destination, with a 5.0 rating and
                153+ reviews from members who became family.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <Reveal delay={0.3} direction="up">
                <div className="glass-card rounded-2xl p-6">
                  <Target className="h-7 w-7 text-[#FF2E2E] mb-4" />
                  <h3 className="font-heading text-lg uppercase tracking-wide text-white mb-2">Our Mission</h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    To empower every member with elite coaching, premium equipment, and a
                    community that pushes them past their limits.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.4} direction="up">
                <div className="glass-card rounded-2xl p-6">
                  <Eye className="h-7 w-7 text-[#FF2E2E] mb-4" />
                  <h3 className="font-heading text-lg uppercase tracking-wide text-white mb-2">Our Vision</h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    To be Pakistan's most trusted fitness brand — where transformation is
                    not a promise, but a proven outcome.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.5 + i * 0.1}>
                  <div>
                    <div className="font-display text-4xl text-white tracking-wide">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.8}>
              <a
                href="#membership"
                className="group mt-10 inline-flex items-center gap-2 text-white font-semibold"
              >
                Explore Memberships
                <ArrowRight className="h-5 w-5 text-[#FF2E2E] group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
