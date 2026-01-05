
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Expertise</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand from concept to global reach.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((s) => {
            // Dynamically get the icon component
            const IconComponent = (Icons as any)[s.icon] || Icons.HelpCircle;
            return (
              <div key={s.id} className="group p-8 glassmorphism rounded-3xl border border-white/5 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all"></div>
                
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all text-brand-primary">
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {s.description}
                </p>
                
                <button className="text-brand-primary font-bold flex items-center gap-2 group/btn">
                  Explore More <Icons.ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and market landscape." },
              { step: "02", title: "Strategy", desc: "Mapping out the roadmap and designing the experience." },
              { step: "03", title: "Creation", desc: "Building your digital product with precision and care." },
              { step: "04", title: "Launch", desc: "Testing, optimization, and taking you live to the world." }
            ].map((p, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-display font-black text-slate-800 absolute -top-10 -left-2 -z-10">{p.step}</div>
                <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                {idx < 3 && <Icons.ChevronRight className="hidden lg:block absolute top-1/2 -right-4 text-slate-700" size={32} />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
