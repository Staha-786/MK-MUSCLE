'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const reviews = [
  {
    name: 'Faisal Ahmed',
    role: 'Member · 1 year',
    text: 'Hands down the best gym in DHA. The equipment is top tier and the trainers actually know what they\'re doing. I\'ve never been in better shape.',
    rating: 5,
  },
  {
    name: 'Mariam Hassan',
    role: 'Member · 8 months',
    text: 'As a woman, I was nervous about joining a gym. MK Muscle made me feel completely comfortable. The environment is clean, respectful, and motivating.',
    rating: 5,
  },
  {
    name: 'Omar Sheikh',
    role: 'Member · 2 years',
    text: 'I\'ve tried every gym in Karachi. Nothing comes close to MK Muscle. The personal training program took my strength to a level I didn\'t think possible.',
    rating: 5,
  },
  {
    name: 'Hira Javed',
    role: 'Member · 6 months',
    text: 'Lost 12kg in 4 months with their fat loss program. The nutrition guidance was the missing piece I always needed. Forever grateful to the team.',
    rating: 5,
  },
  {
    name: 'Rehan Malik',
    role: 'Member · 1.5 years',
    text: 'The community here is unreal. Everyone pushes each other. The trainers treat you like family and celebrate every milestone with you.',
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#FF2E2E]/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved By <span className="text-gradient-red">The Community.</span></>}
          description="153+ five-star reviews and counting. Here's what our members say."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-3xl p-10 md:p-14 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[active].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FF2E2E] text-[#FF2E2E]" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-white/85 leading-relaxed font-light italic">
                  "{reviews[active].text}"
                </p>
                <div className="mt-8">
                  <div className="font-heading text-lg uppercase tracking-wide text-white">{reviews[active].name}</div>
                  <div className="text-sm text-[#FF2E2E] mt-1">{reviews[active].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-gradient-to-r from-[#FF2E2E] to-[#E50914]' : 'w-2 bg-white/20'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-11 w-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
