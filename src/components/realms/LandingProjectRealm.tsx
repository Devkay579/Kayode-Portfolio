import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const LandingProjectRealm = () => {
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
        <h1 className="text-5xl font-bold glitch mb-6" data-text="LANDING PAGE PROJECT">LANDING PAGE PROJECT</h1>
        <p className="text-xl text-gray-300 mb-8">
          A high‑conversion landing page with parallax scroll and micro‑interactions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-yellow-500">
            <h2 className="text-2xl text-yellow-400 mb-4">Highlights</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Parallax scrolling effects</li>
              <li>Scroll‑triggered animations</li>
              <li>Mobile‑optimised</li>
              <li>A/B tested call‑to‑actions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-green-500">
            <h2 className="text-2xl text-green-400 mb-4">Tech Stack</h2>
            <ul className="space-y-2 text-gray-300">
              <li>React + TypeScript</li>
              <li>GSAP + Framer Motion</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://landing.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            View Live <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingProjectRealm;