import React, { useState } from 'react';
import { SectionId } from '../types';
import { PROFILE, Icons } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3 font-display">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Let's Discuss Your IP Strategy
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Ready to take the next step? Fill out the form to schedule a preliminary consultation. I usually respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg text-primary-400">
                  <Icons.LinkedIn />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium font-display text-white">Connect on LinkedIn</p>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
                    linkedin.com/in/CTLIN1983
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg text-primary-400">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium font-display text-white">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
               <h4 className="text-white font-bold mb-2 font-display">Consultation Hours</h4>
               <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                 <div>Mon - Fri</div>
                 <div className="text-right">9:00 AM - 6:00 PM (GMT+8)</div>
                 <div>Sat - Sun</div>
                 <div className="text-right">By Appointment Only</div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 text-slate-900 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 font-display">Book a Consultation</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1">Topic of Interest</label>
                <select
                  id="topic"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                >
                  <option>General Inquiry</option>
                  <option>Patent Strategy</option>
                  <option>Technology Licensing</option>
                  <option>IP Valuation</option>
                  <option>Speaking Engagement</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can I help you?</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="Tell me a bit about your project or IP needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform active:scale-95 flex justify-center items-center
                  ${status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30'}`}
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  "Request Consultation"
                )}
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                By submitting this form, you agree to our privacy policy. Your IP information is kept strictly confidential.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;