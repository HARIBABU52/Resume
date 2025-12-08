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
  FileType,
  FileUp,
  FileCheck2,
  LayoutTemplate,
  Wand2,
  Code2,
  Palette,
  Eye,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle,
  FileInput,
  FileOutput,
  FileJson,
  FilePdf,
  FileDoc,
  FileWord
} from "lucide-react";

const featureCards = [
  {
    title: "Resume Builder",
    description: "Create a professional resume with our easy-to-use builder",
    icon: FileText,
    color: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100",
    href: "/resume-builder",
    cta: "Build Now",
    ctaColor: "text-orange-600 hover:text-orange-700",
  },
  {
    title: "CV Builder",
    description: "Design a professional CV with our templates",
    icon: FileCheck,
    color: "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100",
    href: "/cv-builder",
    cta: "Create CV",
    ctaColor: "text-amber-600 hover:text-amber-700",
  },
  {
    title: "Cover Letter Builder",
    description: "Write a compelling cover letter in minutes",
    icon: FileType,
    color: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100",
    href: "/cover-letter-builder",
    cta: "Get Started",
    ctaColor: "text-orange-600 hover:text-orange-700",
  },
  {
    title: "Portfolio Builder",
    description: "Showcase your work with a professional portfolio",
    icon: LayoutTemplate,
    color: "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100",
    href: "/portfolio-builder",
    cta: "Build Portfolio",
    ctaColor: "text-amber-600 hover:text-amber-700",
  },
];

const builderSections = [
  { 
    name: "Resume Templates", 
    href: "/resume-templates",
    description: "Professionally designed templates"
  },
  { 
    name: "CV Templates", 
    href: "/cv-templates",
    description: "International CV formats"
  },
  { 
    name: "Cover Letter Templates", 
    href: "/cover-letter-templates",
    description: "Matching templates for your resume"
  },
  { 
    name: "Portfolio Templates", 
    href: "/portfolio-templates",
    description: "Showcase your work"
  },
];

const resources = [
  { 
    name: "How to Write a Resume", 
    href: "/how-to-write-resume",
    description: "Step-by-step guide"
  },
  { 
    name: "Resume Format Guide", 
    href: "/resume-format",
    description: "Choose the right format"
  },
  { 
    name: "ATS Optimization", 
    href: "/ats-optimization",
    description: "Beat applicant tracking systems"
  },
  { 
    name: "Interview Tips", 
    href: "/interview-tips",
    description: "Ace your next interview"
  },
];

export default function BuilderMegaMenu({ open }) {
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
                    <Wand2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-orange-700">Builder Hub</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Create Professional Documents in Minutes
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Our AI-powered builders help you create perfect resumes, CVs, and cover letters that get you noticed by employers.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
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

              {/* Middle Column: Builder Types */}
              <div className="space-y-6 border-t border-gray-100 pt-3 md:border-t-0 md:border-l md:border-r md:px-6 lg:border-r-0 lg:pr-6">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-2 shadow-md">
                      <LayoutTemplate className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Builder Tools</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {builderSections.map((section, index) => (
                      <li key={index}>
                        <a
                          href={section.href}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-gray-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 hover:shadow-sm border border-transparent hover:border-orange-100"
                        >
                          <span>{section.name}</span>
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
                    <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
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

              {/* Right Column: Create Now */}
              <div className="border-t border-gray-100 pt-3 md:border-t-0 md:border-l md:pl-6">
                <div className="sticky top-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-6 border border-orange-100">
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="rounded-full bg-white/95 p-1.5 shadow-md border border-orange-100">
                          <Sparkles className="h-4 w-4 text-orange-500" />
                        </div>
                        <span className="text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                          AI-POWERED
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Create Your Perfect Document
                      </h3>
                      <p className="mb-5 text-sm text-slate-700">
                        Our AI-powered builder helps you create professional documents that get you noticed by employers and recruiters.
                      </p>
                      
                      <ul className="mb-6 space-y-3 text-sm text-slate-700">
                        {[
                          { text: "AI-powered suggestions", icon: <Sparkles className="h-4 w-4" />, color: "from-pink-500 to-rose-500" },
                          { text: "ATS-optimized content", icon: <FileCheck2 className="h-4 w-4" />, color: "from-emerald-500 to-teal-500" },
                          { text: "Multiple export formats", icon: <FileOutput className="h-4 w-4" />, color: "from-blue-500 to-indigo-500" },
                          { text: "Real-time preview", icon: <Eye className="h-4 w-4" />, color: "from-purple-500 to-violet-500" }
                        ].map((item, index) => (
                          <li key={index} className="group flex items-center">
                            <span className={`mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-sm transition-all duration-200 group-hover:shadow-md`}>
                              {item.icon}
                            </span>
                            <span className="transition-colors duration-200 group-hover:text-slate-900">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200/70 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/80 hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center justify-center">
                          Start Building for Free
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                      
                      <p className="mt-3 text-center text-xs text-slate-500">
                        No credit card required
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 opacity-40"></div>
                    <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-40"></div>
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
