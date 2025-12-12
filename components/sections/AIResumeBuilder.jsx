'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { OpenRouterService } from '../../lib/openRouterService';

const AIResumeBuilder = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const openRouter = new OpenRouterService(process.env.NEXT_PUBLIC_OPENROUTER_API_KEY);
      
      const prompt = `Analyze the following job description and provide comprehensive resume suggestions:
      
      Job Description:
      ${jobDescription}
      
      Please provide a detailed response in JSON format with these fields:
      {
        "template": "Recommended template name (Professional, Creative, Minimalist, or Corporate)",
        "skills": ["top 3-5 key skills to highlight", "based on the job description"],
        "summary": "A professional summary statement tailored to the job description",
        "experience": [{
          "title": "Job Title Suggestion 1",
          "company": "Company Name",
          "achievements": ["Achievement 1", "Achievement 2"]
        }],
        "education": {
          "degree": "Recommended degree",
          "institution": "Institution suggestion",
          "year": "Year of completion"
        },
        "certifications": ["Relevant certification 1", "Relevant certification 2"]
      }`;

      const response = await openRouter.chatCompletion([
        {
          role: 'user',
          content: prompt
        }
      ], {
        model: 'openai/gpt-3.5-turbo',
        temperature: 0.7
      });
      
      // Parse the response
      const aiResponse = JSON.parse(response.choices[0].message.content);
      
      setSuggestions({
        template: aiResponse.template || 'Professional',
        skills: Array.isArray(aiResponse.skills) ? 
          aiResponse.skills.slice(0, 5) : 
          ['Project Management', 'Team Leadership', 'Strategic Planning'],
        summary: aiResponse.summary || 'Professional with relevant experience.',
        experience: aiResponse.experience || [],
        education: aiResponse.education || null,
        certifications: aiResponse.certifications || []
      });

    } catch (error) {
      console.error('Error generating suggestions:', error);
      setError('Failed to generate suggestions. Please try again.');
      // Fallback to mock data if API fails
      setSuggestions({
        template: 'Professional',
        skills: ['Project Management', 'Team Leadership', 'Strategic Planning'],
        summary: 'Results-driven professional with extensive experience in leadership and strategic planning.',
        experience: [{
          title: 'Senior Role in Relevant Field',
          company: 'Industry Leader',
          achievements: [
            'Led cross-functional teams to achieve key business objectives',
            'Implemented strategies that improved operational efficiency'
          ]
        }],
        education: {
          degree: 'Bachelor of Science in Relevant Field',
          institution: 'Prestigious University',
          year: '2015'
        },
        certifications: ['Professional Certification in Relevant Field']
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-6 bg-gradient-to-br from-[#FFF8F5] to-[#FFF0EB] rounded-2xl p-4 my-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-[#FF5E2E] bg-[#FFEDE6] rounded-full mb-4">
            AI-Powered
          </span>
          <h2 className="text-xl font-bold text-slate-900 mb-1">AI Resume Builder</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto">
            Let our AI analyze your target job and suggest the perfect resume content and template
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-3 md:p-4">
          {!suggestions ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label htmlFor="job-description" className="block text-sm font-medium text-slate-700 mb-2">
                  Paste the job description you're targeting
                </label>
                <textarea
                  id="job-description"
                  rows={5}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A50] focus:border-transparent transition"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm text-center p-3 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] text-white font-medium rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10a1 1 0 01-1.64 0l-7-10A1 1 0 014 7h4V2a1 1 0 011-1h2.3z" clipRule="evenodd" />
                      </svg>
                      Generate Suggestions
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Generated Resume Suggestions</h3>
                <p className="text-slate-600">Based on the job description you provided</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-2">Recommended Template</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FFEDE6] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF5E2E]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385V4.804zM10 4.804A7.968 7.968 0 0114.5 4c1.255 0 2.443.29 3.5.804v10A7.969 7.969 0 0014.5 14c-1.669 0-3.218.51-4.5 1.385V4.804z" />
                      </svg>
                    </div>
                    <span className="font-medium">{suggestions.template} Template</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-2">Key Skills to Highlight</h4>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-sm text-slate-800 rounded-full border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-2">Professional Summary</h4>
                  <p className="text-slate-700">{suggestions.summary}</p>
                </div>
                
                {suggestions.experience?.length > 0 && (
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-3">Experience Suggestions</h4>
                    <div className="space-y-4">
                      {suggestions.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-[#FF8A50] pl-4">
                          <h5 className="font-medium text-slate-800">{exp.title}</h5>
                          {exp.company && <p className="text-sm text-slate-600">{exp.company}</p>}
                          {exp.achievements?.length > 0 && (
                            <ul className="mt-2 space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-slate-700 flex items-start">
                                  <span className="text-[#FF5E2E] mr-2">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {suggestions.education && (
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Education</h4>
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF5E2E]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-1.386 1 1 0 01.19-.39l1.06-1.255zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89 1.122 10.97 10.97 0 01-6.35-.996z" />
                          <path d="M4.5 2.5a.5.5 0 00-1 0v.586a1 1 0 01-.293.707l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5A1 1 0 014.5 3.086V2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{suggestions.education.degree}</p>
                        <p className="text-sm text-slate-600">{suggestions.education.institution}</p>
                        {suggestions.education.year && (
                          <p className="text-xs text-slate-500">{suggestions.education.year}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {suggestions.certifications?.length > 0 && (
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Certifications</h4>
                    <div className="space-y-2">
                      {suggestions.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setSuggestions(null)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to builder
                </button>
                <button
                  onClick={() => {
                    // In a real app, this would apply the suggestions
                    alert('Applying AI suggestions to your resume...');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-[#FF8A50] to-[#FF5E2E] text-white font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  Apply to My Resume
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIResumeBuilder;
