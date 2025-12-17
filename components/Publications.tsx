import React, { useState } from 'react';
import { PUBLICATIONS, Icons } from '../constants';
import { Publication } from '../types';

type TabType = 'patent' | 'paper';

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('patent');

  // Filter and sort by date descending (newest first)
  const patents = PUBLICATIONS
    .filter(p => p.type === 'patent')
    .sort((a, b) => parseInt(b.date) - parseInt(a.date));
    
  const papers = PUBLICATIONS
    .filter(p => p.type === 'paper')
    .sort((a, b) => parseInt(b.date) - parseInt(a.date));

  const activeItems = activeTab === 'patent' ? patents : papers;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform origin-top pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-3 block">Research & Innovation</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Publications & IP
          </h2>
          <p className="text-slate-600 text-lg">
             A comprehensive portfolio demonstrating R&D excellence and commercial impact.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-50 p-1 rounded-lg border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('patent')}
              className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'patent'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4"><Icons.Patent /></div>
                <span>Granted Patents ({patents.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('paper')}
              className={`px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'paper'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4"><Icons.Document /></div>
                <span>SCI Papers ({papers.length})</span>
              </div>
            </button>
          </div>
        </div>

        {/* List Content */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px]">
          <div className="divide-y divide-slate-100">
            {activeItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:bg-slate-50 transition-colors duration-200"
              >
                {/* Left: Year & Type Icon */}
                <div className="sm:w-24 flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-2">
                   <span className={`text-lg font-bold font-serif ${activeTab === 'patent' ? 'text-navy-900' : 'text-primary-600'}`}>
                     {item.date}
                   </span>
                   <div className={`p-2 rounded-full bg-slate-100 ${activeTab === 'patent' ? 'text-navy-700' : 'text-primary-600'}`}>
                      {activeTab === 'patent' ? <div className="w-5 h-5"><Icons.Patent /></div> : <div className="w-5 h-5"><Icons.Document /></div>}
                   </div>
                </div>

                {/* Right: Content */}
                <div className="flex-grow">
                  <h5 className="text-xl font-bold font-serif text-navy-900 mb-2 leading-tight group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h5>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 mb-2">
                    <span className="font-semibold text-navy-800 bg-slate-100 px-2 py-0.5 rounded">
                      {item.journalOrId}
                    </span>
                    {item.authors && (
                      <>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <span className="italic truncate max-w-md">{item.authors}</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Action Arrow (Visual only) */}
                <div className="hidden sm:flex items-center justify-center text-slate-300 group-hover:text-primary-500 transition-colors">
                   <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                   </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer of list */}
          <div className="bg-slate-50 p-4 text-center text-xs text-slate-400 uppercase tracking-widest border-t border-slate-100">
            End of List
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;