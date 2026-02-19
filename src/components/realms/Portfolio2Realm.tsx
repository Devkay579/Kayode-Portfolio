import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const Portfolio2Realm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-green-400 hover:text-green-300"
      >
        <ArrowLeft size={20} /> Back to portals
      </button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold glitch mb-6" data-text="E-COMMERCE PLATFORM">E-COMMERCE PLATFORM</h1>
        <p className="text-xl text-gray-300 mb-8">
          A full‑stack online store with product management and checkout.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500">
            <h2 className="text-2xl text-cyan-400 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-300">
              <li>User authentication</li>
              <li>Product catalog with search</li>
              <li>Shopping cart & Stripe payments</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-green-500">
            <h2 className="text-2xl text-green-400 mb-4">Tech Stack</h2>
            <ul className="space-y-2 text-gray-300">
              <li>React + Redux</li>
              <li>Node.js + Express</li>
              <li>MongoDB</li>
              <li>Stripe API</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://ecommerce.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            View Demo <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio2Realm;