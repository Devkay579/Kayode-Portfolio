import SectionWrapper from '../ui/SectionWrapper';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNestjs, SiPrisma,
  SiTailwindcss, SiFramer, SiPostgresql, SiNodedotjs, SiAdobephotoshop
} from 'react-icons/si';



const Skills = () => {

  const skills = useMemo(() => [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer', icon: SiFramer, color: '#0055FF' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
], []);


  return (
    <section id="skills" className="py-20 px-4 bg-[#E8E2D5]">
      <div className="container mx-auto max-w-5xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Skills
          </h2>
        </SectionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <SectionWrapper key={skill.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ rotate: [0, -2, 2, 0], scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-[#FDF8E7] p-4 rounded shadow-lg border-l-4 border-[#2C5F4A] relative"
                  style={{ rotate: index % 2 === 0 ? -1 : 1 }}
                >
                  {/* Pushpin effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full shadow-md" />
                  <div className="text-center">
                    <Icon className="w-10 h-10 mx-auto mb-2" style={{ color: skill.color }} />
                    <span className="text-sm font-medium text-[#2D2D2D]">{skill.name}</span>
                  </div>
                </motion.div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;