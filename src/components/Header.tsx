import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  isUnlocked: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isUnlocked }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isUnlocked) return null;

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Письмо', href: '#invitation' },
    { label: 'Дата', href: '#calendar' },
    { label: 'Локации', href: '#registration' },
    { label: 'Мы', href: '#gallery' },
    { label: 'Пожелания', href: '#wishes' },
    { label: 'Подтверждение', href: '#rsvp' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#E8D8CE]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <span style={{ fontFamily: 'var(--font-script)' }} className="text-3xl sm:text-4xl font-normal text-[#4A3B32] group-hover:text-[#D4A394] transition-colors select-none">
              P & B
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.2em] font-medium text-[#8C7365]">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#4A3B32] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#D4A394] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A3B32] focus:outline-none cursor-pointer"
            aria-label="Меню навигации"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-30 bg-[#FAF7F2]/95 lg:hidden flex flex-col items-center justify-center px-6 pt-20"
          >
            <nav className="flex flex-col items-center gap-6 font-sans text-sm uppercase tracking-[0.25em] font-medium text-[#4A3B32]">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#D4A394] transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-8 py-4 bg-[#4A3B32] text-white rounded-full text-xs flex items-center gap-2 shadow-lg"
              >
                <Heart size={14} className="text-[#D4A394] animate-pulse" />
                Подтвердить присутствие
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
