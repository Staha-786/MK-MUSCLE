'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

const images = [
  {
    src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gym floor',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Strength training',
  },
  {
    src: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Conditioning',
  },
  {
    src: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cross training',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4753993/pexels-photo-4753993.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cardio area',
  },
  {
    src: 'https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bodybuilding',
  },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Step Inside <span className="text-gradient-red">MK Muscle.</span></>}
          description="A premium space designed for serious training. Take a look around."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.06} direction="scale">
              <button
                onClick={() => setIndex(i)}
                className={cn(
                  'group relative w-full h-full overflow-hidden rounded-2xl gradient-border block',
                  img.span
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="rounded-full glass px-4 py-2 text-xs text-white uppercase tracking-wider">View</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={close}
          >
            <button onClick={close} className="absolute top-6 right-6 p-3 text-white/70 hover:text-white" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 p-3 text-white/70 hover:text-white" aria-label="Previous">
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.img
              key={index}
              src={images[index].src}
              alt={images[index].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 p-3 text-white/70 hover:text-white" aria-label="Next">
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
