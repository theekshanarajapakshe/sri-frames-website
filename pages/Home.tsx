
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Rocket, ShieldCheck, Heart, Star } from 'lucide-react';
import { BRAND_NAME, SERVICES, PROJECTS, TESTIMONIALS, PRICING } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h4 className="text-brand-primary font-display font-semibold tracking-widest uppercase mb-4 animate-fade-in">
              Building Digital Futures
            </h4>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-8">
              Powering Sri Lankan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Dreams</span> Through Digital Excellence
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              We help Sri Lankan businesses, creators, NGOs and institutions build strong digital identities, professional brands and powerful websites that inspire trust, attract customers and build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-full font-bold flex items-center justify-center transition-all group shadow-xl shadow-brand-primary/20">
                Start Your Digital Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="px-8 py-4 glassmorphism text-white rounded-full font-bold flex items-center justify-center hover:bg-white/10 transition-all">
                View Our Work
              </Link>
              <Link to="/contact" className="px-8 py-4 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Mission/Vision */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 glassmorphism rounded-2xl mb-6">
                <Rocket className="text-brand-primary" size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">Empowering Sri Lankan Brands</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {BRAND_NAME} is a modern digital agency built to empower Sri Lankan brands. 
                We help businesses, organizations, creators, and dreamers build powerful websites, 
                branding, and digital experiences that feel premium, confident, and future-ready.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 glassmorphism rounded-2xl border-l-4 border-l-brand-primary">
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                  <p className="text-sm text-slate-400">To help Sri Lankan brands go digital confidently, professionally, and successfully.</p>
                </div>
                <div className="space-y-4 p-6 glassmorphism rounded-2xl border-l-4 border-l-brand-secondary">
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  <p className="text-sm text-slate-400">To make Sri Lankan brands stand proudly on the global digital stage.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-20 blur-2xl rounded-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/sri1/400/500" alt="Agency Life" className="rounded-2xl shadow-2xl mt-8" />
                <img src="https://picsum.photos/seed/sri2/400/500" alt="Creative Design" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-slate-400">We don't just build websites; we build growth engines.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glassmorphism rounded-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Trusted Excellence</h3>
              <p className="text-slate-400">We prioritize integrity and professional commitment in every single pixel we deliver.</p>
            </div>
            <div className="p-8 glassmorphism rounded-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-indigo-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-slate-400">Strategic design that helps local brands compete effectively in international markets.</p>
            </div>
            <div className="p-8 glassmorphism rounded-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-amber-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Heart-led Service</h3>
              <p className="text-slate-400">We care about your vision. Our goal is to see Sri Lankan dreamers succeed online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Powerful Solutions</h2>
              <p className="text-slate-400">Expert services tailored for modern Sri Lankan entities.</p>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 text-brand-primary font-bold flex items-center hover:underline">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="p-6 glassmorphism rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{service.description}</p>
                <Link to="/services" className="text-brand-primary text-xs uppercase tracking-widest font-bold">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Featured Work</h2>
            <p className="text-slate-400">Success stories of local brands going digital.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                  <div className="bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-brand-primary">{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/portfolio" className="inline-flex items-center px-8 py-3 bg-brand-primary text-white rounded-full font-bold">
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-brand-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Loved by Clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="p-8 glassmorphism rounded-3xl relative">
                <Star className="text-brand-primary absolute top-8 right-8" fill="currentColor" size={20} />
                <p className="text-slate-300 mb-8 italic">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Build Your Digital Future?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Let's create something extraordinary together. Whether you're a small business or a large institution, we have the right digital solution for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                Start Your Journey
              </Link>
              <Link to="/growth-guide" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Read Growth Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
