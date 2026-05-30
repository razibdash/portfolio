import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const payload = {
      name: String(body?.name || "").trim(),
      email: String(body?.email || "").trim(),
      reason: String(body?.reason || "").trim(),
      message: String(body?.message || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.reason || !payload.message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, reason, and message are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: payload.email,
      subject: `New ${payload.reason} message from ${payload.name}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}
Reason: ${payload.reason}

Message:
${payload.message}
      `,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Reason:</strong> ${escapeHtml(payload.reason)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
