import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Federal University Oye-Ekiti',
    grade: 'Second Class Upper (2:1)',
    period: '2014 – 2018',
    details: 'Specialized in software engineering. Thesis on interactive UI systems. Graduated with honors.',

  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Andela Learning Community',
    period: '2019',
    details: 'Intensive full‑stack program covering React, Node.js, and agile methodologies.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Education
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ rotate: [0, -0.5, 0.5, 0], scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden relative"
                style={{
                  backgroundImage: 'linear-gradient(145deg, #FFFFFF 0%, #F5F2E8 100%)',
                }}
              >
        
                <div className="h-2 bg-gradient-to-r from-[#2C5F4A] to-[#1E4A3A]" />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="text-[#2C5F4A]" size={28} />
                    <h3 className="text-2xl font-bold text-[#2D2D2D]">{edu.degree}</h3>
                  </div>
                  <p className="text-[#2C5F4A] font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-[#8B8B8B] mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                    {edu.grade && (
                      <span className="flex items-center gap-1"><Award size={14} /> {edu.grade}</span>
                    )}
                  </div>
                  <p className="text-[#2D2D2D] leading-relaxed">{edu.details}</p>
                </div>

                {/* Decorative corner fold */}
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-[#2C5F4A]/20 to-transparent clip-path-corner" />
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;