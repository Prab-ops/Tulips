import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PasswordScreen from './components/PasswordScreen';
import IntroSection from './components/IntroSection';
import TulipGarden from './components/TulipGarden';
import AdorationCards from './components/AdorationCards';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import FinalSection from './components/FinalSection';
import MusicPlayer from './components/MusicPlayer';
import Tulip from './components/Tulip';
export default function App() {
  const [unlocked, setUnlocked] = useState(false); const [top, setTop] = useState(false); const [cur, setCur] = useState(null);
  useEffect(() => {
    const s = () => setTop(window.scrollY > 600);
    const m = (e) => { if (e.pointerType === 'mouse') setCur({ x: e.clientX, y: e.clientY }); };
    addEventListener('scroll', s, { passive: true }); addEventListener('pointermove', m);
    return () => { removeEventListener('scroll', s); removeEventListener('pointermove', m); };
  }, []);
  return (
    <>
      <AnimatePresence>{!unlocked && <PasswordScreen key="pw" onUnlock={() => setUnlocked(true)} />}</AnimatePresence>
      {unlocked && <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <IntroSection /><TulipGarden />
        <p className="bg-blush py-6 text-center font-hand text-2xl text-rose">psst… keep scrolling ↓</p>
        <AdorationCards /><PhotoGallery /><LoveLetter /><FinalSection />
      </motion.main>}
      <MusicPlayer autoStart={unlocked} />
      {cur && unlocked && <div className="pointer-events-none fixed z-50 hidden md:block" style={{ left: cur.x + 12, top: cur.y + 8, transition: 'left .15s,top .15s' }}><Tulip size={14} color="#f08aa6" /></div>}
      {top && <button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="back to top" className="fixed bottom-4 right-4 z-40 rounded-full bg-cream/90 p-2 shadow-lg"><Tulip size={14} color="#d6384f" /></button>}
    </>
  );
}
