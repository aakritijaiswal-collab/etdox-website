import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  icon: Icon,
  iconPosition = "right"
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CD1C18] focus-visible:ring-offset-1 focus-visible:ring-offset-[#FFF9F7] disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wide";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  }[size] || "text-sm px-5 py-2.5 gap-2";

  const variantClasses = {
    // Primary Red CTA
    primary: "bg-[#CD1C18] text-white hover:bg-[#9B1313] active:bg-[#7A0E0E] shadow-sm hover:shadow-chili-glow",

    // Secondary / Soft Coral accent
    coral: "bg-[#FFA896] text-[#38000A] hover:bg-[#ff9680] active:bg-[#f8866e] font-semibold",

    // Dark burgundy button
    burgundy: "bg-[#38000A] text-white hover:bg-[#4E0612] border border-[#38000A]/20",

    // Ghost / Outline on Dark sections
    outlineOnDark: "border border-[rgba(255,168,150,0.3)] text-[#FFA896] hover:bg-[rgba(255,168,150,0.1)] hover:border-[#FFA896] hover:text-white",

    // Outline on Light Surface
    outline: "border border-[#38000A]/25 text-[#38000A] hover:border-[#CD1C18] hover:text-[#CD1C18] bg-white hover:bg-white",

    // Ghost Minimal
    ghost: "text-[#4A2A31] hover:text-[#CD1C18] hover:bg-[#CD1C18]/5"
  }[variant] || "bg-[#CD1C18] text-white hover:bg-[#9B1313]";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </button>
  );
}