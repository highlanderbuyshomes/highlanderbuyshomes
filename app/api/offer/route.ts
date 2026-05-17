import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, address, condition, timeline, message } = body;

    if (!email || !address) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "noreply@highlanderbuyshomes.com",
      to: process.env.ADMIN_EMAIL ?? "admin@highlanderbuyshomes.com",
      subject: `New Cash Offer Request — ${address}`,
      html: `
        <h2 style="font-family:sans-serif;margin-bottom:20px">New Cash Offer Request</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666;width:140px"><strong>Name</strong></td><td style="padding:8px 12px;border:1px solid #eee">${firstName ?? ""} ${lastName ?? ""}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Email</strong></td><td style="padding:8px 12px;border:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Phone</strong></td><td style="padding:8px 12px;border:1px solid #eee">${phone ?? "—"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Address</strong></td><td style="padding:8px 12px;border:1px solid #eee">${address}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Condition</strong></td><td style="padding:8px 12px;border:1px solid #eee">${condition || "Not specified"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Timeline</strong></td><td style="padding:8px 12px;border:1px solid #eee">${timeline || "Not specified"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;color:#666"><strong>Notes</strong></td><td style="padding:8px 12px;border:1px solid #eee">${message || "None"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Offer form error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
