// app/page.tsx  —  Homepage

import Link from "next/link";

// ── Reusable data ──────────────────────────────────────────
const stats = [
  { num: "500+", label: "Projects Completed"   },
  { num: "98%",  label: "Client Satisfaction"  },
  { num: "30%",  label: "Average Energy Savings"},
  { num: "24/7", label: "Support Available"    },
];

const services = [
  {
    icon: "⚡", cls: "ic-1",
    title: "Energy & Electrical Audits",
    desc:  "Comprehensive assessments to identify energy inefficiencies and electrical safety issues across HT/LT systems, load profiling, and power quality analysis.",
  },
  {
    icon: "📈", cls: "ic-2",
    title: "Energy Efficiency & ESCO Projects",
    desc:  "Complete energy service company solutions with guaranteed savings — from design and financing through to implementation and performance verification.",
  },
  {
    icon: "🛡️", cls: "ic-3",
    title: "Testing & Calibration",
    desc:  "Precise testing and calibration services for all electrical and mechanical systems — ensuring accuracy, safety, and regulatory compliance.",
  },
  {
    icon: "👥", cls: "ic-4",
    title: "AMC & Preventive Maintenance",
    desc:  "Annual maintenance contracts to keep your systems running at peak efficiency — with scheduled inspections and rapid response support.",
  },
  {
    icon: "🏅", cls: "ic-5",
    title: "Licensing & Regulatory Compliance",
    desc:  "Expert guidance through BEE, ECBC, CEIG, and state electrical inspector approvals — handled end-to-end.",
  },
];

const whyUs = [
  {
    icon: "🌿", grad: "bg-green",
    title: "End-to-End Lifecycle Support",
    desc:  "From initial assessment to ongoing maintenance, we provide continuous support across your building's entire energy lifecycle — not just a one-time report.",
  },
  {
    icon: "🏅", grad: "bg-grad-green-teal",
    title: "Certified Engineers & Inspectors",
    desc:  "Highly qualified professionals with BEE certification and hands-on experience across industrial and commercial facilities across India.",
  },
  {
    icon: "📊", grad: "bg-[linear-gradient(135deg,#06b6d4,#3b82f6)]",
    title: "Future-Proof, Sustainable Solutions",
    desc:  "Every recommendation aligns with India's Net Zero 2070 goals, BRSR reporting requirements, and evolving BEE mandates — built to last.",
  },
];

// ── Page ───────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-[72px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.72) 60%, rgba(15,23,42,1) 100%), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-5">
            <span className="animate-grad-text">Smarter Energy,</span>
            <br />
            Safer Buildings
          </h1>
          <p className="text-xl font-semibold text-slate-300 mb-3">
            Efficiency Solutions for Every Stage
          </p>
          <p className="text-[17px] text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Delivering energy-efficient, safe, and sustainable solutions throughout your building&apos;s entire lifecycle.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors"
            >
              Schedule Free Energy Audit →
            </Link>
            <Link
              href="/contact"
              className="bg-navy/70 hover:bg-white/10 text-slate-100 px-8 py-3.5 rounded-lg font-semibold text-base border border-white/15 hover:border-white/30 transition-all"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="bg-navy py-14">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-4 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}
              >
                <div className="text-4xl font-extrabold text-green mb-2 tracking-tight">
                  {s.num}
                </div>
                <div className="text-[15px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="bg-navy-dark py-24" id="services">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Our Core Services</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto leading-relaxed">
              Comprehensive solutions designed to optimise your building&apos;s performance and ensure compliance.
            </p>
          </div>

          {/* 3-col grid; 5th card auto-centres on last row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 hover:-translate-y-1 hover:border-green/25 hover:shadow-2xl transition-all"
              >
                <div className={`w-14 h-14 rounded-[14px] ${s.cls} flex items-center justify-center text-2xl mb-5`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2.5 leading-snug">{s.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="bg-green hover:bg-green-dark text-white px-7 py-3 rounded-lg font-semibold text-[15px] transition-colors inline-block">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────── */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Why Clients Choose Us</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">
              Experience the difference of working with industry-leading experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center px-2">
                <div className={`w-[72px] h-[72px] rounded-full ${w.grad} flex items-center justify-center text-[26px] mx-auto mb-6`}>
                  {w.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{w.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-consult-green py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white">
              Request a Consultation
            </h2>
            <p className="text-white/80 text-[17px] mb-12 leading-relaxed">
              Ready to optimise your building&apos;s energy efficiency and ensure compliance? Let&apos;s discuss your specific needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 items-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-5">Schedule an Energy Audit</h3>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-green hover:border-green-dark transition-all">
                  Get Free Assessment →
                </Link>
              </div>
              <div className="hidden md:block h-20 bg-white/25" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-5">Talk to a Building Compliance Expert</h3>
                <a href="tel:+918260623208" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-white/60 hover:border-white transition-all">
                  Contact Expert →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
