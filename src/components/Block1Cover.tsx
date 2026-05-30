import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

interface Block1CoverProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export const Block1Cover: React.FC<Block1CoverProps> = ({ onUnlock, isUnlocked }) => {
  const handlePhotoClick = () => {
    if (!isUnlocked) {
      // Trigger soft romantic confetti
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4A394', '#E8D8CE', '#FAF7F2', '#C5A880']
      });
      onUnlock();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]">
      {/* Decorative floral watermark / background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#E8D8CE] blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#D4A394] blur-3xl opacity-40" />
      </div>

      <div className="max-w-2xl w-full mx-auto text-center z-10 flex flex-col items-center">
        {/* Large Handwritten Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ fontFamily: 'var(--font-script)' }}
          className="text-6xl sm:text-8xl md:text-9xl font-normal text-[#4A3B32] mb-8 tracking-wide drop-shadow-sm select-none"
        >
          Приглашение на свадьбу
        </motion.h1>

        {/* Interactive Couple Photo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          onClick={handlePhotoClick}
          className="relative cursor-pointer group mb-8 px-4"
        >
          {/* Outer ornamental border / glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#D4A394] to-[#C5A880] rounded-t-[100px] rounded-b-3xl opacity-40 blur-xl group-hover:opacity-75 transition duration-700 animate-pulse-soft" />
          
          <div className="relative bg-[#FAF7F2] p-3 pt-4 sm:p-4 sm:pt-6 pb-6 sm:pb-8 shadow-2xl rounded-t-[100px] rounded-b-3xl border border-[#E8D8CE] transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="overflow-hidden rounded-t-[90px] rounded-b-2xl aspect-square max-w-sm sm:max-w-md mx-auto shadow-inner relative">
              <img 
                src="https://s10.iimage.su/s/30/ghXvMXuxjkHOP9cE96c90Jfm6fXMeYc4ZEttAGZQ5.jpg" 
                alt="Полина & Богдан"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 group-hover:bg-black/10">
                  <span className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[#4A3B32] font-semibold text-sm tracking-wider uppercase shadow-lg flex items-center gap-2 group-hover:bg-white group-hover:text-[#D4A394] transition-all">
                    <Heart size={18} className="animate-bounce text-[#D4A394]" /> Нажмите на фото
                  </span>
                </div>
              )}
            </div>

            {/* Subtle photo frame label */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[#8C7365] font-serif italic text-lg sm:text-xl">
              <span>С Любовью</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4A394]" />
              <span>18 Июля 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Text prompt below photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#8C7365] font-sans text-base sm:text-lg tracking-wide font-light max-w-md text-center">
            {isUnlocked 
              ? "Приглашение открыто! Листайте ниже" 
              : "Нажмите на фото чтобы открыть приглашение"
            }
          </p>

          {!isUnlocked && (
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-2 text-[#D4A394]"
            >
              <span className="block text-2xl">↓</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
