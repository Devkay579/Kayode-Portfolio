import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
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
    shortDesc: 'Snack store with Paystack checkout',
    longDesc: 'A Next.js + Supabase store for Northern Nigerian snacks, with search, a persistent cart, Paystack checkout, printable receipts, and an admin dashboard for products and orders.',
    tags: ['Next.js', 'Supabase', 'Paystack', 'Zustand'],
    image: '/projects/upnorth-treats.jpg',
    color: '#2C5F4A',
  },
  {
    id: 'port2',
    title: 'Alafia Suites',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'Hotel booking engine with staff dashboard',
    longDesc: 'A Next.js + Prisma hotel system with live availability search, double-booking-safe reservations priced in Naira, and a protected admin dashboard for occupancy, check-ins/outs, room types and guest messages.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js'],
    image: '/projects/alafia-suites.jpg',
    color: '#2C5F4A',
  },
  {
    id: 'nailhive',
    title: 'THENAILHIVE',
    year: '2026',
    role: 'Full Stack Developer',
    shortDesc: 'Nail studio booking platform with admin dashboard',
    longDesc: 'A Next.js + Supabase salon app with a step-by-step booking wizard, "book this look" from the gallery, deposit tracking, automated email reminders, an installable PWA, and an admin dashboard for bookings, clients, messages and revenue.',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    image: '/projects/nailhive.jpg',
    color: '#2C5F4A',
  },
  {
    id: 'port1',
    title: 'Aletan Folaranmi',
    year: '2026',
    role: 'Frontend Developer',
    shortDesc: 'Personal brand site for a social media manager',
    longDesc: 'A responsive portfolio for a Lagos social media manager, with an experience timeline, skills, certifications, a CV download, a Formspree contact form and light/dark mode.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer'],
    image: '/projects/aletan-folaranmi.jpg',
    color: '#2C5F4A',
  },
];

const Projects = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  return (
    <section id="projects" className="section">
      <div className="page">
        <SectionHeading
          index="05"
          label="Projects"
          title={
            <>
              Selected <em className="italic text-forest">work</em>
            </>
          }
          intro="Hover or tap a card to flip it, then open the full case study."
        />

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {projects.map((project, index) => (
            <SectionWrapper key={project.id} delay={index * 0.1}>
              <motion.div
                className="relative h-[22rem] sm:h-[24rem] cursor-pointer group [perspective:1400px]"
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
                    className="absolute inset-0 card overflow-hidden flex flex-col"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="relative flex-1 min-h-0 bg-forest/10 overflow-hidden">
                      {brokenImages.has(project.id) ? (
                        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-forest to-forest-dark">
                          <span className="font-display italic text-5xl text-paper/90">{project.title}</span>
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                          onError={() => setBrokenImages((prev) => new Set(prev).add(project.id))}
                        />
                      )}
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-14 h-14 bg-forest clip-path-corner" />
                    </div>
                    <div className="px-6 py-5 border-t border-ink/[0.06]">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl text-ink leading-tight">{project.title}</h3>
                        <span className="font-mono text-xs text-ink-muted shrink-0">{project.year}</span>
                      </div>
                      <p className="mt-1 text-ink-soft">{project.shortDesc}</p>
                      <p className="mt-3 flex items-center justify-between text-xs font-medium text-ink-muted">
                        <span>{project.role}</span>
                        <span className="inline-flex items-center gap-0.5 text-forest">
                          Flip <ChevronRight size={14} />
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Back face  */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-paper-cream border border-forest/20 shadow-xl p-7 sm:p-8 overflow-y-auto flex flex-col"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <p className="eyebrow mb-3">{project.year} · {project.role}</p>
                    <h3 className="font-display text-3xl text-ink leading-tight mb-3">{project.title}</h3>
                    <p className="text-ink-soft leading-relaxed mb-5">{project.longDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white font-mono text-[0.6875rem] text-ink-soft rounded-full border border-ink/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/realm/${project.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-primary mt-auto self-start"
                    >
                      View case study <ExternalLink size={15} />
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