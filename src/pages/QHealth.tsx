import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Stethoscope, Globe } from 'lucide-react';

export default function QHealth() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container-lg relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                QHEALTH
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
              Trusted Medical Advice for Global Citizens
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert second opinions and personalized medical guidance from globally qualified physicians, available wherever you are.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 transform hover:scale-105"
            >
              Request Medical Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-cyan-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4">What QHealth Offers</h2>
          <p className="text-cyan-400 text-lg mb-12">Confidential, evidence-based second opinions from US board-certified physicians.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Stethoscope, title: 'Expert Second Opinions', desc: 'Across all major specialties from qualified international physicians' },
              { icon: Globe, title: 'Global Expertise', desc: 'Access physicians from the U.S., U.K., and India with diverse specialties' },
              { icon: Heart, title: 'Long-Gravity Focus', desc: 'Emphasis on preventive and personalized medicine advice' },
              { icon: CheckCircle, title: 'Board-Certified Team', desc: 'All consultants verified and certified in their respective fields' },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition duration-300 transform hover:scale-105">
                  <item.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="container-lg relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Expert Medical Guidance?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Connect with board-certified physicians for confidential, expert second opinions</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 transform hover:scale-105"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 text-center border-t border-cyan-500/10">
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center gap-2 transition">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
