import React from "react";
import { ShieldCheck, Clock, Sparkles, Phone, Mail, FileText, Wrench, Layers } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import LeadQualificationForm from "../components/forms/LeadQualificationForm";

export default function Contact() {
  const intent = new URLSearchParams(window.location.search).get("intent");

  const pathway = (() => {
    switch (intent) {
      case "trial":
        return { icon: Wrench, title: "7-Day Free Trial", desc: "Test our speed with a discrete, real-world technical task in one week." };
      case "prototype":
        return { icon: FileText, title: "Free Prototype", desc: "Initial architectural spike or interactive UX prototype for qualifying projects." };
      default:
        return { icon: Layers, title: "Full Project Delivery", desc: "Dedicated multidisciplinary pods or milestone-based contracts, scoped to your stack." };
    }
  })();

  const PathwayIcon = pathway.icon;

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Direct technical engagement"
        title={
          <>
            Start with a{" "}
            <span className="text-[#CD1C18]">requirement.</span>
          </>
        }
        description="Choose a project, 7-day trial, free prototype, or consultation. Connect directly with our systems architects and delivery leads."
        breadcrumbs={[{ label: "Contact" }]}
        index="08"
      />

      {/* Main */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Form */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="bg-[#FFF9F7] border border-[#38000A]/10 rounded-2xl p-6 sm:p-10">
                  <div className="border-b border-[#38000A]/10 pb-6 mb-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CD1C18]">
                      Technical lead qualification
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#38000A] mt-1 tracking-tight">
                      Specify Your Technical Scope
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A2A31] mt-1 leading-relaxed">
                      Please specify your technical requirements to receive an
                      architecture assessment and delivery timeline.
                    </p>
                  </div>

                  <LeadQualificationForm />
                </div>
              </Reveal>
            </div>

            {/* Right info column */}
            <div className="lg:col-span-4 space-y-5">
              <Reveal delay={1}>
                <div className="bg-[#38000A] text-white p-6 rounded-2xl border border-[#5A0B19] space-y-4 shadow-card-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#CD1C18] text-white flex items-center justify-center">
                      <PathwayIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#FFA896] uppercase tracking-widest font-bold block">
                        Selected pathway
                      </span>
                      <strong className="font-display text-base block">{pathway.title}</strong>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {pathway.desc}
                  </p>
                  <div className="pt-1 border-t border-[#5A0B19] space-y-2">
                    <span className="text-[10px] font-mono text-[#FFA896] uppercase tracking-widest font-bold block">
                      Engagement pathways
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <Wrench className="w-3.5 h-3.5 text-[#FFA896] shrink-0 mt-0.5" />
                        <span className="text-gray-300">7-Day Free Trial — test speed on a discrete task.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="w-3.5 h-3.5 text-[#FFA896] shrink-0 mt-0.5" />
                        <span className="text-gray-300">Free Prototype — avoid costly incorrect builds.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#FFA896] shrink-0 mt-0.5" />
                        <span className="text-gray-300">Full Project Delivery — multidisciplinary pods.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={2}>
                <div className="bg-[#FFF9F7] p-6 rounded-2xl border border-[#38000A]/10 space-y-3">
                  <span className="text-xs font-mono text-[#CD1C18] uppercase tracking-wider font-bold">
                    Client commitments
                  </span>
                  <ul className="text-xs text-[#4A2A31] space-y-2.5">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                      <span>Mutual Non-Disclosure Agreement (NDA) before deep technical exchange</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                      <span>Architectural review response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                      <span>100% intellectual property (IP) assignment upon delivery</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={3}>
                <div className="bg-[#FFF9F7] p-6 rounded-2xl border border-[#38000A]/10 space-y-3 text-xs">
                  <span className="font-mono text-[#7A5A60] uppercase tracking-wider font-bold block">
                    Direct communications
                  </span>
                  <div className="space-y-2 text-[#4A2A31]">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#CD1C18]" />
                      <span className="font-mono">contact@etdox.com</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#CD1C18]" />
                      <span className="font-mono">+1 (800) ETDOX-AI</span>
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#38000A]/10 text-[11px] text-[#7A5A60] leading-relaxed">
                    Architecture reviews are scheduled within 24 hours of a
                    qualifying submission.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}