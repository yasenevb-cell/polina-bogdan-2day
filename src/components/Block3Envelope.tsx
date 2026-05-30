import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Heart } from 'lucide-react';

export const Block3Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4A394', '#E8D8CE', '#FAF7F2', '#8C7365']
    });
  };

  return (
    <section id="invitation" className="py-24 sm:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Handwritten Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'var(--font-script)' }}
          className="text-6xl sm:text-7xl md:text-8xl text-[#4A3B32] mb-12 font-normal select-none"
        >
          Дорогие гости!
        </motion.h2>

        {/* Envelope Container */}
        <div className="relative max-w-xl mx-auto min-h-[420px] flex items-center justify-center my-8">
          <AnimatePresence>
            {!isOpen ? (
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-[#F3EBE6] p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#E8D8CE] relative flex flex-col items-center justify-center aspect-[4/3]"
              >
                {/* Envelope fold styling */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#E8D8CE]/50 to-transparent rounded-t-3xl border-b border-[#D4A394]/30" />
                <div className="absolute inset-0 border-8 border-white/40 rounded-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4A394] to-[#C5A880] text-white flex items-center justify-center shadow-lg animate-pulse-soft">
                    <Mail size={36} />
                  </div>
                  
                  <div className="text-[#4A3B32] font-serif italic text-xl sm:text-2xl">
                    Для самых близких
                  </div>

                  <button
                    onClick={handleOpen}
                    className="px-8 py-4 bg-[#4A3B32] hover:bg-[#D4A394] text-white rounded-full font-sans text-sm tracking-[0.2em] uppercase font-medium shadow-xl hover:shadow-[#D4A394]/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center gap-2 group"
                  >
                    Открыть письмо
                    <Heart size={16} className="text-[#D4A394] group-hover:text-white transition-colors animate-pulse" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="open-letter"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-full bg-white p-8 sm:p-14 md:p-16 rounded-3xl shadow-2xl border border-[#E8D8CE] relative overflow-hidden"
              >
                {/* Delicate corner ornaments */}
                <div className="absolute top-4 left-4 text-2xl text-[#D4A394] opacity-40 select-none font-serif">❦</div>
                <div className="absolute top-4 right-4 text-2xl text-[#D4A394] opacity-40 select-none font-serif">❦</div>
                <div className="absolute bottom-4 left-4 text-2xl text-[#D4A394] opacity-40 select-none font-serif">❦</div>
                <div className="absolute bottom-4 right-4 text-2xl text-[#D4A394] opacity-40 select-none font-serif">❦</div>

                <div className="max-w-prose mx-auto flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#F5EFEB] text-[#D4A394] flex items-center justify-center mb-6">
                    <Heart size={24} fill="currentColor" />
                  </div>

                  <p className="text-xl sm:text-2xl md:text-3xl text-[#4A3B32] font-serif leading-relaxed italic mb-8 font-light">
                    "Официальную часть мы берем на себя, а вас ждем на самую веселую! Приглашаем вас на второй день нашей свадьбы. Никакого официоза - только любимые друзья, классная атмосфера и отличный повод повеселиться вместе."
                  </p>

                  <div className="w-24 h-px bg-[#D4A394] mb-6" />

                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm uppercase tracking-widest text-[#8C7365] font-sans">
                    <span>18 Июля 2026</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Самара</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
