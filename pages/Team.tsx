
import React, { useState } from 'react';
import { Linkedin, Twitter, Mail, X, Award, Briefcase, Zap } from 'lucide-react';
import { TEAM, BRAND_NAME } from '../constants';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Meet the Visionaries</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The creative minds and technical experts behind {BRAND_NAME}. Click on a profile to explore their expertise.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member) => (
            <div 
              key={member.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Card Hover Wrapper */}
              <div className="relative aspect-square overflow-hidden rounded-3xl mb-8 transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Image */}
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white text-sm font-bold shadow-2xl">
                    View Full Profile
                  </div>
                  <div className="flex space-x-4">
                    <span className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <Linkedin size={20} />
                    </span>
                    <span className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <Zap size={20} />
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-brand-primary transition-colors">{member.name}</h3>
                <p className="text-brand-primary/80 font-semibold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                <div className="h-1 w-0 group-hover:w-24 bg-brand-primary mx-auto transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-2xl"
            onClick={() => setSelectedMember(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative glassmorphism w-full max-w-5xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl animate-scale-up flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-full backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            >
              <X size={28} />
            </button>

            {/* Left: Image & Quick Stats */}
            <div className="md:w-2/5 relative">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-brand-primary" />
                  <span className="text-sm font-semibold uppercase tracking-widest">{selectedMember.experience} Experience</span>
                </div>
                <h2 className="text-4xl font-display font-bold leading-tight">{selectedMember.name}</h2>
              </div>
            </div>

            {/* Right: Detailed Info */}
            <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase mb-6 w-fit">
                {selectedMember.role}
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl font-bold text-white mb-4">About</h4>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  "{selectedMember.bio}"
                </p>
              </div>

              {selectedMember.motto && (
                <div className="mb-10 p-6 bg-slate-900/50 rounded-2xl border-l-4 border-l-brand-primary">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Professional Motto</h4>
                  <p className="text-white font-medium text-lg italic">
                    {selectedMember.motto}
                  </p>
                </div>
              )}

              <div className="mb-10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={20} className="text-brand-primary" /> Key Specialties
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedMember.specialties?.map((spec, i) => (
                    <span key={i} className="px-5 py-2 glassmorphism rounded-xl text-sm font-medium text-slate-300">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button className="flex-grow bg-brand-primary hover:bg-brand-primary/80 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-primary/20">
                  Contact via WhatsApp
                </button>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Philosophy */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-display font-bold mb-10 italic leading-snug">"Our strength lies in our diversity of thought and our shared commitment to excellence."</h2>
          <p className="text-lg text-slate-400">
            We operate on a remote-first, high-trust model, allowing us to attract the best talent from all over Sri Lanka to serve your brand with heart and integrity.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Team;
