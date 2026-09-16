# ETDOX — AI-Native Technology & Digital Transformation Website

> **Primary Positioning:** Your technical team, on demand.  
> **Core Message:** WE BUILD INTELLIGENT TECHNOLOGY. We design, build and manage technology for businesses, startups and enterprises.

Production-ready, responsive, accessible corporate website built for **ETDOX** according to the architectural blueprints in `Company_Website_Architecture.pdf`.

---

## 1. Design System — Chili Spice

The design system is strictly built upon the monochromatic **Chili Spice** palette with complementary neutrals:

| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| **Primary Red** | `#CD1C18` | Primary CTA, key highlights, accents, active markers |
| **Soft Coral** | `#FFA896` | High-contrast subheadings, glows, badges, hero accents |
| **Deep Red** | `#9B1313` | Button hover states, secondary indicators, badges |
| **Dark Burgundy** | `#38000A` | Hero sections, impact cards, dark full-width layouts |
| **Burgundy Dark** | `#240006` | Mobile drawer, terminal window chrome, card depth |
| **Burgundy Darker**| `#170004` | Deep footer, contrast code snippets |
| **Surface White** | `#FFFFFF` | Core content sections, clean card backgrounds |
| **Off-White** | `#FBFBFC` | Alternating section backgrounds, data grids |
| **Light Gray** | `#F8F9FA` | Neutral panels, subtle borders |

---

## 2. Tech Stack & Architecture

- **Runtime & Bundler:** React 19 + Vite 8
- **Routing:** React Router v7 (`react-router-dom`) with `ScrollToTop` restoration and deep-linking support
- **Styling:** Tailwind CSS v3 with custom Chili Spice tokens, typography extensions, and responsive breakpoints
- **Iconography:** `lucide-react` for clean, modern engineering symbols
- **Interactive Visuals:** High-performance HTML5 Canvas dynamic particle & neural lattice visualizer in the Hero section (60fps, responsive, accessible, zero heavy external 3D dependencies)
- **Lead Qualification Engine:** Full client-side validated multi-mode lead capture system supporting *Start a Project*, *Start 7-Day Trial*, *Request Free Prototype*, and *Free Consultation*.

---

## 3. Site Navigation & Route Hierarchy

```
/
├── /                              # Homepage (Hero, What We Do, 7-Day Trial, Free Prototype, Small Project -> Enterprise, One Team, Final CTA)
├── /solutions                     # Solutions Hub (Overview of 5 core domains)
│   ├── /solutions/ai-automation   # AI Automation, Agents, Chatbots, GenAI, RAG, AI/ML, Integration
│   ├── /solutions/software        # Web, Mobile, SaaS, APIs, Microservices, Enterprise Software
│   ├── /solutions/data-cloud      # Data Engineering, Analytics, Cloud, DevOps, MLOps
│   ├── /solutions/security        # Cybersecurity, Infrastructure Security, Secure Integrations
│   └── /solutions/digital         # SEO, UI/UX, Graphic Design, Ads, Influencer Solutions, Game Dev
├── /industries                    # Industries Overview
│   ├── /industries/startups-smbs  # Startups & SMBs
│   ├── /industries/enterprise     # Enterprise Systems
│   ├── /industries/bfsi           # Banking, Financial Services & Insurance
│   ├── /industries/manufacturing  # Manufacturing & Industrial IoT
│   ├── /industries/healthcare     # Healthcare & Life Sciences
│   ├── /industries/retail         # Retail & E-Commerce
│   ├── /industries/logistics      # Logistics & Supply Chain
│   ├── /industries/education      # Education & EdTech
│   └── /industries/government     # Government & Public Sector
├── /products                      # Reusable Platforms & Accelerators (Authentic Coming Soon & Architecture Preview)
├── /how-we-work                   # 7-Step Lifecycle & 5 Engagement Models (Project-Based, Dedicated Team, Managed Tech, SaaS, Equity-Based)
├── /company                       # About, Team Pod Architecture, Technology Stack, Careers, Partners
├── /contact                       # Lead Qualification & Direct Inquiry Engine
├── /privacy                       # Privacy Policy & NDA Guarantees
└── /terms                         # Commercial Terms & Engagement Guidelines
```

---

## 4. Key Component Structure

Every capability detail page strictly adheres to the blueprint rule:
$$\text{Problem} \longrightarrow \text{Solution} \longrightarrow \text{Technology} \longrightarrow \text{Use Cases} \longrightarrow \text{CTA}$$

- **Zero Hallucinated Content:** In accordance with the blueprint rules, no fake client logos, synthetic case studies, fictional biographies, or fabricated metrics were added.
- **7-Day Free Trial:** Features transparent, credible scope and eligibility language.
- **Free Prototype Offering:** Transparent scope boundaries for suitable projects.
- **Equity-Based Model:** Explicitly states that commercial, IP, milestones, and legal terms are agreed in writing.

---

## 5. Development & Build Commands

### Prerequisites
- Node.js 18+ (verified on Node.js v26)
- npm 9+

### Installation
```bash
cd etdox-website
npm install
```

### Start Development Server
```bash
npm run dev
```
Access local server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 6. Integration Checklist & Needed Content

To connect this frontend to live corporate infrastructure:

1. **Lead Qualification API Endpoint:**
   - Hook point documented in `src/components/forms/LeadQualificationForm.jsx` (`handleSubmit`).
   - Connect to a backend API (e.g., `POST /api/leads`, HubSpot, or CRM webhook).
2. **Domain & DNS:**
   - Point `etdox.com` and `www.etdox.com` to your hosting provider (Vercel, Cloudflare Pages, AWS CloudFront, or Netlify).
3. **Official Social Handles:**
   - Update official LinkedIn, GitHub, and X handles in `src/components/layout/Footer.jsx`.
4. **Proprietary Products Launch:**
   - Once ETDOX's proprietary SaaS platforms exit alpha/beta, replace the "Coming Soon" status in `src/pages/Products.jsx` with live platform links and documentation.

---

© 2026 ETDOX. All rights reserved.
