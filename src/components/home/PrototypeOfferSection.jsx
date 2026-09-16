import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Layers, CheckCircle2, ShieldAlert } from "lucide-react";
import Button from "../common/Button";
import { prototypeOfferData } from "../../data/howWeWorkData";

export default function PrototypeOfferSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#38000A] via-[#240006] to-[#170004] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-[#5A0B19]">
          {/* Subtle geometric grid background */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#CD1C18]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD1C18]/20 border border-[#FFA896]/30 text-[#FFA896] text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{prototypeOfferData.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                {prototypeOfferData.headline}
              </h2>

              <p className="text-xl sm:text-2xl font-medium text-[#FFA896]">
                {prototypeOfferData.tagline}
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {prototypeOfferData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA896] shrink-0" />
                  <span>Architecture Spike</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA896] shrink-0" />
                  <span>Clickable Flow / API PoC</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA896] shrink-0" />
                  <span>Zero Initial Outlay</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  to="/contact?intent=prototype"
                  variant="coral"
                  size="lg"
                  icon={ArrowRight}
                  className="shadow-coral-glow"
                >
                  REQUEST FREE PROTOTYPE
                </Button>
                <Link
                  to="/how-we-work#prototype"
                  className="text-xs font-mono text-gray-400 hover:text-white underline underline-offset-4 py-2"
                >
                  View Eligibility Requirements
                </Link>
              </div>

              <p className="text-[11px] font-mono text-gray-400 pt-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#FFA896] shrink-0" />
                <span>{prototypeOfferData.termsNotice}</span>
              </p>
            </div>

            {/* Right side visual badge / card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-[#38000A]/80 border border-[#5A0B19] rounded-2xl p-6 text-center space-y-4 backdrop-blur-md">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#CD1C18] flex items-center justify-center text-white shadow-chili-glow">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Rapid Prototype Spike
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Evaluate real code quality and working UX before entering contractual agreements.
                </p>
                <div className="py-2 border-y border-[#5A0B19] text-xs font-mono text-[#FFA896]">
                  TURNOVER: 3-5 BUSINESS DAYS
                </div>
                <span className="text-[10px] font-mono text-gray-400 block">
                  Subject to technical pod bandwidth & scope validation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
