import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase, Landmark, Factory, HeartPulse, ShoppingBag, Truck, GraduationCap, Shield } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
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
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#38000A] text-white py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "INDUSTRIES" }]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              SECTOR EXPERTISE
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Specialized Industry Delivery
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Domain-aware technology architectures engineered for the operational realities, regulatory constraints, and scale demands of nine global industries.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact?intent=trial" variant="coral" size="sm">
                START 7-DAY TRIAL
              </Button>
              <Button to="/contact?intent=prototype" variant="outlineOnDark" size="sm">
                REQUEST FREE PROTOTYPE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Industries Grid */}
      <section className="py-20 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industriesData.map((ind, idx) => {
              const Icon = iconMap[ind.id] || Building2;
              return (
                <article
                  key={ind.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#CD1C18] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#38000A] text-[#FFA896] flex items-center justify-center group-hover:bg-[#CD1C18] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gray-400 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display font-bold text-xl text-gray-950 group-hover:text-[#CD1C18] transition-colors mb-2">
                        {ind.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {ind.tagline}
                      </p>
                    </div>

                    {/* Highlight Badge */}
                    <div className="pt-2">
                      <span className="inline-block text-[11px] font-mono text-[#9B1313] bg-red-50 border border-red-100 px-2.5 py-1 rounded">
                        {ind.highlightStat}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="text-xs font-mono font-bold text-[#CD1C18] group-hover:text-[#9B1313] flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#170004] text-white border-t border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Looking for engineering tailored to your industry?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            We adapt data perimeters, security postures, and technology frameworks to meet your specific compliance and performance mandates.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              LET'S TALK
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
