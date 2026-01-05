
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Common Questions</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to know about working with SRI Frames.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glassmorphism rounded-2xl border transition-all duration-300 ${
                openIndex === idx ? 'border-brand-primary shadow-lg shadow-brand-primary/5' : 'border-white/5'
              }`}
            >
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${openIndex === idx ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === idx ? <ChevronUp className="text-brand-primary" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-2 text-slate-400 leading-relaxed pl-[4.5rem]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 glassmorphism rounded-[3rem] text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">
            We're here to help you navigate your digital transformation.
          </p>
          <button className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Chat with Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
