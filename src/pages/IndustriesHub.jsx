import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase, Landmark, Factory, HeartPulse, ShoppingBag, Truck, GraduationCap, Shield } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { OrbitFieldGraphic } from "../components/graphics/ChiliArtworks";
import { industriesData } from "../data/industriesData";

export default function IndustriesHub() {
  const iconMap = {
    "startups-smbs": Briefcase,
    "enterprise": Building2,
    "bfsi": Landmark,
    "manufacturing": Factory,
    "healthcare": HeartPulse,
    "retail": ShoppingBag,
    "logistics": Truck,
    "education": GraduationCap,
    "government": Shield,
  };

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Sector expertise"
        title={
          <>
            Specialized industry{" "}
            <span className="text-[#CD1C18]">delivery.</span>
          </>
        }
        description="Domain-aware technology architectures engineered for the operational realities, regulatory constraints, and scale demands of nine global industries."
        breadcrumbs={[{ label: "Industries" }]}
        index="04"
        actions={
          <>
            <Button to="/contact?intent=trial" variant="primary" size="md">
              Start 7-day trial
            </Button>
            <Button to="/contact?intent=prototype" variant="outline" size="md">
              Request free prototype
            </Button>
          </>
        }
      />

      {/* Sector scan */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#38000A]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 order-2 lg:order-1">
              <OrbitFieldGraphic
                className="w-full h-auto max-w-[540px] mx-auto"
                sectors={["STARTUPS", "CORP.", "BFSI", "MANUFACT", "HEALTH", "RETAIL", "LOGISTICS", "EDTECH", "GOVERN"]}
              />
            </Reveal>

            <Reveal delay={1} className="lg:col-span-6 order-1 lg:order-2">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>One engine, many sectors</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                The same delivery core,{" "}
                <span className="text-[#CD1C18]">tuned per sector.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#4A2A31] leading-relaxed max-w-xl">
                Security perimeters, compliance constraints, latency budgets and
                data models shift by industry. The engineering method does not.
                We adapt our runtime for BFSI, healthcare, retail, logistics,
                manufacturing and the public sector alike.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFA896]/30 border border-[#FFA896] text-[#9B1313] font-mono text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CD1C18] animate-pulse" />
                Select a sector below to inspect its architecture
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-20 lg:py-28 bg-[#FFF9F7] border-b border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {industriesData.map((ind, idx) => {
              const Icon = iconMap[ind.id] || Building2;
              return (
                <Reveal key={ind.id} delay={(idx % 3)}>
                  <article className="group h-full bg-[#FFF9F7] rounded-2xl border border-[#38000A]/10 p-6 sm:p-8 hover:border-[#CD1C18]/50 hover:bg-white hover:shadow-card-subtle transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#FFA896]/40 border border-[#FFA896] text-[#9B1313] flex items-center justify-center group-hover:bg-[#CD1C18] group-hover:text-white group-hover:border-[#CD1C18] transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-[#A97884] font-semibold">
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-display font-extrabold text-xl text-[#38000A] group-hover:text-[#CD1C18] transition-colors mb-2 tracking-tight">
                          {ind.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#4A2A31] line-clamp-3 leading-relaxed">
                          {ind.tagline}
                        </p>
                      </div>

                      <div className="pt-1">
                        <span className="inline-block text-[11px] font-mono text-[#9B1313] bg-white border border-[#FFA896] px-2.5 py-1 rounded">
                          {ind.highlightStat}
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#38000A]/10 flex items-center justify-between">
                      <Link
                        to={`/industries/${ind.slug}`}
                        className="text-xs font-mono font-bold text-[#CD1C18] group-hover:text-[#9B1313] flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                      >
                        <span>Explore Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#38000A] text-white border-t border-[#38000A]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Looking for engineering tailored to your industry?
          </h3>
          <p className="text-[#FFD9CE] text-sm max-w-xl mx-auto leading-relaxed">
            We adapt data perimeters, security postures, and technology frameworks
            to meet your specific compliance and performance mandates.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}