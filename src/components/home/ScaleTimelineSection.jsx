import React, { useState } from "react";
import { ArrowRight, Layers, Cpu, Server, Check, ArrowUpRight } from "lucide-react";
import { scaleProgression } from "../../data/howWeWorkData";
import { Link } from "react-router-dom";

export default function ScaleTimelineSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stageIcons = ["Code", "Sparkles", "Rocket", "Layers", "Cpu", "Server"];

  return (
    <section className="py-24 bg-[#FBFBFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold block mb-3">
            TECHNICAL MATURITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-950 tracking-tight">
            Small Project → Enterprise
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            From one small technical task to complete technology delivery, our engineering pods scale alongside your growth trajectory.
          </p>
        </div>

        {/* Timeline Progression Bar (Horizontal on desktop, stacked on mobile) */}
        <div className="relative mb-12">
          {/* Track line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {scaleProgression.map((item, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={item.stage}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative group ${
                    isCurrent
                      ? "bg-[#38000A] text-white border-[#CD1C18] shadow-md scale-105"
                      : "bg-white text-gray-800 border-gray-200 hover:border-[#CD1C18]/40 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isCurrent ? "text-[#FFA896]" : "text-[#CD1C18]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCurrent ? "bg-[#FFA896] animate-ping" : "bg-gray-300 group-hover:bg-[#CD1C18]"
                      }`}
                    />
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base leading-tight mb-1">
                    {item.stage}
                  </h3>

                  <p
                    className={`text-[11px] line-clamp-2 ${
                      isCurrent ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {item.examples}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#CD1C18]/10 text-[#CD1C18] font-mono text-xs font-bold uppercase">
                  Stage 0{activeStage + 1}
                </span>
                <span className="font-mono text-xs text-gray-400">
                  SCALE PROGRESSION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-950">
                {scaleProgression[activeStage].stage}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {scaleProgression[activeStage].desc}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-1">
                  Deliverable Scope Examples:
                </span>
                <p className="text-sm font-mono text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {scaleProgression[activeStage].examples}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                to={`/contact?intent=${activeStage === 0 ? "project" : activeStage === 1 ? "prototype" : activeStage === 2 ? "trial" : "project"}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#CD1C18] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#9B1313] transition-colors shadow-sm"
              >
                <span>Engage for {scaleProgression[activeStage].stage}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/how-we-work#models"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 text-xs font-mono font-medium hover:border-[#CD1C18] hover:text-[#CD1C18] transition-colors"
              >
                <span>View Engagement Models</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
