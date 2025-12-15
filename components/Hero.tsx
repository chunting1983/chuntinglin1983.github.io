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
              <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
              <span>Available for Global Consulting</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-white">
              Innovate. Protect.<br/>
              <span className="text-primary-500">Commercialize.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Bridging the gap between <strong>R&D breakthroughs</strong> and <strong>market success</strong>. 
              I leverage deep-tech expertise to build robust IP strategies for universities, startups, and enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href={`#${SectionId.CONTACT}`}
                className="px-8 py-3.5 rounded bg-primary-600 hover:bg-primary-700 text-white font-sans text-sm font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-primary-600/25 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </a>
              <a 
                href={PROFILE.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded border border-slate-600 hover:border-white text-white font-sans text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-800 mt-8">
              <div>
                <div className="text-3xl font-serif font-bold text-white">15<span className="text-primary-500">+</span></div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">37</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Talks</div>
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

          {/* Photo Area */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative pb-10 lg:pb-0">
             <div className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[540px]">
                {/* Main Image Frame */}
                <div className="relative w-full h-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-slate-700 z-10">
                   <img 
                      src="https://drive.google.com/thumbnail?id=1jfR6QkhtSbVV0QJ2MDzyh1oe-Tesvw_Y&sz=w1000" 
                      alt={PROFILE.name}
                      loading="eager"
                      onError={(e) => {
                        // Fallback in case the Google Drive link permission issue or quota limit
                        e.currentTarget.src = "https://placehold.co/600x800/1e293b/06b6d4?text=Dr.+C.T.+Lin";
                      }}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                   />
                </div>

                {/* Decorative Frame Border */}
                <div className="absolute -inset-4 border border-primary-500/20 rounded-xl z-0"></div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-xl z-20 hidden sm:block max-w-sm">
                   <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Focus Area</div>
                   <div className="text-navy-900 font-serif font-bold text-lg leading-tight">Deep Tech Commercialization/ IP Strategy/ Open Innovation</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;