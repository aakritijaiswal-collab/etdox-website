export const industriesData = [
  {
    id: "startups-smbs",
    slug: "startups-smbs",
    name: "Startups & SMBs",
    tagline: "Rapid prototyping, agile MVP development, and on-demand engineering teams to reach product-market fit fast.",
    heroDescription: "We act as your technical co-founder and elastic engineering team. From early technical spikes and 7-day trials to fully scalable MVPs, we build the foundation that scales with your growth without bloated burn rates.",
    problem: "Early-stage ventures and growing SMBs struggle with scarce technical talent, prohibitive agency costs, slow hiring cycles, and the risk of building unviable architectures that incur crippling technical debt.",
    solution: "Flexible, high-velocity engineering pods assembled on demand. We take your technical specifications from concept to working prototype in days, delivering production-grade code ready for real users and investors.",
    technology: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "FastAPI", "Docker", "Supabase / AWS"],
    useCases: [
      "Rapid prototype development for early customer and investor validation",
      "End-to-end MVP build with automated onboarding and subscription billing",
      "Elastic engineering pods stepping in to unblock stalled technical roadmaps",
      "Architecture audit and refactoring before scaling to thousands of users"
    ],
    highlightStat: "Rapid Prototype Delivery & 7-Day Sprint Evaluation"
  },
  {
    id: "enterprise",
    slug: "enterprise",
    name: "Enterprise",
    tagline: "Mission-critical modernization, distributed microservices, and enterprise-grade AI integration.",
    heroDescription: "For enterprises managing complex legacy ecosystems, we deliver resilient cloud architectures, secure API layers, and private AI capabilities that integrate cleanly without disrupting core daily operations.",
    problem: "Large organizations face legacy code lock-in, organizational silos, slow release cycles, and rigorous regulatory requirements that stifle innovation and make digital transformation feel daunting.",
    solution: "Dedicated multidisciplinary technical pods embedding modern AI, cloud-native microservices, and automated CI/CD directly alongside enterprise architects, governed by strict SLAs and security standards.",
    technology: ["Kubernetes", "Go", "Java Spring Boot", "Kafka", "PostgreSQL", "Terraform", "Azure / AWS", "OpenTelemetry"],
    useCases: [
      "Decoupling legacy monoliths into resilient, autoscaling microservices",
      "Enterprise private RAG knowledge portals across distributed repositories",
      "Automated compliance audit trails and Zero-Trust infrastructure hardening",
      "Unified internal developer platforms reducing service onboarding time"
    ],
    highlightStat: "Zero-Downtime Migration & Enterprise-Grade Security"
  },
  {
    id: "bfsi",
    slug: "bfsi",
    name: "BFSI (Banking, Financial Services & Insurance)",
    tagline: "High-throughput transaction systems, automated compliance, and real-time fraud mitigation.",
    heroDescription: "In financial services, security, latency, and data integrity are non-negotiable. We build mission-critical banking, insurance, and wealthtech systems that satisfy regulatory mandates while providing seamless digital experiences.",
    problem: "Financial institutions struggle with stringent regulatory scrutiny, legacy ledger systems, rising cyber fraud, and lengthy transaction processing times that diminish customer satisfaction.",
    solution: "Hardened financial architectures featuring sub-millisecond transaction routing, tokenized data encryption, automated KYC/AML verification, and real-time fraud scoring powered by machine learning.",
    technology: ["Go", "Kafka", "PostgreSQL", "Redis", "mTLS", "HashiCorp Vault", "Python AI/ML", "Docker"],
    useCases: [
      "Real-time streaming transaction monitoring and heuristic fraud scoring",
      "Automated claims adjudication and policy underwriting pipelines",
      "Secure Open Banking API gateways compliant with PSD2 and open finance",
      "Automated regulatory reporting engines compiling auditable filings"
    ],
    highlightStat: "PCI-DSS & SOC2 Aligned Engineering Architecture"
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "IoT telemetry pipelines, predictive maintenance, and intelligent factory floor automation.",
    heroDescription: "We bridge physical industrial operations with cloud intelligence. Our solutions ingest sensor telemetry at high velocity to predict equipment failure, optimize supply chains, and automate inventory tracking.",
    problem: "Unscheduled equipment downtime costs factories millions, while siloed SCADA/PLC machinery and manual quality control checks cause supply bottlenecks and wasted materials.",
    solution: "Industrial IoT edge-to-cloud architectures, automated computer vision defect inspection, and predictive maintenance algorithms that anticipate failures before they halt production.",
    technology: ["MQTT", "Apache Spark", "Time-Series DB (Timescale)", "OpenCV", "Python", "Kubernetes Edge", "AWS IoT"],
    useCases: [
      "Predictive vibration and temperature telemetry alerting for heavy machinery",
      "Automated optical defect detection on manufacturing assembly lines",
      "Real-time supply chain asset tracking and automated replenishment triggers",
      "Unified factory telemetry dashboards providing live OEE (Overall Equipment Effectiveness)"
    ],
    highlightStat: "Edge-to-Cloud Telemetry & Predictive Uptime"
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant platforms, clinical data interoperability, and intelligent patient workflows.",
    heroDescription: "We engineer secure healthcare applications and clinical intelligence tools that protect sensitive patient data while dramatically simplifying provider workflows and care coordination.",
    problem: "Healthcare organizations contend with fragmented Electronic Health Record (EHR) systems, severe compliance penalties, and physician burnout caused by burdensome administrative charting.",
    solution: "Secure, interoperable digital health solutions leveraging FHIR/HL7 standards, automated clinical document parsing, and end-to-end encrypted telehealth architectures.",
    technology: ["FHIR APIs", "HL7 Standards", "PostgreSQL", "Node.js", "Python", "WebRTC", "AWS HealthLake", "AES-256"],
    useCases: [
      "Encrypted patient portals with integrated telehealth and digital prescription management",
      "Automated medical record summarization and clinical coding assistance",
      "Interoperable data pipelines linking hospital labs with primary care systems",
      "Clinical trial patient recruitment and compliance tracking platforms"
    ],
    highlightStat: "HIPAA-Compliant & FHIR Interoperable Systems"
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail & E-Commerce",
    tagline: "Headless commerce, personalized recommendations, and dynamic omnichannel inventory.",
    heroDescription: "Modern retail demands ultra-fast page speeds, seamless mobile checkout, and personalized shopping journeys. We design high-converting e-commerce systems and omnichannel backend synchronizations.",
    problem: "Legacy monolithic e-commerce platforms suffer from slow mobile response times, high cart abandonment, stock mismatches across channels, and generic customer experiences.",
    solution: "Headless e-commerce architectures coupled with real-time multi-warehouse inventory synchronization, personalized AI search, and friction-free payment integrations.",
    technology: ["Next.js", "Shopify Plus APIs / Commercelayer", "Elasticsearch / Algolia", "Stripe", "Redis", "Node.js"],
    useCases: [
      "Sub-second headless storefronts optimized for high mobile conversion",
      "Real-time omnichannel inventory synchronization across warehouse and retail POS",
      "AI-driven semantic product discovery and dynamic personalized carousels",
      "Automated returns processing and omnichannel customer order tracking"
    ],
    highlightStat: "Sub-Second Response Times & Omnichannel Sync"
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Dynamic route optimization, fleet telemetry, and automated freight documentation.",
    heroDescription: "We empower logistics operators with real-time visibility and automated dispatching. Our systems analyze traffic, cargo conditions, and delivery windows to optimize every mile of transit.",
    problem: "Unpredictable transit delays, fuel inefficiency, manual bill-of-lading paperwork, and lack of real-time cargo visibility lead to operational friction and customer churn.",
    solution: "Real-time fleet tracking portals, algorithmic route optimization engines, and automated document parsing that digitize manifests and streamline customs clearance.",
    technology: ["Go", "Mapbox APIs", "Kafka", "PostgreSQL / PostGIS", "Python Optimization (OR-Tools)", "WebSockets"],
    useCases: [
      "Dynamic multi-stop dispatch and route planning factoring live traffic and vehicle capacity",
      "Cold-chain continuous temperature and humidity sensor tracking with breach alerts",
      "Automated OCR ingestion of bills of lading and shipping manifests",
      "Real-time customer tracking portals with automated ETA predictions"
    ],
    highlightStat: "Dynamic Route Optimization & Live Geo-Telemetry"
  },
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    tagline: "Adaptive learning platforms, interactive assessment tools, and scalable student portals.",
    heroDescription: "We build intuitive learning management platforms and educational tools that adapt to student pacing, streamline grading for educators, and deliver engaging interactive multimedia content.",
    problem: "Standard educational software is often clunky, lacks engagement mechanisms, and fails to provide personalized instruction for diverse learning speeds.",
    solution: "Modern, responsive EdTech platforms featuring real-time collaborative whiteboards, adaptive assessment algorithms, and automated administrative grading workflows.",
    technology: ["React", "TypeScript", "Node.js", "WebSockets", "Canvas API", "PostgreSQL", "AWS S3 / CloudFront"],
    useCases: [
      "Adaptive learning engines customizing curriculum progression based on quiz performance",
      "Real-time virtual classrooms with collaborative notes and interactive breakout tools",
      "Automated assignment grading pipelines and plagiarism detection integrations",
      "Comprehensive institutional analytics tracking student engagement and retention"
    ],
    highlightStat: "Adaptive Learning & High-Engagement Systems"
  },
  {
    id: "government",
    slug: "government",
    name: "Government & Public Sector",
    tagline: "Accessible citizen portals, secure document archives, and transparent workflow automation.",
    heroDescription: "We build accessible, compliant digital services for municipal, state, and federal organizations. Our public sector solutions prioritize accessibility, security, and transparent administrative workflows.",
    problem: "Public agencies battle obsolete paper-heavy processes, non-compliant citizen portals, and heightened exposure to security breaches.",
    solution: "WCAG 2.1 AA accessible web portals, encrypted digital records management, and automated citizen service request routing with complete audit logging.",
    technology: ["Accessible React / Next.js", "Java / Spring Boot", "PostgreSQL", "Docker", "FedRAMP / SOC2 Hardening"],
    useCases: [
      "Accessible digital citizen licensing and permit application portals",
      "Secure digital document submission and case management systems for caseworkers",
      "Automated municipal service request ticketing and geographic field dispatch",
      "Public transparency and budget disclosure data portals with open APIs"
    ],
    highlightStat: "WCAG 2.1 AA Accessible & Secure-by-Design"
  }
];
