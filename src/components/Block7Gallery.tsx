import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  "https://s10.iimage.su/s/30/gH6Jd6qxYrSVHVpsOrdXjJkR951LFHvdzvfTMENmH.jpg",
  "https://s10.iimage.su/s/30/gSJ69rwx07SJJ0QXYqqziRz5FfaQpTZchUjiVmosF.jpg",
  "https://s10.iimage.su/s/30/gVDSdwDxkKyDVZMuPrkEXqY8wY1tnV2r1bCmqPqDD.jpg",
  "https://s10.iimage.su/s/30/g0dItkAxsKWlZ7Cs1DF52Th4MJRE1HbOYDbSy8kz4.jpg",
  "https://s10.iimage.su/s/30/grJMO8KxSn2898NzUPOFgFzjrpHtCFG8fiWRMbQHH.jpg",
  "https://s10.iimage.su/s/30/gVC0bbLxIBDPKAHGlZEayX5tBneJ4jWE7HKOX7PGv.jpg"
];

export const Block7Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isInteractingRef = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PHOTOS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? PHOTOS.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isInteractingRef.current) {
        nextSlide();
      }
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handleManualNav = (index: number) => {
    isInteractingRef.current = true;
    setCurrentIndex(index);
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 5000);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'var(--font-script)' }}
          className="text-7xl sm:text-8xl md:text-9xl text-[#4A3B32] font-normal select-none mb-2"
        >
          МЫ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#8C7365] font-serif italic text-base sm:text-lg mb-12 tracking-wide font-light"
        >
          (если вы забыли как мы выглядим)
        </motion.p>

        {/* Carousel Container */}
        <div 
          className="relative max-w-2xl mx-auto px-4 sm:px-0"
          onMouseEnter={() => { isInteractingRef.current = true; }}
          onMouseLeave={() => { isInteractingRef.current = false; }}
        >
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-2xl border-4 border-white bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={PHOTOS[currentIndex]}
                alt={`Фото Полина и Богдан ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            {/* Subtle Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Manual Navigation Arrows */}
            <button
              onClick={() => { prevSlide(); isInteractingRef.current = true; }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer z-20 focus:outline-none"
              title="Предыдущее фото"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => { nextSlide(); isInteractingRef.current = true; }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer z-20 focus:outline-none"
              title="Следующее фото"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualNav(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-10 h-3 bg-[#D4A394] shadow-sm shadow-[#D4A394]/50' 
                    : 'w-3 h-3 bg-[#E8D8CE] hover:bg-[#D4A394]/60'
                }`}
                title={`Перейти к фото ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
