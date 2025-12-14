import React from 'react';
import { SectionId } from '../types';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Decorative blob */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3 font-display">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Services Tailored to Your IP Needs
          </h3>
          <p className="text-lg text-slate-600">
            I offer a range of specialized services designed to protect, manage, and monetize your intellectual assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <div className="w-8 h-8">
                   {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold font-display text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href={`#${SectionId.CONTACT}`} className="text-sm font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center font-display">
                Learn more 
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;