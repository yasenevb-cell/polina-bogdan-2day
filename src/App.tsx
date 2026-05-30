import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Block1Cover } from './components/Block1Cover';
import { Block2Hero } from './components/Block2Hero';
import { Block3Envelope } from './components/Block3Envelope';
import { Block4Calendar } from './components/Block4Calendar';
import { Block5Registration } from './components/Block5Registration';
import { Block6Celebration } from './components/Block6Celebration';
import { Block7Gallery } from './components/Block7Gallery';
import { Block8Wishes } from './components/Block8Wishes';
import { Block9RSVP } from './components/Block9RSVP';
import { Footer } from './components/Footer';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3B32] font-sans selection:bg-[#E8D8CE] selection:text-[#4A3B32] overflow-x-hidden">
      {/* Navigation Header */}
      <Header isUnlocked={isUnlocked} />

      <main className="relative">
        {/* BLOCK 1: Initial Cover with interactive photo */}
        <Block1Cover onUnlock={handleUnlock} isUnlocked={isUnlocked} />

        {/* BLOCKS 2-9: Revealed upon clicking photo */}
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-20"
            >
              {/* BLOCK 2: Names, Date & Countdown */}
              <Block2Hero />

              {/* BLOCK 3: Envelope and Letter */}
              <Block3Envelope />

              {/* BLOCK 4: July 2026 Calendar with champagne bottle highlight */}
              <Block4Calendar />

              {/* BLOCK 5: Celebration venue details & Yandex Map link */}
              <Block6Celebration />

              {/* BLOCK 7: Gallery Carousel */}
              <Block7Gallery />

              {/* BLOCK 8: Wishes (Dress code, Flowers, Gifts) */}
              <Block8Wishes />

              {/* Registration details */}
              <Block5Registration />

              {/* BLOCK 9: RSVP Button & Deadline */}
              <Block9RSVP />

              {/* Footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
