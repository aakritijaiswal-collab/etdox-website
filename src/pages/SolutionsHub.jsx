import React from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Database, ShieldCheck, Layers, ArrowRight } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { FlowboardGraphic } from "../components/graphics/ChiliArtworks";
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
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Full capability map"
        title={
          <>
            Intelligent solutions &{" "}
            <span className="text-[#CD1C18]">engineering.</span>
          </>
        }
        description="We design, build and manage technology across five specialized domains: AI & Automation, Software Engineering, Data & Cloud, Security, and Digital Transformation."
        breadcrumbs={[{ label: "Solutions" }]}
        index="02"
        actions={
          <>
            <Button to="/contact?intent=trial" variant="primary" size="md">
              Test in a 7-day sprint
            </Button>
            <Button to="/contact?intent=prototype" variant="outline" size="md">
              Request free prototype
            </Button>
          </>
        }
      />

      {/* Problem → Solution framework */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#38000A]/10 relative overflow-hidden">
        <div className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-[#FFA896]/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>The delivery frame</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                From problem to{" "}
                <span className="text-[#CD1C18]">production.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#4A2A31] leading-relaxed">
                Every engagement runs through the same disciplined core: we
                isolate the bottleneck, engineer a typed and tested solution,
                and hand over production-ready code with full ownership.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button to="/how-we-work#process" variant="primary" icon={ArrowRight}>
                  See the 7-phase process
                </Button>
                <Button to="/contact?intent=project" variant="outline">
                  Brief a technical problem
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1} className="lg:col-span-7">
              <FlowboardGraphic className="w-full h-auto" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Matrix */}
      <section className="py-20 lg:py-28 bg-[#FFF9F7] border-b border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Brain;
            return (
              <Reveal key={cat.id}>
                <article id={cat.id} className="border-t-4 border-[#CD1C18]/70 pt-8 scroll-mt-28">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#38000A]/10">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg bg-[#FFA896]/40 border border-[#FFA896] text-[#9B1313] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#CD1C18] font-bold uppercase tracking-wider">
                              Domain 0{idx + 1}
                            </span>
                            <span className="hidden sm:inline h-px w-10 bg-[#38000A]/15" />
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#38000A] tracking-tight">
                            {cat.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-[#4A2A31] text-sm sm:text-base max-w-3xl leading-relaxed">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                    {cat.items.map((item) => (
                      <Link
                        key={item.id}
                        to={`/solutions/${cat.id}#${item.id}`}
                        className="group p-5 rounded-xl border border-[#38000A]/10 bg-[#FFF9F7] hover:border-[#CD1C18]/50 hover:bg-white hover:shadow-card-subtle transition-all block text-left"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B1313] font-bold bg-[#CD1C18]/8 px-2 py-0.5 rounded">
                            {item.badge}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C9A39E] group-hover:text-[#CD1C18] group-hover:translate-x-1 transition-all" />
                        </div>

                        <h3 className="font-display font-bold text-base text-[#38000A] group-hover:text-[#CD1C18] transition-colors mb-2">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[#4A2A31] line-clamp-2 leading-relaxed mb-4">
                          {item.solution}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {item.technology.slice(0, 3).map((t) => (
                            <span key={t} className="text-[10px] font-mono text-[#9B1313] bg-[#FFA896]/25 px-1.5 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Global Solutions CTA */}
      <section className="py-16 bg-[#38000A] text-white border-t border-[#38000A]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Have a custom technical challenge?
          </h3>
          <p className="text-[#FFD9CE] text-sm max-w-xl mx-auto leading-relaxed">
            From targeted single-engineer spikes to multidisciplinary technology
            delivery pods, we assemble the exact capabilities needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Start a Project
            </Button>
            <Button to="/how-we-work" variant="outlineOnDark">
              How We Deliver
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}