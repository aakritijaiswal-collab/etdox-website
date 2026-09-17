import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Code2, Database, Cloud, ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

export default function InteractivePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "ai",
      title: "AI",
      label: "AI & Automation",
      headline: "Autonomous agents, knowledge RAG & foundation models",
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
      title: "Software",
      label: "Software Engineering",
      headline: "High-performance web, mobile & distributed microservices",
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
      title: "Data",
      label: "Data & Analytics",
      headline: "Fault-tolerant pipelines & real-time business intelligence",
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
      title: "Cloud",
      label: "Cloud & DevOps",
      headline: "Elastic cloud infrastructure, GitOps & continuous MLOps",
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
    <section className="py-24 lg:py-32 bg-white border-b border-[#38000A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[#CD1C18] mb-5">
                <span>01 — What We Do</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-[#38000A] leading-[1.06]">
                Four capabilities.{" "}
                <span className="text-[#CD1C18]">One delivery team.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-sm text-[#4A2A31] leading-relaxed lg:max-w-xs lg:ml-auto">
                We assemble specialized, multidisciplinary technical capacity
                around your exact engineering challenge.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: index list */}
          <Reveal className="lg:col-span-4">
            <div className="border-t border-[#38000A]/10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    aria-pressed={isActive}
                    className={`w-full text-left py-5 pr-4 pl-1 border-b border-[#38000A]/10 group transition-colors relative ${
                      isActive ? "bg-[#FFF2EC]" : "hover:bg-[#FFF9F7]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#CD1C18] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                      }`}
                    />
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isActive ? "text-[#CD1C18]" : "text-[#A97884]"}`}>
                        0{idx + 1}
                      </span>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-[#CD1C18] text-white" : "bg-[#FFA896]/40 text-[#9B1313] group-hover:bg-[#FFA896]"
                      }`}>
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      <div>
                        <h3 className={`font-display font-bold text-lg tracking-tight ${isActive ? "text-[#38000A]" : "text-[#4A2A31] group-hover:text-[#38000A]"}`}>
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#9B1313]">
                          {pillar.label}
                        </p>
                      </div>
                      <ArrowRight className={`ml-auto w-4 h-4 transition-all ${isActive ? "text-[#CD1C18] translate-x-0" : "text-[#C9A39E] -translate-x-1 group-hover:translate-x-0 group-hover:text-[#CD1C18]"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-[#38000A]/10">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#CD1C18] hover:text-[#9B1313] transition-colors"
              >
                <span>View the full capability map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

          {/* Right: detail panel */}
          <Reveal delay={1} className="lg:col-span-8">
            <div key={current.id} className="grid grid-cols-1 xl:grid-cols-12 gap-8 bg-[#FFF9F7] border border-[#38000A]/10 rounded-2xl p-6 sm:p-10 animate-fade-in">
              {/* Content */}
              <div className="xl:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CD1C18]/8 border border-[#CD1C18]/20 text-[#CD1C18] font-mono text-[11px] font-bold uppercase tracking-wider">
                    <CurrentIcon className="w-3.5 h-3.5" />
                    Pillar 0{activePillar + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A5A60]">
                    {current.label}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#38000A] tracking-tight leading-snug">
                  {current.headline}
                </h3>

                <p className="text-[#4A2A31] text-sm sm:text-base leading-relaxed">
                  {current.summary}
                </p>

                <div className="space-y-2.5 pt-1">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9B1313]">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A2A31]">
                        <CheckCircle2 className="w-4 h-4 text-[#CD1C18] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9B1313] mb-2">
                    Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white border border-[#38000A]/10 text-[#38000A] font-mono text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Button to={current.route} variant="primary" icon={ArrowRight}>
                    Explore {current.title} Solutions
                  </Button>
                  <Link
                    to="/contact?intent=trial"
                    className="text-xs font-mono font-semibold text-[#9B1313] hover:text-[#CD1C18] transition-colors flex items-center gap-1"
                  >
                    <span>Test in a 7-day sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Terminal visual */}
              <div className="xl:col-span-5 flex items-stretch">
                <div className="w-full bg-[#170004] border border-[#38000A]/50 rounded-xl overflow-hidden shadow-card-subtle self-center">
                  <div className="bg-[#240006] px-4 py-3 border-b border-[#38000A]/70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#CD1C18]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFA896]/60"></div>
                      <div className="w-3 h-3 rounded-full bg-[#38000A] border border-[#FFA896]/20"></div>
                      <span className="font-mono text-[11px] text-[#FFD9CE]/60 ml-2">
                        etdox_{current.id}_spec.ts
                      </span>
                    </div>
                    <Terminal className="w-3.5 h-3.5 text-[#FFA896]" />
                  </div>
                  <div className="p-5 font-mono text-xs text-[#FFD9CE]/80 overflow-x-auto leading-relaxed">
                    <pre className="text-[#FFD9CE]/80">
                      <code>{current.codeSnippet}</code>
                    </pre>
                  </div>
                  <div className="px-4 py-2.5 bg-[#240006]/70 border-t border-[#38000A]/50 flex items-center justify-between text-[11px] font-mono text-[#FFD9CE]/50">
                    <span className="text-[#FFA896] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CD1C18] animate-pulse-slow"></span>
                      STATUS: PRODUCTION READY
                    </span>
                    <span>ENGINEERED BY ETDOX</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}