"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ResumePageContent({ continuation = false, isBlank = false, resume, onUpdate, isEditing = false }) {
  // Local state for editable content
  const [localResume, setLocalResume] = useState(resume);
  const contentEditableRef = useRef(null);
  
  // Get custom fields from props
  const { customBasicFields = [], customContactFields = [], profileImage } = resume;

  // Update local state when prop changes
  useEffect(() => {
    setLocalResume(prev => ({
      ...resume,
      // Preserve the existing profileImage if it's not in the new props
      profileImage: resume.profileImage || prev.profileImage
    }));
  }, [resume]);

  // Handle content changes
  const handleChange = (section, field, value) => {
    const updated = { ...localResume };
    if (section) {
      updated[section] = { ...updated[section], [field]: value };
    } else {
      updated[field] = value;
    }
    setLocalResume(updated);
    onUpdate?.(section, field, value);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setLocalResume(prev => ({
          ...prev,
          profileImage: imageDataUrl
        }));
        // Update parent component
        onUpdate?.(null, 'profileImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle skill changes
  const handleSkillChange = (index, field, value) => {
    const newSkills = [...localResume.skills];
    if (field === 'level') value = parseInt(value);
    newSkills[index] = { ...newSkills[index], [field]: value };
    handleChange(null, 'skills', newSkills);
  };

  if (isBlank) {
    return (
      <div className={`resume-page ${continuation ? 'continuation' : ''} relative grid grid-cols-[75mm_1fr] w-[210mm] h-[297mm] bg-white overflow-hidden mx-auto mb-2.5`}>
        <aside className={`sidebar ${continuation ? 'continuation-sidebar' : ''} bg-[#0b1120] p-[20mm]`}>
          {!continuation && (
            <div className="w-[50mm] h-[50mm] mb-[8mm] -ml-[5mm]" />
          )}
        </aside>
        <main className="p-[18mm_12mm]"></main>
      </div>
    );
  }
  return (
    <div className={`resume-page ${continuation ? "continuation" : ""} relative grid grid-cols-[75mm_1fr] w-[210mm] h-[297mm] bg-white overflow-hidden mx-auto mb-2.5`}>
      {/* Sidebar */}
      <aside className={`sidebar ${continuation ? "continuation-sidebar" : ""} bg-[#0b1120] text-[#e5e7eb] p-[20mm]`}>
        {!continuation && (
          <div className="avatar w-[50mm] h-[50mm] rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-[28px] font-bold mb-[8mm] -ml-[5mm]">
            {resume.profileImage ? (
              <img 
                src={resume.profileImage} 
                alt={resume.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white">
                {resume.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            )}
          </div>
        )}

        <div className="name text-[13pt] font-bold leading-[1.2]">{resume.name}</div>
        <div className="role text-[8pt] text-[#a5b4fc] uppercase mt-[2mm] tracking-widest">{resume.role}</div>
        {!continuation && (
          <>
            <p className="tagline text-[7.5pt] text-[#9ca3af] mt-[6mm] leading-[1.4]">
              {resume.tagline}
            </p>
            
            {/* Custom Basic Fields in Sidebar */}
            {customBasicFields?.length > 0 && (
              <div className="custom-fields mt-[6mm] space-y-2">
                {customBasicFields.map((field, index) => (
                  field.name && field.value && (
                    <div key={`custom-basic-${index}`} className="text-[7.5pt]">
                      <div className="text-[#9ca3af] text-[6.5pt] uppercase tracking-[0.08em] mb-1">
                        {field.name}
                      </div>
                      <div className="text-[#e5e7eb]">
                        {field.value}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </>
        )}

        {!continuation && (
          <>
            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Contact</div>
              {Object.entries(resume.contact || {}).map(([key, value]) => (
                <div key={key} className="contact-item text-[7.5pt] mb-[3mm] break-words">
                  <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase tracking-[0.08em] block">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  {value}
                </div>
              ))}
              {/* Display custom contact fields */}
              {customContactFields?.map((field, index) => (
                field.value && (
                  <div key={`custom-contact-${index}`} className="contact-item text-[7.5pt] mb-[3mm] break-words">
                    <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase tracking-[0.08em] block">
                      {field.key || 'Custom'}
                    </span>
                    {field.value}
                  </div>
                )
              ))}
            </div>

            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Skills</div>
              {resume.skills?.map((skill, index) => (
                <div key={index} className="skill-item text-[7.5pt] mb-[4mm]">
                  {skill.name}
                  <div className="skill-bar h-[3px] rounded-full bg-[#1f2937] overflow-hidden mt-[2mm]">
                    <div className="skill-bar-fill h-full" style={{ width: `${skill.level}%`, background: "linear-gradient(90deg,#22c55e,#0ea5e9)" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Languages</div>
              {resume.languages?.map((lang, index) => (
                <div key={lang.id || index} className="contact-item text-[7.5pt] mb-[2mm]">
                  {lang.language} <span className="text-[#9ca3af]">({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </>
        )}
      </aside>

      {/* Main */}
      <main className="main p-[18mm_12mm] text-[#111827] text-[9pt] overflow-hidden">
        <section className="section mb-[8mm] break-inside-avoid">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Profile</div>
          <p className="summary text-[8.5pt] text-[#4b5563] leading-[1.4]">
            {resume.summary}
          </p>
          
        </section>

        <section className="section mb-[8mm]">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Experience</div>

          {resume.experience?.map((exp, index) => (
            <article key={index} className="item mb-[6mm] break-inside-avoid">
              <div className="item-header flex justify-between gap-[4mm] mb-[1mm]">
                <div className="item-role text-[9.5pt] font-semibold text-[#111827]">{exp.role}</div>
                <div className="item-meta text-[7pt] text-[#6b7280] whitespace-nowrap">{exp.period}</div>
              </div>
              <div className="item-company text-[8pt] text-[#6b7280] mb-[1mm]">
                {exp.company}{exp.location ? ` · ${exp.location}` : ''}
              </div>
              {exp.description && (
                <ul className="item-list ml-[6mm] text-[8pt] text-[#4b5563] list-disc mt-[2mm]">
                  {exp.description.split('. ').filter(Boolean).map((point, i) => (
                    <li key={i} className="mb-1">{point}.</li>
                  ))}
                </ul>
              )}
              {exp.tags?.length > 0 && (
                <div className="tag-row flex flex-wrap gap-[3mm] mt-[2mm]">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>

        {/* Projects Section */}
        <section className="section">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Projects</div>
          {resume.projects?.map((project, index) => (
            <article key={index} className="item break-inside-avoid mb-[6mm]">
              <div className="item-header flex flex-col">
                <div className="text-[13pt] font-bold leading-[1.2]">{project.name}</div>
                <div className="text-[8pt] text-[#a5b4fc] uppercase mt-[2mm] tracking-widest">Personal Project</div>
              </div>
              <p className="item-desc text-[8pt] text-[#4b5563] mt-[2mm] leading-[1.35]">
                {project.description}
              </p>
              <div className="tag-row flex flex-wrap gap-[3mm] mt-[2mm]">
                {project.tags?.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Custom Sections */}
        {resume.customSections?.map((section, sectionIndex) => (
          <section key={sectionIndex} className="section">
            <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">
              {section.title}
            </div>
            {section.items.map((item, itemIndex) => (
              <article key={itemIndex} className="item break-inside-avoid mb-[6mm]">
                <div className="item-header flex justify-between gap-[4mm] mb-[1mm]">
                  <div className="item-role text-[9.5pt] font-semibold text-[#111827]">{item.title}</div>
                  {item.period && (
                    <div className="item-meta text-[7pt] text-[#6b7280] whitespace-nowrap">
                      {item.period}
                    </div>
                  )}
                </div>
                {item.subtitle && (
                  <div className="item-company text-[8pt] text-[#6b7280] mb-[1mm]">
                    {item.subtitle}
                  </div>
                )}
                {item.description && (
                  <p className="item-desc text-[8pt] text-[#4b5563] mt-[2mm] leading-[1.35]">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </section>
        ))}
      </main>

      {/* continuation visuals */}
      <div className="page-indicator absolute top-[10mm] right-[10mm] text-[10pt] text-[#999] hidden resume-page--indicator">continued</div>
      <div className="continuation-badge absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white text-[24px] font-bold opacity-0 pointer-events-none transition-opacity">
        +
      </div>
    </div>
  );
}

export default function Page() {
  const [pages, setPages] = useState([{ continuation: false }]);
  const addPage = () => {
    setPages([...pages, { continuation: true }]);
  };

  const removeLastPage = () => {
    if (pages.length > 1) {
      setPages(pages.slice(0, -1));
    }
  };

  const containerRef = useRef(null);
  
  // State for custom fields
  const [customBasicFields, setCustomBasicFields] = useState([]);
  const [customContactFields, setCustomContactFields] = useState([]);

  const [resume, setResume] = useState({
    customBasicFields: [],
    customContactFields: [],
    profileImage: '',
    name: 'John Doe',
    role: 'Full-Stack Developer',
    tagline: '4+ years building fast, scalable web apps with React, Node, and TypeScript.',
    contact: {
      email: 'john.doe@example.com',
      phone: '+91-98765-43210',
      location: 'Bengaluru, India',
      github: 'github.com/johndoe'
    },
    skills: [
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'React/Next.js', level: 80 },
      { name: 'Node.js/Express', level: 75 },
      { name: 'MongoDB/SQL', level: 70 },
    ],
    summary: 'Full-stack developer with proven expertise in building performant, maintainable web applications. Specialized in React, Node.js, and TypeScript with a track record of delivering products that scale.',
    experience: [
      {
        role: 'Senior Frontend Engineer',
        company: 'Acme Corp',
        period: '2023 – Present',
        location: 'Remote',
        description: 'Led React migration improving performance by 35%. Built reusable component library with Storybook. Mentored junior developers on modern React patterns.',
        tags: ['React', 'TypeScript', 'Storybook']
      },
      {
        role: 'Full-Stack Developer',
        company: 'Startup XYZ',
        period: '2020 – 2022',
        location: 'Bengaluru',
        description: 'Built REST APIs for React SPA with 20K+ MAU. Reduced deployment time from 30 to 5 minutes via CI/CD.',
        tags: ['Node.js', 'MongoDB']
      }
    ],
    projects: [
      {
        name: 'TypingDad - Typing Practice Platform',
        period: '2024 – Present',
        description: 'Built full-featured typing practice web app with real-time WPM tracking, custom lessons, and authenticated user profiles.',
        tags: ['Next.js', 'Tailwind CSS', 'MongoDB']
      }
    ],
    languages: [
      {
        id: Date.now(),
        language: 'English',
        proficiency: 'Fluent'
      },
      {
        id: Date.now() + 1,
        language: 'Hindi',
        proficiency: 'Native'
      }
    ],
    customSections: [
      {
        id: Date.now() + 2,
        title: 'Certifications',
        items: [
          {
            id: Date.now() + 3,
            title: 'AWS Certified Developer',
            subtitle: 'Amazon Web Services',
            period: '2023',
            description: 'Demonstrated ability to develop, deploy, and debug cloud-based applications using AWS.'
          }
        ]
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(true);

  // Handle resume updates
  const handleResumeUpdate = (section, field, value) => {
    setResume(prev => {
      if (section) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  };


  // Add custom field to Contact
  const addCustomContactField = () => {
    const newField = { id: Date.now(), key: 'Custom', value: '' };
    const updatedFields = [...(resume.customContactFields || []), newField];
    setCustomContactFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customContactFields: updatedFields
    }));
  };

  // Update custom Contact field
  const updateCustomContactField = (id, field, value) => {
    const updatedFields = customContactFields.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setCustomContactFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customContactFields: updatedFields
    }));
  };

  // Remove custom Contact field
  const removeCustomContactField = (id) => {
    const updatedFields = customContactFields.filter(field => field.id !== id);
    setCustomContactFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customContactFields: updatedFields
    }));
  };

  // Add custom field to Basic Info
  const addCustomBasicField = () => {
    const newField = { id: Date.now(), name: 'New Field', value: '' };
    const updatedFields = [...(resume.customBasicFields || []), newField];
    setCustomBasicFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customBasicFields: updatedFields
    }));
  };

  // Update custom Basic Info field
  const updateCustomBasicField = (id, field, value) => {
    const updatedFields = (resume.customBasicFields || []).map(f => 
      f.id === id ? { ...f, [field]: value } : f
    );
    setCustomBasicFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customBasicFields: updatedFields
    }));
  };

  // Remove custom Basic Info field
  const removeCustomBasicField = (id) => {
    const updatedFields = (resume.customBasicFields || []).filter(field => field.id !== id);
    setCustomBasicFields(updatedFields);
    setResume(prev => ({
      ...prev,
      customBasicFields: updatedFields
    }));
  };

  // Add a new experience entry
  const addExperience = () => {
    const newExp = {
      role: 'Job Title',
      company: 'Company Name',
      period: 'YYYY – Present',
      location: 'Location',
      description: 'Brief description of your role and achievements.',
      tags: []
    };
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  // Add a new language
  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      language: 'New Language',
      proficiency: 'Intermediate'
    };
    setResume(prev => ({
      ...prev,
      languages: [...(prev.languages || []), newLanguage]
    }));
  };

  // Update a language
  const updateLanguage = (id, field, value) => {
    setResume(prev => ({
      ...prev,
      languages: prev.languages.map(lang => 
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  // Remove a language
  const removeLanguage = (id) => {
    setResume(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  // Add a new skill
  const addSkill = () => {
    const newSkills = [...resume.skills, { name: 'New Skill', level: 50 }];
    setResume(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  // Add a new custom section
  const addCustomSection = () => {
    const newSection = {
      id: Date.now(),
      title: 'New Section',
      items: []
    };
    setResume(prev => ({
      ...prev,
      customSections: [...prev.customSections, newSection]
    }));
  };

  // Add a new item to a custom section
  const addCustomSectionItem = (sectionId) => {
    setResume(prev => {
      const updatedSections = prev.customSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: [
              ...section.items,
              {
                id: Date.now(),
                title: 'New Item',
                subtitle: '',
                period: '',
                description: ''
              }
            ]
          };
        }
        return section;
      });
      return { ...prev, customSections: updatedSections };
    });
  };

  // Update a custom section
  const updateCustomSection = (sectionId, updates) => {
    setResume(prev => ({
      ...prev,
      customSections: prev.customSections.map(section => 
        section.id === sectionId ? { ...section, ...updates } : section
      )
    }));
  };

  // Update a custom section item
  const updateCustomSectionItem = (sectionId, itemId, updates) => {
    setResume(prev => {
      const updatedSections = prev.customSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map(item => 
              item.id === itemId ? { ...item, ...updates } : item
            )
          };
        }
        return section;
      });
      return { ...prev, customSections: updatedSections };
    });
  };

  // Remove a custom section
  const removeCustomSection = (sectionId) => {
    setResume(prev => ({
      ...prev,
      customSections: prev.customSections.filter(section => section.id !== sectionId)
    }));
  };

  // Remove a custom section item
  const removeCustomSectionItem = (sectionId, itemId) => {
    setResume(prev => {
      const updatedSections = prev.customSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.filter(item => item.id !== itemId)
          };
        }
        return section;
      });
      return { ...prev, customSections: updatedSections };
    });
  };

  function printResume() {
    if (!containerRef.current) return;
    const styles = Array.from(document.querySelectorAll("style, link"))
      .map((s) => s.outerHTML)
      .join("\n");
    const html = containerRef.current.innerHTML;
    const w = window.open("", "_blank");
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${resume.name} - Resume</title>${styles}<style>@page{size:A4;margin:0;} body{margin:0;padding:0;} .controls,.edit-controls{display:none !important;} .resume-page{box-shadow:none;}</style></head><body>${html}</body></html>`);
    w.document.close();
    setTimeout(() => {
      w.focus();
      w.print();
    }, 500);
  }

  function addNewPage() {
    setPages((p) => [...p, { isBlank: true }]);
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 150);
  }

  return (
    <div className="relative">
      {/* Edit Toggle Button */}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isEditing ? '👁️ Preview' : '✏️ Edit Resume'}
      </button>

      <div className="flex min-h-screen">
        {/* Editor Panel */}
        {isEditing && (
          <div className="w-96 p-4 bg-gray-50 border-r editor-panel scrollable-y">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Edit Resume</h2>
            
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Basic Information</h3>
                  <button 
                    onClick={addCustomBasicField}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded flex items-center"
                    title="Add custom field"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Field
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Profile Picture Upload */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                      {resume.profileImage ? (
                        <img 
                          src={resume.profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <label className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded cursor-pointer transition-colors">
                      {resume.profileImage ? 'Change Photo' : 'Upload Photo'}
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setResume(prev => ({
                                ...prev,
                                profileImage: event.target.result
                              }));
                            };
                            reader.readAsDataURL(file);
                            // Reset the input value to allow re-uploading the same file
                            e.target.value = '';
                          }
                        }}
                      />
                    </label>
                    {resume.profileImage && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setResume(prev => ({
                            ...prev,
                            profileImage: ''
                          }));
                        }}
                        className="text-xs text-red-500 hover:text-red-700 mt-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={resume.name}
                      onChange={(e) => setResume({...resume, name: e.target.value})}
                      className="w-full p-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Job Title</label>
                    <input
                      type="text"
                      value={resume.role}
                      onChange={(e) => setResume({...resume, role: e.target.value})}
                      className="w-full p-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Tagline</label>
                    <textarea
                      value={resume.tagline}
                      onChange={(e) => setResume({...resume, tagline: e.target.value})}
                      className="w-full p-2 border rounded text-sm h-20"
                      placeholder="Enter your professional tagline"
                    />
                  </div>
                  
                  {/* Custom Basic Fields */}
                  {customBasicFields.map((field) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) => updateCustomBasicField(field.id, 'name', e.target.value)}
                          className="w-full p-2 border rounded text-sm mb-1"
                          placeholder="Field name"
                        />
                        <input
                          type="text"
                          value={field.value}
                          onChange={(e) => updateCustomBasicField(field.id, 'value', e.target.value)}
                          className="w-full p-2 border rounded text-sm"
                          placeholder="Field value"
                        />
                      </div>
                      <button
                        onClick={() => removeCustomBasicField(field.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove field"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Summary */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="mb-3">
                  <h3 className="font-medium text-gray-700">Profile Summary</h3>
                </div>
                <div>
                  <textarea
                    value={resume.summary || ''}
                    onChange={(e) => setResume({...resume, summary: e.target.value})}
                    className="w-full p-2 border rounded text-sm min-h-[120px]"
                    placeholder="Write a brief summary about yourself, your experience, and your skills..."
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Contact Information</h3>
                  <button 
                    onClick={addCustomContactField}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded flex items-center"
                    title="Add contact field"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Field
                  </button>
                </div>
                <div className="space-y-3">
                  {Object.entries(resume.contact).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm text-gray-600 mb-1 capitalize">{key}</label>
                      <input
                        type={key === 'email' ? 'email' : 'text'}
                        value={value}
                        onChange={(e) => 
                          setResume({
                            ...resume, 
                            contact: { ...resume.contact, [key]: e.target.value }
                          })
                        }
                        className="w-full p-2 border rounded text-sm"
                      />
                    </div>
                  ))}
                  
                  {/* Custom Contact Fields */}
                  {customContactFields.map((field) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={field.key}
                          onChange={(e) => updateCustomContactField(field.id, 'key', e.target.value)}
                          className="w-full p-2 border rounded text-sm mb-1"
                          placeholder="Field name"
                        />
                        <input
                          type="text"
                          value={field.value}
                          onChange={(e) => updateCustomContactField(field.id, 'value', e.target.value)}
                          className="w-full p-2 border rounded text-sm"
                          placeholder="Field value"
                        />
                      </div>
                      <button
                        onClick={() => removeCustomContactField(field.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove field"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Languages</h3>
                  <button 
                    onClick={addLanguage}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    + Add Language
                  </button>
                </div>
                <div className="space-y-4">
                  {resume.languages?.map((lang, index) => (
                    <div key={lang.id || index} className="border rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <input
                          type="text"
                          value={lang.language}
                          onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                          className="text-sm font-medium border-b w-full"
                          placeholder="Language"
                        />
                        <button
                          onClick={() => removeLanguage(lang.id)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      <div className="mt-2">
                        <select
                          value={lang.proficiency}
                          onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                          className="text-xs w-full p-1 border rounded"
                        >
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Native">Native</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Skills</h3>
                  <button 
                    onClick={addSkill}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    + Add Skill
                  </button>
                </div>
                <div className="space-y-4">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => {
                            const newSkills = [...resume.skills];
                            newSkills[index].name = e.target.value;
                            setResume({...resume, skills: newSkills});
                          }}
                          className="w-full p-1 border-b text-sm"
                        />
                        <button
                          onClick={() => {
                            const newSkills = resume.skills.filter((_, i) => i !== index);
                            setResume({...resume, skills: newSkills});
                          }}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => {
                            const newSkills = [...resume.skills];
                            newSkills[index].level = parseInt(e.target.value);
                            setResume({...resume, skills: newSkills});
                          }}
                          className="flex-1 mr-2"
                        />
                        <span className="text-xs w-8 text-right">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Experience</h3>
                  <button 
                    onClick={addExperience}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    + Add Experience
                  </button>
                </div>
                <div className="space-y-4">
                  {resume.experience.map((exp, index) => (
                    <div key={index} className="border rounded p-3">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => {
                            const newExp = [...resume.experience];
                            newExp[index].role = e.target.value;
                            setResume({...resume, experience: newExp});
                          }}
                          className="w-2/3 p-1 border-b text-sm font-medium"
                          placeholder="Job Title"
                        />
                        <button
                          onClick={() => {
                            const newExp = resume.experience.filter((_, i) => i !== index);
                            setResume({...resume, experience: newExp});
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <label className="text-xs text-gray-500">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => {
                              const newExp = [...resume.experience];
                              newExp[index].company = e.target.value;
                              setResume({...resume, experience: newExp});
                            }}
                            className="w-full p-1 border-b text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Period</label>
                          <input
                            type="text"
                            value={exp.period}
                            onChange={(e) => {
                              const newExp = [...resume.experience];
                              newExp[index].period = e.target.value;
                              setResume({...resume, experience: newExp});
                            }}
                            className="w-full p-1 border-b text-sm"
                            placeholder="e.g., 2020 - Present"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="text-xs text-gray-500">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => {
                              const newExp = [...resume.experience];
                              newExp[index].location = e.target.value;
                              setResume({...resume, experience: newExp});
                            }}
                            className="w-full p-1 border-b text-sm"
                            placeholder="e.g., Remote"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="text-xs text-gray-500">Description</label>
                          <textarea
                            value={exp.description}
                            onChange={(e) => {
                              const newExp = [...resume.experience];
                              newExp[index].description = e.target.value;
                              setResume({...resume, experience: newExp});
                            }}
                            className="w-full p-1 border rounded text-sm h-20"
                            placeholder="Describe your role and achievements"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="text-xs text-gray-500">Tags (comma separated)</label>
                          <input
                            type="text"
                            value={exp.tags?.join(', ')}
                            onChange={(e) => {
                              const newExp = [...resume.experience];
                              newExp[index].tags = e.target.value.split(',').map(tag => tag.trim()).filter(Boolean);
                              setResume({...resume, experience: newExp});
                            }}
                            className="w-full p-1 border-b text-sm"
                            placeholder="e.g., React, Node.js, MongoDB"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Sections */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Custom Sections</h3>
                  <button 
                    onClick={addCustomSection}
                    className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                  >
                    + Add Section
                  </button>
                </div>
                <div className="space-y-4">
                  {resume.customSections?.map((section, sectionIndex) => (
                    <div key={section.id} className="border rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => updateCustomSection(section.id, { title: e.target.value })}
                          className="text-sm font-medium border-b w-full"
                          placeholder="Section Title"
                        />
                        <button
                          onClick={() => removeCustomSection(section.id)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="space-y-3 mt-3">
                        {section.items.map((item, itemIndex) => (
                          <div key={item.id} className="border-l-2 pl-3 py-1">
                            <div className="flex justify-between items-center">
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) => updateCustomSectionItem(section.id, item.id, { title: e.target.value })}
                                className="text-sm font-medium border-b w-full"
                                placeholder="Item Title"
                              />
                              <button
                                onClick={() => removeCustomSectionItem(section.id, item.id)}
                                className="ml-2 text-red-500 hover:text-red-700 text-xs"
                              >
                                ×
                              </button>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                              <div>
                                <input
                                  type="text"
                                  value={item.subtitle}
                                  onChange={(e) => updateCustomSectionItem(section.id, item.id, { subtitle: e.target.value })}
                                  className="text-xs w-full p-1 border-b"
                                  placeholder="Subtitle"
                                />
                              </div>
                              <div>
                                <input
                                  type="text"
                                  value={item.period}
                                  onChange={(e) => updateCustomSectionItem(section.id, item.id, { period: e.target.value })}
                                  className="text-xs w-full p-1 border-b"
                                  placeholder="Period"
                                />
                              </div>
                            </div>
                            <textarea
                              value={item.description}
                              onChange={(e) => updateCustomSectionItem(section.id, item.id, { description: e.target.value })}
                              className="text-xs w-full p-1 border rounded mt-1 h-16"
                              placeholder="Description"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => addCustomSectionItem(section.id)}
                          className="text-xs text-blue-500 hover:text-blue-700 mt-1 flex items-center"
                        >
                          + Add Item
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resume Preview */}
        <div className="flex-1 p-4 bg-gray-100">
          <div className="max-w-[210mm] mx-auto resume-preview">
            <div ref={containerRef}>
              {pages.map((pg, i) => (
                <ResumePageContent 
                  key={i} 
                  continuation={pg.continuation} 
                  isBlank={pg.isBlank}
                  resume={resume}
                  onUpdate={handleResumeUpdate}
                  isEditing={isEditing}
                />
              ))}
            </div>

            <div className={`controls fixed bottom-5 left-5 bg-white p-3 rounded-lg shadow-lg z-50 flex space-x-2 ${isEditing ? 'ml-96' : ''} transition-all duration-300`}>
              <button 
                className="btn inline-flex items-center px-4 py-2 bg-gradient-to-br from-emerald-500 to-sky-500 text-white rounded-md font-medium transform transition-transform hover:scale-105 active:scale-95" 
                onClick={printResume}
              >
                📄 Print to PDF
              </button>
              <div className="flex space-x-2">
                <button
                  className="btn-secondary inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors" 
                  onClick={addNewPage}
                >
                  ➕ Add Page
                </button>
                {pages.length > 1 && (
                  <button
                    className="btn-secondary inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    onClick={removeLastPage}
                    title="Remove Last Page"
                  >
                    ➖ Remove Page
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
