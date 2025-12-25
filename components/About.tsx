import React from 'react';
import { Star, MapPin, Clock, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="inline-block">
               <span className="text-gold-600 font-bold text-sm tracking-widest uppercase border-b-2 border-gold-400 pb-1">من نحن</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              أكثر من مجرد فندق، <br/>
              <span className="text-gold-500">تجربة حياة فاخرة.</span>
            </h2>
            
            <p className="text-slate-600 leading-8 text-lg md:text-xl font-light text-justify">
              يتميز فندق البارون بموقعه الاستراتيجي على كورنيش الجسر العتيق، مما يمنحه إطلالة بانورامية ساحرة على نهر دجلة. نحن نجمع بين الأصالة والحداثة لنقدم لنزلائنا تجربة لا تُنسى في مدينة الموصل العريقة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <FeatureCard icon={Star} title="خدمة 5 نجوم" desc="طاقم عمل مدرب لراحتك" />
              <FeatureCard icon={Clock} title="استقبال 24/7" desc="نحن هنا في أي وقت" />
              <FeatureCard icon={MapPin} title="موقع استراتيجي" desc="قلب الموصل النابض" />
              <FeatureCard icon={ShieldCheck} title="أمان وخصوصية" desc="راحة بال تامة" />
            </div>
          </div>

          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 min-h-[500px]">
             {/* Main Image */}
             <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
               <img 
                 src="https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/593408155_122229791540097645_3782225082647941419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGta2aDhlfDob2e1QQ9StWJbAPBofg3EcFsA8Gh-DcRwaiGdDEa953dT3UM1LgRC-fiA8zxcTArq7hQa0dnEDSB&_nc_ohc=tE7zIXJ7ynAQ7kNvwEM6ZCZ&_nc_oc=Adk-03s9LCUP3XHHCBmVUpnE5Vtx0vVMlBSKAXmrBj13IRQamE3yOZbKp-Y_D6VLLyk&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=EbPBvg5alxolh-6kCoXqdQ&oh=00_Afnepej7I3-hsLtpLp0K_-bXmg1pPcLhqfK0EAR-Ic6qpQ&oe=6952E214" 
                 alt="غرفة فاخرة" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
             </div>
             
             {/* Secondary Image Floating */}
             <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <img 
                 src="https://lh3.googleusercontent.com/p/AF1QipPxQFbeaUsL_CdKzRuoHzA7-Z9PB9gqus6bW_0X=w408-h510-k-no" 
                 alt="واجهة الفندق" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>

             {/* Decorative Circle */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-100/50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
    <div className="bg-gold-50 p-3 rounded-xl text-gold-600 shadow-sm">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  </div>
);

export default About;