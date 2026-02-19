import { useState, useEffect } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

const About = () => {
  const bioLines = [
    ">_ Kayode.init()",
    "Initializing full stack developer...",
    "Location: Lagos, Nigeria",
    "Specialties: React, Nest.js, Interactive UI",
    "Mission: Build websites, applications that think, move, and react",
    "Fun fact: I also design graphics and visual assets in my free time",
  ];
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bioLines.length) {
        setDisplayedLines(prev => [...prev, bioLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            About
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <SectionWrapper delay={0.1}>
            <div className="bg-white p-6 rounded shadow-lg border-l-4 border-[#2C5F4A] font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-[#2C5F4A]/30 pb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-[#8B8B8B] ml-2">kayode@codex:~$</span>
              </div>
              <div className="space-y-1">
                {displayedLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#2D2D2D]"
                  >
                    {line}
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-2 h-4 bg-[#2C5F4A] ml-1"
                />
              </div>
            </div>
          </SectionWrapper>

        
          <SectionWrapper delay={0.2}>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-md flex items-center gap-3 border-l-2 border-[#2C5F4A]">
                <span className="w-2 h-2 bg-[#2C5F4A] rounded-full" />
                <span className="font-mono text-sm text-[#2C5F4A] w-20">location</span>
                <span className="text-[#2D2D2D]">Lagos, Nigeria</span>
              </div>
              <div className="bg-white p-4 rounded shadow-md flex items-center gap-3 border-l-2 border-[#2C5F4A]">
                <span className="w-2 h-2 bg-[#2C5F4A] rounded-full" />
                <span className="font-mono text-sm text-[#2C5F4A] w-20">specialty</span>
                <span className="text-[#2D2D2D]">React, Nest.js, Interactive UI</span>
              </div>
              <div className="bg-white p-4 rounded shadow-md flex items-center gap-3 border-l-2 border-[#2C5F4A]">
                <span className="w-2 h-2 bg-[#2C5F4A] rounded-full" />
                <span className="font-mono text-sm text-[#2C5F4A] w-20">passion</span>
                <span className="text-[#2D2D2D]">Interactive storytelling</span>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;