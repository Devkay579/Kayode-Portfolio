import { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSoundStore } from '../../store/soundStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { muted, toggleMute } = useSoundStore();

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
          ? 'bg-white/80 backdrop-blur-md border-b border-[#2C5F4A]/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="relative group outline-none block w-8 h-8"
          aria-label="Go to top"
        >
          <img
            src="/images/kay.jpg"
            alt="Kayode Ogbetah"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-[#2D2D2D] hover:text-[#2C5F4A] capitalize transition-colors group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2C5F4A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={toggleMute}
            className="text-[#2D2D2D] hover:text-[#2C5F4A] transition-colors p-2 rounded-full hover:bg-[#2C5F4A]/10"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2C5F4A] p-2 hover:bg-[#2C5F4A]/10 rounded-lg transition z-[60]"
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
            className="md:hidden fixed left-0 right-0 top-[57px] bg-white border-b border-[#2C5F4A]/30 shadow-lg z-[55]"
            style={{ top: '57px' }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {['about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className="text-[#2D2D2D] hover:text-[#2C5F4A] capitalize py-3 px-3 rounded-lg hover:bg-[#2C5F4A]/10 transition text-left touch-manipulation"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleMute();
                  handleLinkClick();
                }}
                className="flex items-center gap-2 text-[#2D2D2D] hover:text-[#2C5F4A] text-left py-3 px-3 rounded-lg hover:bg-[#2C5F4A]/10 transition touch-manipulation"
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