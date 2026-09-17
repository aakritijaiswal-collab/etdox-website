import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Cpu } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { solutionsData } from "../data/solutionsData";

export default function SolutionDetail() {
  const { category } = useParams();
  const location = useLocation();

  const data = solutionsData[category] || solutionsData["ai-automation"];

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash, category]);

  const categories = Object.keys(solutionsData);

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Capability domain"
        title={data.title}
        kicker={data.tagline}
        description={data.description}
        breadcrumbs={[
          { label: "Solutions", to: "/solutions" },
          { label: data.shortTitle.toUpperCase() },
        ]}
        index="03"
        actions={
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-[#7A5A60] mr-2 uppercase self-center">
              Domains:
            </span>
            {categories.map((catKey) => {
              const cat = solutionsData[catKey];
              const isSelected = catKey === category;
              return (
                <Link
                  key={catKey}
                  to={`/solutions/${catKey}`}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "bg-[#CD1C18] text-white font-bold shadow-sm"
                      : "bg-white text-[#4A2A31] hover:text-[#CD1C18] border border-[#38000A]/15"
                  }`}
                >
                  {cat.shortTitle}
                </Link>
              );
            })}
          </div>
        }
      />

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {data.items.map((item, idx) => (
            <Reveal key={item.id}>
              <article
                id={item.id}
                className="bg-[#FFF9F7] rounded-2xl border border-[#38000A]/10 p-6 sm:p-10 lg:p-12 scroll-mt-28"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#38000A]/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-[#CD1C18] bg-[#CD1C18]/8 px-2.5 py-0.5 rounded">
                        Spec 0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-[#7A5A60] uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#38000A] tracking-tight">
                      {item.title}
                    </h2>
                  </div>

                  <Button
                    to={`/contact?intent=trial&service=${encodeURIComponent(item.title)}`}
                    variant="outline"
                    size="sm"
                  >
                    Test in a 7-day sprint
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
                  {/* Problem & Solution */}
                  <div className="lg:col-span-7 space-y-7">
                    <div className="bg-[#FFF2EC] border-l-4 border-[#CD1C18] p-5 rounded-r-xl space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#9B1313]">
                        <AlertTriangle className="w-4 h-4 text-[#CD1C18]" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-sm text-[#38000A] leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="border-l-4 border-[#38000A] bg-[#FFF9F7] p-5 rounded-r-xl space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#38000A]">
                        <Lightbulb className="w-4 h-4 text-[#CD1C18]" />
                        <span>ETDOX Solution & Architecture</span>
                      </div>
                      <p className="text-sm text-[#4A2A31] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#9B1313]">
                        <CheckCircle2 className="w-4 h-4 text-[#CD1C18]" />
                        <span>Representative Use Cases</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.useCases.map((uc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#4A2A31] bg-white p-3 rounded-lg border border-[#38000A]/10">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CD1C18] shrink-0 mt-0.5" />
                            <span>{uc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technology & CTA */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-[#38000A]/10 self-start lg:sticky lg:top-24">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#7A5A60]">
                        <Cpu className="w-4 h-4 text-[#CD1C18]" />
                        <span>Technology Stack</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.technology.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-[#FFF9F7] border border-[#38000A]/10 text-[#38000A] font-mono text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="p-4 rounded-lg bg-[#FFF9F7] border border-[#38000A]/10 text-xs space-y-2">
                        <span className="font-mono text-[#9B1313] uppercase tracking-wider block text-[10px] font-bold">
                          Engineering Guarantees
                        </span>
                        <ul className="space-y-1.5 text-[#4A2A31] text-[11px] leading-relaxed">
                          <li>• Production-grade typing & architecture reviews</li>
                          <li>• Automated unit & integration test coverage</li>
                          <li>• Bilateral NDA & complete IP ownership transfer</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-[#38000A]/10 space-y-3">
                      <Button
                        to={`/contact?intent=project&service=${encodeURIComponent(item.title)}`}
                        variant="primary"
                        size="md"
                        icon={ArrowRight}
                        className="w-full text-center"
                      >
                        Build with {item.title}
                      </Button>

                      <div className="flex justify-between items-center text-[11px] font-mono text-[#7A5A60] px-1">
                        <Link to="/how-we-work#trial" className="hover:text-[#CD1C18] underline">
                          7-Day Trial Terms
                        </Link>
                        <Link to="/how-we-work#prototype" className="hover:text-[#CD1C18] underline">
                          Free Prototype Scope
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-[#38000A] text-white border-t border-[#38000A]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
            Ready to deploy specialized engineering capacity?
          </h3>
          <p className="text-[#FFD9CE] text-xs sm:text-sm">
            Talk directly to an ETDOX solutions architect. No sales fluff, just
            technical alignment.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Start technical discovery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}