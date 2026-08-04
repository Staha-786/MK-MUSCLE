'use client';

import { Check, Crown, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '6,000',
    period: '/month',
    desc: 'Perfect to get started on your fitness journey.',
    features: ['Full gym floor access', 'Locker room access', '2 group classes / week', 'Fitness assessment'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '10,000',
    period: '/month',
    desc: 'Our most popular plan for serious progress.',
    features: ['Everything in Basic', 'Unlimited group classes', 'Personalized workout plan', 'Nutrition guide', 'Monthly progress review'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '16,000',
    period: '/month',
    desc: 'The complete transformation experience.',
    features: ['Everything in Standard', '4 PT sessions / month', 'Custom nutrition plan', 'Body composition analysis', 'Priority booking', 'Recovery & sauna access'],
    highlighted: true,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Membership"
          title={<>Choose Your <span className="text-gradient-red">Commitment.</span></>}
          description="Transparent pricing. No hidden fees. Cancel anytime. Every plan includes access to our premium facility in DHA Phase 2."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} direction="up">
              <div
                className={cn(
                  'relative h-full rounded-3xl p-8 flex flex-col',
                  p.highlighted
                    ? 'gradient-border red-glow bg-gradient-to-b from-[#FF2E2E]/10 to-transparent lg:-mt-4 lg:mb-4'
                    : 'glass-card'
                )}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF2E2E] to-[#E50914] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    <Crown className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-2xl uppercase tracking-wide text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/50">{p.desc}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-sm text-white/60">PKR</span>
                  <span className="font-display text-5xl text-white tracking-wide">{p.price}</span>
                  <span className="text-sm text-white/50">{p.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        p.highlighted ? 'bg-[#FF2E2E]/20' : 'bg-white/5')}>
                        <Check className="h-3 w-3 text-[#FF2E2E]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all',
                    p.highlighted
                      ? 'bg-gradient-to-r from-[#FF2E2E] to-[#E50914] text-white red-glow-hover'
                      : 'glass text-white hover:bg-white/10'
                  )}
                >
                  {p.highlighted ? <Sparkles className="h-4 w-4" /> : null}
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-white/40">
            All plans require a one-time registration fee of PKR 2,000. Student discounts available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
