import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Leaf, Activity, Brain } from 'lucide-react';
import { useState } from 'react';

export default function Longevity() {
  const [expandedPackage, setExpandedPackage] = useState(0);

  const packages = [
    {
      name: 'Essential Wellness Concierge',
      subtitle: 'For individuals & families beginning their longevity journey',
      features: [
        'Initial wellness assessment with personalized recommendations',
        'Quarterly consultations for health optimization',
        'Digital longevity checkup and AI tracking',
        'Access to resource library and wellness guides',
      ],
    },
    {
      name: 'Platinum Longevity Package',
      subtitle: 'For executives and families seeking premium wellness',
      features: [
        'COMPREHENSIVE Longevity & Risk Assessment',
        'Biometric screening & advanced health readings',
        'Quarterly physician consultations',
        '24/7 wellness navigation support',
        'Customized supplement and nutrition protocols',
        'Advanced lab testing and biomarker tracking',
        'Digital coaching and lifestyle optimization AI tools',
      ],
    },
    {
      name: 'Executive Preventive Program',
      subtitle: 'For busy professionals seeking structured preventive care',
      features: [
        'Initial Executive Health Consultation',
        'Bi-annual check-ups with concierge service',
        'Stress & sleep optimization programs',
        'Executive fitness and nutrition plans',
        'On-call physician availability',
        'Priority scheduling and virtual consultations',
      ],
    },
  ];

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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGZ4PHR0S6buUAqsqXIpUVtqnPk5D5cNbiYiG9jNLkqdyD0w/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition duration-300 transform hover:scale-105"
            >
              Start Your Longevity Journey <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose QElevate */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-emerald-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose QElevate?</h2>
          <p className="text-emerald-400 text-lg mb-12">Exclusive virtual programs designed for Cuba's residents and families—powered by US-trained physicians</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Brain, title: 'Advanced Longevity Science', desc: 'Evidence-based strategies for extending healthspan' },
              { icon: Heart, title: 'Personalized Medicine', desc: 'Customized programs based on genetic and lifestyle factors' },
              { icon: Activity, title: 'Holistic Approach', desc: 'Integration of fitness, nutrition, stress management, and sleep' },
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

      {/* Packages */}
      <section className="py-20">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Programs</h2>
          <div className="space-y-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="group">
                <button
                  onClick={() => setExpandedPackage(expandedPackage === idx ? -1 : idx)}
                  className="w-full p-8 rounded-lg bg-linear-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-500/60 transition duration-300 text-left group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-400">{pkg.subtitle}</p>
                    </div>
                    <ArrowRight size={24} className={`text-emerald-400 shrink-0 transition-transform duration-300 ${expandedPackage === idx ? 'rotate-90' : ''}`} />
                  </div>
                </button>
                
                {expandedPackage === idx && (
                  <div className="mt-4 p-8 rounded-lg bg-slate-900/50 border border-emerald-500/20 animate-in fade-in slide-in-from-top-4 duration-300">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Your Longevity Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Assessment', desc: 'Comprehensive health and lifestyle evaluation' },
              { step: 2, title: 'Personalization', desc: 'Custom longevity protocol development' },
              { step: 3, title: 'Implementation', desc: 'Guided execution and continuous support' },
              { step: 4, title: 'Optimization', desc: 'Regular monitoring and protocol refinement' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-lg bg-linear-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20">
                <div className="text-5xl font-bold text-emerald-400 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-12">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Extended healthspan and lifespan',
              'Reduced risk of chronic diseases',
              'Enhanced energy and vitality',
              'Optimized cognitive performance',
              'Improved metabolic health',
              'Better sleep and recovery',
              'Personalized supplementation',
              'Access to cutting-edge research',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 rounded-lg bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition">
                <CheckCircle size={24} className="text-emerald-400 shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGZ4PHR0S6buUAqsqXIpUVtqnPk5D5cNbiYiG9jNLkqdyD0w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition duration-300 transform hover:scale-105"
          >
            Schedule Your Assessment <ArrowRight size={20} />
          </a>
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
