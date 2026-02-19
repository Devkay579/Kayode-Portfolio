import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2C5F4A]/30 py-8 bg-[#F5F2E8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          <div>
            <h3 className="text-lg font-bold text-[#2C5F4A] mb-2">Kayode Ogbetah</h3>
            <p className="text-sm text-[#8B8B8B] max-w-xs">
              Crafting digital experiences with code and creativity.
            </p>
          </div>

          
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wider">Explore</h4>
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-[#8B8B8B] hover:text-[#2C5F4A] transition capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-4">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-[#8B8B8B] hover:text-[#2C5F4A] transition">
                <Mail size={20} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-[#2C5F4A] hover:underline"
            >
              <ArrowUp size={16} /> Back to top
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#2C5F4A]/20 text-center text-xs text-[#8B8B8B]">
          <p>© {year} Kayode Ogbetah. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;