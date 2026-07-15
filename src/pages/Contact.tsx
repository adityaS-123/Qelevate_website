import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FadeUp from '../components/FadeUp';

function SectionLabel({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
      <span className={`text-blue-600 dark:text-blue-500 font-semibold tracking-widest uppercase ${className || 'text-xs'}`}>{text}</span>
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="container-lg">

          {/* Header */}
          <FadeUp className="max-w-xl mx-auto text-center mb-16">
            <SectionLabel text="Contact" className="text-2xl md:text-3xl font-bold tracking-wide" />
            <p className="text-gray-500 dark:text-gray-300 text-xl leading-relaxed">
              We welcome conversations with potential collaborators, research partners, investors, and funders. If our work aligns with yours, we would like to hear from you.
            </p>
          </FadeUp>

          {/* Email */}
          <FadeUp delay={120} className="max-w-xl mx-auto text-center mb-14">
            <p className="text-gray-400 dark:text-gray-600 text-xs font-semibold tracking-widest uppercase mb-3">
              Email
            </p>
            <a
              href="mailto:contactus@qelevate.in"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-lg font-medium transition-colors duration-200 group"
            >
              contactus@qelevate.in
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={240} className="max-w-lg mx-auto border-t border-gray-200 dark:border-gray-800/60 pt-12">
            <p className="text-gray-400 dark:text-gray-600 text-xs font-semibold tracking-widest uppercase mb-8 text-center">
              Send a Message
            </p>
            <ContactForm />
          </FadeUp>

        </div>
      </section>
    </div>
  );
}
