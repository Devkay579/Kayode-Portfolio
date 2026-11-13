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
      image: { src: '/projects/alafia-suites.jpg', alt: 'Alafia Suites homepage hero' },
      description:
        'Alafia Suites is a hotel management system for a fictional 40-room boutique hotel in Victoria Island, Lagos. Guests search live availability by dates and party size and book a room in a minute, without an account. Staff sign in to a protected dashboard to run the front desk: today\'s check-ins and check-outs, occupancy, the booking lifecycle, room types and pricing, and contact-form messages.',
      techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js (NextAuth v5)', 'Tailwind CSS v4', 'Zod', 'Framer Motion'],
      features: [
        'Real-time availability search by check-in, check-out and guest count',
        'Booking flow with a live nights × rate total, priced in Naira',
        'Availability re-checked on the server at booking time, so the last unit can\'t be double-booked',
        'Confirmation page with a unique booking code',
        'Staff/admin login with route protection via middleware',
        'Dashboard with today\'s check-ins and check-outs, occupied rooms and occupancy rate',
        'Bookings filtered by status and moved through confirmed → checked in → checked out, or cancelled',
        'Room-type management: pricing, capacity, unit count, amenities and visibility',
        'Messages inbox for contact-form submissions',
        'Themed gradient tiles in place of photography, swappable without schema changes',
      ],
      gallery: [
        { src: '/projects/alafia-suites.jpg', alt: 'Homepage hero with hotel highlights', caption: 'Homepage' },
        { src: '/projects/alafia-suites-rooms.jpg', alt: 'Rooms page with date and guest search and units left per room', caption: 'Availability search' },
        { src: '/projects/alafia-suites-booking.jpg', alt: 'Deluxe Room page with booking form and stay total', caption: 'Booking form' },
        { src: '/projects/alafia-suites-facilities.jpg', alt: 'Facilities page showing rooftop bar and garden restaurant', caption: 'Facilities' },
        { src: '/projects/alafia-suites-admin-dashboard.jpg', alt: 'Admin dashboard with occupancy stats and recent bookings (guest names blurred)', caption: 'Admin dashboard' },
        { src: '/projects/alafia-suites-admin-bookings.jpg', alt: 'Admin bookings list with status filters and check-in/out actions (guest names blurred)', caption: 'Bookings management' },
        { src: '/projects/alafia-suites-admin-rooms.jpg', alt: 'Admin room types with nightly rates and unit counts', caption: 'Room types' },
        { src: '/projects/alafia-suites-admin-room-edit.jpg', alt: 'Admin form for editing a room type', caption: 'Edit room' },
      ],
      liveUrl: 'https://alafia-suites.vercel.app/',
      repoUrl: 'https://github.com/Devkay579/Alafia-Suites',
    }}
  />
);

export default React.memo(Portfolio2Realm);
