import { ArrowRight, Heart, Zap, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with animated gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-500 to-transparent" style={{backgroundSize: '60px 60px'}}></div>
        </div>

        <div className="container-lg relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Elevate Your</span>
                <br />
                <span className="text-gray-100">Healthcare</span>
                <br />
                <span className="gradient-text">Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                The innovation prescription to the global healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Contact Us <Rocket size={20} />
                </a>
                <button className="btn-secondary flex items-center justify-center gap-2">
                 
                </button>
              </div>
            </div>

            {/* Right visual element - QElevate Logo */}
            <div className="relative h-96 lg:h-full min-h-96 slide-in-right flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                {/* Floating elements */}
                <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-lg animate-float"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-48 h-48 rounded-full bg-linear-to-r from-blue-400 to-purple-400 blur-3xl opacity-30"></div>
                </div>
              </div>
              
              {/* QElevate Logo */}
              <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                <img 
                  src="/qelevate_logo.svg" 
                  alt="QElevate Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with advanced cards */}
      <section className="relative py-24 bg-linear-to-b from-gray-900/0 to-gray-900/50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-lg relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to elevate your organization and patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Service Card 2 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-linear-to-r from-teal-600/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-teal-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Heart size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-teal-400 transition-colors">
                    Patient Health Coaching
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Direct health coaching and support for patients, providing personalized guidance for better health management.
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center text-teal-400 font-semibold group-hover:text-teal-300 transition-colors"
                  >
                    Get Started <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-linear-to-r from-pink-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-pink-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8 group-hover:translate-x-8 group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-pink-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Zap size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-pink-400 transition-colors">
                    Research & Innovation
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Healthcare research and innovation to drive meaningful improvements in the industry and patient care standards.
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center text-pink-400 font-semibold group-hover:text-pink-300 transition-colors"
                  >
                    Explore <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 animate-float"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-lg relative z-10 text-center fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform Your Healthcare?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join with QElevate and experience the difference expert consultancy and innovation can make in your healthcare organization.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
          >
            <Zap size={22} />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
