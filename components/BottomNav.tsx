import React, { useState, useEffect } from 'react';
import { Home, Image, Coffee, Phone, Star } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy to highlight active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'gallery', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', icon: Home, label: 'الرئيسية' },
    { id: 'services', icon: Coffee, label: 'خدماتنا' },
    { id: 'gallery', icon: Image, label: 'الصور' },
    { id: 'testimonials', icon: Star, label: 'الآراء' },
    { id: 'contact', icon: Phone, label: 'اتصل' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 z-[100] md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-safe">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[60px] transition-all duration-300 ${
                isActive ? 'text-gold-600 -translate-y-1' : 'text-slate-400'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-gold-50' : 'bg-transparent'}`}>
                <item.icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;