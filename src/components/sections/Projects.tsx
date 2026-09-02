import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 'ghost',
    title: 'Ghost Code',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'Memory hacking game',
    longDesc: 'A psychological game where you recall codes under pressure, with adaptive difficulty and distractions.',
    tags: ['React', 'NestJS', 'PostgreSQL'],
    image: '/projects/ghost.jpg', 
    color: '#2C5F4A',
  },
  {
    id: 'price',
    title: 'Price Pulse',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'Product-based price tracking platform',
    longDesc: 'A NestJS + React product system for tracking prices, collecting user contributions, and scoring credibility, with account management.',
    tags: ['React', 'NestJS', 'PostgreSQL'],
    image: '/projects/price.jpg', 
    color: '#2C5F4A',
  },
  {
    id: 'upnorth',
    title: 'UpNorth Treats',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'E-commerce platform with order and payment flow',
    longDesc: 'A Next.js fullstack business app with user accounts, add-to-cart, order management, and Paystack payment integration.',
    tags: ['Next.js', 'React', 'NestJS', 'PostgreSQL'],
    image: '/projects/upnorth.png',
    color: '#2C5F4A',
  },
  {
    id: 'port1',
    title: 'Grace-Portfolio',
    year: '2025',
    role: 'Developer',
    shortDesc: 'Grace-portfolio',
    longDesc: 'Clean, responsive portfolio with smooth animations.',
    tags: ['React', 'Tailwind', 'Framer'],
    image: '/projects/port1.jpg',
    color: '#2C5F4A',
  },
  {
    id: 'port2',
    title: 'Alafia Suites',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'Boutique hotel booking platform',
    longDesc: 'A full-stack hotel booking system with real-time availability, room search, and a Naira-priced checkout flow.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: '/projects/alafia-suites.png',
    color: '#2C5F4A',
  },
  {
    id: 'landing',
    title: 'Landing Page Project',
    year: '2025',
    role: 'Developer',
    shortDesc: 'High-conversion landing',
    longDesc: 'Clean landing page with scroll-triggered animations.',
    tags: ['React', 'Shadcn', 'Tailwind', 'Framer'],
    image: '/projects/landing.jpg',
    color: '#2C5F4A',
  },
];

const Projects = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-[#E8E2D5]">
      <div className="container mx-auto max-w-6xl">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#2C5F4A] border-b-2 border-[#2C5F4A] pb-2 inline-block">
            Projects
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SectionWrapper key={project.id} delay={index * 0.1}>
              <motion.div
                className="relative h-80 cursor-pointer group perspective"
                onHoverStart={() => setFlippedId(project.id)}
                onHoverEnd={() => setFlippedId(null)}
                onClick={() => setFlippedId(flippedId === project.id ? null : project.id)}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-500 transform-style-3d"
                  animate={{ rotateY: flippedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front face – book cover */}
                  <div
                    className="absolute inset-0 backface-hidden bg-white rounded-lg shadow-xl overflow-hidden border border-[#2C5F4A]/30"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-2/3 bg-[#2C5F4A]/10 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F4A]/20 to-transparent" />
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#2C5F4A] clip-path-corner" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-[#2C5F4A]">{project.title}</h3>
                      <p className="text-sm text-[#8B8B8B]">{project.year} · {project.role}</p>
                      <p className="mt-2 text-[#2D2D2D]">{project.shortDesc}</p>
                    </div>
                    <div className="absolute bottom-2 right-2 text-[#2C5F4A]">
                      <ChevronRight className="inline" /> flip
                    </div>
                  </div>

                  {/* Back face  */}
                  <div
                    className="absolute inset-0 backface-hidden bg-[#FDF8E7] rounded-lg shadow-xl p-6 overflow-y-auto border border-[#2C5F4A]/30"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-xl font-bold text-[#2C5F4A] mb-2">{project.title}</h3>
                    <p className="text-sm text-[#2D2D2D] mb-3">{project.longDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white text-xs rounded border border-[#2C5F4A]/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/realm/${project.id}`}
                      className="inline-flex items-center gap-1 text-[#2C5F4A] hover:underline"
                    >
                      View case study <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;