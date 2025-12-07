"use client";

const FEATURES = [
  {
    id: "designs",
    title: "Modern, professional designs",
    subtitle: "Stand out in every job application",
    description:
      "Choose from clean, recruiter-approved resume layouts for every job level and industry. From creative to corporate, every template is designed to look great on screen and on paper.",
  },
  {
    id: "ats",
    title: "ATS-friendly resumes",
    subtitle: "Built to pass applicant tracking systems",
    description:
      "Our resume builder automatically structures your resume so it's easy for ATS software to read. Use the right headings, formatting and keywords so your application never gets filtered out.",
  },
  {
    id: "ai-content",
    title: "AI-powered resume content",
    subtitle: "Stronger bullet points in seconds",
    description:
      "Get AI-generated suggestions for summaries, achievements and job descriptions based on your role, skills and experience so you can write a professional resume faster.",
  },
  {
    id: "guidance",
    title: "Step-by-step guidance",
    subtitle: "Never wonder what to write next",
    description:
      "Follow clear prompts for every resume section. Helpful tips from hiring experts show you what employers expect, line by line.",
  },
  {
    id: "cover-letter",
    title: "Matching cover letter builder",
    subtitle: "Complete your application in one place",
    description:
      "Create a matching cover letter with coordinated design and content suggestions. Keep your personal brand consistent across all your job applications.",
  },
  {
    id: "unlimited",
    title: "Unlimited resumes & downloads",
    subtitle: "Create versions for every job",
    description:
      "Make as many resumes as you need, test different formats and download them as PDF or Word whenever you're ready to apply.",
  },
];

export default function WhyUseBuilderSection() {
  return (
    <section
      id="why-resume-builder"
      className="relative bg-gradient-to-b from-[#FDF7F2] via-[#FFF9F4] to-[#FFEDE2] py-16 sm:py-20"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Use Our{" "}
            <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF3E00] bg-clip-text text-transparent">
              Online Resume Builder
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
            Build a job-winning, ATS-friendly resume faster with AI-powered
            content, expert-approved templates and tools that work together.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-10 sm:space-y-12">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                flex flex-col items-center gap-6
                md:grid md:grid-cols-2 md:gap-10
                ${index % 2 === 1 ? "md:flex-row-reverse md:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Illustration placeholder / card */}
              <div className="w-full">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-[28px] bg-white/90 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                  <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#FFB488]/25 blur-2xl" />
                  <div className="absolute -right-16 bottom-0 h-24 w-24 rounded-full bg-[#FF8A65]/25 blur-2xl" />
                  <div className="relative flex h-40 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FFE0D0] via-[#FFF3EA] to-[#FDF7FF] p-3">
                    {/* Fake mini UI that hints at the feature */}
                    <div className="grid h-full w-full grid-cols-[0.35fr,0.65fr] gap-3 rounded-xl bg-white/90 p-3">
                      <div className="rounded-lg bg-slate-100" />
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-slate-200" />
                        <div className="h-2 w-3/4 rounded-full bg-slate-200" />
                        <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                        <div className="mt-2 flex gap-2">
                          <div className="h-6 flex-1 rounded-full bg-[#FFEEE2]" />
                          <div className="h-6 flex-1 rounded-full bg-slate-100" />
                        </div>
                      </div>
                    </div>

                    {/* small decorative badge */}
                    <div className="absolute -bottom-3 right-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#FF6A3D] shadow">
                      Resume builder
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full max-w-md">
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {feature.subtitle}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
