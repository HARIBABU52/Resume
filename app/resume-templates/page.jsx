'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import AIResumeBuilder from '../../components/sections/AIResumeBuilder';
import Testimonials from '../../components/sections/Testimonials';
import Features from '../../components/sections/Features';

const templates = [
  {
    id: 1,
    name: 'Template 1',
    category: 'Professional',
    image: '/images/templates/template-1.png',
    description: 'Clean and modern design perfect for corporate professionals',
    alt: 'Professional resume template with clean layout and modern typography',
    slug: 'template1'
  },
  {
    id: 2,
    name: 'Creative',
    category: 'Creative',
    image: '/images/templates/template-2.png',
    description: 'Modern and stylish design for creative professionals',
    alt: 'Creative resume template with modern layout and visual elements',
    slug: 'creative-resume-template'
  },
  {
    id: 3,
    name: 'Minimalist',
    category: 'Minimalist',
    image: '/images/templates/template-3.png',
    description: 'Simple and clean design that focuses on your content',
    alt: 'Minimalist resume template with clean typography and ample white space',
    slug: 'minimalist-resume-template'
  },
  {
    id: 4,
    name: 'Corporate',
    category: 'Professional',
    image: '/images/templates/template-4.png',
    description: 'Structured and professional layout perfect for corporate environments',
    alt: 'Corporate resume template with structured layout and professional design',
    slug: 'corporate-resume-template'
  },
  {
    id: 5,
    name: 'Executive',
    category: 'Executive',
    image: '/images/templates/template-5.png',
    description: 'Elegant design for senior professionals and executives',
    alt: 'Executive resume template with sophisticated layout and premium design',
    slug: 'executive-resume-template'
  },
  {
    id: 6,
    name: 'Template1',
    category: 'Professional',
    image: '/images/templates/template-1.png',
    description: 'Clean and modern design perfect for corporate professionals',
    alt: 'Professional resume template with clean layout and modern typography',
    slug: 'template1'
  },
];

export default function ResumeTemplates() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(templates.map(template => template.category))];

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  // Get featured templates (first 2 templates)
  const featuredTemplates = templates.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7F2] via-[#FFF6F0] to-[#FFF4EE]">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Professional Resume Templates
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-700">
              Choose from our collection of ATS-friendly, professionally designed resume templates. Each template is optimized for both digital and print formats, ensuring your qualifications stand out to hiring managers.
            </p>
          </header>

          {/* AI Resume Builder Section */}
          <AIResumeBuilder />
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm focus:outline-none
                ${
                  selectedCategory === 'All'
                    ? 'bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-[#FFF4EE] border border-white/60'
                }`}
            >
              All Templates
            </button>
            {categories.filter(cat => cat !== 'All').map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm focus:outline-none
                  ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-[#FFF4EE] border border-white/60'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-transparent hover:border-[#FFE6D8]"
                onClick={() => template.slug === 'template1' ? (window.location.href = '/resume/') : (window.location.href = `/resume-templates/${template.slug}`)}
                role="button"
                tabIndex={0}
              >
                <div className="w-full overflow-hidden bg-gray-100">
                  <div className="h-80 relative">
                    <Image
                      src={template.image}
                      alt={template.alt}
                      width={400}
                      height={520}
                      className="group-hover:scale-105 transition-transform duration-400 object-cover w-full h-full"
                      priority={template.id <= 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00000000] to-[#00000033] opacity-0 group-hover:opacity-60 transition-all duration-300 flex items-end">
                      <div className="w-full p-4">
                        <div
                          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/95 text-[#FF5722] font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 shadow"
                          aria-label={`Use ${template.name} template`}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `/resume?template=${template.id}`;
                          }}
                        >
                          Use This Template
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-t border-gray-100">
                  <h2 className="text-lg font-semibold text-slate-900">{template.name}</h2>
                  <p className="text-sm text-slate-600 mt-1">{template.description}</p>
                  <div
                    className="mt-4 inline-block text-sm font-medium text-[#FF6A3D] hover:text-[#FF4A1A] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/resume-templates/${template.slug}`;
                    }}
                    aria-label={`Learn more about ${template.name} template`}
                  >
                    View Details →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Templates Section */}
          <section className="mt-16 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Featured Templates</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Check out our most popular and professionally designed resume templates</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredTemplates.map((template) => (
                <div key={`featured-${template.id}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={template.image}
                      alt={template.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{template.name}</h3>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF5E2E] bg-[#FFEDE6] rounded-full">
                          {template.category}
                        </span>
                      </div>
                      <button 
                        onClick={() => window.location.href = `/resume-templates/${template.slug}`}
                        className="px-4 py-2 bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                      >
                        Preview
                      </button>
                    </div>
                    <p className="mt-3 text-slate-600 text-sm">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">All Templates</span>
            </div>
          </div>

          {/* CTA Section */}
          <section className="mt-16 text-center bg-white/60 p-8 rounded-2xl shadow-sm border border-transparent">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help Choosing a Template?</h2>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              Our resume experts can help you select the perfect template for your industry and experience level. Get personalized recommendations to make your resume stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] shadow hover:opacity-95 transition"
                aria-label="Contact our resume experts"
              >
                Get Expert Help
              </Link>
              <Link
                href="/blog/resume-templates-guide"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#FFE6D8] text-base font-medium rounded-md text-[#8A5A3A] bg-white hover:bg-[#FFF4EE] transition"
                aria-label="Read our guide on choosing resume templates"
              >
                Read Our Guide
              </Link>
            </div>
          </section>

          {/* Testimonials Section */}
          <Testimonials />

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Are these resume templates ATS-friendly?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all our resume templates are designed to be ATS (Applicant Tracking System) friendly, with clean formatting and standard sections that are easily readable by automated systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize these resume templates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! All templates are fully customizable. You can edit the content, change colors, adjust layouts, and personalize them to match your professional brand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What file formats are available for download?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our resume templates are available in multiple formats including PDF, DOCX, and PSD, giving you flexibility in how you use and edit your resume."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </main>
     <Features />
    </div>
  );
}
