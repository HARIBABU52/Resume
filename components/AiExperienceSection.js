"use client";

export default function AiExperienceSection() {
  return (
    <section
      id="ai-experience"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF5EC] via-[#FFF9F4] to-[#FFEDE5] py-16 sm:py-20"
    >
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-[#FFB488]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#FF8A65]/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-600 shadow-sm backdrop-blur">
            AI resume experience
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Experience the power of{" "}
            <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">
              AI for your resume
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Write a stronger resume in less time with AI suggestions, keyword
            optimization and instant feedback tailored to your target job.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
          {/* AI workspace mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl rounded-[32px] bg-white/90 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur">
              {/* window bar */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="h-6 w-32 rounded-full bg-slate-100" />
              </div>

              {/* top: job + AI target */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Target job title
                  </p>
                  <p className="text-xs text-slate-600">Senior Product Designer</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                    AI
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700">
                    Optimized for this role
                  </span>
                </div>
              </div>

              {/* middle: editor + AI suggestions */}
              <div className="grid gap-4 lg:grid-cols-[1.2fr,0.9fr]">
                {/* editor */}
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[11px] font-semibold text-slate-700">
                      Work experience
                    </p>
                    <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-[#FF6A3D]">
                      AI suggestions on
                    </span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="h-2 w-11/12 rounded-full bg-slate-200" />
                    <div className="h-2 w-10/12 rounded-full bg-slate-200" />
                    <div className="h-2 w-9/12 rounded-full bg-slate-200" />
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <button className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-800 shadow-sm">
                      Rewrite with AI
                    </button>
                    <button className="rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-semibold text-white">
                      Add bullet
                    </button>
                  </div>
                </div>

                {/* AI panel */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#FFF3E7] p-3">
                    <p className="text-[11px] font-semibold text-slate-900">
                      Suggested bullet
                    </p>
                    <p className="mt-1 text-[11px] text-slate-700">
                      Led a cross-functional team to ship a new redesign that
                      improved sign-up conversion by 18%.
                    </p>
                    <button className="mt-2 rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-3 py-1.5 text-[10px] font-semibold text-white">
                      Insert into resume
                    </button>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-semibold text-slate-900">
                        Keyword match
                      </p>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                        87% match
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Your resume includes important keywords like "user
                      research", "prototyping" and "stakeholder alignment".
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom: score bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-slate-900">
                    AI resume score
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-10/12 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600">
                      8.7 / 10
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Improve your score by adding impact numbers and skills.
                  </p>
                </div>

                <button className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-slate-900 shadow-sm">
                  View AI tips
                </button>
              </div>
            </div>
          </div>

          {/* Right: benefits list */}
          <div className="space-y-5 lg:space-y-6">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Get tailored suggestions for your role
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                Tell us your target job title and experience level. Our AI uses
                that context to recommend bullet points, skills and summaries
                that match what hiring managers expect for that role.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Optimize keywords for ATS and recruiters
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                Compare your resume against the job description to check keyword
                match and highlight missing phrases, so your resume is easy for
                ATS software and recruiters to find.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                See instant feedback with an AI resume score
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                Track your progress with a live score that updates as you edit.
                Follow suggested improvements to make each section clearer,
                stronger and more results-focused.
              </p>
            </div>

            <div className="pt-1">
              <button className="rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition-transform hover:scale-[1.03]">
                Try AI resume builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
