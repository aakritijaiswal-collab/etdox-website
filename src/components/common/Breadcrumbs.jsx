import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [], theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono mb-6 overflow-x-auto py-1">
      <Link
        to="/"
        className={`inline-flex items-center gap-1 transition-colors ${
          isDark ? "text-gray-300 hover:text-[#FFA896]" : "text-[#7A5A60] hover:text-[#CD1C18]"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>HOME</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-[#C9A39E]"}`} />
            {isLast || !item.to ? (
              <span className={`font-semibold uppercase tracking-wider ${isDark ? "text-[#FFA896]" : "text-[#CD1C18]"}`}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className={`transition-colors uppercase tracking-wider ${
                  isDark ? "text-gray-300 hover:text-[#FFA896]" : "text-[#7A5A60] hover:text-[#CD1C18]"
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}