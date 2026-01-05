
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO, BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Choose your preferred way to reach us.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="p-8 glassmorphism rounded-3xl text-center group hover:border-brand-primary transition-all">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-slate-400 mb-8">{CONTACT_INFO.phone}</p>
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-block px-8 py-3 bg-slate-800 hover:bg-brand-primary text-white rounded-full font-bold transition-all w-full"
            >
              Call Now
            </a>
          </div>

          <div className="p-8 glassmorphism rounded-3xl text-center group hover:border-green-500 transition-all border-green-500/10">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-8">{CONTACT_INFO.whatsapp}</p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all w-full"
            >
              WhatsApp Now
            </a>
          </div>

          <div className="p-8 glassmorphism rounded-3xl text-center group hover:border-brand-secondary transition-all">
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-400 mb-8 line-clamp-1">{CONTACT_INFO.email}</p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-block px-8 py-3 bg-slate-800 hover:bg-brand-secondary text-white rounded-full font-bold transition-all w-full"
            >
              Email Now
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="p-12 glassmorphism rounded-[3rem]">
            <h3 className="text-3xl font-display font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="name@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Type</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary">
                  <option>Website Development</option>
                  <option>Branding & Design</option>
                  <option>NGO / Institute Solution</option>
                  <option>Digital Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Your Message</label>
                <textarea rows={5} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-primary/80 transition-all">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Our Location</h3>
              <div className="flex items-start gap-4 p-8 glassmorphism rounded-3xl">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Headquarters</h4>
                  <p className="text-slate-400">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="p-12 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-[3rem] border border-white/5">
              <h4 className="text-2xl font-bold mb-4">Why Contact Us?</h4>
              <ul className="space-y-4">
                {[
                  "Free Initial Consultation",
                  "Personalized Digital Roadmap",
                  "Transparent Cost Breakdown",
                  "Expert Local Context"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
