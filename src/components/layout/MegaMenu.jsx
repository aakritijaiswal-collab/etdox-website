import React from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Database, ShieldCheck, ArrowRight } from "lucide-react";

export default function MegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = [
    {
      title: "AI",
      icon: Brain,
      categoryPath: "/solutions/ai-automation",
      items: [
        { name: "AI Automation", path: "/solutions/ai-automation#ai-automation-core" },
        { name: "AI Chatbots", path: "/solutions/ai-automation#ai-chatbots" },
        { name: "AI Agents", path: "/solutions/ai-automation#ai-agents" },
        { name: "Generative AI", path: "/solutions/ai-automation#generative-ai" },
        { name: "RAG & Knowledge Systems", path: "/solutions/ai-automation#rag-knowledge-systems" },
        { name: "AI / ML", path: "/solutions/ai-automation#ai-ml" },
      ]
    },
    {
      title: "SOFTWARE",
      icon: Code2,
      categoryPath: "/solutions/software",
      items: [
        { name: "Web Development", path: "/solutions/software#web-development" },
        { name: "App Development", path: "/solutions/software#mobile-app-development" },
        { name: "SaaS Platforms", path: "/solutions/software#saas" },
        { name: "Microservices", path: "/solutions/software#apis-microservices" },
        { name: "APIs & Integrations", path: "/solutions/software#apis-microservices" },
        { name: "Enterprise Software", path: "/solutions/software#enterprise-software" },
      ]
    },
    {
      title: "DATA & CLOUD",
      icon: Database,
      categoryPath: "/solutions/data-cloud",
      items: [
        { name: "Data Engineering", path: "/solutions/data-cloud#data-engineering" },
        { name: "Data Analytics", path: "/solutions/data-cloud#data-analytics" },
        { name: "Cloud Architecture", path: "/solutions/data-cloud#cloud-infrastructure" },
        { name: "DevOps", path: "/solutions/data-cloud#devops" },
        { name: "MLOps", path: "/solutions/data-cloud#mlops" },
      ]
    },
    {
      title: "SECURITY",
      icon: ShieldCheck,
      categoryPath: "/solutions/security",
      items: [
        { name: "Cybersecurity", path: "/solutions/security#cybersecurity" },
        { name: "Infrastructure Security", path: "/solutions/security#infrastructure-security" },
        { name: "Secure Integrations", path: "/solutions/security#secure-integrations" },
      ]
    }
  ];

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/97 border-b border-[#38000A]/10 backdrop-blur-xl shadow-2xl z-50 animate-fade-in"
      style={{ background: "rgba(255,255,255,0.97)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((col) => {
            const IconComponent = col.icon;
            return (
              <div key={col.title} className="space-y-4">
                <Link
                  to={col.categoryPath}
                  onClick={onClose}
                  className="flex items-center gap-2.5 group text-[#38000A] hover:text-[#CD1C18] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFA896]/40 border border-[#FFA896] flex items-center justify-center text-[#9B1313] group-hover:bg-[#CD1C18] group-hover:text-white transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-wider">{col.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#CD1C18]" />
                </Link>

                <ul className="space-y-2.5 pl-4 border-l border-[#38000A]/15">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-xs text-[#4A2A31] hover:text-[#CD1C18] hover:translate-x-1 inline-block transition-all py-0.5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#38000A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7A5A60]">
          <div className="flex items-center gap-3">
            <span className="text-[#CD1C18] font-semibold">CORE DELIVERY:</span>
            <span>AI • SOFTWARE • DATA • CLOUD</span>
          </div>
          <Link
            to="/solutions"
            onClick={onClose}
            className="text-[#38000A] hover:text-[#CD1C18] flex items-center gap-1.5 transition-colors underline underline-offset-4"
          >
            <span>View All Capabilities & Digital Transformation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}