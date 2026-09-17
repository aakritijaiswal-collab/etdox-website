import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Button from "../common/Button";
import { trialOfferData } from "../../data/howWeWorkData";

export default function TrialProcessSection() {
  return (
    <section className="py-24 bg-[#38000A] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#CD1C18]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#9B1313]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,168,150,0.15)] border border-[rgba(255,168,150,0.3)] text-[#FFA896] text-xs font-mono font-semibold mb-4 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>7-Day Trial Model</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Don't take our word for it. <br className="hidden sm:inline" />
            <span className="text-[#FFA896]">Test our work.</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Experience our engineering velocity, communication rigor, and code craftsmanship before committing to a long-term contract.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {trialOfferData.steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-[#240006]/80 border border-[#5A0B19] rounded-xl p-6 relative group hover:border-[#FFA896]/50 hover:bg-[#240006] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-black text-[#CD1C18] group-hover:text-[#FFA896] transition-colors">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#FFA896]/70 uppercase">
                  PHASE 0{idx + 1}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#FFA896] transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>

              {/* Progress Connector on desktop */}
              {idx < trialOfferData.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-[#38000A] border border-[#5A0B19] flex items-center justify-center text-[#FFA896]">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA & Scope / Eligibility Callout */}
        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#170004]/60 p-8 rounded-2xl border border-[#5A0B19]/50">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFA896] font-semibold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#CD1C18]" />
              <span>Scope & Eligibility Notice</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {trialOfferData.eligibility}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Button
              to="/contact?intent=trial"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto shadow-chili-glow"
            >
              START 7-DAY TRIAL →
            </Button>
            <Link
              to="/how-we-work#trial"
              className="text-xs font-mono text-gray-300 hover:text-[#FFA896] underline underline-offset-4 py-2"
            >
              Read Trial Guidelines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
