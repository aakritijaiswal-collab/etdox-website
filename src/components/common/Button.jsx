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
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wide";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  }[size] || "text-sm px-5 py-2.5 gap-2";

  const variantClasses = {
    // Primary Red CTA
    primary: "bg-[#CD1C18] text-white hover:bg-[#9B1313] active:bg-[#7A0E0E] shadow-sm hover:shadow-chili-glow focus:ring-[#CD1C18]",
    
    // Secondary / Soft Coral accent
    coral: "bg-[#FFA896] text-[#38000A] hover:bg-[#ff9680] active:bg-[#f8866e] font-semibold focus:ring-[#FFA896]",
    
    // Dark burgundy hero button / high contrast
    burgundy: "bg-[#38000A] text-white hover:bg-[#4E0612] border border-[#5A0B19] focus:ring-[#CD1C18]",
    
    // Ghost / Outline on Dark Burgundy
    outlineOnDark: "border border-[rgba(255,168,150,0.3)] text-white hover:bg-[rgba(255,168,150,0.1)] hover:border-[#FFA896] focus:ring-[#FFA896]",
    
    // Outline on Light Surface
    outline: "border border-gray-300 text-gray-800 hover:border-[#CD1C18] hover:text-[#CD1C18] bg-white hover:bg-gray-50 focus:ring-[#CD1C18]",
    
    // Ghost Minimal
    ghost: "text-gray-700 hover:text-[#CD1C18] hover:bg-gray-100/70 focus:ring-[#CD1C18]"
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
