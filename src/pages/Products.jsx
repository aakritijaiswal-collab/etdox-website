import React from "react";
import { ArrowRight, Lock, Terminal, Code2, Server } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { PlatformStackGraphic } from "../components/graphics/ChiliArtworks";

export default function Products() {
  const modules = [
    {
      icon: Terminal,
      name: "AI Orchestration Gateway",
      status: "Alpha Testing",
      desc: "Unified enterprise proxy for multi-provider LLM routing, latency optimization, token budgeting, and zero-leakage guardrails.",
    },
    {
      icon: Code2,
      name: "Semantic RAG Mesh",
      status: "In Development",
      desc: "Turnkey hybrid dense-sparse vector ingestion engine with automatic document parsing and role-based citation verification.",
    },
    {
      icon: Server,
      name: "Multi-Tenant SaaS Scaffold",
      status: "Prototyping",
      desc: "Hardened, audited starter architecture with isolated tenant databases, Stripe billing, RBAC, and automated GitOps manifests.",
    },
  ];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Platform accelerators & SaaS"
        title={
          <>
            ETDOX products &{" "}
            <span className="text-[#CD1C18]">platforms.</span>
          </>
        }
        description="We engineer reusable software platforms and proprietary technical foundations that accelerate deployment times for enterprise AI, data orchestration, and cloud workflows."
        breadcrumbs={[{ label: "Products / SaaS" }]}
        index="06"
        badge={
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA896]/30 border border-[#FFA896] text-[#9B1313] text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CD1C18] animate-pulse" />
            Platform pipeline • Coming soon
          </span>
        }
      />

      {/* Main content */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#38000A]/10 relative overflow-hidden">
        <div className="absolute -right-32 top-24 w-96 h-96 rounded-full bg-[#FFA896]/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Copy + modules */}
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>Under development</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                Reusable foundations,{" "}
                <span className="text-[#CD1C18]">engineered twice.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#4A2A31] leading-relaxed max-w-xl">
                In strict adherence to our policy of absolute engineering
                transparency, ETDOX does not showcase synthetic product
                screenshots or fabricated traction metrics. The platforms below
                are under active development and deployed first with the clients
                who help shape them.
              </p>

              <div className="mt-9 border-t border-[#38000A]/10">
                {modules.map((mod, i) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.name} className="group py-6 border-b border-[#38000A]/10 flex items-start gap-5">
                      <span className="font-mono text-sm font-bold text-[#A97884] group-hover:text-[#CD1C18] transition-colors pt-0.5">
                        0{i + 1}
                      </span>
                      <span className="w-11 h-11 rounded-lg bg-[#FFF2EC] border border-[#FFA896] text-[#9B1313] flex items-center justify-center shrink-0 group-hover:bg-[#CD1C18] group-hover:text-white group-hover:border-[#CD1C18] transition-colors">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display font-bold text-lg text-[#38000A] group-hover:text-[#CD1C18] transition-colors">
                            {mod.name}
                          </h3>
                          <span className="text-[10px] font-mono text-[#9B1313] bg-white border border-[#FFA896] px-2 py-0.5 rounded font-bold uppercase">
                            {mod.status}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs text-[#4A2A31] leading-relaxed">
                          {mod.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Platform composition */}
            <Reveal delay={1} className="lg:col-span-5">
              <div className="relative">
                <PlatformStackGraphic className="w-full h-auto drop-shadow-[0_24px_40px_rgba(56,0,10,0.08)]" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#38000A] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-chili-glow whitespace-nowrap">
                  1 architecture → N clients
                </div>
              </div>
            </Reveal>
          </div>

          {/* Custom engineering callout */}
          <Reveal>
            <div className="mt-16 bg-[#38000A] text-white p-8 sm:p-10 rounded-2xl border border-[#38000A]/20 text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <span className="hidden sm:flex w-12 h-12 rounded-xl bg-[#CD1C18] text-white items-center justify-center shrink-0 shadow-chili-glow">
                  <Lock className="w-6 h-6" />
                </span>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Need a custom software platform or SaaS engineered today?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFD9CE] max-w-xl leading-relaxed">
                    Our engineering team designs, builds, and maintains custom
                    software and SaaS platforms tailored to your exact
                    specifications.
                  </p>
                </div>
              </div>

              <Button
                to="/contact?intent=project&service=SaaS"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="shrink-0 shadow-chili-glow"
              >
                Commission Custom SaaS
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}