import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { scaleProgression } from "../../data/howWeWorkData";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import { SparkMark } from "../graphics/ChiliArtworks";

export default function ScaleTimelineSection() {
  const [activeStage, setActiveStage] = useState(0);

  const current = scaleProgression[activeStage];

  const intentFor = (idx) =>
    idx === 0 ? "project" : idx === 1 ? "prototype" : idx === 2 ? "trial" : "project";

  return (
    <section className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>03 — Technical Maturity</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-[#38000A] leading-[1.06]">
                Small project → enterprise.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <SparkMark className="w-16 h-16 ml-auto hidden lg:block" />
              <p className="text-sm text-[#4A2A31] leading-relaxed lg:max-w-xs lg:ml-auto mt-2">
                Engineering pods scale alongside your growth trajectory — from one
                technical task to complete technology delivery.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Timeline track */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {scaleProgression.map((item, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={item.stage}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-3.5 rounded-lg border transition-all duration-200 group ${
                    isCurrent
                      ? "bg-[#38000A] border-[#CD1C18] text-white shadow-card-subtle"
                      : "bg-[#FFF9F7] border-[#38000A]/10 text-[#4A2A31] hover:border-[#CD1C18]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isCurrent ? "text-[#FFA896]" : "text-[#CD1C18]"}`}>
                      0{idx + 1}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${isCurrent ? "bg-[#FFA896]" : "bg-[#C9A39E] group-hover:bg-[#CD1C18]"}`} />
                  </div>
                  <h3 className={`font-display font-bold text-sm leading-tight mb-1 ${isCurrent ? "text-white" : "text-[#38000A]"}`}>
                    {item.stage}
                  </h3>
                  <p className={`text-[11px] leading-snug line-clamp-2 ${isCurrent ? "text-[#FFD9CE]" : "text-[#7A5A60]"}`}>
                    {item.examples}
                  </p>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detail panel */}
        <Reveal delay={1}>
          <div key={activeStage} className="mt-6 bg-[#FFF9F7] border border-[#38000A]/10 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-5xl font-black text-[#FFA896] leading-none">
                  0{activeStage + 1}
                </span>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9B1313] font-bold">
                    Scale progression
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#38000A] tracking-tight">
                    {current.stage}
                  </h3>
                </div>
              </div>

              <p className="text-[#4A2A31] text-sm sm:text-base leading-relaxed max-w-2xl">
                {current.desc}
              </p>

              <div className="pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9B1313] block mb-1.5">
                  Deliverable scope examples
                </span>
                <p className="text-sm font-mono text-[#38000A] bg-white border border-[#38000A]/10 p-3.5 rounded-lg">
                  {current.examples}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end gap-3">
              <Link
                to={`/contact?intent=${intentFor(activeStage)}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#CD1C18] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#9B1313] transition-colors shadow-sm"
              >
                <span>Engage for {current.stage}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/how-we-work#models"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#38000A]/25 text-[#38000A] text-xs font-mono font-medium hover:border-[#CD1C18] hover:text-[#CD1C18] transition-colors"
              >
                <span>View Engagement Models</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}