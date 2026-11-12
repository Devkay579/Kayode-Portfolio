import React from 'react';
import RealmLayout from './RealmLayout';

const Portfolio1Realm = () => (
  <RealmLayout
    data={{
      title: 'Aletan Folaranmi',
      year: '2026',
      role: 'Frontend Developer',
      tag: 'Portfolio',
      accent: '#2C5F4A',
      image: { src: '/projects/aletan-folaranmi.jpg', alt: 'Aletan Folaranmi portfolio hero section' },
      description:
        'A personal brand site for a Lagos-based social media manager. It presents their experience, education, skills and certifications, with a downloadable CV and a contact form, so brands can see the work and get in touch in one place. Clean typography, subtle motion and a light/dark theme keep it polished on any screen.',
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite', 'Formspree', 'Lucide icons'],
      features: [
        'Light and dark mode that remembers the visitor\'s choice',
        'Sticky navbar that highlights the section in view',
        'Experience timeline with current-role badge',
        'Skills grouped by discipline, plus languages and tools',
        'Certifications and "currently exploring" learning track',
        'Contact form via Formspree, with direct phone and email links',
        'One-click CV download',
        'Fully responsive with scroll-triggered animations',
      ],
      gallery: [
        { src: '/projects/aletan-folaranmi.jpg', alt: 'Hero with name, intro, CV download and contact details', caption: 'Hero' },
        { src: '/projects/aletan-folaranmi-dark.jpg', alt: 'Hero section in dark mode', caption: 'Dark mode' },
        { src: '/projects/aletan-folaranmi-about.jpg', alt: 'About section with intro and service cards', caption: 'About' },
        { src: '/projects/aletan-folaranmi-experience.jpg', alt: 'Experience timeline with roles and responsibilities', caption: 'Experience' },
        { src: '/projects/aletan-folaranmi-skills.jpg', alt: 'Skills grouped by discipline, languages and tools', caption: 'Skills' },
        { src: '/projects/aletan-folaranmi-certifications.jpg', alt: 'Certifications and continuous learning track', caption: 'Certifications' },
      ],
      liveUrl: 'https://aletan-folaranmi.vercel.app',
      repoUrl: 'https://github.com/Devkay579/Grace-portfolio',
    }}
  />
);

export default React.memo(Portfolio1Realm);
