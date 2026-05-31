import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

async function pushToGHL(data: Record<string, string>) {
  const webhookUrl = process.env.GHL_AGENT_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        email: data.email ?? "",
        phone: data.phone ?? "",
        company: data.company ?? "",
        role: data.role ?? "",
        address: data.address ?? "",
        askingPrice: data.askingPrice ?? "",
        condition: data.condition ?? "",
        timeline: data.timeline ?? "",
        compensation: data.compensation ?? "",
        notes: data.notes ?? "",
        photoLink: data.photoLink ?? "",
        source: "Highlander Buys Homes — Agent/Wholesaler Form",
        optIn: new Date().toISOString(),
      }),
    });
  } catch { /* non-blocking */ }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;
    const { firstName, lastName, email, phone, company, role, address, askingPrice, condition, timeline, compensation, photoLink, notes } = body;

    if (!email || !address) return NextResponse.json({ ok: false }, { status: 400 });

    const roleLabel = role === "wholesaler" ? "Wholesaler" : "Real Estate Agent";
    const compensationLabel = role === "wholesaler" ? "Assignment Fee" : "Commission";

    await Promise.allSettled([
      pushToGHL(body),
      new Resend(process.env.RESEND_API_KEY).emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "noreply@highlanderbuyshomes.com",
        to: process.env.ADMIN_EMAIL ?? "admin@highlanderbuyshomes.com",
        subject: `New Deal Submission — ${roleLabel} — ${address}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px">
            <div style="background:#111110;padding:18px 24px;border-radius:8px 8px 0 0">
              <p style="font-size:10px;color:#888;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 4px">Highlander</p>
              <p style="font-size:20px;font-family:Georgia,serif;color:#fff;letter-spacing:3px;margin:0">BUYS HOMES<span style="color:#1a56db">.</span></p>
            </div>
            <div style="background:#fafaf8;border:1px solid #e8e7e2;border-top:none;border-radius:0 0 8px 8px;padding:28px 24px">
              <h2 style="font-size:18px;color:#111;margin:0 0 20px">New Deal Submission — ${roleLabel}</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;width:140px">Role</td><td style="padding:8px 0;font-size:14px;color:#111;font-weight:600">${roleLabel}</td></tr>
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Name</td><td style="padding:8px 0;font-size:14px;color:#111">${firstName ?? ""} ${lastName ?? ""}</td></tr>
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Email</td><td style="padding:8px 0;font-size:14px;color:#111"><a href="mailto:${email}" style="color:#1a56db">${email}</a></td></tr>
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Phone</td><td style="padding:8px 0;font-size:14px;color:#111">${phone ?? "—"}</td></tr>
                ${company ? `<tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Company</td><td style="padding:8px 0;font-size:14px;color:#111">${company}</td></tr>` : ""}
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Property</td><td style="padding:8px 0;font-size:14px;color:#111;font-weight:600">${address}</td></tr>
                ${askingPrice ? `<tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Asking Price</td><td style="padding:8px 0;font-size:14px;color:#111">${askingPrice}</td></tr>` : ""}
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Condition</td><td style="padding:8px 0;font-size:14px;color:#111">${condition || "Not specified"}</td></tr>
                <tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Timeline</td><td style="padding:8px 0;font-size:14px;color:#111">${timeline || "Not specified"}</td></tr>
                ${compensation ? `<tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">${compensationLabel}</td><td style="padding:8px 0;font-size:14px;color:#111">${compensation}</td></tr>` : ""}
                ${photoLink ? `<tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Photos</td><td style="padding:8px 0;font-size:14px;color:#111"><a href="${photoLink}" style="color:#1a56db">${photoLink}</a></td></tr>` : ""}
                ${notes ? `<tr style="border-top:1px solid #e8e7e2"><td style="padding:8px 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px">Notes</td><td style="padding:8px 0;font-size:14px;color:#111">${notes}</td></tr>` : ""}
              </table>
              <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e8e7e2;font-size:12px;color:#aaa">
                Submitted via highlanderbuyshomes.com/for-agents/submit · ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })}
              </div>
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Agent offer error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
