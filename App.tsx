import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import { ArrowRight, ArrowUpRight, Check, X, CheckCircle2, Phone, Lightbulb, Headset, User, Box, Award, Clock, BarChart3, ArrowDown } from 'lucide-react';
import { techCards, capabilities, comparisons } from './constants';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* MISSION SECTION */}
        <section className="py-20 md:py-32 px-5 relative">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="relative rounded-[2rem] overflow-hidden p-[2px] bg-gradient-to-r from-primary to-blue-900 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                <div className="bg-background/80 backdrop-blur-xl rounded-[2rem] relative overflow-hidden py-16 px-6 md:px-20 text-center">
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight max-w-5xl mx-auto">
                    Our mission is to design websites that attract and engage customers.
                  </h2>
                  <p className="text-xl md:text-3xl text-secondary font-medium">
                    However, we approach things a bit differently with our data-driven strategies.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW WE HELP SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">How We Can Help Your Business Grow</h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
              {[
                { title: "Value", icon: Lightbulb, desc: "We offer outsourcing solutions to businesses and help them reduce overhead costs." },
                { title: "Support", icon: Headset, desc: "Our 24/7 customer support team is here to help clients achieve their desired business goals." },
                { title: "Trust", icon: User, desc: "Our business plan and strategies are developed with transparency, to help businesses grow." },
                { title: "Quality", icon: Box, desc: "We're proud of the work we do, and we're thrilled to work with over 4,000 clients worldwide." }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="glass-card rounded-[1.5rem] p-8 pt-16 relative overflow-visible h-full flex flex-col items-center text-center group hover:bg-primary/5 transition-colors border-t-0">
                    {/* Hexagon Icon Container */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#1e293b] flex items-center justify-center text-white group-hover:text-primary transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      {/* Hexagon Border Effect (Inner) */}
                      <div className="absolute inset-[2px] bg-[#0f172a] z-[-1]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                      <item.icon className="w-10 h-10 relative z-10" />
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4 mt-4">{item.title}</h3>
                    <p className="text-secondary text-base leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="py-20 px-5 relative overflow-hidden" id="about">
          <div className="max-w-[1140px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative flex justify-center">
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                <Reveal>
                  <div className="relative w-72 h-72 md:w-96 md:h-96 my-10 lg:my-0">
                    {/* Main Rotated Image Card */}
                    <div className="absolute inset-0 rotate-45 rounded-[2.5rem] overflow-hidden border-[6px] border-white/5 shadow-2xl z-10 bg-background group">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Team" className="-rotate-45 scale-150 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>

                    {/* Decorative squares behind */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 rotate-45 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-sm z-0 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 rotate-45 rounded-[1.5rem] bg-primary/10 border border-primary/20 backdrop-blur-sm z-0"></div>

                    {/* Badge */}
                    <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-8 md:-translate-x-10 md:translate-y-10 z-20">
                      <div className="bg-gradient-to-r from-blue-900 to-primary p-6 md:p-8 rounded-tr-[2rem] rounded-bl-[2rem] shadow-[0_10px_30px_rgba(56,189,248,0.3)] relative overflow-hidden group border border-white/10">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 leading-none">11+</h3>
                        <p className="text-white/90 text-xs md:text-sm font-semibold leading-tight uppercase tracking-wider">Years of<br />Experience</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <Reveal delay={200}>
                  <div className="inline-block mb-4">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">About Us</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Extraordinary Outsourcing At A Reasonable Price
                  </h2>
                  <p className="text-secondary text-lg mb-10 leading-relaxed">
                    SJ IT LTD is a global outsourcing firm that provides a wide array of affordable outsourcing services worldwide. We were founded in 2011 with the aim to provide cost-effective back-end services and outsourcing solutions to any businesses.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {/* Feature 1 */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-colors group">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                        <Award className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Experience</h4>
                      <p className="text-secondary text-sm leading-relaxed">We are a team of people with more than 11 years of experience.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-colors group">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                        <Clock className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Quick Support</h4>
                      <p className="text-secondary text-sm leading-relaxed">24/7 customer support will help you achieve your business goals.</p>
                    </div>
                  </div>

                  <p className="text-secondary text-base italic border-l-4 border-primary pl-4">
                    "We offer solutions that help your business accelerate growth, simplify and personalise Customer Experience, and build priceless loyalty and trust."
                  </p>

                  <div className="mt-8">
                    <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-20 px-5 relative" id="development">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <Reveal>
                <div className="relative" >
                  <div className="inline-block mb-3">
                    <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Experience</h4>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">Experts With Experience</h2>
                  <p className="text-secondary text-lg mb-10 leading-relaxed">
                    Our business process outsourcing services are designed to meet all your back-office needs. We'll tailor our services to meet your specific objectives, considering each process as a unique project that evolves with your business.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {['Graphic Design', 'Virtual Assistant', 'Web Development', 'BPO Solutions', 'Admin Support', 'Digital Marketing'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-primary/20 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-primary stroke-[3]" />
                        </div>
                        <span className="text-white font-medium text-lg">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card rounded-3xl p-8 border border-white/10 flex gap-6 items-start hover:border-primary/30 transition-colors">
                    <div className="bg-primary/10 p-4 rounded-2xl shrink-0">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3">Best Practices From Our Experts</h4>
                      <p className="text-secondary text-base leading-relaxed">
                        We put the customer at the heart of everything we do. We can provide you with a tailored solution.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right Images */}
              <Reveal delay={200}>
                <div className="relative isolate">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-4 md:space-y-6 mt-12">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" alt="Work" />
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" alt="Support" />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" alt="Team" />
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" alt="Meeting" />
                    </div>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center w-[200px] md:w-[280px] animate-pop-up">
                    <span className="block text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-2">4000+</span>
                    <p className="text-black font-bold text-lg">Satisfied Clients</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SMALL BUSINESS SERVICES SECTION (NEW) */}
        <section className="py-24 px-5 relative overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]"></div>
          </div>

          <div className="max-w-[1280px] mx-auto relative z-10">
            <Reveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-4xl mx-auto">
                  Services We Offer For Small & <br className="hidden md:block" /> Medium-Sized Businesses
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              {[
                { title: "Real Estate Assistant", desc: "We offer real estate services to real estate agents." },
                { title: "Back-Office Services", desc: "Let us take care of your back-office so you can focus on your core business." },
                { title: "Social Media Management", desc: "Increase Your Brand Awareness and Revenue" },
                { title: "SEO Service", desc: "We specialize in SEO services for small to medium-sized companies." },
                { title: "Customer Care Support", desc: "Customer support with 100% Customer Satisfaction" }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="flex flex-col items-center text-center group h-full">
                    {/* Hexagon */}
                    <div className="w-24 h-24 bg-primary flex items-center justify-center text-white mb-8 shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="bg-white rounded-full p-2 group-hover:bg-primary transition-colors duration-300">
                        <ArrowDown className="w-6 h-6 text-primary stroke-[3] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 leading-tight min-h-[3.5rem] flex items-center justify-center">{item.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 px-5" id="services">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">See How We Can Help Your Brand</h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc848933129f565989435_9lDwe5RVWhcROsUnUSLQ5QiaaPk%201.svg", title: "Work Order Processing", desc: "Accurate and timely updates for all your preservation work orders." },
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc84962e8b69cbd2a21ca_FhPczbEeg5bRtLspTbQHpRUUg%201.svg", title: "Bid & Repair Estimation", desc: "Professional bid creation with precise cost estimation for repairs." },
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc848b70591bee48433ca_36QlWRG5xFqx3DaY9IWO4wgp98%201.svg", title: "Vendor Management", desc: "Streamlined communication and coordination with field vendors." }
              ].map((service, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="glass-card rounded-[1.5rem] p-8 relative overflow-hidden group hover:border-primary transition-colors duration-300 h-full">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-start h-full">
                      <div className="w-14 h-14 mb-8 p-3 bg-primary/10 rounded-xl">
                        <img src={service.icon} alt={service.title} className="w-full h-full object-contain filter invert brightness-0 saturate-100 invert-[.25] sepia-[.95] saturate-[2000%] hue-rotate-[190deg]" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                      <p className="text-secondary text-lg font-medium leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">Why Webvigo Technologies Stands Out</h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCards.map((card, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="glass-card rounded-[1.5rem] p-8 relative overflow-hidden hover:border-primary transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc77196889056c0212d43_Rectangle%2093.png')] opacity-10 bg-cover bg-repeat mix-blend-overlay"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 mb-8 p-1 bg-primary/20 rounded-xl">
                        <img src={card.icon} alt={card.title} className="w-full h-full object-contain filter invert brightness-0 saturate-100 invert-[.25] sepia-[.95] saturate-[2000%] hue-rotate-[190deg]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                      <p className="text-secondary text-lg leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-5" id="team">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6">
            {/* Left: Team Slider */}
            <div className="flex-1 glass-card rounded-[1.5rem] p-8 lg:p-12 shadow-2xl">
              <Reveal>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Meet Our Team</h3>
                    <p className="text-secondary text-lg max-w-lg">Let Us be Your Backend Team. We take care of all your preservation processing needs</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="relative mt-8 overflow-hidden">
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x">
                    {[
                      { name: "Md. Shariful Islam Shamim", role: "CEO", img: "https://i.ibb.co.com/Jjv508gX/CEO.jpg" },
                      { name: "Md. Forhad Hossain", role: "Managing Director", img: "https://i.ibb.co.com/Q3HgLVGf/unnamed-1.jpg"},
                      { name: "Md. Ashraful Islam Shakil", role: "Account and Management", img: "https://i.ibb.co.com/WvYbfCNt/unnamed.jpg"}
                    ].map((member, i) => (
                      <div key={i} className="snap-center shrink-0 w-[240px] relative group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-4 left-0 w-full text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-background/90 backdrop-blur-md rounded-lg py-3 mx-2 border border-primary/20">
                            <p className="text-white font-bold text-base">{member.name}</p>
                            <p className="text-sm text-primary">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex justify-between items-center mt-8">
                  <h3 className="text-xl font-bold text-white">Interested in joining with us?</h3>
                  <a href="#" className="flex items-center gap-2 bg-primary/10 border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-black transition-colors">
                    <span className="text-base font-medium">Write us</span>
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </a>
                </div>
                <p className="text-secondary text-base mt-2">Please send us your details along with your resume.</p>
              </Reveal>
            </div>

            {/* Right: Capabilities */}
            <div className="w-full lg:w-[420px] glass-card rounded-[1.5rem] p-8 lg:p-10 shadow-2xl flex flex-col">
              <Reveal delay={300}>
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-3xl font-semibold text-white mb-2">Supported</h3>
                  <h2 className="text-5xl font-bold tracking-tight text-primary my-4 lg:mx-0"> <span className="text-white">SJ IT</span> LTD</h2>
                  <p className="text-secondary text-lg">Expert Property Preservation & BPO Services Company in Bangladesh</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Capabilities</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {capabilities.map((cap, i) => (
                      <span key={i} className={`bg-white/5 border border-white/10 text-secondary px-4 py-2.5 rounded-xl text-base font-medium hover:bg-primary/20 hover:text-white transition-colors cursor-default ${i === capabilities.length - 1 ? 'w-full text-center' : ''}`}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-16 items-start">

            {/* Grid of Stats */}
            <div className="w-full lg:w-1/3">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "500K+", label: "Work Orders" },
                    { val: "50+", label: "Clients" },
                    { val: "99%", label: "QC Accuracy" },
                    { val: "24/7", label: "Support" }
                  ].map((stat, i) => (
                    <div key={i} className="glass-card rounded-[1.3rem] p-6 h-56 flex flex-col justify-center items-center text-center hover:bg-primary/5 transition-colors">
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.val}</h3>
                      <p className="text-primary text-xl font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Results & Analytics Text */}
            <div className="flex-1">
              <Reveal delay={200}>
                <div className="inline-block border border-primary/50 bg-primary/10 rounded-full px-5 py-2 mb-6">
                  <span className="text-primary font-medium text-lg">Results & Analytics</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-12">Performance Insights and Analytics Overview</h3>

                {/* Removed Brand Marquee from here */}
                <div className="relative">
                  <p className="text-xl text-secondary leading-relaxed">
                    Our analytics-driven approach ensures that every decision is backed by data. We monitor performance metrics in real-time to guarantee efficiency and accuracy in all preservation tasks.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-20 px-5 relative">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Choosing <span className="text-primary">SJ IT LTD</span><br />Technologies Over Others</h2>
                <p className="text-2xl text-secondary">See why SJ IT LTD stands out with superior service, innovation, and client satisfaction benchmarks.</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex justify-between items-center px-8 mb-8 text-2xl font-bold text-white">
                <div className="w-1/2">Other Agencies</div>
                <div className="w-1/2 pl-8 flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">SJ IT LTD</span>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="glass-card rounded-[1.3rem] flex overflow-hidden">
                    <div className="w-1/2 p-8 flex items-start gap-5 border-r border-white/10 bg-black/20">
                      <div className="bg-red-500/10 p-1.5 rounded-full shrink-0">
                        <X className="text-red-500 w-6 h-6" />
                      </div>
                      <p className="text-secondary font-medium text-lg">{item.other}</p>
                    </div>
                    <div className="w-1/2 p-8 flex items-start gap-5 relative bg-primary/5">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-10 bg-primary blur-[4px]"></div>
                      <div className="bg-green-500/10 p-1.5 rounded-full shrink-0">
                        <Check className="text-green-500 w-6 h-6" />
                      </div>
                      <p className="text-white font-medium text-lg">{item.us}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">We Provide All Essential Services for Accelerating Business Growth</h2>
                <p className="text-xl text-secondary">Discover our comprehensive range of services tailored to enhance your digital and operational presence.</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Reveal>
                <div className="glass-card rounded-[1.3rem] p-10 md:p-14 relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="flex justify-end mb-8">
                    <a href="#" className="inline-flex items-center gap-3 border border-primary text-white px-6 py-4 rounded-xl hover:bg-primary hover:text-black transition-colors z-10">
                      <span className="font-bold text-lg">Start Now</span>
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </a>
                  </div>
                  <h3 className="text-4xl font-semibold text-white mb-6">Property Preservation Processing</h3>
                  <p className="text-grey font-medium mb-10 text-xl">We handle the backend workload so you can focus on the field. From updating work orders to ensuring timely submissions with zero errors.</p>
                  <div className="h-px w-full bg-white/10 mb-10"></div>
                  <div className="space-y-5">
                    {["Work Order Processing & Submission.", "Bids & Repair Estimations.", "Quality Control (QC) Assurance.", "Vendor Payroll & Invoicing.", "Utility Activation & Management."].map((item, i) => (
                      <div key={i} className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /><span className="text-secondary font-medium text-lg">{item}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={200}>
                <div className="glass-card rounded-[1.3rem] p-10 md:p-14 relative h-full">
                  <div className="flex justify-end mb-8">
                    <a href="#" className="inline-flex items-center gap-3 border border-primary text-white px-6 py-4 rounded-xl hover:bg-primary hover:text-black transition-colors">
                      <span className="font-bold text-lg">Start Now</span>
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </a>
                  </div>
                  <h3 className="text-4xl font-semibold text-white mb-6">BPO & Digital Services</h3>
                  <p className="text-grey font-medium mb-10 text-xl">Accelerate your business operations with our BPO solutions, including virtual assistance, marketing, and customer support.</p>
                  <div className="h-px w-full bg-white/10 mb-10"></div>
                  <div className="space-y-5">
                    {["Data Entry & Virtual Assistance.", "24/7 Call Center Support.", "CRM Management for Vendors.", "Lead Generation for Realtors.", "Digital Marketing for REOs."].map((item, i) => (
                      <div key={i} className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-primary" /><span className="text-secondary font-medium text-lg">{item}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="inline-block bg-primary/20 p-[1px] rounded-sm mb-3">
                  <span className="bg-background text-primary px-4 py-1.5 text-sm rounded-sm block">Our Blog</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">News, insights and more</h2>
                <p className="text-2xl font-medium text-secondary max-w-2xl mx-auto">Dive into our blog for expert insights, tips, and industry trends to elevate your preservation business.</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Maximizing ROI in Property Preservation with Efficient BPO", date: "Oct 11, 2025", tag: "BPO Services", img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Top 5 Tools for Property Preservation Vendors in 2025", date: "Oct 11, 2025", tag: "Industry Tech", img: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                { title: "How to Reduce Kickbacks and Improve QC Scores", date: "Oct 11, 2025", tag: "Quality Control", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              ].map((blog, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <a href="#" className="border border-primary bg-primary/5 rounded-[1.3rem] p-3 pb-8 hover:border-white transition-colors group block h-full">
                    <div className="rounded-[1.3rem] overflow-hidden mb-5">
                      <img src={blog.img} alt={blog.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="px-3">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary/20 p-[1px] rounded-[2px] inline-block">
                          <span className="bg-background text-primary px-2.5 py-0.5 text-sm block rounded-[2px]">{blog.tag}</span>
                        </span>
                        <span className="text-xs font-medium text-off-grey">{blog.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug mb-8">{blog.title}</h3>
                      <div className="flex items-center gap-2 text-off-grey">
                        <span className="font-medium text-lg">Read Full Blog</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-5" id="cta">
          <div className="max-w-[1140px] mx-auto">
            <Reveal>
              <div className="bg-gradient-to-b from-primary to-blue-900 p-[2px] rounded-[1.3rem]">
                <div className="bg-background bg-[url('https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6914cc4aac360a51be5ab483_Rectangle%2094.png')] bg-center bg-no-repeat rounded-[1.3rem] py-16 md:py-24 px-8 text-center">
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">Start Your Project</h2>
                  <p className="text-xl font-medium text-secondary mb-10 max-w-lg mx-auto">Contact us today to start streamlining your property preservation business.</p>

                  <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {["Work Order Processing", "Bid Estimations", "Vendor Management"].map((item, i) => (
                      <div key={i} className="bg-gradient-to-b from-primary to-blue-900 p-[1px] rounded-sm inline-block">
                        <div className="bg-background px-4 py-1.5 rounded-sm flex items-center gap-3">
                          <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6911bb20df872a92ee0a0426_20x20.svg" className="w-4 h-4" alt="icon" style={{ filter: 'hue-rotate(180deg)' }} />
                          <span className="text-sm font-bold text-primary">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 border border-primary bg-primary/10 rounded-xl text-black hover:bg-primary hover:text-white transition-colors">
                    <Phone className="w-5 h-5 fill-current" />
                    <span className="font-bold text-lg text-white">Book a Call</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;