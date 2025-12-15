import React from 'react';
import { SectionId } from '../types';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-3 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
            Open Innovation & Tailored IP Services
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Specialized services designed to protect, manage, and monetize intellectual assets for startups and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                   {service.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-navy-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;