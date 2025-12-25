import React from 'react';
import { IMAGES } from '../constants';
import { ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={IMAGES.HERO} 
          alt="فندق البارون - كورنيش الموصل" 
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns" // Added Ken Burns effect placeholder class logic if needed, or just keep static scale
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cube-coat.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-16">
        
        {/* Stars Badge */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 animate-fade-in-up shadow-lg">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-gold-400 text-gold-400 drop-shadow-sm" />
            ))}
          </div>
          <span className="text-xs font-bold tracking-wide uppercase text-gold-100 border-r border-white/20 pr-2 mr-2">5 نجوم</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          فندق البارون <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-200 to-gold-500">السياحي</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-light drop-shadow-md opacity-90">
          تجربة إقامة استثنائية على ضفاف <span className="text-gold-300 font-semibold">نهر دجلة</span>. الفخامة والراحة في قلب الموصل النابض.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-lg mx-auto">
          <a 
            href="#contact" 
            className="flex-1 bg-gold-gradient hover:bg-gold-gradient-hover text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(217,159,22,0.4)] hover:shadow-[0_0_30px_rgba(217,159,22,0.6)] hover:-translate-y-1 active:scale-95 text-center"
          >
            احجز الآن
          </a>
          <a 
            href="#gallery" 
            className="flex-1 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-8 rounded-2xl font-bold text-lg transition-all hover:border-gold-400/50 hover:text-gold-100 text-center"
          >
             استكشف الفندق
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group">
          <span className="text-xs uppercase tracking-widest font-medium group-hover:tracking-[0.2em] transition-all">اكتشف المزيد</span>
          <div className="w-10 h-16 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm group-hover:border-gold-400/50 transition-colors">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;