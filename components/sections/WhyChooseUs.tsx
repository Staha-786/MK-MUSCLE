'use client';

import { Award, Dumbbell, Calendar, Apple, Sparkles, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    desc: 'Internationally certified personal trainers who craft plans around your body and goals.',
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    desc: 'Top-of-the-line strength and cardio machines maintained to commercial-grade standards.',
  },
  {
    icon: Calendar,
    title: 'Flexible Membership',
    desc: 'Monthly, quarterly, and annual plans designed to fit your schedule and budget.',
  },
  {
    icon: Apple,
    title: 'Nutrition Guidance',
    desc: 'Personalized meal plans and nutrition coaching to fuel your transformation.',
  },
  {
    icon: Sparkles,
    title: 'Clean Environment',
    desc: 'A spotless, hygienic, air-conditioned space that makes every session a pleasure.',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'Data-tracked progress and milestone reviews keep you moving toward real outcomes.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why MK Muscle"
          title={<>Built Different. <span className="text-gradient-red">Built For Results.</span></>}
          description="Every detail of our facility and coaching is engineered to help you train harder, recover smarter, and see real progress."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} direction="up">
              <div className="group gradient-border rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 bg-[#FF2E2E] blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:from-[#FF2E2E]/20 group-hover:to-[#E50914]/10 transition-colors">
                    <f.icon className="h-6 w-6 text-[#FF2E2E]" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2 uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
