import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-[72px]"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(15,23,42,0.55) 0%, rgba(15,23,42,1) 100%), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-5">
            <span className="animate-grad-text">Smarter Energy,</span>
            <br />Safer Buildings
          </h1>
          <p className="text-xl font-semibold text-slate-300 mb-3">
            Efficiency Solutions for Every Stage
          </p>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Delivering energy-efficient, safe, and sustainable solutions throughout your building&apos;s entire lifecycle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-green hover:bg-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Energy Audit →
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "98%",  label: "Client Satisfaction" },
              { num: "30%",  label: "Average Energy Savings" },
              { num: "24/7", label: "Support Available" },
            ].map((s, i) => (
              <div key={s.label} className={`text-center py-4 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}>
                <div className="text-4xl font-extrabold text-green mb-2">{s.num}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Our Core Services</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Comprehensive solutions designed to optimise your building&apos;s performance and ensure compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "⚡", cls: "ic-1", title: "Energy & Electrical Audits",           desc: "Comprehensive assessments to identify energy inefficiencies and electrical safety issues across HT/LT systems." },
              { icon: "📈", cls: "ic-2", title: "Energy Efficiency & ESCO Projects",    desc: "Complete ESCO solutions with guaranteed savings — from design and financing to implementation." },
              { icon: "🛡️", cls: "ic-3", title: "Testing & Calibration",                desc: "Precise testing for all electrical and mechanical systems ensuring accuracy and regulatory compliance." },
              { icon: "👥", cls: "ic-4", title: "AMC & Preventive Maintenance",         desc: "Annual maintenance contracts to keep your systems at peak efficiency with rapid response support." },
              { icon: "🏅", cls: "ic-5", title: "Licensing & Regulatory Compliance",    desc: "Expert guidance through BEE, ECBC, CEIG, and state electrical inspector approvals end-to-end." },
            ].map((s) => (
              <div key={s.title} className="bg-navy-card border border-white/[0.06] rounded-2xl p-8 hover:-translate-y-1 hover:border-green/25 hover:shadow-2xl transition-all">
                <div className={`w-14 h-14 rounded-2xl ${s.cls} flex items-center justify-center text-2xl mb-5`}>{s.icon}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-green hover:bg-green-dark text-white px-7 py-3 rounded-lg font-semibold transition-colors inline-block">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-consult-green py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Request a Consultation</h2>
          <p className="text-white/80 text-lg mb-12">Ready to optimise your building&apos;s energy efficiency? Let&apos;s discuss your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-5">Schedule an Energy Audit</h3>
              <Link href="/contact" className="inline-block bg-green hover:bg-green-dark text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-green transition-all">
                Get Free Assessment →
              </Link>
            </div>
            <div className="hidden md:block h-20 bg-white/25" />
            <div>
              <h3 className="text-xl font-bold text-white mb-5">Talk to a Compliance Expert</h3>
              <a href="tel:+918260623208" className="inline-block bg-transparent hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold border-2 border-white/60 hover:border-white transition-all">
                Contact Expert →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}