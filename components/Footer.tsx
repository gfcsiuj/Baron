import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
           <img 
            src={IMAGES.LOGO} 
            alt="شعار الفندق" 
            className="w-16 h-16 rounded-full border border-slate-700 grayscale hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
           />
        </div>
        <p className="mb-4 text-lg font-medium text-slate-300">فندق البارون السياحي</p>
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#hero" className="hover:text-gold-500 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-gold-500 transition-colors">عن الفندق</a>
          <a href="#gallery" className="hover:text-gold-500 transition-colors">الصور</a>
          <a href="#contact" className="hover:text-gold-500 transition-colors">اتصل بنا</a>
        </div>
        <div className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} فندق البارون السياحي - الموصل. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;