import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-xl border-b border-primary/20 py-5 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full flex justify-between items-center relative">
        {/* Logo (Left) */}
        <a href="/" className="">
          <img
            src="https://i.ibb.co.com/9J1HzXK/unnamed-Photoroom.png"
            alt="sj-it-ltd"
            className="h-12 w-auto object-contain"
          />
        </a>
        {/* Desktop Menu (Center) */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-white hover:text-primary transition-colors font-bold text-lg hover-trigger">Home</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-primary transition-colors font-bold text-lg hover-trigger">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="glass rounded-xl shadow-2xl overflow-hidden py-3 border border-primary/20 bg-[#0f172a]/90 backdrop-blur-md">
                <a href="#team" className="block px-6 py-3 text-white hover:bg-primary/20 hover:text-primary text-base font-medium">Our Team</a>
                <a href="#services" className="block px-6 py-3 text-white hover:bg-primary/20 hover:text-primary text-base font-medium">Services</a>
              </div>
            </div>
          </div>
          <a href="#about" className="text-white hover:text-primary transition-colors font-bold text-lg hover-trigger">About</a>
          <a href="#development" className="text-white hover:text-primary transition-colors font-bold text-lg hover-trigger">Development</a>
        </div>

        {/* Contact / Mobile Toggle (Right) */}
        <div className="flex items-center gap-4 z-20">
          <a href="#contact" className="hidden sm:flex px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded-xl font-extrabold text-base hover-trigger">
            Contact Us
          </a>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-background/100 backdrop-black z-40 pt-24 px-6 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="text-4xl">&times;</span>
        </button>
        <div className="flex flex-col gap-8 text-2xl font-bold">
          <a href="#" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#services" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#development" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Development</a>
          <a href="#contact" className="text-primary border border-primary px-6 py-4 rounded-xl text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;