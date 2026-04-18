// app/layout.tsx
// Root layout — Navbar + Footer automatically on every page
// Add anything here (analytics, fonts, metadata) and it applies everywhere

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "EnerGuard — Smarter Energy, Safer Buildings",
    template: "%s | EnerGuard",
  },
  description:
    "EnerGuard delivers BEE-certified energy audits, commissioning, and efficiency strategies that reduce consumption, ensure compliance, and lower energy bills.",
  keywords: ["energy audit", "BEE certified", "energy efficiency", "ESCO", "electrical audit", "Bangalore"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
