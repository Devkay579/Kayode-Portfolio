import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Github, ExternalLink } from 'lucide-react';

const LandingProjectRealm = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const features = [
    'Parallax scrolling effects',
    'Scroll-triggered animations with GSAP',
    'Fully responsive design',
    'Optimized for conversion (A/B tested)',
    'Smooth transitions between sections',
    'Contact form with validation',
  ];

  const techStack = [
    'React + TypeScript',
    'GSAP + ScrollTrigger',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
    'EmailJS for contact',
  ];

  return (
    <div className="min-h-screen bg-[#F5F2E8] pt-20 pb-8 px-4 md:pt-24 md:pb-12">
      <div className="container mx-auto max-w-5xl">
        <motion.button
          onClick={() => navigate('/')}
          className="mb-6 md:mb-8 flex items-center gap-2 text-[#2C5F4A] hover:text-[#1E4A3A] transition group z-10 relative"
          whileHover={!shouldReduceMotion ? { x: -4 } : {}}
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to codex</span>
        </motion.button>

        <motion.div
          variants={!shouldReduceMotion ? { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } } : {}}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl border-l-4 border-[#2C5F4A] overflow-hidden relative"
        >
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#2C5F4A]/20 to-[#2C5F4A]/5">
            <img
              src="/projects/landing-cover.jpg"
              alt="Landing Page Project preview"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-light text-[#2C5F4A]">Landing Page Project</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1 bg-[#F5F2E8] px-3 py-1 rounded-full text-[#2D2D2D]">
                  <Calendar size={14} /> 2023
                </span>
                <span className="flex items-center gap-1 bg-[#F5F2E8] px-3 py-1 rounded-full text-[#2D2D2D]">
                  <User size={14} /> UI/UX & Dev
                </span>
              </div>
            </div>

            <p className="text-lg text-[#2D2D2D] leading-relaxed mb-8">
              A high-conversion landing page designed to showcase a product with immersive storytelling. 
              Features include parallax scrolling, scroll-triggered animations, and a focus on visual hierarchy 
              to guide user attention. The page was built with performance and SEO in mind.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#F5F2E8] p-5 rounded-lg border border-[#2C5F4A]/20">
                <h2 className="text-xl font-semibold text-[#2C5F4A] mb-3">Tech Stack</h2>
                <ul className="space-y-2">
                  {techStack.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#2C5F4A] mt-1">•</span>
                      <span className="text-[#2D2D2D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F2E8] p-5 rounded-lg border border-[#2C5F4A]/20">
                <h2 className="text-xl font-semibold text-[#2C5F4A] mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#2C5F4A] mt-1">•</span>
                      <span className="text-[#2D2D2D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://landing-page-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2C5F4A] text-white px-6 py-3 rounded-lg hover:bg-[#1E4A3A] transition"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
              <a
                href="https://github.com/yourusername/landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2C5F4A] text-[#2C5F4A] px-6 py-3 rounded-lg hover:bg-[#2C5F4A]/10 transition"
              >
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#2C5F4A]/10 clip-path-corner" />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(LandingProjectRealm);