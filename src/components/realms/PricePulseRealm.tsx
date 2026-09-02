import React from 'react';
import RealmLayout from './RealmLayout';

const PricePulseRealm = () => (
  <RealmLayout
    data={{
      title: 'Price Pulse',
      year: '2026',
      role: 'Full Stack Developer',
      tag: 'Price Tracking',
      accent: '#2C5F4A',
      image: { src: '/projects/price-pulse-cover.jpg', alt: 'Price Pulse dashboard preview' },
      description:
        'Price Pulse is a product-focused platform built with NestJS and React to track pricing trends, collect user contributions, and score the credibility of each price entry. Users can register, manage their profile, monitor product price history, and discover trustworthy pricing insights.',
      techStack: [
        'React + TypeScript',
        'NestJS + TypeScript',
        'PostgreSQL',
        'Tailwind CSS',
        'Chart.js / Recharts',
        'REST API + JWT authentication',
      ],
      features: [
        'Product price tracking across retailers',
        'User contributions with credibility scoring',
        'Trending alerts and price history charts',
        'Account registration and profile management',
        'Moderation tools for quality contributions',
      ],
      liveUrl: 'https://pricepulse-demo.vercel.app',
      repoUrl: 'https://github.com/yourusername/price-pulse',
    }}
  />
);

export default React.memo(PricePulseRealm);
