import type { ReactNode } from 'react';
import SectionWrapper from './SectionWrapper';

interface Props {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Numbered eyebrow + serif display title, shared by every home section. */
const SectionHeading = ({ index, label, title, intro }: Props) => (
  <SectionWrapper>
    <header className="mb-12 md:mb-16 max-w-3xl">
      <p className="eyebrow flex items-center gap-3 mb-4">
        <span>{index}</span>
        <span className="h-px w-8 bg-forest/40" aria-hidden />
        <span>{label}</span>
      </p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg text-ink-muted max-w-2xl">{intro}</p>}
    </header>
  </SectionWrapper>
);

export default SectionHeading;
