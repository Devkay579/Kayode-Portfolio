import React from 'react';
import RealmLayout from './RealmLayout';

const NailHiveRealm = () => (
  <RealmLayout
    data={{
      title: 'THENAILHIVE',
      year: '2026',
      role: 'Full Stack Developer',
      tag: 'Salon Booking',
      accent: '#2C5F4A',
      image: { src: '/projects/nailhive.jpg', alt: 'THENAILHIVE homepage hero section' },
      description:
        'THENAILHIVE is a booking and business platform for a luxury nail studio in Lagos. Clients browse the menu and gallery, pick a service, length and extras (or tap "Book this look" on a gallery design), choose an open slot and book online with a 20% deposit. The owner runs appointments, payments, clients, messages, gallery, reviews and revenue from a private admin dashboard that installs on a phone as an app.',
      techStack: [
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'PostgreSQL',
        'Tailwind CSS',
        'Framer Motion',
        'React Email',
        'Resend',
        'React PDF',
        'Zod',
        'Vercel Cron',
      ],
      features: [
        'Step-by-step booking wizard: service, length, extras, schedule and details',
        '"Book this look": start a booking from any gallery photo or video',
        'Live slot availability from admin-managed hours and blocked time',
        'Deposit calculation with payment tracking (transfer, cash, POS)',
        'Admin dashboard for bookings, calendar, clients, services and team',
        'Contact inbox with email replies and bulk delete',
        'Automated confirmation and reminder emails on a daily cron',
        'Photo and video gallery plus client reviews with admin moderation',
        'Yearly revenue report exported as PDF',
        'Installable PWA for clients and admin, with an offline fallback',
        'Mobile-first layout with a sticky "Book Appointment" bar',
      ],
      story: {
        brief:
          'The studio took bookings by hand over Instagram DMs and WhatsApp: clients waited on replies for prices and availability, and manual scheduling risked double-bookings and lost appointment details.',
        approach:
          'A Next.js app on Supabase with row-level security, server actions validated by Zod, and a Postgres unique index so two clients can never grab the same start time. The owner controls the diary by blocking time instead of the app enforcing rigid durations.',
        outcome:
          'Clients see prices, pick a slot and book without waiting on a DM, and the owner manages the whole business from a phone-installable dashboard with automatic reminders and a year-end revenue report.',
      },
      liveUrl: 'https://thenailhive.vercel.app',
      gallery: [
        { src: '/projects/nailhive.jpg', alt: 'THENAILHIVE homepage hero with Book an Appointment and View Gallery buttons', caption: 'Homepage' },
        { src: '/projects/nailhive-services.jpg', alt: 'THENAILHIVE services page with prices by nail length', caption: 'Services & prices' },
        { src: '/projects/nailhive-gallery.jpg', alt: 'THENAILHIVE gallery filtered by acrylic, gel, BIAB, nail art and toes', caption: 'Gallery' },
        { src: '/projects/nailhive-booking.jpg', alt: 'Booking wizard step one: choose a service, with the appointment card', caption: 'Booking: service' },
        { src: '/projects/nailhive-booking-length.jpg', alt: 'Booking wizard step two: choose a length, with prices per length', caption: 'Booking: length' },
        { src: '/projects/nailhive-admin-dashboard.jpg', alt: 'Admin dashboard with today\'s revenue, deposits, schedule and recent bookings (client names blurred)', caption: 'Admin: dashboard' },
        { src: '/projects/nailhive-admin-bookings.jpg', alt: 'Admin bookings table with status filters, deposits and payment status (client names blurred)', caption: 'Admin: bookings' },
        { src: '/projects/nailhive-admin-calendar.jpg', alt: 'Admin month calendar showing bookings by day and payment status', caption: 'Admin: calendar' },
        { src: '/projects/nailhive-admin-services.jpg', alt: 'Admin services editor with price tiers, durations and active toggles', caption: 'Admin: services & pricing' },      ],
    }}
  />
);

export default React.memo(NailHiveRealm);
