import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, GitBranch, Zap } from "lucide-react";
import technologyCity from "../assets/technology-city.png";
import InteractivePillars from "../components/home/InteractivePillars";
import TrialProcessSection from "../components/home/TrialProcessSection";
import PrototypeOfferSection from "../components/home/PrototypeOfferSection";
import ScaleTimelineSection from "../components/home/ScaleTimelineSection";
import MultidisciplinarySection from "../components/home/MultidisciplinarySection";
import FinalCtaSection from "../components/home/FinalCtaSection";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="bg-[#FFF9F7]">
      {/* 1. HERO — compact editorial lock-up + runtime diagram */}
      <section className="relative overflow-hidden bg-[#FFF9F7] border-b border-[#38000A]/10">
        {/* Top rule */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CD1C18] via-[#9B1313] to-transparent" />
        <div className="absolute inset-0 bg-tech-dots opacity-50 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-[#FFA896]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-14 sm:py-16 lg:py-24">
            {/* Lock-up */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FFA896] text-[#9B1313] text-xs font-mono font-semibold tracking-widest uppercase mb-7 animate-rise anim-1">
                <span className="w-2 h-2 rounded-full bg-[#CD1C18] animate-pulse-slow" />
                <span>AI-Native Technology Partner</span>
              </div>

              <h1 className="font-display font-extrabold tracking-[-0.02em] text-[#38000A] leading-[1.02] text-[2.7rem] sm:text-[3.6rem] xl:text-[4.4rem] animate-rise anim-2">
                We build{" "}
                <span className="block text-[#CD1C18]">intelligent</span>
                <span className="relative inline-block">
                  technology.
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-3 text-[#FFA896]"
                    viewBox="0 0 260 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M3 9C70 2 190 2 257 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-[#4A2A31] leading-relaxed max-w-xl animate-rise anim-3">
                ETDOX designs, builds and manages software, AI, data and cloud
                systems for startups and enterprises — provable in a seven-day
                sprint before you commit.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-rise anim-4">
                <Button
                  to="/contact?intent=project"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full sm:w-auto px-7 py-4 shadow-chili-glow font-bold"
                >
                  Start a Project
                </Button>
                <Button
                  to="/contact?intent=trial"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Try Us for 7 Days
                </Button>
              </div>

              <p className="mt-5 text-xs font-mono text-[#7A5A60] flex items-center gap-2 animate-rise anim-5">
                <ShieldCheck className="w-4 h-4 text-[#CD1C18]" />
                No lock-in — you review the code before any commitment.
              </p>
            </div>

            {/* Technology city visual — seamless, bleeds past its column and dissolves into the hero background */}
            <div className="lg:col-span-6 xl:col-span-6 animate-rise anim-3">
              <div className="tech-city-fade relative -mr-6 sm:-mr-12 lg:-mr-16 xl:-mr-28 -mt-3 sm:-mt-6 lg:mt-0">
                <img
                  src={technologyCity}
                  alt="ETDOX technology city — cloud infrastructure, dashboards, data visualization and connected systems"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="w-full h-auto block select-none pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Signal band */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 border-t border-[#38000A]/10 py-5 gap-y-4">
            {[
              { icon: Zap, label: "7-Day Free Trial", sub: "Evaluate production velocity" },
              { icon: Sparkles, label: "1 Free Prototype", sub: "For suitable projects", },
              { icon: GitBranch, label: "Full IP Handover", sub: "Source, docs, ownership" },
              { icon: ShieldCheck, label: "24H Architecture Review", sub: "On qualifying submissions" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={`flex items-center gap-3 px-4 sm:px-6 ${i % 2 === 1 ? "border-l border-[#38000A]/10" : ""} ${i > 0 ? "lg:border-l lg:border-[#38000A]/10" : ""}`}>
                  <span className="hidden sm:flex w-9 h-9 rounded-lg bg-[#FFA896]/40 border border-[#FFA896] text-[#9B1313] items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] sm:text-xs font-bold text-[#38000A] leading-tight">{item.label}</p>
                    <p className="text-[10px] sm:text-[11px] text-[#7A5A60] leading-tight truncate">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <InteractivePillars />

      {/* 3. TRY US FOR 7 DAYS */}
      <TrialProcessSection />

      {/* 4. YOUR FIRST PROTOTYPE — ON US* */}
      <PrototypeOfferSection />

      {/* 5. SMALL PROJECT → ENTERPRISE */}
      <ScaleTimelineSection />

      {/* 6. ONE TEAM FOR YOUR TECHNOLOGY */}
      <MultidisciplinarySection />

      {/* 7. FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}