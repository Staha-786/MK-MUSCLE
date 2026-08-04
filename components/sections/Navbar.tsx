'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass py-3' : 'py-5 bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF2E2E] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF2E2E] to-[#E50914] flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="leading-none">
              <span className="block font-display text-2xl tracking-wider text-white">MK MUSCLE</span>
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">DHA Phase 2 · Karachi</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-[#FF2E2E] to-[#E50914] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/923001234567?text=Hi%2C%20I%20want%20to%20join%20MK%20Muscle%20Gym%2C%20please%20share%20membership%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#FF2E2E] to-[#E50914] red-glow-hover transition-shadow"
            >
              Join Now
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-display text-2xl tracking-wider">MK MUSCLE</span>
              <button onClick={() => setOpen(false)} className="p-2 text-white" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col px-5 gap-2 mt-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-3xl font-heading font-semibold text-white/80 hover:text-white py-3 border-b border-border"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/923001234567?text=Hi%2C%20I%20want%20to%20join%20MK%20Muscle%20Gym%2C%20please%20share%20membership%20details"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF2E2E] to-[#E50914]"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
