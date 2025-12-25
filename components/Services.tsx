import React from 'react';
import { Wifi, Utensils, Car, Snowflake, Monitor, BadgeDollarSign, MapPin, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const features = [
    { icon: Utensils, title: "مطعم وإفطار", desc: "بوفيه مفتوح" },
    { icon: Wifi, title: "واي فاي", desc: "سريع ومجاني" },
    { icon: Car, title: "موقف سيارات", desc: "مجاني وآمن" },
    { icon: Snowflake, title: "تكييف مركزي", desc: "تبريد وتدفئة" },
    { icon: BadgeDollarSign, title: "أفضل الأسعار", desc: "قيمة ممتازة" },
    { icon: Clock, title: "استقبال 24/7", desc: "خدمة دائمة" },
    { icon: Monitor, title: "شاشات ذكية", desc: "قنوات فضائية" },
    { icon: MapPin, title: "موقع مميز", desc: "إطلالة النهر" },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500 via-slate-900 to-slate-900"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-xs md:text-sm">رفاهية لا حدود لها</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 md:mt-3 mb-4 md:mb-6">خدماتنا</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg">كل ما تحتاجه لإقامة مريحة وعصرية في مكان واحد.</p>
        </div>

        {/* Updated Grid: grid-cols-2 on mobile with smaller gap */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 backdrop-blur-sm p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-gold-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden text-center md:text-right"
            >
              <div className="absolute -right-6 -top-6 w-16 h-16 md:w-24 md:h-24 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all"></div>
              
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700/50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-gold-400 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-lg mx-auto md:mx-0">
                <feature.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed group-hover:text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;