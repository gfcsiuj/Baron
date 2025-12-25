import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-3 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">جولة في الفندق</h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto">استمتع بمشاهدة تفاصيل الفخامة والرقي في غرف ومرافق فندق البارون.</p>
        </div>

        {/* Updated Grid: grid-cols-2 on mobile, smaller gap */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 auto-rows-[180px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className={`group relative rounded-xl md:rounded-2xl overflow-hidden shadow-md cursor-pointer ${
                // Make the first item span 2 columns on desktop only, keep uniform on mobile or customized
                index === 0 ? 'col-span-2 md:col-span-2' : ''
              } ${index === 4 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6">
                <span className="text-gold-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  {img.category === 'exterior' ? 'الخارج' : img.category === 'interior' ? 'الداخل' : 'المرافق'}
                </span>
                <h3 className="text-white text-sm md:text-xl font-bold translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-1 md:line-clamp-none">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center">
             <a 
            href="#contact"
            className="inline-block border-2 border-slate-900 text-slate-900 px-8 py-2.5 md:px-10 md:py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-wider text-xs md:text-sm"
          >
            احجز إقامتك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;