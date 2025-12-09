"use client";

import { useRef, useState } from "react";

function ResumePageContent({ continuation, isBlank = false }) {
  if (isBlank) {
    return (
      <div className={`resume-page ${continuation ? 'continuation' : ''} relative grid grid-cols-[75mm_1fr] w-[210mm] h-[297mm] bg-white overflow-hidden mx-auto mb-2.5`}>
        {/* Sidebar with same styling but empty */}
        <aside className={`sidebar ${continuation ? 'continuation-sidebar' : ''} bg-[#0b1120] p-[20mm]`}>
          {!continuation && (
            <div className="w-[50mm] h-[50mm] mb-[8mm] -ml-[5mm]" />
          )}
        </aside>
        {/* Main content area - empty */}
        <main className="p-[18mm_12mm]">
          {/* Empty content */}
        </main>
      </div>
    );
  }
  return (
    <div className={`resume-page ${continuation ? "continuation" : ""} relative grid grid-cols-[75mm_1fr] w-[210mm] h-[297mm] bg-white overflow-hidden mx-auto mb-2.5`}>
      {/* Sidebar */}
      <aside className={`sidebar ${continuation ? "continuation-sidebar" : ""} bg-[#0b1120] text-[#e5e7eb] p-[20mm]`}>
        {!continuation && (
          <div className="avatar w-[50mm] h-[50mm] rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-[28px] font-bold mb-[8mm] -ml-[5mm]">
            JD
          </div>
        )}

        <div className="name text-[13pt] font-bold leading-[1.2]">John Doe</div>
        <div className="role text-[8pt] text-[#a5b4fc] uppercase mt-[2mm] tracking-widest">Full-Stack Developer</div>
        {!continuation && (
          <p className="tagline text-[7.5pt] text-[#9ca3af] mt-[6mm] leading-[1.4]">
            4+ years building fast, scalable web apps with React, Node, and TypeScript.
          </p>
        )}

        {!continuation && (
          <>
            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Contact</div>
              <div className="contact-item text-[7.5pt] mb-[3mm] break-words">
                <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase tracking-[0.08em] block">Email</span>
                john.doe@example.com
              </div>
              <div className="contact-item text-[7.5pt] mb-[3mm]">
                <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase block">Phone</span>
                +91-98765-43210
              </div>
              <div className="contact-item text-[7.5pt] mb-[3mm]">
                <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase block">Location</span>
                Bengaluru, India
              </div>
              <div className="contact-item text-[7.5pt]">
                <span className="contact-label text-[#9ca3af] text-[6.5pt] uppercase block">GitHub</span>
                github.com/johndoe
              </div>
            </div>

            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Skills</div>
              {[
                ["JavaScript/TypeScript", "85"],
                ["React/Next.js", "80"],
                ["Node.js/Express", "75"],
                ["MongoDB/SQL", "70"],
              ].map(([label, w]) => (
                <div key={label} className="skill-item text-[7.5pt] mb-[4mm]">
                  {label}
                  <div className="skill-bar h-[3px] rounded-full bg-[#1f2937] overflow-hidden mt-[2mm]">
                    <div className="skill-bar-fill h-full" style={{ width: `${w}%`, background: "linear-gradient(90deg,#22c55e,#0ea5e9)" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-section mt-[10mm]">
              <div className="sidebar-title text-[7pt] uppercase tracking-[0.12em] text-[#9ca3af] font-semibold mb-[4mm]">Languages</div>
              <div className="contact-item text-[7.5pt]">English (Fluent)</div>
              <div className="contact-item text-[7.5pt]">Hindi (Native)</div>
            </div>
          </>
        )}
      </aside>

      {/* Main */}
      <main className="main p-[18mm_12mm] text-[#111827] text-[9pt] overflow-hidden">
        <section className="section mb-[8mm] break-inside-avoid">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Profile</div>
          <p className="summary text-[8.5pt] text-[#4b5563] leading-[1.4]">
            Full-stack developer with proven expertise in building performant, maintainable web applications. Specialized in React, Node.js, and TypeScript with a track record of delivering products that scale.
          </p>
        </section>

        <section className="section mb-[8mm]">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Experience</div>

          <article className="item mb-[6mm] break-inside-avoid">
            <div className="item-header flex justify-between gap-[4mm] mb-[1mm]">
              <div className="item-role text-[9.5pt] font-semibold text-[#111827]">Senior Frontend Engineer</div>
              <div className="item-meta text-[7pt] text-[#6b7280] whitespace-nowrap">2023 – Present</div>
            </div>
            <div className="item-company text-[8pt] text-[#6b7280] mb-[1mm]">Acme Corp · Remote</div>
            <ul className="item-list ml-[6mm] text-[8pt] text-[#4b5563] list-disc mt-[2mm]">
              <li>Led React migration improving performance by 35%</li>
              <li>Built reusable component library with Storybook</li>
              <li>Mentored junior developers on modern React patterns</li>
            </ul>
            <div className="tag-row flex flex-wrap gap-[3mm] mt-[2mm]">
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">React</span>
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">TypeScript</span>
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">Storybook</span>
            </div>
          </article>

          <article className="item mb-[6mm] break-inside-avoid">
            <div className="item-header flex justify-between gap-[4mm] mb-[1mm]">
              <div className="item-role text-[9.5pt] font-semibold text-[#111827]">Full-Stack Developer</div>
              <div className="item-meta text-[7pt] text-[#6b7280] whitespace-nowrap">2020 – 2022</div>
            </div>
            <div className="item-company text-[8pt] text-[#6b7280] mb-[1mm]">Startup XYZ · Bengaluru</div>
            <ul className="item-list ml-[6mm] text-[8pt] text-[#4b5563] list-disc mt-[2mm]">
              <li>Built REST APIs for React SPA with 20K+ MAU</li>
              <li>Reduced deployment time from 30 to 5 minutes via CI/CD</li>
            </ul>
            <div className="tag-row flex flex-wrap gap-[3mm] mt-[2mm]">
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">Node.js</span>
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">MongoDB</span>
            </div>
          </article>
        </section>

        <section className="section">
          <div className="section-title text-[8pt] uppercase tracking-[0.15em] text-[#6b7280] font-semibold mb-[4mm] border-b pb-[2mm]">Projects</div>
          <article className="item break-inside-avoid">
            <div className="item-header flex justify-between gap-[4mm] mb-[1mm]">
              <div className="item-role text-[9.5pt] font-semibold text-[#111827]">TypingDad - Typing Practice Platform</div>
              <div className="item-meta text-[7pt] text-[#6b7280] whitespace-nowrap">2024 – Present</div>
            </div>
            <div className="item-company text-[8pt] text-[#6b7280] mb-[1mm]">Personal Project</div>
            <p className="item-desc text-[8pt] text-[#4b5563] mt-[2mm] leading-[1.35]">
              Built full-featured typing practice web app with real-time WPM tracking, custom lessons, and authenticated user profiles.
            </p>
            <div className="tag-row flex flex-wrap gap-[3mm] mt-[2mm]">
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">Next.js</span>
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">Tailwind CSS</span>
              <span className="tag px-[3mm] py-[1mm] rounded text-[6.5pt] font-medium bg-[#e0f2fe] text-[#0369a1]">MongoDB</span>
            </div>
          </article>
        </section>
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
  const containerRef = useRef(null);

  function printResume() {
    if (!containerRef.current) return;
    const styles = Array.from(document.querySelectorAll("style, link"))
      .map((s) => s.outerHTML)
      .join("\n");
    const html = containerRef.current.innerHTML;
    const w = window.open("", "_blank");
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Print Resume</title>${styles}<style>@page{size:A4;margin:12mm;} body{margin:0;padding:0;} .controls{display:none !important;}</style></head><body>${html}</body></html>`);
    w.document.close();
    setTimeout(() => {
      w.focus();
      w.print();
    }, 300);
  }

  function addNewPage() {
    // Add a completely blank page with no text or placeholders
    setPages((p) => [...p, { isBlank: true }]);
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 150);
  }

  return (
    <>
      <div ref={containerRef}>
        {pages.map((pg, i) => (
          <ResumePageContent key={i} continuation={pg.continuation} isBlank={pg.isBlank} />
        ))}
      </div>

      <div className="controls fixed bottom-5 left-5 bg-white p-4 rounded-lg shadow z-50">
        <button 
          className="btn inline-block px-4 py-2 mr-2 bg-gradient-to-br from-emerald-500 to-sky-500 text-white rounded-md font-medium transform transition-transform hover:scale-105 active:scale-95" 
          onClick={printResume}
        >
          📄 Print to PDF
        </button>
        <button 
          className="btn-secondary inline-block px-4 py-2 bg-gray-500 text-white rounded-md ml-1 transform transition-transform hover:scale-105 active:scale-95" 
          onClick={addNewPage}
        >
          ➕ Add Page
        </button>
      </div>
    </>
  );
}
