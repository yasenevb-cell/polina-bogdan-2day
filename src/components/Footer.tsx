import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A3B32] text-[#F5EFEB] py-16 px-4 border-t border-[#8C7365]/30">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <div style={{ fontFamily: 'var(--font-script)' }} className="text-4xl sm:text-5xl font-normal text-[#D4A394] select-none">
          Полина & Богдан
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-sans text-[#D2C2B5]">
          <span>18 Июля 2026</span>
          <Heart size={14} className="text-[#D4A394] fill-current animate-pulse" />
          <span>Самара</span>
        </div>

        <div className="h-px w-24 bg-[#8C7365]/40 my-2" />

        <div className="text-[11px] font-sans tracking-widest text-[#8C7365] uppercase">
          Сделано с любовью • Полина & Богдан
        </div>
      </div>
    </footer>
  );
};
