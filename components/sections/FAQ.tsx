'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

const faqs = [
  {
    q: 'Where is MK Muscle located?',
    a: 'We are located in DHA Phase 2, Karachi. You can find us easily on Google Maps — just search "MK Muscle" and follow the 5.0 rated pin.',
  },
  {
    q: 'Do I need to be experienced to join?',
    a: 'Not at all. Our trainers work with complete beginners and seasoned athletes alike. Every program is tailored to your current fitness level and goals.',
  },
  {
    q: 'Can I try the gym before joining?',
    a: 'Yes! We offer a free trial session for all new members. Book yours through the contact form or WhatsApp and we\'ll set it up for you.',
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday to Saturday from 6:00 AM to 11:00 PM. Friday hours are 8:00 AM to 12:00 PM and 4:00 PM to 11:00 PM. We are closed on Sundays.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes. Our Premium membership includes 4 personal training sessions per month. You can also book additional 1-on-1 sessions with any of our certified trainers.',
  },
  {
    q: 'Is there a separate area for women?',
    a: 'We provide dedicated ladies-only hours and our female trainers ensure a comfortable experience for all our female members throughout the day.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions? <span className="text-gradient-red">Answered.</span></>}
          description="Everything you need to know before your first session."
        />

        <Reveal delay={0.2}>
          <div className="mt-14">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card rounded-2xl border-none px-6 data-[state=open]:red-glow transition-shadow"
                >
                  <AccordionTrigger className="text-left font-heading text-lg uppercase tracking-wide text-white hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
