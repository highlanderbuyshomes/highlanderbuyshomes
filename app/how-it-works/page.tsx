import type { Metadata } from "next";
import Link from "next/link";
import OfferForm from "@/components/OfferForm";

export const metadata: Metadata = {
  title: "How It Works | Highlander Buys Homes",
  description:
    "Get a cash offer on your home in 3 simple steps. No repairs, no showings, no fees. We close in as little as 14 days in Phoenix, AZ and Dallas, TX.",
};

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Home",
    body: "Enter your property address and answer a few quick questions about your home's condition and your timeline. No commitment required — it takes less than 3 minutes.",
    details: [
      "Current property condition (any condition is fine)",
      "Your reason for selling — helps us tailor the offer",
      "Your preferred closing timeline",
    ],
  },
  {
    n: "02",
    title: "Receive Your Cash Offer",
    body: "Our team reviews your property details and local market data to put together a competitive, all-cash offer. We'll follow up within 24 hours with a clear, no-obligation number.",
    details: [
      "No repairs or cleaning required beforehand",
      "Transparent offer — we explain how we got there",
      "Zero obligation to accept",
    ],
  },
  {
    n: "03",
    title: "Close on Your Timeline",
    body: "You choose the closing date that works for you. We can close in as little as 14 days, or give you more time if you need it. We handle all the paperwork — you just show up.",
    details: [
      "Close in 14 days or set your own date",
      "We cover all standard closing costs",
      "Cash deposited directly at closing",
    ],
  },
];

const faqs = [
  {
    q: "How is my offer calculated?",
    a: "We analyze comparable sales in your area, current market conditions, and your property's condition to arrive at a fair cash offer. We aim to be competitive — not a lowball number.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "No. There are no agent commissions and no hidden fees. We cover standard closing costs. The number we offer is the number you receive.",
  },
  {
    q: "Do I need to make repairs first?",
    a: "Never. We buy homes in as-is condition. Whether your home needs cosmetic touch-ups or major repairs, your offer reflects the property as it stands today.",
  },
  {
    q: "What if I'm not ready to sell right away?",
    a: "That's fine. Once you receive your offer there's no deadline to accept. If you'd like a longer closing window — 60, 90, even 120 days — we can accommodate that.",
  },
  {
    q: "Which areas do you buy in?",
    a: "We currently buy in the Phoenix, AZ metro (Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, and surrounding areas) and the Dallas–Fort Worth, TX metroplex.",
  },
  {
    q: "How is this different from a regular listing?",
    a: "When you list, you're waiting for a buyer who may or may not get financing, may demand repairs, and may back out. With us, you get a guaranteed cash offer and choose exactly when to close — no uncertainty.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ paddingBottom: "80px" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>Simple &amp; Transparent</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "var(--white)", letterSpacing: "3px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "22px" }}>
            HOW IT WORKS
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "500px", lineHeight: 1.8, fontWeight: 300 }}>
            Three straightforward steps from offer to close. No surprises, no runaround.
          </p>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: "36px",
                alignItems: "start",
                padding: "48px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border-light)" : "none",
              }}
            >
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--blue-light)", border: "2px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--blue)", letterSpacing: "1px" }}>{s.n}</span>
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--black)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "22px" }}>{s.body}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.details.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "var(--mid)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7.5" fill="var(--blue-light)" />
                        <path d="M5 8l2.2 2.2 3.8-3.8" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span className="section-label">Common Questions</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
                FAQ
              </h2>
            </div>

            {faqs.map((item, i) => (
              <div key={item.q} style={{ paddingTop: "26px", paddingBottom: "26px", borderBottom: i < faqs.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--black)", marginBottom: "10px" }}>{item.q}</h3>
                <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "16px" }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 36px", lineHeight: 1.75 }}>
            Enter your address for a free, no-obligation cash offer within 24 hours.
          </p>
          <OfferForm />
        </div>
      </section>
    </>
  );
}
