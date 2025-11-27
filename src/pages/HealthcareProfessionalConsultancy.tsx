import { Link } from 'react-router-dom';
import { CheckCircle, Briefcase, TrendingUp, Target, Zap, Brain } from 'lucide-react';

export default function HealthcareProfessionalConsultancy() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-lg relative z-10 py-16 fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Healthcare Professional</span>
            <br />
            <span className="text-gray-100">Consultancy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Expert consultancy services designed specifically for healthcare professionals and institutions to optimize operations, improve patient outcomes, and drive organizational excellence.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGZ4PHR0S6buUAqsqXIpUVtqnPk5D5cNbiYiG9jNLkqdyD0w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Zap size={20} />
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container-lg">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Consultancy Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your organization's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group fade-in-up glass rounded-2xl p-8 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Operational Excellence</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Streamline your healthcare operations with evidence-based strategies to improve efficiency, reduce costs, and enhance staff productivity.
              </p>
              <ul className="space-y-3">
                {['Process optimization', 'Resource management', 'Quality improvement', 'Staff training programs'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group fade-in-up glass rounded-2xl p-8 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Strategic Planning</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Develop long-term strategies to position your organization for growth and sustainability in an evolving healthcare landscape.
              </p>
              <ul className="space-y-3">
                {['Growth strategy development', 'Market analysis', 'Digital transformation', 'Technology integration'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group fade-in-up glass rounded-2xl p-8 border-gray-700/50 hover:border-pink-500/50 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Patient-Centric Solutions</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Focus on patient experience and outcomes through consultancy that puts patients at the center of healthcare delivery.
              </p>
              <ul className="space-y-3">
                {['Patient satisfaction programs', 'Care pathway optimization', 'Health outcomes tracking', 'Feedback integration'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group fade-in-up glass rounded-2xl p-8 border-gray-700/50 hover:border-orange-500/50 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <Brain className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Professional Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Enhance your team's capabilities through tailored training and professional development programs.
              </p>
              <ul className="space-y-3">
                {['Leadership training', 'Skill development programs', 'Change management', 'Team effectiveness'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-linear-to-b from-gray-900/50 to-gray-900/0">
        <div className="container-lg">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">How We Work</h2>
            <p className="text-gray-400 text-lg">A structured approach to delivering results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Assessment', desc: 'Deep analysis of your current state', icon: '📊' },
              { step: 2, title: 'Strategy', desc: 'Develop tailored roadmap', icon: '🎯' },
              { step: 3, title: 'Implementation', desc: 'Execute with your team', icon: '⚙️' },
              { step: 4, title: 'Monitoring', desc: 'Track progress & optimize', icon: '📈' },
            ].map((item, idx) => (
              <div key={item.step} className="fade-in-up group" style={{animationDelay: `${0.1 * idx}s`}}>
                <div className="relative glass rounded-xl p-6 border-blue-500/30 hover:border-blue-500/70 transition-all duration-300 text-center h-full cursor-pointer">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.step}</div>
                  <h4 className="font-bold text-lg text-gray-100 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container-lg">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose QElevate?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The expertise and approach that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Industry Expertise', desc: 'Decades of combined experience in healthcare management' },
              { title: 'Custom Solutions', desc: 'Strategies tailored to your unique organizational needs' },
              { title: 'Results-Driven', desc: 'Proven track record of delivering measurable outcomes' },
              { title: 'Partnership Approach', desc: 'We work as an extension of your team, not external consultants' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 fade-in-up" style={{animationDelay: `${0.1 * idx}s`}}>
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-100 mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-lg relative z-10 text-center fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Elevate Your Practice?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how QElevate can help your organization achieve operational excellence and improved patient outcomes.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGZ4PHR0S6buUAqsqXIpUVtqnPk5D5cNbiYiG9jNLkqdyD0w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
          >
            <Zap size={22} />
            Request an Introductory Call
          </a>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 text-center border-t border-gray-800">
        <Link to="/" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center gap-2 transition-colors">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}

