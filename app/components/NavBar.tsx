// components/Navbar.tsx
// Change ONE file to update nav across every page

import Link from "next/link";

const links = [
  { href: "/",              label: "Home"         },
  { href: "/about",         label: "About"        },
  { href: "/services",      label: "Services"     },
  { href: "/energy-audit",  label: "Energy Audit" },
  { href: "/contact",       label: "Contact"      },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[10px] ic-2 flex items-center justify-center text-lg">
            ⚡
          </div>
          <span className="text-xl font-bold text-green tracking-tight">
            EnerGuard
          </span>
        </Link>

        {/* Nav links — desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-slate-400 hover:text-green transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-green hover:bg-green-dark text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] transition-colors"
        >
          Get a Demo
        </Link>

      </div>
    </nav>
  );
}
