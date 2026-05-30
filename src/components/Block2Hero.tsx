import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Block2Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-07-18T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F3EBE6] to-[#FAF7F2] overflow-hidden border-t border-[#E8D8CE]/50">
      {/* Delicate floating background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8D8CE]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A394]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6 flex items-center justify-center gap-4 text-[#8C7365]"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A394]" />
          <span className="font-serif italic text-lg sm:text-xl text-[#8C7365]">Мы женимся</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A394]" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-[#4A3B32] uppercase font-serif mb-8 select-none leading-tight"
        >
          ПОЛИНА <span className="text-[#D4A394] font-light">&</span> БОГДАН
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-block border-y border-[#D4A394]/50 py-4 px-8 mb-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-sm"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-widest text-[#4A3B32]">
            18/07/2026
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8C7365] mb-6 font-sans">До свадьбы осталось</p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto font-sans">
            {[
              { label: 'Дней', value: timeLeft.days },
              { label: 'Часов', value: timeLeft.hours },
              { label: 'Минут', value: timeLeft.minutes },
              { label: 'Секунд', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-md border border-[#E8D8CE] p-3 sm:p-5 rounded-2xl shadow-sm">
                <div className="text-2xl sm:text-4xl md:text-5xl font-light text-[#4A3B32] mb-1 font-serif">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8C7365] font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
