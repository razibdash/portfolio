import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(body.email)) {
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
      replyTo: body.email,
      subject: `New message from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}

Message:
${body.message}
      `,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
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
