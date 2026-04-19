// components/Footer.tsx
// Change ONE file to update footer across every page

import Link from "next/link";

const quickLinks = [
  { href: "/about",        label: "About Us"             },
  { href: "/services",     label: "Services"             },
  { href: "/energy-audit", label: "Energy Audit"         },
  { href: "/contact",      label: "Contact"              },
];

const serviceLinks = [
  { href: "/services", label: "Energy Audits"          },
  { href: "/services", label: "ESCO Projects"          },
  { href: "/services", label: "Testing & Calibration"  },
  { href: "/services", label: "AMC & Maintenance"      },
  { href: "/services", label: "Compliance Support"     },
];

export default function Footer() {
  return (
    <footer className="bg-navy-footer border-t border-white/[0.06] pt-[72px] pb-8">
      <div className="max-w-6xl mx-auto px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] ic-2 flex items-center justify-center text-lg">⚡</div>
              <span className="text-xl font-bold text-green">EnerGuard</span>
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-[260px]">
              Delivering energy-efficient, safe, and sustainable solutions throughout a building&apos;s entire lifecycle.
            </p>
            {/* Social */}
            <div className="flex gap-2.5 mt-6">
              {["f", "𝕏", "in", "◎"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-navy-card border border-white/[0.08] rounded-lg flex items-center justify-center text-slate-500 text-sm hover:bg-green hover:text-white hover:border-green transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-slate-100 mb-5">Quick Links</h5>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-500 text-[15px] hover:text-green transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-semibold text-slate-100 mb-5">Our Services</h5>
            <ul className="space-y-2.5">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-slate-500 text-[15px] hover:text-green transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold text-slate-100 mb-5">Contact Info</h5>
            <div className="space-y-3.5">
              {[
                { icon: "📍", text: "BSK, South Bangalore, 560085", href: undefined },
                { icon: "📞", text: "8260623208", href: "tel:+918260623208" },
                { icon: "✉",  text: "info@energuard.in", href: "mailto:info@energuard.in" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green mt-0.5 text-base">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-slate-500 text-[15px] hover:text-green transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-500 text-[15px]">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-sm">© 2025 EnerGuard. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
