"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  FileCheck,
  FileSearch,
  FileType,
  FileCheck2,
  FileOutput,
  ChevronRight,
  ArrowRight,
  BookMarked,
  GraduationCap,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  HelpCircle,
  FileQuestion,
  Video,
  LayoutGrid,
  DollarSign,
  Headset,
  ShieldCheck,
  Zap,
  MessageSquare
} from "lucide-react";

const resourceCategories = [
  {
    name: "Resume & CV",
    icon: FileText,
    color: "from-orange-400 to-amber-500",
    items: [
      { name: "Writing Guide", href: "/resources/resume-writing" },
      { name: "CV Examples", href: "/resources/cv-examples" },
      { name: "Format Guide", href: "/resources/resume-format" },
      { name: "ATS Optimization", href: "/resources/ats-optimization" },
    ]
  },
  {
    name: "Cover Letters",
    icon: FileType,
    color: "from-amber-400 to-orange-500",
    items: [
      { name: "Writing Guide", href: "/resources/cover-letter-writing" },
      { name: "Examples", href: "/resources/cover-letter-examples" },
      { name: "Email Tips", href: "/resources/email-cover-letters" },
    ]
  },
  {
    name: "Interview Prep",
    icon: Users,
    color: "from-orange-300 to-amber-400",
    items: [
      { name: "Common Questions", href: "/resources/interview-questions" },
      { name: "Video Tips", href: "/resources/video-interviews" },
      { name: "Salary Guide", href: "/resources/salary-negotiation" },
    ]
  }
];

const popularResources = [
  {
    title: "How to Write a Resume with No Experience",
    href: "/resources/resume-no-experience",
    icon: FileCheck,
    category: "Resume & CV",
    readTime: "5 min read",
    isNew: true
  },
  {
    title: "5 Cover Letter Mistakes to Avoid",
    href: "/resources/cover-letter-mistakes",
    icon: FileSearch,
    category: "Cover Letters",
    readTime: "4 min read",
    isPopular: true
  },
  {
    title: "Top 10 Interview Questions & Answers",
    href: "/resources/top-interview-questions",
    icon: HelpCircle,
    category: "Interview Prep",
    readTime: "8 min read"
  },
  {
    title: "How to Answer 'Tell Me About Yourself'" ,
    href: "/resources/tell-me-about-yourself",
    icon: Video,
    category: "Interview Prep",
    readTime: "6 min read"
  }
];

export default function ResourcesMegaMenu({ open }) {
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
          <div className="w-full max-w-6xl rounded-2xl border border-blue-100 bg-white/95 shadow-2xl shadow-blue-100/50 backdrop-blur-sm overflow-hidden">
            {/* Header - More Compact */}
            <div className="bg-gradient-to-r from-orange-400 to-amber-500 px-4 py-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 rounded-md">
                    <LayoutGrid className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Resources</h2>
                </div>
                <div className="text-sm font-medium text-white/95 tracking-wide">Career Tools & Guides</div>
              </div>
            </div>

            {/* Main Content - More Compact */}
            <div className="p-3 md:px-4 md:py-3 max-w-5xl mx-auto">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {resourceCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="group bg-white rounded-lg border border-orange-100 overflow-hidden hover:shadow-md transition-shadow">
                      <div className={`h-1.5 bg-gradient-to-r ${category.color}`}></div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`p-1.5 rounded-md bg-gradient-to-br ${category.color} text-white`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3 className="font-semibold text-gray-800 text-[15px] tracking-wide">{category.name}</h3>
                        </div>
                        <ul className="space-y-1.5">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a 
                                href={item.href}
                                className="flex items-center text-[13.5px] text-gray-700 hover:text-orange-600 py-1.5 group/item transition-colors font-[450]"
                              >
                                <ChevronRight className="h-3 w-3 text-orange-400 opacity-0 group-hover/item:opacity-100 mr-1 transition-opacity flex-shrink-0" />
                                <span className="truncate">{item.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pricing & Support Section */}
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                {/* Pricing Card */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden group">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-amber-100 text-amber-600">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 tracking-wide">Pricing Plans</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">Choose the perfect plan for your needs</p>
                    <div className="space-y-3">
                      <a 
                        href="/pricing" 
                        className="block w-full px-3 py-1.5 text-sm font-medium text-center text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-md hover:opacity-90 transition-all"
                      >
                        View Pricing
                      </a>
                      <a 
                        href="/pricing/compare" 
                        className="block w-full px-3 py-1 text-xs font-medium text-center text-amber-600 hover:text-amber-700"
                      >
                        Compare Plans →
                      </a>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <Headset className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-[15px] tracking-wide">Support Center</h3>
                    </div>
                    <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">We're here to help you succeed</p>
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href="/help" 
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 hover:bg-blue-50 group/support"
                      >
                        <HelpCircle className="h-5 w-5 text-blue-500 mb-1 group-hover/support:scale-110 transition-transform" />
                        <span className="text-xs font-medium">Help Center</span>
                      </a>
                      <a 
                        href="/contact" 
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 hover:bg-blue-50 group/support"
                      >
                        <MessageSquare className="h-5 w-5 text-blue-500 mb-1 group-hover/support:scale-110 transition-transform" />
                        <span className="text-xs font-medium">Contact Us</span>
                      </a>
                      <a 
                        href="/Ai-Live-chat" 
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 hover:bg-blue-50 group/support"
                      >
                        <Zap className="h-5 w-5 text-blue-500 mb-1 group-hover/support:scale-110 transition-transform" />
                        <span className="text-xs font-medium">Ai Live Chat</span>
                      </a>
                      <a 
                        href="/faq" 
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 hover:bg-blue-50 group/support"
                      >
                        <FileQuestion className="h-5 w-5 text-blue-500 mb-1 group-hover/support:scale-110 transition-transform" />
                        <span className="text-xs font-medium">FAQs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Resources */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-[15px] font-semibold text-gray-800 mb-3.5 flex items-center gap-2 tracking-wide">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  Popular Resources
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {popularResources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.href}
                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-lg bg-orange-100 text-orange-600">
                        <resource.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[14px] font-medium text-gray-800 group-hover:text-orange-600 line-clamp-2 leading-snug">
                          {resource.title}
                        </h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
