'use client';

import { Dumbbell, Flame, Building2, Zap, User, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    desc: 'Build raw power and muscle with progressive overload programming and free-weight fundamentals.',
    image: '/images/pexels-1552103.jpg',
  },
  {
    icon: Flame,
    title: 'Fat Loss',
    desc: 'High-intensity metabolic conditioning designed to torch calories and reveal your leanest physique.',
    image: '/images/pexels-4753986.jpg',
  },
  {
    icon: Building2,
    title: 'Body Building',
    desc: 'Hypertrophy-focused splits and isolation techniques to sculpt symmetry and serious size.',
    image: '/images/pexels-17840.jpg',
  },
  {
    icon: Zap,
    title: 'Cross Training',
    desc: 'Functional, multi-modal workouts that build endurance, agility, and total-body athleticism.',
    image: '/images/pexels-4761352.jpg',
  },
  {
    icon: User,
    title: 'Personal Training',
    desc: '1-on-1 coaching with a dedicated trainer who builds every session around your goals.',
    image: '/images/pexels-6456126.jpg',
  },
  {
    icon: Heart,
    title: 'Cardio',
    desc: 'Premium treadmills, bikes, and rowers for heart health, stamina, and efficient fat burn.',
    image: '/images/pexels-4753993.jpg',
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#FF2E2E]/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programs"
          title={<>Train For <span className="text-gradient-red">Every Goal.</span></>}
          description="From first-time lifters to seasoned athletes, our science-backed programs meet you exactly where you are."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} direction="up">
              <div className="group relative h-80 rounded-2xl overflow-hidden gradient-border">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                <div className="absolute inset-0 bg-[#FF2E2E]/0 group-hover:bg-[#FF2E2E]/10 transition-colors duration-500" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <div className="h-12 w-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <p.icon className="h-5 w-5 text-[#FF2E2E]" />
                  </div>
                  <h3 className="font-heading text-2xl uppercase tracking-wide text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
