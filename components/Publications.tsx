import React from 'react';
import { PUBLICATIONS, Icons } from '../constants';
import { Publication } from '../types';

const Publications: React.FC = () => {
  const patents = PUBLICATIONS.filter(p => p.type === 'patent');
  const papers = PUBLICATIONS.filter(p => p.type === 'paper');

  const PublicationCard = ({ item }: { item: Publication }) => (
    <div className="flex items-start p-6 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mt-1 p-2 bg-slate-50 text-slate-600 rounded-lg">
        {item.type === 'patent' ? <Icons.Patent /> : <Icons.Document />}
      </div>
      <div className="ml-4 flex-1">
        <h5 className="text-lg font-bold font-display text-slate-900 mb-1 leading-snug">{item.title}</h5>
        <div className="text-primary-700 font-medium mb-1 text-sm font-display">{item.journalOrId}</div>
        <div className="text-slate-500 text-sm">
           {item.authors && <span className="mr-2 italic">{item.authors} •</span>}
           <span>{item.date}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Research & Intellectual Property
          </h3>
          <p className="text-slate-600 max-w-2xl text-lg">
             A proven track record of R&D excellence and IP creation, including <span className="font-bold text-slate-900">19 SCI Papers</span> and <span className="font-bold text-slate-900">28 Granted Patents</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Patents Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
               <div className="p-2 bg-slate-900 text-white rounded-lg">
                 <Icons.Patent />
               </div>
               <h4 className="text-2xl font-bold font-display text-slate-900">Selected Patents</h4>
            </div>
            <div className="space-y-4">
              {patents.map((item, idx) => (
                <PublicationCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Papers Column */}
          <div>
             <div className="flex items-center space-x-3 mb-8">
               <div className="p-2 bg-primary-600 text-white rounded-lg">
                 <Icons.Document />
               </div>
               <h4 className="text-2xl font-bold font-display text-slate-900">Selected SCI Papers</h4>
            </div>
            <div className="space-y-4">
              {papers.map((item, idx) => (
                <PublicationCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;