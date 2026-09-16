import React from "react";
import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  badgeVariant,
  className = ""
}) {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center items-center mx-auto max-w-3xl" : "text-left items-start max-w-3xl";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="mb-3.5">
          {typeof eyebrow === "string" ? (
            <span className={`inline-block font-mono text-xs uppercase tracking-widest font-semibold ${isDark ? "text-[#FFA896]" : "text-[#CD1C18]"}`}>
              {eyebrow}
            </span>
          ) : (
            eyebrow
          )}
        </div>
      )}
      
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-950"}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
