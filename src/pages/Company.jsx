import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Users, Cpu, Shield, Briefcase, Handshake, CheckCircle2, Terminal, Code2, Database, Cloud } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import { companyData } from "../data/companyData";

export default function Company() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const { about, disciplines, techStack, careers, partners } = companyData;

  return (
    <div className="bg-white">
      {/* Header Banner (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "COMPANY" }]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              ABOUT ETDOX
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Your technical team, on demand.
            </h1>
            <p className="text-[#FFA896] text-lg font-medium">
              AI-Native Technology & Digital Transformation Partner
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {about.positioning}
            </p>

            {/* Quick Section Navigation */}
            <div className="pt-4 flex flex-wrap gap-2">
              <a href="#about" className="px-3 py-1 bg-[#240006] hover:bg-[#CD1C18] border border-[#5A0B19] rounded text-xs font-mono text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#team" className="px-3 py-1 bg-[#240006] hover:bg-[#CD1C18] border border-[#5A0B19] rounded text-xs font-mono text-gray-300 hover:text-white transition-colors">
                Team Pods
              </a>
              <a href="#technology" className="px-3 py-1 bg-[#240006] hover:bg-[#CD1C18] border border-[#5A0B19] rounded text-xs font-mono text-gray-300 hover:text-white transition-colors">
                Technology
              </a>
              <a href="#careers" className="px-3 py-1 bg-[#240006] hover:bg-[#CD1C18] border border-[#5A0B19] rounded text-xs font-mono text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#partners" className="px-3 py-1 bg-[#240006] hover:bg-[#CD1C18] border border-[#5A0B19] rounded text-xs font-mono text-gray-300 hover:text-white transition-colors">
                Partners
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. About Section */}
      <section id="about" className="py-24 bg-white border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold">
              CORE POSITIONING
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              We Build Intelligent Technology.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {about.mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.corePillars.map((pillar, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FBFBFC] border border-gray-200 space-y-3">
                <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase">
                  0{i + 1} • FOUNDATION
                </span>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Team: Multidisciplinary Pods */}
      <section id="team" className="py-24 bg-[#F8F9FA] border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold">
              DELIVERY POD ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              Multidisciplinary Technical Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Instead of isolated freelance contractors, we organize into integrated delivery pods spanning seven core disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((item, idx) => (
              <div
                key={item.discipline}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#CD1C18] bg-[#CD1C18]/10 px-2.5 py-0.5 rounded">
                    {item.discipline}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900">
                  {item.discipline} Pod
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}

            <div className="bg-[#38000A] text-white p-6 rounded-xl border border-[#5A0B19] flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#FFA896] uppercase font-bold">
                  POD COMPOSITION
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Custom Pod Assembly
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Each client requirement receives a balanced pod calibrated for speed, architectural integrity, and code quality.
                </p>
              </div>
              <Link
                to="/contact?intent=project"
                className="text-xs font-mono font-bold text-[#FFA896] hover:underline pt-4 flex items-center gap-1"
              >
                <span>Assemble Your Pod →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Stack */}
      <section id="technology" className="py-24 bg-white border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold">
              ENGINEERING FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              Modern Technology Stack
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We leverage production-proven open-source and cloud-native frameworks built for scale, resilience, and maintainability.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-xl p-6 bg-[#FBFBFC]">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#CD1C18]">
                <Cpu className="w-4 h-4" />
                <span>AI & Model Foundation</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.ai.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#FBFBFC]">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#CD1C18]">
                <Code2 className="w-4 h-4" />
                <span>Software & Application Layer</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.software.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#FBFBFC]">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#CD1C18]">
                <Database className="w-4 h-4" />
                <span>Data & Streaming Engines</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.data.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#FBFBFC]">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#CD1C18]">
                <Cloud className="w-4 h-4" />
                <span>Cloud & DevOps Automation</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.cloud.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#FBFBFC]">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase text-[#CD1C18]">
                <Shield className="w-4 h-4" />
                <span>Cyber Defense & Observability</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.security.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Careers Section */}
      <section id="careers" className="py-24 bg-[#38000A] text-white border-b border-[#5A0B19] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              {careers.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              {careers.headline}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {careers.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careers.values.map((val, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#240006] border border-[#5A0B19] space-y-3">
                <span className="font-mono text-xs font-bold text-[#CD1C18] uppercase">
                  VALUE 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#170004] border border-[#5A0B19] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <span className="text-xs font-mono text-[#FFA896] font-bold uppercase">
                HIRING STATUS: ROLLING EVALUATIONS
              </span>
              <p className="text-sm text-gray-300 max-w-xl">
                {careers.rolesNote} Send your GitHub, engineering portfolio, or CV directly to our technical founders.
              </p>
            </div>
            <a
              href={`mailto:${careers.openInquiryEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#CD1C18] text-white font-mono text-xs font-bold uppercase hover:bg-[#9B1313] transition-colors shrink-0"
            >
              <span>{careers.openInquiryEmail}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Partners Section */}
      <section id="partners" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold">
              {partners.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              {partners.headline}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {partners.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.ecosystemCategories.map((cat, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#FBFBFC] border border-gray-200 space-y-2">
                <span className="text-xs font-mono font-bold text-[#CD1C18] uppercase">
                  ECOSYSTEM 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-base text-gray-900">
                  {cat.category}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-xs font-mono text-gray-500 mb-3">
              Interested in technology partnership or cloud alliance?
            </p>
            <a
              href={`mailto:${partners.inquiryEmail}`}
              className="font-mono text-xs font-bold text-[#CD1C18] hover:underline"
            >
              Contact Technology Alliances: {partners.inquiryEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
