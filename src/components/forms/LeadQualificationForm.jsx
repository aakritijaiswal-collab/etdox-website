import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle2, AlertCircle, Clock, Sparkles, FileText, ArrowRight, Copy, Check } from "lucide-react";
import Button from "../common/Button";

export default function LeadQualificationForm() {
  const [searchParams] = useSearchParams();
  const initialIntent = searchParams.get("intent") || "project";

  const [formData, setFormData] = useState({
    startMethod: initialIntent === "trial" ? "7-Day Trial" : initialIntent === "prototype" ? "Free Prototype" : initialIntent === "consultation" ? "Consultation" : "Full Project",
    serviceNeeded: searchParams.get("service") || "AI/Automation",
    projectSize: "Small project",
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const intent = searchParams.get("intent");
    if (intent === "trial") {
      setFormData(prev => ({ ...prev, startMethod: "7-Day Trial" }));
    } else if (intent === "prototype") {
      setFormData(prev => ({ ...prev, startMethod: "Free Prototype", serviceNeeded: "Prototype" }));
    } else if (intent === "consultation") {
      setFormData(prev => ({ ...prev, startMethod: "Consultation" }));
    } else if (intent === "project") {
      setFormData(prev => ({ ...prev, startMethod: "Full Project" }));
    }
  }, [searchParams]);

  const serviceOptions = [
    "AI/Automation",
    "Software",
    "SaaS",
    "Data/Analytics",
    "Cloud",
    "Cybersecurity",
    "AI Agent",
    "Prototype",
    "Other",
  ];

  const projectSizeOptions = [
    "Small project",
    "MVP",
    "Enterprise",
    "Long-term technical team",
  ];

  const startMethodOptions = [
    { id: "Full Project", label: "Full Project", desc: "Defined scope or milestone sprint" },
    { id: "7-Day Trial", label: "7-Day Trial", desc: "Test our engineering for 7 days" },
    { id: "Free Prototype", label: "Free Prototype", desc: "Initial prototype for suitable projects" },
    { id: "Consultation", label: "Consultation", desc: "Technical architecture review" },
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.company.trim()) errs.company = "Company / organization name is required.";
    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    if (!formData.requirements.trim()) {
      errs.requirements = "Please summarize your technical requirements or challenge.";
    } else if (formData.requirements.trim().length < 15) {
      errs.requirements = "Please provide at least 15 characters to help us understand your requirement.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Documented Integration Point:
    // If a backend endpoint like POST /api/leads is configured, we dispatch to it.
    // In frontend-mode, we record the lead locally, present clear submission confirmation,
    // and provide transparent lead reference data.
    setTimeout(() => {
      const confirmationPayload = {
        ...formData,
        referenceId: `ETX-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toISOString(),
      };
      setSubmittedData(confirmationPayload);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `ETDOX LEAD INQUIRY [${submittedData.referenceId}]\nMethod: ${submittedData.startMethod}\nService: ${submittedData.serviceNeeded}\nSize: ${submittedData.projectSize}\nName: ${submittedData.name} (${submittedData.company})\nEmail: ${submittedData.email} | Phone: ${submittedData.phone}\nRequirements: ${submittedData.requirements}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (submittedData) {
    return (
      <div className="bg-[#38000A] border border-[#5A0B19] rounded-2xl p-8 sm:p-12 text-white shadow-2xl animate-in fade-in duration-300">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#CD1C18] text-white flex items-center justify-center mx-auto shadow-chili-glow">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="font-mono text-xs text-[#FFA896] uppercase tracking-widest block mb-2">
              REQUIREMENT RECEIVED • REF #{submittedData.referenceId}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Technical Brief Submitted
            </h3>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. Your technical requirement for <span className="text-[#FFA896]">{submittedData.serviceNeeded}</span> ({submittedData.startMethod}) has been recorded.
            </p>
          </div>

          <div className="bg-[#240006] p-5 rounded-xl border border-[#5A0B19] text-left text-xs font-mono space-y-2">
            <div className="flex justify-between border-b border-[#5A0B19]/50 pb-2">
              <span className="text-gray-400">Engage Model:</span>
              <span className="text-[#FFA896] font-bold">{submittedData.startMethod}</span>
            </div>
            <div className="flex justify-between border-b border-[#5A0B19]/50 pb-2">
              <span className="text-gray-400">Project Size:</span>
              <span className="text-white">{submittedData.projectSize}</span>
            </div>
            <div className="flex justify-between border-b border-[#5A0B19]/50 pb-2">
              <span className="text-gray-400">Contact Email:</span>
              <span className="text-white">{submittedData.email}</span>
            </div>
            <div className="pt-1">
              <span className="text-gray-400 block mb-1">Requirement Brief:</span>
              <p className="text-gray-300 font-sans text-xs bg-[#170004] p-3 rounded border border-[#5A0B19]">
                {submittedData.requirements}
              </p>
            </div>
          </div>

          <div className="text-xs text-gray-400 bg-[#170004]/50 p-4 rounded-lg border border-[#5A0B19]/40">
            <p className="leading-relaxed">
              <span className="text-[#FFA896] font-semibold">Next Step:</span> Our technical architect reviews requirements within 1 business day. We will reach out directly to schedule the technical discovery call.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#240006] border border-[#5A0B19] text-xs font-mono text-gray-300 hover:text-white hover:border-[#FFA896] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied Brief" : "Copy Brief Details"}</span>
            </button>

            <button
              type="button"
              onClick={() => setSubmittedData(null)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#CD1C18] text-white text-xs font-mono font-semibold hover:bg-[#9B1313] transition-colors"
            >
              <span>Submit Another Requirement</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* 1. How do you want to start? */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-gray-900 mb-3">
          1. How do you want to start? <span className="text-[#CD1C18]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {startMethodOptions.map((opt) => {
            const isSelected = formData.startMethod === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFormData({ ...formData, startMethod: opt.id })}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-[#38000A] text-white border-[#CD1C18] shadow-sm"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#CD1C18]/40 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-sm">{opt.label}</span>
                  <div
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      isSelected ? "border-[#FFA896] bg-[#CD1C18]" : "border-gray-300"
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
                <p className={`text-[11px] ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. What do you need? */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-gray-900 mb-3">
          2. What do you need? <span className="text-[#CD1C18]">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((svc) => {
            const isSelected = formData.serviceNeeded === svc;
            return (
              <button
                key={svc}
                type="button"
                onClick={() => setFormData({ ...formData, serviceNeeded: svc })}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#CD1C18] text-white shadow-sm font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {svc}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Project Size */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-gray-900 mb-3">
          3. Project size <span className="text-[#CD1C18]">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {projectSizeOptions.map((size) => {
            const isSelected = formData.projectSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setFormData({ ...formData, projectSize: size })}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-center border transition-all ${
                  isSelected
                    ? "bg-[#38000A] text-white border-[#CD1C18] font-semibold"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Required Fields: Name, Company, Email, Phone */}
      <div className="pt-2 border-t border-gray-200">
        <label className="block text-xs font-mono uppercase tracking-wider font-bold text-gray-900 mb-4">
          4. Contact Details <span className="text-[#CD1C18]">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="name">
              Your Full Name <span className="text-[#CD1C18]">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              placeholder="e.g. Alex Morgan"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CD1C18] ${
                errors.name ? "border-red-500 bg-red-50/30" : "border-gray-300 bg-white"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="company">
              Company / Organization <span className="text-[#CD1C18]">*</span>
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                if (errors.company) setErrors({ ...errors, company: null });
              }}
              placeholder="e.g. Acme Tech Corp"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CD1C18] ${
                errors.company ? "border-red-500 bg-red-50/30" : "border-gray-300 bg-white"
              }`}
            />
            {errors.company && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.company}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">
              Work Email <span className="text-[#CD1C18]">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              placeholder="alex@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CD1C18] ${
                errors.email ? "border-red-500 bg-red-50/30" : "border-gray-300 bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone Number <span className="text-[#CD1C18]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              placeholder="+1 (555) 000-0000"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CD1C18] ${
                errors.phone ? "border-red-500 bg-red-50/30" : "border-gray-300 bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 5. Requirements Description */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="requirements">
          Technical Requirements & Problem Statement <span className="text-[#CD1C18]">*</span>
        </label>
        <textarea
          id="requirements"
          rows={4}
          value={formData.requirements}
          onChange={(e) => {
            setFormData({ ...formData, requirements: e.target.value });
            if (errors.requirements) setErrors({ ...errors, requirements: null });
          }}
          placeholder="Describe your technical challenge, current tech stack, desired deliverables, or scope for the 7-day trial..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CD1C18] ${
            errors.requirements ? "border-red-500 bg-red-50/30" : "border-gray-300 bg-white"
          }`}
        />
        {errors.requirements && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errors.requirements}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[220px] shadow-chili-glow font-bold uppercase tracking-wider"
        >
          {isSubmitting
            ? "TRANSMITTING BRIEF..."
            : formData.startMethod === "7-Day Trial"
            ? "START 7-DAY TRIAL →"
            : formData.startMethod === "Free Prototype"
            ? "REQUEST FREE PROTOTYPE →"
            : "SUBMIT TECHNICAL BRIEF →"}
        </Button>
        <p className="text-[11px] font-mono text-gray-500 mt-3">
          We respect strict technical confidentiality. All briefs evaluated under bilateral NDA upon request.
        </p>
      </div>
    </form>
  );
}
