'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const float = {
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

function HeroSection() {
  const heroRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return (
    <div className="min-h-[600px] bg-gradient-to-br from-[#ffe6cc] to-white" />
  );

  return (
    <motion.section 
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen w-full bg-white"
    >
      <div className="w-full h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Panel */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#ffe6cc] to-white flex flex-col justify-center">
            <motion.div 
              className="mb-8"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1.5">
                    {['#FF6A3D', '#FF3E00', '#FF914D'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ 
                          backgroundColor: color,
                          animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) ${i * 0.2}s infinite`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-sans font-medium text-gray-700 tracking-wide">
                    Trusted by professionals worldwide
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4"
              variants={fadeIn}
            >
              Create Your Perfect Resume in Minutes
            </motion.h1>
            
            <div className="w-16 h-1.5 bg-[#ff8c42] rounded-full my-6"></div>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              variants={fadeIn}
            >
              Professional templates, smart AI suggestions, and instant exports.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="/resume-builder" 
                  className="block w-full text-center bg-[#ff6b3d] hover:bg-[#e05e35] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-transparent"
                >
                  Start Building — It's Free
                </Link>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="/templates" 
                  className="block w-full text-center bg-transparent hover:bg-[#ff6b3d1a] text-[#ff6b3d] font-semibold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-[#ff6b3d]"
                >
                  View Templates
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-8 mt-12 border-t border-gray-200"
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ), 
                    text: '4.9/5 from 10,000+ reviews' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ),
                    text: 'Expert-approved templates' 
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    ),
                    text: 'AI-powered suggestions' 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-200">
                    <span className="mt-0.5">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Panel */}
          <motion.div 
            className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-[#fff8f5] relative overflow-hidden min-h-[500px]"
            style={{
              backgroundImage: 'linear-gradient(to right, #f7d1c6 1px, transparent 1px), linear-gradient(to bottom, #f7d1c6 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
            variants={fadeIn}
          >
            {/* Floating elements */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] opacity-10"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  left: `${Math.random() * 60 + 20}%`,
                  top: `${Math.random() * 60 + 20}%`,
                  filter: 'blur(30px)'
                }}
                animate={{
                  y: [0, 30, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  rotate: [0, 180],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            ))}

            <motion.div 
              className="relative w-full h-full max-w-lg z-10 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                style={{ height: 'auto', aspectRatio: '3/4' }}
                animate={{
                  x: [0, 10, -5, 10, 0],
                  y: [0, -5, 5, -5, 0],
                  transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    duration: 0.3,
                    ease: 'easeOut'
                  } 
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9WS05VTmExbDZIRjhSTjdtNU1mNWFnMVpUVHNLY0FYUXo0a2dNNk1SL2ltYWdlLnBuZw~~.png"
                    alt="Professional resume template with clean design"
                    width={400}
                    height={533}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-5 -right-4 bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-5 py-2.5 rounded-full shadow-lg flex items-center font-semibold text-white text-sm tracking-wide"
                initial={{ scale: 0, rotate: -10, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  opacity: 1,
                  transition: { 
                    delay: 0.8,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 400,
                    damping: 12
                  }
                }}
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(255, 106, 61, 0.3)',
                  transition: { 
                    duration: 0.3,
                    ease: 'easeOut'
                  }
                }}
              >
                <motion.span 
                  className="mr-2 text-yellow-300"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  ✨
                </motion.span>
                <span>Professional Template</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
