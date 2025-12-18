import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImpactMetrics from './components/ImpactMetrics';
import Services from './components/Services';
import Speeches from './components/Speeches';
import Publications from './components/Publications';
import ContactForm from './components/ContactForm';
import AIChat from './components/AIChat';
import { PROFILE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ImpactMetrics />
        <Services />
        <Speeches />
        <Publications />
        <ContactForm />
      </main>

      {/* AI Assistant Chatbot */}
      <AIChat />

      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
               <span className="text-2xl font-serif font-bold text-white">C.T. Lin</span>
               <p className="text-slate-400 mt-2 max-w-xs text-sm">
                 Providing expert guidance in Intellectual Property strategy and Technology Transfer.
               </p>
            </div>
            <div className="flex space-x-8">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} C.T. Lin. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;