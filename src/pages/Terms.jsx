import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";

export default function Terms() {
  return (
    <div className="bg-white">
      <section className="bg-[#38000A] text-white py-16 border-b border-[#5A0B19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs theme="dark" items={[{ label: "TERMS OF SERVICE" }]} />
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Terms of Service & Engagement
          </h1>
          <p className="text-xs font-mono text-[#FFA896] mt-2">
            REVISED: 2026 • COMMERCIAL & DELIVERY FRAMEWORK
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FBFBFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 text-sm text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-xl font-display font-bold text-gray-900">1. Master Services & Commercial Structure</h2>
          <p>
            ETDOX provides technical design, engineering, and managed operations under five engagement structures: Project-Based, Dedicated Team, Managed Technology, SaaS, and Equity-Based engagements. Specific milestones, deliverables, and service levels are defined in mutually executed Statements of Work (SOW).
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">2. 7-Day Free Trial Terms</h2>
          <p>
            The 7-Day Free Trial is designed to allow prospective clients to evaluate ETDOX's engineering speed, communication, and code quality. Trial projects focus on a discrete, self-contained technical deliverable mutually agreed upon in writing. Trial availability is subject to technical review and engineering pod capacity.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">3. Free Prototype Terms</h2>
          <p>
            Initial prototype development is offered free for qualifying projects subject to technical scope verification and future development eligibility. Deliverables include architectural spikes or interactive prototypes as defined during technical discovery.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">4. Equity-Based Engagements</h2>
          <p>
            For select early-stage startups entering equity-based arrangements, all commercial terms, intellectual property ownership, milestone deliveries, and legal governance are agreed in formal written contracts prior to code development.
          </p>

          <h2 className="text-xl font-display font-bold text-gray-900">5. Governing Law</h2>
          <p>
            These terms are governed by standard international commercial engineering practices. Contact <span className="font-mono text-[#CD1C18]">contracts@etdox.com</span> for contractual inquiries.
          </p>
        </div>
      </section>
    </div>
  );
}
