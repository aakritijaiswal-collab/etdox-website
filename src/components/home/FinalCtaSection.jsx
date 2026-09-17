import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { NodeField } from "../graphics/ChiliArtworks";

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-[#38000A] text-white relative overflow-hidden border-b border-[#38000A]/20">
      <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />
      <NodeField tone="dark" density={18} className="absolute inset-x-0 bottom-0 w-full h-40 opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#CD1C18]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0612] border border-[#FFA896]/20 text-xs font-mono font-semibold text-[#FFA896] uppercase tracking-wider">
          <span>Get started today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
          Start with a requirement.
        </h2>

        <p className="text-base sm:text-xl text-[#FFD9CE] max-w-2xl mx-auto">
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
            Let's Talk
          </Button>

          <Button
            to="/how-we-work"
            variant="outlineOnDark"
            size="lg"
            className="font-mono text-xs"
          >
            Learn How We Work
          </Button>
        </div>

        <div className="pt-8 text-xs font-mono text-[#FFD9CE]/70 flex items-center justify-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CD1C18] animate-pulse-slow" />
          <span>Direct architectural discussion • Prompt response within 1 business day</span>
        </div>
      </div>
    </section>
  );
}