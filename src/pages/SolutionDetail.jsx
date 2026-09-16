import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Cpu, ListChecks, HelpCircle, ArrowLeft } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { solutionsData } from "../data/solutionsData";

export default function SolutionDetail() {
  const { category } = useParams();
  const location = useLocation();

  const data = solutionsData[category] || solutionsData["ai-automation"];

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash, category]);

  const categories = Object.keys(solutionsData);

  return (
    <div className="bg-white">
      {/* Hero Category Header (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-16 lg:py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[
              { label: "SOLUTIONS", to: "/solutions" },
              { label: data.shortTitle.toUpperCase() }
            ]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              CAPABILITY DOMAIN
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {data.title}
            </h1>
            <p className="text-[#FFA896] text-lg font-medium">
              {data.tagline}
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Quick Domain Switcher Pills */}
          <div className="mt-8 pt-6 border-t border-[#5A0B19]/60 flex flex-wrap gap-2">
            <span className="text-xs font-mono text-gray-400 py-1 mr-2 uppercase self-center">
              Domains:
            </span>
            {categories.map((catKey) => {
              const cat = solutionsData[catKey];
              const isSelected = catKey === category;
              return (
                <Link
                  key={catKey}
                  to={`/solutions/${catKey}`}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "bg-[#CD1C18] text-white font-bold"
                      : "bg-[#240006] text-gray-300 hover:text-white hover:bg-[#38000A] border border-[#5A0B19]"
                  }`}
                >
                  {cat.shortTitle}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities List: Problem -> Solution -> Technology -> Use Cases -> CTA */}
      <section className="py-20 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {data.items.map((item, idx) => (
            <article
              key={item.id}
              id={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-12 shadow-sm transition-all scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#CD1C18] bg-[#CD1C18]/10 px-2.5 py-0.5 rounded">
                      SPEC 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-gray-400 uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-950">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    to={`/contact?intent=trial&service=${encodeURIComponent(item.title)}`}
                    variant="outline"
                    size="sm"
                  >
                    TEST IN 7-DAY SPRINT
                  </Button>
                </div>
              </div>

              {/* 5-part architecture structure */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                {/* Problem & Solution (Left) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Problem */}
                  <div className="bg-red-50/50 border-l-4 border-[#CD1C18] p-5 rounded-r-xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#9B1313]">
                      <AlertTriangle className="w-4 h-4 text-[#CD1C18]" />
                      <span>THE PROBLEM</span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-[#38000A]/5 border-l-4 border-[#38000A] p-5 rounded-r-xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#38000A]">
                      <Lightbulb className="w-4 h-4 text-[#CD1C18]" />
                      <span>ETDOX SOLUTION & ARCHITECTURE</span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-400">
                      <ListChecks className="w-4 h-4 text-[#CD1C18]" />
                      <span>REPRESENTATIVE USE CASES</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.useCases.map((uc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#CD1C18] shrink-0 mt-0.5" />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technology & CTA Action (Right) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#F8F9FA] p-6 rounded-xl border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-500">
                      <Cpu className="w-4 h-4 text-[#CD1C18]" />
                      <span>TECHNOLOGY STACK</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs font-medium shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-white border border-gray-200 text-xs space-y-2">
                      <span className="font-mono text-gray-400 uppercase tracking-wider block text-[10px]">
                        ENGINEERING GUARANTEES
                      </span>
                      <ul className="space-y-1.5 text-gray-600 text-[11px]">
                        <li>• Production-grade typing & architecture reviews</li>
                        <li>• Automated unit & integration test coverage</li>
                        <li>• Bilateral NDA & complete IP ownership transfer</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button
                      to={`/contact?intent=project&service=${encodeURIComponent(item.title)}`}
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      className="w-full text-center"
                    >
                      BUILD WITH {item.title.toUpperCase()}
                    </Button>

                    <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 px-1">
                      <Link
                        to="/how-we-work#trial"
                        className="hover:text-[#CD1C18] underline"
                      >
                        7-Day Trial Terms
                      </Link>
                      <Link
                        to="/how-we-work#prototype"
                        className="hover:text-[#CD1C18] underline"
                      >
                        Free Prototype Scope
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Global Footer Banner */}
      <section className="py-14 bg-[#170004] text-white border-t border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            Ready to deploy specialized engineering capacity?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Talk directly to an ETDOX solutions architect. No sales fluff, just technical alignment.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="coral" size="md" icon={ArrowRight}>
              START TECHNICAL DISCOVERY
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
