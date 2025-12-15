import React from 'react';
import { SectionId } from '../types';
import { RESOURCES, Icons } from '../constants';

const Resources: React.FC = () => {
  return (
    <section id={SectionId.RESOURCES} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
           <span className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-3 block">Knowledge Sharing</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
             Resource Downloads
           </h2>
           <p className="text-slate-600 max-w-2xl mx-auto">
             Access selected slides and materials from my past lectures and workshops. These resources are provided for non-commercial educational use.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {RESOURCES.map((resource, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex items-start gap-6 group">
               <div className="flex-shrink-0 w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icons.Document />
               </div>
               <div className="flex-grow">
                  <h3 className="text-lg font-bold font-serif text-navy-900 mb-2">{resource.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                     <span className="text-xs font-bold text-slate-400 uppercase">{resource.format} • {resource.size}</span>
                     <a 
                       href={resource.downloadUrl}
                       className="text-sm font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1 group/link"
                       onClick={(e) => e.preventDefault()} // Prevent default since links are #
                     >
                       Download
                       <div className="w-4 h-4 transform group-hover/link:translate-y-0.5 transition-transform"><Icons.Download /></div>
                     </a>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic">
            Need materials on a specific topic? Feel free to <a href={`#${SectionId.CONTACT}`} className="text-primary-600 underline">contact me</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Resources;