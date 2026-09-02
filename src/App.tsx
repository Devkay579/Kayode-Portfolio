import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import ProgressBar from './components/ui/ProgressBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
const ParticleCanvas = lazy(() => import('./components/ui/ParticleCanvas'));
const CustomCursor = lazy(() => import('./components/ui/CustomCursor'));
const StickyNote = lazy(() => import('./components/ui/StickyNote'));
const GhostCodeRealm = lazy(() => import('./components/realms/GhostCodeRealm'));
const Portfolio1Realm = lazy(() => import('./components/realms/Portfolio1Realm'));
const Portfolio2Realm = lazy(() => import('./components/realms/Portfolio2Realm'));
const LandingProjectRealm = lazy(() => import('./components/realms/LandingProjectRealm'));
const PricePulseRealm = lazy(() => import('./components/realms/PricePulseRealm'));
const UpNorthRealm = lazy(() => import('./components/realms/UpNorthRealm'));

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showInteractiveOverlays, setShowInteractiveOverlays] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    setShowInteractiveOverlays(!prefersReducedMotion && pointerFine && window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Same-page section link, e.g. "#about" — only meaningful on the home page,
      // where these section ids actually exist in the DOM.
      if (href.startsWith('#')) {
        e.preventDefault();
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (location.pathname !== '/') {
          // We're on a realm page — route back home first, then scroll once mounted.
          navigate(`/${href}`);
        }
        return;
      }

      // Cross-page section link, e.g. "/#about" — used by the navbar while inside a realm.
      if (href.startsWith('/#')) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [location.pathname, navigate]);

  // After routing to "/" with a target hash (from the navbar on a realm page, or a
  // direct link like example.com/#projects), scroll to that section once it's mounted.
  // The page-transition (AnimatePresence, mode="wait") delays the new route's mount by
  // its exit-animation duration, so the target element may not exist yet on the first
  // frame — poll briefly instead of trying just once.
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    const id = location.hash.slice(1);
    let attempts = 0;
    let timeoutId: number;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        timeoutId = window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Suspense fallback={null}>
        {showInteractiveOverlays && <ParticleCanvas />}
        {showInteractiveOverlays && <CustomCursor />}
        {showInteractiveOverlays && <StickyNote />}
      </Suspense>
      <ProgressBar />
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
          <Suspense fallback={<div className="min-h-screen grid place-items-center text-[#2C5F4A]">Loading…</div>}>
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
              <Route path="/realm/price" element={<PricePulseRealm />} />
              <Route path="/realm/upnorth" element={<UpNorthRealm />} />
              <Route path="/realm/port1" element={<Portfolio1Realm />} />
              <Route path="/realm/port2" element={<Portfolio2Realm />} />
              <Route path="/realm/landing" element={<LandingProjectRealm />} />
            </Routes>
          </Suspense>
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