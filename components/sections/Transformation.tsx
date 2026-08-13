'use client';

import { TrendingUp, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { Counter } from '@/components/motion/Counter';

const transformations = [
  {
    name: 'Ahmed R.',
    duration: '12 weeks',
    lost: 14,
    muscle: 6,
    quote: 'I lost 14kg and finally feel confident again. The trainers at MK Muscle genuinely care.',
    image: '/images/pexels-4944972.jpg',
  },
  {
    name: 'Sana K.',
    duration: '16 weeks',
    lost: 9,
    muscle: 4,
    quote: 'After my second child I thought I\'d never get back in shape. 16 weeks later, I\'m stronger than ever.',
    image: '/images/pexels-3757954.jpg',
  },
  {
    name: 'Bilal M.',
    duration: '24 weeks',
    lost: 18,
    muscle: 10,
    quote: 'The personal training plan was a game changer. I gained real muscle and lost the gut for good.',
    image: '/images/pexels-1552252.jpg',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Transformations Completed' },
  { value: 95, suffix: '%', label: 'Members Hit Their Goals' },
  { value: 12, suffix: ' kg', label: 'Average Fat Lost' },
  { value: 8, suffix: ' kg', label: 'Average Muscle Gained' },
];

export function Transformation() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title={<>Real People. <span className="text-gradient-red">Real Results.</span></>}
          description="Numbers don't lie. These are just a few of the members who rewrote their story at MK Muscle."
        />

        {/* Animated stats */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <TrendingUp className="h-5 w-5 text-[#FF2E2E] mx-auto mb-3" />
                <div className="font-display text-4xl text-white tracking-wide">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} direction="up">
              <div className="group relative h-96 rounded-2xl overflow-hidden gradient-border">
                <img
                  src={t.image}
                  alt={`${t.name} transformation`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-[#FF2E2E]/40" />
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="font-display text-2xl text-gradient-red">
                        -<Counter to={t.lost} />kg
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">Fat</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-2xl text-white">
                        +<Counter to={t.muscle} />kg
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">Muscle</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 italic leading-relaxed mb-3">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg uppercase tracking-wide text-white">{t.name}</span>
                    <span className="text-xs text-white/40">{t.duration}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
