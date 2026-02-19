import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Paperclip } from 'lucide-react';

const StickyNote = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mb-3 bg-[#FDF8E7] p-4 rounded shadow-xl w-56 relative"
            style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.1), 2px 4px 0 #2C5F4A',
              border: '1px solid #2C5F4A',
              backgroundImage: 'linear-gradient(145deg, #FDF8E7 0%, #F5F2E8 100%)',
            }}
          >
            {/* Torn edge effect */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#2C5F4A]/10 to-transparent clip-path-torn" />
            {/* Paperclip */}
            <Paperclip className="absolute -top-2 -left-2 text-[#2C5F4A] rotate-45" size={24} />
            
            <p className="font-bold text-[#2D2D2D] mb-2">Quick reach</p>
            <div className="flex justify-around">
              <a href="mailto:your.email@example.com" className="text-[#2C5F4A] hover:scale-110 transition">
                <Mail size={20} />
              </a>
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-[#2C5F4A] hover:scale-110 transition">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-[#2C5F4A] hover:scale-110 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-[#2C5F4A] hover:scale-110 transition">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FDF8E7] text-[#2C5F4A] p-3 rounded shadow-lg border border-[#2C5F4A] font-bold"
        style={{ boxShadow: '0 2px 0 #2C5F4A' }}
      >
        📌
      </motion.button>
    </div>
  );
};

export default StickyNote;