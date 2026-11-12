import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Dorman Long Engineering',
    role: 'IT Personnel / NYSC Intern',
    period: 'Present',
    location: 'Lagos, Nigeria',
    description: 'Developing service help desk applications, including asset management, clinic management, and more. Collaborating with the development team on code reviews and optimization.',
    current: true,
  },
  {
    company: 'ULeval',
    role: 'Frontend Engineer Intern',
    period: '06/2024 – 10/2024 & 08/2025 – 11/2025',
    location: 'Lagos, Nigeria',
    description: 'Assisted in developing and maintaining responsive web interfaces using React.js, JavaScript, HTML, and Tailwind CSS. Translated UI/UX designs into functional frontend code, and collaborated with the development team on code reviews, testing, and debugging.',
  },
  {
    company: 'Digital Autonomy IT',
    role: 'Networking Intern',
    period: '06/2023 – 10/2023',
    location: 'Lagos, Nigeria',
    description: 'Configured and deployed Cisco switches to optimize network infrastructure, installed and tested Ethernet connections for office and client environments, and assisted with routine network troubleshooting and maintenance.',
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="page">
      <SectionHeading index="03" label="Experience" title="Work chronicle" />

      <ol className="relative border-l border-forest/25 ml-1.5 md:ml-0 md:border-l-0">
        {experiences.map((exp, index) => (
          <SectionWrapper key={exp.company} delay={index * 0.08}>
            <li className="relative pl-8 md:pl-0 pb-12 md:grid md:grid-cols-[14rem_1fr] md:gap-12 md:border-t md:border-ink/10 md:pt-8 md:pb-10">
              {/* Timeline dot (mobile) */}
              <span
                className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-paper md:hidden ${
                  exp.current ? 'bg-forest' : 'bg-forest/40'
                }`}
              />

              <div className="mb-3 md:mb-0">
                <p className="font-mono text-xs text-ink-muted leading-relaxed">{exp.period}</p>
                {exp.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-semibold text-forest">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest" /> Current
                  </span>
                )}
              </div>

              <div className="max-w-2xl">
                <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-ink">{exp.role}</h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem]">
                  <span className="font-semibold text-forest">{exp.company}</span>
                  <span className="flex items-center gap-1 text-ink-muted">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </p>
                <p className="mt-4 text-ink-soft leading-relaxed">{exp.description}</p>
              </div>
            </li>
          </SectionWrapper>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
