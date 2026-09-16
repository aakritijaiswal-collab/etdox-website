import React from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Database, ShieldCheck, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { solutionsData } from "../data/solutionsData";

export default function SolutionsHub() {
  const iconMap = {
    "Brain": Brain,
    "Code2": Code2,
    "Database": Database,
    "ShieldCheck": ShieldCheck,
    "Layers": Layers,
  };

  const categories = Object.values(solutionsData);

  return (
    <div className="bg-white">
      {/* Header Banner (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "SOLUTIONS" }]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              FULL CAPABILITY MAP
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Intelligent Solutions & Engineering
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We design, build and manage technology across five specialized domains: AI & Automation, Software Engineering, Data & Cloud, Security, and Digital Transformation.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button to="/contact?intent=trial" variant="coral" size="sm">
                TEST IN 7-DAY SPRINT
              </Button>
              <Button to="/contact?intent=prototype" variant="outlineOnDark" size="sm">
                REQUEST FREE PROTOTYPE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Matrix */}
      <section className="py-20 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Brain;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#38000A] text-[#FFA896] flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#CD1C18] font-bold uppercase">
                          DOMAIN 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-950">
                          {cat.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base max-w-3xl">
                      {cat.description}
                    </p>
                  </div>

                  <Link
                    to={`/solutions/${cat.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38000A] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#CD1C18] transition-colors shrink-0"
                  >
                    <span>View {cat.shortTitle} Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Capabilities grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  {cat.items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/solutions/${cat.id}#${item.id}`}
                      className="p-5 rounded-xl border border-gray-200 bg-[#FBFBFC] hover:border-[#CD1C18] hover:bg-white hover:shadow-md transition-all group block text-left"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#CD1C18] font-bold bg-[#CD1C18]/10 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#CD1C18] group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="font-display font-bold text-base text-gray-900 group-hover:text-[#CD1C18] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
                        {item.solution}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.technology.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-mono text-gray-500 bg-gray-200/60 px-1.5 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Solutions CTA */}
      <section className="py-16 bg-[#240006] text-white border-t border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Have a custom technical challenge?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            From targeted single-engineer spikes to multidisciplinary technology delivery pods, we assemble the exact capabilities needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              START A PROJECT
            </Button>
            <Button to="/how-we-work" variant="outlineOnDark">
              HOW WE DELIVER
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
