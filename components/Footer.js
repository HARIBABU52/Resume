// components/Footer.tsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative border-t border-orange-100 bg-gradient-to-b from-[#FFF4EC] via-[#FFF0E4] to-[#FFE1CC] text-slate-800"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-white/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-6 sm:pt-12 sm:pb-8">
        {/* Top CTA */}
        <div className="mb-10 flex flex-col gap-4 rounded-3xl bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900">
              Ready to build your next resume?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Create an ATS-friendly, professional resume in minutes with AI-powered
              suggestions and modern templates.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-end">
            <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition-transform hover:scale-[1.03]">
              Start building for free
            </button>
            <button className="w-full sm:w-auto rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-[#FF6A3D] hover:bg-orange-50">
              View resume templates
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-8 border-t border-orange-100 pt-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand + summary */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6A3D] to-[#FF3E00] text-white text-sm font-bold">
                CV
              </div>
              <span className="text-base font-semibold text-slate-900">
                YourResume.ai
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
              YourResume.ai helps job seekers create polished, ATS-friendly
              resumes and cover letters using AI, proven templates and simple,
              step-by-step guidance.
            </p>

            {/* social icons */}
            <div className="flex justify-center gap-3 sm:justify-start">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm hover:text-[#FF6A3D]"
                aria-label="Visit us on Twitter"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M19.95 7.04c.01.17.01.35.01.52 0 5.35-4.07 11.52-11.52 11.52-2.29 0-4.41-.67-6.19-1.82.32.04.64.06.98.06a8.13 8.13 0 0 0 5.04-1.74 4.06 4.06 0 0 1-3.79-2.82c.25.04.5.07.77.07.37 0 .73-.05 1.08-.14A4.05 4.05 0 0 1 3.2 6.92v-.05c.55.31 1.18.49 1.84.51A4.04 4.04 0 0 1 2.8 4.2c0-.75.2-1.44.56-2.04a11.54 11.54 0 0 0 8.38 4.25 4.58 4.58 0 0 1-.1-.93A4.04 4.04 0 0 1 15.69 1a3.96 3.96 0 0 1 2.96 1.28 7.95 7.95 0 0 0 2.57-.98 4.03 4.03 0 0 1-1.78 2.23 8.03 8.03 0 0 0 2.32-.64 8.66 8.66 0 0 1-2.21 2.15z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm hover:text-[#FF6A3D]"
                aria-label="Visit us on LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.06h4.4V23H.3V8.06zM8.48 8.06h4.22v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.77V23h-4.4v-7.18c0-1.71-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V23h-4.4V8.06z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm hover:text-[#FF6A3D]"
                aria-label="Visit us on Instagram"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.25-7.96a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
                  <path d="M17.7 3H6.3A3.31 3.31 0 0 0 3 6.3v11.4A3.31 3.31 0 0 0 6.3 21h11.4a3.31 3.31 0 0 0 3.3-3.3V6.3A3.31 3.31 0 0 0 17.7 3zm1.9 14.7a1.9 1.9 0 0 1-1.9 1.9H6.3a1.9 1.9 0 0 1-1.9-1.9V6.3a1.9 1.9 0 0 1 1.9-1.9h11.4a1.9 1.9 0 0 1 1.9 1.9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="space-y-3 text-center text-sm sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Product
            </h3>
            <ul className="space-y-1.5">
              <li><a href="#hero" className="hover:text-[#FF6A3D]">Resume builder</a></li>
              <li><a href="#templates" className="hover:text-[#FF6A3D]">Resume templates</a></li>
              <li><a href="#ai-experience" className="hover:text-[#FF6A3D]">AI resume writer</a></li>
              <li><a href="#resume-examples" className="hover:text-[#FF6A3D]">Resume examples</a></li>
              <li><a href="#pricing" className="hover:text-[#FF6A3D]">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-center text-sm sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Resources
            </h3>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-[#FF6A3D]">Resume writing guide</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Cover letter tips</a></li>
              <li><a href="#faq" className="hover:text-[#FF6A3D]">FAQs</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Blog</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Help center</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-center text-sm sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Company
            </h3>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-[#FF6A3D]">About us</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Contact</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Privacy policy</a></li>
              <li><a href="#" className="hover:text-[#FF6A3D]">Terms of use</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-orange-100 pt-4 text-[11px] text-slate-500 sm:flex-row sm:text-xs">
          <p>© {year} YourResume.ai. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Built for job seekers who want faster, better applications.
          </p>
        </div>
      </div>
    </footer>
  );
}
