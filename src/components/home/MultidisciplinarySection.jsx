import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Cpu, Code, Database, Cloud, Palette, GitBranch } from "lucide-react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { NodeField } from "../graphics/ChiliArtworks";
import { companyData } from "../../data/companyData";

export default function MultidisciplinarySection() {
  const iconMap = {
    "AI/ML": Cpu,
    "Software": Code,
    "Data": Database,
    "Cloud": Cloud,
    "Security": Shield,
    "Design": Palette,
    "DevOps": GitBranch,
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FFF9F7] border-b border-[#38000A]/10 relative overflow-hidden">
      <NodeField tone="light" density={16} className="absolute top-0 right-0 w-1/3 h-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>04 — Elastic Technical Capacity</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-[#38000A] leading-[1.06]">
                One team for your{" "}
                <span className="text-[#CD1C18]">technology.</span>
              </h2>
            </div>
            <p className="text-sm text-[#4A2A31] leading-relaxed lg:max-w-xs lg:text-right">
              AI/ML • Software • Data • Cloud • Security • Design • DevOps — an
              integrated pod assembled around the requirement, not a roster of
              isolated contractors.
            </p>
          </div>
        </Reveal>

        {/* Discipline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {companyData.disciplines.map((item, idx) => {
            const Icon = iconMap[item.discipline] || Users;
            return (
              <Reveal key={item.discipline} delay={(idx % 4)} className="h-full">
                <div className="group h-full bg-white border border-[#38000A]/10 rounded-xl p-6 hover:border-[#CD1C18]/40 hover:shadow-card-subtle transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#FFA896]/40 border border-[#FFA896] flex items-center justify-center text-[#9B1313] group-hover:bg-[#CD1C18] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-[#9B1313] font-bold uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#38000A] mb-1 group-hover:text-[#CD1C18] transition-colors">
                    {item.discipline}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#A97884] mb-2">
                    {item.tag}
                  </p>
                  <p className="text-xs text-[#4A2A31] leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {/* Pod card */}
          <Reveal delay={3} className="h-full">
            <div className="h-full bg-[#38000A] text-white border border-[#38000A]/20 rounded-xl p-6 flex flex-col justify-between shadow-card-subtle">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#CD1C18] text-[#FFE9E4] text-[11px] font-mono font-bold mb-4 uppercase">
                  <Users className="w-3.5 h-3.5" />
                  <span>On-Demand Pod</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Your Technical Pod
                </h3>
                <p className="text-xs text-[#FFD9CE] leading-relaxed">
                  Assembled specifically for your tech stack. Zero recruiting
                  overhead, immediate velocity.
                </p>
              </div>

              <Link
                to="/contact?intent=project"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFA896] hover:text-white pt-5 transition-colors"
              >
                <span>Assemble Your Pod →</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom banner */}
        <Reveal>
          <div className="bg-white rounded-2xl p-8 border border-[#38000A]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <h4 className="font-display font-bold text-lg text-[#38000A]">
                Need technical capacity for an upcoming milestone?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A2A31]">
                Engage through fixed milestone projects, dedicated pods, or a
                risk-free 7-day sprint.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button to="/company#team" variant="outline" size="sm">
                View Pod Structure
              </Button>
              <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
                Start Now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}