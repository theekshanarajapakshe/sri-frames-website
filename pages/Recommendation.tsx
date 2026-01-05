
import React from 'react';
import { Lightbulb, ShieldCheck, Zap, TrendingUp, Globe, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Recommendation: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="pt-24 pb-20 bg-gradient-to-br from-brand-dark to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Business Digital Growth Guide</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your essential guide to thriving in the modern Sri Lankan digital economy.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Section 1 */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-primary">
              <Globe size={40} />
              <h2 className="text-4xl font-display font-bold">Why Online Presence Matters</h2>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed">
              In today's world, if your business isn't online, it simply doesn't exist for a large segment of your potential market. 
              The digital landscape is no longer an "extra"—it is the foundation of modern commerce. 
              Sri Lankan consumers are increasingly turning to search engines and social media to find services, trust brands, and make purchasing decisions.
            </p>
            <div className="p-8 glassmorphism rounded-3xl border-l-4 border-l-brand-primary">
              <p className="text-xl font-semibold text-white italic">
                "Digital transformation is the difference between surviving locally and thriving globally."
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-secondary">
              <ShieldCheck size={40} />
              <h2 className="text-4xl font-display font-bold">How Websites Build Trust</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                <h4 className="text-xl font-bold mb-4">Professionalism</h4>
                <p className="text-slate-400 text-sm">A custom-built website shows that you are serious about your business and invested in your customers' experience.</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                <h4 className="text-xl font-bold mb-4">24/7 Availability</h4>
                <p className="text-slate-400 text-sm">Your website works even when you sleep, providing information and taking inquiries from across time zones.</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                <h4 className="text-xl font-bold mb-4">Direct Communication</h4>
                <p className="text-slate-400 text-sm">Control your narrative without being subject to the ever-changing algorithms of social media platforms.</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                <h4 className="text-xl font-bold mb-4">Operational Efficiency</h4>
                <p className="text-slate-400 text-sm">Automate bookings, payments, and FAQs, saving your team hours of manual labor every single week.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-amber-500">
              <Zap size={40} />
              <h2 className="text-4xl font-display font-bold">Steps to Your Digital Success</h2>
            </div>
            <p className="text-lg text-slate-400 mb-12">
              At {BRAND_NAME}, we follow a proven process to ensure your digital transition is seamless and profitable.
            </p>
            
            <div className="space-y-12">
              {[
                { title: "Define Your Goal", text: "Are you looking for more leads, direct sales, or brand awareness? We help you pinpoint your primary objective." },
                { title: "Visual Identity", text: "We craft a brand that looks premium and inspires confidence in your specific niche." },
                { title: "Build for Speed", text: "User experience is key. We ensure your site loads fast and works perfectly on every device." },
                { title: "Strategic Launch", text: "We don't just 'flip a switch'. We help you launch with a strategy that gets noticed." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-16 glassmorphism rounded-[3rem] text-center border-brand-primary/20">
            <h3 className="text-3xl font-display font-bold mb-6">Ready to take the first step?</h3>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Don't let your competition outpace you in the digital world. Let's build your future today.
            </p>
            <Link to="/contact" className="inline-flex items-center px-12 py-5 bg-brand-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get Your Free Consultation <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendation;
