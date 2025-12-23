import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, Activity, Brain } from 'lucide-react';

export default function Longevity() {

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container-lg relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-green-400">
                QELEVATE LONGEVITY & WELLNESS
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Live longer, healthier, with personalized longevity programs designed for optimal vitality and wellbeing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition duration-300 transform hover:scale-105"
            >
              Start Your Longevity Journey <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose QElevate */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-emerald-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose QElevate?</h2>
          <p className="text-emerald-400 text-lg mb-12">Exclusive virtual programs designed for global residents and families—powered by US-trained physicians</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Brain, title: 'Advanced Longevity Science', desc: 'Evidence-based strategies for extending healthspan' },
              { icon: Heart, title: 'Personalized Medicine', desc: 'Customized programs based on genetic and lifestyle factors' },
              { icon: Activity, title: 'Holistic Approach', desc: 'Integration of fitness, nutrition, mental well-being, and sleep' },
              { icon: Leaf, title: 'Global Standard Care', desc: 'US-trained physicians with international expertise' },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 p-6 rounded-lg bg-linear-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition duration-300 transform hover:scale-105">
                  <item.icon className="w-8 h-8 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-teal-500/10"></div>
        <div className="container-lg relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Health?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join our longevity program and invest in your healthiest years ahead</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition duration-300 transform hover:scale-105"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 text-center border-t border-emerald-500/10">
        <Link to="/" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center justify-center gap-2 transition">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
