import React from "react";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";

export default function Terms() {
  const sections = [
    {
      icon: "01",
      title: "Master Services & Commercial Structure",
      body: "ETDOX provides technical design, engineering, and managed operations under five engagement structures: Project-Based, Dedicated Team, Managed Technology, SaaS, and Equity-Based engagements. Specific milestones, deliverables, and service levels are defined in mutually executed Statements of Work (SOW).",
    },
    {
      icon: "02",
      title: "7-Day Free Trial Terms",
      body: "The 7-Day Free Trial is designed to allow prospective clients to evaluate ETDOX's engineering speed, communication, and code quality. Trial projects focus on a discrete, self-contained technical deliverable mutually agreed upon in writing. Trial availability is subject to technical review and engineering pod capacity.",
    },
    {
      icon: "03",
      title: "Free Prototype Terms",
      body: "Initial prototype development is offered free for qualifying projects subject to technical scope verification and future development eligibility. Deliverables include architectural spikes or interactive prototypes as defined during technical discovery.",
    },
    {
      icon: "04",
      title: "Equity-Based Engagements",
      body: "For select early-stage startups entering equity-based arrangements, all commercial terms, intellectual property ownership, milestone deliveries, and legal governance are agreed in formal written contracts prior to code development.",
    },
    {
      icon: "05",
      title: "Governing Law",
      body: (
        <>
          These terms are governed by standard international commercial
          engineering practices. Contact{" "}
          <span className="font-mono text-[#CD1C18]">contracts@etdox.com</span>{" "}
          for contractual inquiries.
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Legal • Delivery framework"
        title={
          <>
            Terms of service.
          </>
        }
        description="The commercial and delivery framework governing ETDOX engagements — from a single trial sprint to managed technology operations."
        breadcrumbs={[{ label: "Terms of Service" }]}
        meta="Revised: 2026 • Commercial & delivery framework"
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
            Submitting a technical specification or trial request constitutes
            acceptance of these terms of engagement.
          </p>
        </div>
      </section>
    </div>
  );
}