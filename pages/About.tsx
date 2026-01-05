
import React from 'react';
import { Target, Eye, Shield, Lightbulb, Trophy, Users, Heart } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const About: React.FC = () => {
  const values = [
    { icon: <Shield size={24} />, title: "Integrity", text: "Honesty and transparency in all our dealings." },
    { icon: <Lightbulb size={24} />, title: "Creativity", text: "Thinking outside the box for unique solutions." },
    { icon: <Trophy size={24} />, title: "Excellence", text: "Uncompromising quality in every deliverable." },
    { icon: <Users size={24} />, title: "Commitment", text: "Dedicated to your long-term digital success." },
    { icon: <Heart size={24} />, title: "Heart", text: "Genuinely caring about the impact of our work." },
  ];

  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-900 to-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {BRAND_NAME} was founded to fill a gap: the need for premium, professional digital services specifically tailored for the vibrant Sri Lankan ecosystem.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">Who We Are</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              SRI Frames is a modern digital agency built to empower Sri Lankan brands. 
              We help businesses, organizations, creators, and dreamers build powerful websites, 
              branding, and digital experiences that feel premium, confident, and future-ready.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our team combines deep technical expertise with a profound understanding of local culture and business dynamics. 
              We don't just deliver code; we deliver identities.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/about1/800/600" alt="About SRI Frames" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 blur-3xl rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 glassmorphism rounded-[2.5rem] relative group hover:-translate-y-2 transition-transform">
            <div className="p-4 bg-brand-primary/10 rounded-2xl w-fit mb-8">
              <Target className="text-brand-primary" size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              To help Sri Lankan brands go digital confidently, professionally, and successfully. 
              We believe that every brand, regardless of its size, deserves a premium digital presence.
            </p>
          </div>
          <div className="p-12 glassmorphism rounded-[2.5rem] relative group hover:-translate-y-2 transition-transform">
            <div className="p-4 bg-brand-secondary/10 rounded-2xl w-fit mb-8">
              <Eye className="text-brand-secondary" size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              To make Sri Lankan brands stand proudly on the global digital stage. 
              We aim to be the standard-setters for digital excellence in the island nation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="text-center p-8 glassmorphism rounded-3xl border border-white/5 hover:bg-brand-primary/5 transition-all">
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-sm text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
