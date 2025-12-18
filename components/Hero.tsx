import React from 'react';
import { SectionId } from '../types';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-3 mb-2 text-primary-400 text-xs font-bold uppercase tracking-[0.15em]">
              <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-pulse"></span>
              <span>COO, OCIC, NTHU</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-white">
              Innovate. Protect.<br/>
              <span className="text-primary-500">Commercialize.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Bridging the gap between <strong>R&D breakthroughs</strong> and <strong>market success</strong>. 
              Leveraging deep-tech expertise to build robust IP strategies for global impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href={`#${SectionId.CONTACT}`}
                className="px-8 py-4 rounded bg-primary-600 hover:bg-primary-700 text-white font-sans text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-primary-600/25 transform hover:-translate-y-0.5 text-center"
              >
                Book Consultation
              </a>
              <a 
                href={PROFILE.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded border border-slate-600 hover:border-white text-white font-sans text-sm font-bold uppercase tracking-wider transition-all hover:bg-white/5 text-center"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-800 mt-8">
              <div>
                <div className="text-3xl font-serif font-bold text-white">15<span className="text-primary-500">+</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">37</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Keynotes</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">19</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">SCI Papers</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">28</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Patents</div>
              </div>
            </div>
          </div>

          {/* Photo Area with Enhanced Frame */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative pb-10 lg:pb-0">
             <div className="relative w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[540px]">
                {/* Main Image Frame */}
                <div className="relative w-full h-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-slate-700 z-10 transition-all duration-500 hover:border-primary-500/50">
                   <img 
                      src="https://drive.google.com/thumbnail?id=1jfR6QkhtSbVV0QJ2MDzyh1oe-Tesvw_Y&sz=w1000" 
                      alt={PROFILE.name}
                      loading="eager"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop";
                      }}
                   />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-primary-500/10 rounded-xl z-0 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
                
                {/* Information Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded shadow-2xl z-20 hidden sm:block max-w-xs border border-slate-100">
                   <div className="text-[10px] text-primary-600 uppercase font-black tracking-[0.2em] mb-2">Core Expertise</div>
                   <div className="text-navy-900 font-serif font-bold text-lg leading-tight">Deep Tech Strategy & IP Commercialization</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;