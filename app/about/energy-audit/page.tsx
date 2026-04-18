// app/energy-audit/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Energy Audit" };

const auditLevels = [
  { icon: "🔍", title: "Level 1 — Walkthrough Audit",     duration: "Typically completed in 1 day",          desc: "A rapid visual assessment identifying obvious energy wastage and low-cost/no-cost measures. Ideal for first-time clients or smaller facilities." },
  { icon: "📊", title: "Level 2 — General Energy Audit",  duration: "2–5 days depending on facility size",   desc: "Detailed measurement and analysis of all major energy systems using calibrated instruments. Includes ECMs with payback calculations and implementation roadmap." },
  { icon: "🔬", title: "Level 3 — Investment Grade Audit", duration: "1–3 weeks for large facilities",        desc: "Comprehensive technical and financial analysis suitable for ESCO projects and major capital investments. Includes engineering designs and financial modelling." },
];

const process = [
  { num: "01", title: "Discovery & Scoping",      desc: "We review your utility bills, understand your facility type, and define the right audit scope and instrumentation plan." },
  { num: "02", title: "On-Site Data Collection",  desc: "Certified engineers conduct instrumented walkthroughs using power analysers, thermal cameras, ultrasonic meters, and data loggers." },
  { num: "03", title: "Analysis & Report",         desc: "Detailed audit report with prioritised Energy Conservation Measures, savings estimates, payback periods, and a phased roadmap." },
  { num: "04", title: "Implementation & M&V",     desc: "We support implementation and conduct post-intervention Measurement & Verification to confirm actual savings delivered." },
];

const measured = [
  { icon: "⚡", cls: "ic-1", title: "Electrical Systems",   desc: "HT/LT panels, transformers, DG sets, power factor, harmonics, load scheduling, and peak demand management.", tags: ["Power Quality", "Harmonics", "Load Profiling"] },
  { icon: "❄️", cls: "ic-3", title: "HVAC & Cooling",       desc: "Chiller COP, AHU efficiency, duct leakage, thermostat setpoints, and HVAC scheduling optimisation.",           tags: ["Chiller Efficiency", "AHU Analysis", "Thermal Load"] },
  { icon: "💡", cls: "ic-2", title: "Lighting",             desc: "Lux level mapping, fixture efficiency, control systems, daylight utilisation, and LED upgrade feasibility.",     tags: ["Lux Mapping", "LED Retrofit", "Controls"] },
  { icon: "⚙️", cls: "ic-4", title: "Motors & Drives",      desc: "Motor loading, efficiency class, VFD opportunities, pump and fan system analysis, and compressed air assessment.", tags: ["Motor Efficiency", "VFD Analysis", "Compressed Air"] },
];

export default function EnergyAuditPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy-dark pt-[140px] pb-20 text-center border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-green">Energy Audit</span> Services
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Instrumented, BEE-certified audits that identify exactly where your facility is losing energy — and what it will cost to fix it.
          </p>
        </div>
      </section>

      {/* AUDIT LEVELS */}
      <section className="bg-navy-dark py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Choose Your Audit Level</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Three levels aligned with BEE guidelines — from a quick walkthrough to a full investment-grade analysis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {auditLevels.map((a) => (
              <div key={a.title} className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-green/25 transition-all">
                <span className="text-5xl block mb-4">{a.icon}</span>
                <h3 className="text-lg font-bold mb-3 leading-snug">{a.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed mb-4">{a.desc}</p>
                <span className="text-green text-sm font-semibold">{a.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Our Audit Process</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">A structured four-step process from initial scoping to verified savings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* connector line — desktop only */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-green to-teal opacity-20" />
            {process.map((p) => (
              <div key={p.num} className="relative">
                <div className="w-14 h-14 rounded-full bg-navy-card border-2 border-green/30 flex items-center justify-center font-extrabold text-green text-base mb-6 relative z-10 hover:bg-green hover:text-white hover:border-green transition-all">
                  {p.num}
                </div>
                <h4 className="font-bold text-base mb-2">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE MEASURE */}
      <section className="bg-navy-dark py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">What We Measure</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Our audits cover every system that consumes energy in your facility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {measured.map((m) => (
              <div key={m.title} className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 flex gap-6 hover:-translate-y-1 hover:border-green/25 transition-all">
                <div className={`w-14 h-14 rounded-[14px] ${m.cls} flex items-center justify-center text-2xl flex-shrink-0`}>{m.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2.5">{m.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed mb-4">{m.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {m.tags.map((tag) => (
                      <span key={tag} className="bg-green/10 border border-green/20 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-consult-green py-20">
        <div className="max-w-6xl mx-auto px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Ready to schedule your audit?</h2>
          <p className="text-white/80 text-[17px] mb-12">Get a free assessment call — we&apos;ll scope the right audit level and give you a clear quote.</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 items-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-5">Schedule an Energy Audit</h3>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-green transition-all">Get Free Assessment →</Link>
            </div>
            <div className="hidden md:block h-20 bg-white/25" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-5">Talk to a Certified Auditor</h3>
              <a href="tel:+918260623208" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-white/60 hover:border-white transition-all">Call Us Now →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
