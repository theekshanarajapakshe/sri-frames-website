
import React from 'react';
import { Check, Info, Landmark, ShieldCheck } from 'lucide-react';
import { PRICING, BRAND_NAME } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Invest in Your Growth</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transparent pricing models for every stage of your digital journey.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {PRICING.map((plan) => (
            <div 
              key={plan.id} 
              className={`p-10 rounded-[2.5rem] flex flex-col h-full border transition-all duration-300 ${
                plan.isPopular 
                ? 'glassmorphism border-brand-primary shadow-2xl shadow-brand-primary/10 scale-105 z-10' 
                : 'bg-slate-900/50 border-white/5 hover:border-brand-primary/30'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-brand-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit mb-6">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-display font-bold mb-8 text-brand-primary">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                    <Check className="text-brand-primary mt-1 shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.isPopular ? 'bg-brand-primary text-white' : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                Choose {plan.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* Payment and Agreement */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-12 glassmorphism rounded-[3rem]">
            <div className="flex items-center gap-4 mb-8">
              <Landmark className="text-brand-primary" size={32} />
              <h3 className="text-3xl font-display font-bold">Payment Methods</h3>
            </div>
            <p className="text-lg text-slate-300 mb-8">
              To ensure stability and professional service, we follow a strict payment protocol.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Accepted via Bank Transfer Only</h4>
                <p className="text-sm text-slate-500">Local and international bank transfers are supported. Details will be provided in the official invoice.</p>
              </div>
              <div className="p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/20">
                <h4 className="font-bold text-brand-primary mb-2">Payment Policy</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">50% Advance</span>
                  <span className="text-slate-500">Project Initiation</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full my-3">
                  <div className="w-1/2 h-full bg-brand-primary rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">50% Final</span>
                  <span className="text-slate-500">Before Handover</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 glassmorphism rounded-[3rem] border-brand-secondary/30">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-brand-secondary" size={32} />
              <h3 className="text-3xl font-display font-bold">Professional Agreement</h3>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Check size={20} className="text-green-500" /> Client Responsibilities
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The client agrees to provide required information, branding assets, and approvals on time. Respect for project timelines and professional cooperation is mandatory for successful delivery.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Check size={20} className="text-green-500" /> Our Promise
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {BRAND_NAME} promises total honesty, unwavering commitment, and a professional, futuristic delivery. We stand by our quality and timeline guarantees.
                </p>
              </div>
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 italic text-slate-500 text-sm">
                "We build partnerships based on trust, quality, and mutual respect."
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
