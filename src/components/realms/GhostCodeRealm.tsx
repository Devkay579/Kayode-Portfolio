import React from 'react';
import RealmLayout from './RealmLayout';

const GhostCodeRealm = () => (
  <RealmLayout
    data={{
      title: 'Ghost Code',
      year: '2026',
      role: 'Lead Developer',
      tag: 'Game',
      accent: '#2C5F4A',
      image: { src: '/images/Ghostcode.png', alt: 'Ghost Code game interface' },
      description:
        'A psychological memory game where players must recall a randomly generated code after facing a series of distractions. Features adaptive difficulty, AI-generated misinformation, and global leaderboards. Built as a full-stack portfolio piece demonstrating advanced frontend and backend architecture.',
      techStack: [
        'React 18 + TypeScript',
        'NestJS + Prisma',
        'PostgreSQL (Supabase)',
        'Tailwind CSS + Framer Motion',
        'Howler.js for audio',
      ],
      features: [
        'Adaptive difficulty system',
        'AI-generated misinformation during distraction phase',
        'Global leaderboard with daily/weekly filters',
        'Immersive sound design with Howler.js',
        'Real-time validation and scoring',
      ],
      gallery: [
        { src: '/images/ghostcode-hero.png', alt: 'Ghost Code landing screen', caption: 'Landing screen' },
        { src: '/images/ghostcode-rules.png', alt: 'Ghost Code how-to-play rules panel', caption: 'How to play' },
        { src: '/images/ghostcode-register.png', alt: 'Ghost Code registration form', caption: 'Account registration' },
      ],
      liveUrl: 'https://ghost-code.vercel.app',
      repoUrl: 'https://github.com/Devkay579/Ghost-code',
    }}
  />
);

export default React.memo(GhostCodeRealm);
