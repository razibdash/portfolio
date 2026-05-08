import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: 'Message validated successfully. Connect this route to an email service for production.' });
}
