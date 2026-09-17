import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Cpu, Shield, Code2, Database, Cloud } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import { NodeField, MissionGraphic, CareerGraphic } from "../components/graphics/ChiliArtworks";
import { companyData } from "../data/companyData";

export default function Company() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);

  const { about, disciplines, techStack, careers, partners } = companyData;

  const quickNav = [
    { hash: "#about", label: "About" },
    { hash: "#team", label: "Team Pods" },
    { hash: "#technology", label: "Technology" },
    { hash: "#careers", label: "Careers" },
    { hash: "#partners", label: "Partners" },
  ];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="About ETDOX"
        title={
          <>
            Your technical team,{" "}
            <span className="text-[#CD1C18]">on demand.</span>
          </>
        }
        kicker="AI-Native Technology & Digital Transformation Partner"
        description={about.positioning}
        breadcrumbs={[{ label: "Company" }]}
        index="01"
        actions={
          <div className="flex flex-wrap gap-2 pt-1">
            {quickNav.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                className="px-3.5 py-1.5 bg-white hover:bg-[#FFA896] border border-[#38000A]/15 hover:border-[#9B1313] rounded-lg text-xs font-mono text-[#38000A] hover:text-[#38000A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        }
      />

      {/* 1. About */}
      <section id="about" className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>Core positioning</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#38000A] tracking-tight leading-[1.08]">
                We build intelligent technology.
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#4A2A31] leading-relaxed">
                You have a technical problem. We have the people and technology
                to solve it.
              </p>
              <div className="mt-8 border-l-[3px] border-[#CD1C18] pl-5">
                <p className="text-base sm:text-lg text-[#38000A] leading-relaxed font-medium">
                  “{about.mission}”
                </p>
              </div>

              <div className="mt-10">
                <MissionGraphic
                  className="w-full h-auto max-w-[360px]"
                  labels={["AI-NATIVE", "PODS", "OPEN", "DURABLE"]}
                />
              </div>
            </Reveal>

            <Reveal delay={1} className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {about.corePillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="group bg-[#FFF9F7] border border-[#38000A]/10 rounded-xl p-6 hover:border-[#CD1C18]/40 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase tracking-wider">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 mx-3 bg-[#38000A]/10" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#A97884]">
                        Foundation
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#38000A] mb-2 group-hover:text-[#CD1C18] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#4A2A31] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Team / Pods */}
      <section id="team" className="py-24 lg:py-32 bg-[#FFFBFA] border-b border-[#38000A]/10 scroll-mt-24 relative overflow-hidden">
        <NodeField tone="light" density={14} className="absolute top-0 right-0 w-1/3 h-full opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl">
                <p className="eyebrow text-[#CD1C18] mb-5">
                  <span>Delivery pod architecture</span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                  Multidisciplinary technical team
                </h2>
              </div>
              <p className="text-sm text-[#4A2A31] leading-relaxed lg:max-w-sm">
                Instead of isolated freelance contractors, we organize into
                integrated delivery pods spanning seven core disciplines.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {disciplines.map((item, idx) => (
              <Reveal key={item.discipline} delay={(idx % 3)}>
                <div className="group h-full bg-white p-6 rounded-xl border border-[#38000A]/10 hover:border-[#CD1C18]/40 hover:shadow-card-subtle transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#CD1C18] bg-[#CD1C18]/8 px-2.5 py-1 rounded">
                      {item.discipline}
                    </span>
                    <span className="text-[11px] font-mono text-[#7A5A60] uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#38000A] mb-2 group-hover:text-[#CD1C18] transition-colors">
                    {item.discipline} Pod
                  </h3>
                  <p className="text-xs text-[#4A2A31] leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={2} className="h-full">
              <div className="h-full bg-[#38000A] text-white p-6 rounded-xl border border-[#38000A]/20 flex flex-col justify-between shadow-card-subtle">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#FFA896] uppercase font-bold">
                    Pod Composition
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    Custom Pod Assembly
                  </h3>
                  <p className="text-xs text-[#FFD9CE] leading-relaxed">
                    Each client requirement receives a balanced pod calibrated
                    for speed, architectural integrity, and code quality.
                  </p>
                </div>
                <Link
                  to="/contact?intent=project"
                  className="text-xs font-mono font-bold text-[#FFA896] hover:text-white pt-5 flex items-center gap-1 transition-colors"
                >
                  <span>Assemble Your Pod →</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Technology Stack */}
      <section id="technology" className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
              <div className="lg:col-span-8">
                <p className="eyebrow text-[#CD1C18] mb-5">
                  <span>Engineering foundation</span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-display font-extrabold text-[#38000A] tracking-tight leading-[1.06]">
                  Modern technology stack
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm text-[#4A2A31] leading-relaxed">
                  Production-proven open-source and cloud-native frameworks built
                  for scale, resilience, and maintainability.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              { icon: Cpu, label: "AI & Model Foundation", items: techStack.ai },
              { icon: Code2, label: "Software & Application Layer", items: techStack.software },
              { icon: Database, label: "Data & Streaming Engines", items: techStack.data },
              { icon: Cloud, label: "Cloud & DevOps Automation", items: techStack.cloud },
              { icon: Shield, label: "Cyber Defense & Observability", items: techStack.security },
            ].map((group, idx) => (
              <Reveal key={group.label} delay={(idx % 2)}>
                <div className="h-full bg-[#FFF9F7] border border-[#38000A]/10 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#9B1313]">
                    <group.icon className="w-4 h-4 text-[#CD1C18]" />
                    <span>{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-[#38000A]/10 text-[#38000A] font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Careers */}
      <section id="careers" className="py-24 lg:py-32 bg-[#38000A] text-white border-b border-[#38000A]/20 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="eyebrow text-[#FFA896] mb-5">
                  <span>{careers.badge}</span>
                </p>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                  {careers.headline}
                </h2>
                <p className="text-[#FFD9CE] text-base sm:text-lg leading-relaxed">
                  {careers.intro}
                </p>
              </div>
              <div className="lg:col-span-5">
                <CareerGraphic className="w-full h-auto max-w-[420px] lg:ml-auto" />
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careers.values.map((val, i) => (
              <Reveal key={i} delay={(i % 3)}>
                <div className="h-full p-6 rounded-xl bg-[#240006] border border-[#FFA896]/15 space-y-3">
                  <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase">
                    Value 0{i + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#FFD9CE]/90 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="p-8 rounded-2xl bg-[#240006]/80 border border-[#FFA896]/15 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-left">
                <span className="text-xs font-mono text-[#FFA896] font-bold uppercase tracking-wider">
                  Hiring status: rolling evaluations
                </span>
                <p className="text-sm text-[#FFD9CE] leading-relaxed max-w-xl">
                  {careers.rolesNote} Send your GitHub, engineering portfolio, or
                  CV directly to our technical founders.
                </p>
              </div>
              <a
                href={`mailto:${careers.openInquiryEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#CD1C18] text-white font-mono text-xs font-bold uppercase hover:bg-[#9B1313] transition-colors shrink-0 shadow-chili-glow"
              >
                <span>{careers.openInquiryEmail}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Partners */}
      <section id="partners" className="py-24 lg:py-32 bg-[#FFF9F7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>{partners.badge}</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#38000A] tracking-tight leading-[1.08]">
                {partners.headline}
              </h2>
              <p className="text-[#4A2A31] text-sm sm:text-base leading-relaxed">
                {partners.description}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.ecosystemCategories.map((cat, i) => (
              <Reveal key={i} delay={(i % 4)}>
                <div className="h-full p-6 rounded-xl bg-white border border-[#38000A]/10 hover:border-[#CD1C18]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#CD1C18] uppercase">
                    Ecosystem 0{i + 1}
                  </span>
                  <h3 className="font-display font-bold text-base text-[#38000A] mt-2 mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#4A2A31] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center pt-8 border-t border-[#38000A]/10">
              <p className="text-xs font-mono text-[#7A5A60] mb-3">
                Interested in technology partnership or cloud alliance?
              </p>
              <a
                href={`mailto:${partners.inquiryEmail}`}
                className="font-mono text-xs font-bold text-[#CD1C18] hover:text-[#9B1313] transition-colors"
              >
                Contact Technology Alliances: {partners.inquiryEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}