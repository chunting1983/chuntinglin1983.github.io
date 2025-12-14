import React from 'react';
import { SectionId } from '../types';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
      
      {/* Glowing Orbs - Adjusted positions for better focus */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-slate-900/90 border border-primary-500/30 rounded-full text-xs font-bold uppercase tracking-wider text-primary-400 shadow-lg shadow-primary-500/10 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span>Available for Global Consulting</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Innovate. <br/>
              Protect. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-tech-glow to-blue-500">
                Commercialize.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-primary-500/20 pl-6">
              {PROFILE.tagline} Leveraging deep-tech expertise to bridge the gap between R&D breakthroughs and market success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2">
              <a 
                href={`#${SectionId.CONTACT}`}
                className="group relative px-8 py-4 rounded-lg bg-primary-600 overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative font-bold text-lg text-white">Book Consultation</span>
              </a>
              <a 
                href={PROFILE.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary-500/50 font-medium text-lg transition-all backdrop-blur-sm"
              >
                View LinkedIn
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 mt-8">
              <div className="transform transition-transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">15<span className="text-primary-500">+</span></div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Years Exp</div>
              </div>
              <div className="transform transition-transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">37</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Invited Talks</div>
              </div>
              <div className="transform transition-transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">28</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Patents</div>
              </div>
            </div>
          </div>

          {/* Photo Area */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative pb-10 lg:pb-0">
             {/* Tech Frame Layout */}
             <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] lg:w-[440px] lg:h-[560px] group">
                
                {/* Animated Border Rings */}
                <div className="absolute -inset-4 rounded-3xl border border-primary-500/30 opacity-40 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="absolute -inset-1 rounded-3xl border border-primary-500/10 opacity-20 rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>

                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-24 h-24 border-t-4 border-l-4 border-primary-500 rounded-tl-2xl z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-4 border-r-4 border-primary-500 rounded-br-2xl z-20"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 z-10">
                   {/* 
                      IMPORTANT: 
                      Please ensure your file is named "profile.jpg" and placed in the "public" folder.
                   */}
                   <img 
                      src="profile.jpg" 
                      alt={PROFILE.name}
                      onError={(e) => {
                        // Fallback
                        e.currentTarget.src = "https://placehold.co/800x1000/1e293b/06b6d4?text=Upload+profile.jpg";
                      }}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Tech Overlay Effects */}
                   {/* 1. Subtle scanlines */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity"></div>
                   
                   {/* 2. Gradient at bottom for text readability */}
                   <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
                   
                   {/* 3. Inner Glow */}
                   <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-20 pointer-events-none rounded-2xl"></div>
                </div>

                {/* Floating Badge - "Holographic" feel */}
                <div className="absolute bottom-8 -left-4 sm:-left-12 bg-slate-900/80 backdrop-blur-xl border border-primary-500/40 p-4 sm:p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-30 animate-float flex items-center gap-4 hover:border-primary-500 transition-colors">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-blue-600/20 flex items-center justify-center text-primary-400 shadow-inner border border-white/5">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                      <div className="text-xs text-primary-400 uppercase font-bold tracking-wider mb-0.5">Focus Area</div>
                      <div className="text-white font-bold font-display text-lg">Deep Tech & BNCT</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;