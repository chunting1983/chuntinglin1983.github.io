import React from 'react';
import { SPEECHES, Icons } from '../constants';
import { SectionId } from '../types';

const Speeches: React.FC = () => {
  return (
    <section id={SectionId.TRACK_RECORD} className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3 font-display">Professional Track Record</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                37 Invited Speeches & Talks
              </h3>
              <p className="mt-4 text-slate-600 text-lg">
                Delivering insights on IP commercialization, patent strategy, and academic spin-offs to audiences across Taiwan and Asia.
              </p>
           </div>
           <div className="hidden md:block w-32 h-1 bg-slate-100 rounded-full mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPEECHES.map((speech, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-primary-200 group-hover:text-primary-500 transition-colors">
                <Icons.Microphone />
              </div>
              
              <div className="text-sm font-bold text-primary-600 mb-2 uppercase tracking-wide font-display">
                {speech.date}
              </div>
              
              <h4 className="text-xl font-bold font-display text-slate-900 mb-4 pr-8 leading-snug">
                {speech.title}
              </h4>
              
              <div className="flex flex-col space-y-1 text-slate-600 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold text-slate-800 mr-2 font-display">Event:</span> {speech.event}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-slate-800 mr-2 font-display">Location:</span> {speech.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speeches;