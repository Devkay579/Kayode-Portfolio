import React from 'react';
import RealmLayout from './RealmLayout';

const LandingProjectRealm = () => (
  <RealmLayout
    data={{
      title: 'Landing Page Project',
      year: '2025',
      role: 'UI/UX & Dev',
      tag: 'Landing Page',
      accent: '#2C5F4A',
      image: { src: '/images/adplatform-hero.png', alt: 'AdEngine Pro landing page hero section' },
      description:
        'A clean, responsive one-page landing site for "AdEngine Pro," a digital advertising and newsletter management platform for publishers and advertisers. Built with a hero section, feature highlights, an analytics/insights showcase, tiered pricing, and a contact form — with a focus on visual hierarchy and accessibility.',
      techStack: ['React + TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'Lucide Icons'],
      features: [
        'Feature grid highlighting newsletter, analytics, and ad-targeting tools',
        'Tabbed insights showcase (Publisher / Advertiser / Newsletter views)',
        'Tiered pricing section (Basic / Pro / Enterprise)',
        'Fully responsive, accessible layout',
        'Contact form for inbound leads',
      ],
      gallery: [
        { src: '/images/adplatform-hero.png', alt: 'AdEngine Pro hero section', caption: 'Hero section' },
        { src: '/images/adplatform-insights.png', alt: 'AdEngine Pro insights dashboard showcase', caption: 'Insights showcase' },
        { src: '/images/adplatform-pricing.png', alt: 'AdEngine Pro pricing tiers', caption: 'Pricing' },
      ],
      liveUrl: 'https://adplatform.vercel.app',
      repoUrl: 'https://github.com/Devkay579/Adplatform',
    }}
  />
);

export default React.memo(LandingProjectRealm);
