import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
        }
    }, []);

    return (
        <footer className="bg-background relative pt-24 pb-10">
            {/* Globe Video Background Area */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
                >
                    <source src="https://github.com/designmonks/webvideos/raw/refs/heads/main/footer_globe.mp4" type="video/mp4" />
                </video>
                {/* Gradient Fade */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="max-w-[1280px] mx-auto px-5 relative z-10 mb-24 max-h-[900px]">
                <div className="rounded-[2.5rem] overflow-hidden p-8 md:p-14 border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
                    <div className="text-center mb-14">
                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-base mt-4">Contact Us</h4>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">We Always Here To Help You</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-3xl overflow-hidden h-[450px] md:h-[600px] relative group border border-white/10 shadow-lg">
                                <img src="https://acsoperations.com/wp-content/uploads/2025/02/Untitled-design-25.png" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Contact Support" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                            </div>
                        </div>
                        {/* Form Side */}
                        <div className="w-full lg:w-1/2">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-base text-white ml-1 font-medium">Your Name *</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base text-white ml-1 font-medium">Phone Number *</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-base text-white ml-1 font-medium">Email Address *</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base text-white ml-1 font-medium">Subject</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary" placeholder="Project Discussion" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-base text-white ml-1 font-medium">Message *</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-primary transition-colors h-40 resize-none placeholder:text-secondary" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" className="bg-primary text-black font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white transition-colors flex items-center gap-3">
                                    SEND MESSAGE <ArrowRight className="w-6 h-6" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
                    {/* Left Column: Brand */}
                    <div className="md:w-1/3">
                        <a href="/" className="">
                            <img
                                src="https://i.ibb.co.com/9J1HzXK/unnamed-Photoroom.png"
                                alt="sj-it-ltd"
                                className="h-12 w-auto object-contain"
                            />
                        </a>
                        
                        <p className="text-secondary  mb-8 max-w-sm leading-relaxed mt-4 ">
                            Empowering businesses with top-tier BPO and property preservation solutions.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="border border-primary/40 bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center hover:bg-primary hover:text-black text-white transition-all cursor-pointer group hover:scale-110 shadow-lg hover:shadow-primary/50">
                                    <Icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:w-1/3 flex justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-8">Company</h4>
                            <ul className="space-y-5 text-secondary font-medium text-base">
                                {['About Us', 'Latest Blog', 'Our Portfolio', 'Pricing Plans', 'Privacy Policy', 'Terms & Conditions'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-px bg-white/10 h-auto mx-6 hidden sm:block"></div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-8">Services</h4>
                            <ul className="space-y-5 text-secondary font-medium text-base">
                                {['All Services', 'Web Development', 'Content Writing', 'E-commerce', 'Digital Marketing', 'Local SEO'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Columns (Fixed Layout) */}
                    <div className="md:w-1/3 space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-2">Office</h4>
                        {/* BD Address Card */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition-colors border border-white/5 group">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-8 shrink-0 rounded-md overflow-hidden shadow-sm mt-1 ring-1 ring-white/20">
                                    <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912faf9e2efcbccdd1616ea_image%2013.svg" className="w-full h-full object-cover" alt="BD" />
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-xl mb-2">Dhaka, Bangladesh</h5>
                                    <p className="text-secondary text-base leading-relaxed mb-6 font-medium">
                                        Ka-6/a, Navana Sylvania, Nadda, Gulshan-2
                                        <br />Dhaka-1212
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <a href="tel:+8801811479397" className="text-white text-base font-bold hover:text-primary transition-colors flex items-center gap-3">
                                            <div className="bg-primary/20 p-2 rounded-full"><Phone className="w-4 h-4 text-primary" /></div>
                                            +88 01811-479397
                                        </a>
                                        <a href="mailto:join@sjitltd.com" className="text-white text-base font-bold hover:text-primary transition-colors flex items-center gap-3">
                                            <div className="bg-primary/20 p-2 rounded-full"><Mail className="w-4 h-4 text-primary" /></div>
                                            join@sjitltd.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-gray-400 font-medium">
                    <p>Copyright © 2025 SJ IT LTD - All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0 text-white">
                        <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;