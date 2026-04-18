// app/services/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

const services = [
  {
    icon: "⚡", cls: "ic-1",
    title: "Energy & Electrical Audits",
    desc: "Comprehensive instrumented assessments covering HT/LT systems, load profiling, power quality analysis, and electrical safety — identifying every source of waste and hazard.",
    tags: ["Load Analysis", "Power Quality", "HT/LT Systems", "Safety Audit"],
  },
  {
    icon: "📈", cls: "ic-2",
    title: "Energy Efficiency & ESCO Projects",
    desc: "End-to-end Energy Service Company solutions — we design, finance, implement, and verify energy-saving measures with guaranteed savings tied to performance contracts.",
    tags: ["Guaranteed Savings", "Performance Contracts", "Project Finance"],
  },
  {
    icon: "🛡️", cls: "ic-3",
    title: "Testing & Calibration",
    desc: "Precise testing and calibration of electrical and mechanical equipment — ensuring meters, protection systems, and instruments operate accurately within compliance norms.",
    tags: ["Meter Calibration", "Relay Testing", "Transformer Testing"],
  },
  {
    icon: "👥", cls: "ic-4",
    title: "AMC & Preventive Maintenance",
    desc: "Scheduled annual maintenance contracts with predictive maintenance protocols — reducing downtime, extending equipment lifespan, and keeping systems at peak efficiency.",
    tags: ["Annual Contracts", "Predictive Maintenance", "24/7 Support"],
  },
  {
    icon: "🏅", cls: "ic-5",
    title: "Licensing & Regulatory Compliance",
    desc: "Expert navigation of India's complex electrical regulatory landscape — from BEE and ECBC compliance to CEIG licenses, state electrical inspector approvals, and DISCOM documentation.",
    tags: ["BEE Compliance", "ECBC", "CEIG Licensing", "DISCOM Approvals"],
  },
  {
    icon: "☀️", cls: "ic-2",
    title: "Renewable Energy Advisory",
    desc: "Pre-feasibility studies and yield assessments for rooftop solar and captive wind — including net metering guidance, DISCOM liaison, and BRSR/ESG documentation support.",
    tags: ["Solar Assessment", "Net Metering", "BRSR Reporting"],
  },
];

const stats = [
  { num: "500+", label: "Projects Completed"    },
  { num: "98%",  label: "Client Satisfaction"   },
  { num: "30%",  label: "Average Energy Savings" },
  { num: "24/7", label: "Support Available"     },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy-dark pt-[140px] pb-20 text-center border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Our <span className="text-green">Services</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Comprehensive energy and electrical solutions designed to optimise performance, ensure compliance, and reduce costs across your entire facility.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-navy-dark py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 flex gap-6 hover:-translate-y-1 hover:border-green/25 transition-all"
              >
                <div className={`w-14 h-14 rounded-[14px] ${s.cls} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2.5 leading-snug">{s.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green/10 border border-green/20 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy py-14">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center py-4 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}>
                <div className="text-4xl font-extrabold text-green mb-2 tracking-tight">{s.num}</div>
                <div className="text-[15px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-consult-green py-20">
        <div className="max-w-6xl mx-auto px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Not sure which service you need?</h2>
          <p className="text-white/80 text-[17px] mb-12">Talk to one of our experts — we&apos;ll assess your facility and recommend the right starting point.</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 items-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-5">Schedule an Energy Audit</h3>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-green transition-all">Get Free Assessment →</Link>
            </div>
            <div className="hidden md:block h-20 bg-white/25" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-5">Talk to a Compliance Expert</h3>
              <a href="tel:+918260623208" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-white/60 hover:border-white transition-all">Contact Expert →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
