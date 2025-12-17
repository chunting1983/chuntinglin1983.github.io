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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Construct the email content
    const subject = `Meeting Request: ${formData.topic} - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Topic: ${formData.topic}

Message:
${formData.message}

------------------------------------------------
Sent via ${PROFILE.name} Personal Website`;

    // Create mailto link
    // We CC the sender so they also have a copy (if their client supports it)
    const mailtoLink = `mailto:${PROFILE.email}?cc=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Small delay to show "Sending..." state before opening email client
    setTimeout(() => {
      window.location.href = mailtoLink;
      
      setStatus('success');
      setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <span className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-3 block">Get in Touch</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Let's Discuss Your Innovation & Strategy
            </h2>
            <p className="text-slate-300 text-lg mb-8 font-light leading-relaxed">
              I am available for <strong>non-commercial, no-fee, and conflict-free discussions</strong>. Whether you are a student, researcher, or startup founder, I am happy to share my experience in IP strategy and tech transfer.
            </p>
            
            <div className="p-4 bg-navy-800 border border-slate-700 rounded mb-10">
               <p className="text-sm text-slate-400 italic">
                 * Note: For formal legal opinions or commercial contract negotiations, please refer to official university channels or legal counsel.
               </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 text-primary-500 group-hover:text-white transition-colors">
                  <Icons.LinkedIn />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-white mb-1">LinkedIn</p>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors block">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 text-primary-500 group-hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-white mb-1">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors block">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-8 lg:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold mb-6">Request a Meeting</h3>
            <div className="mb-6 p-4 bg-blue-50 text-blue-800 text-sm rounded border border-blue-100">
               Submitting this form will open your default email client with a pre-filled message to ensure direct communication.
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none bg-slate-50"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none bg-slate-50"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-bold text-slate-700 mb-1">Discussion Topic</label>
                <select
                  id="topic"
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none bg-slate-50"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                >
                  <option>General Mentorship</option>
                  <option>Startup IP Strategy</option>
                  <option>Co-creation & Open Innovation</option>
                  <option>Tech Transfer Process</option>
                  <option>Other (Non-commercial)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none bg-slate-50 resize-none"
                  placeholder="Please describe the purpose of the meeting..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded font-bold uppercase tracking-wider text-sm transition-all ${
                  status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-primary-600 hover:bg-primary-700 text-white'}`}
              >
                {status === 'submitting' ? 'Preparing Email...' : status === 'success' ? 'Email Client Opened' : 'Book Meeting'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;