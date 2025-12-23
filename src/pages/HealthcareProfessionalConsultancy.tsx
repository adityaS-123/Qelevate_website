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
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Zap size={20} />
            Contact Us
          </Link>
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

