import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      dates?: string;
      message?: string;
      website?: string;
    };

    // Honeypot field for spam bots.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    if (!body.name?.trim()) {
      return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
    }

    if (!body.email?.trim() || !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 });
    }

    if (!body.message?.trim() || body.message.trim().length < 10) {
      return NextResponse.json(
        { ok: false, error: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    // Placeholder for delivery provider integration (Resend, SendGrid, etc).
    // Keeps UX functional today and provides a stable server contract for phase 2.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }
}
