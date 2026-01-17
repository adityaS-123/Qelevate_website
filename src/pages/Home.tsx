export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container-lg relative z-10 py-20">
          <div className="fade-in-up max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
              <p className="text-blue-300 text-sm font-semibold tracking-wide">PHYSICIAN-LED ADVISORY</p>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight text-gray-100">
              QElevate
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 gradient-text leading-relaxed">
              Physician-Led Health Systems Advisory 2026
            </h2>
            <p className="text-xl text-blue-300 mb-4 font-semibold">
              Jeffrey Shuhaiber and Rohit Sharma
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl border-l-4 border-blue-500 pl-6">
              Improving Safety, Reliability, and Trust in Healthcare Systems Under Real-World Constraints
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="relative py-32 bg-linear-to-b from-gray-900/0 via-blue-900/10 to-gray-900/50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container-lg relative z-10">
          <div className="mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
              <p className="text-blue-300 text-sm font-semibold tracking-wide">ABOUT US</p>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              <span className="gradient-text">Who We Are & Why We Exist</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* WHO WE ARE */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative glass rounded-2xl p-8 h-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">Rx</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-100 group-hover:text-blue-400 transition-colors">Who We Are</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    We are a physician-led health systems advisory that works with governments, public agencies, and healthcare institutions to identify and reduce preventable harm across the continuum of care.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed mb-4">
                    Our work is grounded in direct clinical experience across high-risk care environments and informed by a deep understanding of how healthcare systems function—or fail—under pressure.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We operate independently, bringing an external clinical perspective that is often difficult to generate from within complex health systems.
                  </p>
                </div>
              </div>

              {/* WHY THIS WORK IS NEEDED */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative glass rounded-2xl p-8 h-full border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-100 group-hover:text-purple-400 transition-colors">Why This Work Is Needed</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Healthcare systems face mounting pressure to deliver complex care with limited resources. When systems fail, the consequences are devastating: preventable patient harm, workforce burnout, and loss of public trust.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed mb-6 font-semibold text-purple-300">
                    Most failures aren't about effort—they're about misalignment with reality:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-3 font-bold">→</span>
                      <span>Policies don't match frontline conditions</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-3 font-bold">→</span>
                      <span>Workforce roles exceed safe limits</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-3 font-bold">→</span>
                      <span>Care pathways fracture during transitions</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-3 font-bold">→</span>
                      <span>Accountability focuses on individuals rather than structure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEMS WE SOLVE Section */}
      <section className="relative py-32 bg-linear-to-b from-gray-900/50 to-gray-900/0">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container-lg relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full">
              <p className="text-orange-300 text-sm font-semibold tracking-wide">CORE CHALLENGES</p>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">The Problems We Solve</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Healthcare systems face systemic challenges that compromise safety and reliability. We identify and help resolve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Problem 1 */}
            <div className="group relative h-full fade-in-up">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-blue-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    ⚠️
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">Invisible System Risk</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    Leaders lack clinical visibility into where harm originates. Adverse events are treated as isolated incidents.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We map error propagation across departments and teams, making hidden risk visible before crisis escalates.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-purple-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    👥
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Workforce Mismatch</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    Clinicians are asked to work beyond their training and capacity due to staffing shortages.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We identify unsafe task-shifting and supervision gaps, proposing realistic workforce configurations.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-cyan-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    🔗
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">Fragmented Pathways</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    Patients fall through gaps between primary care, emergency services, and discharge.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We trace real patient journeys and redesign pathways that function under real-world constraints.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute -inset-1 bg-linear-to-r from-teal-600/30 to-green-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-teal-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-teal-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    📋
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-300 group-hover:text-teal-200 transition-colors">Policy–Practice Gap</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    Guidelines are often written without regard to frontline realities and constraints.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We translate clinical reality into governance-ready recommendations leaders can implement.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="absolute -inset-1 bg-linear-to-r from-orange-600/30 to-red-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-orange-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-300 group-hover:text-orange-200 transition-colors">Blame Culture</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    Errors are attributed to individuals, discouraging reporting and masking system flaws.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We reframe safety through a systems lens that enables learning without eroding morale.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 6 */}
            <div className="group relative h-full fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="absolute -inset-1 bg-linear-to-r from-pink-600/30 to-rose-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative glass rounded-2xl p-8 h-full flex flex-col hover:border-pink-500/50 border-gray-700/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-pink-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-5 font-bold text-white text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    🚨
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-pink-300 group-hover:text-pink-200 transition-colors">Crisis-Driven Reform</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed font-medium">
                    System change only occurs after sentinel events, media exposure, or legal action.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We help systems identify and address vulnerabilities proactively before crisis strikes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section className="relative py-32 bg-linear-to-b from-gray-900/50 via-gray-900/30 to-gray-900/50">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container-lg relative z-10">
          <div className="mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full">
              <p className="text-purple-300 text-sm font-semibold tracking-wide">OUR METHODOLOGY</p>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">What We Do & How We Engage</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              We operate at the intersection of clinical reality, system design, and governance with clinically grounded, analytically rigorous work focused on practical action.
            </p>
          </div>
          
          {/* FLAGSHIP ENGAGEMENT */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative glass rounded-3xl p-12 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-white text-3xl font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-purple-300 text-sm font-semibold tracking-wide mb-1">FLAGSHIP ENGAGEMENT</p>
                    <h3 className="text-4xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors">Health System Readiness & Safety Review</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  A 90-day, physician-led assessment for governments and healthcare systems to evaluate ability to deliver safe, reliable care under real-world constraints.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-bold text-purple-300 mb-4">
                        <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">📍</span>
                        Scope
                      </h4>
                      <ul className="space-y-2 ml-11">
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2 font-bold">·</span>
                          <span>Emergency and acute care (medical and surgical)</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2 font-bold">·</span>
                          <span>Inpatient medical and procedural care</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2 font-bold">·</span>
                          <span>Obstetric and maternal health</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2 font-bold">·</span>
                          <span>Workforce structure and supervision</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2 font-bold">·</span>
                          <span>Governance and accountability mechanisms</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-bold text-pink-300 mb-4">
                        <span className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-400">🔍</span>
                        Method
                      </h4>
                      <ul className="space-y-2 ml-11">
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-400 mr-2 font-bold">·</span>
                          <span>Targeted site visits and interviews</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-400 mr-2 font-bold">·</span>
                          <span>Review of adverse events and near-misses</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-400 mr-2 font-bold">·</span>
                          <span>Workforce and task-flow analysis</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-400 mr-2 font-bold">·</span>
                          <span>Care pathway mapping</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-pink-400 mr-2 font-bold">·</span>
                          <span>System risk synthesis</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-bold text-blue-300 mb-4">
                        <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">📦</span>
                        Deliverables
                      </h4>
                      <ul className="space-y-2 ml-11">
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 font-bold">✓</span>
                          <span>Confidential System Risk Map</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 font-bold">✓</span>
                          <span>Workforce and Care Pathway Analysis</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 font-bold">✓</span>
                          <span>Governance-ready action brief</span>
                        </li>
                        <li className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 font-bold">✓</span>
                          <span>Independent physician report</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-bold text-emerald-300 mb-4">
                        <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">🎯</span>
                        Outcome
                      </h4>
                      <p className="text-gray-300 text-sm ml-11 leading-relaxed">
                        Clear understanding of vulnerabilities, why they exist, and what can realistically be fixed to improve safety and reliability.
                      </p>
                    </div>
                  </div>
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
            Ready to <span className="gradient-text">Strengthen Your Healthcare System?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact QElevate to learn more about how we can help identify and reduce preventable harm in your healthcare system.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
