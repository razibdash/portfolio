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
      phone: String(body?.phone || "").trim(),
      company: String(body?.company || "").trim(),
      projectType: String(body?.projectType || body?.reason || "").trim(),
      budgetRange: String(body?.budgetRange || "").trim(),
      timeline: String(body?.timeline || "").trim(),
      projectDetails: String(body?.projectDetails || body?.message || "").trim(),
      preferredContactMethod: String(body?.preferredContactMethod || "").trim(),
    };
    const isProjectRequest = Boolean(
      body?.projectType ||
        body?.budgetRange ||
        body?.timeline ||
        body?.projectDetails ||
        body?.preferredContactMethod,
    );

    if (!payload.name || !payload.email || !payload.projectType || !payload.projectDetails) {
      return NextResponse.json(
        { ok: false, error: "Name, email, project type, and project details are required." },
        { status: 400 },
      );
    }

    if (
      isProjectRequest &&
      (!payload.phone ||
        !payload.budgetRange ||
        !payload.timeline ||
        !payload.preferredContactMethod)
    ) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required project request fields." },
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

    if (isProjectRequest && payload.phone.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid WhatsApp or phone number." },
        { status: 400 },
      );
    }

    if (isProjectRequest && payload.projectDetails.length < 20) {
      return NextResponse.json(
        { ok: false, error: "Please add a few more project details." },
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
      subject: `New ${payload.projectType} project request from ${payload.name}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}
WhatsApp / Phone: ${payload.phone || "Not provided"}
Company / Business: ${payload.company || "Not provided"}
Project Type: ${payload.projectType}
Budget Range: ${payload.budgetRange || "Not provided"}
Timeline: ${payload.timeline || "Not provided"}
Preferred Contact Method: ${payload.preferredContactMethod || "Not provided"}

Project Details:
${payload.projectDetails}
      `,
      html: `
        <h2>New Portfolio Project Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>WhatsApp / Phone:</strong> ${escapeHtml(payload.phone || "Not provided")}</p>
        <p><strong>Company / Business:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(payload.projectType)}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(payload.budgetRange || "Not provided")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline || "Not provided")}</p>
        <p><strong>Preferred Contact Method:</strong> ${escapeHtml(payload.preferredContactMethod || "Not provided")}</p>
        <p><strong>Project Details:</strong></p>
        <p>${escapeHtml(payload.projectDetails).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Project request sent successfully.",
    });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
