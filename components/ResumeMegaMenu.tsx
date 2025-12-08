"use client";

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, FileCheck, FileSearch, Wrench, BookOpen, Zap, ChevronRight } from 'lucide-react';

type ResumeMegaMenuProps = {
  open: boolean;
};

const featureCards = [
  {
    title: 'Resume Templates',
    description: 'Choose from modern, ATS-friendly layouts.',
    icon: <FileText className="w-5 h-5 text-orange-500" />,
    color: 'bg-orange-50',
    href: '/resume-templates',
    cta: 'Browse templates',
    ctaColor: 'text-orange-600'
  },
  {
    title: 'Resume Builder',
    description: 'Step-by-step editor with live resume preview.',
    icon: <Wrench className="w-5 h-5 text-emerald-500" />,
    color: 'bg-emerald-50',
    href: '/builder',
    cta: 'Start building',
    ctaColor: 'text-emerald-600'
  },
  {
    title: 'Resume Examples',
    description: 'Real resumes for popular roles & industries.',
    icon: <FileSearch className="w-5 h-5 text-violet-500" />,
    color: 'bg-violet-50',
    href: '/resume-examples',
    cta: 'View examples',
    ctaColor: 'text-violet-600'
  },
  {
    title: 'ATS Resume Checker',
    description: 'Scan your resume and fix issues before you apply.',
    icon: <FileCheck className="w-5 h-5 text-sky-500" />,
    color: 'bg-sky-50',
    href: '/ats-checker',
    cta: 'Check my resume',
    ctaColor: 'text-sky-600'
  }
];

const aiTools = [
  { name: 'AI resume writer', href: '/ai-resume-writer' },
  { name: 'AI summary generator', href: '/ai-summary-generator' },
  { name: 'AI skills suggester', href: '/ai-skills-suggester' },
  { name: 'Job description keyword matcher', href: '/keyword-matcher' }
];

const resources = [
  { name: 'How to write a resume', href: '/how-to-write-a-resume' },
  { name: 'Best resume formats in 2025', href: '/resume-formats' },
  { name: 'What to put in each section', href: '/resume-sections' },
  { name: '1-page resume checklist', href: '/resume-checklist' }
];

export default function ResumeMegaMenu({ open }: ResumeMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Handle click outside if needed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full z-40 flex justify-center pt-2"
        >
          <div className="w-full max-w-6xl rounded-2xl border border-orange-100 bg-white shadow-2xl shadow-orange-100/50 backdrop-blur-sm">
            {/* Header */}
            <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-r from-orange-50 to-amber-50 p-6">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center rounded-lg bg-orange-100 p-2">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </span>
                  <span className="text-sm font-medium text-orange-800">Resume Hub</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Build a resume that gets you hired
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Create a professional resume in minutes with our AI-powered tools and expert-approved templates.
                </p>
              </div>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200 opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-200 opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
              {/* Feature Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.map((card, index) => (
                  <motion.a
                    key={index}
                    href={card.href}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-10" style={{ backgroundColor: card.ctaColor }}></div>
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                      {card.icon}
                    </div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-900">{card.title}</h4>
                    <p className="mb-3 text-xs text-gray-500">{card.description}</p>
                    <div className="flex items-center">
                      <span className={`text-xs font-medium ${card.ctaColor}`}>{card.cta}</span>
                      <ChevronRight className={`ml-1 h-3.5 w-3.5 ${card.ctaColor} transition-transform group-hover:translate-x-1`} />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Links Section */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <h4 className="text-sm font-semibold text-gray-900">AI & Tools</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {aiTools.map((tool, index) => (
                      <li key={index}>
                        <a 
                          href={tool.href}
                          className="group flex items-center text-sm text-gray-600 transition-colors hover:text-orange-600"
                        >
                          <ChevronRight className="mr-1.5 h-3.5 w-3.5 text-orange-400 opacity-0 transition-all group-hover:opacity-100" />
                          {tool.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {resources.map((resource, index) => (
                      <li key={index}>
                        <a 
                          href={resource.href}
                          className="group flex items-center text-sm text-gray-600 transition-colors hover:text-blue-600"
                        >
                          <ChevronRight className="mr-1.5 h-3.5 w-3.5 text-blue-400 opacity-0 transition-all group-hover:opacity-100" />
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-6">
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-white/80 p-1.5 shadow-sm">
                      <Zap className="h-4 w-4 text-orange-500" />
                    </div>
                    <span className="text-xs font-medium text-orange-700">AI-POWERED</span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">Create your resume in minutes</h4>
                  <p className="mb-6 text-sm text-gray-600">Our AI helps you create a professional resume that stands out to employers.</p>
                  
                  <ul className="mb-6 space-y-2">
                    {['ATS-optimized templates', 'AI content suggestions', 'Real-time preview', 'Unlimited downloads'].map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all hover:shadow-lg hover:shadow-orange-200">
                    <span className="relative z-10 flex items-center justify-center">
                      Start for free
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </button>
                  
                  <p className="mt-3 text-center text-xs text-gray-500">No credit card required</p>
                </div>
                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-orange-200 opacity-20"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
