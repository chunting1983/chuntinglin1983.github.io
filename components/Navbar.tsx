import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Icons, PROFILE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: `#${SectionId.ABOUT}` },
    { name: 'Expertise', href: `#${SectionId.SERVICES}` },
    { name: 'Track Record', href: `#${SectionId.TRACK_RECORD}` },
    { name: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-sm py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
             {scrolled && (
               <img 
                 src="profile.jpg" 
                 alt="C.T. Lin" 
                 className="w-8 h-8 rounded-full border border-primary-500/50 object-cover animate-fade-in-up"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} 
               />
             )}
             <a 
                href={`#${SectionId.HOME}`}
                onClick={(e) => scrollToSection(e, `#${SectionId.HOME}`)}
                className={`text-2xl font-display font-bold tracking-tight text-white flex items-center`}
             >
              {PROFILE.name}
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors text-slate-300 hover:text-tech-500`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={(e) => scrollToSection(e, `#${SectionId.CONTACT}`)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 bg-tech-500 text-slate-950 hover:bg-tech-600 shadow-[0_0_15px_rgba(0,240,255,0.3)]`}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md text-white`}
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-lg border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-tech-500 hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={(e) => scrollToSection(e, `#${SectionId.CONTACT}`)}
              className="block mt-4 w-full text-center px-4 py-3 rounded-md text-base font-medium bg-tech-500 text-slate-950 hover:bg-tech-600"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;