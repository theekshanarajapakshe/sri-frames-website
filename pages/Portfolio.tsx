
import React, { useEffect } from 'react';
import { ExternalLink, TrendingUp, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS, SOCIAL_LINKS } from '../constants';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const isRestricted = true; // Set to false when portfolio is ready to be released

  useEffect(() => {
    if (isRestricted) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isRestricted]);

  if (isRestricted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-lg"></div>
        
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-red-500/10"></div>

        {/* Modal Card */}
        <div className="relative z-10 mx-4 max-w-md w-full animate-fade-in">
          <div className="glassmorphism rounded-[2rem] border border-red-500/30 p-8 md:p-12 text-center shadow-2xl">
            {/* Lock Icon */}
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Lock size={40} className="text-red-500" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Portfolio Locked
            </h2>

            {/* Message */}
            <p className="text-slate-300 mb-10 leading-relaxed text-lg">
              Due to security and privacy requirements of our clients, this portfolio is accessible only to verified users.
              <br />
              <br />
              <span className="text-slate-400">To get verified, please contact us via WhatsApp or send an inquiry through our contact form.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-600/25 hover:scale-105"
              >
                Contact via WhatsApp
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-brand-primary hover:bg-brand-primary/80 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-primary/25 hover:scale-105"
              >
                Send an Inquiry
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-xs text-slate-500 mt-8">
              Once verified, you'll gain full access to our portfolio.
            </p>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}</style>
      </div>
    );
  }

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
