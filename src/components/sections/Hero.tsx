import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 md:py-0">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-20 mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-[#2D2D2D] tracking-tight">
            Kayode Ogbetah
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#2C5F4A] mb-6 font-light max-w-2xl mx-auto md:mx-0">
            Full-stack developer specializing in immersive web experiences, memory‑driven apps, and modular, scalable architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, backgroundColor: '#2C5F4A', color: '#F5F2E8' }}
              className="border-2 border-[#2C5F4A] text-[#2C5F4A] px-8 py-3 rounded-lg font-medium transition"
            >
              View Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="bg-[#2D2D2D] text-[#F5F2E8] px-8 py-3 rounded-lg font-medium hover:bg-[#1E1E1E] transition"
            >
              Resume
            </motion.a>
          </div>
          <p className="mt-4 text-[#2C5F4A]/60 italic">
            Code. Create. Conquer.
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-sm mx-auto mt-8 md:mt-0"
        >
          {/* Main image container */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#2C5F4A] shadow-xl">
            <img
              src="/kayode-avatar.jpg" 
              alt="Kayode"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 bg-[#2C5F4A]/10 rounded-full flex items-center justify-center text-[#2C5F4A] font-bold border border-[#2C5F4A] backdrop-blur-sm text-sm sm:text-base"
          >
            <span>2+</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#2C5F4A]/10 rounded-full flex items-center justify-center text-[#2C5F4A] border border-[#2C5F4A] backdrop-blur-sm"
          >
            <span className="text-xs sm:text-sm"></span>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="absolute top-1/2 -left-4 sm:-left-6 w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#2C5F4A]/30 rounded-full"
          />
        </motion.div>
      </div>

      {/* Page corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#2C5F4A] opacity-10 rounded-tl-[80px] sm:rounded-tl-[100px]" />
    </section>
  );
};

export default Hero;