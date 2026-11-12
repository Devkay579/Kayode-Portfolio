import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNestjs, SiPrisma,
  SiTailwindcss, SiFramer, SiPostgresql, SiNodedotjs, SiAdobephotoshop,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type Skill = { name: string; icon: IconType; color: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Backend & data',
    skills: [
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    ],
  },
  {
    title: 'Design',
    skills: [{ name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' }],
  },
];

const Skills = () => (
  <section id="skills" className="section bg-paper-deep">
    <div className="page">
      <SectionHeading index="02" label="Skills" title="The toolkit" />

      <div className="space-y-12">
        {groups.map((group, g) => (
          <div key={group.title} className="grid md:grid-cols-[12rem_1fr] gap-5 md:gap-8">
            <SectionWrapper delay={g * 0.05}>
              <h3 className="font-display text-xl text-ink md:pt-4">{group.title}</h3>
            </SectionWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <SectionWrapper key={skill.name} delay={index * 0.04}>
                    <motion.div
                      whileHover={{ rotate: 0, y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="relative bg-paper-cream rounded-xl px-4 pt-6 pb-4 border border-ink/[0.06] border-l-4 border-l-forest shadow-md shadow-ink/5 text-center"
                      style={{ rotate: index % 2 === 0 ? -1 : 1 }}
                    >
                      {/* Pushpin */}
                      <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-forest/70 rounded-full shadow ring-2 ring-paper-cream" />
                      <Icon className="w-9 h-9 mx-auto mb-3" style={{ color: skill.color }} />
                      <span className="text-sm font-semibold text-ink">{skill.name}</span>
                    </motion.div>
                  </SectionWrapper>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
