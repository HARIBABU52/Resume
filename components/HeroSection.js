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
    <div className="min-h-[600px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
  );

  return (
    <motion.section 
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE4D6] to-[#FEE9E2] py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6A3D]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#FF3E00]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white"
            variants={fadeIn}
          >
            <motion.div 
              className="mb-8"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-[#FF6A3D]/5 to-[#FF3E00]/5 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#FF6A3D]/20">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A3D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A3D]"></span>
                  </span>
                  <span className="text-sm font-medium bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">
                    Trusted by professionals at leading companies
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="relative z-10">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-gray-900"
                variants={fadeIn}
              >
                Create Your Perfect Resume in Minutes
                <motion.span 
                  className="block mt-4 text-2xl md:text-3xl font-medium text-gray-700 max-w-2xl leading-relaxed"
                  variants={fadeIn}
                >
                  Professional templates, smart AI suggestions, and instant exports.
                </motion.span>
              </motion.h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] rounded-full mb-8"></div>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed"
              variants={fadeIn}
            >
              Build a professional resume in minutes with our easy-to-use builder. Get hired faster with AI-powered suggestions and recruiter-approved templates.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeIn} 
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/resume-builder" 
                  className="block w-full text-center bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/50"
                >
                  Start Building — It's Free
                </Link>
              </motion.div>
              <motion.div 
                variants={fadeIn} 
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/templates" 
                  className="block w-full text-center bg-white/90 text-gray-900 border-2 border-gray-200 hover:border-[#FF6A3D]/30 hover:bg-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  View Templates
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative z-10"
            variants={fadeIn}
          >
            <motion.div 
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20"
              initial={{ rotate: -2 }}
              animate={{ rotate: 2 }}
              transition={{ 
                duration: 8,
                repeat: Infinity, 
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl border-2 border-gray-200/50 bg-white shadow-xl"
                variants={float}
                initial="initial"
                animate="animate"
              >
                <Image
                  src="https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9WS05VTmExbDZIRjhSTjdtNU1mNWFnMVpUVHNLY0FYUXo0a2dNNk1SL2ltYWdlLnBuZw~~.png"
                  alt="Professional resume template with clean design"
                  width={650}
                  height={920}
                  className="w-full h-auto rounded-lg"
                  priority
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </motion.div>
              
              {/* Floating elements */}
              <AnimatePresence>
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute -z-10 w-24 h-24 rounded-full bg-[#FF6A3D]/10 backdrop-blur-sm"
                    initial={{ 
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      scale: 0.5 + Math.random() * 0.5,
                      opacity: 0
                    }}
                    animate={{ 
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      opacity: 0.3 + Math.random() * 0.3,
                      transition: {
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }
                    }}
                  />
                ))}
              </AnimatePresence>
              
              {/* Badge */}
              <motion.div 
                className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg flex items-center"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: 1,
                  rotate: 5,
                }}
                transition={{ 
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 500,
                  damping: 10
                }}
              >
                <span className="mr-1">✨</span> Professional Template
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
