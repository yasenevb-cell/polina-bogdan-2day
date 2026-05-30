import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Calendar } from 'lucide-react';

export const Block9RSVP: React.FC = () => {
  const handleRsvpClick = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#D4A394', '#E8D8CE', '#FAF7F2', '#C5A880', '#8C7365']
    });
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8D8CE]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#F5EFEB] p-10 sm:p-16 md:p-20 rounded-[40px] border-2 border-[#E8D8CE] shadow-2xl relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#4A3B32] text-[#D4A394] rounded-full flex items-center justify-center shadow-lg border-2 border-[#FAF7F2]">
            <Calendar size={22} />
          </div>

          <h2 
            style={{ fontFamily: 'var(--font-script)' }}
            className="text-6xl sm:text-7xl md:text-8xl text-[#4A3B32] font-normal select-none mb-8"
          >
            Будем рады Вам!
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-[#4A3B32] mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Просим подтвердить ваше присутствие не позднее 18 июня 2026 года.
          </p>

          <div className="mb-8">
            <a
              href="https://forms.gle/JK94uG97QvijjXTv6"
              onClick={handleRsvpClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#4A3B32] hover:bg-[#D4A394] text-white rounded-full font-sans text-sm sm:text-base tracking-[0.2em] uppercase font-medium shadow-2xl hover:shadow-[#D4A394]/50 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <Check size={20} className="text-[#D4A394] group-hover:text-white transition-colors animate-bounce" />
              Подтвердить присутствие
            </a>
          </div>

          <div className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#8C7365]">
            18 Июля 2026 • Самара
          </div>
        </motion.div>
      </div>
    </section>
  );
};
