import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Sparkles, Terminal, Code2, Server, ShieldCheck } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";

export default function Products() {
  return (
    <div className="bg-white">
      {/* Header Banner (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "PRODUCTS / SAAS" }]}
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,168,150,0.15)] border border-[rgba(255,168,150,0.3)] text-[#FFA896] text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PLATFORM ACCELERATORS & SAAS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              ETDOX Products & Platforms
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We engineer reusable software platforms and proprietary technical foundations that accelerate deployment times for enterprise AI, data orchestration, and cloud workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Authentic Coming Soon & Architecture Preview */}
      <section className="py-24 bg-[#FBFBFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-14 shadow-sm text-center space-y-8 relative overflow-hidden">
            {/* Subtle background badge */}
            <div className="w-20 h-20 rounded-2xl bg-[#38000A] text-[#FFA896] flex items-center justify-center mx-auto shadow-lg shadow-[#38000A]/10 border border-[#5A0B19]">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                PLATFORM PIPELINE • COMING SOON
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
                Proprietary SaaS Platforms Under Development
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                In strict adherence to our policy of absolute engineering transparency, ETDOX does not showcase synthetic product screenshots or fabricated traction metrics. Our proprietary platforms and reusable accelerators are currently in active development.
              </p>
            </div>

            {/* Architectural Modules in Development */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <Terminal className="w-5 h-5 text-[#CD1C18]" />
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-bold uppercase">
                    ALPHA TESTING
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900">
                  AI Orchestration Gateway
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Unified enterprise proxy for multi-provider LLM routing, latency optimization, token budgeting, and zero-leakage guardrails.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <Code2 className="w-5 h-5 text-[#CD1C18]" />
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-bold uppercase">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900">
                  Semantic RAG Mesh
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Turnkey hybrid dense-sparse vector ingestion engine with automatic document parsing and role-based citation verification.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <Server className="w-5 h-5 text-[#CD1C18]" />
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-bold uppercase">
                    PROTOTYPING
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900">
                  Multi-Tenant SaaS Scaffold
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hardened, audited starter architecture with isolated tenant databases, Stripe billing, RBAC, and automated GitOps manifests.
                </p>
              </div>
            </div>

            {/* Custom Engineering Callout */}
            <div className="bg-[#38000A] text-white p-8 rounded-2xl border border-[#5A0B19] text-left flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-white">
                  Need a custom software platform or SaaS engineered today?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                  Our engineering team designs, builds, and maintains custom software and SaaS platforms tailored to your exact specifications.
                </p>
              </div>

              <Button
                to="/contact?intent=project&service=SaaS"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="shrink-0"
              >
                COMMISSION CUSTOM SAAS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
