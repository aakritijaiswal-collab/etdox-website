import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Sparkles, FileText, ChevronRight, Scale, Users, Layers, Server } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { deliveryProcess, engagementModels, trialOfferData, prototypeOfferData } from "../data/howWeWorkData";

export default function HowWeWork() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const modelIcons = {
    "project-based": FileText,
    "dedicated-team": Users,
    "managed-technology": Server,
    "saas": Layers,
    "equity-based": Scale,
  };

  return (
    <div className="bg-white">
      {/* Header Banner (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "HOW WE WORK" }]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              ENGINEERING DELIVERY FRAMEWORK
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Predictable, Transparent Technical Delivery
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From our 7-day evaluation sprint to long-term managed technology operations, our delivery framework is designed to eliminate risk and prove value with working code.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact?intent=trial" variant="coral" size="sm">
                START 7-DAY TRIAL
              </Button>
              <Button to="/contact?intent=prototype" variant="outlineOnDark" size="sm">
                REQUEST FREE PROTOTYPE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. The 7-Step Delivery Process */}
      <section id="process" className="py-24 bg-white border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase tracking-wider block mb-2">
              LIFECYCLE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              The 7-Phase Delivery Process
            </h2>
            <div className="mt-2 font-mono text-xs text-[#CD1C18] uppercase tracking-wider">
              DISCOVER → PLAN → PROTOTYPE → 7-DAY TRIAL → BUILD → DEPLOY → MANAGE
            </div>
          </div>

          <div className="space-y-6">
            {deliveryProcess.map((phase, idx) => (
              <div
                key={phase.step}
                className="bg-[#FBFBFC] border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-[#CD1C18] hover:bg-white hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#38000A] text-[#FFA896] flex items-center justify-center font-mono text-lg font-bold shrink-0 shadow-sm">
                    {phase.step}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#CD1C18] font-bold">
                      PHASE {phase.name}
                    </span>
                    <h3 className="font-display font-bold text-xl text-gray-950">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  {phase.step === "03" ? (
                    <Link
                      to="/how-we-work#prototype"
                      className="text-xs font-mono font-bold text-[#CD1C18] hover:underline flex items-center gap-1"
                    >
                      <span>Prototype Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : phase.step === "04" ? (
                    <Link
                      to="/how-we-work#trial"
                      className="text-xs font-mono font-bold text-[#CD1C18] hover:underline flex items-center gap-1"
                    >
                      <span>Trial Terms</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: 7-Day Free Trial */}
      <section id="trial" className="py-24 bg-[#38000A] text-white border-b border-[#5A0B19] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,168,150,0.15)] text-[#FFA896] text-xs font-mono font-semibold uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>HANDS-ON EVALUATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              The 7-Day Free Trial
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              {trialOfferData.headline} {trialOfferData.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trialOfferData.steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#240006] p-6 rounded-xl border border-[#5A0B19] space-y-3"
              >
                <span className="font-mono text-2xl font-black text-[#CD1C18]">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-base text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scope and Eligibility Notice */}
          <div className="bg-[#170004] p-6 sm:p-8 rounded-2xl border border-[#5A0B19] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FFA896]">
              <ShieldCheck className="w-4 h-4 text-[#CD1C18]" />
              <span>Trial Scope & Eligibility Guidelines</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-4xl">
              {trialOfferData.eligibility}
            </p>
            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <Button to="/contact?intent=trial" variant="primary" size="md" icon={ArrowRight}>
                START 7-DAY TRIAL →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: Free Prototype Offering */}
      <section id="prototype" className="py-24 bg-white border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FBFBFC] rounded-3xl border border-gray-200 p-8 sm:p-14 space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase tracking-wider">
                {prototypeOfferData.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
                {prototypeOfferData.headline}
              </h2>
              <p className="text-xl font-medium text-[#CD1C18]">
                {prototypeOfferData.tagline}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {prototypeOfferData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#CD1C18]" />
                <h3 className="font-display font-bold text-base text-gray-900">
                  Architectural Spike
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Verify technical feasibility, external API integrations, or vector retrieval accuracy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#CD1C18]" />
                <h3 className="font-display font-bold text-base text-gray-900">
                  Interactive Prototype
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Validate critical UX interactions and interface responsiveness with stakeholders.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#CD1C18]" />
                <h3 className="font-display font-bold text-base text-gray-900">
                  Zero Upfront Outlay
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Evaluate team speed and code rigor before entering into formal contracts.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs font-mono text-gray-500 max-w-xl">
                {prototypeOfferData.termsNotice}
              </p>
              <Button to="/contact?intent=prototype" variant="primary" size="md" icon={ArrowRight}>
                REQUEST FREE PROTOTYPE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 5 Engagement Models */}
      <section id="models" className="py-24 bg-[#F8F9FA] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold block mb-2">
              COMMERCIAL STRUCTURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-950 tracking-tight">
              Five Engagement Models
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Whether you need fixed-scope delivery, an elastic dedicated pod, ongoing managed technology, reusable SaaS, or equity-based partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model) => {
              const Icon = modelIcons[model.id] || FileText;
              const isSpecial = model.id === "equity-based";
              return (
                <div
                  key={model.id}
                  className={`rounded-2xl p-8 border flex flex-col justify-between transition-all duration-200 ${
                    isSpecial
                      ? "bg-[#38000A] text-white border-[#CD1C18] shadow-xl"
                      : "bg-white text-gray-900 border-gray-200 shadow-sm hover:border-[#CD1C18]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isSpecial ? "bg-[#CD1C18] text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#FFA896] font-bold">
                        {isSpecial ? "SELECT STARTUPS" : "ENGAGEMENT"}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl mb-1">
                        {model.name}
                      </h3>
                      <p className={`text-xs font-mono font-medium ${isSpecial ? "text-[#FFA896]" : "text-[#CD1C18]"}`}>
                        {model.tagline}
                      </p>
                    </div>

                    <p className={`text-xs leading-relaxed ${isSpecial ? "text-gray-300" : "text-gray-600"}`}>
                      {model.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSpecial ? "text-gray-400" : "text-gray-400"}`}>
                        MODEL HIGHLIGHTS:
                      </span>
                      {model.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSpecial ? "text-[#FFA896]" : "text-[#CD1C18]"}`} />
                          <span className={isSpecial ? "text-gray-200" : "text-gray-700"}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/40">
                    <span className={`text-[11px] block mb-3 ${isSpecial ? "text-gray-400" : "text-gray-500"}`}>
                      <strong>Best for:</strong> {model.bestFor}
                    </span>
                    <Button
                      to={`/contact?intent=${model.id === "equity-based" ? "consultation" : "project"}`}
                      variant={isSpecial ? "coral" : "primary"}
                      size="sm"
                      className="w-full text-center"
                    >
                      INQUIRE ABOUT {model.name.toUpperCase()}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#170004] text-white border-t border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Ready to initiate technical collaboration?
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Choose between starting a full project, testing our speed in a 7-day sprint, or submitting your specification for a free prototype.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              START A REQUIREMENT
            </Button>
            <Button to="/contact?intent=trial" variant="outlineOnDark">
              START 7-DAY TRIAL
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
