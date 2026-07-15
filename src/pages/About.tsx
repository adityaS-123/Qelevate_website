import { useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import FadeUp from '../components/FadeUp';

interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const leadershipMembers: TeamMember[] = [
  {
    name: 'Rohit Sharma, MD M.Sc',
    title: 'Co-Founder',
    credentials: 'Internal Medicine & Health Informatics · American Board Certified in Internal Medicine · Educator and Mentor',
    image: '/rohit_about.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit8692/',
    email: 'contactus@qelevate.in',
  },
  {
    name: 'Jeffery Shuhaiber, MD MBA',
    title: 'Co-Founder',
    credentials: 'Cardiothoracic Surgery · American Board Certified · Healthcare, Legal & Entities · Educator and Mentor',
    image: '/jeffery_about.jpg',
    linkedin: 'https://www.linkedin.com/in/jeffrey-shuhaiber-48877451/',
    email: 'contactus@qelevate.in',
  },
  {
    name: 'Brendan Gallagher',
    title: 'CTO',
    credentials: '',
    image: '/brendan_about.jpeg',
    linkedin: 'https://www.linkedin.com/in/brendankgallagher/',
    email: 'bgallagher1016@gmail.com',
  },
];

const foundingTeam: TeamMember[] = [
  {
    name: 'Bianca Arriza Carlo',
    title: 'Head of Product',
    credentials: '',
    image: '/bianca_about.jpg',
    linkedin: 'https://www.linkedin.com/in/bianca-arraiza-carlo-b7b443315/',
    email: 'biancaarraizacarlo@college.harvard.edu',
  },
  {
    name: 'Trevor Kerxhalli',
    title: 'Founding Software Engineer',
    credentials: '',
    image: '/trevor_about.jpg',
    linkedin: 'https://www.linkedin.com/in/trevor-kerxhalli-48815b2a7/',
    email: 'trevorkerxhalli@gmail.com',
  },
  {
    name: 'Noah Bastola',
    title: 'Clinical Informatics · Founding Team',
    credentials: '',
    image: '/noah_about.jpg',
  },
];

function SectionLabel({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
      <span className={`text-blue-600 dark:text-blue-500 font-semibold tracking-widest uppercase ${className || 'text-xs'}`}>{text}</span>
      <div className="section-line w-10 h-px bg-blue-600 dark:bg-blue-500 shrink-0" />
    </div>
  );
}

function SocialLinks({ member }: { member: TeamMember }) {
  if (!member.linkedin && !member.email) return null;
  return (
    <div className="flex gap-2">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="p-2 rounded-md border border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
        >
          <Linkedin size={15} />
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="p-2 rounded-md border border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
        >
          <Mail size={15} />
        </a>
      )}
    </div>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Company Overview */}
      <section className="py-28 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <SectionLabel text="About" className="text-2xl md:text-3xl font-bold tracking-wide" />
            <p className="text-gray-900 dark:text-white text-xl leading-relaxed">
              We are a mission driven team working to build the foundational systems that can transform how health data is created, held, and used for the benefit of patients, clinicians, and the communities they serve.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-28 border-b border-gray-200 dark:border-gray-800/60">
        <div className="container-lg">

          {/* Section heading */}
          <FadeUp className="mb-14 text-center">
            <SectionLabel text="Our Team" className="text-2xl md:text-3xl font-bold tracking-wide" />
          </FadeUp>

          {/* Leadership row — larger portrait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-6">
            {leadershipMembers.map((member, idx) => (
              <FadeUp key={member.name} delay={idx * 80} className="h-full">
                <div className="team-card h-full flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-slate-900/30">
                  <div className="aspect-3/4 overflow-hidden bg-gray-100 dark:bg-slate-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-img w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-500 text-sm font-medium mb-3">{member.title}</p>
                    {member.credentials ? (
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">{member.credentials}</p>
                    ) : (
                      <div className="grow" />
                    )}
                    <SocialLinks member={member} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Divider between tiers */}
          <FadeUp delay={leadershipMembers.length * 80} className="max-w-5xl mx-auto mb-6">
            <div className="w-full h-px bg-gray-100 dark:bg-gray-800/60" />
          </FadeUp>

          {/* Founding team row — compact square cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {foundingTeam.map((member, idx) => (
              <FadeUp key={member.name} delay={(leadershipMembers.length + 1 + idx) * 80} className="h-full">
                <div className="team-card h-full flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-slate-900/30">
                  <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-slate-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-img w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 flex flex-col grow">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-0.5">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-500 text-xs font-medium mb-3">{member.title}</p>
                    <div className="grow" />
                    <SocialLinks member={member} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={(leadershipMembers.length + foundingTeam.length + 1) * 80}>
            <p className="text-gray-400 dark:text-gray-700 text-sm mt-12 text-center">
              Additional team members and advisors to be announced.
            </p>
          </FadeUp>

        </div>
      </section>

    </div>
  );
}
