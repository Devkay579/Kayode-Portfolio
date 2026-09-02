import React from 'react';
import RealmLayout from './RealmLayout';

const Portfolio1Realm = () => (
  <RealmLayout
    data={{
      title: 'Grace-Portfolio',
      year: '2025',
      role: 'Developer',
      tag: 'Portfolio',
      accent: '#2C5F4A',
      image: { src: '/images/grace-hero.png', alt: 'Grace-Portfolio hero section' },
      description:
        'Grace-Portfolio is a clean, responsive personal brand site built for a social media manager to showcase her experience, skills, and client work. It uses subtle motion, refined typography, and an approachable aesthetic to create a strong personal brand experience.',
      techStack: ['React 18 + TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide React icons'],
      features: [
        'Fully responsive design',
        'Smooth scroll-triggered animations with Framer Motion',
        'Work experience and professional references sections',
        'Contact form with direct email/phone links',
        'Interactive project cards with hover effects',
      ],
      gallery: [
        { src: '/images/grace-hero.png', alt: 'Grace-Portfolio hero section', caption: 'Hero section' },
        { src: '/images/grace-about.png', alt: 'Grace-Portfolio about section', caption: 'About' },
        { src: '/images/grace-experience.png', alt: 'Grace-Portfolio work experience section', caption: 'Work experience' },
      ],
      liveUrl: 'https://grace-portfolio-zeta.vercel.app',
      repoUrl: 'https://github.com/Devkay579/Grace-portfolio',
    }}
  />
);

export default React.memo(Portfolio1Realm);
