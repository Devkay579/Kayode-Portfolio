import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Tag,
  Github,
  ExternalLink,
  Layers,
  ListChecks,
  Quote,
  CheckCircle2,
  Code2,
  Calendar,
  Images,
  X,
} from 'lucide-react';

export interface RealmStory {
  brief?: string;
  approach?: string;
  outcome?: string;
}

export interface RealmImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface RealmData {
  title: string;
  year: string;
  role: string;
  tag?: string;
  accent: string;
  image: { src: string; alt: string };
  description: string;
  techStack: string[];
  features: string[];
  story?: RealmStory;
  quote?: string;
  gallery?: RealmImage[];
  liveUrl: string;
  repoUrl: string;
}

const RealmLayout = ({ data }: { data: RealmData }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const {
    title,
    year,
    role,
    tag,
    accent,
    image,
    description,
    techStack,
    features,
    story,
    quote,
    gallery,
    liveUrl,
    repoUrl,
  } = data;

  const storyParts: [string, string][] = story
    ? (
        [
          ['The Brief', story.brief],
          ['The Build', story.approach],
          ['The Outcome', story.outcome],
        ] as [string, string | undefined][]
      ).filter((part): part is [string, string] => !!part[1])
    : [];

  return (
    <div className="min-h-screen bg-[#F5F2E8] pt-16 pb-12 px-4 sm:px-6 md:pt-24 md:pb-16 text-[#2D2D2D] selection:bg-black/10">
      <div className="container mx-auto max-w-5xl">
        {/* Navigation Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-2 mb-6 md:mb-8 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            color: accent,
            backgroundColor: `${accent}12`,
            '--tw-ring-color': accent,
          } as React.CSSProperties}
          whileHover={!shouldReduceMotion ? { x: -3 } : {}}
          whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to codex</span>
        </motion.button>

        {/* Main Content Card Container */}
        <motion.div
          initial={!shouldReduceMotion ? { opacity: 0, y: 24 } : {}}
          animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden relative border border-black/5"
          style={{ borderLeft: `6px solid ${accent}` }}
        >
          {/* Pushpin */}
          <div
            className="absolute top-0 left-10 w-5 h-5 rounded-full shadow-md border-2 border-white z-30 -translate-y-1/2"
            style={{ backgroundColor: accent }}
          />

          {/* Hero Banner Section */}
          <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden bg-stone-900">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlays for Visual Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 80% 20%, ${accent}, transparent 60%)`,
              }}
            />
            {/* Torn paper edge into the card body */}
            <div className="absolute -bottom-px left-0 w-full h-4 bg-white torn-edge" />

            {/* Year Stamp Badge */}
            <motion.div
              initial={{ rotate: -6 }}
              whileHover={!shouldReduceMotion ? { rotate: 0, scale: 1.05 } : {}}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50 z-20"
              style={{ color: accent }}
            >
              <Calendar size={14} className="opacity-75 mb-0.5" />
              <span className="text-base sm:text-lg font-bold tracking-tight leading-none">
                {year}
              </span>
            </motion.div>
          </div>

          {/* Main Content Body */}
          <div className="p-6 sm:p-10 md:p-12 -mt-6 relative z-10">
            {/* Header / Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-black/5">
              <div>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2"
                  style={{ color: accent }}
                >
                  {title}
                </h1>
                <p className="text-stone-500 font-medium text-sm sm:text-base">
                  Project Case Study
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm font-medium">
                <span className="inline-flex items-center gap-1.5 bg-[#F5F2E8] px-3.5 py-1.5 rounded-full text-[#2D2D2D] border border-black/5">
                  <User size={13} className="text-stone-500" /> {role}
                </span>
                {tag && (
                  <span className="inline-flex items-center gap-1.5 bg-[#F5F2E8] px-3.5 py-1.5 rounded-full text-[#2D2D2D] border border-black/5">
                    <Tag size={13} className="text-stone-500" /> {tag}
                  </span>
                )}
              </div>
            </div>

            {/* Overview Description */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-10 max-w-3xl">
              {description}
            </p>

            {/* Pull Quote */}
            {quote && (
              <div
                className="relative my-10 p-6 sm:p-8 rounded-2xl bg-[#FDF8E7] border border-black/5 -rotate-1"
                style={{
                  borderLeft: `4px solid ${accent}`,
                  boxShadow: `0 4px 10px rgba(0,0,0,0.08), 3px 5px 0 ${accent}`,
                }}
              >
                <Quote
                  className="absolute top-4 right-4 opacity-15"
                  size={40}
                  style={{ color: accent }}
                />
                <p
                  className="italic text-lg sm:text-xl font-serif leading-relaxed relative z-10"
                  style={{ color: accent }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            )}

            {/* Project Story Steps */}
            {storyParts.length > 0 && (
              <div
                className={`grid gap-5 mb-12 ${
                  storyParts.length === 3
                    ? 'md:grid-cols-3'
                    : storyParts.length === 2
                    ? 'md:grid-cols-2'
                    : 'grid-cols-1'
                }`}
              >
                {storyParts.map(([heading, text], i) => (
                  <div
                    key={heading}
                    className={`bg-[#FDF8E7] p-6 rounded-xl border border-stone-200/60 relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${
                      i % 2 === 0 ? 'rotate-[-0.6deg]' : 'rotate-[0.6deg]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm"
                          style={{ backgroundColor: accent }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-base mb-2 tracking-wide"
                        style={{ color: accent }}
                      >
                        {heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Technical Breakdown (2-Column Grid) */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Tech Stack */}
              <div className="bg-[#F5F2E8]/60 p-6 rounded-2xl border border-stone-200/80">
                <h2
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color: accent }}
                >
                  <Layers size={20} /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-stone-700 shadow-sm border border-stone-200/60 transition-transform hover:scale-105"
                    >
                      <Code2 size={12} style={{ color: accent }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-[#F5F2E8]/60 p-6 rounded-2xl border border-stone-200/80">
                <h2
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color: accent }}
                >
                  <ListChecks size={20} /> Key Features
                </h2>
                <ul className="space-y-2.5">
                  {features.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: accent }}
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Screenshot Gallery */}
            {gallery && gallery.length > 0 && (
              <div className="mb-12">
                <h2
                  className="text-lg font-bold mb-4 flex items-center gap-2"
                  style={{ color: accent }}
                >
                  <Images size={20} /> Screenshots
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {gallery.map((shot, i) => (
                    <motion.button
                      key={shot.src}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className={`group relative rounded-xl overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        i % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'
                      }`}
                      style={{ '--tw-ring-color': accent } as React.CSSProperties}
                      whileHover={!shouldReduceMotion ? { y: -4, rotate: 0, scale: 1.02 } : {}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full aspect-video object-cover object-top"
                        onError={(e) => {
                          (e.currentTarget.closest('button') as HTMLElement | null)?.style.setProperty(
                            'display',
                            'none'
                          );
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      {shot.caption && (
                        <span className="absolute bottom-0 left-0 right-0 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-white bg-gradient-to-t from-black/70 to-transparent">
                          {shot.caption}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: accent,
                  '--tw-ring-color': accent,
                } as React.CSSProperties}
              >
                <ExternalLink size={18} /> Live Demo
              </a>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white font-semibold border-2 px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-stone-50 hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  borderColor: accent,
                  color: accent,
                  '--tw-ring-color': accent,
                } as React.CSSProperties}
              >
                <Github size={18} /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {gallery && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close screenshot preview"
            >
              <X size={22} />
            </button>

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) =>
                      prev === null ? null : (prev - 1 + gallery.length) % gallery.length
                    );
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Previous screenshot"
                >
                  <ArrowLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Next screenshot"
                >
                  <ArrowLeft size={22} className="rotate-180" />
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={!shouldReduceMotion ? { opacity: 0, scale: 0.96 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              exit={!shouldReduceMotion ? { opacity: 0, scale: 0.96 } : {}}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              {gallery[lightboxIndex].caption && (
                <p className="text-center text-white/80 text-sm mt-4">
                  {gallery[lightboxIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RealmLayout;