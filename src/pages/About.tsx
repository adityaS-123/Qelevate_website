import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Rohit Sharma, MD M.Sc',
      title: 'Founder',
      qualifications: [
        'Internal Medicine & Health Informatics',
        'Educator and Mentor',
        'American Board Certified in Internal Medicine',
      ],
      image: '/rohit_about.jpg',
    },
    {
      name: 'Jeffery Shuhaibier, MD MBA',
      title: 'Founder',
      qualifications: [
        'Surgery, Healthcare, Legal & Entities',
        'Educator and Mentor',
        'American Board Certified in Cardiothoracic Surgery',
      ],
      image: '/jeffery_about.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container-lg relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-violet-400">
                ABOUT QELEVATE
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Empowering healthcare and wellness for individuals, organizations, and families globally.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Team</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Led by internationally trained physicians and healthcare innovators
          </p>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="group text-center flex flex-col h-full">
                    <div className="mb-8 overflow-hidden rounded-xl h-80 md:h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 flex items-center justify-center transform transition hover:scale-105 duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-pink-400 font-semibold mb-4">{member.title}</p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {member.qualifications.map((qual, qIdx) => (
                        <li key={qIdx} className="text-gray-400 text-sm">
                          {qual}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center gap-4 pt-4">
                      <a href="#" className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/60 transition text-pink-400 hover:text-pink-300">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/60 transition text-pink-400 hover:text-pink-300">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900/50 border-y border-pink-500/10">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              QElevate is dedicated to empowering healthcare and healthcare-related professionals at all levels by providing personalized consultation for both organizations and individuals such as career guidance, growth, and management support, and tools to optimize revenue, performance, and overall professional development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Through tailored consultation and self-empowerment strategies, we aim to foster resilience, encourage critical thinking, and drive organizational effectiveness focused on India and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              To be a transformative force in the healthcare industry for both at the personal and organizational level. QElevate empowers allied health care and medical professionals to excel individually, and collectively, by fostering collaboration to contribute and add value. The vision is to create a community of empowered individuals, government, and private hospitals that align on a mission to achieve meaningful collaboration to contribute and add value-the vision is to create a community of empowered individuals, government, and private hospitals sharing the future of sustainable and cost-effective healthcare globally.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-lg">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                desc: 'Delivering the highest standards in healthcare consultation and services',
              },
              {
                title: 'Compassion',
                desc: 'Putting patients, professionals, and organizations at the center of our work',
              },
              {
                title: 'Innovation',
                desc: 'Constantly evolving and adopting cutting-edge approaches in healthcare',
              },
              {
                title: 'Integrity',
                desc: 'Operating with transparency and ethical standards in all endeavors',
              },
              {
                title: 'Collaboration',
                desc: 'Building partnerships to create sustainable impact globally',
              },
              {
                title: 'Empowerment',
                desc: 'Enabling individuals and organizations to reach their full potential',
              },
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-linear-to-br from-pink-500/5 to-purple-500/5 border border-pink-500/20 hover:border-pink-500/50 transition duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-pink-500/10 via-transparent to-purple-500/10"></div>
        <div className="container-lg relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of a global movement transforming healthcare and professional development
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGZ4PHR0S6buUAqsqXIpUVtqnPk5D5cNbiYiG9jNLkqdyD0w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 transform hover:scale-105"
          >
            Get In Touch <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 text-center border-t border-pink-500/10">
        <Link to="/" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center justify-center gap-2 transition">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
