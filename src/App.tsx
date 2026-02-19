import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { preloadSounds } from './services/sound';
import ParticleCanvas from './components/ui/ParticleCanvas';
import CustomCursor from './components/ui/CustomCursor';
import ProgressBar from './components/ui/ProgressBar';
import StickyNote from './components/ui/StickyNote'; // will update
// import PaperStack from './components/ui/PaperStack'; // optional
// import TableOfContents from './components/ui/TableOfContents'; // optional
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
// Realms
import GhostCodeRealm from './components/realms/GhostCodeRealm';
import Portfolio1Realm from './components/realms/Portfolio1Realm';
import Portfolio2Realm from './components/realms/Portfolio2Realm';
import LandingProjectRealm from './components/realms/LandingProjectRealm';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    preloadSounds();
  }, []);

  useEffect(() => {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);
  return () => document.removeEventListener('click', handleAnchorClick);
}, []);

  return (
    <>
      <ParticleCanvas />
      <CustomCursor />
      <ProgressBar />
      <StickyNote />
      {/* <PaperStack /> 
      <TableOfContents />  */}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Education />
                  <Projects />
                  <Contact />
                </main>
              }
            />
            <Route path="/realm/ghost" element={<GhostCodeRealm />} />
            <Route path="/realm/port1" element={<Portfolio1Realm />} />
            <Route path="/realm/port2" element={<Portfolio2Realm />} />
            <Route path="/realm/landing" element={<LandingProjectRealm />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;