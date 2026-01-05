
import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Success Stories</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of digital transformations across various industries in Sri Lanka.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glassmorphism rounded-[2rem] overflow-hidden border border-white/5 hover:-translate-y-3 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="bg-slate-900/80 rounded-2xl p-6 border border-brand-primary/20">
                  <div className="flex items-center gap-3 mb-2 text-brand-primary">
                    <TrendingUp size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Project Impact</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                    "{project.impact}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-brand-primary/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Want your brand featured here?</h2>
          <button className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Let's Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
