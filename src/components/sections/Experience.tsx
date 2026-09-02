import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Dorman Long Engineering',
    role: 'IT Personnel / NYSC Intern',
    period: 'Present',
    location: 'Lagos, Nigeria',
    description: 'Developing service help desk applications, including asset management, clinic management, and more. Collaborating with the development team on code reviews and optimization.',
    color: '#2C5F4A',
  },
  {
    company: 'ULeval',
    role: 'Frontend Engineer Intern',
    period: '06/2024 – 10/2024 & 08/2025 – 11/2025',
    location: 'Lagos, Nigeria',
    description: 'Assisted in developing and maintaining responsive web interfaces using React.js, JavaScript, HTML, and Tailwind CSS. Translated UI/UX designs into functional frontend code, and collaborated with the development team on code reviews, testing, and debugging.',
    color: '#2C5F4A',
  },
  {
    company: 'Digital Autonomy IT',
    role: 'Networking Intern',
    period: '06/2023 – 10/2023',
    location: 'Lagos, Nigeria',
    description: 'Configured and deployed Cisco switches to optimize network infrastructure, installed and tested Ethernet connections for office and client environments, and assisted with routine network troubleshooting and maintenance.',
    color: '#2C5F4A',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[#F5F2E8]">
      <div className="container mx-auto max-w-5xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Work Chronicle
          </h2>
        </SectionWrapper>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#2C5F4A]/30" />

          {experiences.map((exp, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#2C5F4A] rounded-full border-4 border-[#F5F2E8] z-10" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-white p-6 rounded shadow-lg border-l-4 border-[#2C5F4A] relative">
                    {/* Torn edge effect */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#F5F2E8] to-transparent clip-path-torn" />

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#2D2D2D]">{exp.role}</h3>
                      <span className="text-xs bg-[#2C5F4A]/10 text-[#2C5F4A] px-2 py-1 rounded-full">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#8B8B8B] mb-3">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                    <p className="text-[#2D2D2D] leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;