import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import LeadQualificationForm from "../components/forms/LeadQualificationForm";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const intent = searchParams.get("intent");

  return (
    <div className="bg-white">
      {/* Header Banner (Dark Burgundy) */}
      <section className="bg-[#38000A] text-white py-16 lg:py-20 border-b border-[#5A0B19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            theme="dark"
            items={[{ label: "LET'S TALK / CONTACT" }]}
          />

          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFA896] font-semibold">
              DIRECT TECHNICAL ENGAGEMENT
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Start with a requirement.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Choose a project, 7-day trial, free prototype or consultation. Connect directly with our systems architects and delivery leads.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Form (8 Cols) */}
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="border-b border-gray-100 pb-6 mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CD1C18]">
                  TECHNICAL LEAD QUALIFICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-950 mt-1">
                  Specify Your Technical Scope
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Please specify your technical requirements to receive an architecture assessment and delivery timeline.
                </p>
              </div>

              <LeadQualificationForm />
            </div>

            {/* Right Information & FAQs (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Engagement Models Box */}
              <div className="bg-[#38000A] text-white p-6 rounded-2xl border border-[#5A0B19] space-y-4">
                <span className="text-xs font-mono text-[#FFA896] uppercase tracking-wider font-bold">
                  ENGAGEMENT PATHWAYS
                </span>
                <div className="space-y-3 text-xs">
                  <div className="border-b border-[#5A0B19] pb-2">
                    <strong className="text-white block font-display">7-Day Free Trial</strong>
                    <span className="text-gray-300">Test our speed with a discrete, real-world technical task.</span>
                  </div>
                  <div className="border-b border-[#5A0B19] pb-2">
                    <strong className="text-white block font-display">Free Prototype</strong>
                    <span className="text-gray-300">Initial architectural spike or UX prototype for suitable projects.</span>
                  </div>
                  <div>
                    <strong className="text-white block font-display">Full Project Delivery</strong>
                    <span className="text-gray-300">Dedicated multidisciplinary pods or milestone-based contracts.</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
                <span className="text-xs font-mono text-[#CD1C18] uppercase tracking-wider font-bold">
                  CLIENT COMMITMENTS
                </span>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                    <span>Mutual Non-Disclosure Agreement (NDA) before deep technical exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                    <span>Architectural review response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                    <span>100% intellectual property (IP) assignment upon delivery</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3 text-xs">
                <span className="font-mono text-gray-400 uppercase tracking-wider font-bold block">
                  DIRECT COMMUNICATIONS
                </span>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#CD1C18]" />
                    <span className="font-mono">contact@etdox.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#CD1C18]" />
                    <span className="font-mono">+1 (800) ETDOX-AI</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
