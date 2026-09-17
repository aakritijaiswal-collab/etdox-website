import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#170004] text-gray-300 border-t border-[#5A0B19]/50">
      {/* Top Banner / Positioning */}
      <div className="border-b border-[#5A0B19]/30 bg-[#240006]/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#CD1C18] to-[#9B1313] flex items-center justify-center text-white font-display font-black shadow-chili-glow">
              E
            </div>
            <div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">ETDOX</span>
              <p className="text-xs font-mono text-[#FFA896] tracking-widest uppercase">
                We Build Intelligent Technology
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#38000A] border border-[#5A0B19] text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#CD1C18] animate-pulse"></span>
              YOUR TECHNICAL TEAM, ON DEMAND
            </span>
            <Link
              to="/contact?intent=trial"
              className="text-[#FFA896] hover:text-white transition-colors underline underline-offset-4"
            >
              Start 7-Day Trial →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Solutions */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CD1C18] pl-2">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/solutions/ai-automation" className="hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/software" className="hover:text-white transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-cloud" className="hover:text-white transition-colors">
                  Data & Cloud
                </Link>
              </li>
              <li>
                <Link to="/solutions/security" className="hover:text-white transition-colors">
                  Cybersecurity & Infra
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital" className="hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#FFA896] hover:underline pt-1 inline-block">
                  Full Capability Map →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CD1C18] pl-2">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/industries/startups-smbs" className="hover:text-white transition-colors">
                  Startups & SMBs
                </Link>
              </li>
              <li>
                <Link to="/industries/enterprise" className="hover:text-white transition-colors">
                  Enterprise Systems
                </Link>
              </li>
              <li>
                <Link to="/industries/bfsi" className="hover:text-white transition-colors">
                  BFSI & Fintech
                </Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" className="hover:text-white transition-colors">
                  Manufacturing & IoT
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="hover:text-white transition-colors">
                  Healthcare & Life Sciences
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#FFA896] hover:underline pt-1 inline-block">
                  All 9 Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: How We Work */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CD1C18] pl-2">
              How We Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/how-we-work#process" className="hover:text-white transition-colors">
                  7-Phase Delivery Process
                </Link>
              </li>
              <li>
                <Link to="/how-we-work#trial" className="hover:text-white transition-colors">
                  7-Day Free Trial
                </Link>
              </li>
              <li>
                <Link to="/how-we-work#prototype" className="hover:text-white transition-colors">
                  1 Free Prototype Offering
                </Link>
              </li>
              <li>
                <Link to="/how-we-work#models" className="hover:text-white transition-colors">
                  Engagement Models
                </Link>
              </li>
              <li>
                <Link to="/how-we-work#models" className="hover:text-white transition-colors">
                  Equity-Based Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CD1C18] pl-2">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/company#about" className="hover:text-white transition-colors">
                  About ETDOX
                </Link>
              </li>
              <li>
                <Link to="/company#team" className="hover:text-white transition-colors">
                  Technical Pod Structure
                </Link>
              </li>
              <li>
                <Link to="/company#technology" className="hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link to="/company#careers" className="hover:text-white transition-colors">
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link to="/company#partners" className="hover:text-white transition-colors">
                  Partner Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products & SaaS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Direct Actions */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#CD1C18] pl-2">
              Start
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/contact?intent=project" className="text-white hover:text-[#FFA896] transition-colors flex items-center gap-1">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CD1C18]" />
                </Link>
              </li>
              <li>
                <Link to="/contact?intent=trial" className="text-white hover:text-[#FFA896] transition-colors flex items-center gap-1">
                  <span>Start 7-Day Trial</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CD1C18]" />
                </Link>
              </li>
              <li>
                <Link to="/contact?intent=prototype" className="text-white hover:text-[#FFA896] transition-colors flex items-center gap-1">
                  <span>Request Free Prototype</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CD1C18]" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-[#FFA896] transition-colors flex items-center gap-1">
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3 h-3 text-[#CD1C18]" />
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#5A0B19]/50">
              <span className="text-[11px] font-mono text-gray-400 block mb-2">CONNECT</span>
              <div className="flex items-center gap-3 text-gray-400">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded bg-[#38000A] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#CD1C18] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded bg-[#38000A] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#CD1C18] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-8 h-8 rounded bg-[#38000A] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#CD1C18] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy & Terms */}
        <div className="mt-16 pt-8 border-t border-[#5A0B19]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2026 ETDOX. All rights reserved.</span>
            <span className="text-[#5A0B19]">•</span>
            <span className="text-gray-400">AI-Native Technology Partner</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#5A0B19]">•</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#5A0B19]">•</span>
            <Link to="/how-we-work#trial" className="hover:text-[#FFA896] transition-colors">
              Trial Scope & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
