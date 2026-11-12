import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const socials = [
  { href: 'https://github.com/devkay579', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com/in/kay-ogbetah-b44a23323', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://x.com/kayode_oo', label: 'X', Icon: Twitter },
  { href: 'mailto:kayodeogbetah76@gmail.com', label: 'Email', Icon: Mail },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="bg-ink text-paper">
      <div className="page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_auto] md:items-start">
          <div>
            <p className="font-display text-3xl leading-tight">
              Kayode <span className="italic text-[#7FC8A9]">Ogbetah</span>
            </p>
            <p className="mt-3 text-sm text-paper/60 max-w-xs">
              Crafting digital experiences with code and creativity.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper/50 mb-4">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={sectionHref(item)} className="capitalize text-paper/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper/80 hover:border-paper/40 hover:text-white transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-paper/70 hover:text-white transition-colors"
            >
              <ArrowUp size={15} /> Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/10 text-xs text-paper/50">
          © {year} Kayode Ogbetah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
