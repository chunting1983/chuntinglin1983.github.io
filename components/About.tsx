import React from 'react';
import { SectionId } from '../types';
import { PROFILE, EXPERIENCE, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3 font-display">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Strategic Leader in IP & Innovation
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {PROFILE.bio}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              My career is defined by a commitment to bridging the gap between scientific discovery and commercial value, whether through optimizing university tech transfer or managing global patent portfolios for deep-tech enterprises.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
               <h4 className="font-bold font-display text-slate-900 mb-4 flex items-center text-lg">
                 <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                 Education
               </h4>
               <ul className="space-y-4">
                 {EDUCATION.map((edu, idx) => (
                   <li key={idx} className="text-sm text-slate-700">
                     <div className="font-semibold font-display text-slate-900 text-base">{edu.degree}</div>
                     <div className="text-slate-500">{edu.institution}, {edu.period}</div>
                     {edu.details && <div className="text-slate-400 text-xs mt-0.5">{edu.details}</div>}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="lg:col-span-1 lg:col-start-7 hidden lg:block border-l border-slate-200 relative">
             {/* Vertical line spacer */}
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-8">Professional Experience</h3>
            <div className="space-y-10">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-slate-200">
                  <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary-500 ring-4 ring-white"></span>
                  <h4 className="text-lg font-bold font-display text-slate-900 leading-snug">{exp.role}</h4>
                  <div className="text-primary-600 font-medium mb-1 font-display">{exp.company}</div>
                  <div className="text-sm text-slate-400 mb-3 uppercase tracking-wide font-display">{exp.period}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;