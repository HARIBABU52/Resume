"use client";

import { useState } from "react";

/**
 * @typedef {Object} ExampleRole
 * @property {string} id
 * @property {string} label
 * @property {string} image
 */

/** @type {ExampleRole[]} */
const ROLES = [
  { id: "software-engineer", label: "Software Engineer", image: "/images/templates/template-1.png" },
  { id: "marketing-specialist", label: "Marketing Specialist", image: "/images/templates/template-2.png" },
  { id: "business-analyst", label: "Business Analyst", image: "/images/templates/template-3.png" },
  { id: "data-scientist", label: "Data Scientist", image: "/images/templates/template-4.png" },
  { id: "product-manager", label: "Product Manager", image: "/images/templates/template-5.png" },
  { id: "sales-manager", label: "Sales Manager", image: "/images/templates/template-1.png" },
  { id: "teacher", label: "Teacher", image: "/images/templates/template-2.png" },
  { id: "designer", label: "Designer", image: "/images/templates/template-3.png" },
  { id: "accountant", label: "Accountant", image: "/images/templates/template-4.png" },
  { id: "student-fresher", label: "Student / Fresher", image: "/images/templates/template-5.png" },
];

export default function ResumeExamplesSection() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const activeRole = ROLES.find((r) => r.id === activeId) ?? ROLES[0];

  return (
    <section
      id="resume-examples"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF5EC] via-[#FFF9F4] to-[#FDEDE5] py-16 sm:py-20"
    >
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-64 w-64 rounded-full bg-[#FFB488]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#FF8A65]/25 blur-3xl" />

      {/* MAIN LAYOUT */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-stretch">
        {/* LEFT: copy + roles */}
        <div className="flex w-full flex-col gap-6 lg:w-[42%]">
          {/* copy */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-600 shadow-sm backdrop-blur">
              Job-specific examples
            </span>

            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Job-specific resume examples{" "}
              <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">
                for every career path
              </span>
            </h2>

            <p className="text-sm text-slate-700 sm:text-base">
              Not sure what your resume should look like for your role? Browse
              real resume examples for different jobs, industries, and experience
              levels to see exactly what works.
            </p>

            <p className="text-xs text-slate-500 sm:text-sm">
              Each sample is written and formatted to be ATS-friendly and aligned
              with current hiring trends, so you can model a layout and wording
              that recruiters already respond to.
            </p>

            <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A3D] hover:text-[#FF3E00]">
              View all resume examples
              <span aria-hidden>↗</span>
            </button>
          </div>

          {/* roles list BELOW content */}
          {/* roles list BELOW content */}
<div className="mt-4 rounded-2xl bg-white/70 p-2 shadow-sm backdrop-blur">
  <div 
    className="flex flex-nowrap gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible" 
    style={{ maxHeight: '300px', flexFlow: 'row wrap' }}
  >
    {ROLES.map((role) => {
      const isActive = role.id === activeId;
      return (
        <button
          key={role.id}
          type="button"
          onClick={() => setActiveId(role.id)}
          className={`group flex flex-shrink-0 items-center gap-3 rounded-full border px-3 py-2 text-sm font-medium transition-all lg:rounded-xl lg:px-4 lg:py-3
            ${
              isActive
                ? "border-transparent bg-gradient-to-r from-[#7C3AED] to-[#FF6A3D] text-white shadow-md shadow-orange-300/40"
                : "border-slate-200/70 bg-white/90 text-slate-800 hover:border-orange-200 hover:bg-white"
            }
          `}
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold
              ${
                isActive
                  ? "bg-white/15"
                  : "bg-orange-50 text-[#FF6A3D]"
              }
            `}
          >
            {role.label.charAt(0)}
          </span>
          <span className="whitespace-nowrap">{role.label}</span>
        </button>
      );
    })}
  </div>
</div>

        </div>

        {/* RIGHT: preview – compact column */}
        <div className="w-full lg:w-[58%]">
          <div className="relative flex h-full min-h-[360px] flex-col rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur">
            {/* browser bar */}
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="h-6 w-28 rounded-full bg-slate-100" />
            </div>

            {/* preview image with reduced size */}
            <div className="flex-1 overflow-hidden rounded-xl bg-slate-50 p-2">
              <div className="flex h-full items-center justify-center">
                <img
                  src={activeRole.image}
                  alt={`${activeRole.label} resume example`}
                  className="h-auto w-full max-w-[90%] object-contain"
                  style={{ maxHeight: '90%' }}
                />
              </div>
            </div>

            {/* CTA row sticks to bottom */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-900">
                  {activeRole.label} resume example
                </p>
                <p className="text-[11px] text-slate-500">
                  Review a complete sample and reuse the structure, sections, and wording.
                </p>
              </div>

              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-5 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/30">
                <span className="relative z-10 flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Use This Template
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#047857] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>

            {/* floating label */}
            <div className="pointer-events-none absolute -right-6 -top-6 rounded-2xl bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
              New examples added monthly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}