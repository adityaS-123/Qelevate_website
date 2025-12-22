import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container-lg">
          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Send us a Message</h2>
            </div>

            <div className="p-8 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 text-center border-t border-blue-500/10">
        <Link to="/" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center gap-2 transition">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
