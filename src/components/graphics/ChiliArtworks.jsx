import React from "react";

/* ------------------------------------------------------------------ */
/* Shared SVG artwork in the Chili Spice palette.                      */
/* Used across the site for purposeful, on-brand visual storytelling. */
/* ------------------------------------------------------------------ */

const COLORS = {
  red: "#CD1C18",
  peach: "#FFA896",
  deep: "#9B1313",
  burgundy: "#38000A",
  cream: "#FFF9F7",
  peachDeep: "#FFF2EC",
};

/* A sparse field of connected nodes — the "intelligent systems" motif */
export function NodeField({
  className = "",
  tone = "light",
  density = 14,
  seedOffset = 0,
  animated = false,
  ariaLabel = "Abstract network diagram",
}) {
  const nodes = Array.from({ length: density }, (_, i) => {
    const s = seedOffset + i;
    const x = 8 + ((s * 137.5) % 84);
    const y = 10 + ((s * 89.7) % 80);
    const r = 2 + (s % 3);
    return { x, y, r };
  });

  const stroke = tone === "dark" ? "rgba(255,168,150,0.5)" : "rgba(155,19,19,0.35)";
  const fill = tone === "dark" ? "#FFA896" : "#9B1313";

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      role="img"
    >
      {animated && <title>{ariaLabel}</title>}
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m) => {
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 34) return null;
          return (
            <line
              key={`${i}-${m.x}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke={stroke}
              strokeWidth={0.35}
            />
          );
        })
      )}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={fill} opacity={0.75} />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero - "ETDOX operations console" dashboard mockup.                */
/* A realistic engineering dashboard: window chrome, dark console      */
/* sidebar, KPI cards, throughput chart and production deploy panel.   */
/* Flat Chili Spice palette only - no gradients, no third-party colors. */
/* ------------------------------------------------------------------ */
export function HeroDashboard({ className = "" }) {
  const mono = "'JetBrains Mono', monospace";
  const sans = "'Plus Jakarta Sans','Inter',sans-serif";
  const hair = "rgba(56,0,10,0.10)";

  const kpis = [
    { label: "PODS ACTIVE", value: "42", tone: COLORS.burgundy, sub: "expected: 42" },
    { label: "P99 LATENCY", value: "182ms", tone: COLORS.red, sub: "target: < 250ms" },
    { label: "OPEN INCIDENTS", value: "0", tone: COLORS.burgundy, sub: "all signals nominal" },
  ];

  const nav = ["OVERVIEW", "MODULES", "PIPELINES", "DEPLOYMENTS", "ACCESS"];

  const chart = [
    [252, 392], [292, 378], [332, 386], [372, 352], [412, 364], [452, 318],
    [492, 332], [532, 302], [572, 312], [612, 286], [644, 292],
  ];

  const linePath = chart.map((p, i) => (i === 0 ? "M" : "L") + p[0] + " " + p[1]).join(" ");
  const areaPath = linePath + " L644 414 L252 414 Z";

  const deployLines = [
    { t: "> etdox deploy --prod", c: "#FFD9CE", fw: 700 },
    { t: "push main@c4f21a", c: "#FFD9CE", o: 0.78 },
    { t: "42/42 pods rolled ok", c: COLORS.peach },
    { t: "p99 182ms · 0 errors", c: "#FFD9CE", o: 0.78 },
    { t: "gateway health: nominal", c: COLORS.peach, o: 0.9 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 920 606"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ETDOX operations console dashboard showing active pods, latency metrics, a throughput chart and a production deployment terminal"
    >
      <defs>
        <filter id="hd-win" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#38000A" floodOpacity="0.18" />
        </filter>
        <filter id="hd-card" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#38000A" floodOpacity="0.1" />
        </filter>
        <filter id="hd-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <clipPath id="hd-window">
          <rect x="20" y="20" width="880" height="548" rx="16" />
        </clipPath>
      </defs>

      {/* Desk grounding shadow */}
      <ellipse cx="460" cy="578" rx="400" ry="18" fill={COLORS.burgundy} opacity="0.06" filter="url(#hd-blur)" />

      {/* Window frame */}
      <rect x="20" y="20" width="880" height="548" rx="16" fill="#FFFFFF" stroke={hair} filter="url(#hd-win)" />

      <g clipPath="url(#hd-window)">
        {/* Title bar */}
        <rect x="20" y="20" width="880" height="48" fill={COLORS.cream} />
        <line x1="20" y1="68" x2="900" y2="68" stroke={hair} />
        <circle cx="44" cy="44" r="4.5" fill={COLORS.red} />
        <circle cx="62" cy="44" r="4.5" fill={COLORS.peach} />
        <circle cx="80" cy="44" r="4.5" fill={COLORS.cream} stroke="rgba(56,0,10,0.35)" strokeWidth="1.2" />
        <text x="112" y="49" fill="#7A5A60" fontFamily={mono} fontSize="11" fontWeight="600" letterSpacing="1.4">
          ETDOX — INTELLIGENT OPERATIONS
        </text>
        <rect x="748" y="33" width="132" height="22" rx="11" fill={COLORS.burgundy} />
        <circle cx="762" cy="44" r="3.5" fill={COLORS.red} className="animate-pulse-slow" />
        <text x="774" y="48" fill={COLORS.peach} fontFamily={mono} fontSize="9" fontWeight="700" letterSpacing="1.4">
          PRODUCTION
        </text>

        {/* Console sidebar */}
        <rect x="20" y="68" width="196" height="448" fill="#170004" />
        <rect x="32" y="86" width="26" height="26" rx="7" fill={COLORS.red} />
        <text x="45" y="104" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="15" fontWeight="800">
          E
        </text>
        <text x="68" y="98" fill="#FFFFFF" fontFamily={sans} fontSize="12" fontWeight="700" letterSpacing="0.6">
          ETDOX
        </text>
        <text x="68" y="111" fill={COLORS.peach} fontFamily={mono} fontSize="7.5" fontWeight="600" letterSpacing="1.8">
          OPS CONSOLE
        </text>
        <line x1="32" y1="126" x2="204" y2="126" stroke="rgba(255,168,150,0.12)" />

        {nav.map((item, i) => {
          const active = i === 0;
          const y = 140 + i * 40;
          return (
            <g key={item}>
              {active && <rect x="32" y={y} width="156" height="34" rx="6" fill="rgba(205,28,24,0.16)" />}
              {active && <rect x="32" y={y + 8} width="3" height="18" rx="1.5" fill={COLORS.red} />}
              <rect x="48" y={y + 13} width="7" height="7" rx="2" fill={active ? COLORS.peach : "#FFD9CE"} opacity={active ? 1 : 0.5} />
              <text x="64" y={y + 22} fill={active ? "#FFFFFF" : "#FFD9CE"} opacity={active ? 1 : 0.62} fontFamily={mono} fontSize="10" fontWeight={active ? 700 : 500} letterSpacing="0.8">
                {item}
              </text>
            </g>
          );
        })}

        <rect x="32" y="424" width="156" height="42" rx="8" fill={COLORS.red} />
        <text x="44" y="441" fill="#FFF9F7" fontFamily={mono} fontSize="9" fontWeight="700" letterSpacing="0.6">
          7-DAY TRIAL
        </text>
        <text x="44" y="455" fill="rgba(255,249,247,0.85)" fontFamily={mono} fontSize="7.5" letterSpacing="0.9">
          RISK-FREE EVALUATION
        </text>

        {/* Main content */}
        <text x="236" y="94" fill={COLORS.burgundy} fontFamily={sans} fontSize="15" fontWeight="700">
          System Overview
        </text>
        <text x="236" y="110" fill="#7A5A60" fontFamily={mono} fontSize="9.5">
          production cluster · eu-west-1 · 42 pods
        </text>
        <rect x="806" y="82" width="74" height="24" rx="12" fill={COLORS.peach} fillOpacity="0.35" stroke="rgba(205,28,24,0.35)" />
        <circle cx="820" cy="94" r="4" fill={COLORS.red} className="animate-pulse-slow" />
        <text x="830" y="98" fill="#9B1313" fontFamily={mono} fontSize="9" fontWeight="700" letterSpacing="1.2">
          LIVE
        </text>

        {/* KPI cards */}
        {kpis.map((k, i) => {
          const x = 236 + i * 216;
          return (
            <g key={k.label}>
              <rect x={x} y="126" width="204" height="92" rx="10" fill="#FFF9F7" stroke={hair} filter="url(#hd-card)" />
              <text x={x + 16} y="147" fill="#7A5A60" fontFamily={mono} fontSize="8.5" fontWeight="600" letterSpacing="1.3">
                {k.label}
              </text>
              <text x={x + 16} y="180" fill={k.tone} fontFamily={mono} fontSize="27" fontWeight="700">
                {k.value}
              </text>
              <text x={x + 16} y="202" fill="#A97884" fontFamily={mono} fontSize="8">
                {k.sub}
              </text>
            </g>
          );
        })}

        {/* Throughput chart */}
        <g>
          <rect x="236" y="234" width="424" height="222" rx="10" fill="#FFFFFF" stroke={hair} filter="url(#hd-card)" />
          <text x="252" y="256" fill={COLORS.burgundy} fontFamily={mono} fontSize="9" fontWeight="700" letterSpacing="1.1">
            THROUGHPUT (REQ/S)
          </text>
          <circle cx="560" cy="252" r="3" fill={COLORS.red} />
          <text x="570" y="256" fill="#7A5A60" fontFamily={mono} fontSize="7.5">
            today
          </text>
          <circle cx="608" cy="252" r="3" fill={COLORS.peach} />
          <text x="618" y="256" fill="#7A5A60" fontFamily={mono} fontSize="7.5">
            baseline
          </text>

          {[286, 318, 350, 382, 414].map((y) => (
            <line key={y} x1="252" y1={y} x2="644" y2={y} stroke="rgba(56,0,10,0.07)" />
          ))}
          <text x="244" y="290" fill="#A97884" fontFamily={mono} fontSize="7">
            4k
          </text>
          <text x="244" y="354" fill="#A97884" fontFamily={mono} fontSize="7">
            2k
          </text>
          <text x="252" y="418" fill="#A97884" fontFamily={mono} fontSize="7">
            0
          </text>
          {[["252", "00:00"], ["380", "06:00"], ["508", "12:00"], ["636", "18:00"]].map((xy) => (
            <text key={xy[1]} x={xy[0]} y="442" fill="#A97884" fontFamily={mono} fontSize="7">
              {xy[1]}
            </text>
          ))}

          <line x1="252" y1="350" x2="644" y2="350" stroke={COLORS.peach} strokeDasharray="3 5" opacity="0.8" />
          <path d={areaPath} fill={COLORS.peach} fillOpacity="0.16" />
          <path d={linePath} stroke={COLORS.red} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="644" cy="292" r="4" fill={COLORS.red} />
          <circle cx="644" cy="292" r="8" stroke={COLORS.red} strokeOpacity="0.3" />
        </g>

        {/* Deploy terminal */}
        <g>
          <rect x="672" y="234" width="216" height="222" rx="10" fill="#240006" stroke="rgba(255,168,150,0.16)" filter="url(#hd-card)" />
          <circle cx="690" cy="252" r="3.5" fill={COLORS.red} />
          <circle cx="704" cy="252" r="3.5" fill={COLORS.peach} />
          <circle cx="718" cy="252" r="3.5" fill={COLORS.burgundy} stroke={COLORS.peach} strokeOpacity="0.4" strokeWidth="1" />
          <text x="740" y="256" fill={COLORS.peach} fontFamily={mono} fontSize="8.5" fontWeight="700" letterSpacing="1">
            DEPLOY · PROD
          </text>
          {deployLines.map((l, i) => (
            <text key={i} x="688" y={278 + i * 20} fill={l.c} opacity={l.o === undefined ? 1 : l.o} fontFamily={mono} fontSize="8.5" fontWeight={l.fw === undefined ? 500 : l.fw}>
              {l.t}
            </text>
          ))}
          <rect x="688" y="388" width="196" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <rect x="688" y="388" width="150" height="5" rx="2.5" fill={COLORS.red} />
          <rect x="688" y="398" width="7" height="10" fill={COLORS.red} className="animate-pulse-slow" />
        </g>

        {/* Bottom status strip */}
        <rect x="20" y="470" width="880" height="98" fill="#170004" />
        <circle cx="34" cy="497" r="3" fill={COLORS.red} className="animate-pulse-slow" />
        <text x="44" y="502" fill="#FFD9CE" opacity="0.85" fontFamily={mono} fontSize="8.5" letterSpacing="1">
          BUILD 402 · ZERO FAILED CHECKS
        </text>
        <text x="880" y="502" textAnchor="end" fill={COLORS.peach} opacity="0.9" fontFamily={mono} fontSize="8.5" letterSpacing="0.6">
          GATEWAY: 12MS P99
        </text>
        <line x1="32" y1="514" x2="888" y2="514" stroke="rgba(255,168,150,0.1)" />
        <text x="460" y="534" textAnchor="middle" fill="#FFD9CE" opacity="0.6" fontFamily={mono} fontSize="8" letterSpacing="1.6">
          AGENTS · RAG · GATEWAY · 42 PODS · 14 SERVICES
        </text>
        <text x="44" y="560" fill="#FFFFFF" opacity="0.45" fontFamily={mono} fontSize="8" letterSpacing="1.2">
          © 2026 ETDOX — AI-NATIVE TECHNOLOGY PARTNER
        </text>
        <text x="880" y="560" textAnchor="end" fill="#FFFFFF" opacity="0.55" fontFamily={mono} fontSize="8" letterSpacing="1.4">
          ENGINEERED BY ETDOX
        </text>
      </g>
    </svg>
  );
}


/* ------------------------------------------------------------------ */
/* Solutions — Problem → ETDOX core → Solution flowboard.              */
/* Used on the Solutions hub to frame capability delivery.             */
/* ------------------------------------------------------------------ */
export function FlowboardGraphic({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing a problem moving through the ETDOX engineering core into a production solution"
    >
      <defs>
        <filter id="fb-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#38000A" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Column headers */}
      <g fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="2">
        <text x="40" y="34" fill={COLORS.deep}>PROBLEM</text>
        <text x="430" y="34" textAnchor="middle" fill={COLORS.red}>ETDOX CORE</text>
        <text x="860" y="34" textAnchor="end" fill={COLORS.deep}>SOLUTION</text>
      </g>
      <line x1="40" y1="46" x2="860" y2="46" stroke="#9B1313" strokeOpacity="0.12" />

      {/* Problem cards */}
      <g filter="url(#fb-soft)">
        <rect x="40" y="70" width="240" height="62" rx="12" fill={COLORS.peachDeep} stroke="#CD1C18" strokeOpacity="0.3" />
        <g stroke={COLORS.red} strokeWidth="2.4" strokeLinecap="round">
          <line x1="60" y1="86" x2="76" y2="102" />
          <line x1="76" y1="86" x2="60" y2="102" />
        </g>
        <text x="90" y="96" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700">Fragmented systems</text>
        <text x="90" y="114" fill="#7A5A60" fontFamily="'Inter', sans-serif" fontSize="10">siloed data, slow releases</text>

        <rect x="40" y="146" width="240" height="62" rx="12" fill={COLORS.peachDeep} stroke="#CD1C18" strokeOpacity="0.3" />
        <g stroke={COLORS.red} strokeWidth="2.4" strokeLinecap="round">
          <line x1="60" y1="162" x2="76" y2="178" />
          <line x1="76" y1="162" x2="60" y2="178" />
        </g>
        <text x="90" y="172" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700">Manual workflows</text>
        <text x="90" y="190" fill="#7A5A60" fontFamily="'Inter', sans-serif" fontSize="10">error-prone, no scale</text>
      </g>

      {/* Solution cards */}
      <g filter="url(#fb-soft)">
        <rect x="620" y="70" width="240" height="62" rx="12" fill="#FFFFFF" stroke="#9B1313" strokeOpacity="0.18" />
        <circle cx="644" cy="101" r="9" fill={COLORS.red} />
        <path d="M639 101 L642.5 104.5 L649.5 97" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="664" y="96" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700">Automated pipelines</text>
        <text x="664" y="114" fill="#7A5A60" fontFamily="'Inter', sans-serif" fontSize="10">self-healing, validated data</text>

        <rect x="620" y="146" width="240" height="62" rx="12" fill="#FFFFFF" stroke="#9B1313" strokeOpacity="0.18" />
        <circle cx="644" cy="177" r="9" fill={COLORS.red} />
        <path d="M639 177 L642.5 180.5 L649.5 173" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="664" y="172" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700">Production systems</text>
        <text x="664" y="190" fill="#7A5A60" fontFamily="'Inter', sans-serif" fontSize="10">typed, tested, observable</text>
      </g>

      {/* Connectors */}
      <g fill="none" strokeLinecap="round">
        <g stroke={COLORS.red} strokeOpacity="0.08" strokeWidth="9">
          <path d="M280 101 C 330 101, 342 118, 392 130" />
          <path d="M280 177 C 330 177, 342 160, 392 148" />
          <path d="M470 130 C 520 118, 532 101, 590 101" />
          <path d="M470 148 C 520 160, 532 177, 590 177" />
        </g>
        <g stroke={COLORS.deep} strokeOpacity="0.5" strokeWidth="1.7">
          <path d="M280 101 C 330 101, 342 118, 392 130" strokeDasharray="6 8" className="animate-dash" />
          <path d="M280 177 C 330 177, 342 160, 392 148" strokeDasharray="6 8" className="animate-dash" />
          <path d="M470 130 C 520 118, 532 101, 590 101" strokeDasharray="6 8" className="animate-dash" />
          <path d="M470 148 C 520 160, 532 177, 590 177" strokeDasharray="6 8" className="animate-dash" />
        </g>
      </g>

      {/* Core engine */}
      <g filter="url(#fb-soft)">
        <circle cx="430" cy="139" r="56" fill={COLORS.burgundy} />
        <circle cx="430" cy="139" r="66" stroke={COLORS.peach} strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="4 7" />
        <circle cx="430" cy="139" r="30" fill={COLORS.red} />
        <circle cx="422" cy="131" r="8" fill="#FFFFFF" fillOpacity="0.85" />
        <text x="430" y="150" textAnchor="middle" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="0.8">ETDOX</text>
      </g>

      {/* Baseline annotation */}
      <text x="450" y="240" textAnchor="middle" fill="#7A5A60" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" letterSpacing="1.6">
        PROBLEM → ETDOX ENGINE → SOLUTION
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* How We Work — 7-stage delivery pipeline.                            */
/* Used atop the process section and reusable as a compact stepline.   */
/* ------------------------------------------------------------------ */
export function PipelineGraphic({
  className = "",
  labels = ["DISCOVER", "PLAN", "PROTOTYPE", "7-DAY TRIAL", "BUILD", "DEPLOY", "MANAGE"],
  active = 4,
}) {
  const n = labels.length;
  const x = (i) => 70 + (i * (900 - 70)) / (n - 1);

  return (
    <svg
      className={className}
      viewBox="0 0 980 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Seven stage engineering delivery pipeline"
    >
      {/* Track */}
      <line x1="60" y1="92" x2="900" y2="92" stroke="#9B1313" strokeOpacity="0.22" strokeWidth="1.5" />
      <line x1="60" y1="92" x2={x(active)} y2="92" stroke={COLORS.red} strokeWidth="2.5" />
      <path d="M898 86 L912 92 L898 98 Z" fill={COLORS.red} />

      {/* Ticks */}
      {labels.map((_, i) => (
        <rect
          key={`t${i}`}
          x={x(i) - 1.5}
          y={i <= active ? 84 : 99}
          width="3"
          height="16"
          rx="1.5"
          fill={i <= active ? COLORS.red : "#C9A39E"}
        />
      ))}

      {/* Nodes */}
      {labels.map((label, i) => {
        const past = i < active;
        const isActive = i === active;
        return (
          <g key={label}>
            <text
              x={x(i)}
              y="44"
              textAnchor="middle"
              fill={COLORS.burgundy}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="10"
              fontWeight="700"
              letterSpacing="1.2"
            >
              {label}
            </text>
            <circle
              cx={x(i)}
              cy="92"
              r="22"
              fill={isActive ? COLORS.red : past ? COLORS.burgundy : "#FFFFFF"}
              stroke={past || isActive ? "none" : "#9B1313"}
              strokeOpacity={past || isActive ? 0 : 0.35}
              strokeWidth="1.5"
            />
            {isActive && (
              <circle cx={x(i)} cy="92" r="29" stroke={COLORS.red} strokeOpacity="0.35" strokeWidth="1.4" className="animate-pulse-slow" />
            )}
            <text
              x={x(i)}
              y="98"
              textAnchor="middle"
              fill={past || isActive ? COLORS.peach : COLORS.deep}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="12"
              fontWeight="700"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Products — platform architecture: layered stack + health panel.     */
/* ------------------------------------------------------------------ */
export function PlatformStackGraphic({ className = "" }) {
  const layers = [
    { label: "PRESENTATION", tag: "web · mobile · console", fill: COLORS.peach, tint: "#FFF9F7" },
    { label: "ORCHESTRATION", tag: "gateway · agents · workflows", fill: "#FFFFFF", tint: "#FFFFFF" },
    { label: "INTELLIGENCE", tag: "RAG · models · guardrails", fill: COLORS.peachDeep, tint: COLORS.peachDeep },
    { label: "DATA LAYER", tag: "vectors · streams · lakehouse", fill: "#FFFFFF", tint: "#FFFFFF" },
    { label: "CLOUD RUNTIME", tag: "k8s · gitops · edge", fill: COLORS.burgundy, tint: COLORS.burgundy },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Layered ETDOX platform architecture with a runtime health panel"
    >
      <defs>
        <filter id="ps-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#38000A" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Backdrop rails */}
      <path d="M330 70 L330 410" stroke="#FFA896" strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="5 7" />
      <circle cx="330" cy="70" r="5" fill={COLORS.red} />
      <circle cx="330" cy="410" r="5" fill={COLORS.red} />

      {/* Layer stack */}
      {layers.map((layer, i) => {
        const x = 36 + i * 10;
        const y = 62 + i * 70;
        const isDark = layer.fill === COLORS.burgundy;
        return (
          <g key={layer.label} filter="url(#ps-soft)">
            <rect x={x} y={y} width="250" height="56" rx="12" fill={layer.tint} stroke={COLORS.deep} strokeOpacity={isDark ? 0 : 0.3} />
            {layer.tint === COLORS.peach && <rect x={x} y={y} width="7" height="56" rx="3.5" fill={COLORS.red} />}
            {isDark && <rect x={x} y={y + 8} width="46" height="40" rx="8" fill="#FFFFFF" fillOpacity="0.06" />}
            <circle cx={x + 24} cy={y + 28} r="8" fill={isDark ? COLORS.peach : COLORS.red} className={isDark ? "animate-pulse-slow" : ""} />
            <text
              x={x + 44}
              y={y + 25}
              fill={isDark ? "#FFFFFF" : COLORS.burgundy}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1.2"
            >
              {layer.label}
            </text>
            <text
              x={x + 44}
              y={y + 42}
              fill={isDark ? "#FFD9CE" : "#7A5A60"}
              fontFamily="'Inter', sans-serif"
              fontSize="9"
            >
              {layer.tag}
            </text>
          </g>
        );
      })}

      {/* Spine nodes */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={330} y1={84 + i * 70} x2={330} y2={118 + i * 70} stroke="#9B1313" strokeOpacity="0.25" strokeWidth="1.5" />
      ))}

      {/* Health panel */}
      <g filter="url(#ps-soft)">
        <rect x="360" y="92" width="168" height="300" rx="14" fill="#FFFFFF" stroke="#9B1313" strokeOpacity="0.2" />
        <rect x="378" y="112" width="132" height="18" rx="9" fill={COLORS.peachDeep} />
        <text x="390" y="125" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700" letterSpacing="1.2">
          RUNTIME HEALTH
        </text>
        <circle cx="524" cy="121" r="4" fill={COLORS.red} className="animate-pulse-slow" />

        {/* Stat rows */}
        {[
          ["UPTIME", "99.98%"],
          ["PODS", "12 / 12"],
          ["DRIFT", "0.0%"],
          ["P99", "42ms"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="378" y={168 + i * 34} fill="#7A5A60" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="1.4">
              {k}
            </text>
            <text x="524" y={168 + i * 34} textAnchor="end" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700">
              {v}
            </text>
            <rect x="378" y={178 + i * 34} width="132" height="3" rx="1.5" fill={COLORS.peachDeep} />
            <rect x="378" y={178 + i * 34} width={132 * (i === 0 ? 1 : i === 1 ? 1 : i === 2 ? 1 : 0.8)} height="3" rx="1.5" fill={COLORS.red} />
          </g>
        ))}

        {/* Toggle row */}
        <line x1="378" y1="332" x2="510" y2="332" stroke="#9B1313" strokeOpacity="0.12" />
        <circle cx="384" cy="350" r="7" fill={COLORS.red} />
        <circle cx="392" cy="350" r="3" fill="#FFFFFF" />
        <text x="408" y="354" fill={COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="9">auto-remediation</text>

        <text x="378" y="378" fill={COLORS.deep} fontFamily="'JetBrains Mono', monospace" fontSize="8.5" opacity="0.7">
          ► etdox --status ● healthy
        </text>
      </g>

      {/* Ping arcs */}
      <g fill="none" stroke={COLORS.peach} strokeOpacity="0.55">
        <path d="M36 118 C 24 140, 24 160, 36 178" strokeWidth="1.4" />
        <path d="M286 118 C 300 140, 300 160, 286 178" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Industries — sector scan / orbit motif.                             */
/* Representation of one engine serving many industries.               */
/* ------------------------------------------------------------------ */
export function OrbitFieldGraphic({ className = "", sectors = [] }) {
  const defaultSectors = ["BFSI", "RETAIL", "HEALTH", "LOGISTICS", "ENERGY", "EDTECH", "GOVERN", "MFG"];
  const list = sectors.length ? sectors : defaultSectors;
  const R = (i) => 76 + (i % 3) * 58;

  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sector scan motif showing a central ETDOX engine surrounded by industry nodes"
    >
      <defs>
        <filter id="of-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#38000A" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Backdrop rings */}
      <g>
        <circle cx="260" cy="260" r="244" stroke="#9B1313" strokeOpacity="0.12" strokeDasharray="2 6" />
        <circle cx="260" cy="260" r="190" stroke="#9B1313" strokeOpacity="0.12" />
        <circle cx="260" cy="260" r="132" stroke="#FFA896" strokeOpacity="0.4" strokeDasharray="5 8" />
        <circle cx="260" cy="260" r="70" stroke="#9B1313" strokeOpacity="0.18" />
      </g>

      {/* Crosshair */}
      <g stroke="#9B1313" strokeOpacity="0.25" strokeWidth="1.4">
        <line x1="260" y1="16" x2="260" y2="504" />
        <line x1="16" y1="260" x2="504" y2="260" />
      </g>

      {/* Degree ticks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 260 + Math.cos(rad) * 232;
        const y1 = 260 + Math.sin(rad) * 232;
        const x2 = 260 + Math.cos(rad) * 244;
        const y2 = 260 + Math.sin(rad) * 244;
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9B1313" strokeOpacity="0.3" strokeWidth="1.5" />;
      })}

      {/* Highlighted scan arc */}
      <path
        d="M260,260 m -190,0 a 190,190 0 1,1 190,190"
        fill="none"
        stroke={COLORS.red}
        strokeWidth="2.5"
        strokeDasharray="14 18"
        className="animate-dash"
        transform="rotate(-40 260 260)"
      />

      {/* Sector nodes */}
      {list.map((sector, i) => {
        const angle = -90 + (i * 360) / list.length;
        const rad = (angle * Math.PI) / 180;
        const r = R(i);
        const x = 260 + Math.cos(rad) * r;
        const y = 260 + Math.sin(rad) * r;
        const active = i === 0;
        return (
          <g key={sector} filter="url(#of-soft)" className="animate-float" style={{ animationDelay: `${i * 0.35}s` }}>
            <circle cx={x} cy={y} r={active ? 26 : 21} fill={active ? COLORS.burgundy : "#FFFFFF"} stroke={active ? "none" : "#9B1313"} strokeOpacity={active ? 0 : 0.25} />
            <circle cx={x - 5} cy={y - 5} r={active ? 6 : 4} fill={COLORS.peach} opacity="0.9" />
            <text x={x} y={y + 4} textAnchor="middle" fill={active ? "#FFFFFF" : COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize={active ? 8.5 : 7.5} fontWeight="700" letterSpacing="0.6">
              {sector}
            </text>
            {active && <circle cx={x} cy={y} r={34} stroke={COLORS.red} strokeOpacity="0.35" strokeWidth="1.4" className="animate-pulse-slow" />}
          </g>
        );
      })}

      {/* Core */}
      <g filter="url(#of-soft)">
        <circle cx="260" cy="260" r="46" fill={COLORS.burgundy} />
        <circle cx="260" cy="260" r="58" stroke={COLORS.peach} strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="4 7" />
        <circle cx="260" cy="260" r="24" fill={COLORS.red} />
        <circle cx="253" cy="253" r="7" fill="#FFFFFF" fillOpacity="0.85" />
        <text x="260" y="269" textAnchor="middle" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9.5" fontWeight="700" letterSpacing="1">
          ETDOX
        </text>
      </g>

      {/* Legend */}
      <g fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1.2" fill="#7A5A60">
        <text x="260" y="498" textAnchor="middle">SECTOR SCAN — ONE ENGINE, MANY INDUSTRIES</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Company About — mission target / pillar orbit.                      */
/* ------------------------------------------------------------------ */
export function MissionGraphic({ className = "", labels = [] }) {
  const pillars = labels.length
    ? labels
    : ["AI-NATIVE", "DELIVERY PODS", "TRANSPARENCY", "DURABILITY"];

  return (
    <svg
      className={className}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Concentric mission target with four foundation pillars in orbit"
    >
      <defs>
        <filter id="mg-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#38000A" floodOpacity="0.14" />
        </filter>
      </defs>

      <circle cx="210" cy="210" r="200" stroke="#9B1313" strokeOpacity="0.1" strokeDasharray="2 6" />
      <circle cx="210" cy="210" r="150" stroke="#FFA896" strokeOpacity="0.5" />
      <circle cx="210" cy="210" r="104" stroke="#9B1313" strokeOpacity="0.18" strokeDasharray="4 7" />
      <circle cx="210" cy="210" r="58" stroke="#FFA896" strokeOpacity="0.65" strokeWidth="1.4" />

      <g stroke="#9B1313" strokeOpacity="0.22" strokeWidth="1.3">
        <line x1="210" y1="10" x2="210" y2="410" />
        <line x1="10" y1="210" x2="410" y2="210" />
      </g>

      {/* Pillar nodes */}
      {pillars.map((pillar, i) => {
        const angle = -90 + i * 90;
        const rad = (angle * Math.PI) / 180;
        const x = 210 + Math.cos(rad) * 150;
        const y = 210 + Math.sin(rad) * 150;
        return (
          <g key={pillar} filter="url(#mg-soft)" className="animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
            <rect x={x - 56} y={y - 14} width="112" height="28" rx="14" fill={i === 0 ? COLORS.burgundy : "#FFFFFF"} stroke="#9B1313" strokeOpacity={i === 0 ? 0 : 0.2} />
            <circle cx={x - 38} cy={y} r="4" fill={i === 0 ? COLORS.peach : COLORS.red} />
            <text x={x} y={y + 4} textAnchor="middle" fill={i === 0 ? "#FFFFFF" : COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fontWeight="700" letterSpacing="1">
              {pillar}
            </text>
          </g>
        );
      })}

      {/* Mission core */}
      <g filter="url(#mg-soft)">
        <circle cx="210" cy="210" r="42" fill={COLORS.burgundy} />
        <circle cx="210" cy="210" r="20" fill={COLORS.red} />
        <circle cx="203" cy="203" r="6" fill="#FFFFFF" fillOpacity="0.85" />
        <text x="210" y="222" textAnchor="middle" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="700" letterSpacing="1">
          MISSION
        </text>
      </g>

      <text x="210" y="400" textAnchor="middle" fill="#7A5A60" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="1.4">
        FOUNDATIONS IN ORBIT
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Company Careers — growth track graphic.                             */
/* Tone "dark" renders for the burgundy careers band.                  */
/* ------------------------------------------------------------------ */
export function CareerGraphic({ className = "", tone = "dark" }) {
  const dark = tone === "dark";
  const steps = ["LEARN", "SHIP", "LEAD", "ARCHITECT"];
  const ys = [340, 260, 180, 100];

  return (
    <svg
      className={className}
      viewBox="0 0 420 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Career growth track ascending through learn, ship, lead and architect"
    >
      <defs>
        <filter id="cg-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#38000A" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Backdrop grid */}
      <g stroke={dark ? "rgba(255,168,150,0.08)" : "rgba(155,19,19,0.06)"} strokeWidth="1">
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="30" y1={60 + i * 60} x2="390" y2={60 + i * 60} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`v${i}`} x1={60 + i * 70} y1="30" x2={60 + i * 70} y2="380" />
        ))}
      </g>

      {/* Climbing path */}
      <path
        d="M70 340 C 140 340, 150 300, 210 260 C 260 226, 250 210, 310 180 C 350 160, 340 130, 350 100"
        fill="none"
        stroke={dark ? COLORS.red : COLORS.red}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 10"
        className="animate-dash"
      />

      {/* Steps */}
      {steps.map((step, i) => {
        const active = i === 1;
        return (
          <g key={step} filter="url(#cg-soft)">
            <circle cx={70 + i * 100} cy={ys[i]} r="26" fill={active ? COLORS.red : dark ? "#4E0612" : "#FFFFFF"} stroke={active ? "none" : dark ? "rgba(255,168,150,0.3)" : "#9B1313"} strokeOpacity={dark ? 1 : 0.3} />
            <text x={70 + i * 100} y={ys[i] + 4} textAnchor="middle" fill={active ? "#FFFFFF" : dark ? COLORS.peach : COLORS.deep} fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="700" letterSpacing="0.8">
              {step}
            </text>
            {active && <circle cx={70 + i * 100} cy={ys[i]} r="34" stroke={COLORS.peach} strokeOpacity="0.5" strokeWidth="1.4" className="animate-pulse-slow" />}
          </g>
        );
      })}

      {/* Terminal bar */}
      <rect x="40" y="372" width="340" height="26" rx="13" fill={dark ? "#240006" : COLORS.peachDeep} stroke={dark ? "rgba(255,168,150,0.15)" : "#9B1313"} strokeOpacity="0.15" />
      <circle cx="62" cy="385" r="5" fill={COLORS.red} className="animate-pulse-slow" />
      <text x="78" y="389" fill={dark ? COLORS.peach : COLORS.burgundy} fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="1">
        ROLLING REVIEWS · CAREERS@ETDOX.COM
      </text>
    </svg>
  );
}

/* Tall, layered panel used in section split layouts */
export function LayerStack({
  className = "",
  labels = ["AGENTS", "RETRIEVAL", "ETL", "CLOUD RUNTIME"],
}) {
  const depth = labels.length;
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-2xl border-2 border-[#9B1313]/15 -translate-x-3 translate-y-3 hidden sm:block" />
      <div className="absolute inset-0 rounded-2xl border-2 border-[#FFA896]/50 -translate-x-1.5 translate-y-1.5 hidden sm:block" />
      <div className="relative bg-[#38000A] rounded-2xl p-5 sm:p-6 shadow-card-subtle">
        <div className="space-y-2.5">
          {labels.map((label, i) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg bg-[#FFF9F7] px-4 py-3"
              style={{ opacity: 0.55 + (i / depth) * 0.45 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#CD1C18]" />
                <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#38000A]">
                  {label}
                </span>
              </div>
              <svg className="w-4 h-4 text-[#9B1313]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          ))}
        </div>

        {/* Footer terminal line */}
        <div className="mt-3 flex items-center gap-2 border-t border-[#FFA896]/15 pt-3 font-mono text-[10px] text-[#FFA896]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CD1C18] animate-pulse-slow" />
          <span>SYS.READY — DEPLOYED BY ETDOX</span>
        </div>
      </div>
    </div>
  );
}

/* Spark node accent used behind headings */
export function SparkMark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#FFA896" strokeWidth="2" strokeDasharray="3 5" />
      <circle cx="32" cy="32" r="20" fill="#FFA896" fillOpacity="0.35" />
      <path d="M32 14L35 28L49 31L35 34L32 48L29 34L15 31L29 28L32 14Z" fill="#CD1C18" />
    </svg>
  );
}