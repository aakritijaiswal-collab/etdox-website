import React from "react";

export default function Badge({ children, variant = "coral", className = "" }) {
  const variantStyles = {
    coral: "bg-[rgba(255,168,150,0.15)] text-[#CD1C18] border border-[rgba(255,168,150,0.35)]",
    coralDark: "bg-[rgba(255,168,150,0.12)] text-[#FFA896] border border-[rgba(255,168,150,0.25)]",
    red: "bg-[#CD1C18]/10 text-[#CD1C18] border border-[#CD1C18]/20",
    burgundy: "bg-[#38000A] text-white border border-[#5A0B19]",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
  }[variant] || "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full tracking-wider uppercase ${variantStyles} ${className}`}>
      {children}
    </span>
  );
}
