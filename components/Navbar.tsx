import React, { useState, useEffect } from 'react';
import { IMAGES, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'top-0 py-3 bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'top-0 py-4 md:py-6 bg-gradient-to-b from-black/50 to-transparent md:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`relative overflow-hidden rounded-full border-2 border-gold-400 shadow-md transition-all duration-300 ${scrolled ? 'w-9 h-9 md:w-10 md:h-10' : 'w-12 h-12 md:w-14 md:h-14'}`}>
            <img 
              src={IMAGES.LOGO} 
              alt="شعار فندق البارون" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={`flex flex-col transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            <span className="font-bold text-lg md:text-2xl leading-none tracking-tight">البارون</span>
            <span className={`text-[10px] md:text-sm font-light tracking-widest uppercase mt-0.5 ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}>Hotel & Suites</span>
          </div>
        </a>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                scrolled 
                  ? 'text-slate-700 hover:text-gold-600 hover:bg-gold-50' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div>
           <a 
            href="#contact"
            className={`
              ${scrolled ? 'bg-gold-gradient text-white' : 'bg-white/20 backdrop-blur-md text-white border border-white/30'}
              px-5 py-2 md:px-7 md:py-2.5 rounded-full font-bold shadow-lg hover:shadow-gold-500/50 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 text-sm md:text-base
            `}
          >
            احجز الآن
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;