// app/api/contact/route.ts
// Nodemailer handler — receives form POST, sends two emails

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const name    = body.get("name")    as string;
  const email   = body.get("email")   as string;
  const phone   = body.get("phone")   as string | null;
  const service = body.get("service") as string | null;
  const message = body.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Nodemailer transporter — Gmail + App Password from .env.local
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email 1 — notification to EnerGuard
  const toEnerGuard = {
    from: `"EnerGuard Website" <${process.env.EMAIL_USER}>`,
    to:   process.env.EMAIL_TO,
    subject: `New Enquiry from ${name} — EnerGuard Website`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0f5132;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:1.25rem;">⚡ New Contact Form Submission</h2>
        </div>
        <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#64748b;font-size:.875rem;width:120px;">Name</td><td style="padding:10px 0;color:#0f172a;font-weight:600;">${name}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:.875rem;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#10b981;">${email}</a></td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:.875rem;">Phone</td><td style="padding:10px 0;color:#0f172a;">${phone || "Not provided"}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:.875rem;">Service</td><td style="padding:10px 0;color:#0f172a;">${service || "Not specified"}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:.875rem;vertical-align:top;">Message</td><td style="padding:10px 0;color:#0f172a;line-height:1.6;">${message}</td></tr>
          </table>
        </div>
        <p style="color:#94a3b8;font-size:.75rem;text-align:center;margin-top:16px;">Sent from energuard.in contact form</p>
      </div>
    `,
  };

  // Email 2 — auto-reply to the person
  const toUser = {
    from: `"EnerGuard" <${process.env.EMAIL_USER}>`,
    to:   email,
    subject: "We received your enquiry — EnerGuard",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0f5132;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h2 style="color:#fff;margin:0;">⚡ EnerGuard</h2>
        </div>
        <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
          <p style="color:#0f172a;font-size:1rem;margin-bottom:16px;">Hi ${name},</p>
          <p style="color:#475569;line-height:1.7;margin-bottom:16px;">Thank you for reaching out to EnerGuard. We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
          <p style="color:#475569;line-height:1.7;margin-bottom:24px;">For urgent requirements, call us directly at <strong>8260623208</strong>.</p>
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:20px 24px;margin-bottom:24px;">
            <p style="color:#065f46;font-weight:600;margin:0 0 4px;">Your message:</p>
            <p style="color:#047857;margin:0;font-size:.9375rem;">${message}</p>
          </div>
          <p style="color:#94a3b8;font-size:.875rem;">
            Warm regards,<br/>
            <strong style="color:#0f172a;">The EnerGuard Team</strong><br/>
            BSK, South Bangalore, 560085<br/>
            info@energuard.in · 8260623208
          </p>
        </div>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(toEnerGuard),
      transporter.sendMail(toUser),
    ]);
    // Redirect back to contact page with success param
    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.redirect(new URL("/contact?error=true", req.url));
  }
}
