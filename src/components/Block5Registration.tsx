import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

export const Block5Registration: React.FC = () => {
  return (
    <section id="registration" className="py-24 sm:py-32 px-4 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center gap-2 text-[#8C7365] mb-4 font-sans uppercase text-xs tracking-[0.3em] font-medium">
              <Clock size={16} className="text-[#D4A394]" /> 15:00 • Торжественная часть
            </div>

            <h2 
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-6xl sm:text-7xl md:text-8xl text-[#4A3B32] mb-8 font-normal select-none leading-tight"
            >
              Место регистрации
            </h2>

            <p className="text-lg sm:text-xl font-serif text-[#4A3B32] mb-8 leading-relaxed font-light max-w-xl">
              Мы также будем рады разделить с вами радость создания нашей семьи! Ждем вас 17.07.2026 в 15:00 во Дворце бракосочетания г.о. Самара по адресу: г. Самара, ул. Молодогвардейская, д. 238.
            </p>

            <div className="flex items-center gap-4 p-4 bg-[#F5EFEB] rounded-2xl border border-[#E8D8CE] mb-10 w-full max-w-md shadow-sm">
              <div className="p-3 bg-[#D4A394] text-white rounded-full flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div className="text-left font-sans">
                <div className="font-semibold text-[#4A3B32] text-sm uppercase tracking-wider">Дворец бракосочетания</div>
                <div className="text-xs text-[#8C7365]">ул. Молодогвардейская, 238, Самара</div>
              </div>
            </div>

            <a
              href="https://yandex.ru/maps/?text=Молодогвардейская 238 Самара"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A3B32] hover:bg-[#D4A394] text-white rounded-full font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <Navigation size={18} className="text-[#D4A394] group-hover:text-white transition-colors" />
              Посмотреть на карте
            </a>
          </motion.div>

          {/* Right Column: Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative px-4 sm:px-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E8D8CE] to-[#F5EFEB] rounded-[40px] opacity-60 blur-xl" />
            <div className="relative bg-white p-4 sm:p-6 rounded-[32px] shadow-2xl border border-[#E8D8CE]">
              <div className="overflow-hidden rounded-[24px] aspect-[4/3] shadow-inner">
                <img 
                  src="https://drugoigorod.ru/wp-content/uploads/2016/08/DSC_0156-3-795x528.jpg" 
                  alt="Дворец бракосочетания Самара"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2 text-[#8C7365] font-serif italic text-sm">
                <span>Самарский Дворец Бракосочетания</span>
                <span>Сбор гостей в 14:30</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
