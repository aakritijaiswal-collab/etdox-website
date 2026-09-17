import React from "react";

export default function Badge({ children, variant = "coral", className = "" }) {
  const variantStyles = {
    coral: "bg-[rgba(255,168,150,0.2)] text-[#9B1313] border border-[#FFA896]/60",
    coralDark: "bg-[rgba(255,168,150,0.12)] text-[#FFA896] border border-[rgba(255,168,150,0.25)]",
    red: "bg-[#CD1C18]/8 text-[#CD1C18] border border-[#CD1C18]/20",
    burgundy: "bg-[#38000A] text-white border border-[#38000A]/20",
    neutral: "bg-[#FFF2EC] text-[#4A2A31] border border-[#38000A]/10",
  }[variant] || "bg-[#FFF2EC] text-[#4A2A31] border border-[#38000A]/10";

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full tracking-wider uppercase ${variantStyles} ${className}`}>
      {children}
    </span>
  );
}