import React from 'react';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, MessageCircle, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">تواصل معنا</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">جاهزون لاستقبالك</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                نحن بانتظار زيارتكم في فندق البارون السياحي. للحجز والاستفسار يرجى التواصل عبر الأرقام أو وسائل التواصل الاجتماعي.
              </p>
            </div>

            <div className="grid gap-6">
               <ContactItem icon={MapPin} title="العنوان" content={CONTACT_INFO.address} />
               <ContactItem icon={Phone} title="الهاتف" content={
                 <div className="flex flex-col items-start gap-1" dir="ltr">
                    {CONTACT_INFO.phones.map(phone => (
                       <a key={phone} href={`tel:${phone}`} className="hover:text-gold-400 transition-colors">{phone}</a>
                     ))}
                 </div>
               } />
               <ContactItem icon={Mail} title="البريد الإلكتروني" content={<a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold-400">{CONTACT_INFO.email}</a>} />
               <ContactItem icon={Clock} title="ساعات العمل" content="مفتوح دائماً (24 ساعة / 7 أيام)" />
            </div>
            
            <div className="pt-8 flex flex-wrap gap-4">
              <SocialBtn href={CONTACT_INFO.facebook} icon={Facebook} label="Facebook" color="bg-[#1877F2]" />
              <SocialBtn href={CONTACT_INFO.instagram} icon={Instagram} label="Instagram" color="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
              <SocialBtn href={`https://wa.me/${CONTACT_INFO.whatsapp}`} icon={MessageCircle} label="Whatsapp" color="bg-[#25D366]" />
            </div>
          </div>

          {/* Map Card */}
          <div className="h-full min-h-[400px] w-full bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative group p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <iframe 
                src={CONTACT_INFO.locationMap} 
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '400px'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                title="موقع فندق البارون السياحي"
                ></iframe>
                
                {/* Overlay Button */}
                <a 
                    href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" // Ideally replace with real link or keep iframe interaction
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 left-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-gold-500 hover:text-white transition-all group/btn"
                >
                    <span>فتح في الخرائط</span>
                    <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" />
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, title, content }: { icon: any, title: string, content: React.ReactNode }) => (
  <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
    <div className="bg-slate-800 p-3.5 rounded-xl text-gold-500 shadow-lg shadow-black/20">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <div className="text-slate-400 font-medium text-base">{content}</div>
    </div>
  </div>
);

const SocialBtn = ({ href, icon: Icon, label, color }: { href: string, icon: any, label: string, color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center gap-3 ${color} hover:brightness-110 text-white px-6 py-3.5 rounded-xl transition-all font-bold shadow-lg hover:-translate-y-1 active:scale-95`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

export default Contact;