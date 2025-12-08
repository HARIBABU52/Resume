"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  FileCheck,
  FileSearch,
  Wrench,
  BookOpen,
  Zap,
  ChevronRight,
  Sparkles,
  Download,
  FileEdit,
  FileType,
  FileUp,
  FileCheck2,
} from "lucide-react";

const featureCards = [
  {
    title: "Cover Letter Templates",
    description: "Professional templates designed to complement your CV and job application",
    icon: FileText,
    color: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100",
    href: "/cover-letter-templates",
    cta: "Browse templates",
    ctaColor: "text-orange-600 hover:text-orange-700",
  },
  {
    title: "Cover Letter Builder",
    description: "Create a tailored cover letter in minutes with our step-by-step builder",
    icon: Wrench,
    color: "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100",
    href: "/cover-letter-builder",
    cta: "Start building",
    ctaColor: "text-amber-600 hover:text-amber-700",
  },
  {
    title: "Cover Letter Examples",
    description: "View real examples for different industries and experience levels",
    icon: FileSearch,
    color: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100",
    href: "/cover-letter-examples",
    cta: "View examples",
    ctaColor: "text-orange-600 hover:text-orange-700",
  },
  {
    title: "Free Cover Letter Review",
    description: "Get expert feedback to improve your cover letter's impact",
    icon: FileCheck,
    color: "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100",
    href: "/cover-letter-review",
    cta: "Review my letter",
    ctaColor: "text-amber-600 hover:text-amber-700",
  },
];

const coverLetterTypes = [
  { 
    name: "Job Application Letters", 
    href: "/job-application-letters",
    description: "Tailored for specific job applications"
  },
  { 
    name: "Academic Cover Letters", 
    href: "/academic-cover-letters",
    description: "For academic positions and research roles"
  },
  { 
    name: "Career Change Letters", 
    href: "/career-change-letters",
    description: "When transitioning to a new industry"
  },
  { 
    name: "Internship Cover Letters", 
    href: "/internship-letters",
    description: "For students and recent graduates"
  },
];

const resources = [
  { 
    name: "How to Write a Cover Letter", 
    href: "/how-to-write-cover-letter",
    description: "Step-by-step writing guide"
  },
  { 
    name: "Cover Letter Format Guide", 
    href: "/cover-letter-format",
    description: "Proper structure and layout"
  },
  { 
    name: "Cover Letter Tips & Examples", 
    href: "/cover-letter-tips",
    description: "Professional writing advice"
  },
  { 
    name: "Common Cover Letter Mistakes", 
    href: "/cover-letter-mistakes",
    description: "What to avoid in your letter"
  },
];

export default function CoverLetterMegaMenu({ open }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Handle click outside if needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full z-40 flex justify-center pt-2"
        >
          <div className="w-full max-w-6xl rounded-2xl border border-orange-100 bg-white/95 shadow-2xl shadow-orange-100/50 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 px-6 py-4 border-b border-orange-100">
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-2 text-white">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-orange-700">Cover Letter Hub</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Professional Cover Letter Builder & Templates
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Create a compelling cover letter that gets you noticed. Our AI-powered tools and professional templates help you make a strong first impression on hiring managers.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
              {/* Left Column: Feature Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-1">
                {featureCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.a
                      key={index}
                      href={card.href}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
                      }}
                      className="group relative overflow-hidden rounded-xl bg-white p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-orange-200 border border-gray-100"
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color} shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5`}>
                          <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-2 rounded-lg">
                            <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-gray-900">{card.title}</h4>
                        <p className="text-xs text-gray-500">{card.description}</p>
                      </div>
                      <div className="mt-3 flex items-center">
                        <span className={`text-xs font-semibold ${card.ctaColor} transition-colors`}>
                          {card.cta}
                        </span>
                        <ChevronRight 
                          className={`ml-1 h-3.5 w-3.5 ${card.ctaColor} transition-transform group-hover:translate-x-1`} 
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Middle Column: Cover Letter Types & Resources */}
              <div className="space-y-4 border-t border-gray-100 pt-3 md:border-t-0 md:border-l md:border-r md:px-4 lg:border-r-0 lg:pr-4">
                {/* Cover Letter Types */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-2 shadow-md">
                      <FileType className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Cover Letter Types</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {coverLetterTypes.map((type, index) => (
                      <li key={index}>
                        <a
                          href={type.href}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 hover:shadow-sm border border-transparent hover:border-orange-100"
                        >
                          <span>{type.name}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-orange-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 p-2 shadow-md">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Resources & Guides</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.href}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 hover:shadow-sm border border-transparent hover:border-orange-100"
                        >
                          <span>{resource.name}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-orange-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Create Cover Letter in Minutes */}
              <div className="border-t border-gray-100 pt-3 md:border-t-0 md:border-l md:pl-4">
                <div className="sticky top-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-4 border border-orange-100">
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 shadow-md">
                          <FileEdit className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                          AI-POWERED
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Create a Standout Cover Letter in Minutes
                      </h3>
                      <p className="mb-5 text-sm text-slate-700">
                        Our AI-powered cover letter builder helps you craft a personalized, professional letter that highlights your skills and matches job requirements.
                      </p>
                      
                      <ul className="mb-6 space-y-3 text-sm text-slate-700">
                        {[
                          { 
                            text: "Job-specific content", 
                            icon: <FileText className="h-4 w-4" />,
                            color: "from-orange-500 to-amber-500"
                          },
                          { 
                            text: "AI writing suggestions", 
                            icon: <Sparkles className="h-4 w-4" />,
                            color: "from-pink-500 to-rose-500"
                          },
                          { 
                            text: "ATS optimization", 
                            icon: <FileCheck2 className="h-4 w-4" />,
                            color: "from-emerald-500 to-teal-500"
                          },
                          { 
                            text: "Multiple format exports", 
                            icon: <FileUp className="h-4 w-4" />,
                            color: "from-blue-500 to-indigo-500"
                          }
                        ].map((item, index) => (
                          <li key={index} className="group flex items-center">
                            <span className={`mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-sm transition-all duration-200 group-hover:shadow-md`}>
                              {item.icon}
                            </span>
                            <span className="transition-colors duration-200 group-hover:text-slate-900">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-peach-500 via-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-peach-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-peach-200/80 hover:from-peach-500 hover:via-orange-600/90 hover:to-amber-500/90 hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center justify-center">
                          Start for free
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-peach-500 to-amber-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                      
                      <p className="mt-3 text-center text-xs text-slate-500">
                        No credit card required
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 opacity-40"></div>
                    <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-40"></div>
                    <div className="absolute right-1/4 top-1/4 h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
