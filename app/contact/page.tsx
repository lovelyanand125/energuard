// app/contact/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const contactDetails = [
  { icon: "📍", label: "Address",        value: "BSK, South Bangalore, 560085",  href: undefined },
  { icon: "📞", label: "Phone",          value: "8260623208",                    href: "tel:+918260623208" },
  { icon: "✉",  label: "Email",          value: "info@energuard.in",             href: "mailto:info@energuard.in" },
  { icon: "🕐", label: "Business Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM IST", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-navy-dark pt-[140px] pb-20 text-center border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Get in <span className="text-green">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Ready to optimise your building&apos;s energy efficiency? Let&apos;s start with a free discovery call.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14">

            {/* LEFT — Info */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Let&apos;s discuss your energy goals</h2>
              <p className="text-slate-400 text-base leading-[1.8] mb-10">
                Whether you need a quick walkthrough audit or a full ESCO project, we start by understanding your facility and recommending the right path forward — no obligation.
              </p>

              <div className="space-y-7">
                {contactDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green/10 border border-green/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <strong className="block font-semibold text-slate-100 mb-0.5">{d.label}</strong>
                      {d.href ? (
                        <a href={d.href} className="text-slate-400 text-[15px] hover:text-green transition-colors">{d.value}</a>
                      ) : (
                        <span className="text-slate-400 text-[15px]">{d.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-navy-card border border-white/[0.06] rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-slate-400 text-[15px] mb-8">We&apos;ll get back to you within 24 hours.</p>

              {/*
                Form POSTs to /api/contact (Next.js API route in app/api/contact/route.ts)
                The API route handles Nodemailer and returns JSON.
                To keep this page a Server Component, the form submission is handled
                via the native HTML action — works without any client-side JS.
              */}
              <form action="/api/contact" method="POST" className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text" name="name" required placeholder="Your full name"
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-[15px] placeholder-slate-600 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email" name="email" required placeholder="your@email.com"
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-[15px] placeholder-slate-600 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" placeholder="+91 98765 43210"
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-[15px] placeholder-slate-600 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Service Required</label>
                    <select
                      name="service"
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-[15px] focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Energy &amp; Electrical Audit</option>
                      <option>ESCO Project</option>
                      <option>Testing &amp; Calibration</option>
                      <option>AMC &amp; Preventive Maintenance</option>
                      <option>Licensing &amp; Regulatory Compliance</option>
                      <option>Renewable Energy Advisory</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Tell us about your facility, current energy challenges, or what you're looking to achieve..."
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-[15px] placeholder-slate-600 focus:outline-none focus:border-green focus:ring-1 focus:ring-green/30 transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green hover:bg-green-dark text-white py-4 rounded-lg font-semibold text-base transition-colors"
                >
                  Send Message →
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
