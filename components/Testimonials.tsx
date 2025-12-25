import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-wider uppercase text-sm bg-gold-50 px-4 py-1 rounded-full">آراء حقيقية</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-4">تجارب نزلائنا السعداء</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {REVIEWS.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-100 flex flex-col relative group hover:-translate-y-1"
            >
              <div className="absolute top-8 left-8 text-gold-100 group-hover:text-gold-400 transition-colors duration-500">
                <Quote size={64} className="transform rotate-180" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`${i < review.rating ? 'fill-gold-400 text-gold-400' : 'fill-slate-100 text-slate-100'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-8 mb-8 text-lg font-medium relative z-10">
                "{review.content}"
              </p>

              <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center text-gold-700 font-black text-xl shadow-inner">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{review.author}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                     <span>{review.date}</span>
                     <span>•</span>
                     <span className="text-blue-500 font-medium flex items-center gap-1">
                       Google Reviews
                     </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a 
               href="https://www.google.com/search?q=Al+Baron+Hotel+Mosul" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-slate-500 hover:text-gold-600 font-bold transition-colors border-b-2 border-slate-200 hover:border-gold-600 pb-1"
             >
               اقرأ المزيد من المراجعات على Google Maps
             </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;