export const deliveryProcess = [
  {
    step: "01",
    name: "DISCOVER",
    title: "Technical Discovery & Scope Definition",
    description: "We analyze your exact technical requirements, constraints, architecture dependencies, and business objectives to define a clear roadmap with zero ambiguity."
  },
  {
    step: "02",
    name: "PLAN",
    title: "System Architecture & Milestone Design",
    description: "Our systems architects formulate the technical specification, data models, infrastructure topology, security posture, and concrete sprint milestones."
  },
  {
    step: "03",
    name: "PROTOTYPE",
    title: "Rapid Prototype Execution",
    description: "For qualifying projects, we assemble the core technical spike or clickable prototype to validate technical feasibility, latency, and UX flow."
  },
  {
    step: "04",
    name: "7-DAY TRIAL",
    title: "Hands-On 7-Day Evaluation",
    description: "Test our engineering velocity in production conditions. Our team builds a discrete requirement for 7 days. You review the code and decide whether to proceed."
  },
  {
    step: "05",
    name: "BUILD",
    title: "Production Engineering & Sprints",
    description: "Full-scale multidisciplinary development adhering to strict coding standards, automated unit testing, continuous integration, and transparent weekly demos."
  },
  {
    step: "06",
    name: "DEPLOY",
    title: "Hardened Deployment & Verification",
    description: "Production rollout via automated GitOps pipelines with load testing, security audits, telemetry instrumentation, and zero-downtime cutover."
  },
  {
    step: "07",
    name: "MANAGE",
    title: "Continuous Observability & Support",
    description: "Ongoing SLA-backed maintenance, cloud optimization, performance monitoring, security patch management, and iterative feature scaling."
  }
];

export const engagementModels = [
  {
    id: "project-based",
    name: "Project-Based",
    tagline: "Defined scope, milestones and delivery.",
    description: "Ideal for organizations with a concrete project brief, specific deliverable requirements, and fixed delivery timelines. Work is partitioned into clear milestone deliverables.",
    features: [
      "Explicitly defined technical deliverables & acceptance criteria",
      "Structured milestone reviews and sign-offs",
      "Fixed or capped time-and-materials cost model",
      "Complete handover of source code, documentation, and assets"
    ],
    bestFor: "MVPs, migrations, feature additions, or defined system builds."
  },
  {
    id: "dedicated-team",
    name: "Dedicated Team",
    tagline: "Technical capacity assembled around the client requirement.",
    description: "An elastic, multidisciplinary engineering team that functions as an integral extension of your internal team, scaling up or down as technical priorities evolve.",
    features: [
      "Custom assembled technical roles (AI, Software, Data, DevOps, Design)",
      "Direct integration into your Jira, GitHub, Slack, and daily standups",
      "Full transparency on sprint velocity, commits, and roadmap progress",
      "Flexible capacity adjustments as project phases shift"
    ],
    bestFor: "High-growth startups, ongoing product engineering, enterprise initiatives."
  },
  {
    id: "managed-technology",
    name: "Managed Technology",
    tagline: "Long-term technology delivery, maintenance and support.",
    description: "Complete end-to-end stewardship of your technical infrastructure, applications, security perimeters, and cloud operations under guaranteed service levels.",
    features: [
      "24/7 infrastructure observability and proactive incident mitigation",
      "Continuous performance optimization and cloud cost rationalization",
      "Automated security patching, backups, and disaster recovery drills",
      "Dedicated technical leadership and periodic architectural reviews"
    ],
    bestFor: "Enterprises needing comprehensive technical operations and reliability management."
  },
  {
    id: "saas",
    name: "SaaS & Recurring Delivery",
    tagline: "Reusable software products with recurring delivery.",
    description: "Deployment, customization, and ongoing hosting of modular enterprise software solutions and specialized technology accelerators on a recurring basis.",
    features: [
      "Rapid deployment from pre-engineered enterprise software foundations",
      "Customized tenant configuration and enterprise system integrations",
      "Continuous feature updates and managed cloud hosting",
      "Predictable recurring investment with SLA uptime guarantees"
    ],
    bestFor: "Companies seeking validated technical platforms tailored to their workflow."
  },
  {
    id: "equity-based",
    name: "Equity-Based Engagement",
    tagline: "For selected startups; commercial, IP, milestones and legal terms agreed in writing.",
    description: "For select early-stage startups with exceptional founders and transformative ideas, we offer hybrid technical partnership structures combining reduced capital fees with equity participation.",
    features: [
      "High-conviction technical co-founding team capability",
      "Formal commercial, IP rights, milestone schedules, and legal terms agreed in writing",
      "Rigorous technical governance and founder-friendly equity vesting structures",
      "Long-term alignment on company growth, scalability, and fundraising"
    ],
    bestFor: "Vetted early-stage founders seeking a tier-1 technical co-founding team."
  }
];

export const trialOfferData = {
  headline: "Don't take our word for it. Test our work.",
  subhead: "Experience our engineering velocity, communication rigor, and code quality before entering into a long-term agreement.",
  steps: [
    {
      num: "01",
      title: "Give us a technical requirement",
      desc: "Provide a discrete problem statement, API module, UI flow, or data pipeline to solve."
    },
    {
      num: "02",
      title: "Team works 7 days",
      desc: "Our specialized engineers dive into the sprint, providing daily check-ins and version control commits."
    },
    {
      num: "03",
      title: "Review work",
      desc: "Inspect the functional deliverable, clean architecture, documentation, and test suite."
    },
    {
      num: "04",
      title: "Decide whether to continue",
      desc: "Move forward with confidence based on demonstrated capability, or walk away with no lock-in."
    }
  ],
  eligibility: "Trial engagements are subject to mutual scope agreement, technical feasibility review, and engineering pod availability. Work focuses on a well-defined technical requirement to provide meaningful evaluation within a 7-day sprint."
};

export const prototypeOfferData = {
  badge: "Zero-Risk Evaluation",
  headline: "Your First Prototype — On Us*",
  tagline: "For suitable projects, build the initial prototype free.",
  description: "We build a working technical prototype or interactive architectural proof-of-concept at zero cost to validate technical feasibility, user experience, and delivery speed before contractual commitments.",
  termsNotice: "*Subject to project scope and eligibility. Intended for projects with defined technical parameters and future build scope. Prototype deliverables include functional code or architecture spikes as agreed during discovery."
};

export const scaleProgression = [
  {
    stage: "Small Project",
    examples: "Website, bot, automation script, or targeted API integration.",
    desc: "Targeted technical solutions to solve an immediate bottleneck."
  },
  {
    stage: "Prototype",
    examples: "Clickable UX, proof of concept, or architectural spike.",
    desc: "Validate technical viability and user workflows with low overhead."
  },
  {
    stage: "MVP",
    examples: "Functional minimum viable product with auth, database & payments.",
    desc: "Launch to initial users and capture genuine market feedback."
  },
  {
    stage: "Full Product",
    examples: "Production multi-tenant SaaS or enterprise customer application.",
    desc: "Polished, robust, high-performance software ready for growth."
  },
  {
    stage: "Enterprise System",
    examples: "Distributed microservices, ERP, high-throughput streaming systems.",
    desc: "Resilient systems supporting heavy concurrency and compliance."
  },
  {
    stage: "Managed Technology",
    examples: "24/7 operations, autoscaling cloud, continuous DevOps & AI pods.",
    desc: "Ongoing technical evolution and SLA-backed management."
  }
];
