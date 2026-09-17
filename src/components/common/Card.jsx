import React from "react";

export default function Card({
  children,
  variant = "light",
  className = "",
  hoverEffect = true,
  accent = false,
  onClick
}) {
  const isDark = variant === "dark";

  const baseStyle = isDark
    ? "bg-[#38000A] border border-[#38000A]/15 text-white"
    : "bg-white border border-[#38000A]/10 text-[#241016]";

  const hoverStyle = hoverEffect
    ? isDark
      ? "hover:border-[#FFA896]/45 transition-all duration-300"
      : "hover:border-[#CD1C18]/40 hover:translate-y-[-2px] transition-all duration-300"
    : "";

  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl p-6 sm:p-8 ${baseStyle} ${hoverStyle} ${className}`}
    >
      {accent && (
        <span
          aria-hidden="true"
          className={`absolute top-0 left-6 right-6 h-[3px] rounded-b ${
            isDark ? "bg-[#CD1C18]" : "bg-[#CD1C18]"
          }`}
        />
      )}
      {children}
    </div>
  );
}