'use client';

const templates = [
  {
    name: "Modern Professional",
    tag: "Most popular",
    image: "/images/templates/template-1.png",
  },
  {
    name: "Clean Corporate",
    tag: "ATS-ready",
    image: "/images/templates/template-2.png",
  },
  {
    name: "Balanced Timeline",
    tag: "Best for fresher",
    image: "/images/templates/template-3.png",
  },
  {
    name: "Creative Edge",
    tag: "For designers",
    image: "/images/templates/template-4.png",
  },
  {
    name: "Executive Classic",
    tag: "For senior roles",
    image: "/images/templates/template-5.png",
  },
];

export default function TemplatesSection() {
  return (
    <section className="bg-gradient-to-b from-[#FFEAD8] to-[#FFF7F0] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading + subheading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Pick a template and build your resume in minutes!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700">
            Choose from expertly designed, ATS-friendly layouts that match your
            profession, seniority level, and personal style.
          </p>
        </div>

        {/* Templates row */}
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:pb-0">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="snap-center md:snap-none group relative flex-shrink-0 basis-3/4 sm:basis-1/2 md:basis-auto"
            >
              <div className="rounded-[28px] bg-[#FFD1AC]/80 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-transform duration-200 group-hover:-translate-y-3 group-hover:shadow-[0_26px_60px_rgba(15,23,42,0.26)]">
                <div className="rounded-[22px] bg-white p-2">
                  <div className="h-64 w-full overflow-hidden rounded-[18px] bg-slate-50">
                    <img
                      src={tpl.image}
                      alt={tpl.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* label pill */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-900 truncate">
                      {tpl.name}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] px-4 py-1.5 text-[11px] font-semibold text-white">
                    {tpl.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom features */}
        <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl bg-white/90 p-6 shadow-sm">
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-lg">
              ✅
            </div>
            <p className="text-sm font-semibold text-slate-900">
              ATS-friendly designs
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Built to pass applicant tracking systems and recruiter scans.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-sm">
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-lg">
              🎨
            </div>
            <p className="text-sm font-semibold text-slate-900">
              Fully customizable
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Adjust colors, fonts, sections in just a few clicks.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-sm">
            <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-lg">
              📄
            </div>
            <p className="text-sm font-semibold text-slate-900">
              One-click export
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Download as PDF or DOCX, ready to send to employers.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#FF6A3D] bg-white px-6 py-2.5 text-sm font-semibold text-[#FF3E00] shadow-sm transition-colors hover:bg-[#FFE1D0]">
            Browse all templates
          </button>
        </div>
      </div>
    </section>
  );
}