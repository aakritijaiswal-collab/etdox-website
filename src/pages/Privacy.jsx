import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";

export default function Privacy() {
  return (
    <div className="bg-white">
      <section className="bg-[#38000A] text-white py-16 border-b border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs theme="dark" items={[{ label: "PRIVACY POLICY" }]} />
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#FFA896] mt-2">
            EFFECTIVE DATE: JANUARY 1, 2026 • ETDOX TECHNICAL OPERATIONS
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FBFBFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 text-sm text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-xl font-display font-bold text-gray-900">1. Information We Collect</h2>
          <p>
            When you submit technical specifications, request a 7-day trial, or commission an architectural prototype through ETDOX, we collect contact information (name, work email, phone number, company name) and technical requirements necessary to assess project scope and resource allocation.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">2. Intellectual Property & Confidentiality</h2>
          <p>
            All technical architectures, code submissions, and proprietary information shared with ETDOX are treated under strict confidentiality. We do not use customer code, data lakes, or proprietary datasets to train publicly available models or external third-party algorithms.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">3. Data Security & Storage</h2>
          <p>
            We implement enterprise-grade technical and organizational security measures, including AES-256 encryption at rest and TLS 1.3 in transit, to protect client information from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">4. Contact Us</h2>
          <p>
            For privacy inquiries or bilateral NDA requests, contact our legal team at <span className="font-mono text-[#CD1C18]">legal@etdox.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
