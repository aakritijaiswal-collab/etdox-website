import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Database, Cloud, ArrowRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import Button from "../common/Button";

export default function InteractivePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "ai",
      title: "AI",
      label: "AI & Automation",
      headline: "Autonomous Agents, Knowledge RAG & Foundation Models",
      icon: Brain,
      summary: "We design and deploy custom intelligent agents, semantic RAG systems, and generative AI pipelines tailored to domain-specific enterprise data.",
      capabilities: [
        "AI Agents & Autonomous Goal Execution",
        "RAG & Enterprise Knowledge Systems",
        "Generative AI & Domain Fine-Tuning",
        "Conversational AI Chatbots & Support Automation",
        "Predictive Machine Learning & Anomaly Detection"
      ],
      techStack: ["PyTorch", "Transformers", "LangChain", "LlamaIndex", "vLLM", "Pinecone"],
      route: "/solutions/ai-automation",
      codeSnippet: `// ETDOX Autonomous Agent Pipeline
const agent = new AutonomousAgent({
  tools: [vectorSearch, codeInterpreter, apiGateway],
  memory: new RedisVectorStore(),
  guardrails: { hallucinationThreshold: 0.02 }
});
await agent.execute("Analyze & reconcile ledger anomalies");`
    },
    {
      id: "software",
      title: "SOFTWARE",
      label: "Software Engineering",
      headline: "High-Performance Web, Mobile & Distributed Microservices",
      icon: Code2,
      summary: "From high-velocity MVPs to multi-tenant SaaS platforms, we write clean, typed, resilient software engineered for concurrent scale and durability.",
      capabilities: [
        "Modern Responsive Web Applications (Next.js/React)",
        "Cross-Platform Native Mobile Apps (iOS/Android)",
        "Multi-Tenant B2B SaaS Architectures",
        "High-Throughput APIs & Distributed Microservices",
        "Mission-Critical Enterprise Software Systems"
      ],
      techStack: ["React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Tailwind CSS"],
      route: "/solutions/software",
      codeSnippet: `// Multi-Tenant Service Architecture
type TenantContext struct {
    TenantID   uuid.UUID
    Isolation  TenantIsolationPolicy
    DBPool     *sql.DB
}
func (s *EnterpriseService) Dispatch(ctx TenantContext) error`
    },
    {
      id: "data",
      title: "DATA",
      label: "Data & Analytics",
      headline: "Fault-Tolerant Pipelines & Real-Time Business Intelligence",
      icon: Database,
      summary: "Transform disorganized telemetry and raw transactional records into real-time streaming pipelines, clean lakehouses, and actionable executive BI.",
      capabilities: [
        "Scalable ETL/ELT Batch & Real-Time Pipelines",
        "Data Lakehouse & Warehouse Architectures",
        "Interactive Executive BI Dashboards & Metrics",
        "Streaming Event Ingestion (Kafka/Spark)",
        "Automated Schema Validation & Data Quality Checks"
      ],
      techStack: ["Kafka", "Apache Spark", "dbt", "Airflow", "ClickHouse", "Snowflake"],
      route: "/solutions/data-cloud",
      codeSnippet: `-- Streaming Aggregation Pipeline
SELECT
    window_start,
    tenant_id,
    quantileExactWeighted(0.99)(latency_ms, weights) AS p99_latency
FROM streaming_telemetry_events
GROUP BY window_start, tenant_id;`
    },
    {
      id: "cloud",
      title: "CLOUD",
      label: "Cloud & DevOps",
      headline: "Elastic Cloud Infrastructure, GitOps & Continuous MLOps",
      icon: Cloud,
      summary: "We design resilient multi-region cloud infrastructures, automated zero-downtime deployment pipelines, and hardened cloud security perimeters.",
      capabilities: [
        "Cloud Architecture (AWS, GCP, Azure)",
        "Automated GitOps & Zero-Downtime CI/CD",
        "Kubernetes Cluster Orchestration & Autoscaling",
        "MLOps Model Registry & Real-Time Monitoring",
        "Cloud Infrastructure Cost Optimization"
      ],
      techStack: ["Terraform", "Kubernetes", "Docker", "AWS", "GitHub Actions", "ArgoCD"],
      route: "/solutions/data-cloud",
      codeSnippet: `# Automated GitOps Cluster Provisioning
apiVersion: apps/v1
kind: Deployment
metadata:
  name: etdox-microservice-cluster
spec:
  replicas: 12
  strategy:
    type: RollingUpdate`
    }
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-[#FBFBFC] border-y border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CD1C18] font-semibold block mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-950 tracking-tight">
            Four Interactive Pillars
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            AI • SOFTWARE • DATA • CLOUD. We assemble specialized multidisciplinary technical capacity around your exact engineering challenge.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs / Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`text-left p-4 sm:p-6 rounded-xl border transition-all duration-300 relative group ${
                  isActive
                    ? "bg-[#38000A] text-white border-[#CD1C18] shadow-lg shadow-[#38000A]/10 scale-[1.02]"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#CD1C18]/40 hover:bg-gray-50/70"
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all ${
                    isActive ? "bg-[#CD1C18]" : "bg-transparent group-hover:bg-gray-200"
                  }`}
                />

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-[#CD1C18] text-white"
                        : "bg-gray-100 text-gray-700 group-hover:bg-[#FFA896]/30 group-hover:text-[#CD1C18]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-[#FFA896]" : "text-gray-400 group-hover:text-[#CD1C18]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight">
                  {pillar.title}
                </h3>
                <p
                  className={`text-xs mt-1 line-clamp-1 ${
                    isActive ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {pillar.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Interactive Preview Panel */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-card-subtle p-6 sm:p-10 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD1C18]/10 text-[#CD1C18] font-mono text-xs font-semibold">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>PILLAR 0{activePillar + 1} • {current.label.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-950 tracking-tight leading-snug">
                {current.headline}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-gray-800 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to={current.route} variant="primary" icon={ArrowRight}>
                  EXPLORE {current.title} SOLUTIONS
                </Button>
                <Link
                  to="/contact?intent=trial"
                  className="text-xs font-mono font-semibold text-gray-700 hover:text-[#CD1C18] transition-colors flex items-center gap-1"
                >
                  <span>Test in 7-Day Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Code / Terminal Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#170004] border border-[#5A0B19] rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-[#240006] px-4 py-3 border-b border-[#5A0B19] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#CD1C18]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFA896]/60"></div>
                    <div className="w-3 h-3 rounded-full bg-[#38000A] border border-[#5A0B19]"></div>
                    <span className="font-mono text-[11px] text-gray-400 ml-2">
                      etdox_{current.id}_spec.ts
                    </span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-[#FFA896]" />
                </div>
                <div className="p-5 font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed">
                  <pre className="text-gray-300">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>
                <div className="px-4 py-2.5 bg-[#240006]/70 border-t border-[#5A0B19]/50 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="text-[#FFA896] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    STATUS: PRODUCTION READY
                  </span>
                  <span>ENGINEERED BY ETDOX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
