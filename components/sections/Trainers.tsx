'use client';

import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const trainers = [
  {
    name: 'Hamza Khan',
    specialization: 'Strength & Powerlifting',
    image: 'https://images.pexels.com/photos/6456126/pexels-photo-6456126.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Ayesha Siddiqui',
    specialization: 'Fat Loss & Conditioning',
    image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Usman Tariq',
    specialization: 'Bodybuilding & Hypertrophy',
    image: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Zara Malik',
    specialization: 'Functional & Mobility',
    image: 'https://images.pexels.com/photos/4944972/pexels-photo-4944972.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Team"
          title={<>Meet Your <span className="text-gradient-red">Coaches.</span></>}
          description="Certified, experienced, and obsessed with your progress. Our trainers turn goals into results."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} direction="up">
              <div className="group relative rounded-2xl overflow-hidden gradient-border">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl uppercase tracking-wide text-white">{t.name}</h3>
                  <p className="text-sm text-[#FF2E2E] mt-1">{t.specialization}</p>
                  <div className="mt-4 flex gap-3 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {[Instagram, Facebook, Linkedin].map((Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        className="h-9 w-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF2E2E]/40 transition-colors"
                        aria-label="Social link"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
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
