export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#FFF4EB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            How Our Online Resume Builder Works in{" "}
            <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700">
            Build a professional, ATS-friendly resume in minutes using our
            AI-powered resume builder and modern templates.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6 h-40 w-full max-w-xs rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
              <div className="absolute inset-3 rounded-2xl bg-gradient-to-r from-[#FFE0D0] via-[#FFEDE1] to-[#FFF7F0]" />
              <div className="absolute left-4 top-6 h-28 w-20 rounded-xl bg-white shadow" />
              <div className="absolute left-12 top-10 h-28 w-20 rounded-xl bg-[#F5FAFF] shadow-lg" />
              <div className="absolute left-20 top-14 h-28 w-20 rounded-xl bg-white shadow" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              1. Choose an ATS-friendly resume template
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xs">
              Pick from professionally designed resume templates that are
              optimized for ATS scans and different job roles, from fresher to
              senior positions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6 h-40 w-full max-w-xs rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
              <div className="absolute inset-3 rounded-2xl bg-[#F8FBFF]" />
              <div className="absolute inset-x-6 top-7 h-20 rounded-xl bg-white shadow" />
              <div className="absolute left-10 bottom-6 h-9 w-32 rounded-full bg-[#FFE5D4]" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              2. Customize your resume with AI-powered content
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xs">
              Add your experience and let our AI resume writer suggest strong
              bullet points, keywords, and summaries tailored to your target
              job.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6 h-40 w-full max-w-xs rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden">
              <div className="absolute inset-4 rounded-2xl bg-[#FFF7EF]" />
              <div className="absolute left-8 top-7 h-24 w-32 rounded-xl bg-white shadow" />
              <div className="absolute right-6 top-6 flex flex-col gap-1">
                <span className="rounded-full bg-[#FF6A3D] px-2 py-1 text-[10px] font-semibold text-white">
                  PDF
                </span>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white">
                  Word
                </span>
                <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-semibold text-[#FF6A3D]">
                  TXT
                </span>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              3. Download your resume in PDF or Word
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xs">
              Export your completed resume as PDF, Word, or text and share it
              instantly with recruiters, job portals, or via email.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6A3D]">
            Build my resume now
          </button>
        </div>
      </div>
    </section>
  );
}
