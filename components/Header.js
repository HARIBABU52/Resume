'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const handleRouteChange = () => setIsOpen(false);
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
    { name: 'Builder', hasDropdown: true },
    { name: 'Resume', hasDropdown: true },
    { name: 'CV', hasDropdown: true },
    { name: 'Cover Letter', hasDropdown: true },
    { name: 'Advice', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
  ];

  const renderNavItems = (isMobile = false) => (
    <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex gap-6 items-center'} text-sm font-semibold text-slate-900`}>
      {navItems.map((item, index) => (
        <li key={index} className={isMobile ? 'border-b border-gray-100 pb-2' : ''}>
          <a 
            href="#" 
            className="flex items-center hover:text-blue-600 transition-colors"
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item.name}
            {item.hasDropdown && <span className="ml-1 text-xs text-slate-600">▾</span>}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`sticky top-0 z-50 bg-gradient-to-b from-slate-50/95 to-slate-50/80 backdrop-blur-sm border-b border-black/5 py-3 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-6">
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
          <a className="rounded-full px-4 py-2 font-bold text-sm border border-black/80 hover:bg-gray-50 transition-colors" href="#">Login</a>
          <a className="rounded-full px-4 py-2 font-bold text-sm bg-blue-600 text-white shadow-[0_4px_14px_rgba(43,111,255,0.18)] hover:bg-blue-700 transition-colors" href="#">Free Account</a>
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
                className="w-full text-center rounded-full px-4 py-2 font-bold text-sm border border-black/80 hover:bg-gray-50 transition-colors" 
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a 
                className="w-full text-center rounded-full px-4 py-2 font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors" 
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Free Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
