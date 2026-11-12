import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Federal University Oye-Ekiti',
    grade: 'Second Class Upper (2:1)',
    period: '2025',
    details: 'Served as a media assistant for the National Association of Computer Science Students (NACOS).',
  },
];

const Education = () => (
  <section id="education" className="section bg-paper-deep">
    <div className="page">
      <SectionHeading index="04" label="Education" title="Foundations" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <SectionWrapper key={edu.degree} delay={index * 0.1}>
            <article className="card relative overflow-hidden p-7 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest to-forest-dark" />
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/10 text-forest">
                  <GraduationCap size={22} />
                </span>
                <span className="font-display text-3xl text-forest/80 leading-none">{edu.period}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight">{edu.degree}</h3>
              <p className="mt-1 font-semibold text-forest">{edu.institution}</p>
              {edu.grade && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-sm text-ink-soft">
                  <Award size={14} className="text-forest" /> {edu.grade}
                </p>
              )}
              <p className="mt-5 text-ink-soft leading-relaxed">{edu.details}</p>
            </article>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
