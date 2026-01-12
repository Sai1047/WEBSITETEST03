import React, { useRef } from 'react';
import { Home, FileText, BarChart3, ChevronRight, Star, ChevronLeft } from 'lucide-react';
import { heroSlides } from '../constants';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one item width (400px on desktop + gap)
      const scrollAmount = 420;

      if (direction === 'left') {
        // If at the start (or very close), loop to the end
        if (current.scrollLeft < 10) {
          current.scrollTo({ left: current.scrollWidth, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        // If at the end (or very close), loop to the start
        const maxScroll = current.scrollWidth - current.clientWidth;
        if (current.scrollLeft >= maxScroll - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="pt-32 pb-12 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute right-[-10%] top-[10%] w-[45rem] h-[45rem] bg-primary blur-[200px] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute left-[-10%] top-[20%] w-[35rem] h-[35rem] bg-blue-600 blur-[200px] rounded-full opacity-40"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">




        {/* Headings */}
        <span
          className="block text-white animate-pop-up opacity-0 mb-9"
          style={{ animationDelay: '150ms' }}
        >

        </span>
      
        <h1 className="text-5xl md:text-8xl font-semibold leading-tight mb-8 tracking-tight">
          <span className="block text-white animate-pop-up opacity-0" style={{ animationDelay: '150ms' }}>Streamline Your</span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 animate-pop-up opacity-0" style={{ animationDelay: '300ms' }}>
            <span className="text-secondary">Preservation</span>
            {/* Pill Container */}
            <div className="h-14 md:h-24 px-6 md:px-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full flex items-center gap-5 md:gap-8 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              <Home className="h-7 w-7 md:h-12 md:w-12 text-primary hover:scale-110 transition-transform" />
              <FileText className="h-7 w-7 md:h-12 md:w-12 text-white hover:scale-110 transition-transform" />
              <div className="w-px h-8 md:h-12 bg-white/20"></div>
              <BarChart3 className="h-7 w-7 md:h-12 md:w-12 text-primary hover:scale-110 transition-transform" />
            </div>
            <span className="text-secondary">Workflow</span>
          </div>
        </h1>

        {/* Subtext */}
        <p className="max-w-4xl mx-auto text-secondary text-xl md:text-2xl mt-4 mb-12 animate-pop-up opacity-0 leading-relaxed font-medium" style={{ animationDelay: '450ms' }}>
          We provide fast, accurate, and scalable data processing & backend support tailored to grow your property preservation business.
        </p>

        {/* CTA Button */}
        <div className="animate-pop-up opacity-0" style={{ animationDelay: '600ms' }}>
          <a href="#services" className="inline-flex items-center gap-3 px-12 py-6 bg-blue-900/40 border border-primary hover:bg-primary hover:text-black text-primary rounded-full transition-all duration-300 group shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <span className="font-extrabold text-xl group-hover:text-black transition-colors">Explore Our Services</span>
            <ChevronRight className="w-6 h-6 text-current group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Slider Section (Manual Navigation + Details on Hover) */}
        <div className="mt-28 w-full max-w-[1280px] mx-auto relative group/slider animate-pop-up opacity-0" style={{ animationDelay: '800ms' }}>

          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-primary border border-white/10 p-4 rounded-full text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-primary border border-white/10 p-4 rounded-full text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 scroll-smooth px-2"
          >
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className="relative min-w-[300px] md:min-w-[400px] aspect-[16/10] rounded-[2rem] overflow-hidden snap-center shrink-0 border border-white/10 bg-white/5 shadow-2xl group cursor-pointer"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-black text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{slide.title}</h3>
                  <div className="h-1 w-20 bg-primary mb-6 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                  <p className="text-lg text-secondary max-w-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;