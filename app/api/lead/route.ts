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

function formatLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

const requiredFields: Record<string, string[]> = {
  newsletter: ["name", "email"],
  audit: ["name", "email", "auditTarget", "improvementGoal"],
  estimate: ["name", "email", "projectType"],
};

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const formType = String(body?.formType || "").trim();
    const email = String(body?.email || "").trim();

    if (!formType || !requiredFields[formType]) {
      return NextResponse.json(
        { ok: false, error: "Unknown lead form type." },
        { status: 400 },
      );
    }

    const missingField = requiredFields[formType].find(
      (field) => !String(body?.[field] || "").trim(),
    );

    if (missingField) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const entries = Object.entries(body ?? {})
      .filter(([key]) => key !== "formType")
      .map(([key, value]) => ({
        label: formatLabel(key),
        value: String(value || "").trim() || "Not provided",
      }));

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
      from: `"Portfolio Lead" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New ${formatLabel(formType)} lead from ${String(body?.name || "Portfolio visitor").trim()}`,
      text: entries
        .map((entry) => `${entry.label}: ${entry.value}`)
        .join("\n"),
      html: `
        <h2>New ${escapeHtml(formatLabel(formType))} Lead</h2>
        ${entries
          .map(
            (entry) =>
              `<p><strong>${escapeHtml(entry.label)}:</strong> ${escapeHtml(entry.value)}</p>`,
          )
          .join("")}
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Lead request sent successfully.",
    });
  } catch (error) {
    console.error("Lead send error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to send request. Please try again later." },
      { status: 500 },
    );
  }
}
