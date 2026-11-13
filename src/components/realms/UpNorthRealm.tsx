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
      image: { src: '/projects/upnorth-treats.jpg', alt: 'UpNorth Treats storefront hero' },
      description:
        'UpNorth Treats is an online store for Northern Nigerian snacks like kilishi and kulikuli. Customers browse and search the catalogue, build a cart that survives a page refresh, and check out with Paystack, then get a confirmation page and a printable receipt. Behind it, an admin dashboard manages products, image uploads and orders.',
      techStack: [
        'Next.js 16 (App Router)',
        'React 19',
        'TypeScript',
        'Supabase (Postgres, Auth, Storage)',
        'Paystack',
        'Zustand',
        'Tailwind CSS v4',
        'Framer Motion',
      ],
      features: [
        'Product catalogue with search',
        'Product pages with quantity selector, Add to Cart and Buy Now',
        'Persistent cart (Zustand + localStorage) with live subtotal',
        'Checkout with contact and shipping details, paid via Paystack',
        'Paystack webhook to confirm payments server-side',
        'Order confirmation page and printable receipt',
        'Customer sign-up, sign-in and order history (Supabase Auth)',
        'Admin dashboard: add, edit, archive and restore products',
        'Product image upload to Supabase Storage',
        'Order management with pending → paid → shipped → delivered status',
      ],
      gallery: [
        { src: '/projects/upnorth-treats.jpg', alt: 'Homepage hero with kilishi and kulikuli packs', caption: 'Homepage' },
        { src: '/projects/upnorth-treats-home-2.jpg', alt: 'Featured products grid with Add to Cart buttons', caption: 'Featured products' },
        { src: '/projects/upnorth-treats-products.jpg', alt: 'All products page with search', caption: 'Catalogue' },
        { src: '/projects/upnorth-treats-product.jpg', alt: 'Product page with quantity selector, Add to Cart and Buy Now', caption: 'Product page' },
        { src: '/projects/upnorth-treats-cart.jpg', alt: 'Cart with two items and order summary', caption: 'Cart' },
        { src: '/projects/upnorth-treats-checkout.jpg', alt: 'Checkout with contact, shipping and order summary', caption: 'Checkout' },
      ],
      liveUrl: 'https://upnorth-treats.vercel.app',
      repoUrl: 'https://github.com/Devkay579/Upnorth',
    }}
  />
);

export default React.memo(UpNorthRealm);
