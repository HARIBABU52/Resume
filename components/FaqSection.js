"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is an online resume builder?",
    answer:
      "An online resume builder is a web tool that helps you create a professional resume using pre-made templates, guided steps, and AI suggestions. You don't need design skills or formatting knowledge to build a job-ready resume.",
  },
  {
    question: "Are the resumes created here ATS-friendly?",
    answer:
      "Yes. Every template is designed to work with applicant tracking systems (ATS). We use clear headings, proper structure and keyword-friendly formatting so your resume can be scanned and parsed correctly.",
  },
  {
    question: "Can I download my resume as PDF or Word?",
    answer:
      "You can download your resume in multiple formats, including PDF and Word (.docx). This makes it easy to upload your resume to job portals, email it to recruiters or print it for interviews.",
  },
  {
    question: "How does the AI resume assistant work?",
    answer:
      "Our AI analyzes your role, skills and experience to suggest improved bullet points, summaries and keywords. You stay in control—edit, rewrite or accept suggestions with one click.",
  },
  {
    question: "Is there a free version of the resume builder?",
    answer:
      "Yes. You can start for free, create and edit your resume, and test different templates. Premium plans unlock additional designs, advanced AI features and unlimited downloads.",
  },
  {
    question: "Can I create more than one resume?",
    answer:
      "Absolutely. You can create multiple versions of your resume for different roles, industries or locations, and switch between templates without losing your content.",
  },
  {
    question: "Will my data and resumes be kept private?",
    answer:
      "We take privacy seriously. Your data is stored securely and is never sold to third parties. You can delete your account and resumes at any time from your profile settings.",
  },
  {
    question: "Do you offer support if I get stuck?",
    answer:
      "Yes. Our help center includes guides and examples, and you can contact our support team directly if you need assistance with your resume or account.",
  },
];

function FaqItemRow({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white/90 shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
      >
        <span className="text-sm font-semibold text-slate-900 sm:text-base">
          {item.question}
        </span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-transform ${
            isOpen
              ? "rotate-45 border-orange-300 bg-orange-50 text-[#FF6A3D]"
              : "border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-orange-50 px-4 pb-4 pt-1 text-sm text-slate-600 sm:px-5">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-[#FFF9F4] via-[#FFF4EC] to-[#FFE3D0] py-16 sm:py-20"
    >
      {/* soft background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-600 shadow-sm backdrop-blur">
            FAQ
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Find quick answers about our online resume builder, AI features and
            downloads. Still unsure? You can always reach out to our support
            team.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((item, index) => (
            <FaqItemRow
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
          Can't find the answer you're looking for?{" "}
          <button className="font-semibold text-[#FF6A3D] hover:text-[#FF3E00]">
            Contact our support team
          </button>
          .
        </div>
      </div>
    </section>
  );
}
