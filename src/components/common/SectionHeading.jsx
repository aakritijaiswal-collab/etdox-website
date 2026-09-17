import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  _badgeVariant,
  rule = true,
  className = ""
}) {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center items-center mx-auto max-w-3xl" : "text-left items-start max-w-3xl";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 ${align === "center" ? "eyebrow-plain" : ""}`}>
          {typeof eyebrow === "string" ? (
            <span className={`eyebrow ${isDark ? "text-[#FFA896]" : "text-[#CD1C18]"} ${align === "center" ? "eyebrow-plain" : ""}`}>
              {eyebrow}
            </span>
          ) : (
            eyebrow
          )}
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold tracking-tight leading-[1.1] ${
          isDark ? "text-white" : "text-[#38000A]"
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${
          isDark ? "text-[#FFD9CE]" : "text-[#4A2A31]"
        }`}>
          {subtitle}
        </p>
      )}

      {rule && (
        <span
          aria-hidden="true"
          className={`mt-6 block h-px w-16 ${isDark ? "bg-[#CD1C18]" : "bg-[#CD1C18]"} ${align === "center" ? "mx-auto" : ""}`}
        />
      )}
    </div>
  );
}