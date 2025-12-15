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
    { name: 'Open Innovation', href: `#${SectionId.SERVICES}` },
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
             <a 
                href={`#${SectionId.HOME}`}
                onClick={(e) => scrollToSection(e, `#${SectionId.HOME}`)}
                className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white hover:text-primary-400 transition-colors"
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
                className="text-sm font-sans text-slate-300 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={(e) => scrollToSection(e, `#${SectionId.CONTACT}`)}
              className="px-5 py-2 rounded bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-primary-500/20"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-primary-400 transition-colors"
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 shadow-xl border-t border-slate-800">
          <div className="px-6 py-8 space-y-6 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xl font-serif font-medium text-white hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={(e) => scrollToSection(e, `#${SectionId.CONTACT}`)}
              className="w-full text-center px-6 py-3 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700 mt-4"
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