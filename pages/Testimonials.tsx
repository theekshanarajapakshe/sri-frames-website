
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Client Voices</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Hear from the Sri Lankan businesses we've helped go global.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        {/*
          DEVELOPER NOTE: To add more testimonials, go to constants.tsx 
          and append a new object to the TESTIMONIALS array.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 glassmorphism rounded-[2.5rem] relative group hover:-translate-y-2 transition-all">
              <Quote className="text-brand-primary/10 absolute -top-4 -left-4 group-hover:text-brand-primary/30 transition-colors" size={80} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-primary" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-10 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl">
                  <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-brand-primary/70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-display font-bold mb-8">Join our growing list of satisfied partners</h2>
          <p className="text-slate-400 mb-12">
            Your success is our reputation. We treat every project as our most important one.
          </p>
          <div className="flex justify-center gap-12 grayscale opacity-30">
            <div className="text-2xl font-display font-black">LOGO 1</div>
            <div className="text-2xl font-display font-black">LOGO 2</div>
            <div className="text-2xl font-display font-black">LOGO 3</div>
            <div className="text-2xl font-display font-black">LOGO 4</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
