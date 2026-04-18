// app/about/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

const stats = [
  { num: "500+", label: "Projects Completed"    },
  { num: "98%",  label: "Client Satisfaction"   },
  { num: "30%",  label: "Avg Energy Savings"    },
  { num: "24/7", label: "Support Available"     },
];

const whyUs = [
  { icon: "🌿", grad: "bg-green",  title: "End-to-End Lifecycle Support", desc: "From initial assessment to ongoing maintenance, we provide continuous support across your building's entire energy lifecycle — not just a one-time report." },
  { icon: "🏅", grad: "bg-grad-green-teal", title: "Certified Engineers & Inspectors", desc: "Highly qualified professionals with BEE certification and hands-on experience across industrial and commercial facilities across India." },
  { icon: "📊", grad: "bg-[linear-gradient(135deg,#06b6d4,#3b82f6)]", title: "Future-Proof, Sustainable Solutions", desc: "Every recommendation aligns with India's Net Zero 2070 goals, BRSR reporting requirements, and evolving BEE mandates — built to last." },
];

const team = [
  { avatar: "👨‍💼", name: "Founder & Lead Auditor",       role: "BEE Certified Energy Auditor",   bio: "15+ years of experience in electrical auditing, commissioning, and energy efficiency across commercial and industrial sectors." },
  { avatar: "👷",   name: "Senior Electrical Engineer",   role: "CEIG Licensed · HT/LT Systems",  bio: "Specialist in high-tension systems, transformer efficiency, and power factor correction across large industrial facilities." },
  { avatar: "🔬",   name: "HVAC & Thermal Specialist",    role: "Certified Energy Manager",        bio: "Expert in thermal load analysis, HVAC commissioning, and chiller plant optimisation for commercial buildings." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy-dark pt-[140px] pb-20 text-center border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            About <span className="text-green">EnerGuard</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            A team of certified engineers and energy experts committed to making India&apos;s buildings smarter, safer, and more sustainable.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-5 leading-tight">
                Built on expertise.<br />Driven by impact.
              </h2>
              <p className="text-slate-400 text-base leading-[1.8] mb-4">
                EnerGuard was founded with a single mission — to bring rigorous, instrumented energy auditing to India&apos;s commercial and industrial buildings. While most consultants hand you a report, we stay through implementation and verify every unit saved.
              </p>
              <p className="text-slate-400 text-base leading-[1.8] mb-4">
                Headquartered in South Bangalore, we work across India — helping clients cut energy costs, meet compliance mandates, and future-proof their operations.
              </p>
              <p className="text-slate-400 text-base leading-[1.8] mb-8">
                Our team holds BEE certifications, CEIG licenses, and deep expertise in ECBC compliance, PAT scheme advisory, and BRSR/ESG reporting.
              </p>
              <Link href="/contact" className="inline-block bg-green hover:bg-green-dark text-white px-7 py-3 rounded-lg font-semibold transition-colors">
                Work With Us →
              </Link>
            </div>

            {/* Stats visual */}
            <div className="bg-navy-card border border-white/[0.06] rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-navy rounded-xl p-6">
                    <div className="text-4xl font-extrabold text-green mb-1.5 tracking-tight">{s.num}</div>
                    <div className="text-slate-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy-dark py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Why Clients Choose Us</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Experience the difference of working with industry-leading experts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center px-2">
                <div className={`w-[72px] h-[72px] rounded-full ${w.grad} flex items-center justify-center text-[26px] mx-auto mb-6`}>{w.icon}</div>
                <h3 className="text-lg font-bold mb-3">{w.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Meet the Team</h2>
            <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Certified engineers and energy experts with decades of combined field experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-green/20 transition-all">
                <div className="w-[72px] h-[72px] rounded-full ic-2 flex items-center justify-center text-3xl mx-auto mb-4">{t.avatar}</div>
                <h3 className="font-bold text-base mb-1">{t.name}</h3>
                <div className="text-green text-sm font-medium mb-3">{t.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-consult-green py-20">
        <div className="max-w-6xl mx-auto px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Ready to work with us?</h2>
          <p className="text-white/80 text-[17px] mb-12">Let&apos;s discuss your building&apos;s energy efficiency goals.</p>
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
