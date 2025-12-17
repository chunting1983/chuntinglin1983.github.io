import React from 'react';
import { SectionId } from '../types';
import { PROFILE, EXPERIENCE, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-5">
            <span className="block text-primary-600 font-bold text-xs uppercase tracking-widest mb-3">About Me</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
              Strategic Leader in IP & Innovation
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
              <p>{PROFILE.bio}</p>
              <p>
                My career is defined by a commitment to bridging the gap between scientific discovery and commercial value, optimizing university tech transfer and managing global patent portfolios.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
               <h3 className="font-serif font-bold text-xl text-navy-900 mb-6">Education</h3>
               <ul className="space-y-6">
                 {EDUCATION.map((edu, idx) => (
                   <li key={idx}>
                     <div className="font-bold text-navy-900">{edu.degree}</div>
                     <div className="text-slate-500 text-sm mt-1">{edu.institution}, {edu.period}</div>
                     {edu.details && <div className="text-slate-400 text-xs mt-1 italic">{edu.details}</div>}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1 border-r border-slate-100 mx-auto h-full"></div>

          {/* Sidebar Experience */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8">Professional Experience</h3>
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-slate-200">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary-600 ring-4 ring-white"></span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary-700 mb-1">{exp.period}</span>
                  <h4 className="text-lg font-bold text-navy-900 leading-tight">{exp.role}</h4>
                  <div className="text-slate-500 text-sm mb-3 font-medium">{exp.company}</div>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
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