import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return NextResponse.json({ error: "Email is not configured on the server" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      reply_to: email,
    } as any);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Resend error:", error);
      const message = (error as any)?.message || (typeof error === 'string' ? error : undefined) || "Email send failed";
      return NextResponse.json({ error: message, raw: error }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Contact API error:", error);
    const message = (error as any)?.message || (typeof error === 'string' ? error : undefined) || "Failed to send";
    return NextResponse.json({ error: message, raw: error }, { status: 500 });
  }
}


