import React from 'react';
import { motion } from 'framer-motion';

export const Block4Calendar: React.FC = () => {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  // July 2026 starts on Wednesday (index 2 in 0-indexed Mon-Sun)
  // 31 days in July
  const emptyDays = [null, null]; // Mon, Tue
  const daysInJuly = Array.from({ length: 31 }, (_, i) => i + 1);
  const allCalendarSlots = [...emptyDays, ...daysInJuly];

  return (
    <section id="calendar" className="py-24 sm:py-32 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2] border-t border-[#E8D8CE]/40 relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8C7365] font-sans">Дата торжества</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-script)' }}
          className="text-6xl sm:text-7xl md:text-8xl text-[#4A3B32] mb-12 font-normal select-none"
        >
          Июль 2026
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl border border-[#E8D8CE] relative"
        >
          {/* Subtle floral watermark top right */}
          <div className="absolute top-2 right-4 text-3xl opacity-10 select-none text-[#D4A394]">❀</div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-2 mb-6 border-b border-[#E8D8CE] pb-4 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#8C7365]">
            {daysOfWeek.map((day, idx) => (
              <div key={idx} className={idx >= 5 ? "text-[#D4A394]" : "text-[#4A3B32]"}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-base sm:text-lg font-serif">
            {allCalendarSlots.map((day, idx) => {
              if (!day) {
                return <div key={`empty-${idx}`} className="text-transparent">0</div>;
              }

              const isCelebrationDay = day === 18;

              return (
                <div 
                  key={day} 
                  className="relative flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 mx-auto"
                >
                  {isCelebrationDay ? (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <svg className="absolute w-14 sm:w-16 h-16 sm:h-20 text-[#D4A394] animate-pulse-soft" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g transform="rotate(-18 50 60)">
                          <path d="M42 12H58V32L66 44V98C66 107 59 114 50 114C41 114 34 107 34 98V44L42 32V12Z" fill="#FAF7F2" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                          <path d="M41 12H59V5H41V12Z" fill="#C5A880" stroke="#C5A880" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M38 70H62" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
                          <path d="M38 82H62" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
                        </g>
                      </svg>
                      <span className="relative z-20 font-bold text-lg sm:text-xl text-[#4A3B32]">{day}</span>
                    </div>
                  ) : (
                    <span className="text-[#4A3B32] hover:text-[#D4A394] transition-colors">{day}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8D8CE] flex items-center justify-center gap-3 text-sm text-[#8C7365]">
            <span className="inline-block w-3 h-3 rounded-full bg-[#D4A394] animate-ping" />
            <span className="font-sans font-medium uppercase tracking-wider text-xs">Суббота, 18 Июля 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
