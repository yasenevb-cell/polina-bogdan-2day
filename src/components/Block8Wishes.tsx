import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flower2, Gift, Palette } from 'lucide-react';

export const Block8Wishes: React.FC = () => {
  return (
    <section id="wishes" className="py-24 sm:py-32 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F3EBE6] to-[#FAF7F2] border-t border-[#E8D8CE]/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-4 flex items-center justify-center gap-2 text-[#8C7365]"
          >
            <Sparkles size={16} className="text-[#D4A394]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium font-sans">Важные детали</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-script)' }}
            className="text-6xl sm:text-7xl md:text-8xl text-[#4A3B32] font-normal select-none"
          >
            Несколько пожеланий
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Item 1: Dress code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E8D8CE] flex flex-col items-center text-center relative group hover:bg-white transition-colors duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-[#F5EFEB] group-hover:bg-[#D4A394] text-[#D4A394] group-hover:text-white transition-all duration-500 flex items-center justify-center mb-6 shadow-sm">
              <Palette size={28} />
            </div>

            <h3 className="text-2xl font-serif text-[#4A3B32] font-semibold mb-4">
              Дресс-код
            </h3>

            <p className="text-[#4A3B32] font-serif font-light leading-relaxed mb-6 flex-grow text-base sm:text-lg">
              Дресс-кода нет, одевайтесь удобно! На территории есть бассейн и баня, поэтому берите с собой купальники, плавки и хорошее настроение.
            </p>
          </motion.div>

          {/* Item 2: Flowers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E8D8CE] flex flex-col items-center text-center relative group hover:bg-white transition-colors duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-[#F5EFEB] group-hover:bg-[#D4A394] text-[#D4A394] group-hover:text-white transition-all duration-500 flex items-center justify-center mb-6 shadow-sm">
              <Flower2 size={28} />
            </div>

            <h3 className="text-2xl font-serif text-[#4A3B32] font-semibold mb-4">
              Цветы
            </h3>

            <p className="text-[#4A3B32] font-serif font-light leading-relaxed mb-6 flex-grow text-base sm:text-lg">
              Пожалуйста, не дарите нам срезанные цветы. Мы сразу улетаем в свадебное путешествие и не успеем насладиться их красотой.
            </p>

            <div className="w-full pt-6 border-t border-[#E8D8CE]/60 font-sans text-xs text-[#8C7365] italic flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A394]" />
              Благодарим за понимание
            </div>
          </motion.div>

          {/* Item 3: Gifts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E8D8CE] flex flex-col items-center text-center relative group hover:bg-white transition-colors duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-[#F5EFEB] group-hover:bg-[#D4A394] text-[#D4A394] group-hover:text-white transition-all duration-500 flex items-center justify-center mb-6 shadow-sm">
              <Gift size={28} />
            </div>

            <h3 className="text-2xl font-serif text-[#4A3B32] font-semibold mb-4">
              Подарки
            </h3>

            <p className="text-[#4A3B32] font-serif font-light leading-relaxed mb-6 flex-grow text-base sm:text-lg">
              Если вы хотите сделать нам ценный подарок, мы будем признательны за вклад в бюджет нашей молодой семьи в конверте.
            </p>

            <div className="w-full pt-6 border-t border-[#E8D8CE]/60 font-sans text-xs text-[#8C7365] flex items-center justify-center gap-2 font-medium uppercase tracking-wider">
              <span>Приятные сюрпризы</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
