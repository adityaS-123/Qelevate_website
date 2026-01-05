import { Link } from 'react-router-dom';
import { CheckCircle, Moon, Brain, Heart, Clock, Zap } from 'lucide-react';
import QSleepContactForm from '../components/QSleepContactForm';

export default function QSleep() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container-lg relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                QSLEEP
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
              Telehealth Sleep Medicine by QElevate
            </h2>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed font-semibold">
              Sleep is not optional. It is foundational.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              QSleep is QElevate's dedicated telehealth sleep medicine vertical, built for individuals whose health, performance, and longevity depend on restorative sleep.
            </p>
          </div>
        </div>
      </section>

      {/* About QSleep */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-indigo-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-8">About QSleep</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Led by Dr. Prashant Kumar Singh, QSleep delivers evidence-based sleep evaluation and treatment through secure virtual consultations. No unnecessary delays. No fragmented care.
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            We focus on diagnosing and managing sleep disorders that silently erode cognition, metabolic health, cardiovascular outcomes, and mental resilience.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Sleep medicine is not about pills first. It is about precision, behavior, physiology, and sustainability. That is our edge.
          </p>
        </div>
      </section>

      {/* Dr. Prashant Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-cyan-500/5"></div>
        <div className="container-lg relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Meet Your Sleep Medicine Physician</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-xl blur-xl group-hover:blur-2xl transition duration-300"></div>
                <img
                  src="/prashant.jpeg"
                  alt="Dr. Prashant Kumar Singh"
                  className="relative w-full h-auto rounded-xl object-cover border border-indigo-500/30"
                />
              </div>
              
              {/* About */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Dr. Prashant Kumar Singh, MD</h3>
                <p className="text-xl text-indigo-400 font-semibold mb-6">Attending Physician/Consultant</p>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                    <span>American Board Eligible in Sleep Medicine and Epilepsy</span>
                  </p>
                  <p className="text-gray-300 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                    <span>American Board Certified in Pediatric Neurology</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-indigo-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Conditions We Address</h2>
          <p className="text-indigo-400 text-lg mb-12">Comprehensive evaluation and treatment for a wide range of sleep disorders</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Moon, title: 'Chronic Insomnia', desc: 'Difficulty falling or staying asleep' },
              { icon: Zap, title: 'Obstructive Sleep Apnea and Snoring', desc: 'Breathing interruptions and sleep disruption' },
              { icon: Clock, title: 'Circadian Rhythm Disorders', desc: 'Sleep-wake cycle irregularities' },
              { icon: Brain, title: 'Excessive Daytime Sleepiness', desc: 'Fatigue and impaired daytime functioning' },
              { icon: Heart, title: 'Shift-Work Sleep Disruption', desc: 'Sleep issues related to irregular schedules' },
              { icon: CheckCircle, title: 'Stress-Related Sleep Issues', desc: 'Sleep disruption linked to stress, burnout, or lifestyle' },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 border border-indigo-500/20 hover:border-indigo-500/50 transition duration-300 transform hover:scale-105">
                  <item.icon className="w-8 h-8 text-indigo-400 flex-shrink-0" />
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

      {/* Why QSleep */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-cyan-500/5"></div>
        <div className="container-lg relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Why QSleep</h2>
          <p className="text-indigo-400 text-lg mb-12">Evidence-based sleep medicine tailored to your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Physician-led teleconsultations',
              'Structured clinical evaluation, not generic advice',
              'Clear diagnostic pathways including home sleep testing when appropriate',
              'Practical, actionable treatment plans',
              'Designed for busy professionals and global patients',
              'Precision, behavior, physiology, and sustainability-focused approach'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 border border-indigo-500/20 hover:border-indigo-500/50 transition duration-300">
                <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-indigo-500/10">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-indigo-400 text-lg mb-12">Simple steps to get expert sleep medicine care</p>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Submit Enquiry', desc: 'Fill out a short enquiry form with your sleep concerns' },
                { step: 2, title: 'Schedule Consultation', desc: 'Our team contacts you to schedule a consultation at your convenience' },
                { step: 3, title: 'Virtual Evaluation', desc: 'Comprehensive virtual evaluation with a sleep physician' },
                { step: 4, title: 'Personalized Plan', desc: 'Receive a personalized management plan and schedule follow-up care' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-cyan-500/5"></div>
        <div className="container-lg relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Start Your Sleep Medicine Journey</h2>
          <p className="text-indigo-400 text-lg mb-12 text-center">Submit your enquiry and we'll be in touch shortly</p>
          <QSleepContactForm />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 text-center border-t border-indigo-500/10">
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-2 transition">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
