import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { NodeField } from "../graphics/ChiliArtworks";

export default function PageHero({
  eyebrow,
  title,
  kicker,
  description,
  breadcrumbs = [],
  actions,
  badge,
  index = "",
  meta,
  className = "",
}) {
  return (
    <section className={`relative overflow-hidden bg-[#FFF9F7] border-b border-[#38000A]/10 ${className}`}>
      {/* Decorative accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFA896]/25 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CD1C18] via-[#9B1313] to-transparent" />
      <NodeField className="absolute inset-y-0 right-0 w-1/2 h-full opacity-40 pointer-events-none hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {breadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="relative">
          {index && (
            <span
              aria-hidden="true"
              className="hidden lg:block absolute -right-6 top-0 font-mono text-[120px] leading-none font-black text-[#38000A] opacity-[0.06] select-none pointer-events-none"
            >
              {index}
            </span>
          )}

          <div className="max-w-3xl relative">
            {eyebrow && (
              <p className="eyebrow mb-5 text-[#CD1C18]">
                <span>{eyebrow}</span>
              </p>
            )}

            {badge && <div className="mb-5">{badge}</div>}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#38000A] leading-[1.08]">
              {title}
            </h1>

            {kicker && (
              <p className="mt-4 text-base sm:text-lg font-semibold text-[#9B1313]">
                {kicker}
              </p>
            )}

            {description && (
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4A2A31] max-w-2xl">
                {description}
              </p>
            )}

            {meta && (
              <p className="mt-5 text-xs font-mono font-semibold text-[#9B1313] uppercase tracking-wider border-l-2 border-[#CD1C18] pl-3">
                {meta}
              </p>
            )}

            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}