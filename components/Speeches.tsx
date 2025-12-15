import React from 'react';
import { SPEECHES } from '../constants';
import { SectionId } from '../types';

const Speeches: React.FC = () => {
  return (
    <section id={SectionId.TRACK_RECORD} className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
           <span className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-3 block">Track Record</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
             Invited Speeches
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {SPEECHES.map((speech, index) => (
            <div key={index} className="border-t border-slate-200 pt-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {speech.date}
              </div>
              <h4 className="text-xl font-serif font-bold text-navy-900 mb-3 leading-snug">
                {speech.title}
              </h4>
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-navy-800">{speech.event}</span>
                <span className="mx-2 text-slate-300">|</span>
                <span>{speech.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speeches;