import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, AlertCircle, Lightbulb, Cpu, CheckCircle2, ChevronRight, ArrowLeft, Shield } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { industriesData } from "../data/industriesData";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData.find((i) => i.slug === slug) || industriesData[0];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#38000A] text-white py-16 lg:py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[
              { label: "INDUSTRIES", to: "/industries" },
              { label: industry.name.toUpperCase() }
            ]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              INDUSTRY SPECIFICATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {industry.name}
            </h1>
            <p className="text-[#FFA896] text-lg font-medium">
              {industry.tagline}
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {industry.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button to={`/contact?intent=trial&service=${encodeURIComponent(industry.name)}`} variant="coral" size="sm">
                START 7-DAY TRIAL
              </Button>
              <Button to="/contact?intent=prototype" variant="outlineOnDark" size="sm">
                REQUEST FREE PROTOTYPE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5-part blueprint: Problem -> Solution -> Technology -> Use Cases -> CTA */}
      <section className="py-20 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-14 shadow-sm space-y-12">
            {/* Top Stat/Highlight */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#38000A]/5 border border-[#5A0B19]/20 text-xs font-mono text-[#38000A]">
              <Shield className="w-4 h-4 text-[#CD1C18] shrink-0" />
              <span className="font-bold">ENGINEERING FOCUS:</span>
              <span>{industry.highlightStat}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Problem & Solution (Left) */}
              <div className="lg:col-span-7 space-y-8">
                {/* 1. Problem */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#CD1C18]">
                    <AlertCircle className="w-4 h-4" />
                    <span>01. THE INDUSTRY CHALLENGE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
                    Operational & Architectural Bottlenecks
                  </h3>
                  <div className="bg-red-50/50 border-l-4 border-[#CD1C18] p-5 rounded-r-xl">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {industry.problem}
                    </p>
                  </div>
                </div>

                {/* 2. Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#38000A]">
                    <Lightbulb className="w-4 h-4 text-[#CD1C18]" />
                    <span>02. THE ETDOX SOLUTION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
                    High-Performance Engineering Approach
                  </h3>
                  <div className="bg-[#38000A]/5 border-l-4 border-[#38000A] p-5 rounded-r-xl">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {industry.solution}
                    </p>
                  </div>
                </div>

                {/* 4. Use Cases */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-gray-400 block">
                    04. REPRESENTATIVE ARCHITECTURAL USE CASES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.useCases.map((uc, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology & CTA (Right) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#F8F9FA] p-6 sm:p-8 rounded-2xl border border-gray-200">
                <div className="space-y-6">
                  {/* 3. Technology */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-500 mb-3">
                      <Cpu className="w-4 h-4 text-[#CD1C18]" />
                      <span>03. RECOMMENDED STACK</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2 text-xs">
                    <span className="font-mono text-gray-400 uppercase tracking-wider text-[10px] block">
                      ENGAGEMENT TIMELINES
                    </span>
                    <p className="text-gray-700 font-medium">
                      Immediate deployment of specialized pods with domain familiarity.
                    </p>
                    <ul className="text-gray-500 space-y-1 text-[11px]">
                      <li>• Technical discovery within 24-48 hours</li>
                      <li>• 7-day evaluation sprint available</li>
                      <li>• Free prototype for qualifying projects</li>
                    </ul>
                  </div>
                </div>

                {/* 5. CTA */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <span className="font-mono text-xs text-[#CD1C18] uppercase tracking-wider block font-bold">
                    05. NEXT ACTION
                  </span>
                  <Button
                    to={`/contact?intent=project&service=${encodeURIComponent(industry.name)}`}
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    className="w-full text-center font-bold"
                  >
                    DEPLOY FOR {industry.name.toUpperCase()}
                  </Button>
                  <Button
                    to={`/contact?intent=trial&service=${encodeURIComponent(industry.name)}`}
                    variant="outline"
                    size="md"
                    className="w-full text-center"
                  >
                    START 7-DAY TRIAL →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-industry navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/industries"
            className="text-xs font-mono text-gray-500 hover:text-[#CD1C18] flex items-center gap-1.5 uppercase font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Industries</span>
          </Link>

          <Link
            to="/contact"
            className="text-xs font-mono text-[#CD1C18] hover:text-[#9B1313] flex items-center gap-1.5 uppercase font-bold"
          >
            <span>Have a Specific Requirement? Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
