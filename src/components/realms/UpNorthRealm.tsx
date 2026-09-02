import React from 'react';
import RealmLayout from './RealmLayout';

const UpNorthRealm = () => (
  <RealmLayout
    data={{
      title: 'UpNorth Treats',
      year: '2026',
      role: 'Full Stack Developer',
      tag: 'E-commerce',
      accent: '#2C5F4A',
      image: { src: '/projects/upnorth-treats-cover.png', alt: 'UpNorth Treats storefront preview' },
      description:
        'UpNorth Treats is a fullstack Next.js business application that supports customer accounts, shopping cart workflows, order management, and secure payment via Paystack. The platform was built to demonstrate a real-world e-commerce system with a polished storefront experience.',
      techStack: [
        'Next.js + TypeScript',
        'React',
        'NestJS + TypeScript',
        'PostgreSQL',
        'Paystack API',
        'Tailwind CSS',
      ],
      features: [
        'Customer accounts and order history',
        'Add to cart and checkout flow',
        'Paystack payment integration',
        'Product catalog with search and categories',
        'Order management dashboard',
      ],
      gallery: [
        { src: '/projects/upnorth-treats-cover.png', alt: 'UpNorth Treats homepage', caption: 'Homepage' },
        { src: '/projects/upnorth-treats-products.png', alt: 'UpNorth Treats product catalog', caption: 'Products' },
        { src: '/projects/upnorth-treats-about.png', alt: 'UpNorth Treats about page', caption: 'Our Story' },
      ],
      liveUrl: 'https://upnorth-treats.vercel.app',
      repoUrl: 'https://github.com/yourusername/upnorth-treats',
    }}
  />
);

export default React.memo(UpNorthRealm);
