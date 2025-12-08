"use client";

type ResumeMegaMenuProps = {
  open: boolean;
};

export default function ResumeMegaMenu({ open }: ResumeMegaMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute inset-x-0 top-full z-40 flex justify-center">
      <div className="mt-2 w-full max-w-6xl rounded-3xl border border-orange-100 bg-gradient-to-br from-[#FFF9F4] via-[#FFF4EC] to-[#FFE5D3] px-6 py-6 shadow-[0_28px_80px_rgba(15,23,42,0.20)] backdrop-blur">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Resume hub
            </p>
            <h3 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
              Everything you need to build a job-winning resume
            </h3>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Start from a template, use AI to write content, then optimize your
              resume for ATS — all in one place.
            </p>
          </div>

          <span className="hidden rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline-flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
              AI
            </span>
            AI-powered resume builder
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1.1fr_1.2fr]">
          {/* LEFT: Feature cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="/resume-templates"
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-lg">
                  🧩
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Resume Templates
                  </p>
                  <p className="text-xs text-slate-600">
                    Choose from modern, ATS-friendly layouts.
                  </p>
                </div>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#FF6A3D]">
                Browse templates →
              </span>
            </a>

            <a
              href="/builder"
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-lg">
                  ⚙️
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Resume Builder
                  </p>
                  <p className="text-xs text-slate-600">
                    Step-by-step editor with live resume preview.
                  </p>
                </div>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-emerald-700">
                Start building →
              </span>
            </a>

            <a
              href="/resume-examples"
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-50 text-lg">
                  📚
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Resume Examples
                  </p>
                  <p className="text-xs text-slate-600">
                    Real resumes for popular roles &amp; industries.
                  </p>
                </div>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-violet-700">
                View examples →
              </span>
            </a>

            <a
              href="/ats-checker"
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-lg">
                  ✅
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    ATS Resume Checker
                  </p>
                  <p className="text-xs text-slate-600">
                    Scan your resume and fix issues before you apply.
                  </p>
                </div>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-sky-700">
                Check my resume →
              </span>
            </a>
          </div>

          {/* MIDDLE: Links */}
          <div className="grid gap-5 text-sm">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                AI &amp; tools
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="/ai-resume-writer" className="hover:text-[#FF6A3D]">
                    AI resume writer
                  </a>
                </li>
                <li>
                  <a href="/ai-summary-generator" className="hover:text-[#FF6A3D]">
                    AI summary generator
                  </a>
                </li>
                <li>
                  <a href="/ai-skills-suggester" className="hover:text-[#FF6A3D]">
                    AI skills suggester
                  </a>
                </li>
                <li>
                  <a href="/keyword-matcher" className="hover:text-[#FF6A3D]">
                    Job description keyword matcher
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Guides &amp; resources
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="/how-to-write-a-resume" className="hover:text-[#FF6A3D]">
                    How to write a resume
                  </a>
                </li>
                <li>
                  <a href="/resume-formats" className="hover:text-[#FF6A3D]">
                    Best resume formats in 2025
                  </a>
                </li>
                <li>
                  <a href="/resume-sections" className="hover:text-[#FF6A3D]">
                    What to put in each section
                  </a>
                </li>
                <li>
                  <a href="/resume-checklist" className="hover:text-[#FF6A3D]">
                    1-page resume checklist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: preview + CTA */}
          <div className="flex flex-col justify-between rounded-2xl bg-white/95 p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-900">
                Save time with our builder
              </p>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                5–10 min setup
              </span>
            </div>

            <div className="relative mb-4 h-32 rounded-2xl bg-gradient-to-br from-[#FFE0CC] via-[#FFF6EE] to-[#FDE4FF] p-3">
              {/* tiny resume preview mock */}
              <div className="absolute right-3 top-3 h-20 w-32 rounded-xl bg-white shadow-sm">
                <div className="h-4 w-16 rounded-full bg-slate-200 m-2" />
                <div className="space-y-1 px-2">
                  <div className="h-1.5 w-full rounded-full bg-slate-100" />
                  <div className="h-1.5 w-10/12 rounded-full bg-slate-100" />
                  <div className="h-1.5 w-8/12 rounded-full bg-slate-100" />
                </div>
              </div>
              <p className="max-w-[8rem] text-[11px] font-medium text-slate-700">
                See your resume update live as you edit.
              </p>
            </div>

            <p className="mb-3 text-xs text-slate-600">
              Create your first resume for free, then duplicate and customize
              versions for different jobs in seconds.
            </p>

            <button className="w-full rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg">
              Build your resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
