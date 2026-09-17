import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { LayerStack } from "../graphics/ChiliArtworks";
import { prototypeOfferData } from "../../data/howWeWorkData";

export default function PrototypeOfferSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFF2EC] border-b border-[#38000A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Copy */}
          <Reveal className="lg:col-span-7">
            <span className="eyebrow text-[#CD1C18] mb-5">
              <span>02 — Zero-Risk Evaluation</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#38000A] leading-[1.08]">
              Your first prototype —{" "}
              <span className="text-[#CD1C18]">on us*</span>
            </h2>

            <p className="mt-5 text-lg sm:text-xl font-semibold text-[#9B1313]">
              {prototypeOfferData.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#4A2A31] leading-relaxed max-w-2xl">
              {prototypeOfferData.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 bg-white/70 border border-[#38000A]/10 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0" />
                <span className="text-[#38000A]">Architecture Spike</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 border border-[#38000A]/10 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0" />
                <span className="text-[#38000A]">Clickable Flow / API PoC</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 border border-[#38000A]/10 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0" />
                <span className="text-[#38000A]">Zero Initial Outlay</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button
                to="/contact?intent=prototype"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-chili-glow"
              >
                Request Free Prototype
              </Button>
              <Link
                to="/how-we-work#prototype"
                className="text-xs font-mono text-[#9B1313] hover:text-[#CD1C18] underline underline-offset-4 py-2"
              >
                View Eligibility Requirements
              </Link>
            </div>

            <p className="mt-5 text-[11px] font-mono text-[#7A5A60] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#9B1313] shrink-0" />
              <span>{prototypeOfferData.termsNotice}</span>
            </p>
          </Reveal>

          {/* Visual */}
          <Reveal delay={1} className="lg:col-span-5">
            <div className="relative">
              <LayerStack
                labels={["ARCHITECTURE SPIKE", "CLICKABLE UX FLOW", "API PROOF-OF-CONCEPT", "CODE + HANDOVER"]}
              />
              <div className="absolute -top-6 -right-4 bg-[#CD1C18] text-white font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-chili-glow">
                Turnover: 3–5 days*
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}