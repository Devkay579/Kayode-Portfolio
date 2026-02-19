import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const GhostCodeRealm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F2E8] p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-[#2C5F4A] hover:text-[#1E4A3A] transition"
      >
        <ArrowLeft size={20} /> Back to home
      </button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border-l-4 border-[#2C5F4A] p-8"
      >
        <h1 className="text-5xl font-light mb-4 text-[#2C5F4A]">Ghost Code</h1>
        <div className="flex items-center gap-4 text-sm text-[#8B8B8B] mb-6">
          <span className="flex items-center gap-1"><Calendar size={14} /> 2024</span>
          <span className="flex items-center gap-1"><User size={14} /> Lead Developer</span>
          <span className="flex items-center gap-1"><Tag size={14} /> Game</span>
        </div>
        <p className="text-lg text-[#2D2D2D] mb-8">
          A psychological memory game where you must recall codes under pressure.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F5F2E8] p-6 rounded border border-[#2C5F4A]/30">
            <h2 className="text-2xl font-light text-[#2C5F4A] mb-4">Tech Stack</h2>
            <ul className="space-y-2 text-[#2D2D2D]">
              <li>React + TypeScript</li>
              <li>NestJS + Prisma</li>
              <li>PostgreSQL (Supabase)</li>
              <li>Tailwind + Framer Motion</li>
            </ul>
          </div>
          <div className="bg-[#F5F2E8] p-6 rounded border border-[#2C5F4A]/30">
            <h2 className="text-2xl font-light text-[#2C5F4A] mb-4">Features</h2>
            <ul className="space-y-2 text-[#2D2D2D]">
              <li>Adaptive difficulty</li>
              <li>AI‑generated misinformation</li>
              <li>Global leaderboard</li>
              <li>Immersive sound design</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://your-ghost-code-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2C5F4A] text-white px-8 py-3 rounded-lg hover:bg-[#1E4A3A] transition"
          >
            Play Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GhostCodeRealm;