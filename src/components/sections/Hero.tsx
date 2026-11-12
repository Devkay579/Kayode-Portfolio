import { motion } from 'framer-motion';
import { ArrowDownRight, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 min-h-[92vh] flex items-center">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />

      <div className="page relative z-10 grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-14 md:gap-10 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
            </span>
            Full-stack developer
          </p>

          <h1 className="font-display text-[3.25rem] leading-[0.95] sm:text-7xl md:text-[5.5rem] font-normal tracking-[-0.035em] text-ink mb-7">
            Kayode
            <br />
            <span className="italic font-light text-forest">Ogbetah</span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl mb-9">
            I build immersive web experiences, memory-driven apps and modular, scalable
            products, from the database to the last pixel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="btn-primary group">
              View work
              <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="/cv/Kayode-Ogbetah-CV.pdf" download="Kayode-Ogbetah-CV.pdf" className="btn-ghost">
              <Download size={17} /> Résumé
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6 text-sm">
            <div>
              <dt className="text-ink-muted">Based in</dt>
              <dd className="mt-0.5 font-medium text-ink flex items-center gap-1.5">
                <MapPin size={14} className="text-forest" /> Lagos, Nigeria
              </dd>
            </div>
            <div>
              <dt className="text-ink-muted">Experience</dt>
              <dd className="mt-0.5 font-medium text-ink">2+ years</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Motto</dt>
              <dd className="mt-0.5 font-display italic text-forest">Code. Create. Conquer.</dd>
            </div>
          </dl>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[19rem] md:max-w-sm"
        >
          {/* Offset frame behind the portrait */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-forest/40" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-deep shadow-2xl shadow-forest/15">
            <img src="/images/kay.jpg" alt="Kayode Ogbetah" className="h-full w-full object-cover" />
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -left-5 bottom-10 card px-4 py-3 will-change-transform"
          >
            <p className="font-display text-2xl leading-none text-forest">6</p>
            <p className="mt-1 text-xs text-ink-muted">featured projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Page corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-forest opacity-10 rounded-tl-[80px] sm:rounded-tl-[100px]" />
    </section>
  );
};

export default Hero;
