import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, AlertCircle, Lightbulb, Cpu, CheckCircle2, ArrowLeft, Shield } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import { industriesData } from "../data/industriesData";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData.find((i) => i.slug === slug) || industriesData[0];

  return (
    <div className="bg-[#FFF9F7]">
      {/* Header */}
      <PageHero
        eyebrow="Industry specification"
        title={industry.name}
        kicker={industry.tagline}
        description={industry.heroDescription}
        breadcrumbs={[
          { label: "Industries", to: "/industries" },
          { label: industry.name.toUpperCase() },
        ]}
        index="05"
        actions={
          <>
            <Button to={`/contact?intent=trial&service=${encodeURIComponent(industry.name)}`} variant="primary" size="md">
              Start 7-day trial
            </Button>
            <Button to="/contact?intent=prototype" variant="outline" size="md">
              Request free prototype
            </Button>
          </>
        }
      />

      {/* Blueprint */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-[#FFF9F7] rounded-2xl border border-[#38000A]/10 p-6 sm:p-10 lg:p-14 space-y-12">
              {/* Focus strip */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FFF2EC] border border-[#FFA896] text-xs font-mono text-[#38000A]">
                <Shield className="w-4 h-4 text-[#CD1C18] shrink-0" />
                <span className="font-bold">ENGINEERING FOCUS:</span>
                <span>{industry.highlightStat}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Problem & Solution & Use cases */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#CD1C18]">
                      <AlertCircle className="w-4 h-4" />
                      <span>01. The Industry Challenge</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#38000A] tracking-tight">
                      Operational & Architectural Bottlenecks
                    </h3>
                    <div className="bg-[#FFF2EC] border-l-4 border-[#CD1C18] p-5 rounded-r-xl">
                      <p className="text-sm text-[#38000A] leading-relaxed">
                        {industry.problem}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#38000A]">
                      <Lightbulb className="w-4 h-4 text-[#CD1C18]" />
                      <span>02. The ETDOX Solution</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#38000A] tracking-tight">
                      High-Performance Engineering Approach
                    </h3>
                    <div className="border-l-4 border-[#38000A] bg-[#FFF9F7] p-5 rounded-r-xl">
                      <p className="text-sm text-[#4A2A31] leading-relaxed">
                        {industry.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-[#9B1313] block">
                      04. Representative Architectural Use Cases
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.useCases.map((uc, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-[#38000A]/10 text-xs text-[#4A2A31]">
                          <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technology & CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#38000A]/10 self-start lg:sticky lg:top-24">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#7A5A60] mb-3">
                        <Cpu className="w-4 h-4 text-[#CD1C18]" />
                        <span>03. Recommended Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {industry.technology.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-[#FFF9F7] border border-[#38000A]/10 text-[#38000A] font-mono text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FFF9F7] border border-[#38000A]/10 space-y-2 text-xs">
                      <span className="font-mono text-[#9B1313] uppercase tracking-wider text-[10px] font-bold block">
                        Engagement Timelines
                      </span>
                      <p className="text-[#4A2A31] font-medium">
                        Immediate deployment of specialized pods with domain familiarity.
                      </p>
                      <ul className="text-[#7A5A60] space-y-1 text-[11px]">
                        <li>• Technical discovery within 24-48 hours</li>
                        <li>• 7-day evaluation sprint available</li>
                        <li>• Free prototype for qualifying projects</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#38000A]/10">
                    <span className="font-mono text-xs text-[#CD1C18] uppercase tracking-wider block font-bold">
                      05. Next Action
                    </span>
                    <Button
                      to={`/contact?intent=project&service=${encodeURIComponent(industry.name)}`}
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      className="w-full text-center font-bold"
                    >
                      Deploy for {industry.name}
                    </Button>
                    <Button
                      to={`/contact?intent=trial&service=${encodeURIComponent(industry.name)}`}
                      variant="outline"
                      size="md"
                      className="w-full text-center"
                    >
                      Start 7-day trial →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cross-industry navigation */}
      <section className="py-12 bg-[#FFF9F7] border-t border-[#38000A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/industries"
            className="text-xs font-mono text-[#7A5A60] hover:text-[#CD1C18] flex items-center gap-1.5 uppercase font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Industries</span>
          </Link>

          <Link
            to="/contact"
            className="text-xs font-mono text-[#CD1C18] hover:text-[#9B1313] flex items-center gap-1.5 uppercase font-bold transition-colors"
          >
            <span>Have a Specific Requirement? Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}