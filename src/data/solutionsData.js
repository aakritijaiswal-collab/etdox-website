export const solutionsData = {
  "ai-automation": {
    id: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI",
    tagline: "Intelligent systems, autonomous agents, and foundation model integrations.",
    description: "We architect, train, and deploy enterprise-grade AI systems, specialized agents, and domain-specific knowledge engines that automate intricate operational workflows.",
    icon: "Brain",
    items: [
      {
        id: "ai-automation-core",
        title: "AI Automation",
        slug: "ai-automation",
        badge: "Core Automation",
        problem: "Repetitive knowledge workflows, manual document reconciliation, and fragmented operational tasks drain team velocity and introduce human error at scale.",
        solution: "End-to-end intelligent automation pipelines combining computer vision, NLP, and rules-based orchestration to automate complex multi-step workflows autonomously.",
        technology: ["Python", "FastAPI", "Prefect", "Temporal", "Celery", "OpenCV", "Hugging Face"],
        useCases: [
          "Automated financial invoice validation & ledger reconciliation",
          "Automated claims and contract metadata extraction",
          "Autonomous regulatory audit compliance monitoring",
          "Intelligent customer document parsing and KYC workflows"
        ]
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        slug: "ai-agents",
        badge: "Autonomous Execution",
        problem: "Static software logic fails when encountering unstructured exceptions, dynamic decisions, or multi-system coordination requiring reasoning.",
        solution: "Goal-driven autonomous agents equipped with tool-use, memory states, structured reflection, and multi-agent coordination frameworks to achieve complex business goals.",
        technology: ["LangGraph", "AutoGPT Core", "CrewAI", "Pydantic", "Redis Memory", "vLLM"],
        useCases: [
          "Autonomous software bug triaging and automated patch proposals",
          "Multi-source market intelligence gathering and synthesis",
          "Self-directed customer onboarding and technical troubleshooting",
          "Supply chain anomaly escalation and automatic vendor re-routing"
        ]
      },
      {
        id: "ai-chatbots",
        title: "AI Chatbots",
        slug: "ai-chatbots",
        badge: "Conversational Intelligence",
        problem: "First-generation chatbots rely on rigid decision trees, frustrating users with repetitive loop errors and failing to handle nuanced domain queries.",
        solution: "Context-aware conversational interfaces powered by fine-tuned large language models, guardrails, role enforcement, and live enterprise system integrations.",
        technology: ["Transformers", "Guardrails AI", "NeMo Guardrails", "WebSockets", "React", "FastAPI"],
        useCases: [
          "24/7 technical customer support with real-time ticket escalation",
          "Interactive enterprise HR policy advisor and benefits navigator",
          "E-commerce contextual product discovery and dynamic cart assistance",
          "Internal IT service desk autonomous resolution assistant"
        ]
      },
      {
        id: "generative-ai",
        title: "Generative AI",
        slug: "generative-ai",
        badge: "Foundation Models",
        problem: "Off-the-shelf generative models produce hallucinations, lack proprietary company context, and do not adhere to enterprise latency or privacy standards.",
        solution: "Fine-tuned domain models, prompt engineering architectures, deterministic guardrails, and private inference deployments aligned with enterprise IP.",
        technology: ["LoRA / QLoRA", "PyTorch", "vLLM", "Ollama", "Triton Inference Server", "CUDA"],
        useCases: [
          "Domain-specific legal contract summarization and clause generation",
          "Personalized customer communications and dynamic copy generation",
          "Automated code review, documentation generation, and unit testing",
          "Synthetic data generation for testing and edge-case simulation"
        ]
      },
      {
        id: "rag-knowledge-systems",
        title: "RAG & Knowledge Systems",
        slug: "rag-knowledge-systems",
        badge: "Enterprise Knowledge",
        problem: "Enterprise intelligence is trapped in silos across PDFs, Notion, Confluence, Slack, and legacy databases without unified semantic search.",
        solution: "Enterprise Retrieval-Augmented Generation (RAG) systems with hybrid dense-sparse vector search, re-ranking models, and citation tracking back to source files.",
        technology: ["Pinecone", "Qdrant", "Milvus", "LlamaIndex", "LangChain", "Cohere Rerank", "Unstructured.io"],
        useCases: [
          "Instant semantic search across thousands of compliance manuals",
          "Unified engineering technical documentation and architecture query engine",
          "Clinical research cross-paper synthesis and medical protocol retrieval",
          "Executive intelligence portal across all internal quarterly reports"
        ]
      },
      {
        id: "ai-ml",
        title: "AI/ML (Machine Learning)",
        slug: "ai-ml",
        badge: "Predictive Models",
        problem: "Businesses sit on terabytes of historical telemetry and transactional data without predictive intelligence to foresee risks or capture opportunities.",
        solution: "Custom machine learning models engineered for classification, regression, clustering, anomaly detection, and real-time streaming inference.",
        technology: ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "MLflow", "Kubeflow"],
        useCases: [
          "Predictive equipment maintenance and mechanical failure alerting",
          "Real-time financial fraud detection and risk scoring",
          "Dynamic algorithmic pricing and demand forecasting",
          "User churn prediction and preventive retention triggers"
        ]
      },
      {
        id: "ai-integration",
        title: "AI Integration",
        slug: "ai-integration",
        badge: "Systems Integration",
        problem: "AI prototypes frequently stay trapped in Jupyter notebooks, unable to integrate cleanly into existing legacy ERP, CRM, or production codebases.",
        solution: "Robust, resilient API middleware, message queue brokers, model monitoring hooks, and fault-tolerant fallbacks connecting AI endpoints to core enterprise software.",
        technology: ["gRPC", "REST APIs", "Kafka", "RabbitMQ", "OpenTelemetry", "Docker"],
        useCases: [
          "Embedding AI copilot capabilities into legacy core ERP systems",
          "Connecting vector search endpoints to Salesforce and Zendesk",
          "Integrating local edge vision models with factory floor SCADA systems",
          "Unified LLM gateway with centralized rate-limiting and budget controls"
        ]
      }
    ]
  },
  "software": {
    id: "software",
    title: "Software Engineering",
    shortTitle: "Software",
    tagline: "High-performance web, mobile, SaaS, and distributed enterprise platforms.",
    description: "From greenfield MVPs to multi-tenant cloud platforms, we write clean, resilient, and scalable software built for high concurrency and long-term durability.",
    icon: "Code2",
    items: [
      {
        id: "web-development",
        title: "Web Development",
        slug: "web-development",
        badge: "Modern Frontend",
        problem: "Bloated web applications with sluggish load times, inconsistent user experiences, and poor SEO metrics damage user trust and conversion rates.",
        solution: "Ultra-fast, accessible, and responsive web applications built with modern frontend frameworks, server-side rendering, and atomic design architectures.",
        technology: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
        useCases: [
          "High-conversion enterprise client portals and management dashboards",
          "Real-time data visualization platforms and analytical consoles",
          "Fast headless e-commerce storefronts with sub-second page loads",
          "Interactive SaaS web workspaces with real-time multi-user collaboration"
        ]
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        slug: "mobile-app-development",
        badge: "iOS & Android",
        problem: "Maintaining divergent native codebases leads to doubled development costs, feature disparity, and slow release cycles across iOS and Android.",
        solution: "Cross-platform and native mobile architectures with 60fps performance, offline-first local synchronization, and secure biometric authentication.",
        technology: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Expo"],
        useCases: [
          "Field operations mobile tool with offline data sync and GPS telemetry",
          "Consumer fintech mobile app with biometric security and card integration",
          "Telehealth patient consultation and prescription management app",
          "On-demand logistics driver dispatch and route optimization app"
        ]
      },
      {
        id: "saas",
        title: "SaaS Platforms",
        slug: "saas",
        badge: "Multi-Tenant Cloud",
        problem: "Building SaaS from scratch without modular multi-tenancy, subscription billing, or role-based access control leads to security leaks and high tech debt.",
        solution: "Production-ready multi-tenant SaaS foundations with isolated tenant data, granular RBAC, automated provisioning, and metered billing integration.",
        technology: ["PostgreSQL", "Node.js", "Go", "Stripe Billing", "Auth0 / Clerk", "Docker"],
        useCases: [
          "B2B subscription workflow automation tools",
          "Multi-tenant customer data platforms with individual tenant encryption",
          "Collaborative project management software with seat-based billing",
          "Compliance governance SaaS with automated audit trails and exports"
        ]
      },
      {
        id: "apis-microservices",
        title: "APIs & Microservices",
        slug: "apis-microservices",
        badge: "Distributed Systems",
        problem: "Monolithic architectures become bottlenecked as team size and traffic scale, making single-service deployments risky and resource-heavy.",
        solution: "Decoupled microservice architectures and high-throughput APIs communicating over lightweight gRPC and message brokers with zero downtime.",
        technology: ["Go", "Node.js", "FastAPI", "gRPC", "GraphQL", "Apache Kafka", "Redis"],
        useCases: [
          "High-throughput transactional API gateways handling millions of requests",
          "Decoupling legacy monoliths into independently scalable microservices",
          "Partner-facing developer API platforms with rate-limiting and keys",
          "Event-driven asynchronous order fulfillment and notification engines"
        ]
      },
      {
        id: "enterprise-software",
        title: "Enterprise Software",
        slug: "enterprise-software",
        badge: "Mission-Critical",
        problem: "Aging custom systems fail to meet modern security standards, lack maintainability, and struggle to scale with organizational growth.",
        solution: "Custom enterprise-grade software engineered for strict compliance, high uptime, high throughput, and seamless integration with existing tools.",
        technology: ["Java / Spring Boot", "Go", "PostgreSQL", "Kubernetes", "Azure / AWS", "Keycloak"],
        useCases: [
          "Custom Enterprise Resource Planning (ERP) and supply tracking suites",
          "Centralized procurement, approval, and vendor management systems",
          "Internal workforce management and skill allocation engines",
          "Mission-critical operations monitoring and asset tracking software"
        ]
      }
    ]
  },
  "data-cloud": {
    id: "data-cloud",
    title: "Data & Cloud Infrastructure",
    shortTitle: "Data & Cloud",
    tagline: "Scalable data foundations, real-time analytics, and resilient cloud architecture.",
    description: "We design robust data engineering pipelines, modern analytical warehouses, and automated cloud infrastructure that operate continuously at scale.",
    icon: "Database",
    items: [
      {
        id: "data-engineering",
        title: "Data Engineering",
        slug: "data-engineering",
        badge: "ETL & Pipelines",
        problem: "Unreliable data pipelines, stale data lakes, and inconsistent schema migrations undermine executive decision-making and break downstream applications.",
        solution: "Fault-tolerant ETL/ELT pipelines with automated data validation, schema enforcement, deduplication, and idempotent processing guarantees.",
        technology: ["Apache Airflow", "dbt", "Apache Spark", "Kafka", "PostgreSQL", "Snowflake"],
        useCases: [
          "Automated cross-platform telemetry aggregation and normalization",
          "Real-time streaming ingestion from thousands of IoT devices",
          "Data lakehouse architectures combining raw logs and structured tables",
          "Historical data migration with zero record loss and checksum verification"
        ]
      },
      {
        id: "data-analytics",
        title: "Data Analytics & BI",
        slug: "data-analytics",
        badge: "Business Intelligence",
        problem: "Teams drown in raw database exports without actionable dashboards, automated KPI tracking, or meaningful executive visibility.",
        solution: "Interactive business intelligence dashboards, real-time metrics telemetry, and automated cohort analytics tailored for rapid decision-making.",
        technology: ["ClickHouse", "BigQuery", "Snowflake", "Cube.js", "Metabase", "Grafana"],
        useCases: [
          "Executive C-level KPI dashboards with real-time revenue and margin alerts",
          "Customer acquisition cohort analysis and lifetime value modeling",
          "Operational efficiency bottlenecks identification and heatmaps",
          "Automated weekly automated intelligence briefs delivered to team leads"
        ]
      },
      {
        id: "cloud-infrastructure",
        title: "Cloud Architecture",
        slug: "cloud-infrastructure",
        badge: "Cloud Native",
        problem: "Unoptimized cloud setups generate runaway cloud bills, single points of failure, and inadequate disaster recovery protocols.",
        solution: "High-availability, multi-region cloud infrastructures engineered for cost efficiency, automatic autoscaling, and strict security compliance.",
        technology: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Docker", "Kubernetes"],
        useCases: [
          "Zero-downtime multi-region cloud migrations with cost optimization",
          "Autoscaling serverless architectures for spiky unpredictable traffic",
          "Disaster recovery planning with automated warm-standby failovers",
          "Cloud spending audits cutting infrastructure overhead by 30-50%"
        ]
      },
      {
        id: "devops",
        title: "DevOps",
        slug: "devops",
        badge: "Continuous Delivery",
        problem: "Manual deployment steps, lack of staging parity, and slow CI/CD feedback loops delay software releases and cause frequent production outages.",
        solution: "Automated GitOps and CI/CD pipelines, container orchestration, and Infrastructure as Code (IaC) enabling multiple safe daily deployments.",
        technology: ["GitHub Actions", "GitLab CI", "Terraform", "Kubernetes", "Helm", "ArgoCD"],
        useCases: [
          "Fully automated pull-request preview environments for engineering teams",
          "Blue-green and canary deployment pipelines for zero-downtime releases",
          "Centralized configuration and secret management across environments",
          "Automated infrastructure drift detection and continuous reconciliation"
        ]
      },
      {
        id: "mlops",
        title: "MLOps",
        slug: "mlops",
        badge: "Model Lifecycle",
        problem: "Machine learning models degrade silently over time due to feature drift, lack versioning, and create high latency in production environments.",
        solution: "End-to-end MLOps systems managing feature stores, model registry, automated retraining pipelines, and real-time model telemetry.",
        technology: ["MLflow", "Kubeflow", "Feast", "Prometheus", "Triton", "Evidently AI"],
        useCases: [
          "Automated data and concept drift detection with retraining triggers",
          "Standardized model registry and safe A/B model rollout strategies",
          "Real-time latency and inference token cost monitoring",
          "Reproducible model training pipelines with complete artifact lineage"
        ]
      }
    ]
  },
  "security": {
    id: "security",
    title: "Security & Infrastructure",
    shortTitle: "Security",
    tagline: "Rigorous cyber defense, hardened cloud systems, and secure-by-design integrations.",
    description: "We protect critical applications, data perimeters, and infrastructure from modern cyber threats through proactive defense and compliance engineering.",
    icon: "ShieldCheck",
    items: [
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        slug: "cybersecurity",
        badge: "Defense & Audit",
        problem: "Hidden vulnerabilities in software dependencies and application logic expose enterprises to data breaches, ransomware, and regulatory fines.",
        solution: "Comprehensive threat modeling, static/dynamic code vulnerability analysis, vulnerability mitigation, and hardened security architecture.",
        technology: ["OWASP ZAP", "Snyk", "Trivy", "SonarQube", "WAF", "Falco"],
        useCases: [
          "Application security audits and vulnerability remediation",
          "Zero-Trust network architecture and granular access policy enforcement",
          "Automated dependency scanning and patch automation in CI/CD",
          "SOC2 and ISO 27001 readiness engineering and audit trail preparation"
        ]
      },
      {
        id: "infrastructure-security",
        title: "Infrastructure Security",
        slug: "infrastructure-security",
        badge: "Hardened Perimeter",
        problem: "Misconfigured cloud storage buckets, open ports, and overly permissive IAM roles leave infrastructure exposed to external exploitation.",
        solution: "Automated cloud security posture management, encrypted network mesh, least-privilege IAM enforcement, and perimeter hardening.",
        technology: ["AWS IAM", "HashiCorp Vault", "WireGuard", "Cloudflare", "Calico", "Kube-bench"],
        useCases: [
          "Centralized dynamic secret management with automatic rotation",
          "VPC segmentation and private-only database access topologies",
          "DDoS mitigation and web application firewall (WAF) tuning",
          "Container runtime threat detection and anomalous syscall termination"
        ]
      },
      {
        id: "secure-integrations",
        title: "Secure Integrations",
        slug: "secure-integrations",
        badge: "Safe Connectivity",
        problem: "Connecting multiple third-party SaaS tools and legacy systems opens unmonitored attack vectors and unencrypted data leakage channels.",
        solution: "Hardened API gateways, mutual TLS (mTLS) authentication, tokenized payload encryption, and strict rate-limiting for all inter-system bridges.",
        technology: ["mTLS", "OAuth 2.0 / OIDC", "Kong Gateway", "Envoy", "AES-256 GCM"],
        useCases: [
          "Secure payment gateway integration compliant with PCI-DSS",
          "Encrypted medical device telemetry streaming compliant with HIPAA",
          "Federated Single Sign-On (SSO) integration with Okta and Azure AD",
          "Tokenized data exchange between core banking systems and fintech partners"
        ]
      }
    ]
  },
  "digital": {
    id: "digital",
    title: "Digital Transformation & Design",
    shortTitle: "Digital",
    tagline: "High-impact user experience, conversion optimization, and brand interfaces.",
    description: "We align engineering precision with thoughtful user experience design, digital performance optimization, and intuitive customer touchpoints.",
    icon: "Layers",
    items: [
      {
        id: "ui-ux",
        title: "UI/UX Design",
        slug: "ui-ux",
        badge: "Product Design",
        problem: "Clunky, complex user interfaces cause user churn, lengthen onboarding times, and reduce overall platform adoption.",
        solution: "Research-driven interface design, design systems, interactive prototypes, and human-centered design for technical and consumer products.",
        technology: ["Figma", "Design Tokens", "Atomic Design", "Storybook", "User Journey Mapping"],
        useCases: [
          "Design system creation for cross-platform engineering consistency",
          "Complex analytical dashboard UX streamlining and information hierarchy",
          "B2B SaaS product redesign improving onboarding completion",
          "Interactive clickable prototypes for user validation before engineering"
        ]
      },
      {
        id: "seo",
        title: "SEO & Performance",
        slug: "seo",
        badge: "Organic Growth",
        problem: "High-quality products languish unnoticed when technical SEO debt, slow web vitals, and poor structure suppress search visibility.",
        solution: "Technical search engine optimization, Core Web Vitals acceleration, structured semantic data, and crawl-budget engineering.",
        technology: ["Schema.org", "SSR / SSG", "Lighthouse", "Edge Caching", "Sitemaps"],
        useCases: [
          "Core Web Vitals remediation reaching 95+ Lighthouse performance scores",
          "Programmatic SEO architecture for thousands of high-ranking landing pages",
          "Structured schema markup for rich snippets and search dominance",
          "International multi-region SEO localization and hreflang configuration"
        ]
      },
      {
        id: "graphic-design",
        title: "Graphic & Brand Design",
        slug: "graphic-design",
        badge: "Brand Identity",
        problem: "Inconsistent visual assets and generic branding dilute company authority and fail to communicate technical sophistication.",
        solution: "Clean, modern visual identity systems, technical diagrams, isometric vectors, and cohesive digital assets tailored for modern tech brands.",
        technology: ["Vector Design", "Illustration", "Brand Guidelines", "Design Tokens"],
        useCases: [
          "Complete brand identity kits, color systems, and typographic hierarchies",
          "High-clarity technical architecture diagrams for whitepapers and docs",
          "Product marketing visual asset libraries and investor pitch materials",
          "Digital iconography and custom brand component libraries"
        ]
      },
      {
        id: "ads",
        title: "Ads & Conversion Engineering",
        slug: "ads",
        badge: "Paid Acquisition",
        problem: "Marketing spend is squandered when ad campaigns land on slow, poorly targeted pages with low conversion rates.",
        solution: "Conversion rate optimization (CRO), high-velocity landing page funnels, dynamic UTM tracking, and ad-to-product continuity.",
        technology: ["A/B Testing", "Conversion Analytics", "PostHog", "Dynamic Landing Pages"],
        useCases: [
          "High-performance landing page variations optimized for paid campaigns",
          "Automated pixel and server-side conversion tracking integration",
          "Funnel drop-off analytics and multivariate checkout optimization",
          "B2B enterprise lead capture funnels with instant CRM routing"
        ]
      },
      {
        id: "influencer-solutions",
        title: "Influencer Solutions",
        slug: "influencer-solutions",
        badge: "Distribution",
        problem: "Brands struggle to track, manage, and quantify creator partnerships and attribution across decentralized channels.",
        solution: "Custom creator tracking portals, referral attribution software, and automated campaign performance reporting dashboards.",
        technology: ["Custom Dashboards", "Referral APIs", "Attribution Models", "Webhook Ingestion"],
        useCases: [
          "Automated affiliate code tracking and commission calculation platforms",
          "Creator campaign performance and engagement analytics dashboards",
          "Automated digital asset delivery portals for approved brand partners",
          "Multi-channel attribution modeling tracking direct and assisted conversions"
        ]
      },
      {
        id: "game-development",
        title: "Game & Interactive Development",
        slug: "game-development",
        badge: "Interactive",
        problem: "Engaging modern audiences requires immersive, interactive visual experiences that traditional static pages cannot provide.",
        solution: "Interactive web experiences, WebGL simulations, gamified training modules, and lightweight 2D/3D interactive web applications.",
        technology: ["WebGL", "Three.js", "Canvas API", "WebAssembly", "Phaser"],
        useCases: [
          "Interactive 3D product visualizers and interactive technical tours",
          "Gamified corporate training simulations and compliance exercises",
          "High-performance canvas interactive brand activations",
          "Lightweight web-based educational simulations and games"
        ]
      }
    ]
  }
};
