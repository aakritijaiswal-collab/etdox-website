import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, Shield, Cpu } from "lucide-react";
import Button from "../common/Button";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: "Industries", path: "/industries" },
    { name: "Products", path: "/products" },
    { name: "How We Work", path: "/how-we-work" },
    { name: "Company", path: "/company" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#38000A]/95 backdrop-blur-md border-b border-[#5A0B19]/80 py-3.5 shadow-xl"
          : "bg-[#38000A]/85 backdrop-blur-sm border-b border-[#5A0B19]/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#CD1C18] to-[#9B1313] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-base tracking-tighter">E</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#FFA896] transition-colors">
                  ETDOX
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CD1C18]"></span>
              </div>
              <span className="hidden xl:block text-[9px] font-mono tracking-widest text-[#FFA896]/70 uppercase">
                Intelligent Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium">
            {/* Solutions Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm rounded-md transition-colors ${
                  location.pathname.startsWith("/solutions") || megaMenuOpen
                    ? "text-white bg-[rgba(255,168,150,0.1)] font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-[#FFA896] ${
                    megaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-[rgba(255,168,150,0.1)] font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/how-we-work"
              className="text-xs font-mono text-[#FFA896] hover:text-white tracking-wider uppercase px-2.5 py-1.5 border border-[#5A0B19] rounded hover:border-[#FFA896]/40 transition-colors"
            >
              7-Day Trial
            </Link>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="shadow-chili-glow"
            >
              LET'S TALK
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              LET'S TALK
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#5A0B19]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <MegaMenu
        isOpen={megaMenuOpen}
        onClose={() => setMegaMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#240006] border-b border-[#5A0B19] px-4 pt-4 pb-6 space-y-3 max-h-[80vh] overflow-y-auto shadow-2xl">
          {/* Solutions Accordion */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between text-left py-2 px-3 text-sm font-semibold text-white rounded hover:bg-white/5"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 text-[#FFA896] transition-transform ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-4 pr-2 py-2 space-y-3 border-l-2 border-[#CD1C18] my-1 ml-2 text-xs">
                <div>
                  <Link
                    to="/solutions/ai-automation"
                    className="font-mono text-[#FFA896] block py-1 font-semibold"
                  >
                    AI & AUTOMATION
                  </Link>
                  <p className="text-gray-400 text-[11px]">AI Agents, RAG, Chatbots, Generative AI</p>
                </div>
                <div>
                  <Link
                    to="/solutions/software"
                    className="font-mono text-[#FFA896] block py-1 font-semibold"
                  >
                    SOFTWARE
                  </Link>
                  <p className="text-gray-400 text-[11px]">Web, Mobile, SaaS, Microservices, APIs</p>
                </div>
                <div>
                  <Link
                    to="/solutions/data-cloud"
                    className="font-mono text-[#FFA896] block py-1 font-semibold"
                  >
                    DATA & CLOUD
                  </Link>
                  <p className="text-gray-400 text-[11px]">Pipelines, Analytics, Cloud, DevOps, MLOps</p>
                </div>
                <div>
                  <Link
                    to="/solutions/security"
                    className="font-mono text-[#FFA896] block py-1 font-semibold"
                  >
                    SECURITY
                  </Link>
                  <p className="text-gray-400 text-[11px]">Cybersecurity, Infrastructure Hardening</p>
                </div>
                <Link
                  to="/solutions"
                  className="inline-block text-[#CD1C18] hover:underline font-semibold pt-1"
                >
                  View All Solutions & Full Map →
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 px-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-[#5A0B19]/50 flex flex-col gap-2">
            <Link
              to="/how-we-work"
              className="text-center py-2 text-xs font-mono text-[#FFA896] bg-[#38000A] border border-[#5A0B19] rounded"
            >
              7-DAY TRIAL & PROTOTYPE DETAILS
            </Link>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full text-center"
            >
              START A PROJECT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
