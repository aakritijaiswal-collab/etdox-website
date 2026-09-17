import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileText, ChevronRight, Scale, Users, Layers, Server, Lightbulb, Terminal, GitBranch, Wrench, Rocket, Activity } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { NodeField, PipelineGraphic } from "../components/graphics/ChiliArtworks";
import { deliveryProcess, engagementModels, trialOfferData, prototypeOfferData } from "../data/howWeWorkData";

export default function HowWeWork() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const phaseIcons = [Terminal, GitBranch, Lightbulb, Clock, Rocket, Wrench, Activity];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Engineering delivery framework"
        title={
          <>
            Predictable, transparent{" "}
            <span className="text-[#CD1C18]">technical delivery.</span>
          </>
        }
        description="From our 7-day evaluation sprint to long-term managed technology operations, our delivery framework is designed to eliminate risk and prove value with working code."
        breadcrumbs={[{ label: "How We Work" }]}
        index="07"
        actions={
          <>
            <Button to="/contact?intent=trial" variant="primary" size="md">
              Start 7-day trial
            </Button>
            <Button to="/contact?intent=prototype" variant="outline" size="md">
              Request free prototype
            </Button>
          </>
        }
      />

      {/* 1. The 7-Step Delivery Process */}
      <section id="process" className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="eyebrow text-[#CD1C18] mb-5">
                  <span>01 — Lifecycle roadmap</span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                  The 7-phase delivery process
                </h2>
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-[#9B1313] uppercase tracking-wider bg-[#FFF2EC] border border-[#FFA896] px-4 py-2.5 rounded-lg font-bold">
                Discover → Plan → Prototype → Trial → Build → Deploy → Manage
              </div>
            </div>
          </Reveal>

          {/* Process pipeline graphic */}
          <Reveal>
            <div className="mb-12 bg-[#FFF9F7] border border-[#38000A]/10 rounded-2xl p-4 sm:p-8">
              <PipelineGraphic className="w-full h-auto" />
            </div>
          </Reveal>

          <div className="space-y-4">
            {deliveryProcess.map((phase, idx) => {
              const PhaseIcon = phaseIcons[idx] || Terminal;
              return (
                <Reveal key={phase.step}>
                  <div className="group bg-[#FFF9F7] border border-[#38000A]/10 rounded-xl p-6 sm:p-7 hover:border-[#CD1C18]/40 hover:bg-white hover:shadow-card-subtle transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-col items-center gap-1.5 shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#38000A] text-[#FFA896] flex items-center justify-center shadow-card-subtle group-hover:bg-[#CD1C18] transition-colors">
                          <PhaseIcon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#CD1C18]">{phase.step}</span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#9B1313] font-bold">
                          Phase {phase.name}
                        </span>
                        <h3 className="font-display font-bold text-xl text-[#38000A]">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-[#4A2A31] max-w-3xl leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {phase.step === "03" ? (
                        <Link
                          to="/how-we-work#prototype"
                          className="text-xs font-mono font-bold text-[#CD1C18] hover:text-[#9B1313] flex items-center gap-1 transition-colors"
                        >
                          <span>Prototype Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : phase.step === "04" ? (
                        <Link
                          to="/how-we-work#trial"
                          className="text-xs font-mono font-bold text-[#CD1C18] hover:text-[#9B1313] flex items-center gap-1 transition-colors"
                        >
                          <span>Trial Terms</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: 7-Day Free Trial (dark) */}
      <section id="trial" className="py-24 lg:py-32 bg-[#38000A] text-white border-b border-[#38000A]/20 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />
        <NodeField tone="dark" density={16} className="absolute top-1/2 right-0 w-1/3 h-1/2 opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          <Reveal>
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4E0612] border border-[#FFA896]/20 text-[#FFA896] text-xs font-mono font-semibold uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>Hands-on evaluation</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.06]">
                The 7-day free trial
              </h2>
              <p className="text-[#FFD9CE] text-base sm:text-lg leading-relaxed">
                {trialOfferData.headline} {trialOfferData.subhead}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {trialOfferData.steps.map((step, idx) => (
              <Reveal key={step.num} delay={(idx % 4)}>
                <div className="h-full bg-[#240006] p-6 rounded-xl border border-[#FFA896]/15 space-y-3">
                  <span className="font-mono text-3xl font-black text-[#FFA896]">{step.num}</span>
                  <h3 className="font-display font-bold text-base text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#FFD9CE]/85 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-[#240006]/80 p-6 sm:p-8 rounded-2xl border border-[#FFA896]/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FFA896]">
                <ShieldCheck className="w-4 h-4 text-[#CD1C18]" />
                <span>Trial Scope & Eligibility Guidelines</span>
              </div>
              <p className="text-xs sm:text-sm text-[#FFD9CE] leading-relaxed max-w-4xl">
                {trialOfferData.eligibility}
              </p>
              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <Button to="/contact?intent=trial" variant="primary" size="md" icon={ArrowRight}>
                  Start 7-day trial →
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Free Prototype */}
      <section id="prototype" className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-[#FFF2EC] rounded-3xl border border-[#FFA896] p-8 sm:p-14 space-y-8">
              <div className="max-w-3xl space-y-3">
                <p className="eyebrow text-[#CD1C18] mb-3">
                  <span>{prototypeOfferData.badge}</span>
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#38000A] tracking-tight">
                  {prototypeOfferData.headline}
                </h2>
                <p className="text-xl font-semibold text-[#9B1313]">
                  {prototypeOfferData.tagline}
                </p>
                <p className="text-[#4A2A31] text-sm sm:text-base leading-relaxed">
                  {prototypeOfferData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {[
                  { title: "Architectural Spike", desc: "Verify technical feasibility, external API integrations, or vector retrieval accuracy." },
                  { title: "Interactive Prototype", desc: "Validate critical UX interactions and interface responsiveness with stakeholders." },
                  { title: "Zero Upfront Outlay", desc: "Evaluate team speed and code rigor before entering into formal contracts." },
                ].map((card, i) => (
                  <Reveal key={card.title} delay={i}>
                    <div className="p-5 rounded-xl bg-white border border-[#38000A]/10 space-y-2 hover:border-[#CD1C18]/40 transition-colors h-full">
                      <CheckCircle2 className="w-5 h-5 text-[#CD1C18]" />
                      <h3 className="font-display font-bold text-base text-[#38000A]">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#4A2A31] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="pt-5 border-t border-[#38000A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs font-mono text-[#7A5A60] max-w-xl leading-relaxed">
                  {prototypeOfferData.termsNotice}
                </p>
                <Button to="/contact?intent=prototype" variant="primary" size="md" icon={ArrowRight}>
                  Request Free Prototype
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. The 5 Engagement Models */}
      <section id="models" className="py-24 lg:py-32 bg-[#FFF9F7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow eyebrow-plain text-[#CD1C18] mt-2 mb-4 justify-center">
                Commercial structures
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-display font-extrabold text-[#38000A] tracking-tight">
                Five engagement models
              </h2>
              <p className="mt-4 text-[#4A2A31] text-sm sm:text-base">
                Whether you need fixed-scope delivery, an elastic dedicated pod,
                ongoing managed technology, reusable SaaS, or equity-based
                partnership.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {engagementModels.map((model, idx) => {
              const Icon = modelIcons[model.id] || FileText;
              const isSpecial = model.id === "equity-based";
              return (
                <Reveal key={model.id} delay={(idx % 3)}>
                  <div
                    className={`h-full rounded-2xl p-8 border flex flex-col justify-between transition-all duration-200 ${
                      isSpecial
                        ? "bg-[#38000A] text-white border-[#CD1C18] shadow-card-subtle"
                        : "bg-white text-[#38000A] border-[#38000A]/10 shadow-card-subtle hover:border-[#CD1C18]/50"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isSpecial ? "bg-[#CD1C18] text-white" : "bg-[#FFA896]/40 text-[#9B1313]"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isSpecial ? "text-[#FFA896]" : "text-[#9B1313]"}`}>
                          {isSpecial ? "Select Startups" : "Engagement"}
                        </span>
                      </div>

                      <div>
                        <h3 className={`font-display font-bold text-xl mb-1 ${isSpecial ? "text-white" : "text-[#38000A]"}`}>
                          {model.name}
                        </h3>
                        <p className={`text-xs font-mono font-medium ${isSpecial ? "text-[#FFA896]" : "text-[#CD1C18]"}`}>
                          {model.tagline}
                        </p>
                      </div>

                      <p className={`text-xs leading-relaxed ${isSpecial ? "text-[#FFD9CE]" : "text-[#4A2A31]"}`}>
                        {model.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider block text-[#9B1313]">
                          Model Highlights:
                        </span>
                        {model.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSpecial ? "text-[#FFA896]" : "text-[#CD1C18]"}`} />
                            <span className={isSpecial ? "text-[#FFD9CE]/90" : "text-[#4A2A31]"}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#38000A]/10">
                      <span className={`text-[11px] block mb-3 ${isSpecial ? "text-[#FFD9CE]/70" : "text-[#7A5A60]"}`}>
                        <strong>Best for:</strong> {model.bestFor}
                      </span>
                      <Button
                        to={`/contact?intent=${model.id === "equity-based" ? "consultation" : "project"}`}
                        variant={isSpecial ? "primary" : "primary"}
                        size="sm"
                        className="w-full text-center"
                      >
                        Inquire about {model.name}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#38000A] text-white border-t border-[#38000A]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Ready to initiate technical collaboration?
          </h3>
          <p className="text-[#FFD9CE] text-sm max-w-xl mx-auto leading-relaxed">
            Choose between starting a full project, testing our speed in a 7-day
            sprint, or submitting your specification for a free prototype.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Start a requirement
            </Button>
            <Button to="/contact?intent=trial" variant="outlineOnDark">
              Start 7-day trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}