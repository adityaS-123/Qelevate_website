import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeUp from '../components/FadeUp';

function SectionLabel({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
      <span
        className={`text-blue-600 dark:text-blue-500 text-xs font-semibold tracking-widest uppercase ${className}`}
      >
        {text}
      </span>
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center py-32 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-anim" style={{ animationDelay: '0ms' }}>
              <SectionLabel text="Healthcare Technology" />
            </div>
            <h1
              className="hero-gradient-text hero-anim text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] mb-8"
              style={{ animationDelay: '150ms' }}
            >
              Building the infrastructure for the next generation of electronic health records.
            </h1>
            <p
              className="hero-anim text-xl text-gray-500 dark:text-gray-300 leading-relaxed mb-12 max-w-xl mx-auto"
              style={{ animationDelay: '300ms' }}
            >
              QElevate is a healthcare technology company creating patient&#8209;first and physician&#8209;first health record infrastructure, designed to be consented, governed, and built to advance medical knowledge.
            </p>
            <div
              className="hero-anim flex justify-center"
              style={{ animationDelay: '440ms' }}
            >
              <Link to="/contact" className="btn-primary gap-2">
                Get in Touch <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="hero-anim absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 pointer-events-none"
          style={{ animationDelay: '700ms' }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase font-semibold opacity-60">Scroll</span>
          <div className="scroll-hint w-px h-7 bg-current" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <SectionLabel
              text="Mission"
              className="text-2xl md:text-3xl font-bold tracking-wide"
            />
            <p className="text-gray-500 dark:text-gray-300 text-xl leading-relaxed">
              Our mission is to build electronic health record infrastructure that puts patients and physicians first. We believe health data should be created with consent, governed responsibly, and able to contribute ethically and by design to research and the advancement of medical knowledge.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Vision */}
      <section className="py-28 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <SectionLabel
              text="Vision"
              className="text-2xl md:text-3xl font-bold tracking-wide"
            />
            <p className="text-gray-500 dark:text-gray-300 text-xl leading-relaxed">
              We envision a future where every person holds a trusted, consented record of their health, and where that data governed and protected becomes a foundation for new evidence, better care, and progress in medicine for communities that have long been underrepresented.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <SectionLabel
              text="What We Do"
              className="text-2xl md:text-3xl font-bold tracking-wide"
            />
            <p className="text-gray-500 dark:text-gray-300 text-xl leading-relaxed">
              QElevate is developing infrastructure for innovations in the electronic health record space, with patients first, physicians first, and research and discovery built in by design through consent and strong governance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <FadeUp className="container-lg text-center">
          <p className="text-gray-900 dark:text-white text-2xl md:text-3xl font-light leading-snug mb-10 max-w-lg mx-auto tracking-tight">
            Interested in partnering or supporting our work?
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary gap-2">
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
