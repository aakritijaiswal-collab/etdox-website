import React from "react";

export default function Card({
  children,
  variant = "light",
  className = "",
  hoverEffect = true,
  onClick
}) {
  const isDark = variant === "dark";

  const baseStyle = isDark
    ? "bg-[#38000A]/70 border border-[#5A0B19]/60 text-white shadow-lg"
    : "bg-white border border-gray-200/90 text-gray-900 shadow-sm";

  const hoverStyle = hoverEffect
    ? isDark
      ? "hover:border-[#FFA896]/50 hover:bg-[#38000A]/90 hover:shadow-chili-glow transition-all duration-300"
      : "hover:border-[#CD1C18]/40 hover:shadow-md transition-all duration-300"
    : "";

  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden ${baseStyle} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
}
