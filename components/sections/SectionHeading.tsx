import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              'inline-flex items-center gap-2 mb-5',
              align === 'center' && 'justify-center'
            )}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#FF2E2E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF2E2E]">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#FF2E2E]" />
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wide text-white leading-[0.95]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
