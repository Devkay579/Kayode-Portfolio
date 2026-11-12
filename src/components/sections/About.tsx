import { useState, useEffect } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const bioLines = [
  '>_ Kayode.init()',
  'Initializing full stack developer...',
  'Location: Lagos, Nigeria',
  'Specialties: React, Nest.js, Interactive UI',
  'Mission: Build websites, applications that think, move, and react',
  'Fun fact: I also design graphics and visual assets in my free time',
];

const facts = [
  { key: 'location', value: 'Lagos, Nigeria' },
  { key: 'specialty', value: 'React, Nest.js, Interactive UI' },
  { key: 'passion', value: 'Interactive storytelling' },
  { key: 'off-hours', value: 'Graphics and visual design' },
];

const About = () => {
  // Count of lines shown; deriving from the array keeps StrictMode's double
  // effect run from duplicating or skipping lines.
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShown((n) => {
        if (n >= bioLines.length) {
          clearInterval(interval);
          return n;
        }
        return n + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="page">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Websites and apps that <em className="italic text-forest">think, move</em> and react.
            </>
          }
          intro="Full-stack developer in Lagos, Nigeria, working across React, Nest.js and interactive UI."
        />

        <div className="grid md:grid-cols-[1.15fr_1fr] gap-6 md:gap-8 items-start">
          <SectionWrapper delay={0.1}>
            <div className="overflow-hidden rounded-2xl bg-ink text-paper shadow-xl shadow-ink/10 font-mono text-[0.8125rem] leading-relaxed">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 bg-[#FF5F57] rounded-full" />
                <span className="w-2.5 h-2.5 bg-[#FEBC2E] rounded-full" />
                <span className="w-2.5 h-2.5 bg-[#28C840] rounded-full" />
                <span className="text-paper/50 ml-3 text-xs">kayode@codex:~$</span>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5 min-h-[13.5rem]">
                {bioLines.slice(0, shown).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={index === 0 ? 'text-[#7FC8A9]' : 'text-paper/85'}
                  >
                    {line}
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-2 h-4 bg-[#7FC8A9] align-middle"
                />
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <dl className="card divide-y divide-ink/[0.07]">
              {facts.map(({ key, value }) => (
                <div key={key} className="flex items-baseline gap-4 px-6 py-5">
                  <dt className="eyebrow w-24 shrink-0 text-[0.6875rem]">{key}</dt>
                  <dd className="text-ink font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
