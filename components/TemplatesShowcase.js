'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2 as Expand, FiX as X } from 'react-icons/fi';
import { useState } from 'react';

const templates = [
  {
    name: "Modern Professional",
    tag: "Most popular",
    image: "/images/templates/template-1.png",
  },
  {
    name: "Clean Corporate",
    tag: "ATS-ready",
    image: "/images/templates/template-2.png",
  },
  {
    name: "Balanced Timeline",
    tag: "Best for fresher",
    image: "/images/templates/template-3.png",
  },
  {
    name: "Creative Edge",
    tag: "For designers",
    image: "/images/templates/template-4.png",
  },
  {
    name: "Executive Classic",
    tag: "For senior roles",
    image: "/images/templates/template-5.png",
  },
  {
    name: "Clean Corporate new",
    tag: "ATS-ready",
    image: "/images/templates/template-2.png",
  },
];

export default function TemplatesShowcase() {
  const [expandedImage, setExpandedImage] = useState(null);
  return (
    <section className="bg-gradient-to-b from-[#FFF5ED] to-[#FFFCF8] py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-orange-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Heading + subheading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Find Your Perfect <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">Resume Template</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Choose from professionally designed, ATS-optimized templates that help you land more interviews.
          </motion.p>
        </div>

        {/* Templates grid */}
        <motion.div 
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {templates.map((tpl, index) => (
            <motion.div
              key={tpl.name}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                  {/* Template image container */}
                  <div className="relative w-full bg-white overflow-hidden group-hover:from-slate-100 group-hover:to-slate-200 transition-colors duration-300">
                    <div className="relative w-full h-full">
                      <motion.div 
                        className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4 bg-white cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={() => setExpandedImage(tpl.image)}
                      >
                        <img
                          src={tpl.image}
                          alt={tpl.name}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:shadow-xl"
                          style={{ objectFit: 'contain' }}
                        />
                      </motion.div>
                      <button 
                        className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-500 w-9 h-9 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedImage(tpl.image);
                        }}
                        aria-label="Expand image"
                      >
                        <Expand className="w-5 h-5 text-slate-700" />
                      </button>
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button 
                        className="w-full bg-white text-orange-600 font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Use This Template
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div 
          className="mt-16 grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              title: 'ATS Optimized',
              description: 'Designed to pass through applicant tracking systems with ease.'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              title: 'Professional Layouts',
              description: 'Clean, modern designs that highlight your experience.'
            },
            {
              icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              ),
              title: 'Easy to Customize',
              description: 'Quickly personalize with our intuitive editor.'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-50 hover:shadow-lg hover:border-orange-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to create your resume?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">Join thousands of professionals who got hired with our resume builder.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-200"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Start Building for Free
            </motion.button>
            <motion.button 
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg border-2 border-orange-100 hover:bg-orange-50"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              View All Templates
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              className="relative max-w-4xl w-full h-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedImage}
                alt="Expanded template preview"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}