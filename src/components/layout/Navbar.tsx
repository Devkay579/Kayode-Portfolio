import { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useSoundStore } from '../../store/soundStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { muted, toggleMute } = useSoundStore();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-ink/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="page py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href={sectionHref('hero')}
          onClick={handleLinkClick}
          className="group flex items-center gap-3"
          aria-label="Kayode Ogbetah, go to top"
        >
          <img
            src="/images/kay.jpg"
            alt=""
            className="w-9 h-9 object-cover rounded-full ring-2 ring-forest/20 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-lg text-ink leading-none hidden sm:block">
            Kayode <span className="italic text-forest">O.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {['about', 'skills', 'experience', 'education', 'projects'].map((item) => (
            <a
              key={item}
              href={sectionHref(item)}
              className="px-3 py-2 text-[0.9375rem] text-ink-soft hover:text-forest capitalize transition-colors rounded-full"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleMute}
            className="ml-1 text-ink-soft hover:text-forest transition-colors p-2 rounded-full hover:bg-forest/10"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <a href={sectionHref('contact')} className="btn-primary ml-2 !px-5 !py-2 text-sm">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest p-2 hover:bg-forest/10 rounded-full transition z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed left-0 right-0 top-[61px] bg-paper border-b border-ink/10 shadow-lg z-[55]"
            
          >
            <div className="page py-4 flex flex-col">
              {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={sectionHref(item)}
                  onClick={handleLinkClick}
                  className="font-display text-xl text-ink hover:text-forest capitalize py-3 px-3 rounded-lg hover:bg-forest/10 transition text-left touch-manipulation"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleMute();
                  handleLinkClick();
                }}
                className="flex items-center gap-2 text-ink-soft hover:text-forest text-left py-3 px-3 rounded-lg hover:bg-forest/10 transition touch-manipulation"
              >
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span>{muted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;