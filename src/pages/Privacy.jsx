import React from "react";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";

export default function Privacy() {
  const sections = [
    {
      icon: "01",
      title: "Information We Collect",
      body: "When you submit technical specifications, request a 7-day trial, or commission an architectural prototype through ETDOX, we collect contact information (name, work email, phone number, company name) and technical requirements necessary to assess project scope and resource allocation.",
    },
    {
      icon: "02",
      title: "Intellectual Property & Confidentiality",
      body: "All technical architectures, code submissions, and proprietary information shared with ETDOX are treated under strict confidentiality. We do not use customer code, data lakes, or proprietary datasets to train publicly available models or external third-party algorithms.",
    },
    {
      icon: "03",
      title: "Data Security & Storage",
      body: "We implement enterprise-grade technical and organizational security measures, including AES-256 encryption at rest and TLS 1.3 in transit, to protect client information from unauthorized access or disclosure.",
    },
    {
      icon: "04",
      title: "Contact Us",
      body: (
        <>
          For privacy inquiries or bilateral NDA requests, contact our legal team
          at <span className="font-mono text-[#CD1C18]">legal@etdox.com</span>.
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Legal • Data protection"
        title={
          <>
            Privacy policy.
          </>
        }
        description="How ETDOX collects, protects, and uses technical information shared throughout discovery, trialing, and delivery engagements."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        meta="Effective date: January 1, 2026 • ETDOX technical operations"
      />

      {/* Sections */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#38000A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal>
            <div className="bg-[#FFF9F7] rounded-2xl border border-[#38000A]/10 overflow-hidden">
              {sections.map((s, idx) => (
                <div
                  key={s.title}
                  className={`p-6 sm:p-10 ${idx !== 0 ? "border-t border-[#38000A]/10" : ""}`}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-sm font-black text-[#CD1C18] bg-[#CD1C18]/8 border border-[#CD1C18]/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {s.icon}
                    </span>
                    <div className="space-y-2">
                      <h2 className="font-display font-bold text-lg sm:text-xl text-[#38000A]">
                        {s.title}
                      </h2>
                      <p className="text-sm text-[#4A2A31] leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-[11px] font-mono text-[#7A5A60] leading-relaxed text-center pt-2">
            By engaging ETDOX, you acknowledge having read and understood this
            privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}