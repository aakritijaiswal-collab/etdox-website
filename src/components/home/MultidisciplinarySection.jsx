import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle2, Shield, Cpu, Code, Database, Cloud, Palette, GitBranch } from "lucide-react";
import Button from "../common/Button";
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
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold block mb-3">
            ELASTIC TECHNICAL CAPACITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-950 tracking-tight">
            One Team for Your Technology.
          </h2>
          <div className="mt-3 inline-block font-mono text-xs sm:text-sm font-semibold text-[#CD1C18] tracking-wider uppercase">
            AI/ML • SOFTWARE • DATA • CLOUD • SECURITY • DESIGN • DEVOPS
          </div>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            From one small technical task to complete technology delivery, assemble the right team around the requirement.
          </p>
        </div>

        {/* 7 Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {companyData.disciplines.map((item, idx) => {
            const Icon = iconMap[item.discipline] || Users;
            return (
              <div
                key={item.discipline}
                className="bg-[#FBFBFC] border border-gray-200 rounded-xl p-6 hover:border-[#CD1C18] hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-800 group-hover:bg-[#CD1C18] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#CD1C18] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-gray-900 mb-1.5 group-hover:text-[#CD1C18] transition-colors">
                  {item.discipline}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            );
          })}

          {/* 8th Card: The On-Demand Pod Model */}
          <div className="bg-[#38000A] text-white border border-[#5A0B19] rounded-xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#CD1C18]/30 text-[#FFA896] text-[11px] font-mono font-bold mb-3 uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>On-Demand Pod</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Your Technical Pod
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Assembled specifically for your tech stack. Zero recruiting overhead, immediate velocity.
              </p>
            </div>

            <Link
              to="/contact?intent=project"
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FFA896] hover:text-white pt-4 transition-colors"
            >
              <span>Assemble Your Pod →</span>
            </Link>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <h4 className="font-display font-bold text-lg text-gray-900">
              Need technical capacity for an upcoming milestone?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Engage through fixed milestone projects, dedicated pods, or a risk-free 7-day sprint.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button to="/company#team" variant="outline" size="sm">
              View Pod Structure
            </Button>
            <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
              START NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
