import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Terminal, CheckCircle2, ChevronRight } from "lucide-react";
import HeroNetworkCanvas from "../components/home/HeroNetworkCanvas";
import InteractivePillars from "../components/home/InteractivePillars";
import TrialProcessSection from "../components/home/TrialProcessSection";
import PrototypeOfferSection from "../components/home/PrototypeOfferSection";
import ScaleTimelineSection from "../components/home/ScaleTimelineSection";
import MultidisciplinarySection from "../components/home/MultidisciplinarySection";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Dark Burgundy Cinematic) */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#38000A] text-white overflow-hidden py-20 lg:py-28">
        {/* Dynamic HTML5 Canvas Interactive Lattice */}
        <HeroNetworkCanvas />

        {/* Ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CD1C18]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9B1313]/25 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(255,168,150,0.12)] border border-[rgba(255,168,150,0.25)] text-[#FFA896] text-xs font-mono font-semibold tracking-widest uppercase mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#CD1C18] animate-ping" />
            <span>AI • SOFTWARE • DATA • CLOUD</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-5xl mx-auto">
            WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FFA896]">INTELLIGENT</span> <br className="hidden sm:inline" />
            <span className="text-[#FFA896]">TECHNOLOGY.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-gray-200 font-normal max-w-3xl mx-auto leading-relaxed mb-4">
            We design, build and manage technology for businesses, startups and enterprises.
          </p>

          {/* Primary positioning */}
          <div className="font-mono text-xs sm:text-sm text-[#FFA896] font-semibold tracking-wider uppercase mb-10">
            PRIMARY POSITIONING: YOUR TECHNICAL TEAM, ON DEMAND.
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              to="/contact?intent=project"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto shadow-chili-glow font-bold text-sm tracking-wide"
            >
              START A PROJECT
            </Button>

            <Button
              to="/contact?intent=trial"
              variant="outlineOnDark"
              size="lg"
              className="w-full sm:w-auto font-mono text-xs tracking-wider"
            >
              TRY US FOR 7 DAYS
            </Button>
          </div>

          {/* Subtle trust / credibility strip */}
          <div className="mt-16 pt-8 border-t border-[#5A0B19]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CD1C18]" />
              <span>Zero-Lockin 7-Day Sprint</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFA896]" />
              <span>1 Free Prototype for Suitable Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FFA896]" />
              <span>Full Source Code Handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO: Four Interactive Pillars */}
      <InteractivePillars />

      {/* 3. TRY US FOR 7 DAYS */}
      <TrialProcessSection />

      {/* 4. YOUR FIRST PROTOTYPE — ON US* */}
      <PrototypeOfferSection />

      {/* 5. SMALL PROJECT → ENTERPRISE */}
      <ScaleTimelineSection />

      {/* 6. ONE TEAM FOR YOUR TECHNOLOGY */}
      <MultidisciplinarySection />

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-[#170004] text-white border-t border-[#5A0B19]/50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38000A] border border-[#5A0B19] text-xs font-mono font-semibold text-[#FFA896] uppercase tracking-wider">
            <span>GET STARTED TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            Start with a requirement.
          </h2>

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose a project, 7-day trial, free prototype or consultation.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="text-base px-8 py-4 shadow-chili-glow font-bold tracking-wider"
            >
              LET'S TALK
            </Button>

            <Button
              to="/how-we-work"
              variant="outlineOnDark"
              size="lg"
              className="font-mono text-xs"
            >
              LEARN HOW WE WORK
            </Button>
          </div>

          <div className="pt-8 text-xs font-mono text-gray-400">
            <span>Direct architectural discussion • Prompt response within 1 business day</span>
          </div>
        </div>
      </section>
    </div>
  );
}
