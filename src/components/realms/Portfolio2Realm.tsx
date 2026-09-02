import React from 'react';
import RealmLayout from './RealmLayout';

const Portfolio2Realm = () => (
  <RealmLayout
    data={{
      title: 'Alafia Suites',
      year: '2026',
      role: 'Full Stack Developer',
      tag: 'Hotel Booking',
      accent: '#2C5F4A',
      image: { src: '/projects/alafia-suites.png', alt: 'Alafia Suites homepage preview' },
      description:
        'Alafia Suites is a boutique hotel booking platform for a fictional 40-room property in Victoria Island, Lagos. It handles real-time room availability, search by check-in/check-out and guest count, and a full booking flow priced in Naira, backed by a relational database.',
      techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      features: [
        'Real-time room availability and search',
        'Multiple room types with dynamic pricing (Classic, Deluxe, and more)',
        'Booking flow with check-in/check-out and guest count',
        'Facilities showcase (rooftop bar, garden restaurant, spa)',
        'Responsive layout across marketing pages and booking flow',
        'Relational data model for rooms, rates, and bookings',
      ],
      gallery: [
        { src: '/projects/alafia-suites.png', alt: 'Alafia Suites homepage', caption: 'Homepage' },
        { src: '/projects/alafia-suites-rooms.png', alt: 'Rooms & Suites page', caption: 'Rooms & Suites' },
        { src: '/projects/alafia-suites-facilities.png', alt: 'Facilities page', caption: 'Facilities' },
      ],
      liveUrl: 'https://alafia-suites.vercel.app/',
      repoUrl: 'https://github.com/Devkay579/Alafia-Suites',
    }}
  />
);

export default React.memo(Portfolio2Realm);
