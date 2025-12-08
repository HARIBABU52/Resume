'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ResumeMegaMenu with SSR disabled to avoid hydration issues
const ResumeMegaMenu = dynamic(() => import('./ResumeMegaMenu'), {
  ssr: false,
  loading: () => null,
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setResumeOpen(false);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Builder', hasDropdown: false },
    { 
      name: 'Resume', 
      hasDropdown: true,
      onClick: (e) => {
        e.preventDefault();
        setResumeOpen(!resumeOpen);
        // Close mobile menu when toggling resume menu on mobile
        if (window.innerWidth < 768) {
          setIsOpen(false);
        }
      },
      isActive: resumeOpen
    },
    { name: 'CV', hasDropdown: false },
    { name: 'Cover Letter', hasDropdown: false },
    { name: 'Advice', hasDropdown: false },
    { name: 'Resources', hasDropdown: false },
  ];

  const renderNavItems = (isMobile = false) => (
    <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex gap-6 items-center'} text-sm font-semibold text-slate-900`}>
      {navItems.map((item, index) => (
        <li key={index} className={`${isMobile ? 'border-b border-gray-100 pb-2' : ''} ${item.isActive ? 'text-orange-600' : ''}`}>
          <a 
            href="#" 
            className={`flex items-center hover:text-orange-600 transition-colors ${item.isActive ? 'font-semibold' : ''}`}
            onClick={(e) => {
              if (item.onClick) {
                item.onClick(e);
              }
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            {item.name}
            {item.hasDropdown && (
              <span className={`ml-1 text-xs ${item.isActive ? 'text-orange-600' : 'text-slate-600'}`}>
                {item.isActive ? '▴' : '▾'}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`sticky top-0 z-50 bg-gradient-to-br from-[#ffe6cc] to-white border-b border-orange-100 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'} relative`}>
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23FF6A3D\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          zIndex: 0
        }}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-9 rounded-md border-2 border-slate-900 flex items-center justify-center text-slate-900">
            <svg className="logo-svg" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="14" height="18" strokeWidth="2" rx="2" />
              <rect x="4" y="4" width="8" height="2" fill="currentColor" />
            </svg>
          </div>
          <div className="font-bold text-base leading-none text-slate-900">Resume</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          {renderNavItems()}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a className="rounded-full px-4 py-2 font-semibold text-sm border border-orange-200 text-orange-800 hover:bg-white/50 transition-colors" href="#">Login</a>
          <a className="rounded-full px-4 py-2 font-semibold text-sm bg-[#FF6A3D] text-white shadow-[0_4px_14px_rgba(255,106,61,0.25)] hover:bg-[#FF5A2D] transition-colors" href="#">Free Account</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu-container md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg mx-4">
          {renderNavItems(true)}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3 px-2">
              <a 
                className="w-full text-center rounded-full px-4 py-2 font-semibold text-sm border border-orange-200 text-orange-800 hover:bg-white/50 transition-colors" 
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a 
                className="w-full text-center rounded-full px-4 py-2 font-semibold text-sm bg-[#FF6A3D] text-white hover:bg-[#FF5A2D] transition-colors shadow-md" 
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Free Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Resume Mega Menu */}
      <div 
        className="hidden md:block absolute left-0 right-0"
        onMouseLeave={() => setResumeOpen(false)}
      >
        <ResumeMegaMenu open={resumeOpen} />
      </div>
      
      {/* Mobile Resume Menu */}
      {resumeOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4">
            <ResumeMegaMenu open={resumeOpen} />
          </div>
        </div>
      )}
    </header>
  )
}
